(function () {
  const cfg = window.DECK_CONFIG || {};
  const title = cfg.TITLE || "Local Deck";
  const configuredCount = Number(cfg.SLIDE_COUNT || 0);
  const slidePathTemplate =
    typeof cfg.SLIDE_PATH_TEMPLATE === "function"
      ? cfg.SLIDE_PATH_TEMPLATE
      : (n) => `./slides/slide-${n}.png`;
  const showRefDefault = Boolean(cfg.SHOW_REF_DEFAULT);
  const refOpacity = Number.isFinite(Number(cfg.REF_OPACITY)) ? Number(cfg.REF_OPACITY) : 0.18;

  const brandEl = document.getElementById("brand");
  const counterEl = document.getElementById("counter");
  const scrollEl = document.getElementById("scroll");
  const pages = Array.from(document.querySelectorAll(".page"));

  if (!scrollEl || !counterEl || !brandEl || pages.length === 0) {
    // eslint-disable-next-line no-console
    console.error("Deck elements missing from DOM.");
    return;
  }

  brandEl.textContent = title;
  document.title = title;

  const slideCount = configuredCount > 0 ? configuredCount : pages.length;
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

  function setHash(n) {
    history.replaceState(null, "", `#${n}`);
  }

  function getFromHash() {
    const raw = (window.location.hash || "").replace("#", "").trim();
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 1) return 1;
    return clamp(Math.floor(n), 1, slideCount);
  }

  function ensureReferenceOverlayForPage(pageEl, n) {
    const canvas = pageEl.querySelector(".canvas");
    if (!canvas) return;
    if (canvas.querySelector(":scope > img.ref")) return;

    const img = document.createElement("img");
    img.className = "ref";
    img.alt = `Reference overlay for slide ${n}`;
    img.loading = "eager";
    img.decoding = "async";
    img.src = slidePathTemplate(n);

    canvas.style.setProperty("--ref-opacity", String(refOpacity));
    canvas.prepend(img);
  }

  function updateCounter(n) {
    counterEl.textContent = `${n} / ${slideCount}`;
  }

  let currentPage = 1;

  function scrollToPage(n, behavior = "smooth") {
    const page = clamp(n, 1, slideCount);
    const pageEl = pages[page - 1];
    if (!pageEl) return;
    ensureReferenceOverlayForPage(pageEl, page);
    pageEl.scrollIntoView({ behavior, block: "start" });
  }

  function requestFullscreen() {
    const el = document.documentElement;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }
    el.requestFullscreen?.();
  }

  function promptGoto() {
    const raw = window.prompt(`Go to slide (1-${slideCount})`, String(currentPage));
    if (raw == null) return;
    const n = Number(String(raw).trim());
    if (!Number.isFinite(n)) return;
    scrollToPage(n);
  }

  function toggleReferenceOverlay() {
    document.body.classList.toggle("show-ref");
  }

  function setCurrent(n) {
    currentPage = clamp(n, 1, slideCount);
    updateCounter(currentPage);
    setHash(currentPage);
    const pageEl = pages[currentPage - 1];
    if (pageEl) ensureReferenceOverlayForPage(pageEl, currentPage);
  }

  // Track current slide while scrolling.
  const observer = new IntersectionObserver(
    (entries) => {
      // Pick the most visible page
      let best = null;
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
      }
      if (!best) return;
      const idx = pages.indexOf(best.target);
      if (idx >= 0) setCurrent(idx + 1);
    },
    { root: scrollEl, threshold: [0.51, 0.6, 0.75, 0.9] }
  );

  pages.forEach((p, i) => {
    // If author provided data-page, keep it; otherwise set it.
    if (!p.getAttribute("data-page")) p.setAttribute("data-page", String(i + 1));
    observer.observe(p);
  });

  window.addEventListener("hashchange", () => {
    const n = getFromHash();
    scrollToPage(n);
  });

  window.addEventListener("keydown", (e) => {
    // Don't steal keystrokes from inputs
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;

    switch (e.key) {
      case "ArrowRight":
      case "PageDown":
      case " ":
        e.preventDefault();
        scrollToPage(currentPage + 1);
        break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault();
        scrollToPage(currentPage - 1);
        break;
      case "Home":
        e.preventDefault();
        scrollToPage(1);
        break;
      case "End":
        e.preventDefault();
        scrollToPage(slideCount);
        break;
      case "f":
      case "F":
        e.preventDefault();
        requestFullscreen();
        break;
      case "g":
      case "G":
        e.preventDefault();
        promptGoto();
        break;
      case "r":
      case "R":
        e.preventDefault();
        toggleReferenceOverlay();
        break;
      default:
        break;
    }
  });

  // Initial state
  if (showRefDefault) document.body.classList.add("show-ref");
  setCurrent(getFromHash());
  scrollToPage(currentPage, "auto");
})();


