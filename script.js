/* ============= DATA ============= */
const products = [
  { id: 1, name: "Box Roses", price: 1999, image: "assets/product-box-roses.jpg", category: "bouquet", weight: "500g", reaction: "Romantic", smellType: "Sweet Floral", smellIngredients: "Rose Oil, Geraniol, Citronellol" },
  { id: 2, name: "Box Rose Arrangement", price: 2971, oldPrice: 5280, image: "assets/product-box-arrangement.jpg", category: "arrangement", sale: true, weight: "750g", reaction: "Elegant", smellType: "Mild Rose", smellIngredients: "Rose Absolute, Phenethyl Alcohol" },
  { id: 3, name: "White Bouquets", price: 1490, image: "assets/product-white-bouquet.jpg", category: "bouquet", weight: "400g", reaction: "Peaceful", smellType: "Fresh", smellIngredients: "Linalool, Green Notes, Eucalyptol" },
  { id: 4, name: "Colorful Tulip Bouquet", price: 2250, oldPrice: 5000, image: "assets/product-tulip-bouquet.jpg", category: "bouquet", sale: true, weight: "450g", reaction: "Cheerful", smellType: "Light Floral", smellIngredients: "Tulip Essence, Green Leaf Aldehyde" },
  { id: 5, name: "Colorful Vase Arrangement", price: 899, image: "assets/product-vase-arrangement.jpg", category: "arrangement", weight: "600g", reaction: "Joyful", smellType: "Mixed Herbal", smellIngredients: "Mixed Florals, Mint, Basil Notes" },
  { id: 6, name: "White Lily Bouquet", price: 1490, image: "assets/product-white-lily.jpg", category: "bouquet", weight: "350g", reaction: "Serene", smellType: "Sweet Lily", smellIngredients: "Lily Aldehyde, Indole, Vanillin" },
  { id: 7, name: "Wedding Rose Collection", price: 3800, oldPrice: 6200, image: "assets/product-wedding-roses.jpg", category: "bouquet", sale: true, weight: "800g", reaction: "Romantic", smellType: "Deep Rose", smellIngredients: "Damask Rose, Musk, Patchouli" },
  { id: 8, name: "Basket Arrangement", price: 2200, image: "assets/product-basket.jpg", category: "arrangement", weight: "1kg", reaction: "Warm", smellType: "Sunflower Fresh", smellIngredients: "Pollen Notes, Honey, Wild Grass" },
  { id: 9, name: "Sunflower Mix Bouquet", price: 750, image: "assets/product-sunflower.jpg", category: "bouquet", weight: "500g", reaction: "Happy", smellType: "Earthy Fresh", smellIngredients: "Sunflower Pollen, Hay, Citrus Zest" },
  { id: 10, name: "Purple Orchid Plant", price: 1650, image: "assets/product-orchid.jpg", category: "orchid", weight: "300g", reaction: "Exotic", smellType: "Subtle Sweet", smellIngredients: "Vanilla Orchid, Sandalwood Hint" },
  { id: 11, name: "Lavender Bunch", price: 599, image: "assets/product-lavender.jpg", category: "plant", weight: "200g", reaction: "Calming", smellType: "Aromatic Herbal", smellIngredients: "Linalyl Acetate, Camphor, Lavandin" },
  { id: 12, name: "Red Carnation Bouquet", price: 1100, image: "assets/product-carnation.jpg", category: "bouquet", weight: "400g", reaction: "Passionate", smellType: "Spicy Sweet", smellIngredients: "Eugenol, Clove, Carnation Absolute" },
  { id: 13, name: "Pink Peony Bouquet", price: 2800, image: "assets/product-peony.jpg", category: "bouquet", weight: "550g", reaction: "Romantic", smellType: "Sweet Floral", smellIngredients: "Peony Note, Rose Petal, Citrus Top" },
  { id: 14, name: "Succulent Collection", price: 1299, image: "assets/product-succulent.jpg", category: "plant", weight: "800g", reaction: "Modern", smellType: "None", smellIngredients: "No Fragrance" },
  { id: 15, name: "Jasmine Garland", price: 499, image: "assets/product-jasmine.jpg", category: "bouquet", weight: "150g", reaction: "Soothing", smellType: "Intense Sweet", smellIngredients: "Jasmine Sambac, Indole, Benzyl Acetate" },
  { id: 16, name: "Marigold Festive Bunch", price: 399, image: "assets/product-marigold.jpg", category: "bouquet", weight: "350g", reaction: "Festive", smellType: "Earthy Pungent", smellIngredients: "Tagetone, Limonene, Ocimene" },
  { id: 17, name: "Gerbera Mix Bouquet", price: 1250, oldPrice: 1800, image: "assets/product-gerbera.jpg", category: "bouquet", sale: true, weight: "450g", reaction: "Vibrant", smellType: "Mild Fresh", smellIngredients: "Light Green Notes, Mild Floral" },
  { id: 18, name: "Ficus Bonsai Tree", price: 2999, image: "assets/product-bonsai.jpg", category: "plant", weight: "1.2kg", reaction: "Zen", smellType: "Woody Earth", smellIngredients: "Cedar, Soil, Fresh Leaf" },
  { id: 19, name: "Blue Hydrangea Bouquet", price: 2100, image: "assets/product-hydrangea.jpg", category: "bouquet", weight: "600g", reaction: "Dreamy", smellType: "Subtle Fresh", smellIngredients: "Mild Floral, Aqua Notes, Green Stem" },
  { id: 20, name: "Money Plant Pothos", price: 699, image: "assets/product-moneyplant.jpg", category: "plant", weight: "500g", reaction: "Lucky", smellType: "Fresh Leafy", smellIngredients: "Chlorophyll, Earth, Fresh Greens" },
  { id: 21, name: "White Phalaenopsis Orchid", price: 1899, image: "assets/product-orchid-white.jpg", category: "orchid", weight: "350g", reaction: "Elegant", smellType: "Subtle Sweet", smellIngredients: "Vanilla Orchid, White Musk, Soft Powder" },
  { id: 22, name: "Pink Dendrobium Orchid", price: 2150, oldPrice: 2800, image: "assets/product-orchid-pink.jpg", category: "orchid", sale: true, weight: "400g", reaction: "Romantic", smellType: "Light Floral", smellIngredients: "Dendrobium Note, Honey, Rose Hint" },
  { id: 23, name: "Yellow Cymbidium Orchid Spray", price: 2499, image: "assets/product-orchid-yellow.jpg", category: "orchid", weight: "500g", reaction: "Cheerful", smellType: "Citrus Sweet", smellIngredients: "Cymbidium Essence, Bergamot, Honey" },
  { id: 24, name: "Blue Vanda Mini Orchid", price: 1750, image: "assets/product-orchid-blue.jpg", category: "orchid", weight: "300g", reaction: "Exotic", smellType: "Subtle Fresh", smellIngredients: "Vanda Note, Aqua Floral, Green Stem" },
];

const heroSlides = [
  { title: "Special Smells\nSpecial Bouquets", subtitle: "Discover our top-rated flowers!", btn: "Start buying now", img: "assets/hero-bouquet-1.jpg" },
  { title: "Bloom With\nEvery Occasion", subtitle: "From weddings to daily gifting — we have it all.", btn: "Explore Now", img: "assets/hero-bouquet-2.jpg" },
  { title: "Fresh Flowers\nDelivered Daily", subtitle: "Same-day delivery available across your city.", btn: "Order Today", img: "assets/hero-bouquet-3.jpg" },
];

const banners = [
  { title: "Private Events", img: "assets/event-private.jpg", tag: null, price: "From ₹15,000" },
  { title: "Flora", img: "assets/event-flora.jpg", tag: "10% Discount Offer", price: "From ₹2,000" },
  { title: "Weddings", img: "assets/event-wedding.jpg", tag: "50% Discount Offer", price: "From ₹25,000 — ₹5,00,000" },
];

const formatPrice = (n) => "₹" + n.toLocaleString("en-IN");

/* ============= STATE (with localStorage) ============= */
let cart = JSON.parse(localStorage.getItem("flora_cart") || "[]");
let compareList = JSON.parse(localStorage.getItem("flora_compare") || "[]");
let selectedIds = [];
let currentSlide = 0;
let exploreCategory = "all";
let exploreSort = "default";
let shopSort = "default";

const saveCart = () => localStorage.setItem("flora_cart", JSON.stringify(cart));
const saveCompare = () => localStorage.setItem("flora_compare", JSON.stringify(compareList));

/* ============= TOAST ============= */
function toast(msg, type = "success") {
  const t = document.createElement("div");
  t.className = "toast " + type;
  t.textContent = msg;
  document.getElementById("toastContainer").appendChild(t);
  setTimeout(() => { t.style.opacity = "0"; setTimeout(() => t.remove(), 300); }, 2500);
}

/* ============= HERO SLIDER ============= */
function renderHero() {
  const s = heroSlides[currentSlide];
  document.getElementById("heroTitle").textContent = s.title;
  document.getElementById("heroSubtitle").textContent = s.subtitle;
  const btn = document.getElementById("heroBtn");
  btn.innerHTML = s.btn + ' <i class="fa-solid fa-arrow-right"></i>';
  btn.onclick = () => scrollToSection("#bouquets");
  document.getElementById("heroImg").src = s.img;
  document.querySelectorAll("#heroDots button").forEach((d, i) => d.classList.toggle("active", i === currentSlide));
}
function buildHeroDots() {
  const dots = document.getElementById("heroDots");
  dots.innerHTML = "";
  heroSlides.forEach((_, i) => {
    const b = document.createElement("button");
    b.onclick = () => { currentSlide = i; renderHero(); };
    dots.appendChild(b);
  });
}
setInterval(() => { currentSlide = (currentSlide + 1) % heroSlides.length; renderHero(); }, 5000);

/* ============= BANNERS ============= */
function renderBanners() {
  document.getElementById("banners").innerHTML = banners.map(b => `
    <div class="banner reveal" style="background-image:url('${b.img}')">
      <div class="banner-content">
        ${b.tag ? `<span class="banner-tag">${b.tag}</span>` : ""}
        <h5>${b.title}</h5>
        <p class="banner-price">${b.price}</p>
        <button class="banner-btn" onclick="goToExplore('all')">Shop Now <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  `).join("");
}

/* ============= PRODUCT CARD ============= */
function productCardHTML(p, opts = {}) {
  const inCart = cart.find(c => c.id === p.id);
  const qty = inCart ? inCart.quantity : 0;
  return `
    <div class="product-card reveal ${opts.selected ? "selected" : ""}">
      <div class="product-img-wrap">
        ${p.sale ? '<span class="sale-tag">Sale!</span>' : ""}
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        ${qty > 0 ? `
          <div class="qty-overlay">
            <button class="qty-btn" onclick="updateQty(${p.id}, ${qty - 1})"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-num">${qty}</span>
            <button class="qty-btn" onclick="updateQty(${p.id}, ${qty + 1})"><i class="fa-solid fa-plus"></i></button>
          </div>
        ` : ""}
      </div>
      <div class="product-info">
        <h6 class="product-name">${p.name}</h6>
        <p class="product-price">
          ${p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)}</span>` : ""}
          ${formatPrice(p.price)}
        </p>
        ${qty === 0 ? `
          <button class="add-cart-btn" onclick="addToCart(${p.id})"><i class="fa-solid fa-bag-shopping"></i> Add To Cart</button>
        ` : `
          <div class="qty-row">
            <button class="qty-btn" onclick="updateQty(${p.id}, ${qty - 1})"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-num">${qty} in cart</span>
            <button class="qty-btn" onclick="updateQty(${p.id}, ${qty + 1})"><i class="fa-solid fa-plus"></i></button>
          </div>
        `}
        ${opts.showCompare !== false ? `<button class="compare-btn" onclick="quickCompare(${p.id})"><i class="fa-solid fa-scale-balanced"></i> Compare Smell & More</button>` : ""}
        ${opts.showSelect ? `<button class="select-btn ${opts.selected ? "selected" : ""}" onclick="toggleSelect(${p.id})">${opts.selected ? "✓ Selected" : "Select"}</button>` : ""}
      </div>
    </div>
  `;
}

/* ============= RENDER GRIDS ============= */
function renderShop() {
  let list = [...products].slice(0, 8);
  if (shopSort === "low") list.sort((a, b) => a.price - b.price);
  if (shopSort === "high") list.sort((a, b) => b.price - a.price);
  document.getElementById("resultsCount").textContent = `Showing ${list.length} of ${products.length} results`;
  document.getElementById("shopGrid").innerHTML = list.map(p => productCardHTML(p)).join("");
  observeReveal();
}
function renderPlants() {
  const list = products.filter(p => p.category === "plant");
  document.getElementById("plantsGrid").innerHTML = list.map(p => productCardHTML(p)).join("");
  observeReveal();
}
function renderExplore() {
  const cats = ["all", "bouquet", "arrangement", "plant", "orchid"];
  document.getElementById("filterChips").innerHTML = cats.map(c =>
    `<button class="chip ${exploreCategory === c ? "active" : ""}" onclick="setCategory('${c}')">${c.charAt(0).toUpperCase() + c.slice(1)}</button>`
  ).join("");
  let list = exploreCategory === "all" ? [...products] : products.filter(p => p.category === exploreCategory);
  if (exploreSort === "low") list.sort((a, b) => a.price - b.price);
  if (exploreSort === "high") list.sort((a, b) => b.price - a.price);
  document.getElementById("exploreCount").textContent = `Showing ${list.length} results — click Select to pick items`;
  document.getElementById("exploreGrid").innerHTML = list.map(p => productCardHTML(p, { showSelect: true, selected: selectedIds.includes(p.id) })).join("");
  document.getElementById("selectedCount").textContent = selectedIds.length;
  observeReveal();
}

function setCategory(c) { exploreCategory = c; renderExplore(); }
function toggleSelect(id) {
  selectedIds = selectedIds.includes(id) ? selectedIds.filter(i => i !== id) : [...selectedIds, id];
  renderExplore();
}

/* ============= CART ============= */
function addToCart(id) {
  const p = products.find(x => x.id === id);
  const ex = cart.find(c => c.id === id);
  if (ex) ex.quantity++; else cart.push({ ...p, quantity: 1 });
  saveCart(); updateCartUI(); rerenderProducts();
  toast(`${p.name} added to cart`);
}
function updateQty(id, q) {
  if (q < 1) { cart = cart.filter(c => c.id !== id); }
  else { const it = cart.find(c => c.id === id); if (it) it.quantity = q; }
  saveCart(); updateCartUI(); rerenderProducts();
}
function removeFromCart(id) { cart = cart.filter(c => c.id !== id); saveCart(); updateCartUI(); rerenderProducts(); }
function rerenderProducts() { renderShop(); renderPlants(); if (!document.getElementById("explore").classList.contains("hidden-page")) renderExplore(); }

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const badge = document.getElementById("cartBadge");
  badge.textContent = count;
  badge.hidden = count === 0;
  document.getElementById("cartTotal").textContent = formatPrice(total);
  const itemsEl = document.getElementById("cartItems");
  if (cart.length === 0) {
    itemsEl.innerHTML = '<div class="cart-empty"><i class="fa-solid fa-bag-shopping" style="font-size:2rem;opacity:.3"></i><p style="margin-top:.5rem">Your cart is empty</p></div>';
    return;
  }
  itemsEl.innerHTML = cart.map(c => `
    <div class="cart-item">
      <img src="${c.image}" alt="${c.name}" />
      <div class="cart-item-info">
        <h6>${c.name}</h6>
        <p class="price">${formatPrice(c.price)}</p>
        <div class="cart-item-qty">
          <button onclick="updateQty(${c.id}, ${c.quantity - 1})"><i class="fa-solid fa-minus"></i></button>
          <span>${c.quantity}</span>
          <button onclick="updateQty(${c.id}, ${c.quantity + 1})"><i class="fa-solid fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${c.id})"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join("");
}

/* ============= COMPARE ============= */
function quickCompare(id) {
  const p = products.find(x => x.id === id);
  if (!compareList.find(c => c.id === id)) {
    if (compareList.length >= 4) { toast("You can compare up to 4 flowers", "warning"); return; }
    compareList.push(p); saveCompare();
  }
  openCompareModal();
}
function openCompareModal() {
  renderCompare();
  document.getElementById("compareOverlay").classList.add("show");
  document.getElementById("compareModal").classList.add("open");
}
function closeCompareModal() {
  document.getElementById("compareOverlay").classList.remove("show");
  document.getElementById("compareModal").classList.remove("open");
}
function compareSelected() {
  if (selectedIds.length < 2) { toast("Select at least 2 products to compare", "warning"); return; }
  if (selectedIds.length > 4) { toast("Compare up to 4 at a time", "warning"); return; }
  compareList = selectedIds.map(id => products.find(p => p.id === id));
  saveCompare();
  openCompareModal();
}
function removeFromCompare(id) {
  compareList = compareList.filter(c => c.id !== id);
  saveCompare();
  renderCompare();
}
function renderCompare() {
  const body = document.getElementById("compareBody");
  if (compareList.length === 0) {
    body.innerHTML = '<div class="compare-empty">No flowers to compare yet. Click "Compare Smell & More" on any product.</div>';
    return;
  }
  const headerCols = compareList.map(p => `<th>
    <img src="${p.image}" alt="${p.name}" />
    <div style="margin-top:.5rem;font-size:.85rem">${p.name}</div>
    <button onclick="removeFromCompare(${p.id})" style="color:var(--destructive);font-size:.7rem;margin-top:.25rem"><i class="fa-solid fa-xmark"></i> Remove</button>
  </th>`).join("");

  const rows = [
    ["Price", p => formatPrice(p.price)],
    ["Old Price", p => p.oldPrice ? formatPrice(p.oldPrice) : "—"],
    ["Weight", p => p.weight],
    ["Price per gram", p => {
      const g = parseFloat(p.weight); const isKg = p.weight.includes("kg");
      const grams = isKg ? g * 1000 : g;
      return formatPrice(Math.round(p.price / grams)) + "/g";
    }],
    ["Category", p => p.category],
    ["Reaction", p => p.reaction],
    ["Smell Type", p => p.smellType],
    ["Smell Ingredients", p => `<strong style="color:var(--primary)">${p.smellIngredients}</strong>`],
  ];

  body.innerHTML = `
    <table class="compare-table">
      <thead><tr><th></th>${headerCols}</tr></thead>
      <tbody>
        ${rows.map(([label, fn]) => `<tr><th>${label}</th>${compareList.map(p => `<td>${fn(p)}</td>`).join("")}</tr>`).join("")}
      </tbody>
    </table>
  `;
}

/* ============= NAVIGATION ============= */
function scrollToSection(sel) {
  showHomePage();
  setTimeout(() => {
    const el = document.querySelector(sel);
    if (el) { const top = el.getBoundingClientRect().top + window.scrollY - 80; window.scrollTo({ top, behavior: "smooth" }); }
  }, 50);
}
function showExplorePage() {
  document.getElementById("explore").classList.remove("hidden-page");
  document.querySelectorAll(".section:not(#explore), .hero").forEach(s => s.style.display = "none");
  renderExplore();
  window.scrollTo({ top: 0 });
}
function showHomePage() {
  document.getElementById("explore").classList.add("hidden-page");
  document.querySelectorAll(".section:not(#explore), .hero").forEach(s => s.style.display = "");
}
function goToExplore(cat) {
  exploreCategory = cat || "all";
  showExplorePage();
}

/* ============= REVEAL ON SCROLL ============= */
let revealObserver;
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 });
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach(el => revealObserver.observe(el));
}

/* ============= INIT ============= */
document.addEventListener("DOMContentLoaded", () => {
  buildHeroDots(); renderHero(); renderBanners(); renderShop(); renderPlants(); updateCartUI();

  // Navbar buttons
  document.querySelectorAll("[data-nav]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const nav = btn.dataset.nav;
      document.getElementById("navLinks").classList.remove("open");
      if (nav === "orchid-filter") { goToExplore("orchid"); return; }
      if (nav === "#home") { showHomePage(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      scrollToSection(nav);
    });
  });

  document.getElementById("mobileToggle").onclick = () => document.getElementById("navLinks").classList.toggle("open");
  document.getElementById("exploreBtn").onclick = () => goToExplore("all");
  document.getElementById("exploreMoreBtn").onclick = () => goToExplore("all");
  document.getElementById("compareSelectedBtn").onclick = compareSelected;

  document.getElementById("sortSelect").onchange = (e) => { shopSort = e.target.value; renderShop(); };
  document.getElementById("exploreSort").onchange = (e) => { exploreSort = e.target.value; renderExplore(); };

  // Cart drawer
  document.getElementById("cartBtn").onclick = () => { document.getElementById("drawerOverlay").classList.add("show"); document.getElementById("cartDrawer").classList.add("open"); };
  document.getElementById("closeCart").onclick = () => { document.getElementById("drawerOverlay").classList.remove("show"); document.getElementById("cartDrawer").classList.remove("open"); };
  document.getElementById("drawerOverlay").onclick = () => { document.getElementById("drawerOverlay").classList.remove("show"); document.getElementById("cartDrawer").classList.remove("open"); };
  document.getElementById("checkoutBtn").onclick = () => toast("Checkout coming soon!", "info");

  // Compare modal
  document.getElementById("closeCompare").onclick = closeCompareModal;
  document.getElementById("compareOverlay").onclick = closeCompareModal;

  // Navbar scroll shadow
  window.addEventListener("scroll", () => {
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
    document.getElementById("backToTop").classList.toggle("show", window.scrollY > 400);
  }, { passive: true });

  // Back to top — robust mobile fallback
  const backTop = document.getElementById("backToTop");
  const goTop = (e) => {
    if (e) { e.preventDefault(); e.stopPropagation(); }
    try { window.scrollTo({ top: 0, behavior: "smooth" }); } catch { window.scrollTo(0, 0); }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  backTop.addEventListener("click", goTop);
  backTop.addEventListener("touchend", goTop);

  observeReveal();
});
