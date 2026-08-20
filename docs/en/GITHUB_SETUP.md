# GitHub repository setup — beginner guide

[فارسی](../fa/GITHUB_SETUP.md) · [English](GITHUB_SETUP.md) · [Русский](../ru/GITHUB_SETUP.md)

## Recommended repository details

- **Name:** `iva-panel`
- **Description:** `Official downloads, documentation, and release notes for IVA Panel — a multi-location management panel powered by Cloudflare Workers. فارسی • English • Русский`
- **Visibility:** Start `Private`; switch to `Public` after review if downloads must be public. A public repository is not automatically open source; the proprietary license still applies.
- **Topics:** `iva-panel`, `cloudflare-workers`, `multi-location`, `windows`, `android`, `network-monitoring`, `persian`, `russian`, `releases`

## Create it on github.com

1. Sign in to GitHub and select **+ → New repository**.
2. Enter the name and description above.
3. Select **Private** while preparing the repository. Switch it to **Public** after final review if everyone must be able to download releases.
4. Do not auto-create a README, `.gitignore`, or license; this package already contains them.
5. Select **Create repository**.
6. Choose **uploading an existing file**.
7. Upload the contents of the `iva-panel` folder, not the outer folder itself.
8. Use `Initial IVA Panel repository` as the commit message and commit the files.

## Professional repository settings

1. Edit the About box and add the description, `https://ivaworks.site/`, and the recommended topics.
2. Open **Settings → General → Social preview** and upload `assets/posters/iva-panel-hero-v2.png`.
3. Keep Issues enabled if you want structured bug reports.
4. Add a branch protection rule for `main` under **Settings → Branches**.

## Complete the placeholders

1. Test `https://install.ivaworks.site/` before making the repository public.
2. Review the current privacy-clean screenshots and replace them only with redacted images when the UI changes.
3. Verify the publisher name and version number before every Release.
4. Complete `docs/PRIVACY_POLICY_TEMPLATE.md` from the verified behavior of every app, bot, and installer, preferably with legal review.

## Publish Android and Windows builds

Do not commit large APK/EXE/MSI files to the Git history. Attach them to a Release:

1. Select **Releases → Draft a new release**.
2. Use `v1.0.1` for the current attached files.
3. Set the title to `IVA Panel Apps v1.0.1`.
4. Copy and complete `releases/RELEASE_NOTES_TEMPLATE.md`; remove every unverified item.
5. Attach `app-universal-release.apk` and `IVA-VPN-1.0.1-Setup.exe`.
6. Generate and attach `SHA256SUMS.txt`.
7. Mark testing builds as pre-releases; otherwise mark the stable build as the latest release.
8. Publish and test every download link.

## Generate checksums

Place release files in `dist`, then run one of these commands from the project root:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\make-checksums.ps1
```

```bash
bash scripts/make-checksums.sh
```

The output is written to `dist/SHA256SUMS.txt`.

## Never upload

- Cloudflare API tokens, Global API Keys, passwords, or `.env` files.
- User account data.
- Android signing keys, keystores, or Windows signing certificates.
- Proprietary source that is not approved for publication.
- Unknown or unsigned binaries.

## Final checklist

- All three README files render correctly.
- Official links are correct.
- License, Security, and Support files exist.
- Social Preview is configured.
- The Release contains release notes and checksums.
- No secret exists anywhere in Git history.
- The final privacy policy matches actual service behavior and contains no placeholders.
