#!/usr/bin/env python3
"""
Convert all images in public/images to WebP format for optimization.
This script converts JPEG and PNG files to WebP with quality settings.
"""

import os
import sys
from pathlib import Path
from PIL import Image

# Quality settings for WebP conversion
# 75-85 is good balance between quality and file size
QUALITY = 80

# Directories to skip (they contain source art or special files)
SKIP_DIRS = {'.git', '__pycache__', '.venv', 'node_modules', 'od-export'}


def is_image_file(filepath: Path) -> bool:
    """Check if a file is a supported image format."""
    extensions = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'}
    return filepath.suffix.lower() in extensions


def should_skip_directory(filepath: Path, base_path: Path) -> bool:
    """Check if the file is in a directory that should be skipped."""
    try:
        rel_path = filepath.relative_to(base_path)
        for part in rel_path.parts[:-1]:  # Exclude filename itself
            if part in SKIP_DIRS:
                return True
    except ValueError:
        return True
    return False


def convert_to_webp(source_path: Path, quality: int = QUALITY) -> Path | None:
    """
    Convert an image to WebP format.
    Returns the path to the converted file, or None if conversion failed.
    """
    output_path = source_path.with_suffix('.webp')
    
    # Skip if already converted
    if output_path.exists():
        print(f"  Skipped (exists): {output_path.relative_to(source_path.parent.parent.parent)}")
        return output_path
    
    try:
        with Image.open(source_path) as img:
            # Convert RGBA to RGB if necessary (WebP doesn't support transparency in same way)
            if img.mode in ('RGBA', 'P'):
                # Create white background for transparent images
                background = Image.new('RGB', img.size, (255, 255, 255))
                if img.mode == 'P':
                    img = img.convert('RGBA')
                background.paste(img, mask=img.split()[3] if len(img.split()) == 4 else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Save as WebP
            img.save(output_path, 'WEBP', quality=quality)
            
            # Report size reduction
            orig_size = source_path.stat().st_size
            webp_size = output_path.stat().st_size
            reduction = ((orig_size - webp_size) / orig_size * 100) if orig_size > 0 else 0
            
            print(f"  Converted: {output_path.relative_to(source_path.parent.parent.parent)}")
            print(f"    Original: {orig_size:,} bytes → WebP: {webp_size:,} bytes ({reduction:.1f}% reduction)")
            
            return output_path
            
    except Exception as e:
        print(f"  Error converting {source_path}: {e}", file=sys.stderr)
        return None


def process_directory(images_dir: Path, dry_run: bool = False) -> dict:
    """
    Process all images in a directory and convert to WebP.
    Returns statistics about the conversion.
    """
    stats = {
        'total': 0,
        'converted': 0,
        'skipped': 0,
        'errors': 0
    }
    
    # Image extensions to convert (excluding .webp - those are already converted)
    image_extensions = {'.jpg', '.jpeg', '.png'}
    
    print(f"\nProcessing images in: {images_dir}")
    print("=" * 60)
    
    for filepath in images_dir.rglob('*'):
        if not filepath.is_file():
            continue
            
        # Skip non-image files
        if filepath.suffix.lower() not in image_extensions:
            continue
            
        # Skip files in directories we want to ignore
        if should_skip_directory(filepath, images_dir):
            continue
        
        stats['total'] += 1
        
        if dry_run:
            print(f"  [DRY RUN] Would convert: {filepath.relative_to(images_dir)}")
            stats['converted'] += 1
        else:
            result = convert_to_webp(filepath)
            if result:
                stats['converted'] += 1
            else:
                stats['errors'] += 1
    
    return stats


def main():
    """Main entry point."""
    import argparse
    
    parser = argparse.ArgumentParser(
        description='Convert images to WebP format for optimization'
    )
    parser.add_argument(
        'directory',
        nargs='?',
        default='/root/lonely-planet-sc/public/images',
        help='Directory containing images to convert (default: /root/lonely-planet-sc/public/images)'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be converted without making changes'
    )
    parser.add_argument(
        '--quality',
        type=int,
        default=QUALITY,
        help=f'WebP quality (1-100, default: {QUALITY})'
    )
    
    args = parser.parse_args()
    
    images_dir = Path(args.directory)
    
    if not images_dir.exists():
        print(f"Error: Directory does not exist: {images_dir}", file=sys.stderr)
        sys.exit(1)
    
    if not images_dir.is_dir():
        print(f"Error: Path is not a directory: {images_dir}", file=sys.stderr)
        sys.exit(1)
    
    print(f"\n{'[DRY RUN] ' if args.dry_run else ''}Image to WebP Conversion Script")
    print(f"Source directory: {images_dir}")
    print(f"Quality setting: {args.quality}")
    print("-" * 60)
    
    stats = process_directory(images_dir, dry_run=args.dry_run)
    
    print("\n" + "=" * 60)
    print("Summary:")
    print(f"  Total images found: {stats['total']}")
    print(f"  Converted: {stats['converted']}")
    print(f"  Skipped (already exists): {stats['total'] - stats['converted'] - stats['errors']}")
    print(f"  Errors: {stats['errors']}")
    
    if args.dry_run:
        print("\n[DRY RUN] No files were modified.")
    
    sys.exit(0)


if __name__ == '__main__':
    main()