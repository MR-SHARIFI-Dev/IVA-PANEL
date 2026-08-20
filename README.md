<p align="center">
  <img src="assets/posters/iva-panel-hero-v2.png" alt="IVA | آیوا" width="100%">
</p>

<p align="center">
  <a href="README.md">فارسی</a> ·
  <a href="README.en.md">English</a> ·
  <a href="README.ru.md">Русский</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-Proprietary-7c3aed">
  <img alt="Cloudflare Workers" src="https://img.shields.io/badge/platform-Cloudflare%20Workers-f38020">
  <img alt="Windows" src="https://img.shields.io/badge/Windows-x64-2563eb">
  <img alt="Android" src="https://img.shields.io/badge/Android-10%2B-22c55e">
  <img alt="Languages" src="https://img.shields.io/badge/docs-FA%20%7C%20EN%20%7C%20RU-06b6d4">
  <img alt="IVA Worker" src="https://img.shields.io/badge/IVA%20Worker-4.4.73-8b5cf6">
  <img alt="Panel" src="https://img.shields.io/badge/Panel-10.7.59-0ea5e9">
  <img alt="Installer" src="https://img.shields.io/badge/Installer-1.4.9-14b8a6">
</p>

<p align="center">
  <a href="https://install.ivaworks.site/"><strong>نصب سریع</strong></a> ·
  <a href="../../releases"><strong>دانلود اپ‌ها</strong></a> ·
  <a href="docs/FEATURE_MATRIX.md"><strong>همهٔ قابلیت‌ها</strong></a> ·
  <a href="docs/fa/FAQ.md"><strong>FAQ فارسی</strong></a> ·
  <a href="https://net.ivaworks.site/"><strong>رادار شبکه</strong></a> ·
  <a href="https://t.me/Ivaworkersup"><strong>پشتیبانی</strong></a> 
</p>

<div dir="rtl" align="right">

# IVA Panel | آیوا پنل

مرکز رسمی مستندات، دانلودها و انتشار نسخه‌های **IVA Panel**؛ پنل حرفه‌ای مولتی‌لوکیشن بر بستر Cloudflare Workers برای مدیریت سریع، ساده و یکپارچهٔ لوکیشن‌های مختلف.

> این ریپو مرکز رسمی توزیع و مستندات است. سورس اختصاصی IVA Panel در این مخزن منتشر نمی‌شود.

## چرا IVA Panel؟

| قابلیت | توضیح |
|---|---|
| ☁️ معماری Cloudflare Workers | اجرای پنل بدون نیاز به VPS جداگانه برای خود پنل |
| 🌍 Multi-Location | مدیریت چند لوکیشن و زیرساخت از یک داشبورد یکپارچه |
| ⚡ نصب یک‌کلیکی | نصب از طریق وب یا ربات رسمی Telegram |
| 💾 Backup & Restore | پشتیبان‌گیری، بازیابی و مهاجرت کامل تنظیمات |
| 🤖 مدیریت Telegram | نصب و عملیات مدیریتی از مسیر رسمی ربات |
| 🖥 اپ‌های اختصاصی | Android 10+ و Windows x64 |
| 📡 Network Intelligence | رادار زندهٔ وضعیت، تأخیر و اختلال شبکه |
| 🌐 مستندات سه‌زبانه | فارسی، English و Русский داخل همین ریپو |

## نسخهٔ پایدار فعلی

| IVA Worker | Panel | Installer | کانال | انتشار UTC | حداقل نسخه |
|:---:|:---:|:---:|:---:|:---:|:---:|
| `4.4.73` | `10.7.59` | `1.4.9` | `stable` | `2026-08-17 19:55` | `4.4.55` |

این به‌روزرسانی اجباری نیست. فهرست کامل بیش از صد قابلیت و مقایسهٔ v1، v2 و v3 در **[Feature Matrix رسمی](docs/FEATURE_MATRIX.md)** قرار دارد؛ از جمله Relay اینترنت ملی، Arvan CDN و Google Apps Script در v3.

## نصب سریع

1. یک حساب Cloudflare با ایمیلی بسازید که به آن دسترسی دارید و آن را تأیید کنید.
2. در Cloudflare یک **API Token محدود و موقت** بسازید؛ از Global API Key استفاده نکنید.
3. [نصب‌کنندهٔ رسمی وب](https://install.ivaworks.site/) یا ربات [@IVAPANELBOT](https://t.me/IVAPANELBOT) را باز کنید.
4. توکن را فقط در یکی از همین دو مسیر رسمی وارد کنید و گزینهٔ ساخت پنل را بزنید.
5. آدرس پنل و رمز عبور را در محل امن ذخیره کنید.
6. بعد از نصب، توکن را از Cloudflare لغو یا تعویض کنید.

راهنمای کامل و تصویریِ قابل تکمیل: [راهنمای نصب فارسی](docs/fa/INSTALLATION.md)

> **هشدار امنیتی:** توکن Cloudflare، رمز پنل یا فایل تنظیمات خصوصی را در Issue، گروه یا کانال عمومی ارسال نکنید. فقط حداقل دسترسی لازم را به توکن بدهید.

## اپلیکیشن‌ها

فایل‌های اصلی از صفحهٔ [GitHub Releases](../../releases) منتشر می‌شوند؛ فایل اجرایی را داخل سورس ریپو قرار ندهید.

| پلتفرم | فایل پیشنهادی | مناسب برای |
|---|---|---|
| Android 10 به بالا | `app-universal-release.apk` | نسخهٔ Universal برای معماری‌های رایج |
| Windows 64-bit | `IVA-VPN-1.0.1-Setup.exe` | فقط سیستم‌های x64؛ نسخهٔ ۳۲ بیتی ارائه نمی‌شود |

[راهنمای Android](apps/android/README.md) · [راهنمای Windows](apps/windows/README.md)

</div>

<p align="center">
  <img src="assets/posters/iva-apps-showcase-v2.png" alt="IVA | آیوا apps for Windows and Android" width="100%">
</p>

<div dir="rtl" align="right">

## تصاویر واقعی اپلیکیشن

### Windows 64-bit

</div>

<p align="center">
  <img src="assets/screenshots/windows/windows-home-redacted.png" alt="IVA VPN for Windows" width="82%">
</p>

<div dir="rtl" align="right">

### Android 10+ — حالت تاریک و روشن

</div>

<p align="center">
  <img src="assets/screenshots/android/android-dark-redacted.png" alt="IVA VPN Android dark theme" width="39%">
  <img src="assets/screenshots/android/android-light-redacted.png" alt="IVA VPN Android light theme" width="39%">
</p>

<div dir="rtl" align="right">

## IVA Network Intelligence

رادار زندهٔ اینترنت IVA وضعیت لحظه‌ای سرویس‌ها، تست مستقیم از ایران و جهان، ترافیک، تأخیر و اختلال‌های شبکه را نمایش می‌دهد.

**[باز کردن رادار](https://net.ivaworks.site/)**

</div>

<p align="center">
  <img src="assets/posters/iva-network-radar-v2.png" alt="IVA | آیوا Network Intelligence" width="100%">
</p>

<div dir="rtl" align="right">

## FAQ داخلی و سه‌زبانه

سؤالات متداول کامل دیگر به سایت بیرونی وابسته نیست و همراه همین ریپو نگهداری می‌شود: نصب و امنیت، Multi-Location، Backup/Restore، اپلیکیشن‌ها، Relay، Request، محدودیت‌ها و مسیرهای پشتیبانی.

**[باز کردن FAQ فارسی](docs/fa/FAQ.md)** · [English](docs/en/FAQ.md) · [Русский](docs/ru/FAQ.md)

</div>

<p align="center">
  <a href="docs/fa/FAQ.md"><img src="assets/posters/iva-faq-v2.png" alt="IVA | آیوا FAQ" width="100%"></a>
</p>

<div dir="rtl" align="right">

## لینک‌های رسمی

| بخش | آدرس |
|---|---|
| وب‌سایت رسمی | [ivaworks.site](https://ivaworks.site/) |
| نصب‌کنندهٔ وب | [install.ivaworks.site](https://install.ivaworks.site/) |
| کانال اطلاع‌رسانی | [@PANEL_ivaworks](https://t.me/PANEL_ivaworks) |
| ربات نصب پنل | [@IVAPANELBOT](https://t.me/IVAPANELBOT) |
| ربات IVA Mailer | [@IVAmailbot](https://t.me/IVAmailbot) |
| پشتیبانی | [@Ivaworkersup](https://t.me/Ivaworkersup) |
| گروه کاربران | [@IVA_Panel_group](https://t.me/IVA_Panel_group) |
| سؤالات متداول | [FAQ فارسی داخل ریپو](docs/fa/FAQ.md) |
| رادار اینترنت | [net.ivaworks.site](https://net.ivaworks.site/) |

## پشتیبانی و گزارش مشکل

- ابتدا [FAQ فارسی](docs/fa/FAQ.md) را بخوانید.
- برای خطای برنامه از قالب **Bug report** در Issues استفاده کنید؛ هیچ توکن، رمز یا اطلاعات حسابی را پیوست نکنید.
- برای مشکل نصب یا حساب از [@Ivaworkersup](https://t.me/Ivaworkersup) کمک بگیرید.
- آسیب‌پذیری امنیتی را عمومی منتشر نکنید؛ روش گزارش در [SECURITY.md](SECURITY.md) آمده است.

## مجوز و مالکیت

این پروژه **متن‌باز نیست**. تمام حقوق کد، باینری‌ها، نام، لوگو و محتوای اختصاصی برای IVA Team محفوظ است. دریافت یا استفاده از نسخه‌ها به معنی دریافت حق کپی، بازنشر، فروش، مهندسی معکوس یا ساخت نسخهٔ مشتق نیست. متن کامل: [LICENSE.md](LICENSE.md).

Cloudflare و نام‌ها/علائم مربوط به آن متعلق به مالکانشان هستند. IVA Works وابسته یا مورد تأیید Cloudflare نیست.

© 2026 IVA Team — All Rights Reserved.

</div>
