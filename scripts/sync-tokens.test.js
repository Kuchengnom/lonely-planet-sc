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
