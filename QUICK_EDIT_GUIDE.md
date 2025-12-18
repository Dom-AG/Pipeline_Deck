# 🚀 Quick Edit Guide

**Where to edit everything in one place:**

## 🎨 **COLORS & THEME**
📁 **File:** `src/config/theme.ts`

### Edit Colors:
```typescript
// Edit the theme object directly - this is the ONLY theme
// Colors use RGB format: [red, green, blue] where each is 0-255
export const theme = {
  background: [5, 5, 5],              // ← Change background here [r, g, b]
  foreground: [235, 219, 178],         // ← Change text color here
  accent: [69, 133, 136],              // ← Change accent color here
  chart: {
    planning: [69, 133, 136],          // ← Chart colors here
    execution: [152, 151, 26],
    support: [215, 153, 33],
    maintenance: [177, 98, 134],
  },
};
```

**That's it!** Just edit the `theme` object. No need to switch themes or choose between multiple options.

**How it works:**
- Colors are automatically injected into CSS variables at runtime
- No need to edit `index.css` - it's all controlled from `theme.ts`
- Changes in `theme.ts` automatically update everywhere

---

## ✨ **ANIMATIONS**
📁 **File:** `src/config/animations.ts`

### Edit Animation Speed:
```typescript
// Line ~20-50: Edit animation durations
fadeUp: {
  duration: "0.6s",        // ← Change speed here
  timingFunction: "ease-out",
}
```

### Available Animations:
- `animations.fadeIn`
- `animations.fadeUp`
- `animations.slideInLeft`
- `animations.scaleIn`
- etc.

---

## 📐 **LAYOUTS**
📁 **File:** `src/config/layouts.ts`

### Edit Layout Width:
```typescript
// Line ~30-50: Edit layout presets
centered: {
  container: {
    maxWidth: "1200px",    // ← Change width here
    padding: "2rem",        // ← Change padding here
  },
}
```

### Edit Spacing:
```typescript
// Line ~100: Edit spacing scale
export const spacing = {
  lg: "2rem",              // ← Change spacing here
  xl: "3rem",
};
```

---

## 📊 **CHART COLORS IN DATA**
📁 **File:** `src/pages/Index.tsx`

### Using Theme Colors:
```typescript
import { getChartColor } from "@/lib/theme-helpers";

// In your data:
color: getChartColor('planning')  // ← Uses theme color
```

---

## 📚 **FULL DOCUMENTATION**
📁 **File:** `CUSTOMIZATION_GUIDE.md`

Complete guide with examples and tips.

---

## 🎯 **QUICK REFERENCE TABLE**

| What | File | What to Edit |
|------|------|--------------|
| **All Colors** | `src/config/theme.ts` | Edit the `theme` object |
| Background color | `src/config/theme.ts` | `theme.background` |
| Text color | `src/config/theme.ts` | `theme.foreground` |
| Accent color | `src/config/theme.ts` | `theme.accent` |
| Chart colors | `src/config/theme.ts` | `theme.chart` |
| Animation speed | `src/config/animations.ts` | `duration: "..."` |
| Layout width | `src/config/layouts.ts` | `maxWidth: "..."` |
| Spacing | `src/config/layouts.ts` | `spacing: { ... }` |

---

**That's it!** All customization happens in the `src/config/` folder. 🎉

