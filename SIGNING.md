# Release integrity and signing | صحت و امضای نسخه‌ها | Проверка выпусков

## فارسی

فایل‌ها را فقط از بخش رسمی GitHub Releases دریافت و SHA-256 آن‌ها را با مقادیر همان Release مقایسه کنید.

### Android v1.0.1

- طرح امضا: APK Signature Scheme v2
- Subject: `CN=IVA VPN, OU=Android Development, O=IVA Works, L=QOM, ST=QOM, C=IR`
- SHA-256 گواهی:
  `5F:D8:35:36:CA:D4:A5:15:FE:23:FD:3E:F9:06:06:C9:18:10:F2:1C:E8:14:65:04:F0:5C:31:83:AD:B0:D3:1D`

### Windows

قبل از اجرا، در **Properties → Digital Signatures** نام ناشر و معتبر بودن امضا را بررسی کنید. اگر تب Digital Signatures وجود ندارد یا Windows امضا را نامعتبر نشان می‌دهد، فایل را اجرا نکنید و موضوع را به `info@ivaworks.site` گزارش دهید.

## English

Download files only from the official GitHub Releases page and compare their SHA-256 values with the values published in that Release. Android v1.0.1 is signed with APK Signature Scheme v2. Its certificate SHA-256 fingerprint is shown above. For Windows, verify the publisher and signature status under **Properties → Digital Signatures** before running the installer.

## Русский

Загружайте файлы только из официального раздела GitHub Releases и сравнивайте SHA-256 со значениями выпуска. Android v1.0.1 подписан по схеме APK Signature Scheme v2; отпечаток сертификата SHA-256 указан выше. Для Windows перед запуском проверьте издателя и статус подписи в **Properties → Digital Signatures**.

## v1.0.1 SHA-256

```text
4b8f7f975c213fcff25559ff7a1f7333d7993b9b677c98716df35932d8a48594  app-universal-release.apk
1c51859c47d150815c5f85684ed5c63c4ac5ab2e8abab4f43bcedd3e8b3e8edf  IVA-VPN-1.0.1-Setup.exe
```
