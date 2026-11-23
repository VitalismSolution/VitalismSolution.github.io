/* Vitalism — site behaviour (navigation, lightbox, galleries, gentle reveal) */
(function () {
  "use strict";

  var body = document.body;

  /* The <head> sets a fallback timer that un-hides content if this file
     never loads; we are running, so cancel it. */
  if (window.__vtReveal) clearTimeout(window.__vtReveal);

  /* ---- Sticky header shadow -------------------------------------------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile navigation ----------------------------------------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function setNav(open) {
    body.classList.toggle("nav-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setNav(!body.classList.contains("nav-open"));
    });
    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setNav(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && body.classList.contains("nav-open")) {
        setNav(false);
        toggle.focus();
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 1100) setNav(false);
    });
  }

  /* ---- Horizontal galleries (prev / next buttons) ---------------------- */
  document.querySelectorAll("[data-rail]").forEach(function (wrap) {
    var rail = wrap.querySelector(".rail");
    if (!rail) return;
    function step() {
      var item = rail.querySelector("li");
      return item ? item.getBoundingClientRect().width + 24 : 260;
    }
    wrap.querySelectorAll("[data-rail-dir]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var dir = btn.getAttribute("data-rail-dir") === "prev" ? -1 : 1;
        rail.scrollBy({ left: dir * step() * 2, behavior: "smooth" });
      });
    });
  });

  /* ---- Lightbox for zoomable images ------------------------------------ */
  var zoomables = document.querySelectorAll("img[data-zoom]");
  if (zoomables.length) {
    var box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.setAttribute("aria-label", "Image preview");
    box.innerHTML =
      '<button class="lightbox__close" type="button" aria-label="Close preview">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>' +
      "</button><figure><img alt=\"\"><figcaption></figcaption></figure>";
    body.appendChild(box);

    var boxImg = box.querySelector("img");
    var boxCap = box.querySelector("figcaption");
    var closeBtn = box.querySelector(".lightbox__close");
    var lastFocus = null;

    function openBox(img) {
      lastFocus = document.activeElement;
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt || "";
      boxCap.textContent = img.getAttribute("data-caption") || img.alt || "";
      box.classList.add("is-open");
      body.style.overflow = "hidden";
      closeBtn.focus();
    }
    function closeBox() {
      box.classList.remove("is-open");
      body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }

    zoomables.forEach(function (img) {
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      img.addEventListener("click", function () { openBox(img); });
      img.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openBox(img);
        }
      });
    });
    closeBtn.addEventListener("click", closeBox);
    box.addEventListener("click", function (e) {
      if (e.target === box) closeBox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("is-open")) closeBox();
    });
  }

  /* ---- Gentle reveal on scroll ----------------------------------------- */
  var reveal = document.querySelectorAll("[data-reveal]");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reveal.length) return;
  if (reduce || !("IntersectionObserver" in window)) {
    reveal.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  reveal.forEach(function (el) { io.observe(el); });
})();
