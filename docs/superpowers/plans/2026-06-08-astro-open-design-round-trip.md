# Astro + Open Design Round-Trip Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two Node.js scripts (`inline-pages.js`, `sync-tokens.js`) plus package.json entries that let you export self-contained per-page HTML from the Astro build into Open Design, and sync token changes back to `design-system.css`.

**Architecture:** `astro build` is unchanged. A post-process script inlines all `/_astro/` CSS/JS references into each output HTML file, producing standalone files in `od-export/`. A second script reads an Open Design-exported HTML, diffs its CSS variables against `design-system.css`, and patches the file in place.

**Tech Stack:** Node.js 22 built-ins only (`node:fs`, `node:path`, `node:url`, `node:test`, `node:assert`) — no new npm dependencies.

**Spec:** `docs/superpowers/specs/2026-06-08-astro-open-design-round-trip-design.md`

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `scripts/inline-pages.js` | Walks `dist/`, inlines `/_astro/` CSS+JS refs, writes to `od-export/` |
| Create | `scripts/sync-tokens.js` | Extracts CSS vars from OD-exported HTML, diffs against `design-system.css`, patches it |
| Create | `scripts/inline-pages.test.js` | Unit tests for `inline-pages.js` exported functions |
| Create | `scripts/sync-tokens.test.js` | Unit tests for `sync-tokens.js` exported functions |
| Modify | `package.json` | Add `build:od`, `sync:tokens`, `test:scripts` scripts |
| Modify | `.gitignore` | Add `od-export/` |

---

## Task 1: Gitignore + test runner script

**Files:**
- Modify: `.gitignore`
- Modify: `package.json`

- [ ] **Step 1: Add `od-export/` to `.gitignore`**

Open `.gitignore` and append:
```
od-export/
```

- [ ] **Step 2: Add `test:scripts` to `package.json`**

In `package.json`, update the `scripts` block to:
```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "test:scripts": "node --test scripts/inline-pages.test.js scripts/sync-tokens.test.js"
  }
}
```

- [ ] **Step 3: Verify test runner is wired up (no test files yet — expect an error)**

```bash
npm run test:scripts
```

Expected: `Error: Cannot find module './scripts/inline-pages.test.js'` or similar — confirms the runner is invoked.

- [ ] **Step 4: Commit**

```bash
git add .gitignore package.json
git commit -m "chore: add od-export gitignore and test:scripts runner"
```

---

## Task 2: `inline-pages.js` — TDD

**Files:**
- Create: `scripts/inline-pages.test.js`
- Create: `scripts/inline-pages.js`

- [ ] **Step 1: Write the failing tests**

Create `scripts/inline-pages.test.js`:

```javascript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { inlineAssets, getOutputPath, walkHtml } from './inline-pages.js';

function makeTempDist() {
  const dir = join(tmpdir(), `test-dist-${Date.now()}`);
  mkdirSync(join(dir, '_astro'), { recursive: true });
  return dir;
}

test('inlineAssets replaces stylesheet link with inline style', () => {
  const distDir = makeTempDist();
  writeFileSync(join(distDir, '_astro', 'index.abc.css'), 'body{color:red}');
  const html = '<html><head><link rel="stylesheet" href="/_astro/index.abc.css"></head><body></body></html>';
  const result = inlineAssets(html, distDir);
  assert.ok(result.includes('<style>body{color:red}</style>'));
  assert.ok(!result.includes('<link rel="stylesheet"'));
  rmSync(distDir, { recursive: true });
});

test('inlineAssets replaces script src with inline script', () => {
  const distDir = makeTempDist();
  writeFileSync(join(distDir, '_astro', 'hoisted.abc.js'), 'console.log(1)');
  const html = '<html><body><script type="module" src="/_astro/hoisted.abc.js"></script></body></html>';
  const result = inlineAssets(html, distDir);
  assert.ok(result.includes('console.log(1)'));
  assert.ok(!result.includes('src="/_astro/'));
  rmSync(distDir, { recursive: true });
});

test('inlineAssets removes modulepreload hints', () => {
  const distDir = makeTempDist();
  const html = '<html><head><link rel="modulepreload" href="/_astro/chunk.abc.js"></head></html>';
  const result = inlineAssets(html, distDir);
  assert.ok(!result.includes('modulepreload'));
  rmSync(distDir, { recursive: true });
});

test('inlineAssets leaves external URLs untouched', () => {
  const distDir = makeTempDist();
  const html = '<link href="https://fonts.googleapis.com/css2?family=Inter" rel="stylesheet">';
  const result = inlineAssets(html, distDir);
  assert.equal(result, html);
  rmSync(distDir, { recursive: true });
});

test('getOutputPath flattens nested index.html to parent-dir.html', () => {
  const result = getOutputPath(
    '/dist/stanton/microtech/the-river/index.html',
    '/dist',
    '/od-export'
  );
  assert.equal(result, '/od-export/stanton/microtech/the-river.html');
});

test('getOutputPath keeps root index.html as index.html', () => {
  const result = getOutputPath('/dist/index.html', '/dist', '/od-export');
  assert.equal(result, '/od-export/index.html');
});

test('getOutputPath flattens single-level index.html', () => {
  const result = getOutputPath('/dist/stanton/index.html', '/dist', '/od-export');
  assert.equal(result, '/od-export/stanton.html');
});

test('walkHtml finds HTML files recursively and skips _astro dir', () => {
  const dir = join(tmpdir(), `test-walk-${Date.now()}`);
  mkdirSync(join(dir, '_astro'), { recursive: true });
  mkdirSync(join(dir, 'stanton'), { recursive: true });
  writeFileSync(join(dir, 'index.html'), '<html></html>');
  writeFileSync(join(dir, 'stanton', 'index.html'), '<html></html>');
  writeFileSync(join(dir, '_astro', 'bundle.css'), 'body{}');
  const files = walkHtml(dir);
  assert.equal(files.length, 2);
  assert.ok(files.every(f => !f.includes('_astro')));
  rmSync(dir, { recursive: true });
});
```

- [ ] **Step 2: Run tests — verify they fail**

```bash
npm run test:scripts
```

Expected: `Error: Cannot find module './inline-pages.js'`

- [ ] **Step 3: Implement `scripts/inline-pages.js`**

Create `scripts/inline-pages.js`:

```javascript
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export function inlineAssets(html, distDir) {
  html = html.replace(
    /<link rel="stylesheet" href="\/_astro\/([^"]+)"[^>]*\/?>/g,
    (_, filename) => {
      const css = readFileSync(join(distDir, '_astro', filename), 'utf8');
      return `<style>${css}</style>`;
    }
  );

  html = html.replace(/<link rel="modulepreload"[^>]*\/?>/g, '');

  html = html.replace(
    /<script([^>]*)src="\/_astro\/([^"]+)"([^>]*)><\/script>/g,
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
```

- [ ] **Step 4: Run tests — verify they pass**

```bash
npm run test:scripts
```

Expected (sync-tokens tests will fail/error since that file doesn't exist yet — only check inline-pages):

```bash
node --test scripts/inline-pages.test.js
```

Expected:
```
✔ inlineAssets replaces stylesheet link with inline style
✔ inlineAssets replaces script src with inline script
✔ inlineAssets removes modulepreload hints
✔ inlineAssets leaves external URLs untouched
✔ getOutputPath flattens nested index.html to parent-dir.html
✔ getOutputPath keeps root index.html as index.html
✔ getOutputPath flattens single-level index.html
✔ walkHtml finds HTML files recursively and skips _astro dir
ℹ tests 8
ℹ pass 8
ℹ fail 0
```

- [ ] **Step 5: Commit**

```bash
git add scripts/inline-pages.js scripts/inline-pages.test.js
git commit -m "feat: add inline-pages script with tests"
```

---

## Task 3: `sync-tokens.js` — TDD

**Files:**
- Create: `scripts/sync-tokens.test.js`
- Create: `scripts/sync-tokens.js`

- [ ] **Step 1: Write the failing tests**

Create `scripts/sync-tokens.test.js`:

```javascript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractTokensFromHtml, extractTokensFromCss, diffTokens, patchCss } from './sync-tokens.js';

test('extractTokensFromHtml finds CSS variables in style blocks', () => {
  const html = `<html><head><style>:root { --color-primary-600: #ff0000; --space-4: 1rem; }</style></head></html>`;
  const tokens = extractTokensFromHtml(html);
  assert.equal(tokens['--color-primary-600'], '#ff0000');
  assert.equal(tokens['--space-4'], '1rem');
});

test('extractTokensFromHtml returns empty object when no style blocks', () => {
  const tokens = extractTokensFromHtml('<html><head></head></html>');
  assert.deepEqual(tokens, {});
});

test('extractTokensFromHtml merges multiple style blocks', () => {
  const html = `<style>:root { --color-a: red; }</style><style>:root { --color-b: blue; }</style>`;
  const tokens = extractTokensFromHtml(html);
  assert.equal(tokens['--color-a'], 'red');
  assert.equal(tokens['--color-b'], 'blue');
});

test('extractTokensFromCss parses variables inside @layer wrapper', () => {
  const css = `@layer theme {\n  :root {\n    --color-primary-600: #1e3a8a;\n    --space-4: 1rem;\n  }\n}`;
  const tokens = extractTokensFromCss(css);
  assert.equal(tokens['--color-primary-600'], '#1e3a8a');
  assert.equal(tokens['--space-4'], '1rem');
});

test('diffTokens returns only variables that changed and exist in CSS', () => {
  const htmlTokens = { '--color-primary-600': '#ff0000', '--unknown-new-var': '#123456' };
  const cssTokens = { '--color-primary-600': '#1e3a8a', '--space-4': '1rem' };
  const diff = diffTokens(htmlTokens, cssTokens);
  assert.deepEqual(diff, { '--color-primary-600': '#ff0000' });
});

test('diffTokens returns empty object when nothing changed', () => {
  const tokens = { '--color-primary-600': '#1e3a8a' };
  assert.deepEqual(diffTokens(tokens, tokens), {});
});

test('patchCss updates variable values in-place', () => {
  const css = `@layer theme {\n  :root {\n    --color-primary-600: #1e3a8a;\n    --space-4: 1rem;\n  }\n}`;
  const patched = patchCss(css, { '--color-primary-600': '#ff0000' });
  assert.ok(patched.includes('--color-primary-600: #ff0000;'));
  assert.ok(patched.includes('--space-4: 1rem;'));
});

test('patchCss preserves comments and structure', () => {
  const css = `/* Primary Colors */\n:root {\n  --color-primary-600: #1e3a8a;\n}`;
  const patched = patchCss(css, { '--color-primary-600': '#ff0000' });
  assert.ok(patched.includes('/* Primary Colors */'));
  assert.ok(patched.includes('--color-primary-600: #ff0000;'));
});

test('patchCss preserves inline comments after values', () => {
  const css = `:root {\n  --color-surface-paper: #E5E2D9;  /* Page Edge */\n}`;
  const patched = patchCss(css, { '--color-surface-paper': '#ffffff' });
  assert.ok(patched.includes('--color-surface-paper: #ffffff;'));
  assert.ok(patched.includes('/* Page Edge */'));
});
```

- [ ] **Step 2: Run tests — verify they fail**

```bash
node --test scripts/sync-tokens.test.js
```

Expected: `Error: Cannot find module './sync-tokens.js'`

- [ ] **Step 3: Implement `scripts/sync-tokens.js`**

Create `scripts/sync-tokens.js`:

```javascript
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
```

- [ ] **Step 4: Run tests — verify they pass**

```bash
node --test scripts/sync-tokens.test.js
```

Expected:
```
✔ extractTokensFromHtml finds CSS variables in style blocks
✔ extractTokensFromHtml returns empty object when no style blocks
✔ extractTokensFromHtml merges multiple style blocks
✔ extractTokensFromCss parses variables inside @layer wrapper
✔ diffTokens returns only variables that changed and exist in CSS
✔ diffTokens returns empty object when nothing changed
✔ patchCss updates variable values in-place
✔ patchCss preserves comments and structure
✔ patchCss preserves inline comments after values
ℹ tests 9
ℹ pass 9
ℹ fail 0
```

- [ ] **Step 5: Run full test suite**

```bash
npm run test:scripts
```

Expected: all 17 tests pass (8 inline-pages + 9 sync-tokens), 0 fail.

- [ ] **Step 6: Commit**

```bash
git add scripts/sync-tokens.js scripts/sync-tokens.test.js
git commit -m "feat: add sync-tokens script with tests"
```

---

## Task 4: Wire up `package.json` scripts and end-to-end smoke test

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Add `build:od` and `sync:tokens` to `package.json`**

Update `package.json` scripts block:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro",
    "build:od": "astro build && node scripts/inline-pages.js",
    "sync:tokens": "node scripts/sync-tokens.js",
    "test:scripts": "node --test scripts/inline-pages.test.js scripts/sync-tokens.test.js"
  }
}
```

- [ ] **Step 2: Verify `npm run build` is unchanged**

```bash
npm run build
```

Expected: normal Astro build output, `dist/` populated, no mention of `od-export/`. This is what GitHub Actions runs — it must be identical to before.

- [ ] **Step 3: Run `build:od` smoke test**

```bash
npm run build:od
```

Expected output (page count will vary):
```
  ✓ index.html → index.html
  ✓ stanton/index.html → stanton.html
  ✓ stanton/arccorp/index.html → stanton/arccorp.html
  ✓ stanton/microtech/northern-wastes/the-river/index.html → stanton/microtech/northern-wastes/the-river.html
  ...
  Processed N page(s) → od-export/
```

- [ ] **Step 4: Verify a page is self-contained**

```bash
# Pick any output file and confirm no /_astro/ references remain
grep -r '/_astro/' od-export/ | wc -l
```

Expected: `0`

```bash
# Confirm CSS is inlined
grep -l '<style>' od-export/*.html od-export/**/*.html 2>/dev/null | wc -l
```

Expected: same count as total HTML files in `od-export/`.

- [ ] **Step 5: Smoke test `sync:tokens` with a simulated OD token change**

```bash
# Make a throwaway copy of one od-export page and manually edit a token value in it
cp od-export/index.html /tmp/od-test.html
# Edit /tmp/od-test.html: change one --color-primary-600 value to #ff0000
# (use any text editor or sed)
sed -i '' 's/--color-primary-600: #1e3a8a/--color-primary-600: #ff0000/' /tmp/od-test.html

npm run sync:tokens -- /tmp/od-test.html
```

Expected output:
```
Found 1 changed token(s):

  --color-primary-600
    #1e3a8a → #ff0000

✓ Updated src/styles/design-system.css
```

```bash
# Verify the change landed in design-system.css
grep 'color-primary-600' src/styles/design-system.css
```

Expected: `--color-primary-600: #ff0000;`

- [ ] **Step 6: Revert the test token change**

```bash
git checkout src/styles/design-system.css
```

- [ ] **Step 7: Commit**

```bash
git add package.json
git commit -m "feat: add build:od and sync:tokens package scripts"
```

---

## Workflow Reference (post-implementation)

### Export to Open Design
```bash
npm run build:od
# Import any file from od-export/ into Open Design
```

### Sync token changes back
```bash
# After exporting an edited HTML from Open Design:
npm run sync:tokens -- path/to/od-exported-file.html
# Review the printed diff, then commit src/styles/design-system.css
```

### Run script tests
```bash
npm run test:scripts
```

### CI (unchanged)
GitHub Actions runs `npm run build` → uploads `dist/` → deploys. No change.
