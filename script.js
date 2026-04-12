/**
 * FLORA FLOWER SHOP - script.js
 * Handles: AOS init, navbar scroll, hero slider, back to top, smooth scroll
 */

/* =============================================
   1. AOS INITIALIZATION
   ============================================= */
AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 60,
});

/* =============================================
   2. STICKY NAVBAR - add class on scroll
   ============================================= */
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Back to Top visibility
  const backBtn = document.getElementById("backToTop");
  if (window.scrollY > 400) {
    backBtn.classList.add("show");
  } else {
    backBtn.classList.remove("show");
  }
});

/* =============================================
   3. BACK TO TOP FUNCTION
   ============================================= */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =============================================
   4. HERO SLIDER
   ============================================= */
const heroSlides = [
  {
    title: "Special Smells<br/>Special Bouquets",
    subtitle: "Discover our top-rated flowers!",
    btnText: "Start buying now",
    bg: "#fce4f3",
    img: "https://images.unsplash.com/photo-1487530811015-780c7b1e1f47?w=600&q=80",
    imgAlt: "Pink Tulip Bouquet",
  },
  {
    title: "Bloom With<br/>Every Occasion",
    subtitle: "From weddings to daily gifting — we have it all.",
    btnText: "Explore Now",
    bg: "#e8f5e9",
    img: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80",
    imgAlt: "Colorful Tulip Bouquet",
  },
  {
    title: "Fresh Flowers<br/>Delivered Daily",
    subtitle: "Same-day delivery available across your city.",
    btnText: "Order Today",
    bg: "#fce4f3",
    img: "https://images.unsplash.com/photo-1599598425947-5202edd56bdc?w=600&q=80",
    imgAlt: "White Flower Arrangement",
  },
];

let currentSlide = 0;
let sliderInterval;

/**
 * Renders the given slide index into the hero section.
 */
function renderSlide(index) {
  const slide = heroSlides[index];
  const heroSection = document.querySelector(".hero-section");
  const slideEl = document.querySelector(".hero-slide");

  // Fade out
  slideEl.style.opacity = "0";
  slideEl.style.transition = "opacity 0.4s ease";

  setTimeout(() => {
    // Update background
    heroSection.style.background = slide.bg;

    // Update content
    slideEl.querySelector(".hero-title").innerHTML = slide.title;
    slideEl.querySelector(".hero-subtitle").textContent = slide.subtitle;
    slideEl.querySelector(".hero-btn").innerHTML =
      slide.btnText + ' <i class="fa-solid fa-arrow-right ms-2"></i>';

    // Update image
    const img = slideEl.querySelector(".hero-flower");
    img.src = slide.img;
    img.alt = slide.imgAlt;

    // Fade in
    slideEl.style.opacity = "1";
  }, 350);
}

function changeSlide(direction) {
  currentSlide =
    (currentSlide + direction + heroSlides.length) % heroSlides.length;
  renderSlide(currentSlide);
  resetSliderInterval();
}

function resetSliderInterval() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    renderSlide(currentSlide);
  }, 5000);
}

// Start the auto slider
resetSliderInterval();

/* =============================================
   5. SMOOTH SCROLL FOR NAV LINKS
   ============================================= */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const navHeight = navbar ? navbar.offsetHeight : 0;
      const targetPos =
        target.getBoundingClientRect().top + window.scrollY - navHeight - 10;
      window.scrollTo({ top: targetPos, behavior: "smooth" });

      // Close mobile menu if open
      const navbarCollapse = document.getElementById("floraNav");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      }
    }
  });
});

/* =============================================
   6. ACTIVE NAV LINK ON SCROLL (INTERSECTION OBSERVER)
   ============================================= */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const observerOptions = {
  root: null,
  rootMargin: "-40% 0px -55% 0px",
  threshold: 0,
};

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}, observerOptions);

sections.forEach((sec) => sectionObserver.observe(sec));

/* =============================================
   7. PRODUCTS ROW SCROLL NAVIGATION
   ============================================= */
function scrollProducts(direction) {
  const row = document.getElementById("productsRow");
  if (row) {
    row.scrollBy({ left: direction * 280, behavior: "smooth" });
  }
}

/* =============================================
   8. CONTACT FORM VALIDATION & SUBMISSION
   ============================================= */
const contactBtn = document.querySelector(".contact-section .btn-pink");
if (contactBtn) {
  contactBtn.addEventListener("click", function () {
    const inputs = document.querySelectorAll(".contact-section .flora-input");
    let valid = true;

    inputs.forEach((input) => {
      const val = input.value.trim();
      if (!val) {
        valid = false;
        input.style.borderColor = "#e91e8c";
        input.style.boxShadow = "0 0 0 3px rgba(233,30,140,0.15)";
        setTimeout(() => {
          input.style.borderColor = "";
          input.style.boxShadow = "";
        }, 2000);
      }
    });

    if (valid) {
      const originalText = this.innerHTML;
      this.innerHTML =
        '<i class="fa-solid fa-circle-check me-2"></i> Message Sent!';
      this.style.background = "#22c55e";

      setTimeout(() => {
        this.innerHTML = originalText;
        this.style.background = "";
        inputs.forEach((input) => {
          input.value = "";
        });
      }, 3000);
    }
  });
}

/* =============================================
   9. NEWSLETTER FORM
   ============================================= */
const newsletterBtn = document.querySelector(".newsletter-btn");
if (newsletterBtn) {
  newsletterBtn.addEventListener("click", function () {
    const input = document.querySelector(".footer-input");
    const val = input ? input.value.trim() : "";

    if (!val || !val.includes("@")) {
      if (input) {
        input.style.borderColor = "var(--pink-main)";
        setTimeout(() => {
          input.style.borderColor = "";
        }, 2000);
      }
      return;
    }

    const icon = this.querySelector("i");
    icon.className = "fa-solid fa-circle-check";
    if (input) input.value = "";
    setTimeout(() => {
      icon.className = "fa-solid fa-paper-plane";
    }, 3000);
  });
}

/* =============================================
   10. CART BUTTON RIPPLE EFFECT
   ============================================= */
document.querySelectorAll(".btn-pink").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // Only for add-to-cart style buttons in product/shop cards
    if (!this.closest(".product-card") && !this.closest(".shop-card")) return;

    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: rgba(255,255,255,0.4);
      transform: scale(0);
      animation: rippleAnim 0.5s linear;
      width: 80px; height: 80px;
      left: ${e.offsetX - 40}px;
      top: ${e.offsetY - 40}px;
      pointer-events: none;
    `;

    // Ensure the button has position relative
    if (getComputedStyle(this).position === "static") {
      this.style.position = "relative";
    }
    this.style.overflow = "hidden";
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Ripple animation (inject once)
if (!document.getElementById("rippleStyle")) {
  const style = document.createElement("style");
  style.id = "rippleStyle";
  style.textContent = `
    @keyframes rippleAnim {
      to { transform: scale(3); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

/* =============================================
   11. LAZY IMAGE LOADING FALLBACK
   ============================================= */
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("error", function () {
    this.style.background = "#fce4f3";
    this.style.objectFit = "none";
    this.style.filter = "none";
  });
});

/* =============================================
   12. SHOP CARD "ADD TO CART" FEEDBACK
   ============================================= */
document
  .querySelectorAll(".shop-card .btn-pink, .product-card .btn-pink")
  .forEach((btn) => {
    btn.addEventListener("click", function () {
      // Update cart badge
      const badge = document.querySelector(".cart-badge");
      if (badge) {
        const count = parseInt(badge.textContent) || 0;
        badge.textContent = count + 1;

        // Bounce the badge
        badge.style.transform = "scale(1.5)";
        setTimeout(() => {
          badge.style.transform = "";
        }, 300);
      }
    });
  });
