# Создание репозитория GitHub — инструкция для начинающих

[فارسی](../fa/GITHUB_SETUP.md) · [English](../en/GITHUB_SETUP.md) · [Русский](GITHUB_SETUP.md)

## Рекомендуемые параметры

- **Имя:** `iva-panel`
- **Описание:** `Official downloads, documentation, and release notes for IVA Panel — a multi-location management panel powered by Cloudflare Workers. فارسی • English • Русский`
- **Видимость:** сначала `Private`; после проверки можно выбрать `Public` для общедоступных загрузок. Публичный репозиторий не становится автоматически открытым исходным кодом — действует проприетарная лицензия.
- **Темы:** `iva-panel`, `cloudflare-workers`, `multi-location`, `windows`, `android`, `network-monitoring`, `persian`, `russian`, `releases`

## Создание на github.com

1. Войдите в GitHub и выберите **+ → New repository**.
2. Введите имя и описание выше.
3. На этапе подготовки выберите **Private**. После финальной проверки переключите на **Public**, если выпуски должны скачивать все пользователи.
4. Не создавайте автоматически README, `.gitignore` или лицензию — они уже есть в пакете.
5. Нажмите **Create repository**.
6. Выберите **uploading an existing file**.
7. Загрузите содержимое папки `iva-panel`, а не саму внешнюю папку.
8. Введите сообщение `Initial IVA Panel repository` и выполните Commit.

## Профессиональное оформление

1. В блоке About добавьте описание, сайт `https://ivaworks.site/` и темы.
2. Откройте **Settings → General → Social preview** и загрузите `assets/posters/iva-panel-hero.png`.
3. Оставьте Issues включёнными для структурированных сообщений об ошибках.
4. Создайте правило защиты ветки `main` в **Settings → Branches**.

## Заполнение пропусков

1. Проверьте `https://install.ivaworks.site/` перед публикацией репозитория.
2. Просмотрите текущие очищенные скриншоты и при изменении интерфейса заменяйте их только изображениями без личных данных.
3. Перед каждым Release проверяйте издателя и номер версии файлов.
4. Заполните `docs/PRIVACY_POLICY_TEMPLATE.md` на основе проверенного поведения всех приложений, ботов и установщика; рекомендуется юридическая проверка.

## Публикация Android и Windows

Не добавляйте крупные APK/EXE/MSI в историю Git. Прикрепляйте их к Release:

1. Выберите **Releases → Draft a new release**.
2. Для текущих файлов создайте тег `v1.0.1`.
3. Укажите заголовок `IVA Panel Apps v1.0.1`.
4. Скопируйте и заполните `releases/RELEASE_NOTES_TEMPLATE.md`, удалив неподтверждённые пункты.
5. Прикрепите `app-universal-release.apk` и `IVA-VPN-1.0.1-Setup.exe`.
6. Создайте и прикрепите `SHA256SUMS.txt`.
7. Тестовые сборки отмечайте как pre-release, стабильную — как latest release.
8. Опубликуйте Release и проверьте каждую ссылку загрузки.

## Создание контрольных сумм

Поместите файлы выпуска в `dist` и запустите из корня проекта:

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\make-checksums.ps1
```

или:

```bash
bash scripts/make-checksums.sh
```

Результат будет записан в `dist/SHA256SUMS.txt`.

## Никогда не загружайте

- API Token или Global API Key Cloudflare, пароли и `.env`.
- Данные аккаунтов пользователей.
- Ключи подписи Android, keystore или сертификаты подписи Windows.
- Закрытый исходный код, не предназначенный для публикации.
- Неизвестные или неподписанные бинарные файлы.

## Финальная проверка

- Все три README открываются правильно.
- Официальные ссылки верны.
- Файлы License, Security и Support присутствуют.
- Social Preview настроен.
- Release содержит описание и контрольные суммы.
- В истории Git нет секретов.
- Итоговая политика конфиденциальности соответствует реальной работе сервиса и не содержит пропусков.
