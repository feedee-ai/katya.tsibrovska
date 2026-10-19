# Катя Цибровська — персональный сайт

Сайт под Катю лично (не под агентство ZAYA). Владелец проекта — Александр (2BRO). Общение на русском, тексты сайта — українська + English.

## Ключевые факты
- **Имя:** Катерина (Катя) Цибровська, ник KATERINO4KA, 23 года, Київ, родом из Черкащины.
- **Ниша:** TikTok для бизнеса под ключ (основное), консультации/обучение (консультация 60 хв + 2 тижні підтримки, інтенсив «4 дні ТікТок», наставництво Zaya Boost), фото/видеосъёмки в Киеве.
- **Агентство:** ZAYA agency (@zaya.agency.ua), owner — Катя. Клиенты: GastroFamily (Білий Налив, БПШ, Барсук, Philadelphia Roll&Bowl), PancakeMill, Food&Kyiv, Waffle Bar, «Звірополіс».
- **Цифры (только из постов):** ролик за 5 хв — 297 000+ переглядів, +366 підписників; «Звірополіс» — результати ×15 після зміни стратегії; «20 000$ економії» (пост агентства); снимает с 14 лет; личные ролики до 11 325 просмотров.
- **Контакты:** Instagram @katya.tsibrovska (Direct — основной канал), фото @katerino4ka.photo, Telegram-канал t.me/+CJFwtZzXiwY1ZjQ6, YouTube youtu.be/C8awaqY130g, інтенсив intensivtiktok.wayforpay.shop, анкета Zaya Boost (Google Form в шапке), форма агентства forms.gle/5uek21rYaLJtVA5f8. Телефона/WhatsApp нет.
- **Визуальный признак:** длинные рыжие волосы — основа палитры.
- **Позиционирование:** TikTok — не рандом, а система; контент под продажи, а не под лайки; снимаем ваш персонал нативно, на телефон.
- **Аудитория сайта:** владельцы локального бизнеса Киева (кафе, рестораны, салоны, клиники, ветцентры) + начинающие SMM/креаторы (обучение) + девушки на фотосессию.

Подробно: `materials/BRIEF.md`, `PRODUCT.md`, `DESIGN.md`, `materials/research.md`.

## Открытые вопросы к клиенту
- Цены услуг (на сайте «за запитом», конфиг в `site/assets/config.js`).
- Личный Telegram для заявок (сейчас форма → Instagram Direct, текст копируется).
- Домен.
- Детали кейса «20 000$ економії».

## Медиа
CDN Instagram закрыт сетью среды (403). По решению Александра медиа качаются через Apify: приватный актор `media-fetch` (id xkhmFMkC9t2f9cL3o) кладёт файлы в KV store, скрипт забирает: `python3 -I scripts/apify_fetch.py materials/instagram/posts-raw.json materials/instagram/media jpg|mp4 [shortcodes]`. Сырые медиа в git не коммитятся (`materials/*/media/` в .gitignore). Названия клиентов агентства на сайте показывать можно (подтвердил Александр).

## Чек-лист этапов
- [x] 0. Доступы (Apify, Vercel ок; CDN Instagram закрыт)
- [x] 1. Сбор: посты IG (лично, агентство, фото), TikTok — JSON + posts.md
- [x] 1b. Медиа скачаны через Apify (222 + 103 + 103 кадра, 14 видео), факты из каруселей — в BRIEF.md
- [x] 2. BRIEF.md, CLAUDE.md
- [x] 2. PRODUCT.md
- [x] 2.5 research.md
- [x] 3. Концепция: `.impeccable/surfaces/site-index-html.md` (слейт/хлопушка). DESIGN.md — после финала
- [x] 4. Сайт `site/` — собран, ждёт медиа (кадры hero, about, 6 роликов в «Перевіряю на собі»: `site/assets/media/*`, `site/assets/img/katya.webp`)
- [x] Vercel проект `katya-tsibrovska` слинкован, превью задеплоено
- [x] 5. Проверка (Playwright 1440/390, 2 круга, impeccable detect)
- [x] 6. Прод: https://katya-tsibrovska.vercel.app (защита Vercel переключена на стандартную — прод-домен публичный, превью закрыты)
- [x] 7. Отчёт

Страховочные сигналы удалены — сайт сдан.

## В работе (19.10): правки из Telegram-чата
Александр прислал экспорт чата с правками и видео: Google Drive, файл `ChatExport_2026-10-19.zip` (59 МБ), id `1yNBGcq1_zAjuQzYYUWOlnxySbo9s_YUo`, владелец fedoristovaleks@gmail.com.
- Drive-коннектор (fedoristov97) чужие файлы не видит, drive.google.com закрыт сетью, старый Apify упёрся в месячный лимит.
- Александр подключает новый Apify (переменная `APIFY_TOKEN`). Дальше:
  1. `python3 -I scripts/apify_media_fetch/create.py` — создать актор media-fetch в новом аккаунте, обновить id в `scripts/apify_fetch.py` (или `MEDIA_ACTOR=<id>`).
  2. Скачать архив: запустить актор с `{"files":[{"url":"https://drive.usercontent.google.com/download?id=1yNBGcq1_zAjuQzYYUWOlnxySbo9s_YUo&export=download&confirm=t","key":"chat.zip"}]}` (файл должен быть доступен «всем по ссылке»), забрать из KV в `materials/telegram/`.
  3. Распаковать, выписать все правки списком в `materials/telegram/EDITS.md`, внести, подставить видео, проверить 1440/390, задеплоить, отчитаться по каждому пункту.
