<p align="center">
  <img src="../../assets/posters/iva-faq-v2.png" alt="IVA Panel FAQ" width="100%">
</p>

<p align="center">
  <a href="../fa/FAQ.md">فارسی</a> ·
  <a href="FAQ.md">English</a> ·
  <a href="../ru/FAQ.md">Русский</a>
</p>

# IVA Panel — Frequently Asked Questions

Official answers about installation, security, capabilities, applications, network behavior, and support. If your question is not answered here, use the support channels at the end of this page.

## Contents

- [Overview and terms](#overview-and-terms)
- [Installation and security](#installation-and-security)
- [Features and management](#features-and-management)
- [Applications and downloads](#applications-and-downloads)
- [Network, usage, and reliability](#network-usage-and-reliability)
- [Support](#support)

## Overview and terms

### What is IVA Panel?

IVA Panel is a free, multi-location management panel powered by **Cloudflare Workers**. It provides one interface for managing services, users, and multiple locations.

### Is the source code public?

No. This repository is the official documentation, download, and release hub; IVA Panel's proprietary source code is not published. Files, branding, and original materials are covered by the [proprietary license](../../LICENSE.md).

### Is IVA Panel free?

The panel itself is free to use. Domains, third-party services, or external infrastructure may have separate costs set by their providers.

### Does the panel require a VPS?

No. The panel itself runs on Cloudflare Workers and does not require a separate VPS. Services or infrastructure managed through the panel may have their own requirements.

### Which languages are supported?

Repository documentation is available in Persian, English, and Russian. Product-interface language support may change between releases, so check the notes for your installed version.

## Installation and security

### How do I install IVA Panel?

Use the [official web installer](https://install.ivaworks.site/) or [@IVAPANELBOT](https://t.me/IVAPANELBOT). In short: create and verify a Cloudflare account, create a restricted API Token, submit it only to an official installer, create the panel, and securely store the returned address and password. See the [installation guide](INSTALLATION.md).

### Do I need Linux or SSH knowledge?

No. The one-click installer does not require Linux, SSH, or manual server administration for normal use. Technical knowledge can still help with advanced configuration and troubleshooting.

### Why use an API Token instead of the Global API Key?

An API Token can be restricted to minimum permissions and limited use. The Global API Key has much broader access. **Never use the Global API Key for installation**, and enter a token only through official IVA paths.

### What should I do with the token after installation?

After confirming the panel works, revoke or rotate the installation token in Cloudflare unless the documentation for your version explicitly requires continued access. Never publish it in an Issue, chat, or screenshot.

### Can I register with a temporary email address?

Use an email address that you can lawfully access long-term so account verification and recovery remain possible. Follow the terms of Cloudflare and the email provider. IVA Team is not responsible for lost accounts or third-party policy violations.

### Is Error 1101 impossible?

The official installation is designed to prevent common Worker configuration failures, but no software is error-free in every environment. If you see Error 1101, check the [network radar](https://net.ivaworks.site/), Worker configuration, and installed version, then report only non-sensitive diagnostic details.

## Features and management

### Does IVA Panel support Multi-Location?

Yes. IVA Panel is designed to manage multiple locations and infrastructure endpoints from one integrated panel. Practical capacity depends on connected services and resources.

### Are users unlimited?

The panel does not announce a fixed software user-count limit, but **Unlimited Users does not mean Unlimited Traffic**. Real capacity depends on quotas, resources, Workers, network paths, and upstream services.

### Does it support Backup and Restore?

Yes. **Full Backup / Full Restore** is intended to preserve and recover data and settings. Encrypt backups and keep a copy away from the primary device.

### Can I migrate to a new environment?

Yes. Create a full backup, install a compatible version in the destination, and restore the backup. Verify users, settings, and connections before removing the old environment.

### Can I manage the panel from a mobile browser?

Yes. The interface is responsive and can be managed from a mobile browser. A dedicated Android application is also available for device connectivity.

### Can IVA Panel be managed through Telegram?

Yes. Official Telegram automation supports installation and selected management operations. Use only [@IVAPANELBOT](https://t.me/IVAPANELBOT) and verify the username before sharing any information.

### What are Google, ArvanCloud, and National Internet Relay?

They are alternative connection paths that may improve routing or help maintain access in supported releases and network conditions. Results depend on the network, Relay health, configuration, and provider policies; no Relay can guarantee 100% connectivity.

## Applications and downloads

### What is the minimum Android version?

The official application requires **Android 10 or later**. `app-universal-release.apk` is the recommended build for most users. Architecture-specific APKs should be used only when you know the device architecture.

### Which Windows systems are supported?

The official Windows application is released only for **64-bit Windows (x64)**. A 32-bit build is not provided.

### Where should I download application files?

Download only from this repository's [GitHub Releases](../../../releases) or an official link announced by [@PANEL_ivaworks](https://t.me/PANEL_ivaworks). Do not use unknown mirrors for APK or EXE files.

### How can I verify a download?

Compare the filename, version, and SHA-256 digest with the checksum file attached to the same Release. Platform guides and verification scripts are included in this repository.

## Network, usage, and reliability

### Is IVA Panel suitable for everyday use?

It is designed for general browsing, messaging, social media, downloads, and normal internet activity. Actual experience depends on connection quality, selected path, and your infrastructure.

### Is it suitable for gaming?

It can be used generally, but heavy or competitive gaming is not guaranteed. Ping, jitter, and packet loss are affected primarily by routing and network conditions rather than the panel itself.

### What is a Request, and what is the daily limit?

A Request is a communication request between a client and a service; it is not the same as traffic volume. There is no single limit for every installation. Cloudflare quotas, Worker configuration, Relays, and upstream infrastructure determine capacity.

### Can heavy usage lead to restrictions or a ban?

The panel itself does not inherently cause a ban, but infrastructure providers enforce their own quotas and acceptable-use policies. Abnormal traffic, abuse, or policy violations may lead to account restrictions.

### What does IVA Network Radar show?

[IVA Network Intelligence](https://net.ivaworks.site/) displays observable service status, network tests, latency, and disruptions. It is a diagnostic aid and cannot guarantee the status of every operator or path.

## Privacy

### Does IVA store my token or account information?

No. Installation requests are sent directly from the user's device to Cloudflare. The API Token, Cloudflare email, Account ID, panel address or password, user IP address, and activity logs are not stored in an IVA server, database, bot, or Telegram. The documentation site keeps only language and theme preferences locally in the browser. See the [Privacy Policy](../../PRIVACY.md).

## Support

### What should I prepare before reporting a problem?

Include the panel or app version, operating system, device model, event time, exact error text, and reproducible steps. Also check the radar and latest Release notes.

### What must never be posted publicly?

Never post a Cloudflare Token, Global API Key, panel password, backup file, cookie, private email, account identifier, or a screenshot containing IP or personal data.

### Where can I get help?

- Reproducible application bug: use the GitHub Bug Report template.
- Installation or account access: contact [@Ivaworkersup](https://t.me/Ivaworkersup).
- General question: use the official [@IVA_Panel_group](https://t.me/IVA_Panel_group).
- Security vulnerability: report privately according to [SECURITY.md](../../SECURITY.md).

---

[Back to the English README](../../README.en.md) · [All documentation](../README.md)
