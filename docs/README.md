# IVA Panel documentation

## فارسی

- [راهنمای نصب](fa/INSTALLATION.md)
- [راهنمای ساخت و مدیریت ریپوی GitHub](fa/GITHUB_SETUP.md)

## English

- [Installation guide](en/INSTALLATION.md)
- [GitHub repository setup and release guide](en/GITHUB_SETUP.md)

## Русский

- [Инструкция по установке](ru/INSTALLATION.md)
- [Создание репозитория и публикация выпусков](ru/GITHUB_SETUP.md)

## Repository organization

| Path | Purpose |
|---|---|
| `assets/brand/` | Official IVA brand files |
| `assets/posters/` | README and social-preview artwork |
| `assets/screenshots/` | Privacy-clean real application screenshots |
| `apps/android/` | Android download and architecture guidance |
| `apps/windows/` | Windows download and architecture guidance |
| `config/links.json` | Single inventory of official IVA links |
| `docs/fa`, `docs/en`, `docs/ru` | Localized installation and publishing guides |
| `releases/` | Release-note, checksum, and manifest templates |
| `scripts/` | Local SHA-256 generation and verification helpers |
| `.github/` | Issue forms, pull-request checklist, and validation workflow |

Application binaries belong in GitHub Releases. Proprietary source code, credentials, signing keys, and user data do not belong in this repository.
