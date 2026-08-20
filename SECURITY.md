# Security Policy | سیاست امنیت | Политика безопасности

## فارسی

- **هیچ‌وقت** Cloudflare API Token، Global API Key، رمز پنل، فایل `.env`، keystore یا اطلاعات کاربران را در Issue، کانال یا گروه عمومی منتشر نکنید.
- برای نصب فقط یک API Token محدود با حداقل دسترسی و ترجیحاً زمان انقضا بسازید. پس از نصب آن را لغو یا تعویض کنید.
- اگر احتمال می‌دهید توکن یا رمز افشا شده، فوراً آن را از سرویس مربوطه لغو/تغییر دهید؛ منتظر پاسخ پشتیبانی نمانید.
- آسیب‌پذیری را به‌شکل عمومی ثبت نکنید. ابتدا به [@Ivaworkersup](https://t.me/Ivaworkersup) فقط یک پیام بدون جزئیات حساس بفرستید و درخواست کانال امن گزارش کنید.
- در گزارش خصوصی، نسخه، سیستم‌عامل، مراحل بازتولید، اثر امنیتی و راه تماس را بنویسید؛ Secret واقعی نفرستید.

## English

- Never publish Cloudflare tokens, Global API Keys, panel passwords, `.env` files, signing keys, or user data.
- Use a least-privilege, preferably expiring API token and revoke or rotate it after installation.
- If a credential may be exposed, revoke or change it immediately; do not wait for support.
- Do not open a public vulnerability Issue. Send [@Ivaworkersup](https://t.me/Ivaworkersup) a message without sensitive details and request a secure reporting channel.
- A private report should include the affected version, operating system, reproduction steps, security impact, and contact information. Use test values, never live secrets.

## Русский

- Никогда не публикуйте токены Cloudflare, Global API Key, пароли панели, `.env`, ключи подписи или данные пользователей.
- Используйте токен с минимальными правами и сроком действия; после установки отзовите или замените его.
- При возможной утечке немедленно отзовите или измените учётные данные, не ожидая ответа поддержки.
- Не создавайте публичный Issue об уязвимости. Напишите [@Ivaworkersup](https://t.me/Ivaworkersup) без чувствительных деталей и запросите защищённый канал.
- В закрытом отчёте укажите версию, ОС, шаги воспроизведения и влияние. Не отправляйте действующие секреты.

## Supported versions

Only the latest stable release and the current pre-release, if one exists, are expected to receive security fixes. This statement may be updated in future release notes.
