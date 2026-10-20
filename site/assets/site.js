(() => {
  const doc = document.documentElement;
  doc.classList.add("js");
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const S = window.SITE || {};

  /* ---------- i18n ---------- */
  const EN = {
    "skip": "Skip to content",
    "nav.services": "Services", "nav.ideas": "Ideas", "nav.cases": "Cases", "nav.about": "About", "nav.cta": "Book a call",
    "slate.prod": "Production", "slate.scene": "Scene", "slate.sceneVal": "your business", "slate.take": "Take", "slate.camera": "Camera", "slate.cameraVal": "phone", "slate.date": "Date",
    "hero.t1": "TikTok", "hero.t2": "that brings you", "hero.t3": "customers",
    "hero.lead": "I’m Katya Tsibrovska. I run TikTok for brands end to end: strategy, scripts, filming, editing, posting. I film your people so viewers watch to the very end.",
    "hero.cta": "Book a diagnostic call", "hero.cta2": "Watch the takes",
    "hero.note": "Videos I filmed for Kyiv venues reached up to 2.8 million views. Step one is a diagnostic call about your business.",
    "credits.label": "In the credits",
    "system.t1": "TikTok isn’t random.", "system.t2": "It’s a system.",
    "system.lead": "Recognise these takes? I see them on every other business account. Here’s what I do about them.",
    "system.take": "Take 1 — scrapped", "system.take2": "Take 2 — scrapped", "system.take3": "Take 3 — scrapped",
    "system.b1": "You post, nothing lands.", "system.f1": "I find what hooks your audience in particular, and we repeat it again and again. What works and why — TikTok always has an answer.",
    "system.b2": "“I don’t know what to film.”", "system.f2": "Series that speak to your customers’ pains and scripts people watch to the end. Ideas are my job, not yours.",
    "system.b3": "Views, but no sales.", "system.f3": "If the goal is sales, content is built differently than for awareness. My first question: what should happen after someone watches?",
    "services.title": "Call sheet", "services.lead": "Three doors: for businesses, for those who learn, and for anyone who wants beautiful shots of themselves. Pick your scene.",
    "svc.business": "Business", "svc.learn": "Learning", "svc.shoot": "Shoots",
    "price.ask": "price after the call", "price.request": "on request", "price.link": "price at the link", "price.waitlist": "waitlist",
    "svc.tiktok.t": "Turnkey TikTok", "svc.tiktok.d": "I take over your brand’s whole TikTok. You run the business, the account does its job.",
    "svc.tiktok.s1": "Brief, competitor and market research", "svc.tiktok.s2": "Strategy and series built for your sales", "svc.tiktok.s3": "Scripts people watch to the end",
    "svc.tiktok.s4": "Filming — your staff or actors", "svc.tiktok.s5": "Editing", "svc.tiktok.s6": "Posting and a review of what worked",
    "svc.tiktok.cta": "Book a diagnostic call",
    "svc.consult.t": "Consultation, 60 minutes", "svc.consult.d": "Two tracks: TikTok for business — strategy, why there are no views, how to film with your staff. Or a personal blog — how to start and stop fearing judgement.",
    "svc.consult.s1": "You send your question — I analyse it in advance", "svc.consult.s2": "A document with analysis and growth ideas that stays with you", "svc.consult.s3": "60 minutes on Zoom or in person in Kyiv", "svc.consult.s4": "2 weeks of support afterwards",
    "svc.consult.cta": "Book a consultation",
    "svc.intensive.t": "“4 Days of TikTok” intensive", "svc.intensive.d": "For those who film themselves and want to understand why one video lands and another doesn’t.",
    "svc.intensive.s1": "How the algorithm and recommendations work", "svc.intensive.s2": "How to find ideas fast", "svc.intensive.s3": "Scripts people watch to the end", "svc.intensive.s4": "Filming, light and editing without the pain", "svc.intensive.s5": "How to start earning with these skills",
    "svc.intensive.cta": "Get access",
    "svc.boost.t": "Zaya Boost mentorship", "svc.boost.d": "The TikTok creator profession from zero — and your first clients. The first cohort is done, the waitlist for the second is open.", "svc.boost.cta": "Join the waitlist",
    "svc.shoot.t": "Photo and video in Kyiv", "svc.shoot.d": "Portraits, feminine and couple shoots, love stories, weddings. Book photos — get a short video from the same shoot too.", "svc.shoot.cta": "Pick a shoot date",
    "room.title": "Writers’ room", "room.lead": "“I don’t know what to film” is what I hear most. Pick your business and I’ll show three series I’d start with.",
    "room.fine": "These are examples. On the diagnostic call I build series for your venue, audience and goals.", "room.cta": "I want a plan for my business",
    "cases.title": "What came out of the edit",
    "cases.c1.t": "Bilyi Navyl, Solomianka", "cases.c1.d": "A promo video brought the venue its sales record.",
    "cases.c2.t": "Bilyi Navyl, KPI", "cases.c2.d": "A promo video brought more guests to the venue.",
    "cases.c3.t": "Barsuk, Lukianivka", "cases.c3.d": "A cocktail promo video filled the tables with bookings.",
    "takes.title": "I test it on myself", "takes.lead": "My personal blog is my lab. I try formats there before bringing them to you.",
    "takes.t1": "My home village. And a hello from Klopotenko", "takes.t2": "Verkhniachka, where I’m from", "takes.t3": "Save the spot: a bookshop café", "takes.t4": "The boss who read “The Diary of a CEO”", "takes.t5": "An experiment that took off", "takes.t6": "Let the lioness out",
    "takes.more": "All videos on Instagram",
    "about.title": "Hi, I’m Katya",
    "about.p1": "I’ve been filming since I was 14 — and it’s still my favourite thing. I grew up in the Cherkasy region and work in Kyiv. For two years I ran TikTok for the GastroFamily chain, and now I have my own agency, ZAYA — we run TikTok for venues and brands.",
    "about.p2": "On my personal blog I test formats on myself: over 11 thousand people watched my video about my home village, and the hello from Klopotenko is real. What works, I bring to clients.",
    "about.quote": "Anyone can be on camera. You just need someone next to you who lights that very spark in the frame.",
    "about.k1": "Filming since", "about.v1": "age 14", "about.k2": "Based in", "about.v2": "Kyiv", "about.k3": "Agency", "about.k4": "Camera", "about.v4": "phone",
    "board.title": "How we work, frame by frame",
    "board.s0": "Diagnostic call", "board.d0": "We talk about your business, audience and goals. I’ll tell you honestly whether you need TikTok right now.",
    "board.s1": "Brief and research", "board.d1": "Competitors, market, what you’ve filmed so far.",
    "board.s2": "Strategy", "board.d2": "Series, frequency, who’s on camera.",
    "board.s3": "Scripts", "board.d3": "A hook in the first seconds, a story to the end.",
    "board.s4": "Filming", "board.d4": "Native, on a phone. Your staff open up on camera.",
    "board.s5": "Editing and posting", "board.d5": "We publish, watch the numbers and change what doesn’t work.",
    "voices.title": "What people write after working with me",
    "voices.q1": "“As easy, comfortable and fast as it gets. The videos came out light, fun, dynamic and informative at the same time. Thanks to just a few videos we’ve already sold 5 kits”", "voices.a1": "owner of Patsiukerka, a rodent pet shop",
    "voices.q2": "“Katya, the way you build strategies is amazing — everything is so detailed and clearly thought through”", "voices.a2": "Bohdana, after a consultation",
    "voices.q3": "“So lovely to see such a great video and review. Come again”", "voices.a3": "Kitchen Garden Kyiv, restaurant",
    "voices.q4": "“I was so nervous at first, but it all turned out much simpler thanks to you”", "voices.a4": "photo shoot client",
    "voices.q5": "“So beautiful, Katya, I’m proud!”", "voices.a5": "video shoot client",
    "faq.title": "Asked before the shoot",
    "faq.q1": "How much does it cost?", "faq.a1": "It depends on the format and scope. I name the price for account management after the diagnostic call, before we start — no surprises later. The intensive’s price is on the payment page.",
    "faq.q2": "We don’t have a “face of the brand”. Who do we film?", "faq.a2": "Most often the stars already work for you — I find them in your team and help them open up. For large companies without such a face, we bring in actors.",
    "faq.q3": "Do we need expensive gear?", "faq.a3": "No. We film on a phone: even top agencies work this way, and it makes content feel native to viewers.",
    "faq.q4": "How many videos should we post?", "faq.a4": "The idea makes a video go viral, not the quantity. We set the frequency in the strategy to match your resources.",
    "faq.q5": "When will we see results?", "faq.a5": "The first weeks are for testing series. Zviropolis spent two months on tests, and in month three their videos got 592 thousand views. It can be faster: Patsiukerka sold 5 kits from the first videos. I won’t promise millions in a week.",
    "faq.q6": "Why not just write scripts in ChatGPT?", "faq.a6": "GPT processes information fast, but it won’t replace creative work and positioning for your brand. And viewers’ banner blindness is harder to break than ever.",
    "faq.q7": "Do you work outside Kyiv?", "faq.a7": "Consultations and courses are online, from any city. Shoots are in Kyiv. For other cities, write to me and we’ll talk.",
    "book.t1": "The next scene is", "book.t2": "yours",
    "book.lead": "Fill in the slate and I’ll get a ready message in my DMs. I reply personally.",
    "book.tgch": "Telegram channel",
    "book.what": "What are we filming", "book.o1": "TikTok for business", "book.o2": "Consultation", "book.o3": "Learning", "book.o4": "Photo / video",
    "book.name": "Name", "book.biz": "Business or niche", "book.bizPh": "e.g. a coffee shop in Podil",
    "book.date": "Preferred date", "book.time": "Time", "book.any": "any time", "book.morning": "morning, 10–13", "book.day": "afternoon, 13–17", "book.evening": "evening, 17–20",
    "book.contact": "How to reach you", "book.contactPh": "@instagram or phone",
    "book.preview": "The message I’ll receive", "book.send": "Send to Instagram DM",
    "book.hint": "The text will be copied. Paste it into the chat that opens.",
    "foot.photo": "Photo portfolio", "foot.tg": "Telegram channel", "foot.agency": "ZAYA agency", "foot.fine": "Kateryna Tsibrovska · Kyiv",
    "dock": "Book a diagnostic call",
    "nav.shoots": "Shoots",
    "svc.boost.s1": "10 modules, 59 lessons — no three-hour lectures",
    "svc.boost.s2": "Psychology lessons against fear and impostor syndrome",
    "svc.boost.s3": "Weekly mastermind and homework review",
    "svc.boost.s4": "Lifetime access, bonuses and templates",
    "svc.boost.for": "For complete beginners, creators without a strategy and business owners who run their page themselves.",
    "svc.shoot.s1": "Filming and editing dance, events and celebrations",
    "svc.shoot.s2": "Expert videos and content for personal blogs",
    "svc.shoot.s3": "You get the raw files",
    "cases.lead": "Views aren’t the goal. I watch what happens after them: questions in the comments, bookings, sales.",
    "cases.f.client": "Waffle Bar, VDNH",
    "cases.f.unit": "M",
    "cases.f.t": "views on a product video. It sold waffles directly and made the place famous.",
    "cases.f.k1": "likes",
    "cases.f.k2": "shares",
    "cases.f.k3": "saves",
    "cases.f.cl": "comment under the video",
    "cases.author": "author",
    "cases.f.note": "Another Waffle Bar video was filmed in 5 minutes — 297 thousand views and +366 followers.",
    "u.mln": "M",
    "u.k": "K",
    "u.kits": "kits",
    "cases.c4.t": "Zviropolis, vet clinics",
    "cases.c4.d": "We spent two months testing series — the “vet reads the dog’s mind” idea didn’t work. We changed the delivery and filming style and combined useful advice with the doctor. In month three — 592 thousand views, fifteen times more than at the start.",
    "cases.c4.q": "Clients write in the comments and DMs asking for a consultation.",
    "cases.c5.t": "Patsiukerka, a rodent pet shop",
    "cases.c5.d": "Starter kits at 7,500–11,500 UAH sold from the first targeted videos. Ad spend — 0 UAH. A few videos paid for a month of management.",
    "cases.c5.q": "“I didn’t expect to get all the finished videos within a week”",
    "cases.foot": "For two years I ran TikTok for Dmytro Borysov’s GastroFamily — Bilyi Navyl, Philadelphia Roll&Bowl, Barsuk, BPSh. Those were my very first projects.",
    "shoots.title": "Shots you recognise yourself in",
    "shoots.lead": "Photo and video from one shoot in Kyiv: portraits, couples, love stories, weddings, business content. “I love using photos to make women fall in love with themselves even more.”",
    "shoots.more": "More shoots — @katerino4ka.photo",
    "voices.q6": "“One of the most important modules, I think, was writing a full strategy: you need more than random videos and trends, everything has to be thought through”",
    "voices.a6": "Bohdana, TikTok course",
    "voices.q7": "“At first there were lots of doubts and fears, but I never once regretted it. Katya explains everything simply, clearly and without fluff”",
    "voices.a7": "Daryna Shevchenko, TikTok course",
    /* правки 19.10 — перекривають старі ключі вище */
    "nav.tiktok": "TikTok",
    "nav.shoots": "Photo & video",
    "nav.cta": "Diagnostic call",
    "slate.cameraVal": "phone & pro camera",
    "hero.lead": "I’m KATERINO4KA. I run TikTok for brands end to end: strategy, scripts, filming, editing, posting. I also do personal and commercial photo and video shoots — so you can book an empathetic videographer for your celebration, too.",
    "hero.cta2": "Photo & video shoots",
    "hero.note": "Videos I filmed for businesses reached up to 4 million views. Step one is a diagnostic call about your business.",
    "clients.label": "Among my clients",
    "clients.more": "plus Barsuk, Philadelphia Roll&amp;Bowl, Food&amp;Kyiv, Linden, Momotsha Store, Neon.Planet",
    "doors.t.k": "For business",
    "doors.t.t": "TikTok that brings you customers",
    "doors.t.m": "Up to 4M views · 2 years with GastroFamily · Waffle Bar, Zviropolis, Pancake Mill",
    "doors.t.go": "Cases and a diagnostic call",
    "doors.s.k": "Personal & commercial",
    "doors.s.t": "Photo and video shoots in Kyiv",
    "doors.s.m": "Portraits, weddings, birthdays, gender reveals, dance · all raw files",
    "doors.s.go": "Work samples and booking a date",
    "services.lead": "For businesses, for those who learn, and for anyone who wants beautiful shots of themselves. Pick your scene.",
    "svc.tiktok.d": "I take over your brand’s whole TikTok. You run the business, and the account brings customers and awareness organically.",
    "svc.tiktok.s3": "Scripts that integrate your product",
    "svc.tiktok.s4": "Filming with your staff or actors",
    "svc.tiktok.s6": "Posting and a review of what worked and what didn’t",
    "svc.tiktok.note": "One video, three platforms: TikTok, Instagram Reels and YouTube Shorts. A Barsuk video got 583K views on TikTok and 1.1M on Instagram.",
    "svc.boost.s1": "11 modules, no three-hour lectures",
    "svc.photo.t": "Photo shoots",
    "svc.photo.d": "Personal and commercial photo shoots in Kyiv: portraits, couples, love stories, business content.",
    "svc.photo.s1": "Edited photos plus all raw files",
    "svc.photo.s2": "A video as a gift if there’s time left",
    "svc.photo.s3": "From two hours, the hourly rate goes down",
    "svc.photo.cta": "Pick a photo shoot date",
    "svc.video.t": "Video shoots",
    "svc.video.d": "Personal and commercial shoots on a pro camera: weddings, birthdays, gender reveals, dance.",
    "svc.video.s1": "You get all raw files; editing is an add-on",
    "svc.video.s2": "Photos too if there’s time left",
    "svc.video.s3": "From two hours, the hourly rate goes down",
    "svc.video.cta": "Pick a video shoot date",
    "svc.shoot.cta": "Pick a shoot date",
    "cases.lead": "Views are the goal, but what matters is what happens after them: questions in the comments, bookings, sales.",
    "cases.f.k4": "followers in 3 months",
    "takes.title": "Videos I filmed for businesses",
    "takes.lead": "Real TikTok views. On camera — their own staff, filmed on a phone.",
    "takes.cta": "I want videos like these",
    "biz.1": "A promo that brought the venue its sales record",
    "biz.2": "A kitchen sketch. 1.1M on Instagram",
    "biz.3": "“Still feeding your dog from the table?”",
    "biz.4": "A vet explains which fruit dogs can eat",
    "biz.5": "POV: you work in hospitality",
    "biz.6": "Staff introduce a new item",
    "biz.7": "Chef and sous-chef on camera",
    "biz.8": "A product intro that sold 5 kits",
    "biz.9": "A bubble waffle with Oreo you want to eat straight off the screen",
    "shoots.title": "Photos and videos you recognise yourself in",
    "shoots.lead": "Personal and commercial shoots in Kyiv: photo sessions, weddings, birthdays, gender reveals, dance. Edited photos, all raw files, video on a pro camera.",
    "shoots.vtitle": "Video shoots",
    "shoots.v1": "Dance shoot",
    "shoots.v2": "A look in the city",
    "shoots.v4": "Wedding",
    "shoots.v5": "Christening",
    "about.title": "Hi, I’m Katya!",
    "about.p1": "I’ve been filming since I was 14 — and it’s still my favourite thing. I grew up in the Cherkasy region and work in Kyiv. For two years I ran TikTok for the GastroFamily chain, and now I create content for top businesses on the market and capture important moments at personal shoots.",
    "about.k3": "Format",
    "about.v3": "TikTok · photo · video",
    "about.v4": "phone &amp; pro camera",
    "board.d3": "We integrate your product into scripts to get results.",
    "board.d4": "Native, on a phone or a pro camera. Your staff open up on camera.",
    "voices.gBiz": "Business and learning",
    "voices.gShoot": "Photo and video shoots",
    "voices.b1": "“As easy, comfortable and fast as it gets. The videos came out light, fun, dynamic and informative at the same time. Thanks to just a few videos we’ve already sold 5 kits”",
    "voices.b1a": "owner of Patsiukerka, a rodent pet shop",
    "voices.b2": "“Katya, the way you build strategies is amazing — everything is so detailed and clearly thought through”",
    "voices.b2a": "Bohdana, after a consultation",
    "voices.b3": "“At first there were lots of doubts and fears, but I never once regretted it. Katya explains everything simply, clearly and without fluff”",
    "voices.b3a": "Daryna Shevchenko, TikTok course",
    "voices.b4": "“One of the most important modules, I think, was writing a full strategy: you need more than random videos and trends, everything has to be thought through”",
    "voices.b4a": "Bohdana, TikTok course",
    "voices.s1": "“Incredible work! We were sure it would be great, and you confirmed it — and even exceeded our expectations. So easy, responsible, unnoticeable during the celebration — and such a gorgeous result”",
    "voices.s1a": "celebration video shoot",
    "voices.s2": "“Katya, you really need a gift and a vision for this. The sound, the video, the song. That’s some serious work)”",
    "voices.s2a": "after a video shoot",
    "voices.s3": "“Thank you for such gorgeous photos and videos! So much material) I’m shocked we filmed all that in two hours)”",
    "voices.s3a": "photo and video, a 2-hour shoot",
    "voices.s4": "“I really appreciate that you told me honestly right away it was your first gender reveal shoot — but I trusted you and never regretted it for a second. The videos turned out wonderful. It’s a memory that will stay with me for life!”",
    "voices.s4a": "gender reveal video shoot",
    "voices.s5": "“Every frame is chosen so well: the light, the shadows, the angles — everything. I love it, exactly as I wanted”",
    "voices.s5a": "after a photo shoot",
    "voices.s6": "“Got my photos — and I’m thrilled! Every frame is a little masterpiece”",
    "voices.s6a": "photo shoot client",
    "voices.s7": "“I was so nervous at first, but it all turned out much simpler thanks to you. You guided me, supported me and did a great job”",
    "voices.s7a": "photo shoot client",
    "faq.a3": "No. For TikTok we film on a phone — it makes content feel native to viewers. For personal shoots and celebrations I bring a pro camera.",
    "book.o4": "Photo shoot",
    "book.o5": "Video shoot",
    "book.how1": "Tap the button — the text is copied automatically",
    "book.how2": "A chat with me opens in Instagram",
    "book.how3": "<b>Paste the text</b> into the message field and send it"
  };

  const RUB = {
    uk: {
      cafe: ["кавʼярня", [
        ["Бариста реагує на найдивніші замовлення дня", "Живі емоції вашої команди — найкоротший шлях до довіри."],
        ["Один напій — 15 секунд, тільки звук", "Без слів, без музики: дивляться до кінця і хочуть спробувати."],
        ["Скільки коштує сніданок у центрі Києва?", "Ціна й адреса в перші дві секунди відповідають на «Де ви?» ще до коментаря."]]],
      resto: ["ресторан", [
        ["Кухня за 30 секунд до подачі у вечірній пік", "Закулісся, яке гість ніколи не бачить, — і хоче побачити наживо."],
        ["Офіціант радить: що б він замовив за 500 грн", "Персонал як експерт: зручна підказка і привід прийти саме до вас."],
        ["Страва, за якою повертаються", "Соціальний доказ без реклами — гості говорять за вас."]]],
      bakery: ["кондитерська", [
        ["Торт від ескізу до коробки за хвилину", "Процес продає краще за готовий результат."],
        ["Реакція іменинника, коли відкривають коробку", "Емоція, яку хочеться повторити для своїх."],
        ["Скільки коштує торт на 2 кг і чому така ціна", "Прозорість ціни знімає страх «а раптом дорого»."]]],
      beauty: ["салон краси", [
        ["До і після за 20 секунд, без фільтрів", "Результат майстра, який неможливо підробити."],
        ["Майстриня пояснює: чого не робити вдома", "Користь, яку зберігають, і експертність без самохвальби."],
        ["Що входить у процедуру за цю ціну", "Людина бачить, за що платить, ще до запису."]]],
      clinic: ["клініка", [
        ["Лікар відповідає на один коментар", "Одне питання — один ролик. Рубрика, яка не закінчується."],
        ["Що відбувається на першому прийомі", "Знімає страх перед візитом — головну причину відкладати запис."],
        ["Міф чи правда з лікарем", "Короткі ролики, якими діляться з близькими."]]],
      vet: ["ветцентр", [
        ["Пацієнт дня: історія з дозволу власника", "Тварини + щаслива розвʼязка — формат, який дивляться до кінця."],
        ["Ветлікар пояснює: коли їхати негайно", "Користь, через яку вас згадають у потрібний момент."],
        ["Один день адміністраторки клініки", "Люди за брендом, яким довіряють свого улюбленця."]]],
      shop: ["магазин", [
        ["Розпаковка нового надходження: руки, звук, ціна", "Новинка з ціною в кадрі приводить у магазин, а не лише в коментарі."],
        ["Образ на три бюджети", "Людина бачить себе в одному з варіантів."],
        ["Консультант радить, що взяти в подарунок", "Обличчя магазину, до якого хочеться прийти особисто."]]],
      expert: ["експерт", [
        ["Одне питання з коментарів — одна відповідь", "Аудиторія сама підказує теми, а ви стаєте тим, кого питають."],
        ["Помилка, яку я бачу найчастіше", "Конкретика показує досвід краще за регалії."],
        ["День зі мною: закулісся роботи", "Довіряють людям, а не логотипам."]]]
    },
    en: {
      cafe: ["coffee shop", [
        ["The barista reacts to the weirdest orders of the day", "Real emotions from your team are the shortest way to trust."],
        ["One drink, 15 seconds, sound only", "No words, no music: people watch to the end and want to try it."],
        ["How much is breakfast in central Kyiv?", "Price and address in the first two seconds answer “Where are you?” before anyone asks."]]],
      resto: ["restaurant", [
        ["The kitchen 30 seconds before service at evening rush", "Backstage the guest never sees — and wants to see in person."],
        ["The waiter’s pick: what he’d order for 500 UAH", "Staff as experts: a handy tip and a reason to come to you."],
        ["The dish people come back for", "Social proof without ads — guests speak for you."]]],
      bakery: ["bakery", [
        ["A cake from sketch to box in a minute", "The process sells better than the finished result."],
        ["The birthday reaction when the box opens", "An emotion people want to repeat for their own."],
        ["What a 2 kg cake costs and why", "Price transparency removes the “what if it’s expensive” fear."]]],
      beauty: ["beauty salon", [
        ["Before and after in 20 seconds, no filters", "A master’s result that can’t be faked."],
        ["The stylist explains what not to do at home", "Useful content people save, and expertise without bragging."],
        ["What this price actually includes", "People see what they pay for before they book."]]],
      clinic: ["clinic", [
        ["A doctor answers one comment", "One question, one video. A series that never runs out."],
        ["What happens at your first appointment", "Removes the fear of the visit — the main reason people put it off."],
        ["Myth or fact with a doctor", "Short videos people share with family."]]],
      vet: ["vet clinic", [
        ["Patient of the day, with the owner’s permission", "Animals plus a happy ending — a format people watch to the end."],
        ["The vet explains when to come right away", "Useful content that makes people remember you when it matters."],
        ["A day in the life of the front desk", "The people behind the brand, trusted with a beloved pet."]]],
      shop: ["shop", [
        ["Unboxing new stock: hands, sound, price", "A new item with its price on screen brings people to the shop, not just to the comments."],
        ["One outfit, three budgets", "Viewers see themselves in one of the options."],
        ["The sales consultant’s gift picks", "A face of the shop people want to visit in person."]]],
      expert: ["expert", [
        ["One question from the comments, one answer", "The audience suggests topics, and you become the person they ask."],
        ["The mistake I see most often", "Specifics show experience better than titles."],
        ["A day with me, behind the scenes", "People trust people, not logos."]]]
    }
  };

  const UK = {};
  $$("[data-i18n]").forEach(el => { UK[el.dataset.i18n] = el.innerHTML; });
  $$("[data-i18n-ph]").forEach(el => { UK[el.dataset.i18nPh] = el.placeholder; });
  const UK_TITLE = document.title;
  let lang = "uk";
  try { lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : (localStorage.getItem("lang") || "uk"); } catch (e) {}

  /* ---------- strikes: wrap words so the line paints over the glyphs ---------- */
  function splitStrikes() {
    $$(".blooper__bad s").forEach(el => {
      const words = el.textContent.trim().split(/\s+/);
      el.innerHTML = words.map((w, i) => `<span class="strike-w" style="--i:${i}">${w.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c])}</span>`).join(" ");
      el.classList.add("is-split");
    });
  }

  function setLang(l) {
    lang = l === "en" ? "en" : "uk";
    const dict = lang === "en" ? EN : UK;
    doc.lang = lang;
    $$("[data-i18n]").forEach(el => { const v = dict[el.dataset.i18n] ?? UK[el.dataset.i18n]; if (v != null) el.innerHTML = v; });
    $$("[data-i18n-ph]").forEach(el => { const v = dict[el.dataset.i18nPh] ?? UK[el.dataset.i18nPh]; if (v != null) el.placeholder = v; });
    $$(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.title = lang === "en" ? "Katya Tsibrovska — turnkey TikTok for business · Kyiv" : UK_TITLE;
    try { localStorage.setItem("lang", lang); } catch (e) {}
    splitStrikes();
    applyPrices();
    renderNiches();
    updateMsg();
  }
  $$(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));

  /* ---------- config links & prices ---------- */
  $$("[data-href]").forEach(a => { const v = S[a.dataset.href]; if (v) a.href = v; });
  function applyPrices() {
    const p = S.prices || {};
    $$("[data-price]").forEach(el => { const v = p[el.dataset.price]; if (v) el.textContent = v; });
  }

  /* ---------- date on slate ---------- */
  const d = new Date();
  const pad = n => String(n).padStart(2, "0");
  const sd = $("#slate-date"); if (sd) sd.textContent = `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${String(d.getFullYear()).slice(2)}`;
  const yr = $("#year"); if (yr) yr.textContent = d.getFullYear();

  /* ---------- intro ---------- */
  $$(".hero .slate dd").forEach((el, i) => el.style.setProperty("--d", i));
  $$(".hero__title .line").forEach((el, i) => el.style.setProperty("--d", i));
  [".hero__lead", ".hero__actions", ".hero__note"].forEach((s, i) => { const el = $(s); if (el) el.style.setProperty("--d", i); });
  if (!reduce) {
    const fl = document.createElement("div"); fl.className = "slate-flash"; fl.setAttribute("aria-hidden", "true"); document.body.appendChild(fl);
    requestAnimationFrame(() => doc.classList.add("intro"));
  } else {
    doc.classList.remove("js");
    doc.classList.add("js-static");
  }

  /* ---------- timecode ---------- */
  const tc = $("#timecode");
  if (tc && !reduce) {
    const t0 = performance.now();
    const tick = now => {
      const s = (now - t0) / 1000;
      const f = Math.floor((s % 1) * 25);
      tc.textContent = `00:${pad(Math.floor(s / 60) % 60)}:${pad(Math.floor(s) % 60)}:${pad(f)}`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  /* ---------- nav & dock ---------- */
  const nav = $("#nav"), dock = $("#dock"), hero = $(".hero"), booking = $("#booking");
  let heroOut = false, bookIn = false;
  const syncDock = () => dock && dock.classList.toggle("is-on", heroOut && !bookIn);
  addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 20), { passive: true });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([e]) => { heroOut = !e.isIntersecting; syncDock(); }).observe($(".hero__actions") || hero);
    new IntersectionObserver(([e]) => { bookIn = e.isIntersecting; syncDock(); }, { threshold: 0.05 }).observe(booking);
  }

  /* ---------- reveals ---------- */
  const revealTargets = [
    ...$$(".section .h2"), ...$$(".section__lead"), ...$$(".call"), ...$$(".case"),
    ...$$(".storyboard li"), ...$$(".quote"), ...$$(".about__photo"), ...$$(".about__text > *:not(.h2)"), ...$$(".faq details"), ...$$(".book"), ...$$(".cut"), ...$$(".feature > *"), ...$$(".shot")
  ];
  if ("IntersectionObserver" in window && !reduce) {
    revealTargets.forEach(el => el.classList.add("reveal"));
    $$(".storyboard li, .quote, .case, .cut, .shot, .feature > *").forEach(el => el.style.setProperty("--d", [...el.parentNode.children].indexOf(el)));
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }), { rootMargin: "0px 0px -10% 0px" });
    revealTargets.forEach(el => io.observe(el));
    const bo = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { setTimeout(() => e.target.classList.add("is-in"), 300 + [...e.target.parentNode.children].indexOf(e.target) * 220); bo.unobserve(e.target); }
    }), { threshold: 0.6 });
    $$(".blooper").forEach(el => bo.observe(el));
  } else {
    $$(".blooper").forEach(el => el.classList.add("is-in"));
  }

  /* ---------- counters ---------- */
  const fmt = n => n.toLocaleString("uk-UA").replace(/ |,/g, " ");
  if ("IntersectionObserver" in window && !reduce) {
    const co = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, to = +el.dataset.count, dec = +(el.dataset.dec || 0), t0 = performance.now(), dur = 1600;
      const step = now => {
        const k = Math.min(1, (now - t0) / dur), raw = to * (1 - Math.pow(1 - k, 4));
        el.textContent = dec ? (lang === "en" ? raw.toFixed(dec) : raw.toFixed(dec).replace(".", ",")) : fmt(Math.round(raw));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step); co.unobserve(el);
    }), { threshold: 0.5 });
    $$("[data-count]").forEach(el => { el.textContent = "0"; co.observe(el); });
  }

  /* ---------- call sheet ---------- */
  $$(".call").forEach((c, i) => {
    const h = $(".call__head", c), body = $(".call__body", c);
    body.id = body.id || `call-body-${i}`;
    h.setAttribute("role", "button"); h.tabIndex = 0;
    h.setAttribute("aria-controls", body.id);
    const set = open => { c.classList.toggle("is-open", open); h.setAttribute("aria-expanded", String(open)); body.inert = !open; };
    set(i === 0);
    const toggle = () => set(!c.classList.contains("is-open"));
    h.addEventListener("click", toggle);
    h.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
  });

  /* ---------- writers' room ---------- */
  let niche = "cafe";
  const nichesEl = $("#niches"), rubricsEl = $("#rubrics"), sceneEl = $("#room-scene"), mini = $(".clapper--mini");
  function renderNiches() {
    if (!nichesEl) return;
    const set = RUB[lang];
    nichesEl.innerHTML = "";
    Object.entries(set).forEach(([k, [label]]) => {
      const b = document.createElement("button");
      b.type = "button"; b.className = "niche"; b.setAttribute("role", "radio");
      b.setAttribute("aria-checked", String(k === niche)); b.tabIndex = k === niche ? 0 : -1;
      b.textContent = label; b.dataset.k = k;
      b.addEventListener("click", () => pickNiche(k, true));
      nichesEl.appendChild(b);
    });
    renderRubrics(false);
  }
  nichesEl && nichesEl.addEventListener("keydown", e => {
    const keys = Object.keys(RUB[lang]); let i = keys.indexOf(niche);
    if (["ArrowRight", "ArrowDown"].includes(e.key)) i = (i + 1) % keys.length;
    else if (["ArrowLeft", "ArrowUp"].includes(e.key)) i = (i - 1 + keys.length) % keys.length;
    else return;
    e.preventDefault(); pickNiche(keys[i], true); $(`[data-k="${keys[i]}"]`, nichesEl).focus();
  });
  function pickNiche(k, clap) {
    niche = k;
    $$(".niche", nichesEl).forEach(b => { const on = b.dataset.k === k; b.setAttribute("aria-checked", String(on)); b.tabIndex = on ? 0 : -1; });
    renderRubrics(clap);
  }
  function renderRubrics(clap) {
    const [label, list] = RUB[lang][niche];
    sceneEl.textContent = label;
    rubricsEl.innerHTML = list.map(([hook, why], i) =>
      `<li class="rubric" style="--i:${i}"><span class="rubric__take">${lang === "en" ? "take" : "дубль"} ${i + 1}</span><p class="rubric__hook">«${hook}»</p><p class="rubric__why">${why}</p></li>`).join("");
    if (clap && mini && !reduce) { mini.classList.remove("is-clap"); void mini.offsetWidth; mini.classList.add("is-clap"); }
    const cta = $("#room-cta span");
    if (cta) cta.textContent = lang === "en" ? `I want a plan for my ${label}` : `Хочу план для: ${label}`;
  }
  $("#room-cta")?.addEventListener("click", () => {
    const biz = $("#book-biz"); if (biz && !biz.value) biz.value = RUB[lang][niche][0];
    setService("tiktok");
  });

  /* ---------- takes reel ---------- */
  const reel = $("#reel");
  $$("[data-reel]").forEach(b => b.addEventListener("click", () => {
    const w = $(".take", reel)?.getBoundingClientRect().width || 260;
    reel.scrollBy({ left: (+b.dataset.reel) * (w + 20) * 2, behavior: reduce ? "auto" : "smooth" });
  }));

  /* ---------- media: empty states & autoplay on view ---------- */
  $$(".frame, .take").forEach(f => {
    const scr = $(".frame__screen", f) || f;
    const media = $("video, img", scr);
    if (!media) return;
    scr.dataset.empty = lang === "en" ? "frame" : "кадр";
    const markEmpty = () => f.classList.add("is-empty");
    const markFull = () => f.classList.remove("is-empty");
    if (media.tagName === "IMG") {
      if (media.complete && media.naturalWidth === 0) markEmpty();
      media.addEventListener("error", markEmpty); media.addEventListener("load", markFull);
    } else {
      const poster = new Image();
      poster.onerror = () => { if (media.readyState === 0) markEmpty(); };
      poster.src = media.getAttribute("poster");
      media.addEventListener("loadeddata", markFull);
      const src = $("source", media); src && src.addEventListener("error", () => { if (!poster.naturalWidth) markEmpty(); });
    }
  });
  if ("IntersectionObserver" in window) {
    const vo = new IntersectionObserver(es => es.forEach(e => {
      const v = e.target;
      if (e.isIntersecting && !reduce) { if (v.preload === "none") v.preload = "auto"; v.play().catch(() => {}); }
      else v.pause();
    }), { threshold: 0.35 });
    $$("video").forEach(v => vo.observe(v));
  }

  /* ---------- booking ---------- */
  const form = $("#book"), msgEl = $("#book-msg"), hint = $("#book-hint"), tg = $("#book-tg");
  const SVC = {
    uk: { tiktok: "TikTok для бізнесу (діагностика)", consult: "Консультація 60 хв", learn: "Навчання: інтенсив / Zaya Boost", photo: "Фотосесія", video: "Відеозйомка" },
    en: { tiktok: "TikTok for business (diagnostic call)", consult: "60-min consultation", learn: "Learning: intensive / Zaya Boost", photo: "Photo shoot", video: "Video shoot" }
  };
  function setService(v) { const r = form && form.querySelector(`input[value="${v}"]`); if (r) { r.checked = true; updateMsg(); } }
  $$("[data-pick]").forEach(a => a.addEventListener("click", () => setService(a.dataset.pick === "consult" ? "consult" : a.dataset.pick)));
  const today = new Date(); const dateIn = $("#book-date");
  if (dateIn) dateIn.min = `${today.getFullYear()}-${pad(today.getMonth() + 1)}-${pad(today.getDate())}`;

  function buildMsg() {
    if (!form) return "";
    const f = new FormData(form), en = lang === "en";
    const lines = [en ? "Hi Katya! I’m writing from your website." : "Привіт, Катю! Пишу з вашого сайту."];
    lines.push(`${en ? "Request" : "Запит"}: ${SVC[lang][f.get("service")] || ""}`);
    if (f.get("name")) lines.push(`${en ? "Name" : "Імʼя"}: ${f.get("name")}`);
    if (f.get("biz")) lines.push(`${en ? "Business" : "Бізнес"}: ${f.get("biz")}`);
    if (f.get("date") || f.get("time")) {
      const dt = f.get("date") ? f.get("date").split("-").reverse().join(".") : "";
      lines.push(`${en ? "When" : "Коли зручно"}: ${[dt, f.get("time")].filter(Boolean).join(", ")}`);
    }
    if (f.get("contact")) lines.push(`${en ? "Contact" : "Контакт"}: ${f.get("contact")}`);
    return lines.join("\n");
  }
  function updateMsg() { if (msgEl) msgEl.textContent = buildMsg(); }
  form && form.addEventListener("input", updateMsg);
  form && form.addEventListener("change", updateMsg);
  if (tg && S.telegram) { tg.hidden = false; }

  form && form.addEventListener("submit", async e => {
    e.preventDefault();
    let ok = true;
    ["name", "contact"].forEach(n => {
      const el = form.elements[n], bad = !el.value.trim();
      el.setAttribute("aria-invalid", String(bad)); if (bad && ok) { el.focus(); ok = false; }
    });
    if (!ok) { hint.textContent = lang === "en" ? "Add your name and a way to reach you." : "Додайте імʼя і контакт, щоб я могла відповісти."; hint.classList.remove("is-done"); return; }
    const text = buildMsg();
    try { await navigator.clipboard.writeText(text); } catch (err) {}
    hint.innerHTML = lang === "en"
      ? "✓ Text copied. Now paste it into the Instagram chat and send.<small>Long-press the message field → Paste.</small>"
      : "✓ Текст скопійовано. Тепер вставте його в діалог в Instagram і надішліть.<small>Затисніть поле повідомлення → «Вставити».</small>";
    hint.classList.add("is-done");
    window.open(`https://ig.me/m/${S.instagram || "katya.tsibrovska"}`, "_blank", "noopener");
  });
  tg && tg.addEventListener("click", async e => {
    if (!S.telegram) return;
    e.preventDefault();
    const text = buildMsg();
    window.open(`https://t.me/${S.telegram}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
  form && form.addEventListener("input", e => { if (e.target.getAttribute("aria-invalid") === "true" && e.target.value.trim()) e.target.setAttribute("aria-invalid", "false"); });

  setLang(lang);
})();
