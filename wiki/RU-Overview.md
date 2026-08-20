# Обзор IVA Panel

IVA Panel — профессиональная интегрированная панель управления несколькими локациями на базе Cloudflare Workers. Эта Wiki является официальным справочником по установке, функциям, загрузкам, безопасности, конфиденциальности и устранению неполадок.

## Быстрый старт

1. Прочитайте [[инструкцию по установке|RU-Installation]].
2. Используйте только [официальный веб-установщик](https://install.ivaworks.site/) или [@IVAPANELBOT](https://t.me/IVAPANELBOT).
3. Загружайте приложения только из [официальных GitHub Releases](https://github.com/MR-SHARIFI-Dev/IVA-PANEL/releases).
4. Перед обращением в поддержку проверьте [[FAQ|RU-FAQ]] и [[руководство по устранению неполадок|RU-Downloads-and-Troubleshooting]].

## Основные возможности

- Единое управление несколькими локациями
- Установка в один клик на Cloudflare Workers
- Подписки Base64, Clash/Mihomo, sing-box, Loon, Surge и Quantumult X
- VLESS, Trojan и Shadowsocks с разными транспортами
- Health Check, Load Balancing, Failover и Clean IP Scanner
- Маршрутизация GeoIP/GeoSite, Domestic Bypass, IPv6 и NAT64
- WARP, WARP+, WoW и Amnezia WARP
- Персидская RTL-панель, тёмная тема, журналы панели и JSON-редактор
- Квоты пользователей, срок действия, TOTP, сеансы и Backup/Restore
- Маршруты National Internet, Arvan CDN и Google Apps Script в v3
- Приложения для Android 10+ и Windows x64

Полный список: [[Feature Matrix]].

## Стабильные версии

`IVA Worker 4.4.73` · `Panel 10.7.59` · `Installer 1.4.9`

## Архитектура конфиденциальности

Запросы Cloudflare отправляются напрямую с устройства пользователя в Cloudflare. IVA не хранит токен, почту аккаунта, IP-адрес пользователя, пароль панели или журналы активности. См. [[Architecture and data flow]].

## Правообладатель

IVA Panel не является открытым исходным кодом. Закрытый код, бинарные файлы, название и логотип принадлежат **IVA Team**. Публичный репозиторий и Wiki содержат документацию и официальную информацию о выпусках.

