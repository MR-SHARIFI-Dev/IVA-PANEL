# IVA Panel documentation

## Product reference

- [Complete v1 / v2 / v3 Feature Matrix](FEATURE_MATRIX.md)
- [Machine-readable stable version metadata](../config/version.json)
- [GitHub Pages website](index.html)

## فارسی

- [سؤالات متداول](fa/FAQ.md)
- [راهنمای نصب](fa/INSTALLATION.md)
- [راهنمای ساخت و مدیریت ریپوی GitHub](fa/GITHUB_SETUP.md)
- [راهنمای انتشار سایت با GitHub Pages](fa/GITHUB_PAGES.md)

## English

- [Frequently Asked Questions](en/FAQ.md)
- [Installation guide](en/INSTALLATION.md)
- [GitHub repository setup and release guide](en/GITHUB_SETUP.md)
- [GitHub Pages publishing guide](en/GITHUB_PAGES.md)

## Русский

- [Часто задаваемые вопросы](ru/FAQ.md)
- [Инструкция по установке](ru/INSTALLATION.md)
- [Создание репозитория и публикация выпусков](ru/GITHUB_SETUP.md)
- [Публикация сайта через GitHub Pages](ru/GITHUB_PAGES.md)

## Repository organization

| Path | Purpose |
|---|---|
| `assets/brand/` | Official IVA brand files |
| `assets/posters/` | Branded README, app, FAQ, radar, and social-preview artwork |
| `assets/screenshots/` | Privacy-clean real application screenshots |
| `apps/android/` | Android download and architecture guidance |
| `apps/windows/` | Windows download and architecture guidance |
| `config/links.json` | Single inventory of official IVA links |
| `config/version.json` | Current stable Worker, panel, and installer versions |
| `docs/FEATURE_MATRIX.md` | Canonical bilingual v1/v2/v3 capability comparison |
| `docs/index.html`, `docs/features.html`, `docs/faq.html` | Trilingual GitHub Pages website |
| `docs/assets/` | Self-contained website styles, scripts, and privacy-clean imagery |
| `docs/fa`, `docs/en`, `docs/ru` | Localized FAQ, installation, and publishing guides |
| `releases/` | Release-note, checksum, and manifest templates |
| `scripts/` | Local SHA-256 generation and verification helpers |
| `.github/` | Issue forms, pull-request checklist, and validation workflow |

Application binaries belong in GitHub Releases. Proprietary source code, credentials, signing keys, and user data do not belong in this repository.
