#!/usr/bin/env python3
"""
VerseGuide JSON Validation Script

This script validates the JSON data files for the VerseGuide integration project.
It checks:
1. Valid JSON syntax
2. Required fields presence
3. Consistency of the data structure
4. File naming conventions for images

Usage:
    python validate-json.py [options]

Options:
    --quiet       Only report errors
    --fix         Attempt to fix minor issues (not yet implemented)
    --verbose     Show detailed validation results
"""

import json
import sys
import os
from pathlib import Path
from datetime import datetime

# Configuration
SCRIPT_DIR = Path(__file__).parent
DATA_DIR = SCRIPT_DIR.parent / "docs" / "verseguide-data"
EXPECTED_FILES = [
    "stanton-template.json",
    "pyro.json",
    "nyx.json"
]

REQUIRED_SYSTEM_FIELDS = ["name", "type", "description"]
REQUIRED_PLANET_FIELDS = ["id", "name", "type", "description"]
REQUIRED_POI_FIELDS = ["id", "name", "type", "category", "description"]


def load_json_file(filepath):
    """Load and parse a JSON file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f), None
    except json.JSONDecodeError as e:
        return None, f"JSON syntax error: {e}"
    except Exception as e:
        return None, f"File read error: {e}"


def validate_system(data, filename, verbose=False):
    """Validate system-level structure."""
    errors = []
    
    if "system" not in data:
        errors.append("Missing 'system' field")
        return errors
    
    system = data["system"]
    
    for field in REQUIRED_SYSTEM_FIELDS:
        if field not in system:
            errors.append(f"System missing required field: '{field}'")
    
    if verbose and not errors:
        print(f"  ✓ System structure valid: {system.get('name', 'Unknown')}")
    
    return errors


def validate_planets(data, filename, verbose=False):
    """Validate planets and their POIs."""
    errors = []
    
    if "planets" not in data:
        errors.append("Missing 'planets' array")
        return errors
    
    planets = data["planets"]
    
    for i, planet in enumerate(planets):
        planet_name = planet.get("name", f"Planet #{i}")
        
        for field in REQUIRED_PLANET_FIELDS:
            if field not in planet:
                errors.append(f"Planet '{planet_name}' missing required field: '{field}'")
        
        # Validate POIs if present
        if "pois" in planet:
            for j, poi in enumerate(planet["pois"]):
                poi_name = poi.get("name", f"POI #{j}")
                
                for field in REQUIRED_POI_FIELDS:
                    if field not in poi:
                        errors.append(f"POI '{poi_name}' in '{planet_name}' missing required field: '{field}'")
    
    if verbose and not errors:
        print(f"  ✓ Planets structure valid: {len(planets)} planets")
    
    return errors


def validate_metadata(data, filename, verbose=False):
    """Validate metadata section."""
    errors = []
    
    if "meta" not in data:
        errors.append("Missing 'meta' section")
        return errors
    
    meta = data["meta"]
    
    if "source" not in meta:
        errors.append("Meta missing 'source' field")
    
    if verbose and not errors:
        print(f"  ✓ Metadata valid: source={meta.get('source', 'Unknown')}")
    
    return errors


def check_image_references(data, filename, verbose=False):
    """Check if POIs reference images (they should)."""
    issues = []
    
    if "planets" not in data:
        return issues
    
    for planet in data["planets"]:
        planet_name = planet.get("name", "Unknown")
        
        if "pois" not in planet:
            continue
        
        for poi in planet["pois"]:
            poi_name = poi.get("name", "Unknown")
            
            # Check if POI has image data
            has_image = False
            if "image" in poi:
                has_image = True
            elif "images" in poi:
                has_image = True
            
            if not has_image and verbose:
                issues.append(f"  ⚠ POI '{poi_name}' in '{planet_name}' has no image reference")
    
    return issues


def validate_all_files(quiet=False, verbose=False):
    """Validate all JSON files in the data directory."""
    all_errors = {}
    all_warnings = {}
    
    for filename in EXPECTED_FILES:
        filepath = DATA_DIR / filename
        
        if not filepath.exists():
            if not quiet:
                print(f"❌ {filename}: File not found")
            all_errors[filename] = ["File not found"]
            continue
        
        data, error = load_json_file(filepath)
        
        if error:
            if not quiet:
                print(f"❌ {filename}: {error}")
            all_errors[filename] = [error]
            continue
        
        # Run validations
        errors = []
        warnings = []
        
        errors.extend(validate_metadata(data, filename, verbose))
        errors.extend(validate_system(data, filename, verbose))
        errors.extend(validate_planets(data, filename, verbose))
        warnings.extend(check_image_references(data, filename, verbose))
        
        if errors:
            all_errors[filename] = errors
            if not quiet:
                print(f"❌ {filename}: {len(errors)} error(s)")
                for e in errors:
                    print(f"    - {e}")
        else:
            if not quiet:
                print(f"✅ {filename}: Valid")
        
        if warnings and (verbose or not quiet):
            for w in warnings:
                print(w)
    
    return all_errors, all_warnings


def main():
    quiet = "--quiet" in sys.argv
    verbose = "--verbose" in sys.argv
    
    print(f"VerseGuide JSON Validation")
    print(f"Data directory: {DATA_DIR}")
    print(f"Timestamp: {datetime.now().isoformat()}")
    print()
    
    errors, warnings = validate_all_files(quiet, verbose)
    
    # Summary
    print()
    print("=== Summary ===")
    
    if not errors:
        print("✅ All JSON files are valid!")
        return 0
    else:
        total_errors = sum(len(e) for e in errors.values())
        print(f"❌ {len(errors)} file(s) with errors ({total_errors} total issues)")
        return 1


if __name__ == "__main__":
    sys.exit(main())