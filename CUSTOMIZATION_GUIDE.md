# 🎨 Deck Customization Guide

This guide shows you exactly where to edit colors, animations, layouts, and all visual aspects of your deck.

## 📁 File Structure

```
src/
├── config/                    # ⭐ ALL CUSTOMIZATION HAPPENS HERE
│   ├── theme.ts              # Colors, backgrounds, accents
│   ├── animations.ts         # Animation presets & keyframes
│   ├── layouts.ts            # Layout templates & spacing
│   └── index.ts              # Central exports
│
├── components/deck/          # Deck components (use configs)
├── pages/Index.tsx           # Your deck content
└── index.css                 # CSS (references theme)
```

---

## 🎨 **COLORS & THEME** → `src/config/theme.ts`

### Quick Start
1. Open `src/config/theme.ts`
2. Edit the `theme` object to change colors
3. That's it! All colors are in one place.

### What You Can Customize

#### Base Colors
```typescript
// In src/config/theme.ts
export const theme = {
  background: "0 0% 10%",        // Main background (HSL format)
  foreground: "43 74% 81%",       // Main text color
  // ... rest of colors
};
```

#### Surface Colors
```typescript
card: "0 0% 13%",             // Card backgrounds
cardBorder: "0 0% 22%",       // Card borders
popover: "0 0% 12%",          // Popover/dropdown backgrounds
```

#### Accent Colors
```typescript
accent: "194 84% 41%",        // Primary accent (blue)
destructive: "0 65% 45%",     // Error/danger color (red)
```

#### Chart Colors (for graphs/charts)
```typescript
chart: {
  planning: "194 84% 41%",     // Blue
  execution: "78 61% 40%",     // Green
  support: "35 81% 49%",       // Yellow
  maintenance: "311 42% 58%",  // Purple
}
```

### One Simple Theme
There's just one theme object in `theme.ts`. Edit it directly - no need to switch between multiple themes!

### Color Format
All colors use **RGB format**: `[red, green, blue]` where each value is 0-255
- Red: 0-255
- Green: 0-255
- Blue: 0-255

**Example:**
```typescript
// Blue color
accent: [69, 133, 136],  // = rgb(69, 133, 136)

// Dark gray
background: [5, 5, 5],   // = rgb(5, 5, 5) - very dark

// Beige/cream
foreground: [235, 219, 178],  // = rgb(235, 219, 178)
```

**Note:** RGB values are automatically converted to HSL for CSS variables internally. You only need to work with RGB!

---

## ✨ **ANIMATIONS** → `src/config/animations.ts`

### Available Animation Presets

```typescript
animations.fadeIn      // Fade in
animations.fadeUp      // Fade + slide up
animations.fadeDown    // Fade + slide down
animations.slideInLeft // Slide from left
animations.slideInRight// Slide from right
animations.scaleIn     // Scale + fade
```

### Using Animations in Components

```typescript
import { animationPresets } from '@/config';

// In your component
<div className={`${animationPresets.card.name} opacity-0`}>
  Content
</div>
```

### Customizing Animation Speed

Edit in `animations.ts`:
```typescript
fadeUp: {
  name: "fadeUp",
  duration: "0.6s",        // ← Change speed here
  timingFunction: "ease-out",
  fillMode: "forwards",
}
```

### Stagger Delays (for sequential animations)
```typescript
import { animations } from '@/config';

// Use delays for sequential effects
<div className="animation-delay-100">First</div>
<div className="animation-delay-200">Second</div>
<div className="animation-delay-300">Third</div>
```

---

## 📐 **LAYOUTS** → `src/config/layouts.ts`

### Layout Presets

```typescript
layouts.fullWidth   // Full width, no max-width
layouts.centered    // Centered, max-width 1200px
layouts.wide        // Wide layout, max-width 1400px
layouts.compact     // Compact, max-width 1000px
```

### Spacing Scale

```typescript
spacing.xs   // 0.5rem
spacing.sm   // 1rem
spacing.md   // 1.5rem
spacing.lg   // 2rem
spacing.xl   // 3rem
```

### Grid Patterns

```typescript
// Two column layout
layoutPatterns.twoColumn

// Feature grid (3 columns)
layoutPatterns.featureGrid

// Responsive card grid
layoutPatterns.cardGrid
```

### Customizing Layouts

Edit in `layouts.ts`:
```typescript
centered: {
  container: {
    maxWidth: "1200px",  // ← Change max width
    padding: "2rem",     // ← Change padding
    center: true,
  },
  spacing: {
    section: "6rem",     // ← Section spacing
    element: "2rem",     // ← Element spacing
  },
}
```

---

## 🎯 **USING CONFIGS IN COMPONENTS**

### Example: Using Theme Colors

```typescript
import { activeTheme } from '@/config';

// Get chart color
const chartColor = `hsl(${activeTheme.chart.planning})`;

// Use in style
<div style={{ backgroundColor: chartColor }}>
  Content
</div>
```

### Example: Using Animations

```typescript
import { animationPresets } from '@/config';

function MyComponent() {
  return (
    <div className={`animate-${animationPresets.card.name} opacity-0`}>
      Card content
    </div>
  );
}
```

### Example: Using Layouts

```typescript
import { layouts, spacing } from '@/config';

function MySection() {
  return (
    <div className={`max-w-[${layouts.centered.container.maxWidth}] mx-auto`}>
      <div style={{ marginBottom: spacing.lg }}>
        Content
      </div>
    </div>
  );
}
```

---

## 📝 **CHART COLORS IN DATA**

When you define chart data in `src/pages/Index.tsx`, use theme colors:

```typescript
import { activeTheme } from '@/config';

const chartData = {
  segments: [
    { 
      label: "Planning", 
      value: 40, 
      color: `hsl(${activeTheme.chart.planning})`  // ← Use theme color
    },
  ],
};
```

---

## 🔄 **QUICK REFERENCE**

| What to Change | File | Location |
|---------------|------|----------|
| **All Colors** | `src/config/theme.ts` | `gruvboxDarkTheme` object |
| **Background** | `src/config/theme.ts` | `background: "..."` |
| **Accent Color** | `src/config/theme.ts` | `accent: "..."` |
| **Chart Colors** | `src/config/theme.ts` | `chart: { ... }` |
| **Animation Speed** | `src/config/animations.ts` | `duration: "..."` |
| **Layout Width** | `src/config/layouts.ts` | `maxWidth: "..."` |
| **Spacing** | `src/config/layouts.ts` | `spacing: { ... }` |

---

## 🎨 **CSS VARIABLES**

CSS variables are **automatically injected** from `theme.ts` at runtime. You don't need to edit `index.css` - all colors come from `theme.ts`.

The theme injection happens in `src/main.tsx` using `injectTheme()`, which reads from `theme.ts` and sets CSS variables on the document root.

To use in CSS:
```css
.my-element {
  background-color: hsl(var(--background));
  color: hsl(var(--foreground));
  border-color: hsl(var(--border));
}
```

**Important:** Edit colors in `src/config/theme.ts` only. The CSS variables are automatically synced!

---

## 💡 **TIPS**

1. **Start with theme.ts** - Most visual changes happen here
2. **Use HSL format** - Easier to adjust brightness/saturation
3. **Test incrementally** - Change one color at a time
4. **Keep contrast** - Ensure text is readable on backgrounds
5. **Use presets** - Don't reinvent, use existing animation/layout presets

---

## 🚀 **NEXT STEPS**

1. Open `src/config/theme.ts` and customize colors
2. Check `src/config/animations.ts` for animation options
3. Review `src/config/layouts.ts` for layout patterns
4. Import configs in your components: `import { activeTheme } from '@/config'`

Happy customizing! 🎨

