# Frequently Asked Questions

## Is IVA Panel free?

The official installation path is offered free of charge. Third-party services such as Cloudflare may impose their own plan limits, pricing, and terms.

## Is the project open source?

No. The public repository provides documentation, releases, and official assets. The proprietary code is covered by a proprietary license.

## Does IVA store the Cloudflare token?

No. Under the current architecture, the request goes directly from the user's device to Cloudflare. The token is not relayed through an IVA server, Telegram bot, or Telegram message, and IVA does not store it.

## Does the website use logs, cookies, or analytics?

The documentation site is static, has no application backend or database, and IVA does not store activity logs, tracking cookies, or analytics. Hosting providers may independently process technical request data under their own policies.

## Where should I enter the token?

Only in the official web installer or official installation interface opened from the bot. Never send a token as a message to the bot, support, or a group.

## What should I do with the token after installation?

Revoke or rotate it in Cloudflare.

## What is the minimum Android version?

Android 10 or later.

## Is Windows 32-bit supported?

No. The Windows application is x64 only.

## Why does a relay or Arvan CDN path not work for me?

The result depends on the ISP, DNS, domain, Cloudflare limits, route, and third-party availability. A supported feature does not guarantee lower latency or connectivity on every network.

## Where can I download official applications?

Only from [GitHub Releases](https://github.com/MR-SHARIFI-Dev/IVA-PANEL/releases). Do not run files distributed by unofficial groups or channels.

## How do I verify a download?

Compare its SHA-256 with [[Release Information]]. Verify the APK signature on Android and the **Digital Signatures** tab on Windows.

## Where do I report an installation problem?

Check [[Downloads and troubleshooting|EN-Downloads-and-Troubleshooting]], then contact [@Ivaworkersup](https://t.me/Ivaworkersup) without sending a token or password.

## Where do I report a vulnerability?

Do not publish it in a public Issue. Use the repository's Private Vulnerability Reporting or email `info@ivaworks.site`.

