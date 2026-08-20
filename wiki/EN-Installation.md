# IVA Panel installation

## Requirements

- Age 18 or older, or permission from a legal guardian
- A Cloudflare account used in accordance with Cloudflare's terms
- An email address you control and can verify
- An up-to-date browser
- A secure place to store the panel address and password

> Do not create accounts in bulk, evade provider limits, or use another person's account without authorization.

## Step 1 — Create a restricted API Token

1. Sign in to your Cloudflare dashboard.
2. Open **My Profile → API Tokens**.
3. Create a token with only the permissions needed for the Worker installation.
4. Use a short expiration period when available.
5. Never use the **Global API Key** for this workflow.

## Step 2 — Open an official installer

- Web installer: https://install.ivaworks.site/
- Official bot: https://t.me/IVAPANELBOT

Enter the token only in the official installation interface. Never post it as a Telegram message, GitHub Issue, group message, or support message. The Cloudflare request is sent directly from your device to Cloudflare.

## Step 3 — Create the panel

1. Select the panel creation action.
2. Keep the interface open until Cloudflare finishes the request.
3. Save the returned panel address and password in a password manager.
4. Sign in once and verify that the panel works.

## Step 4 — Secure the deployment

1. Revoke or rotate the installation token in Cloudflare.
2. Change the default panel password.
3. Enable TOTP and store recovery codes offline.
4. Create an encrypted settings backup.
5. Never publish a private configuration or subscription URL.

## Client options

- Android 10+: `app-universal-release.apk`
- Windows x64: `IVA-VPN-1.0.1-Setup.exe`
- Other compatible clients: Clash/Mihomo, sing-box, Loon, Surge, and Quantumult X

National Internet, Arvan CDN, and Google Apps Script paths depend on the panel version and network conditions. Availability does not guarantee connectivity or lower latency on every ISP.

If installation fails, see [[Downloads and troubleshooting|EN-Downloads-and-Troubleshooting]].

