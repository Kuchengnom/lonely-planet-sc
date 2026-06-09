import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function inlineAssets(html, distDir) {
  html = html.replace(
    /<link rel="stylesheet" href="[^"]*\/_astro\/([^"]+)"[^>]*\/?>/g,
    (_, filename) => {
      const css = readFileSync(join(distDir, '_astro', filename), 'utf8');
      return `<style>${css}</style>`;
    }
  );

  html = html.replace(/<link rel="modulepreload"[^>]*\/?>/g, '');

  html = html.replace(
    /<script([^>]*)src="[^"]*\/_astro\/([^"]+)"([^>]*)><\/script>/g,
    (_, before, filename, after) => {
      const js = readFileSync(join(distDir, '_astro', filename), 'utf8');
      return `<script${before}${after}>${js}</script>`;
    }
  );

  return html;
}

export function getOutputPath(inputPath, distDir, outDir) {
  const rel = relative(distDir, inputPath);
  const parts = rel.split('/');

  if (basename(inputPath) === 'index.html') {
    if (parts.length === 1) {
      return join(outDir, 'index.html');
    }
    const dirParts = parts.slice(0, -1);
    return join(outDir, ...dirParts.slice(0, -1), dirParts[dirParts.length - 1] + '.html');
  }

  return join(outDir, rel);
}

export function walkHtml(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== '_astro') {
      files.push(...walkHtml(full));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const distDir = join(__dirname, '..', 'dist');
  const outDir = join(__dirname, '..', 'od-export');

  const htmlFiles = walkHtml(distDir);
  let processed = 0;

  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    const inlined = inlineAssets(html, distDir);
    const outPath = getOutputPath(file, distDir, outDir);
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, inlined);
    console.log(`  ✓ ${relative(distDir, file)} → ${relative(outDir, outPath)}`);
    processed++;
  }

  console.log(`\nProcessed ${processed} page(s) → od-export/`);
}
