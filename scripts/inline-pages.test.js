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
