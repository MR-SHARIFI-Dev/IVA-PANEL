<div dir="rtl">

# امنیت و پشتیبانی

## مواردی که هرگز نباید ارسال شوند

- Cloudflare API Token یا Global API Key
- رمز پنل، TOTP و Recovery Code
- UUID، لینک اشتراک و تنظیمات کامل
- Backup، Cookie احراز هویت یا فایل کلید خصوصی
- تصویر حاوی IP، ایمیل یا شناسهٔ حساس بدون سانسور

## گزارش آسیب‌پذیری

آسیب‌پذیری را در Issue، Discussion، گروه یا کانال عمومی منتشر نکنید. یکی از این مسیرها را استفاده کنید:

1. **Private Vulnerability Reporting** در بخش Security ریپوی GitHub
2. ایمیل `info@ivaworks.site`

گزارش مناسب شامل نسخه، مؤلفه، مراحل بازتولید، اثر امنیتی و راهکار پیشنهادی است. دادهٔ واقعی کاربران را ضمیمه نکنید.

## پشتیبانی عادی

| نوع درخواست | مسیر |
|---|---|
| خطای عمومی برنامه | GitHub Issues با Bug Report |
| مشکل نصب یا حساب | [@Ivaworkersup](https://t.me/Ivaworkersup) |
| پرسش کاربران | [@IVA_Panel_group](https://t.me/IVA_Panel_group) |
| اطلاعیه‌ها | [@PANEL_ivaworks](https://t.me/PANEL_ivaworks) |
| ایمیل رسمی | `info@ivaworks.site` |

## بررسی فایل‌های انتشار

فایل را فقط از GitHub Releases دریافت، SHA-256 را کنترل و امضا را بررسی کنید. جزئیات در [[Release Information]] آمده است.

## پاسخ به رخداد امنیتی

اگر احتمال می‌دهید توکن یا رمز افشا شده است:

1. توکن Cloudflare را فوراً Revoke کنید.
2. رمز پنل را تغییر دهید.
3. نشست‌های فعال را ببندید و TOTP/Recovery Codes را نوسازی کنید.
4. تنظیمات و Workerهای حساب Cloudflare را بررسی کنید.
5. بدون انتشار اطلاعات محرمانه با تیم پشتیبانی تماس بگیرید.

</div>

