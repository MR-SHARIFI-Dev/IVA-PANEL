<p align="center">
  <img src="assets/posters/iva-panel-hero.png" alt="IVA Panel" width="100%">
</p>

<p align="center">
  <a href="README.md">فارسی</a> ·
  <a href="README.en.md">English</a> ·
  <a href="README.ru.md">Русский</a>
</p>

# IVA Panel

Официальный центр документации, загрузок и выпусков **IVA Panel** — профессиональной мультилокационной панели управления на базе Cloudflare Workers.

> Это официальный репозиторий распространения и документации. Проприетарный исходный код IVA Panel здесь не публикуется.

## Возможности

- Простая установка через [официальный веб-установщик](https://install.ivaworks.site/) или бота.
- Работа на платформе Cloudflare Workers.
- Управление несколькими локациями с глобальной поддержкой.
- Отдельные приложения для Windows и Android.
- Онлайн-радар состояния сервисов, трафика, задержки и сетевых сбоев.
- Бесплатное использование на условиях, объявленных IVA Works.

## Быстрая установка

1. Создайте аккаунт Cloudflare с доступным вам адресом электронной почты и подтвердите его.
2. Создайте в Cloudflare **ограниченный временный API Token**; не используйте Global API Key.
3. Откройте [официальный веб-установщик](https://install.ivaworks.site/) или [@IVAPANELBOT](https://t.me/IVAPANELBOT).
4. Передайте токен только через один из этих официальных способов и выберите создание панели.
5. Надёжно сохраните полученные адрес панели и пароль.
6. После установки отзовите или замените токен Cloudflare.

Полная инструкция: [установка на русском языке](docs/ru/INSTALLATION.md).

> **Безопасность:** Никогда не публикуйте токен Cloudflare, пароль панели или закрытую конфигурацию в Issues, группах или каналах. Выдавайте токену только минимально необходимые права.

## Приложения

Официальные файлы публикуются в [GitHub Releases](../../releases), а не сохраняются в истории репозитория.

| Платформа | Рекомендуемый файл | Для чего |
|---|---|---|
| Android 10 и новее | `app-universal-release.apk` | Универсальная сборка для распространённых архитектур |
| Windows 64-bit | `IVA-VPN-1.0.1-Setup.exe` | Только системы x64; 32-битной версии нет |

[Инструкция Android](apps/android/README.md) · [Инструкция Windows](apps/windows/README.md)

<p align="center">
  <img src="assets/posters/iva-apps-poster.png" alt="Приложения IVA Panel для Windows и Android" width="100%">
</p>

## Реальные скриншоты приложений

### Windows 64-bit

<p align="center">
  <img src="assets/screenshots/windows/windows-home-redacted.png" alt="IVA VPN для Windows" width="82%">
</p>

### Android 10+ — тёмная и светлая темы

<p align="center">
  <img src="assets/screenshots/android/android-dark-redacted.png" alt="IVA VPN Android, тёмная тема" width="39%">
  <img src="assets/screenshots/android/android-light-redacted.png" alt="IVA VPN Android, светлая тема" width="39%">
</p>

## IVA Network Intelligence

Онлайн-радар IVA показывает состояние сервисов в реальном времени, результаты прямых тестов из Ирана и других стран, трафик и задержку сети, а также обнаруживает сбои.

**[Открыть радар](https://net.ivaworks.site/)**

<p align="center">
  <img src="assets/posters/iva-network-radar.png" alt="IVA Network Intelligence" width="100%">
</p>

## Официальные ссылки

| Ресурс | Адрес |
|---|---|
| Официальный сайт | [ivaworks.site](https://ivaworks.site/) |
| Веб-установщик | [install.ivaworks.site](https://install.ivaworks.site/) |
| Канал новостей | [@PANEL_ivaworks](https://t.me/PANEL_ivaworks) |
| Бот установки панели | [@IVAPANELBOT](https://t.me/IVAPANELBOT) |
| Бот IVA Mailer | [@IVAmailbot](https://t.me/IVAmailbot) |
| Поддержка | [@Ivaworkersup](https://t.me/Ivaworkersup) |
| Группа пользователей | [@IVA_Panel_group](https://t.me/IVA_Panel_group) |
| Чат вопросов и ответов | [@IVAPANELCHAT](https://t.me/IVAPANELCHAT) |
| FAQ | [IVA Panel FAQ](https://telegra.ph/IVA-Panel--FAQ--%D8%B3%D9%88%D8%A7%D9%84%D8%A7%D8%AA-%D9%85%D8%AA%D8%AF%D8%A7%D9%88%D9%84-08-08-2) |
| Интернет-радар | [net.ivaworks.site](https://net.ivaworks.site/) |

## Поддержка и сообщения об ошибках

- Сначала прочитайте [FAQ](https://telegra.ph/IVA-Panel--FAQ--%D8%B3%D9%88%D8%A7%D9%84%D8%A7%D8%AA-%D9%85%D8%AA%D8%AF%D8%A7%D9%88%D9%84-08-08-2).
- Для ошибок приложений используйте шаблон GitHub **Bug report**; не прикладывайте секреты или данные аккаунта.
- По вопросам установки или аккаунта обращайтесь к [@Ivaworkersup](https://t.me/Ivaworkersup).
- Не публикуйте уязвимости открыто; следуйте [SECURITY.md](SECURITY.md).

## Инструкция для владельца репозитория

Для публикации проекта используйте [пошаговую инструкцию GitHub](docs/ru/GITHUB_SETUP.md). Структура папок описана в [docs/README.md](docs/README.md). Перед публичным запуском заполните и проверьте [шаблон политики конфиденциальности](docs/PRIVACY_POLICY_TEMPLATE.md) на основе реальной обработки данных.

## Лицензия и права

Проект **не является открытым исходным кодом**. Все права на закрытый код, бинарные файлы, название, логотип и оригинальные материалы принадлежат IVA Team. Загрузка или использование выпуска не даёт права копировать, распространять, продавать, выполнять обратную разработку или создавать производные продукты. См. [LICENSE.md](LICENSE.md).

Cloudflare и связанные названия и знаки принадлежат их владельцам. IVA Works не связан с Cloudflare и не одобрен компанией Cloudflare.

© 2026 IVA Team — All Rights Reserved.
