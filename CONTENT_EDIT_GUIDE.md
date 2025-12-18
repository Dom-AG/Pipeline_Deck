# 📝 Content Editing Guide

**All text content is now separated for easy editing!**

## 📁 Where to Edit Content

**File:** `src/config/content.ts`

This is the **single source of truth** for all text content in your deck.

## 📋 What's Separated

All paragraphs, headings, descriptions, and text strings are now in `content.ts`:

- ✅ Navigation labels
- ✅ Title and subtitle
- ✅ All headings
- ✅ All paragraphs
- ✅ Feature descriptions
- ✅ Card content
- ✅ Table data
- ✅ Footer text

## ✏️ How to Edit

### Example: Edit a Paragraph

```typescript
// In src/config/content.ts
export const content = {
  structure: {
    features: [
      {
        title: "Advanced pipeline Vision",
        description: "AI augmented USD-centric workflow...", // ← Edit here
      },
    ],
  },
};
```

### Example: Edit a Heading

```typescript
// In src/config/content.ts
export const content = {
  title: {
    title: "Pipeline Blueprint",  // ← Edit here
    subtitle: "A comprehensive roadmap...",  // ← Edit here
  },
};
```

### Example: Edit Table Content

```typescript
// In src/config/content.ts
export const content = {
  responsibility: {
    tableData: [
      { 
        task: "New pipeline feature design",  // ← Edit here
        lead: "Directs/specifies",           // ← Edit here
        dev: "Builds/architects",            // ← Edit here
        // ...
      },
    ],
  },
};
```

## 📚 Content Structure

The content is organized by section:

- `content.nav` - Navigation labels
- `content.title` - Title slide
- `content.structure` - Studio structure section
- `content.roles` - Roles section
- `content.responsibility` - Responsibility matrix
- `content.pipeline` - Pipeline section
- `content.usd` - USD/Asset Management
- `content.assets` - Assets section
- `content.aces` - ACES section
- `content.rez` - REZ section
- `content.render` - Render section
- `content.ai` - AI section
- `content.timeline` - Timeline section
- `content.footer` - Footer text

## 🎯 Quick Reference

| What to Edit | File | Location |
|-------------|------|----------|
| **All Text Content** | `src/config/content.ts` | `content` object |
| Paragraphs | `src/config/content.ts` | `description` fields |
| Headings | `src/config/content.ts` | `heading` fields |
| Table Data | `src/config/content.ts` | `tableData` arrays |
| Navigation | `src/config/content.ts` | `content.nav` |

## 💡 Benefits

1. **Single source of truth** - All text in one file
2. **Easy to find** - Organized by section
3. **No code digging** - Edit text without touching components
4. **Type safety** - TypeScript knows your content structure
5. **Version control friendly** - Easy to see what changed

## 🚀 Quick Start

1. Open `src/config/content.ts`
2. Find the section you want to edit
3. Change the text
4. Save - changes appear automatically!

**That's it!** No need to dig through component code anymore. 🎉

