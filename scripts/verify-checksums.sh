#!/usr/bin/env bash
set -euo pipefail

checksum_file="${1:-SHA256SUMS.txt}"

if [[ ! -f "${checksum_file}" ]]; then
  echo "Checksum file not found: ${checksum_file}" >&2
  exit 1
fi

cd "$(dirname "${checksum_file}")"
sha256sum --check "$(basename "${checksum_file}")"
