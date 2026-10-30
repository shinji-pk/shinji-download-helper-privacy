import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const policy = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const readme = readFileSync(new URL('../README.md', import.meta.url), 'utf8');

test('privacy policy has a Portuguese document language and accessible title', () => {
  assert.match(policy, /<html lang="pt-BR">/);
  assert.match(policy, /<main class="box">/);
  assert.match(policy, /<h1>Política de Privacidade/);
  assert.match(policy, /<meta name="viewport"/);
});

test('contact points to the existing privacy repository, not stale repositories', () => {
  assert.match(policy, /href="https:\/\/github\.com\/shinji-pk\/shinji-download-helper-privacy\/issues"/);
  assert.doesNotMatch(policy + readme, /shinji-video-download-privacy|shinji-pk\/live/);
});

test('discloses the five manifest permission groups and wide host access', () => {
  for (const permission of ['webRequest', 'downloads', 'storage', 'offscreen', 'HTTP e HTTPS']) {
    assert.ok(policy.includes(permission), `Missing disclosure: ${permission}`);
  }
});

test('explains session data, site requests, removal and downloaded files', () => {
  for (const disclosure of ['armazenamento local', 'armazenamento de sessão', 'site que hospeda', 'desinstalar a extensão', 'não são apagados automaticamente']) {
    assert.ok(policy.includes(disclosure), `Missing disclosure: ${disclosure}`);
  }
});

test('README does not instruct unapproved deployments', () => {
  assert.match(readme, /Não criar projetos ou deployments na Vercel/);
  assert.match(readme, /URL de prévia/);
});

test('provides a keyboard skip link to the policy heading', () => {
  assert.match(policy, /class="skip-link" href="#politica"/);
  assert.match(policy, /<h1 id="politica" tabindex="-1">/);
  assert.match(policy, /:focus-visible/);
});

test('uses scalable text, mobile layout and reduced-motion support', () => {
  assert.match(policy, /font-size: clamp\(/);
  assert.match(policy, /@media \(max-width: 640px\)/);
  assert.match(policy, /prefers-reduced-motion: reduce/);
  assert.match(policy, /width: min\(100% - 1\.5rem, 920px\)/);
});

test('keeps the purple identity without remote fonts, tracking scripts or raster artwork', () => {
  assert.match(policy, /--accent: #d5b8ff/);
  assert.doesNotMatch(policy, /<script|<img|fonts\.googleapis|analytics|pixel\./i);
});
