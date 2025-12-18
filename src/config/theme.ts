/**
 * THEME CONFIGURATION
 * 
 * Edit all colors here. This is the ONLY theme file you need to edit.
 * All colors use RGB format: [red, green, blue] where each value is 0-255
 * 
 * Examples:
 *   - [26, 26, 26] = dark gray (rgb(26, 26, 26))
 *   - [69, 133, 136] = blue (rgb(69, 133, 136))
 *   - [235, 219, 178] = beige/cream (rgb(235, 219, 178))
 */

export const theme = {
  // Base colors
  background: [2, 2, 2] as const,              // Main background color - very dark
  foreground: [255, 255, 255] as const,        // Main text color - beige/cream
  
  // Surface colors
  card: [33, 33, 33] as const,                 // Card backgrounds - dark gray
  cardForeground: [255, 255, 155] as const,    // Text on cards
  cardBorder: [56, 56, 56] as const,           // Card borders
  popover: [31, 31, 31] as const,              // Popover/dropdown backgrounds
  popoverForeground: [235, 219, 178] as const, // Text in popovers
  
  // Semantic colors
  primary: [235, 235, 235] as const,           // Primary color (buttons, highlights)
  primaryForeground: [13, 13, 13] as const,    // Text on primary
  secondary: [115, 115, 115] as const,         // Secondary color - gray
  secondaryForeground: [235, 219, 178] as const, // Text on secondary
  muted: [46, 46, 46] as const,                // Muted backgrounds
  mutedForeground: [140, 140, 140] as const,   // Muted text
  accent: [69, 133, 0] as const,             // Accent color (links, highlights) - blue
  accentForeground: [235, 219, 178] as const,  // Text on accent
  destructive: [204, 36, 29] as const,         // Error/danger color - red
  destructiveForeground: [235, 219, 178] as const, // Text on destructive
  
  // UI elements
  border: [56, 56, 56] as const,               // Border color
  input: [56, 56, 56] as const,                // Input border color
  ring: [69, 133, 136] as const,               // Focus ring color - blue
  
  // Chart colors (for graphs and data visualization)
  chart: {
    planning: [69, 133, 136] as const,        // Blue - for planning items
    execution: [152, 151, 26] as const,        // Green - for execution items
    support: [215, 153, 33] as const,          // Yellow - for support items
    maintenance: [177, 98, 134] as const,      // Purple - for maintenance items
    orange: [214, 93, 14] as const,            // Orange - optional extra color
    aqua: [104, 157, 106] as const,             // Aqua - optional extra color
  },
  
  // Sidebar colors (if you use a sidebar)
  sidebar: {
    background: [5, 5, 5] as const,            // Match main background
    foreground: [235, 219, 178] as const,
    primary: [235, 219, 178] as const,
    primaryForeground: [26, 26, 26] as const,
    accent: [46, 46, 46] as const,
    accentForeground: [235, 219, 178] as const,
    border: [56, 56, 56] as const,
    ring: [69, 133, 136] as const,
  },

  // Text colors based on background type
  text: {
    // For DARK backgrounds (like main background, roles, pipeline, etc.)
    onDark: {
      heading: [255, 255, 255] as const,        // White - for h1, h2, h3
      subheading: [200, 200, 200] as const,     // Light gray - for h4, h5, h6
      paragraph: [235, 235, 235] as const,      // Off-white - for body text
      muted: [160, 160, 160] as const,         // Gray - for secondary text
      link: [69, 133, 136] as const,           // Blue - for links
      highlight: [69, 133, 0] as const,        // Green - for highlighted text
    },

    // For COLORED backgrounds (like green, pink, purple, etc.)
    onColored: {
      heading: [14, 16, 15] as const,          // Very dark (almost black) - for h1, h2, h3
      subheading: [30, 30, 30] as const,       // Dark gray - for h4, h5, h6
      paragraph: [25, 25, 25] as const,        // Near black - for body text
      muted: [60, 60, 60] as const,            // Medium gray - for secondary text
      link: [14, 16, 15] as const,             // Dark - for links (with underline)
      highlight: [14, 16, 15] as const,        // Dark - for highlighted text (with bg)
    },
  },
};

// Export as activeTheme for backwards compatibility
export const activeTheme = theme;

/**
 * Export theme as CSS variables format
 * Converts RGB to HSL for CSS variables (CSS uses HSL format)
 */
import { rgbTupleToHsl } from '@/lib/color-converter';

export function getThemeAsCSSVariables(themeConfig = theme): Record<string, string> {
  return {
    "--background": rgbTupleToHsl(themeConfig.background),
    "--foreground": rgbTupleToHsl(themeConfig.foreground),
    "--card": rgbTupleToHsl(themeConfig.card),
    "--card-foreground": rgbTupleToHsl(themeConfig.cardForeground),
    "--card-border": rgbTupleToHsl(themeConfig.cardBorder),
    "--popover": rgbTupleToHsl(themeConfig.popover),
    "--popover-foreground": rgbTupleToHsl(themeConfig.popoverForeground),
    "--primary": rgbTupleToHsl(themeConfig.primary),
    "--primary-foreground": rgbTupleToHsl(themeConfig.primaryForeground),
    "--secondary": rgbTupleToHsl(themeConfig.secondary),
    "--secondary-foreground": rgbTupleToHsl(themeConfig.secondaryForeground),
    "--muted": rgbTupleToHsl(themeConfig.muted),
    "--muted-foreground": rgbTupleToHsl(themeConfig.mutedForeground),
    "--accent": rgbTupleToHsl(themeConfig.accent),
    "--accent-foreground": rgbTupleToHsl(themeConfig.accentForeground),
    "--destructive": rgbTupleToHsl(themeConfig.destructive),
    "--destructive-foreground": rgbTupleToHsl(themeConfig.destructiveForeground),
    "--border": rgbTupleToHsl(themeConfig.border),
    "--input": rgbTupleToHsl(themeConfig.input),
    "--ring": rgbTupleToHsl(themeConfig.ring),
    "--chart-planning": rgbTupleToHsl(themeConfig.chart.planning),
    "--chart-execution": rgbTupleToHsl(themeConfig.chart.execution),
    "--chart-support": rgbTupleToHsl(themeConfig.chart.support),
    "--chart-maintenance": rgbTupleToHsl(themeConfig.chart.maintenance),
    "--sidebar-background": rgbTupleToHsl(themeConfig.sidebar.background),
    "--sidebar-foreground": rgbTupleToHsl(themeConfig.sidebar.foreground),
    "--sidebar-primary": rgbTupleToHsl(themeConfig.sidebar.primary),
    "--sidebar-primary-foreground": rgbTupleToHsl(themeConfig.sidebar.primaryForeground),
    "--sidebar-accent": rgbTupleToHsl(themeConfig.sidebar.accent),
    "--sidebar-accent-foreground": rgbTupleToHsl(themeConfig.sidebar.accentForeground),
    "--sidebar-border": rgbTupleToHsl(themeConfig.sidebar.border),
    "--sidebar-ring": rgbTupleToHsl(themeConfig.sidebar.ring),
    
    // Text colors for dark backgrounds
    "--text-on-dark-heading": rgbTupleToHsl(themeConfig.text.onDark.heading),
    "--text-on-dark-subheading": rgbTupleToHsl(themeConfig.text.onDark.subheading),
    "--text-on-dark-paragraph": rgbTupleToHsl(themeConfig.text.onDark.paragraph),
    "--text-on-dark-muted": rgbTupleToHsl(themeConfig.text.onDark.muted),
    "--text-on-dark-link": rgbTupleToHsl(themeConfig.text.onDark.link),
    "--text-on-dark-highlight": rgbTupleToHsl(themeConfig.text.onDark.highlight),
    
    // Text colors for colored backgrounds
    "--text-on-colored-heading": rgbTupleToHsl(themeConfig.text.onColored.heading),
    "--text-on-colored-subheading": rgbTupleToHsl(themeConfig.text.onColored.subheading),
    "--text-on-colored-paragraph": rgbTupleToHsl(themeConfig.text.onColored.paragraph),
    "--text-on-colored-muted": rgbTupleToHsl(themeConfig.text.onColored.muted),
    "--text-on-colored-link": rgbTupleToHsl(themeConfig.text.onColored.link),
    "--text-on-colored-highlight": rgbTupleToHsl(themeConfig.text.onColored.highlight),
  };
}

