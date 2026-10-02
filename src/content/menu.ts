import type { MenuSection } from "./types";

// Sumber: flipbook menu Tedja Margahayu · Summarecon · Antapani (FlipHTML5).
// Nama, harga (ribu rupiah), deskripsi & kalori disalin sesuai cetakan; foto dipotong dari halaman menu.
// File ini di-generate — ubah data menu di sini bila menu berganti.
// Catatan: menuSections & coffeeAddOns untuk tampilan "Daftar menu" yang sementara tidak ditampilkan
// (halaman /menu kini hanya buku menu). Komponen kartunya: components/cards/MenuItemCard.tsx.

/** Halaman buku menu (urutan sesuai flipbook), dipakai tampilan "Buku menu". */
export const menuBookPages = Array.from(
  { length: 30 },
  (_, i) => `/images/menu-book/page-${String(i + 1).padStart(2, "0")}.webp`,
);
/** Rasio lebar/tinggi satu halaman buku menu (1000×1414). */
export const MENU_BOOK_PAGE_RATIO = 1000 / 1414;

export const menuSourceLocations = ["margahayu", "summarecon", "antapani"] as const;

export const menuSections: MenuSection[] = [
  {
    slug: "signature-drinks",
    group: "drinks",
    title: "Signature Drinks",
    items: [
      { name: "Coco Matcha", price: 30, description: "Coconut & matcha", kcal: "± 223,9 kcal", image: "/images/menu/menu-signature-drinks-coco-matcha.webp" },
      { name: "Peach on Black", price: 37, description: "Peach, orange & floral", kcal: "± 139 kcal", image: "/images/menu/menu-signature-drinks-peach-on-black.webp" },
      { name: "Recovery Mocha", price: 40, description: "Chocolate, espresso, oatmilk & whey protein", kcal: "± 224,5 kcal", protein: "± 25 gr protein", image: "/images/menu/menu-signature-drinks-recovery-mocha.webp" },
      { name: "Coco Boost", price: 25, description: "Fresh lemon & coconut", kcal: "± 87,3 kcal", image: "/images/menu/menu-signature-drinks-coco-boost.webp" },
      { name: "Sea Salt Butterscotch Latte", price: 37, description: "Butterscotch, cream sea salt & crumble caramel", kcal: "± 257 kcal", image: "/images/menu/menu-signature-drinks-sea-salt-butterscotch-latte.webp" },
      { name: "Power Latte", price: 35, description: "Whey protein, oatmilk, espresso & vanilla", kcal: "± 151 kcal", protein: "± 24 gr protein", image: "/images/menu/menu-signature-drinks-power-latte.webp" },
    ],
  },
  {
    slug: "barista-choices",
    group: "drinks",
    title: "Barista Choices",
    items: [
      { name: "Dirty Latte", price: 40, description: "Creamy, Bold & Smooth", kcal: "± 75 kcal", image: "/images/menu/menu-barista-choices-dirty-latte.webp" },
      { name: "Tiger Latte", price: 40, description: "Bold, Sweet & Aromatic", kcal: "± 370 kcal", image: "/images/menu/menu-barista-choices-tiger-latte.webp" },
      { name: "Mont Blanc", price: 35, description: "Citrusy, Sweet & Aromatic", kcal: "± 439 kcal", image: "/images/menu/menu-barista-choices-mont-blanc.webp" },
    ],
  },
  {
    slug: "black-coffee",
    group: "drinks",
    title: "Black Coffee",
    items: [
      { name: "Short Black", price: 20, serve: "hotIce", kcal: "± 2 kcal", image: "/images/menu/menu-black-coffee-short-black.webp" },
      { name: "Black Coffee", price: 25, serve: "hotIce", kcal: "± 3 kcal", image: "/images/menu/menu-black-coffee-black-coffee.webp" },
      { name: "Affogato", price: 30, kcal: "± 255 kcal", image: "/images/menu/menu-black-coffee-affogato.webp" },
      { name: "Cocoricano", price: 28, kcal: "± 165 kcal", image: "/images/menu/menu-black-coffee-cocoricano.webp" },
      { name: "Kopi Dingin", price: 28, options: "Markisa/ Apel hijau/ Raspberry", kcal: "± 180 kcal", image: "/images/menu/menu-black-coffee-kopi-dingin.webp", tags: ["bestSeller"] },
      { name: "Black Lemonade", price: 33, kcal: "± 124 kcal", image: "/images/menu/menu-black-coffee-black-lemonade.webp", tags: ["bestSeller"] },
    ],
  },
  {
    slug: "filter-coffee",
    group: "drinks",
    title: "Filter Coffee",
    items: [
      { name: "Filter Coffee", price: 40, serve: "hotIce", description: "15+ Beans to Explore. Discover distinctive flavors from our Nusantara, Exotic, and Infused collections.", kcal: "± 1,5 kcal", priceOptions: [{"label": "Discovery", "price": 55}, {"label": "Advance", "price": 45}, {"label": "Routine", "price": 40}], image: "/images/menu/menu-filter-coffee-filter-coffee.webp" },
    ],
  },
  {
    slug: "white-coffee",
    group: "drinks",
    title: "White Coffee",
    items: [
      { name: "Latte", price: 33, serve: "hotIce", kcal: "± 129 kcal", image: "/images/menu/menu-white-coffee-latte.webp" },
      { name: "Cappuccino", price: 33, serve: "hotIce", kcal: "± 108 kcal", image: "/images/menu/menu-white-coffee-cappuccino.webp" },
      { name: "Magic", price: 33, serve: "hotIce", kcal: "± 108 kcal", image: "/images/menu/menu-white-coffee-magic.webp" },
      { name: "Flat White", price: 33, kcal: "± 120 kcal", image: "/images/menu/menu-white-coffee-flat-white.webp" },
      { name: "Piccolo", price: 33, kcal: "± 52 kcal", image: "/images/menu/menu-white-coffee-piccolo.webp" },
      { name: "Flavoured Latte", price: 33, serve: "hotIce", options: "Butterscotch/ Caramel/ Vanilla", kcal: "± 180 kcal", image: "/images/menu/menu-white-coffee-flavoured-latte.webp" },
      { name: "Sea Salt Caramel Latte", price: 37, kcal: "± 260 kcal", image: "/images/menu/menu-white-coffee-sea-salt-caramel-latte.webp" },
      { name: "Kopi Susu Tedja", price: 25, description: "Espresso, milk, cream, aren", kcal: "± 216,2 kcal", image: "/images/menu/menu-white-coffee-kopi-susu-tedja.webp" },
    ],
  },
  {
    slug: "milkbase",
    group: "drinks",
    title: "Milkbase",
    items: [
      { name: "Vanilla Regal", price: 32, kcal: "± 162 kcal", image: "/images/menu/menu-milkbase-vanilla-regal.webp" },
      { name: "Milkshake Strawberry", price: 32, kcal: "± 205,2 kcal", image: "/images/menu/menu-milkbase-milkshake-strawberry.webp" },
    ],
  },
  {
    slug: "tea",
    group: "drinks",
    title: "Tea",
    items: [
      { name: "Artisan Tea", price: 30, serve: "hotIce", options: "Earl Grey/ Mango Mint/ Fruit Garden", kcal: "± 0,03 kcal", image: "/images/menu/menu-tea-artisan-tea.webp" },
      { name: "Lemon Tea", price: 25, serve: "hotIce", kcal: "± 30 kcal", image: "/images/menu/menu-tea-lemon-tea.webp" },
      { name: "Lychee Tea", price: 25, serve: "hotIce", kcal: "± 34 kcal", image: "/images/menu/menu-tea-lychee-tea.webp" },
      { name: "Apple Mint Tea", price: 28, serve: "ice", kcal: "± 27,2 kcal", image: "/images/menu/menu-tea-apple-mint-tea.webp", tags: ["recommended"] },
      { name: "Earl Grey Milk Tea", price: 25, serve: "hotIce", kcal: "± 223 kcal", image: "/images/menu/menu-tea-earl-grey-milk-tea.webp" },
    ],
  },
  {
    slug: "healthy-juice",
    group: "drinks",
    title: "Healthy Juice",
    items: [
      { name: "Wonder Berry", price: 30, kcal: "± 225,7 kcal", image: "/images/menu/menu-healthy-juice-wonder-berry.webp", tags: ["bestSeller"] },
      { name: "Sunshine", price: 30, kcal: "± 110 kcal", image: "/images/menu/menu-healthy-juice-sunshine.webp" },
      { name: "Mango Sunkist", price: 32, kcal: "± 168 kcal", image: "/images/menu/menu-healthy-juice-mango-sunkist.webp", tags: ["bestSeller"] },
      { name: "Orange Juice", price: 33, kcal: "± 100 kcal", image: "/images/menu/menu-healthy-juice-orange-juice.webp" },
    ],
  },
  {
    slug: "chocolate-series",
    group: "drinks",
    title: "Chocolate Series",
    items: [
      { name: "Chocolate", price: 30, serve: "hotIce", kcal: "± 220 kcal", image: "/images/menu/menu-chocolate-series-chocolate.webp" },
      { name: "Chocolate Mint", price: 34, kcal: "± 230 kcal", image: "/images/menu/menu-chocolate-series-chocolate-mint.webp", tags: ["recommended"] },
      { name: "Milkshake Chocolate", price: 36, kcal: "± 335 kcal", image: "/images/menu/menu-chocolate-series-milkshake-chocolate.webp" },
      { name: "Chocolate Cream", price: 36, kcal: "± 490 kcal", image: "/images/menu/menu-chocolate-series-chocolate-cream.webp" },
    ],
  },
  {
    slug: "matcha-series",
    group: "drinks",
    title: "Matcha Series",
    items: [
      { name: "Pure Matcha", price: 37, serve: "hotIce", kcal: "± 109 kcal", image: "/images/menu/menu-matcha-series-pure-matcha.webp" },
      { name: "Matcha Latte", price: 32, serve: "hotIce", kcal: "± 171 kcal", image: "/images/menu/menu-matcha-series-matcha-latte.webp" },
      { name: "Matcha Cream", price: 36, kcal: "± 460 kcal", image: "/images/menu/menu-matcha-series-matcha-cream.webp" },
      { name: "Matcha Strawberry", price: 37, kcal: "± 190 kcal", image: "/images/menu/menu-matcha-series-matcha-strawberry.webp" },
      { name: "Hojicha", price: 30, serve: "hotIce", kcal: "± 108 kcal", image: "/images/menu/menu-matcha-series-hojicha.webp" },
    ],
  },
  {
    slug: "1-liter-series",
    group: "drinks",
    title: "1 Liter Series",
    items: [
      { name: "Kopi Susu Tedja", price: 100, image: "/images/menu/menu-1-liter-series-kopi-susu-tedja.webp" },
      { name: "Flavoured Latte", price: 130, options: "Butterscotch/ Caramel/ Vanila", image: "/images/menu/menu-1-liter-series-flavoured-latte.webp" },
      { name: "Power Latte", price: 210, image: "/images/menu/menu-1-liter-series-power-latte.webp" },
      { name: "Black Coffee", price: 100, image: "/images/menu/menu-1-liter-series-black-coffee.webp" },
      { name: "Kopi Dingin", price: 120, options: "Markisa/ Apel hijau/ Raspberry", image: "/images/menu/menu-1-liter-series-kopi-dingin.webp" },
      { name: "Chocolate", price: 120, image: "/images/menu/menu-1-liter-series-chocolate.webp" },
      { name: "Matcha", price: 120, image: "/images/menu/menu-1-liter-series-matcha.webp" },
    ],
  },
  {
    slug: "tedja-move",
    group: "drinks",
    title: "Tedja Move",
    items: [
      { name: "Kopi Susu Tedja", price: 30, description: "Creamy, Sweet, Balanced", image: "/images/menu/menu-tedja-move-kopi-susu-tedja.webp" },
      { name: "Single Origin Chocolate", price: 35, description: "Java Srawana Bittersweet, Balanced, Berrylike", image: "/images/menu/menu-tedja-move-single-origin-chocolate.webp" },
      { name: "Matcha Latte", price: 35, description: "Creamy, Sweet, Grassy", image: "/images/menu/menu-tedja-move-matcha-latte.webp" },
      { name: "Cold Brew Mango", price: 35, description: "Brown molasess, Sunkist, Mango", image: "/images/menu/menu-tedja-move-cold-brew-mango.webp" },
      { name: "Cold Brew Orange Pulpy", price: 35, description: "Brown molasess, Sunkist, Orange pulpy", image: "/images/menu/menu-tedja-move-cold-brew-orange-pulpy.webp" },
      { name: "Cold Brew Strawberry", price: 35, description: "Brown molasess, Sunkist, Strawberry", image: "/images/menu/menu-tedja-move-cold-brew-strawberry.webp" },
    ],
  },
  {
    slug: "main-course",
    group: "food",
    title: "Main Course",
    items: [
      { name: "Nasi Kulit Lada Garam", price: 37, description: "Kulit ayam renyah berbumbu lada garam, disajikan dengan nasi hangat dan telur mata sapi. Sederhana, namun setiap elemen memberikan rasa gurih yang kuat dan tekstur yang kontras.", kcal: "± 988 kcal", image: "/images/menu/menu-main-course-nasi-kulit-lada-garam.webp", tags: ["bestSeller"] },
      { name: "Nasi Cumi Sambal Hijau", price: 39, description: "Cumi dimasak dengan sambal hijau pedas segar, disajikan bersama nasi putih hangat dan pelengkap sayuran. Tekstur cumi yang kenyal berpadu dengan rasa pedas dan asin yang menggugah selera.", kcal: "± 602 kcal", image: "/images/menu/menu-main-course-nasi-cumi-sambal-hijau.webp" },
      { name: "Nasi Ayam Telur Asin", price: 39, description: "Ayam crispy yang dilapisi saus salted egg creamy dan gurih, disajikan dengan nasi putih hangat, bayam goreng, serta irisan cabai merah sebagai sentuhan pedas.", kcal: "± 1.076 kcal", image: "/images/menu/menu-main-course-nasi-ayam-telur-asin.webp" },
      { name: "Nasi Bola Daging Rempah", price: 39, description: "Bola daging homemade yang lembut dengan racikan rempah khas Nusantara, disajikan bersama nasi hangat dan sayuran segar.", kcal: "± 810 kcal", image: "/images/menu/menu-main-course-nasi-bola-daging-rempah.webp" },
      { name: "Nasi Sapi Lada Hitam", price: 48, description: "Irisan daging sapi yang dimasak dengan saus lada hitam, disajikan bersama nasi hangat dan sayuran segar.", kcal: "± 640 kal", image: "/images/menu/menu-main-course-nasi-sapi-lada-hitam.webp" },
      { name: "Nasi Ayam Merah", price: 65, description: "Ayam panggang yang dibalut saus merah khas dengan perpaduan rasa manis dan sedikit pedas, disajikan bersama nasi hangat, telor rebus dan kuah segar.", kcal: "± 790 kcal", image: "/images/menu/menu-main-course-nasi-ayam-merah.webp" },
      { name: "Nasi Cumi Sambal Matah", price: 39, description: "Cumi dimasak hingga lembut dan dipadukan dengan sambal matah segar. Disajikan bersama nasi hangat dan pelengkap bayam goreng, menghadirkan perpaduan rasa gurih, segar, dan pedas.", kcal: "± 562 kcal", image: "/images/menu/menu-main-course-nasi-cumi-sambal-matah.webp" },
      { name: "Nasi Ayam Rempah Tedja", price: 65, description: "Ayam berbumbu rempah khas TEDJA yang dimasak hingga meresap, disajikan dengan nasi putih hangat, telur barendo, sambal, serta lalapan seperti selada, tomat, dan timun. Perpaduan rasa gurih, pedas, dan segar yang nyaman di setiap suapan.", kcal: "± 1.195 kcal", image: "/images/menu/menu-main-course-nasi-ayam-rempah-tedja.webp" },
      { name: "Nasi Banjur Telur Kulit Crispy", price: 39, description: "Nasi putih hangan dengan telur omega 3, udang peci dan bawang daun. Disiram kecap asin racik khas Tedja dan dipadukan kulit ayam crispy yang renyah", kcal: "± 1.240 kcal", image: "/images/menu/menu-main-course-nasi-banjur-telur-kulit-crispy.webp" },
    ],
  },
  {
    slug: "bakmie",
    group: "food",
    title: "Bakmie",
    items: [
      { name: "Bakmie Ayam", price: 39, options: "Asin/Manis", description: "Bakmie dengan cita rasa gurih yang dipadukan dengan ayam cincang, disajikan bersama sawi, kerupuk pangsit renyah, dan kuah kaldu berisi bakso dan pangsit sebagai pelengkap.", kcal: "± 710 kcal", image: "/images/menu/menu-bakmie-bakmie-ayam.webp" },
      { name: "Bakmie Ayam Rica-Rica", price: 39, options: "Asin/Manis", description: "Bakmie dengan rasa gurih manis yang berpadu dengan ayam cincang berbumbu kecap, disajikan bersama sawi, kerupuk pangsit renyah, serta kuah kaldu berisi bakso dan pangsit.", kcal: "± 730 kcal", image: "/images/menu/menu-bakmie-bakmie-ayam-rica-rica.webp" },
    ],
  },
  {
    slug: "salad",
    group: "food",
    title: "Salad",
    items: [
      { name: "Roasted Sesame Salad", price: 35, description: "Irisan ayam panggang yang lembut dipadukan dengan campuran selada segar, tomat, dan bawang bombay, disiram saus khas TEDJA yang gurih dan aromatik.", kcal: "± 380 kcal", image: "/images/menu/menu-salad-roasted-sesame-salad.webp" },
      { name: "Smoky Garden Fries", price: 35, description: "Perpaduan selada segar dengan potongan tomat dan bawang bombay, dilengkapi kentang goreng renyah dan irisan daging, lalu disiram saus creamy yang gurih.", kcal: "± 630 kcal", image: "/images/menu/menu-salad-smoky-garden-fries.webp" },
    ],
  },
  {
    slug: "snack",
    group: "food",
    title: "Snack",
    items: [
      { name: "Energy Wrap", price: 28, kcal: "± 250 kcal", image: "/images/menu/menu-snack-energy-wrap.webp", tags: ["recommended"] },
      { name: "Sprint Wrap", price: 31, kcal: "± 426 kcal", image: "/images/menu/menu-snack-sprint-wrap.webp", tags: ["recommended"] },
      { name: "Muscle Wrap", price: 33, kcal: "± 486 kcal", image: "/images/menu/menu-snack-muscle-wrap.webp", tags: ["recommended"] },
      { name: "Kulit Ayam Crispy", price: 22, kcal: "± 608 kcal", image: "/images/menu/menu-snack-kulit-ayam-crispy.webp" },
      { name: "French Fries Sausage", price: 25, kcal: "± 300 kcal", image: "/images/menu/menu-snack-french-fries-sausage.webp", tags: ["bestSeller"] },
      { name: "Tahu Cabe Garam", price: 27, kcal: "± 250 kcal", image: "/images/menu/menu-snack-tahu-cabe-garam.webp", tags: ["bestSeller"] },
      { name: "Chicken Popcorn", price: 26, options: "Saus: Salted egg/ Cheese/ Honey/ Sweet spicy", kcal: "± 350 kcal", image: "/images/menu/menu-snack-chicken-popcorn.webp", tags: ["recommended"] },
      { name: "Loaded Fries", price: 25, kcal: "± 400 kcal", image: "/images/menu/menu-snack-loaded-fries.webp" },
      { name: "Chicken Skin Cabe Garam", price: 28, kcal: "± 300 kcal", image: "/images/menu/menu-snack-chicken-skin-cabe-garam.webp", tags: ["recommended", "spicy"] },
      { name: "Pisang Crispy", price: 23, kcal: "± 360 kcal", image: "/images/menu/menu-snack-pisang-crispy.webp", tags: ["bestSeller"] },
      { name: "Cireng Bumbu Rujak", price: 22, kcal: "± 350 kcal", image: "/images/menu/menu-snack-cireng-bumbu-rujak.webp" },
      { name: "Mix Platter", price: 85, options: "French fries, Sausage, Dimsum goreng", kcal: "± 650 kcal", image: "/images/menu/menu-snack-mix-platter.webp", tags: ["recommended"] },
      { name: "Dimsum Kukus", price: 24, options: "Siomay udang, Nori ayam, Lumpia kulit tahu ayam", kcal: "± 200 kcal", image: "/images/menu/menu-snack-dimsum-kukus.webp" },
      { name: "Dimsum Goreng", price: 24, options: "Ekado, Kumis naga, Lumpia kulit udang", kcal: "± 300 kcal", image: "/images/menu/menu-snack-dimsum-goreng.webp" },
    ],
  },
  {
    slug: "pastry",
    group: "food",
    title: "Pastry",
    items: [
      { name: "Blueberry Raisin Danish", price: 30, kcal: "± 450 kcal", image: "/images/menu/menu-pastry-blueberry-raisin-danish.webp" },
      { name: "Japanese Cheesecake", price: 29, kcal: "± 410 kcal", image: "/images/menu/menu-pastry-japanese-cheesecake.webp", tags: ["bestSeller"] },
      { name: "Chocolate Cinnamon", price: 29, kcal: "± 390 kcal", image: "/images/menu/menu-pastry-chocolate-cinnamon.webp" },
      { name: "New York Cheesecake Croissant", price: 38, kcal: "± 480 kcal", image: "/images/menu/menu-pastry-new-york-cheesecake-croissant.webp" },
      { name: "Butter Croissant", price: 25, kcal: "± 300 kcal", image: "/images/menu/menu-pastry-butter-croissant.webp", tags: ["recommended"] },
      { name: "Almond Croissant", price: 38, kcal: "± 460 kcal", image: "/images/menu/menu-pastry-almond-croissant.webp" },
      { name: "Cranberry Vanilla roticen", price: 35, kcal: "± 380 kcal", image: "/images/menu/menu-pastry-cranberry-vanilla-roticen.webp", tags: ["bestSeller"] },
      { name: "Pain Au Chocolate", price: 35, kcal: "± 350 kcal", image: "/images/menu/menu-pastry-pain-au-chocolate.webp" },
    ],
  },
];

/** Tambahan untuk minuman kopi (dicetak di halaman Black/Filter Coffee). */
export const coffeeAddOns = [
  { name: "Oat Milk", price: 6 },
  { name: "Extra Shot", price: 8 },
];
