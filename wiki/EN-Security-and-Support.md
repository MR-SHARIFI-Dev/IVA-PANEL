# Security and support

## Never share these items

- Cloudflare API Token or Global API Key
- Panel password, TOTP, or recovery code
- UUID, subscription URL, or complete configuration
- Backup, authentication cookie, or private key file
- Unredacted screenshots containing an IP address, email, or identifier

## Vulnerability reporting

Do not disclose a vulnerability in a public Issue, Discussion, group, or channel. Use one of these private routes:

1. **Private Vulnerability Reporting** under the repository's Security tab
2. Email `info@ivaworks.site`

A useful report includes the affected version and component, reproduction steps, security impact, and a suggested remediation. Do not attach real user data.

## General support

| Request | Official route |
|---|---|
| Application bug | GitHub Issues with the Bug Report template |
| Installation or account help | [@Ivaworkersup](https://t.me/Ivaworkersup) |
| Community question | [@IVA_Panel_group](https://t.me/IVA_Panel_group) |
| Announcements | [@PANEL_ivaworks](https://t.me/PANEL_ivaworks) |
| Official email | `info@ivaworks.site` |

## Release verification

Download only from GitHub Releases, compare SHA-256, and verify the platform signature. See [[Release Information]].

## Security incident response

If a token or password may have been exposed:

1. Revoke the Cloudflare token immediately.
2. Change the panel password.
3. Close active sessions and rotate TOTP/recovery codes.
4. Review the Cloudflare account's settings and Workers.
5. Contact support privately without republishing the secret.

