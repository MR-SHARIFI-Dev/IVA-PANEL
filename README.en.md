<p align="center">
  <img src="assets/posters/iva-panel-hero.png" alt="IVA Panel" width="100%">
</p>

<p align="center">
  <a href="README.md">فارسی</a> ·
  <a href="README.en.md">English</a> ·
  <a href="README.ru.md">Русский</a>
</p>

# IVA Panel

The official documentation, downloads, and release hub for **IVA Panel** — a professional multi-location management panel powered by Cloudflare Workers.

> This is the official distribution and documentation repository. IVA Panel's proprietary source code is not published here.

## Highlights

- Easy installation through the [official web installer](https://install.ivaworks.site/) or bot.
- Powered by Cloudflare Workers.
- Multi-location management with worldwide location support.
- Dedicated Windows and Android applications.
- Live network radar for service status, traffic, latency, outages, and disruption analysis.
- Free use under the terms announced by IVA Works.

## Quick installation

1. Create a Cloudflare account with an email address you can access and verify.
2. Create a **restricted, short-lived API Token** in Cloudflare; never use the Global API Key.
3. Open the [official web installer](https://install.ivaworks.site/) or [@IVAPANELBOT](https://t.me/IVAPANELBOT).
4. Submit the token only through one of these official paths and choose the panel creation option.
5. Store the returned panel address and password securely.
6. Revoke or rotate the Cloudflare token after installation.

See the [complete English installation guide](docs/en/INSTALLATION.md).

> **Security warning:** Never post a Cloudflare token, panel password, or private configuration in an Issue, public group, or channel. Grant only the minimum permissions required.

## Applications

Official binaries are published on [GitHub Releases](../../releases), not committed to the repository history.

| Platform | Suggested asset | Best for |
|---|---|---|
| Android 10 or later | `app-universal-release.apk` | Universal build for common architectures |
| Windows 64-bit | `IVA-VPN-1.0.1-Setup.exe` | x64 systems only; no 32-bit build |

[Android guide](apps/android/README.md) · [Windows guide](apps/windows/README.md)

<p align="center">
  <img src="assets/posters/iva-apps-poster.png" alt="IVA Panel apps for Windows and Android" width="100%">
</p>

## Real application screenshots

### Windows 64-bit

<p align="center">
  <img src="assets/screenshots/windows/windows-home-redacted.png" alt="IVA VPN for Windows" width="82%">
</p>

### Android 10+ — dark and light themes

<p align="center">
  <img src="assets/screenshots/android/android-dark-redacted.png" alt="IVA VPN Android dark theme" width="39%">
  <img src="assets/screenshots/android/android-light-redacted.png" alt="IVA VPN Android light theme" width="39%">
</p>

## IVA Network Intelligence

The live IVA internet radar provides real-time service status, direct tests from Iran and worldwide, network traffic and latency, outage detection, and intelligent network analysis.

**[Open the radar](https://net.ivaworks.site/)**

<p align="center">
  <img src="assets/posters/iva-network-radar.png" alt="IVA Network Intelligence" width="100%">
</p>

## Official links

| Resource | Address |
|---|---|
| Official website | [ivaworks.site](https://ivaworks.site/) |
| Web installer | [install.ivaworks.site](https://install.ivaworks.site/) |
| Announcement channel | [@PANEL_ivaworks](https://t.me/PANEL_ivaworks) |
| Panel installation bot | [@IVAPANELBOT](https://t.me/IVAPANELBOT) |
| IVA Mailer bot | [@IVAmailbot](https://t.me/IVAmailbot) |
| Support | [@Ivaworkersup](https://t.me/Ivaworkersup) |
| User group | [@IVA_Panel_group](https://t.me/IVA_Panel_group) |
| Q&A chat | [@IVAPANELCHAT](https://t.me/IVAPANELCHAT) |
| FAQ | [IVA Panel FAQ](https://telegra.ph/IVA-Panel--FAQ--%D8%B3%D9%88%D8%A7%D9%84%D8%A7%D8%AA-%D9%85%D8%AA%D8%AF%D8%A7%D9%88%D9%84-08-08-2) |
| Internet radar | [net.ivaworks.site](https://net.ivaworks.site/) |

## Support and issue reporting

- Read the [FAQ](https://telegra.ph/IVA-Panel--FAQ--%D8%B3%D9%88%D8%A7%D9%84%D8%A7%D8%AA-%D9%85%D8%AA%D8%AF%D8%A7%D9%88%D9%84-08-08-2) first.
- Use the GitHub **Bug report** template for app defects; never attach secrets or account data.
- Contact [@Ivaworkersup](https://t.me/Ivaworkersup) for installation or account help.
- Do not disclose security vulnerabilities publicly; follow [SECURITY.md](SECURITY.md).

## Repository maintainer guide

If you publish the project, follow the [beginner GitHub setup and release guide](docs/en/GITHUB_SETUP.md). The folder inventory is in [docs/README.md](docs/README.md). Complete and review [the privacy policy template](docs/PRIVACY_POLICY_TEMPLATE.md) using verified data practices before any public launch.

## License and ownership

This project is **not open source**. All rights in the proprietary code, binaries, name, logo, and original content are reserved by IVA Team. Downloading or using a release does not grant permission to copy, redistribute, sell, reverse engineer, or create derivative works. See [LICENSE.md](LICENSE.md).

Cloudflare and related names and marks belong to their respective owners. IVA Works is not affiliated with or endorsed by Cloudflare.

© 2026 IVA Team — All Rights Reserved.
