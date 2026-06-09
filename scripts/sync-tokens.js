import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function extractTokensFromHtml(html) {
  const tokens = {};
  for (const styleMatch of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
    for (const varMatch of styleMatch[1].matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)) {
      tokens[`--${varMatch[1]}`] = varMatch[2].trim();
    }
  }
  return tokens;
}

export function extractTokensFromCss(css) {
  const tokens = {};
  for (const varMatch of css.matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)) {
    tokens[`--${varMatch[1]}`] = varMatch[2].trim();
  }
  return tokens;
}

export function diffTokens(htmlTokens, cssTokens) {
  const changes = {};
  for (const [name, htmlValue] of Object.entries(htmlTokens)) {
    if (cssTokens[name] !== undefined && cssTokens[name] !== htmlValue) {
      changes[name] = htmlValue;
    }
  }
  return changes;
}

export function patchCss(css, changes) {
  let patched = css;
  for (const [name, newValue] of Object.entries(changes)) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    patched = patched.replace(
      new RegExp(`(${escaped}\\s*:\\s*)([^;]+)(;)`, 'g'),
      (_, prefix, _oldValue, semi) => `${prefix}${newValue}${semi}`
    );
  }
  return patched;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const inputFile = process.argv[2];
  if (!inputFile) {
    console.error('Usage: node scripts/sync-tokens.js <path-to-od-exported.html>');
    process.exit(1);
  }

  const html = readFileSync(inputFile, 'utf8');
  const htmlTokens = extractTokensFromHtml(html);

  if (Object.keys(htmlTokens).length === 0) {
    console.error('Error: No CSS variables found. Is this an Open Design export?');
    process.exit(1);
  }

  const designSystemPath = join(__dirname, '..', 'src', 'styles', 'design-system.css');
  const designCss = readFileSync(designSystemPath, 'utf8');
  const cssTokens = extractTokensFromCss(designCss);
  const changes = diffTokens(htmlTokens, cssTokens);

  if (Object.keys(changes).length === 0) {
    console.log('No token changes detected.');
    process.exit(0);
  }

  console.log(`Found ${Object.keys(changes).length} changed token(s):\n`);
  for (const [name, newValue] of Object.entries(changes)) {
    console.log(`  ${name}`);
    console.log(`    ${cssTokens[name]} → ${newValue}`);
  }

  const patched = patchCss(designCss, changes);
  writeFileSync(designSystemPath, patched);
  console.log(`\n✓ Updated src/styles/design-system.css`);
}
