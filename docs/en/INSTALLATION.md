# IVA Panel installation guide

[فارسی](../fa/INSTALLATION.md) · [English](INSTALLATION.md) · [Русский](../ru/INSTALLATION.md)

This guide is written for beginners. Use only the official links listed in the repository [README](../../README.en.md).

## What you need

- A Cloudflare account with a verified email address you can access.
- Access to the official [@IVAPANELBOT](https://t.me/IVAPANELBOT).
- A secure place to save the panel password.

## 1. Create and verify the Cloudflare account

Register on the official Cloudflare website and verify the email address. If you use [@IVAmailbot](https://t.me/IVAmailbot) to obtain a project mailbox, continue only when you can receive the verification message and your use complies with Cloudflare's terms and applicable law. Do not create accounts in bulk, evade limits, or abuse the service.

## 2. Create a restricted API token

1. Sign in to the Cloudflare dashboard.
2. Open **My Profile → API Tokens**.
3. Select **Create Token**, then **Create Custom Token**.
4. Use a descriptive name such as `IVA Panel Installer`.
5. A basic Worker deployment normally needs at least:
   - Account → **Account Settings: Read**
   - Account → **Workers Scripts: Edit**
6. Add **Workers KV Storage: Edit**, **Workers R2 Storage: Edit**, or Zone → **Workers Routes: Edit** only if the installer actually uses those resources.
7. Limit resources to the required account or zone.
8. Set an expiration time when possible.
9. Review the summary, create the token, and save it temporarily. The value is shown only once.

Official references: [Create API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) and [API token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/).

> Never use the Global API Key. Never paste the token into screenshots, Issues, public chats, or messages to unknown people.

## 3. Create the panel

1. Verify the exact username: **@IVAPANELBOT**.
2. Start the bot and choose the panel creation option.
3. Submit the restricted token only to this official bot.
4. Wait for deployment to finish.
5. Store the returned panel URL and password in a password manager or another secure location.
6. Open the panel and test the sign-in.

### Web installation

Open [install.ivaworks.site](https://install.ivaworks.site/), verify the exact address, and follow the on-screen flow. Submit the token only on this official domain or through the official bot. Use [@IVAPANELBOT](https://t.me/IVAPANELBOT) if the site is unavailable.

## 4. Remove unnecessary access

After a successful installation, return to API Tokens and **revoke** the installation token. If it is required for updates, keep the minimum permissions and rotate it regularly.

## 5. Install an application

1. Open [Releases](../../../../releases).
2. Download only assets published by this official repository.
3. Compare the file's SHA-256 value with the release's `SHA256SUMS.txt`.
4. Follow the [Android guide](../../apps/android/README.md) or [Windows guide](../../apps/windows/README.md).

Current compatibility: **Android 10 or later** and **Windows 64-bit x64 only**.

## Troubleshooting

- Check the [FAQ](https://telegra.ph/IVA-Panel--FAQ--%D8%B3%D9%88%D8%A7%D9%84%D8%A7%D8%AA-%D9%85%D8%AA%D8%AF%D8%A7%D9%88%D9%84-08-08-2) first.
- Check network status on [IVA Radar](https://net.ivaworks.site/).
- Contact [@Ivaworkersup](https://t.me/Ivaworkersup) if the problem remains; never send a token or password.
