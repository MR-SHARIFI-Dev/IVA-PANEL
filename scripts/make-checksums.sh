#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
release_dir="${project_root}/dist"
output_file="${release_dir}/SHA256SUMS.txt"

if [[ ! -d "${release_dir}" ]]; then
  echo "Missing dist directory." >&2
  exit 1
fi

shopt -s nullglob
release_files=()
for candidate in "${release_dir}"/*; do
  if [[ -f "${candidate}" && "$(basename "${candidate}")" != "SHA256SUMS.txt" ]]; then
    release_files+=("${candidate}")
  fi
done

if [[ ${#release_files[@]} -eq 0 ]]; then
  echo "No release files found in dist/." >&2
  exit 1
fi

: > "${output_file}"
for release_file in "${release_files[@]}"; do
  checksum="$(sha256sum "${release_file}" | awk '{print $1}')"
  printf '%s  %s\n' "${checksum}" "$(basename "${release_file}")" >> "${output_file}"
done

echo "Created ${output_file}"
