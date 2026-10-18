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
- Разрешение показывать логотипы/названия клиентов GastroFamily и др. (взяты из постов агентства).
- Детали кейса «20 000$ економії».

## Медиа
CDN Instagram закрыт сетью среды (`*.cdninstagram.com`, `*.fbcdn.net` → 403). Нужно добавить их в Allowed domains, затем `python3 -I scripts/posts.py materials/instagram/posts-raw.json materials/instagram/posts.md materials/instagram/media` (так же для agency/ и photo/) скачает всё в `materials/*/media`.

## Чек-лист этапов
- [x] 0. Доступы (Apify, Vercel ок; CDN Instagram закрыт)
- [x] 1. Сбор: посты IG (лично, агентство, фото), TikTok — JSON + posts.md
- [ ] 1b. Скачать медиа (ждёт доступа к CDN)
- [x] 2. BRIEF.md, CLAUDE.md
- [x] 2. PRODUCT.md
- [x] 2.5 research.md
- [x] 3. Концепция: `.impeccable/surfaces/site-index-html.md` (слейт/хлопушка). DESIGN.md — после финала
- [x] 4. Сайт `site/` — собран, ждёт медиа (кадры hero, about, 6 роликов в «Перевіряю на собі»: `site/assets/media/*`, `site/assets/img/katya.webp`)
- [x] Vercel проект `katya-tsibrovska` слинкован, превью задеплоено
- [ ] 5. Проверка (Playwright 1440/390, 2 круга ревью)
- [ ] 6. Деплой Vercel
- [ ] 7. Отчёт

Страховочный сигнал: trig_01Jie5inGvDfczFwbYMqiwKi (12:35 UTC 18.10).
