/**
 * LAYOUT TEMPLATES & PRESETS
 * 
 * Define reusable layout configurations here.
 * Use these templates for consistent spacing, grids, and component arrangements.
 */

export interface LayoutConfig {
  name: string;
  container: {
    maxWidth?: string;
    padding?: string;
    center?: boolean;
  };
  spacing: {
    section: string;
    element: string;
    card: string;
  };
  grid: {
    columns?: number;
    gap?: string;
  };
}

/**
 * Layout Presets
 */
export const layouts = {
  // Full-width slide section
  fullWidth: {
    name: "fullWidth",
    container: {
      maxWidth: "100%",
      padding: "2rem",
      center: false,
    },
    spacing: {
      section: "6rem",
      element: "2rem",
      card: "1.5rem",
    },
    grid: {
      gap: "1.5rem",
    },
  },
  
  // Centered content with max width
  centered: {
    name: "centered",
    container: {
      maxWidth: "1200px",
      padding: "2rem",
      center: true,
    },
    spacing: {
      section: "6rem",
      element: "2rem",
      card: "1.5rem",
    },
    grid: {
      gap: "1.5rem",
    },
  },
  
  // Wide layout for presentations
  wide: {
    name: "wide",
    container: {
      maxWidth: "1400px",
      padding: "3rem",
      center: true,
    },
    spacing: {
      section: "8rem",
      element: "2.5rem",
      card: "2rem",
    },
    grid: {
      gap: "2rem",
    },
  },
  
  // Compact layout
  compact: {
    name: "compact",
    container: {
      maxWidth: "1000px",
      padding: "1.5rem",
      center: true,
    },
    spacing: {
      section: "4rem",
      element: "1.5rem",
      card: "1rem",
    },
    grid: {
      gap: "1rem",
    },
  },
} as const;

/**
 * Grid column configurations
 */
export const gridColumns = {
  auto: "grid-cols-auto",
  "1": "grid-cols-1",
  "2": "grid-cols-2",
  "3": "grid-cols-3",
  "4": "grid-cols-4",
  "5": "grid-cols-5",
  "6": "grid-cols-6",
  "12": "grid-cols-12",
} as const;

/**
 * Responsive grid breakpoints
 */
export const responsiveGrids = {
  mobile: "grid-cols-1",
  tablet: "md:grid-cols-2",
  desktop: "lg:grid-cols-3",
  wide: "xl:grid-cols-4",
} as const;

/**
 * Common layout patterns
 */
export const layoutPatterns = {
  // Two column layout (content + sidebar)
  twoColumn: {
    main: "lg:col-span-2",
    sidebar: "lg:col-span-1",
  },
  
  // Three column layout
  threeColumn: {
    left: "lg:col-span-1",
    center: "lg:col-span-1",
    right: "lg:col-span-1",
  },
  
  // Feature grid (3 columns)
  featureGrid: {
    columns: 3,
    gap: "2rem",
    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
  },
  
  // Card grid (responsive)
  cardGrid: {
    mobile: "grid-cols-1",
    tablet: "md:grid-cols-2",
    desktop: "lg:grid-cols-3",
    wide: "xl:grid-cols-4",
  },
  
  // Image grid
  imageGrid: {
    columns: 4,
    gap: "1rem",
    className: "grid grid-cols-2 md:grid-cols-4 gap-1",
  },
} as const;

/**
 * Spacing scale (Tailwind-like)
 */
export const spacing = {
  xs: "0.5rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
  "2xl": "4rem",
  "3xl": "6rem",
} as const;

/**
 * Typography scale
 */
export const typography = {
  heading: {
    "1": "text-6xl md:text-8xl",
    "2": "text-4xl md:text-5xl",
    "3": "text-3xl md:text-4xl",
    "4": "text-2xl md:text-3xl",
  },
  body: {
    large: "text-lg md:text-xl",
    base: "text-base",
    small: "text-sm",
    xs: "text-xs",
  },
} as const;

/**
 * Get layout classes
 */
export function getLayoutClasses(config: LayoutConfig): string {
  const classes: string[] = [];
  
  if (config.container.center) {
    classes.push("mx-auto");
  }
  
  if (config.container.maxWidth) {
    classes.push(`max-w-[${config.container.maxWidth}]`);
  }
  
  if (config.container.padding) {
    classes.push(`p-[${config.container.padding}]`);
  }
  
  return classes.join(" ");
}

/**
 * Active layout preset
 */
export const activeLayout = layouts.centered;

