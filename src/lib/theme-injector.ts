/**
 * Theme Injector
 * 
 * Injects theme colors from theme.ts into CSS variables at runtime.
 * This makes theme.ts the single source of truth for all colors.
 */

import { theme, getThemeAsCSSVariables } from '@/config';

/**
 * Inject theme into CSS variables on document root
 * Call this once at app startup
 */
export function injectTheme(): void {
  const root = document.documentElement;
  const cssVars = getThemeAsCSSVariables(theme);
  
  // Set all CSS variables on :root
  Object.entries(cssVars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  
  // Also set on .dark class for dark mode support
  const darkVars = getThemeAsCSSVariables(theme);
  // If you want different dark mode colors, modify theme here
  // For now, we use the same theme for both light and dark
  Object.entries(darkVars).forEach(([key, value]) => {
    // Store for potential dark mode switching
    root.style.setProperty(key, value);
  });
}

/**
 * Update theme at runtime (useful for theme switching)
 */
export function updateTheme(newTheme = theme): void {
  const root = document.documentElement;
  const cssVars = getThemeAsCSSVariables(newTheme);
  
  Object.entries(cssVars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

