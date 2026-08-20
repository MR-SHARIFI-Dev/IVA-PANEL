# Downloads and troubleshooting

## Official applications

| Platform | Requirement | Asset |
|---|---|---|
| Android | Android 10+ | `app-universal-release.apk` |
| Windows | Windows x64 | `IVA-VPN-1.0.1-Setup.exe` |

[Open official GitHub Releases](https://github.com/MR-SHARIFI-Dev/IVA-PANEL/releases)

## Before installation

1. Confirm the filename and release number.
2. Compare SHA-256 with [[Release Information]].
3. Verify the APK signature on Android.
4. On Windows, inspect **Properties → Digital Signatures**.
5. Do not run a file with a missing or invalid expected signature.

## The installer does not respond

- Update the browser.
- Check VPN/proxy, custom DNS, and blocking extensions.
- Set device time and date automatically.
- Confirm that `dash.cloudflare.com` is reachable.
- Verify token permissions and expiration.
- Never send the token to support.

## The panel was created but does not open

- Allow a few minutes for Worker propagation.
- Open the exact `https://` address.
- Check DNS and Custom Domain settings.
- Test another network or DNS resolver once.
- Review [IVA Network Intelligence](https://net.ivaworks.site/) for a wider disruption.

## Android installation fails

- Android 10 or later is required.
- Do not remove an older build signed with a different key unless you have a backup.
- Check storage and permission to install unknown applications.
- Install only the official APK.

## Windows does not run the installer

- Confirm the operating system is 64-bit.
- Verify SHA-256 and the digital signature.
- Do not bypass SmartScreen without confirming the publisher.
- Report the Windows version and exact error text, without private data.

## Useful diagnostic information

- Worker, Panel, and Installer versions
- Operating system and version
- The exact step that failed
- Error text or a redacted screenshot
- Approximate time and ISP when relevant

Remove or blur tokens, UUIDs, passwords, private IPs, subscription URLs, and backup contents.

