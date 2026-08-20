<div dir="rtl" align="right">

# راهنمای نصب IVA Panel

[فارسی](INSTALLATION.md) · [English](../en/INSTALLATION.md) · [Русский](../ru/INSTALLATION.md)

این راهنما برای کاربر مبتدی نوشته شده است. قبل از شروع، فقط از لینک‌های رسمی داخل [README](../../README.md) استفاده کنید.

## چیزهایی که لازم دارید

- یک حساب Cloudflare با ایمیل تأییدشده و قابل دسترسی.
- دسترسی به ربات رسمی [@IVAPANELBOT](https://t.me/IVAPANELBOT).
- چند دقیقه زمان و یک محل امن برای نگهداری رمز پنل.

## مرحله ۱ — ساخت و تأیید حساب Cloudflare

در وب‌سایت رسمی Cloudflare ثبت‌نام کنید و ایمیل را تأیید کنید. اگر از [@IVAmailbot](https://t.me/IVAmailbot) برای دریافت آدرس پروژه استفاده می‌کنید، فقط در صورتی ادامه دهید که به پیام تأیید آن دسترسی دارید و استفادهٔ شما با قوانین Cloudflare و قوانین محل زندگی‌تان سازگار است. از ساخت حساب‌های انبوه، دورزدن محدودیت‌ها یا هر نوع استفادهٔ سوء خودداری کنید.

## مرحله ۲ — ساخت API Token محدود

1. وارد داشبورد Cloudflare شوید.
2. به **My Profile → API Tokens** بروید.
3. روی **Create Token** و سپس **Create Custom Token** بزنید.
4. نام توکن را مثلاً `IVA Panel Installer` بگذارید.
5. حداقل دسترسی موردنیاز برای استقرار Worker معمولاً شامل موارد زیر است:
   - Account → **Account Settings: Read**
   - Account → **Workers Scripts: Edit**
6. فقط اگر نصب‌کننده واقعاً از آن‌ها استفاده می‌کند، دسترسی‌های **Workers KV Storage: Edit**، **Workers R2 Storage: Edit** یا Zone → **Workers Routes: Edit** را اضافه کنید.
7. Resources را به همان حساب/زون موردنیاز محدود کنید.
8. در صورت امکان برای توکن زمان انقضا تعیین کنید.
9. خلاصهٔ دسترسی‌ها را بازبینی و توکن را بسازید. مقدار توکن فقط یک‌بار نمایش داده می‌شود.

راهنمای رسمی Cloudflare: [Create API token](https://developers.cloudflare.com/fundamentals/api/get-started/create-token/) و [API token permissions](https://developers.cloudflare.com/fundamentals/api/reference/permissions/).

> **مهم:** از Global API Key استفاده نکنید. توکن را در اسکرین‌شات، Issue، گروه عمومی یا پیام به افراد ناشناس نفرستید.

## مرحله ۳ — ساخت پنل

1. آیدی ربات را دقیق بررسی کنید: **@IVAPANELBOT**.
2. ربات را Start کنید و گزینهٔ ساخت پنل را بزنید.
3. API Token محدود را فقط در همین ربات رسمی وارد کنید.
4. صبر کنید تا استقرار کامل شود.
5. آدرس پنل و رمز عبور را در Password Manager یا محل امن ذخیره کنید.
6. پنل را باز کنید و ورود را آزمایش کنید.

### نصب از وب

به [install.ivaworks.site](https://install.ivaworks.site/) بروید، آدرس را دقیق بررسی کنید و مراحل نمایش‌داده‌شده را ادامه دهید. توکن را فقط در همین دامنهٔ رسمی یا ربات رسمی وارد کنید. اگر سایت در دسترس نبود، از [@IVAPANELBOT](https://t.me/IVAPANELBOT) استفاده کنید.

## مرحله ۴ — بستن دسترسی اضافی

پس از موفقیت نصب، به صفحهٔ API Tokens برگردید و توکن نصب را **Revoke** کنید؛ یا اگر برای به‌روزرسانی لازم است، آن را با کمترین دسترسی نگه دارید و دوره‌ای تعویض کنید.

## مرحله ۵ — نصب برنامه

1. به صفحهٔ [Releases](../../../../releases) بروید.
2. فقط نسخه‌ای را دانلود کنید که ناشر آن همین ریپوی رسمی است.
3. مقدار SHA-256 فایل را با `SHA256SUMS.txt` همان نسخه مقایسه کنید.
4. برای Android راهنمای [apps/android](../../apps/android/README.md) و برای Windows راهنمای [apps/windows](../../apps/windows/README.md) را بخوانید.

سازگاری فعلی: **Android 10 به بالا** و **Windows 64-bit x64 فقط**.

## رفع مشکل

- ابتدا [FAQ فارسی](FAQ.md) را بررسی کنید.
- وضعیت شبکه را در [IVA Radar](https://net.ivaworks.site/) ببینید.
- اگر مشکل باقی بود به [@Ivaworkersup](https://t.me/Ivaworkersup) پیام دهید؛ توکن یا رمز را ارسال نکنید.

</div>
