export const contacts = {
  phones: [
    { display: "+7 (911) 450-10-95", href: "tel:+79114501095", label: "Основной склад" },
    { display: "+7 (911) 453-51-18", href: "tel:+79114535118", label: "Литовский Вал" },
  ],
  email: "svetaooo@yandex.ru",
};

export const navItems = [
  { href: "/catalog", label: "Каталог" },
  { href: "/optovym-klientam", label: "Для бизнеса" },
  { href: "/dostavka-i-oplata", label: "Доставка" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/kontakty", label: "Контакты" },
];

export type Category = {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "srezannye-tsvety",
    name: "Свежесрезанные цветы",
    short: "Розы, хризантемы, гвоздики и сезонные позиции",
    description: "Свежие срезанные цветы для магазинов, флористов, декораторов и частных покупателей. Ассортимент меняется с каждой поставкой.",
    image: "/images/hero-warehouse.webp",
    alt: "Иллюстрация свежесрезанных цветов на складе",
    featured: true,
  },
  {
    slug: "rozy",
    name: "Розы",
    short: "Классические и необычные оттенки",
    description: "Розы разных цветов и форматов поставки. Доступность сорта, длину стебля и количество в упаковке подтверждает менеджер.",
    image: "/images/category-roses.webp",
    alt: "Иллюстрация роз разных оттенков",
    featured: true,
  },
  {
    slug: "gorshechnye-rasteniya",
    name: "Горшечные растения",
    short: "Цветущие и декоративно-лиственные",
    description: "Горшечные растения для торговых залов, офисов и дома. Поможем подобрать позиции под бюджет и условия содержания.",
    image: "/images/category-plants.webp",
    alt: "Иллюстрация горшечных растений",
  },
  {
    slug: "hrizantemy",
    name: "Хризантемы",
    short: "Кустовые и одноголовые",
    description: "Хризантемы для розничной продажи, букетов и оформления. Цвета, сорта и упаковка зависят от текущей поставки.",
    image: "/images/hero-warehouse.webp",
    alt: "Иллюстрация ассортимента свежих хризантем",
  },
  {
    slug: "gvozdiki",
    name: "Гвоздики",
    short: "Классические и сезонные оттенки",
    description: "Гвоздики оптом и в розницу. Доступные оттенки, длину стебля и единицу продажи подтверждает менеджер.",
    image: "/images/category-roses.webp",
    alt: "Иллюстрация ассортимента свежесрезанных цветов",
  },
  {
    slug: "drugie-tsvety",
    name: "Другие цветы",
    short: "Эустома, альстромерия, лилии и сезонные виды",
    description: "Разнообразные свежесрезанные цветы, включая сезонные и редкие позиции по предварительному запросу.",
    image: "/images/hero-warehouse.webp",
    alt: "Иллюстрация разнообразного ассортимента цветов",
  },
  {
    slug: "zelen-dlya-buketov",
    name: "Зелень и наполнители",
    short: "Эвкалипт, папоротник и сезонная зелень",
    description: "Декоративная зелень для букетов и оформления. Актуальный список позиций зависит от ближайшей поставки.",
    image: "/images/category-plants.webp",
    alt: "Иллюстрация декоративной зелени и растений",
  },
  {
    slug: "gotovye-bukety",
    name: "Готовые букеты",
    short: "Для подарка, события и корпоративного заказа",
    description: "Готовые решения и сборка по запросу. Состав, бюджет и срок готовности согласуются с флористом.",
    image: "/images/category-roses.webp",
    alt: "Иллюстрация роз для составления букетов",
  },
  {
    slug: "dekorativnye-rasteniya",
    name: "Декоративные растения",
    short: "Для дома, офиса и торгового пространства",
    description: "Декоративно-лиственные растения разных размеров. Наличие и условия заказа уточняются по поставке.",
    image: "/images/category-plants.webp",
    alt: "Иллюстрация декоративных растений",
  },
  {
    slug: "novinki",
    name: "Новые поступления",
    short: "Сезонные и недавно прибывшие позиции",
    description: "Направление для свежих поступлений. Актуальный список и дату обновления подтверждает менеджер.",
    image: "/images/hero-warehouse.webp",
    alt: "Иллюстрация новой поставки свежих цветов",
  },
];

export const assortmentExamples = [
  { name: "Розы микс", category: "Розы", categorySlugs: ["srezannye-tsvety", "rozy", "novinki"], origin: "Импорт", note: "Цвета и длина стебля — по поставке", image: "/images/category-roses.webp", alt: "Иллюстрация роз разных оттенков" },
  { name: "Хризантемы", category: "Срезанные", categorySlugs: ["srezannye-tsvety", "hrizantemy"], origin: "Импорт", note: "Кустовые и одноголовые позиции", image: "/images/hero-warehouse.webp", alt: "Иллюстрация свежих хризантем" },
  { name: "Горшечные растения", category: "Растения", categorySlugs: ["gorshechnye-rasteniya"], origin: "Разные страны", note: "Цветущие и декоративно-лиственные", image: "/images/category-plants.webp", alt: "Иллюстрация горшечных растений" },
  { name: "Гвоздики", category: "Срезанные", categorySlugs: ["srezannye-tsvety", "gvozdiki"], origin: "Импорт", note: "Классические и сезонные оттенки", image: "/images/hero-warehouse.webp", alt: "Иллюстрация свежих гвоздик" },
  { name: "Эустома и альстромерия", category: "Срезанные", categorySlugs: ["srezannye-tsvety", "drugie-tsvety"], origin: "Импорт", note: "Наличие зависит от поставки", image: "/images/category-roses.webp", alt: "Иллюстрация ассортимента свежих цветов" },
  { name: "Декоративная зелень", category: "Зелень", categorySlugs: ["zelen-dlya-buketov"], origin: "Разные страны", note: "Для букетов и оформления", image: "/images/category-plants.webp", alt: "Иллюстрация декоративной зелени" },
  { name: "Букеты на заказ", category: "Букеты", categorySlugs: ["gotovye-bukety"], origin: "Сборка на месте", note: "Состав и срок готовности согласуются", image: "/images/category-roses.webp", alt: "Иллюстрация цветов для букета" },
  { name: "Декоративно-лиственные", category: "Растения", categorySlugs: ["dekorativnye-rasteniya"], origin: "Разные страны", note: "Размеры и виды — по поставке", image: "/images/category-plants.webp", alt: "Иллюстрация декоративно-лиственных растений" },
];

export const locations = [
  {
    type: "Городская точка",
    name: "Литовский Вал",
    address: "236016, Калининград, ул. Литовский Вал, 21А",
    note: "Напротив комплекса «Кронпринц», заезд в арку. Перед поездкой уточните наличие и график.",
    phone: contacts.phones[1],
    map: "https://yandex.ru/maps/?text=Калининград%2C%20Литовский%20Вал%2C%2021А",
  },
  {
    type: "Основной склад",
    name: "Прибрежное",
    address: "Калининградская область, пос. Прибрежное, ул. Центральная, 1Б",
    note: "Ориентир — мотель «Балтика». Есть парковка и удобная зона погрузки. Перед поездкой позвоните менеджеру.",
    phone: contacts.phones[0],
    map: "https://yandex.ru/maps/?text=Калининградская%20область%2C%20посёлок%20Прибрежное%2C%20Центральная%2C%201Б",
  },
];

export const galleryImages = [
  { src: "/images/hero-warehouse.webp", alt: "Иллюстрация свежих цветов в складском помещении", width: 1599, height: 900 },
  { src: "/images/category-roses.webp", alt: "Иллюстрация роз разных оттенков", width: 960, height: 960 },
  { src: "/images/category-plants.webp", alt: "Иллюстрация горшечных растений", width: 960, height: 960 },
];
