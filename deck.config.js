// Deck configuration (edit this file)
//
// This deck is designed for "optimized HTML slides":
// - You hand-build slide content as HTML/CSS in index.html
// - Optionally export PDF pages to images and use them as a semi-transparent REFERENCE overlay
//   (press "R" to toggle). This helps you match layout while keeping real text in the final deck.

// eslint-disable-next-line no-unused-vars
window.DECK_CONFIG = {
  TITLE: "Local Deck",
  // Used for the on-screen counter (auto-detected from .page elements if left null/0)
  SLIDE_COUNT: 0,

  // Reference overlay image path (exported from the PDF)
  SLIDE_PATH_TEMPLATE: (n) => `./slides/slide-${n}.png`,

  // Reference overlay behavior
  SHOW_REF_DEFAULT: false,
  REF_OPACITY: 0.18,
};


