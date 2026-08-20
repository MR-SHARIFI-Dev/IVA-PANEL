<p align="center">
  <img src="https://raw.githubusercontent.com/MR-SHARIFI-Dev/IVA-PANEL/main/assets/posters/iva-panel-hero-v2.png" alt="IVA | آیوا" width="100%">
</p>

<p align="center">
  <strong>IVA Panel · آیوا پنل · Панель IVA</strong><br>
  Professional multi-location management powered by Cloudflare Workers
</p>

<p align="center">
  <img alt="IVA Worker" src="https://img.shields.io/badge/IVA%20Worker-4.4.73-8b5cf6">
  <img alt="Panel" src="https://img.shields.io/badge/Panel-10.7.59-0ea5e9">
  <img alt="Installer" src="https://img.shields.io/badge/Installer-1.4.9-14b8a6">
  <img alt="Android" src="https://img.shields.io/badge/Android-10%2B-22c55e">
  <img alt="Windows" src="https://img.shields.io/badge/Windows-x64-2563eb">
  <img alt="License" src="https://img.shields.io/badge/license-Proprietary-7c3aed">
</p>

## Choose your language · زبان را انتخاب کنید · Выберите язык

| فارسی | English | Русский |
|---|---|---|
| [شروع از اینجا](FA-Overview) | [Start here](EN-Overview) | [Начать здесь](RU-Overview) |
| [نصب کامل](FA-Installation) | [Installation](EN-Installation) | [Установка](RU-Installation) |
| [سؤالات متداول](FA-FAQ) | [FAQ](EN-FAQ) | [FAQ](RU-FAQ) |
| [امنیت و پشتیبانی](FA-Security-and-Support) | [Security and support](EN-Security-and-Support) | [Безопасность и поддержка](RU-Security-and-Support) |

## Official resources

| Resource | Official address |
|---|---|
| Documentation | [docs.ivaworks.site](https://docs.ivaworks.site/) |
| Web installer | [install.ivaworks.site](https://install.ivaworks.site/) |
| GitHub repository | [IVA-PANEL](https://github.com/MR-SHARIFI-Dev/IVA-PANEL) |
| Network Intelligence | [net.ivaworks.site](https://net.ivaworks.site/) |
| Telegram channel | [@PANEL_ivaworks](https://t.me/PANEL_ivaworks) |
| Installation bot | [@IVAPANELBOT](https://t.me/IVAPANELBOT) |
| Support | [@Ivaworkersup](https://t.me/Ivaworkersup) |
| Community group | [@IVA_Panel_group](https://t.me/IVA_Panel_group) |
| Official email | [info@ivaworks.site](mailto:info@ivaworks.site) |

## Architecture at a glance

The normal route connects a user on restricted or filtered internet through **IVA | آیوا** and Cloudflare to the global internet. When national-intranet mode is required, an additional relay route can be selected after Cloudflare: National Relay, Google Relay, or Arvan CDN Relay.

```mermaid
flowchart TD
    U["User • کاربر — Restricted / filtered internet"] --> I["IVA • آیوا"]
    I --> C["Cloudflare"]
    C -->|"Normal route"| G["Global Internet • اینترنت جهانی"]
    C -->|"National-intranet mode"| M{"Select relay route"}
    M --> N["National Relay • رله ملی"]
    M --> R["Google Relay • رله گوگل"]
    M --> A["Arvan CDN Relay • رله آروان"]
    N --> G
    R --> G
    A --> G
```

Read the full explanation in [Architecture and data flow](Architecture-and-data-flow).

> IVA Panel is proprietary software owned by **IVA Team**. This public repository and Wiki provide official documentation and release information; they do not publish the proprietary source code.
