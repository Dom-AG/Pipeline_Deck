# 🎛️ Central Control Center

**All customization happens in ONE place: `src/config/theme.ts`**

## ✅ What's Been Done

1. **Removed all hardcoded colors** from CSS and components
2. **Created theme injection system** - colors are injected at runtime from `theme.ts`
3. **Single source of truth** - `theme.ts` controls everything
4. **No more duplication** - no need to edit multiple files

## 📁 File Structure

```
src/
├── config/
│   ├── theme.ts          ⭐ EDIT COLORS HERE (ONLY PLACE)
│   ├── animations.ts      ⭐ EDIT ANIMATIONS HERE
│   ├── layouts.ts         ⭐ EDIT LAYOUTS HERE
│   └── index.ts
│
├── lib/
│   ├── theme-injector.ts  (injects theme.ts → CSS variables)
│   └── theme-helpers.ts   (helper functions)
│
├── main.tsx              (calls injectTheme() on startup)
└── index.css             (no hardcoded colors - uses injected variables)
```

## 🎨 How It Works

1. **You edit** `src/config/theme.ts`
2. **Theme injector** (`src/lib/theme-injector.ts`) reads from `theme.ts`
3. **CSS variables** are set on `document.documentElement` at runtime
4. **All components** use CSS variables (which come from `theme.ts`)
5. **Everything stays in sync** automatically!

## ✏️ Editing Colors

**ONLY edit:** `src/config/theme.ts`

```typescript
export const theme = {
  background: "0 2% 2%",        // ← Change this
  foreground: "43 74% 81%",      // ← Change this
  accent: "194 84% 41%",         // ← Change this
  chart: {
    planning: "194 84% 41%",     // ← Change chart colors here
    // ...
  },
};
```

**That's it!** No need to edit:
- ❌ `index.css` (colors are injected automatically)
- ❌ Component files (they use CSS variables)
- ❌ Any other files

## 🔄 What Happens When You Edit

1. Save `theme.ts`
2. Vite hot-reloads
3. `injectTheme()` runs again
4. CSS variables update
5. Browser reflects changes immediately

## 📊 Components Using Theme

All components now use:
- CSS variables (from `theme.ts` via injection)
- `getChartColor()` helper (reads from `theme.ts`)
- No hardcoded colors

**Updated components:**
- ✅ `StackedBarChart.tsx` - uses theme colors
- ✅ `TimelineChart.tsx` - uses CSS variables
- ✅ `GanttChart.tsx` - uses CSS variables
- ✅ `chart.tsx` - uses CSS variables instead of `#ccc`, `#fff`
- ✅ All other components - use Tailwind classes (which use CSS variables)

## 🚫 What's Removed

- ❌ Hardcoded colors in `index.css`
- ❌ Hardcoded hex colors in components
- ❌ Duplicate color definitions
- ❌ Manual CSS variable updates

## 💡 Benefits

1. **Single source of truth** - one file to edit
2. **No sync issues** - everything auto-updates
3. **Type safety** - TypeScript knows your colors
4. **Easy to maintain** - change once, updates everywhere
5. **Hot reload** - see changes instantly

## 🎯 Quick Reference

| What to Change | File | Location |
|---------------|------|----------|
| **All Colors** | `src/config/theme.ts` | `theme` object |
| **Animations** | `src/config/animations.ts` | `animations` object |
| **Layouts** | `src/config/layouts.ts` | `layouts` object |

**Remember:** Only edit `src/config/theme.ts` for colors. Everything else is automatic! 🎉

