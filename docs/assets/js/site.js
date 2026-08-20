const copy = {
  fa: {
    skip: "رفتن به محتوای اصلی", menuAria: "باز کردن منوی سایت", themeAria: "تغییر پوسته",
    navOverview: "معرفی", navFeatures: "قابلیت‌ها", navApps: "اپلیکیشن‌ها", navInstall: "نصب", navRadar: "رادار", navFaq: "سؤالات متداول", navDownloads: "دانلودها", navPrivacy: "حریم خصوصی", navTerms: "شرایط استفاده", navSecurity: "امنیت",
    heroEyebrow: "نسخهٔ پایدار در دسترس است", heroName: "آیوا پنل",
    heroLead: "پنل حرفه‌ای مولتی‌لوکیشن بر بستر Cloudflare Workers؛ مدیریت سریع، یکپارچه و هوشمند با اپلیکیشن‌های اختصاصی Windows و Android.",
    installNow: "نصب یک‌کلیکی", allFeatures: "مشاهدهٔ همه قابلیت‌ها", githubRepo: "مخزن GitHub", githubWiki: "GitHub Wiki", docsLabel: "مستندات",
    overviewKicker: "یک کنترل‌سنتر یکپارچه", overviewTitle: "زیرساخت چند لوکیشن، بدون پیچیدگی اضافه",
    overviewLead: "IVA Panel برای مدیریت کاربران، مسیرها، تنظیمات و لوکیشن‌های مختلف در یک داشبورد واکنش‌گرا طراحی شده است. خود پنل روی Cloudflare Workers اجرا می‌شود و برای اجرای پنل به VPS جداگانه نیاز ندارد.",
    proprietaryNote: "این پروژه متن‌باز نیست؛ این ریپو مرکز رسمی مستندات، دانلود و انتشار نسخه‌هاست.",
    statFeatures: "قابلیت مستندشده", statLanguages: "زبان مستندات", statApps: "اپلیکیشن اختصاصی", statRadar: "رادار وضعیت شبکه",
    featuresKicker: "قابلیت‌های کلیدی v3", featuresTitle: "ابزارهای حرفه‌ای برای مدیریت، پایداری و امنیت", matrixLink: "ماتریس کامل v1 / v2 / v3",
    fMultiTitle: "Multi-Location", fMultiText: "مدیریت چند لوکیشن، مسیر و زیرساخت از یک پنل واحد.",
    fNationalTitle: "اتصال در اینترنت ملی", fNationalText: "مسیر Relay جایگزین برای شرایط اینترانت و اختلال اینترنت بین‌الملل.",
    fArvanTitle: "Arvan CDN Relay", fArvanText: "بهینه‌سازی مسیر و تأخیر در شرایط شبکه و تنظیمات مناسب.",
    fGoogleTitle: "Google Apps Script", fGoogleText: "مسیر Relay مبتنی بر Google Apps Script در نسخهٔ سوم.",
    fBackupTitle: "Full Backup & Restore", fBackupText: "پشتیبان‌گیری کامل، بازیابی تنظیمات و مهاجرت کنترل‌شده.",
    fSecurityTitle: "امنیت حساب", fSecurityText: "TOTP، کد بازیابی، محدودیت ورود و مدیریت نشست‌ها.",
    fRoutingTitle: "Routing & DNS", fRoutingText: "GeoIP، GeoSite، DoH، DNS محلی و قوانین مسیریابی سفارشی.",
    fClientsTitle: "کلاینت‌های گسترده", fClientsText: "Mihomo، sing-box، Loon، Surge، Quantumult X و Base64.",
    versionsKicker: "تکامل محصول", versionsTitle: "سه نسل، یک مسیر رو به جلو",
    v1Text: "اشتراک خودکار، کلاینت‌های اصلی، Load Balancing، Health Check، DNS و ابزارهای پایه.",
    v2Text: "داشبورد RTL، حالت پیشرفته، زنجیره‌های پروکسی، امنیت TLS، مدیریت Telegram و ویرایشگر JSON.",
    v3Text: "کاربران و سهمیه‌ها، TOTP، D1، API مدیریت متمرکز، Relayها، Backup/Restore و نصب یک‌کلیکی.",
    appsKicker: "اپلیکیشن‌های رسمی", appsTitle: "یک تجربهٔ یکپارچه روی Windows و Android", downloadRelease: "دانلود آخرین نسخه",
    windowsText: "نسخهٔ اختصاصی برای Windows 64-bit؛ نسخهٔ ۳۲ بیتی ارائه نمی‌شود.",
    androidText: "نسخهٔ Universal برای معماری‌های رایج و دستگاه‌های Android 10 به بالا.",
    windowsCaption: "نمای واقعی Windows — اطلاعات IP بلور شده است", darkCaption: "Android — حالت تاریک", lightCaption: "Android — حالت روشن",
    installKicker: "راه‌اندازی ساده و امن", installTitle: "از حساب Cloudflare تا پنل فعال در چند مرحله",
    installLead: "نصب از وب‌سایت یا ربات رسمی انجام می‌شود. از API Token محدود استفاده کنید و هرگز Global API Key، رمز یا فایل Backup را در فضای عمومی نفرستید.",
    openInstaller: "باز کردن نصب‌کننده", openBot: "ربات نصب پنل",
    step1Title: "حساب را تأیید کنید", step1Text: "یک حساب Cloudflare با ایمیلی که به آن دسترسی دارید بسازید.",
    step2Title: "توکن محدود بسازید", step2Text: "فقط حداقل دسترسی لازم را به API Token بدهید.",
    step3Title: "پنل را ایجاد کنید", step3Text: "توکن را فقط در وب‌سایت یا ربات رسمی وارد کنید.",
    step4Title: "دسترسی را امن کنید", step4Text: "آدرس و رمز را ذخیره و توکن نصب را لغو یا تعویض کنید.",
    radarKicker: "IVA Network Intelligence", radarTitle: "دید زنده از وضعیت شبکه و سرویس‌ها",
    radarLead: "رادار IVA تست‌های قابل مشاهده، تأخیر، ترافیک و اختلال سرویس‌ها را نمایش می‌دهد تا قبل از عیب‌یابی، تصویر روشن‌تری از وضعیت شبکه داشته باشید.",
    radarPoint1: "وضعیت لحظه‌ای سرویس‌ها", radarPoint2: "تست مستقیم از ایران و جهان", radarPoint3: "بررسی تأخیر و اختلال شبکه", openRadar: "باز کردن رادار",
    faqKicker: "راهنمای داخلی و سه‌زبانه", faqTitle: "قبل از پشتیبانی، پاسخ را در FAQ پیدا کنید",
    faqLead: "پرسش‌های نصب، امنیت، Multi-Location، Backup، اپلیکیشن‌ها، Relay، Requestها و محدودیت‌ها داخل همین پروژه مستند شده‌اند.", readFaq: "مطالعهٔ FAQ کامل",
    linksKicker: "مسیرهای رسمی IVA Works", linksTitle: "فقط از لینک‌های رسمی استفاده کنید", officialSite: "وب‌سایت رسمی", channel: "کانال اطلاع‌رسانی", group: "گروه رسمی کاربران", support: "پشتیبانی", mailer: "ربات IVA Mailer", panelBot: "ربات IVA Panel",
    footerTagline: "در مسیر توسعه و نوآوری", releases: "نسخه‌ها", footerLegal: "پروژه اختصاصی است و تحت مجوز Proprietary منتشر می‌شود.",
    featuresPageKicker: "IVA Worker · نسل‌های محصول", featuresPageTitle: "ماتریس کامل قابلیت‌ها", featuresPageLead: "مقایسهٔ دقیق قابلیت‌های v1، v2 و v3؛ بیش از صد قابلیت در مدیریت، شبکه، امنیت، کلاینت‌ها، Relay و اتوماسیون.",
    searchFeatures: "جست‌وجوی قابلیت...", featureCount: "قابلیت", backHome: "بازگشت به صفحه اصلی", noResult: "نتیجه‌ای پیدا نشد.",
    faqPageKicker: "مستندات رسمی", faqPageTitle: "سؤالات متداول IVA Panel", faqPageLead: "پاسخ‌های رسمی دربارهٔ نصب، امنیت، قابلیت‌ها، اپلیکیشن‌ها، شبکه و پشتیبانی.", searchFaq: "جست‌وجو در FAQ...", loading: "در حال بارگذاری مستندات...", loadError: "بارگذاری مستندات انجام نشد."
  },
  en: {
    skip: "Skip to main content", menuAria: "Open site menu", themeAria: "Change color theme",
    navOverview: "Overview", navFeatures: "Features", navApps: "Applications", navInstall: "Install", navRadar: "Radar", navFaq: "FAQ", navDownloads: "Downloads", navPrivacy: "Privacy", navTerms: "Terms", navSecurity: "Security",
    heroEyebrow: "Stable release available", heroName: "IVA Panel",
    heroLead: "Professional multi-location management powered by Cloudflare Workers, with a unified workflow and dedicated Windows and Android applications.",
    installNow: "One-click installation", allFeatures: "Explore all features", githubRepo: "GitHub repository", githubWiki: "GitHub Wiki", docsLabel: "Documentation",
    overviewKicker: "One integrated control center", overviewTitle: "Multi-location infrastructure without unnecessary complexity",
    overviewLead: "IVA Panel brings users, routes, settings, and multiple locations into one responsive dashboard. The panel itself runs on Cloudflare Workers and does not require a separate VPS.",
    proprietaryNote: "This project is not open source. The repository is the official documentation, download, and release hub.",
    statFeatures: "Documented capabilities", statLanguages: "Documentation languages", statApps: "Dedicated applications", statRadar: "Network status radar",
    featuresKicker: "Key v3 capabilities", featuresTitle: "Professional tools for management, reliability, and security", matrixLink: "Complete v1 / v2 / v3 matrix",
    fMultiTitle: "Multi-Location", fMultiText: "Manage multiple locations, routes, and infrastructure endpoints in one panel.",
    fNationalTitle: "National Internet relay", fNationalText: "An alternative Relay path for intranet and international-network disruption conditions.",
    fArvanTitle: "Arvan CDN Relay", fArvanText: "Route and latency optimization under suitable network and configuration conditions.",
    fGoogleTitle: "Google Apps Script", fGoogleText: "A Google Apps Script-based Relay path available in generation three.",
    fBackupTitle: "Full Backup & Restore", fBackupText: "Complete backup, controlled recovery, and configuration migration.",
    fSecurityTitle: "Account security", fSecurityText: "TOTP, recovery codes, login limits, and session management.",
    fRoutingTitle: "Routing & DNS", fRoutingText: "GeoIP, GeoSite, DoH, local DNS, and custom routing rules.",
    fClientsTitle: "Broad client support", fClientsText: "Mihomo, sing-box, Loon, Surge, Quantumult X, and Base64.",
    versionsKicker: "Product evolution", versionsTitle: "Three generations, one forward path",
    v1Text: "Automatic subscriptions, core clients, load balancing, health checks, DNS, and essential tools.",
    v2Text: "RTL dashboard, advanced mode, proxy chains, TLS security, Telegram management, and JSON editing.",
    v3Text: "Users and quotas, TOTP, D1, central management API, Relays, Backup/Restore, and one-click setup.",
    appsKicker: "Official applications", appsTitle: "One consistent experience across Windows and Android", downloadRelease: "Download latest release",
    windowsText: "Dedicated application for 64-bit Windows. A 32-bit build is not provided.",
    androidText: "Universal build for common architectures and devices running Android 10 or later.",
    windowsCaption: "Real Windows interface — IP details are redacted", darkCaption: "Android — dark theme", lightCaption: "Android — light theme",
    installKicker: "Simple and secure setup", installTitle: "From Cloudflare account to an active panel in a few steps",
    installLead: "Install through the official website or bot. Use a restricted API Token, and never post a Global API Key, password, or backup file publicly.",
    openInstaller: "Open web installer", openBot: "Panel installation bot",
    step1Title: "Verify the account", step1Text: "Create a Cloudflare account using an email address you can access.",
    step2Title: "Create a restricted token", step2Text: "Grant only the minimum permissions needed by the API Token.",
    step3Title: "Create the panel", step3Text: "Enter the token only on the official website or Telegram bot.",
    step4Title: "Secure access", step4Text: "Store the address and password, then revoke or rotate the installation token.",
    radarKicker: "IVA Network Intelligence", radarTitle: "A live view of services and network conditions",
    radarLead: "IVA Radar shows observable tests, latency, traffic, and service disruption signals so you can understand network conditions before troubleshooting.",
    radarPoint1: "Real-time service status", radarPoint2: "Direct tests from Iran and worldwide", radarPoint3: "Latency and disruption analysis", openRadar: "Open network radar",
    faqKicker: "Local trilingual guidance", faqTitle: "Find the answer in the FAQ before contacting support",
    faqLead: "Installation, security, Multi-Location, Backup, applications, Relays, Requests, and limitations are documented within this project.", readFaq: "Read the complete FAQ",
    linksKicker: "Official IVA Works destinations", linksTitle: "Use official links only", officialSite: "Official website", channel: "Announcement channel", group: "Official user group", support: "Support", mailer: "IVA Mailer bot", panelBot: "IVA Panel bot",
    footerTagline: "Building and innovating", releases: "Releases", footerLegal: "This is a proprietary project distributed under a proprietary license.",
    featuresPageKicker: "IVA Worker · Product generations", featuresPageTitle: "Complete Feature Matrix", featuresPageLead: "A detailed v1, v2, and v3 comparison covering more than one hundred management, networking, security, client, Relay, and automation capabilities.",
    searchFeatures: "Search capabilities...", featureCount: "features", backHome: "Back to home", noResult: "No matching feature was found.",
    faqPageKicker: "Official documentation", faqPageTitle: "IVA Panel Frequently Asked Questions", faqPageLead: "Official answers about installation, security, capabilities, applications, networking, and support.", searchFaq: "Search the FAQ...", loading: "Loading documentation...", loadError: "The documentation could not be loaded."
  },
  ru: {
    skip: "Перейти к содержанию", menuAria: "Открыть меню сайта", themeAria: "Изменить цветовую тему",
    navOverview: "Обзор", navFeatures: "Возможности", navApps: "Приложения", navInstall: "Установка", navRadar: "Радар", navFaq: "FAQ", navDownloads: "Загрузки", navPrivacy: "Конфиденциальность", navTerms: "Условия", navSecurity: "Безопасность",
    heroEyebrow: "Стабильная версия доступна", heroName: "IVA Panel",
    heroLead: "Профессиональное управление несколькими локациями на базе Cloudflare Workers с единым процессом и приложениями для Windows и Android.",
    installNow: "Установка в один клик", allFeatures: "Все возможности", githubRepo: "Репозиторий GitHub", githubWiki: "GitHub Wiki", docsLabel: "Документация",
    overviewKicker: "Единый центр управления", overviewTitle: "Мультилокационная инфраструктура без лишней сложности",
    overviewLead: "IVA Panel объединяет пользователей, маршруты, настройки и несколько локаций в одной адаптивной панели. Сама панель работает на Cloudflare Workers и не требует отдельного VPS.",
    proprietaryNote: "Проект не является открытым исходным кодом. Репозиторий служит официальным центром документации, загрузок и выпусков.",
    statFeatures: "Документированных функций", statLanguages: "Языка документации", statApps: "Отдельных приложения", statRadar: "Сетевой радар",
    featuresKicker: "Ключевые функции v3", featuresTitle: "Профессиональные инструменты управления, стабильности и безопасности", matrixLink: "Полная матрица v1 / v2 / v3",
    fMultiTitle: "Multi-Location", fMultiText: "Управление несколькими локациями, маршрутами и точками инфраструктуры.",
    fNationalTitle: "National Internet Relay", fNationalText: "Альтернативный Relay-маршрут для интранета и сбоев международной сети.",
    fArvanTitle: "Arvan CDN Relay", fArvanText: "Оптимизация маршрута и задержки при подходящих условиях сети и конфигурации.",
    fGoogleTitle: "Google Apps Script", fGoogleText: "Relay-маршрут на базе Google Apps Script в третьем поколении.",
    fBackupTitle: "Full Backup & Restore", fBackupText: "Полная резервная копия, восстановление и контролируемый перенос настроек.",
    fSecurityTitle: "Безопасность аккаунта", fSecurityText: "TOTP, коды восстановления, ограничение входа и управление сессиями.",
    fRoutingTitle: "Routing & DNS", fRoutingText: "GeoIP, GeoSite, DoH, локальный DNS и пользовательские правила маршрутизации.",
    fClientsTitle: "Широкая поддержка клиентов", fClientsText: "Mihomo, sing-box, Loon, Surge, Quantumult X и Base64.",
    versionsKicker: "Развитие продукта", versionsTitle: "Три поколения — одно направление",
    v1Text: "Автоматические подписки, основные клиенты, балансировка, Health Check, DNS и базовые инструменты.",
    v2Text: "RTL-панель, расширенный режим, цепочки прокси, TLS, управление Telegram и редактор JSON.",
    v3Text: "Пользователи и квоты, TOTP, D1, централизованный API, Relays, Backup/Restore и установка в один клик.",
    appsKicker: "Официальные приложения", appsTitle: "Единый опыт на Windows и Android", downloadRelease: "Скачать последнюю версию",
    windowsText: "Отдельное приложение только для 64-битной Windows. 32-битной версии нет.",
    androidText: "Универсальная сборка для распространённых архитектур и Android 10 или новее.",
    windowsCaption: "Реальный интерфейс Windows — IP скрыт", darkCaption: "Android — тёмная тема", lightCaption: "Android — светлая тема",
    installKicker: "Простая и безопасная установка", installTitle: "От аккаунта Cloudflare до активной панели за несколько шагов",
    installLead: "Используйте официальный сайт или бота. Создавайте ограниченный API Token и никогда не публикуйте Global API Key, пароль или файл Backup.",
    openInstaller: "Открыть установщик", openBot: "Бот установки панели",
    step1Title: "Подтвердите аккаунт", step1Text: "Создайте аккаунт Cloudflare с доступным вам адресом электронной почты.",
    step2Title: "Создайте ограниченный токен", step2Text: "Выдайте API Token только минимально необходимые права.",
    step3Title: "Создайте панель", step3Text: "Вводите токен только на официальном сайте или в официальном боте.",
    step4Title: "Защитите доступ", step4Text: "Сохраните адрес и пароль, затем отзовите или замените установочный токен.",
    radarKicker: "IVA Network Intelligence", radarTitle: "Актуальная картина состояния сети и сервисов",
    radarLead: "IVA Radar показывает наблюдаемые тесты, задержку, трафик и признаки сбоев, помогая оценить сеть до начала диагностики.",
    radarPoint1: "Статус сервисов в реальном времени", radarPoint2: "Прямые тесты из Ирана и других стран", radarPoint3: "Анализ задержки и сбоев", openRadar: "Открыть сетевой радар",
    faqKicker: "Локальная документация на трёх языках", faqTitle: "Найдите ответ в FAQ перед обращением в поддержку",
    faqLead: "Установка, безопасность, Multi-Location, Backup, приложения, Relays, Requests и ограничения описаны внутри проекта.", readFaq: "Открыть полный FAQ",
    linksKicker: "Официальные ресурсы IVA Works", linksTitle: "Используйте только официальные ссылки", officialSite: "Официальный сайт", channel: "Канал новостей", group: "Официальная группа", support: "Поддержка", mailer: "Бот IVA Mailer", panelBot: "Бот IVA Panel",
    footerTagline: "Разработка и инновации", releases: "Выпуски", footerLegal: "Это проприетарный проект, распространяемый по закрытой лицензии.",
    featuresPageKicker: "IVA Worker · Поколения продукта", featuresPageTitle: "Полная матрица возможностей", featuresPageLead: "Подробное сравнение v1, v2 и v3: более ста функций управления, сети, безопасности, клиентов, Relay и автоматизации.",
    searchFeatures: "Поиск по функциям...", featureCount: "функций", backHome: "На главную", noResult: "Подходящих функций не найдено.",
    faqPageKicker: "Официальная документация", faqPageTitle: "Часто задаваемые вопросы IVA Panel", faqPageLead: "Официальные ответы по установке, безопасности, функциям, приложениям, сети и поддержке.", searchFaq: "Поиск в FAQ...", loading: "Загрузка документации...", loadError: "Не удалось загрузить документацию."
  }
};

const getStored = (key, fallback) => {
  try { return localStorage.getItem(key) || fallback; } catch { return fallback; }
};

const state = {
  lang: getStored("iva-lang", "fa"),
  theme: getStored("iva-theme", "dark")
};

const t = (key) => copy[state.lang]?.[key] || copy.fa[key] || key;

function applyLanguage(lang, reloadDocs = true) {
  if (!copy[lang]) lang = "fa";
  state.lang = lang;
  try { localStorage.setItem("iva-lang", lang); } catch {}
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[lang][element.dataset.i18n];
    if (value) element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[lang][element.dataset.i18nAria];
    if (value) element.setAttribute("aria-label", value);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const value = copy[lang][element.dataset.i18nPlaceholder];
    if (value) element.setAttribute("placeholder", value);
  });
  document.querySelectorAll("[data-lang-content]").forEach((element) => {
    element.hidden = element.dataset.langContent !== lang;
  });
  const page = document.body.dataset.page;
  if (page === "faq" && reloadDocs) loadFaq();
  updateFeatureCount();
}

function applyTheme(theme) {
  state.theme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = state.theme;
  try { localStorage.setItem("iva-theme", state.theme); } catch {}
}

function deriveRepositoryUrl() {
  const host = window.location.hostname;
  const parts = window.location.pathname.split("/").filter(Boolean);
  if (!host.endsWith("github.io") || !parts.length) return "https://github.com/MR-SHARIFI-Dev/IVA-PANEL";
  const owner = host.slice(0, -".github.io".length);
  return `https://github.com/${owner}/${parts[0]}`;
}

function wireRepositoryLinks() {
  const base = deriveRepositoryUrl();
  document.querySelectorAll(".repo-link").forEach((link) => {
    if (base) {
      link.href = base + (link.dataset.repoPath || "");
      link.target = "_blank";
      link.rel = "noopener";
    } else if (link.getAttribute("href") === "#") {
      link.href = "https://github.com/MR-SHARIFI-Dev/IVA-PANEL";
    }
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"})[char]);
}

function inlineMarkdown(value) {
  let text = escapeHtml(value);
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");
  text = text.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const repository = deriveRepositoryUrl();
    let safeHref = /^(https?:\/\/|\.\.?\/|[A-Za-z0-9_/-]+\.md)/.test(href) ? href : "#";
    if (/INSTALLATION\.md/.test(href)) safeHref = `${state.lang}/INSTALLATION.md`;
    if (/PRIVACY\.md/.test(href)) safeHref = "privacy.html";
    if (/TERMS\.md/.test(href)) safeHref = "terms.html";
    if (/SIGNING\.md/.test(href)) safeHref = "downloads.html";
    if (/\.\.\/\.\.\/(README(?:\.[a-z]+)?\.md|SECURITY\.md|LICENSE\.md)/.test(href) && repository) {
      const file = href.split("/").pop();
      safeHref = `${repository}/blob/main/${file}`;
    }
    if (/releases/.test(href) && repository) safeHref = `${repository}/releases`;
    const external = /^https?:\/\//.test(safeHref) ? ' target="_blank" rel="noopener"' : "";
    return `<a href="${escapeHtml(safeHref)}"${external}>${label}</a>`;
  });
  return text;
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const output = [];
  let paragraph = [];
  let inList = false;
  let skipHtmlBlock = false;
  const flushParagraph = () => {
    if (paragraph.length) output.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };
  const closeList = () => { if (inList) output.push("</ul>"); inList = false; };

  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith("<p")) { skipHtmlBlock = true; flushParagraph(); closeList(); continue; }
    if (skipHtmlBlock) { if (line.includes("</p>")) skipHtmlBlock = false; continue; }
    if (!line || line.startsWith("<div") || line === "</div>") { flushParagraph(); closeList(); continue; }
    if (line.startsWith("<img") || line.startsWith("<a ")) continue;
    if (line === "---") { flushParagraph(); closeList(); output.push("<hr>"); continue; }
    if (line.startsWith("### ")) { flushParagraph(); closeList(); output.push(`<h3>${inlineMarkdown(line.slice(4))}</h3>`); continue; }
    if (line.startsWith("## ")) { flushParagraph(); closeList(); output.push(`<h2>${inlineMarkdown(line.slice(3))}</h2>`); continue; }
    if (line.startsWith("# ")) { flushParagraph(); closeList(); output.push(`<h1>${inlineMarkdown(line.slice(2))}</h1>`); continue; }
    if (line.startsWith("- ")) {
      flushParagraph();
      if (!inList) { output.push("<ul>"); inList = true; }
      output.push(`<li>${inlineMarkdown(line.slice(2))}</li>`);
      continue;
    }
    paragraph.push(line);
  }
  flushParagraph(); closeList();
  return output.join("\n");
}

async function loadFeatureMatrix() {
  const table = document.querySelector("#feature-matrix");
  if (!table) return;
  try {
    const response = await fetch("FEATURE_MATRIX.md", { cache: "no-store" });
    if (!response.ok) throw new Error("Feature matrix unavailable");
    const markdown = await response.text();
    const rows = markdown.split("\n").filter((line) => /^\|.+\|$/.test(line.trim()));
    const headerIndex = rows.findIndex((line) => line.includes("قابلیت / Feature"));
    const dataRows = rows.slice(headerIndex + 2).map((line) => line.split("|").slice(1, -1).map((cell) => cell.trim())).filter((cells) => cells.length === 4);
    table.innerHTML = `<thead><tr><th>قابلیت / Feature</th><th>v1</th><th>v2</th><th>v3</th></tr></thead><tbody>${dataRows.map((cells) => `<tr>${cells.map((cell, index) => `<td class="${index ? (cell.includes("✅") ? "yes" : "no") : ""}">${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody>`;
    table.dataset.total = String(dataRows.length);
    updateFeatureCount();
    filterFeatures();
  } catch {
    table.closest(".matrix-wrap").innerHTML = `<div class="empty-state">${t("loadError")}</div>`;
  }
}

function filterFeatures() {
  const input = document.querySelector("#feature-search");
  const table = document.querySelector("#feature-matrix");
  if (!input || !table.tBodies.length) return;
  const query = input.value.trim().toLocaleLowerCase(state.lang);
  let shown = 0;
  [...table.tBodies[0].rows].forEach((row) => {
    const match = !query || row.textContent.toLocaleLowerCase(state.lang).includes(query);
    row.hidden = !match;
    if (match) shown += 1;
  });
  table.dataset.shown = String(shown);
  updateFeatureCount();
}

function updateFeatureCount() {
  const table = document.querySelector("#feature-matrix");
  const count = document.querySelector("#feature-count");
  if (!table || !count) return;
  const value = table.dataset.shown || table.dataset.total || "0";
  count.textContent = `${value} ${t("featureCount")}`;
}

async function loadFaq() {
  const container = document.querySelector("#faq-document");
  if (!container) return;
  container.innerHTML = `<div class="empty-state">${t("loading")}</div>`;
  try {
    const response = await fetch(`${state.lang}/FAQ.md`, { cache: "no-store" });
    if (!response.ok) throw new Error("FAQ unavailable");
    container.innerHTML = markdownToHtml(await response.text());
    filterFaq();
  } catch {
    container.innerHTML = `<div class="empty-state">${t("loadError")}</div>`;
  }
}

function filterFaq() {
  const input = document.querySelector("#faq-search");
  const container = document.querySelector("#faq-document");
  if (!input || !container) return;
  const query = input.value.trim().toLocaleLowerCase(state.lang);
  [...container.children].forEach((element) => {
    element.hidden = Boolean(query) && !element.textContent.toLocaleLowerCase(state.lang).includes(query);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(state.theme);
  applyLanguage(state.lang, false);
  wireRepositoryLinks();

  document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));
  document.querySelector(".theme-toggle")?.addEventListener("click", () => applyTheme(state.theme === "dark" ? "light" : "dark"));
  document.querySelector(".menu-toggle")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    const menu = document.querySelector("#site-nav");
    const open = menu.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll("#site-nav a").forEach((link) => link.addEventListener("click", () => document.querySelector("#site-nav")?.classList.remove("open")));
  window.addEventListener("scroll", () => document.querySelector(".site-header")?.classList.toggle("scrolled", window.scrollY > 20), { passive: true });

  document.querySelector("#feature-search")?.addEventListener("input", filterFeatures);
  document.querySelector("#faq-search")?.addEventListener("input", filterFaq);
  if (document.body.dataset.page === "features") loadFeatureMatrix();
  if (document.body.dataset.page === "faq") loadFaq();
});
