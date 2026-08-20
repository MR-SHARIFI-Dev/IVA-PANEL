<div dir="rtl" align="right">

# ساخت ریپوی GitHub — راهنمای کاملاً مبتدی

[فارسی](GITHUB_SETUP.md) · [English](../en/GITHUB_SETUP.md) · [Русский](../ru/GITHUB_SETUP.md)

## مشخصات پیشنهادی ریپو

- **Repository name:** `iva-panel`
- **Description:** `Official downloads, documentation, and release notes for IVA Panel — a multi-location management panel powered by Cloudflare Workers. فارسی • English • Русский`
- **Visibility:** ابتدا `Private`؛ پس از تکمیل و بررسی، برای دانلود عمومی `Public`. عمومی‌بودن ریپو به معنی متن‌بازبودن نیست؛ مجوز اختصاصی همچنان اعمال می‌شود.
- **Topics:** `iva-panel`, `cloudflare-workers`, `multi-location`, `windows`, `android`, `network-monitoring`, `persian`, `russian`, `releases`

## روش ساده با سایت GitHub

1. وارد GitHub شوید و بالا سمت راست روی **+ → New repository** بزنید.
2. نام و توضیحات بالا را وارد کنید.
3. برای آماده‌سازی اولیه **Private** را انتخاب کنید. اگر دانلودها باید برای همه آزاد باشد، بعد از بررسی نهایی از Settings آن را **Public** کنید.
4. گزینه‌های ساخت خودکار README، `.gitignore` و License را فعال نکنید؛ این فایل‌ها در بسته حاضر هستند.
5. روی **Create repository** بزنید.
6. در صفحهٔ ریپو روی **uploading an existing file** بزنید.
7. محتوای داخل پوشهٔ `iva-panel` را بکشید و داخل صفحه رها کنید؛ خود پوشهٔ بیرونی را آپلود نکنید.
8. پیام Commit را `Initial IVA Panel repository` بنویسید و Commit کنید.

## تنظیم ظاهر حرفه‌ای

1. کنار About روی چرخ‌دنده بزنید و Description، وب‌سایت `https://ivaworks.site/` و Topics را وارد کنید.
2. به **Settings → General → Social preview** بروید.
3. فایل `assets/posters/iva-panel-hero.png` را بارگذاری کنید.
4. در **Settings → General → Features** فقط قابلیت‌هایی را که لازم دارید روشن نگه دارید. Issues برای گزارش خطا مفید است.
5. در **Settings → Branches** برای شاخهٔ `main` قانون محافظت بسازید تا حذف یا Push اشتباه کمتر شود.

## جایگزین‌کردن موارد ناقص

قبل از معرفی عمومی ریپو:

1. فایل `config/links.json` را باز کنید.
2. قبل از عمومی‌کردن ریپو، فعال‌بودن `https://install.ivaworks.site/` را آزمایش کنید.
3. اسکرین‌شات‌های پاک‌سازی‌شدهٔ فعلی را بازبینی و در صورت تغییر رابط با نسخهٔ بدون اطلاعات خصوصی جایگزین کنید.
4. نام ناشر و شماره نسخهٔ فایل‌ها را قبل از هر Release بررسی کنید.
5. قالب `docs/PRIVACY_POLICY_TEMPLATE.md` را بر اساس رفتار واقعی همهٔ اپ‌ها، ربات‌ها و نصب‌کننده تکمیل و ترجیحاً با مشاور حقوقی بررسی کنید.

## انتشار نسخهٔ Android و Windows

فایل‌های بزرگ APK/EXE/MSI را داخل Commitهای ریپو نگذارید. آن‌ها را به Release ضمیمه کنید:

1. در صفحهٔ ریپو روی **Releases → Draft a new release** بزنید.
2. برای فایل‌های فعلی تگ را `v1.0.1` وارد کنید.
3. عنوان را `IVA Panel Apps v1.0.1` بگذارید.
4. متن `releases/RELEASE_NOTES_TEMPLATE.md` را کپی، کامل و اطلاعات تأییدنشده را حذف کنید.
5. فایل‌های واقعی نسخه را پیوست کنید؛ نمونه:
   - `app-universal-release.apk`
   - `IVA-VPN-1.0.1-Setup.exe`
6. برای همه فایل‌ها SHA-256 بسازید و فایل `SHA256SUMS.txt` را هم پیوست کنید.
7. اگر نسخه آزمایشی است **Set as a pre-release** را فعال کنید؛ در غیر این صورت **Set as the latest release** را انتخاب کنید.
8. Release را منتشر کنید و لینک دانلودها را یک‌بار آزمایش کنید.

## ساخت SHA-256

### Windows PowerShell

فایل‌ها را در پوشهٔ `dist` بگذارید و از ریشهٔ پروژه اجرا کنید:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\make-checksums.ps1
```

### Linux یا macOS

```bash
bash scripts/make-checksums.sh
```

خروجی در `dist/SHA256SUMS.txt` ساخته می‌شود.

## چیزهایی که هرگز نباید در GitHub بگذارید

- Cloudflare API Token یا Global API Key.
- رمز پنل، فایل `.env` یا اطلاعات حساب کاربران.
- کلید امضای Android، فایل keystore یا گواهی امضای Windows.
- سورس اختصاصی‌ای که قرار نیست منتشر شود.
- APK/EXE ناشناخته یا امضانشده.

## بررسی نهایی

- هر سه README درست باز می‌شوند.
- همه لینک‌های رسمی صحیح‌اند.
- License، Security و Support موجود هستند.
- تصویر Social Preview تنظیم شده است.
- نسخهٔ Release دارای Release Notes و SHA256SUMS است.
- هیچ Secret یا فایل خصوصی در تاریخچهٔ Git وجود ندارد.
- سیاست حریم خصوصی نهایی با رفتار واقعی سرویس یکسان است و هیچ جای‌خالی ندارد.

</div>
