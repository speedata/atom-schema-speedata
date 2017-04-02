// Entry point

import manifest from './package.json'

export function activate() {
  require('atom-package-deps').install(manifest.name)
}
