// Fails `npm test` while this app's design files differ from nival-design, the one source of Nival's
// tokens and shared small files (AGENTS.md › Design): nival-design checked out beside this repo, or
// at NIVAL_DESIGN_DIR. Change a value there and run `npm run sync` there, never in a copy here.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = join(import.meta.dirname, '..');
const source = process.env.NIVAL_DESIGN_DIR || join(root, '..', 'nival-design');
if (!existsSync(join(source, 'check.mjs'))) {
  console.error(`Design: nival-design isn't checked out beside this repo (${source}): clone it there, or set NIVAL_DESIGN_DIR.`);
  process.exit(1);
}
const { check } = await import(pathToFileURL(join(source, 'check.mjs')).href);
process.exit(check('nival-operator-site', root) ? 0 : 1);
