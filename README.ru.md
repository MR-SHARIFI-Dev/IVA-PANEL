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
  <a href="https://install.ivaworks.site/"><strong>Установка</strong></a> ·
  <a href="../../releases"><strong>Приложения</strong></a> ·
  <a href="docs/FEATURE_MATRIX.md"><strong>Все функции</strong></a> ·
  <a href="https://docs.ivaworks.site/"><strong>Сайт документации</strong></a> ·
  <a href="docs/ru/FAQ.md"><strong>FAQ</strong></a> ·
  <a href="https://net.ivaworks.site/"><strong>Сетевой радар</strong></a> ·
  <a href="https://t.me/Ivaworkersup"><strong>Поддержка</strong></a>
</p>

# IVA Panel

Официальный центр документации, загрузок и выпусков **IVA Panel** — профессиональной мультилокационной панели управления на базе Cloudflare Workers.

> Это официальный репозиторий распространения и документации. Проприетарный исходный код IVA Panel здесь не публикуется.

## Почему IVA Panel?

| Возможность | Что она даёт |
|---|---|
| ☁️ Архитектура Cloudflare Workers | Для самой панели не нужен отдельный VPS |
| 🌍 Multi-Location | Несколько локаций и точек инфраструктуры в одной панели |
| ⚡ Установка в один клик | Официальная установка через веб и Telegram |
| 💾 Backup & Restore | Полное резервное копирование, восстановление и перенос |
| 🤖 Управление Telegram | Официальная автоматизация установки и операций управления |
| 🖥 Отдельные приложения | Android 10+ и Windows x64 |
| 📡 Network Intelligence | Онлайн-радар статуса, задержки и сбоев |
| 🌐 Три языка документации | Персидский, английский и русский в этом репозитории |

## Текущие стабильные версии

| IVA Worker | Panel | Installer | Канал | Выпуск UTC | Минимальная версия |
|:---:|:---:|:---:|:---:|:---:|:---:|
| `4.4.73` | `10.7.59` | `1.4.9` | `stable` | `2026-08-17 19:55` | `4.4.55` |

Обновление не является обязательным. Полное сравнение более ста функций v1, v2 и v3 приведено в официальной **[матрице возможностей](docs/FEATURE_MATRIX.md)**, включая National Internet, Arvan CDN и Google Apps Script Relay в v3.

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
  <img src="assets/posters/iva-apps-showcase-v2.png" alt="Приложения IVA | آیوا для Windows и Android" width="100%">
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
  <img src="assets/posters/iva-network-radar-v2.png" alt="IVA | آیوا Network Intelligence" width="100%">
</p>

## Локальный FAQ на трёх языках

Полный FAQ теперь хранится в репозитории и охватывает установку, безопасность, Multi-Location, Backup/Restore, приложения, Relay, Requests, ограничения и поддержку.

**[Открыть FAQ на русском](docs/ru/FAQ.md)** · [فارسی](docs/fa/FAQ.md) · [English](docs/en/FAQ.md)

<p align="center">
  <a href="docs/ru/FAQ.md"><img src="assets/posters/iva-faq-v2.png" alt="IVA | آیوا FAQ" width="100%"></a>
</p>

## Официальные ссылки

| Ресурс | Адрес |
|---|---|
| Официальный сайт | [ivaworks.site](https://ivaworks.site/) |
| Сайт документации | [docs.ivaworks.site](https://docs.ivaworks.site/) |
| Веб-установщик | [install.ivaworks.site](https://install.ivaworks.site/) |
| Канал новостей | [@PANEL_ivaworks](https://t.me/PANEL_ivaworks) |
| Бот установки панели | [@IVAPANELBOT](https://t.me/IVAPANELBOT) |
| Бот IVA Mailer | [@IVAmailbot](https://t.me/IVAmailbot) |
| Поддержка | [@Ivaworkersup](https://t.me/Ivaworkersup) |
| Группа пользователей | [@IVA_Panel_group](https://t.me/IVA_Panel_group) |
| FAQ | [FAQ на русском в этом репозитории](docs/ru/FAQ.md) |
| Интернет-радар | [net.ivaworks.site](https://net.ivaworks.site/) |
| Официальная почта | `info@ivaworks.site` |

## Поддержка и сообщения об ошибках

- Сначала прочитайте [FAQ на русском](docs/ru/FAQ.md).
- Для ошибок приложений используйте шаблон GitHub **Bug report**; не прикладывайте секреты или данные аккаунта.
- По вопросам установки или аккаунта обращайтесь к [@Ivaworkersup](https://t.me/Ivaworkersup).
- Не публикуйте уязвимости открыто; следуйте [SECURITY.md](SECURITY.md).

## Конфиденциальность и условия

В текущей архитектуре запросы установки отправляются напрямую с устройства пользователя в Cloudflare. IVA не хранит API Token, данные аккаунта, IP-адрес пользователя или журналы активности. См. [Политику конфиденциальности](PRIVACY.md), [Условия использования](TERMS.md) и [проверку подписей выпусков](SIGNING.md).

## Лицензия и права

Проект **не является открытым исходным кодом**. Все права на закрытый код, бинарные файлы, название, логотип и оригинальные материалы принадлежат IVA Team. Загрузка или использование выпуска не даёт права копировать, распространять, продавать, выполнять обратную разработку или создавать производные продукты. См. [LICENSE.md](LICENSE.md).

Cloudflare и связанные названия и знаки принадлежат их владельцам. IVA Works не связан с Cloudflare и не одобрен компанией Cloudflare.

© 2026 IVA Team — All Rights Reserved.
