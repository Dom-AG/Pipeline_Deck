/**
 * CONFIGURATION EXPORTS
 * 
 * Central export point for all configuration modules.
 * Import from here: import { activeTheme, animations, layouts } from '@/config'
 */

export * from './theme';
export * from './animations';
export * from './layouts';
export * from './content';

// Re-export commonly used items
export { theme, activeTheme } from './theme';
export { animations, animationPresets, animationKeyframes } from './animations';
export { layouts, layoutPatterns, activeLayout } from './layouts';
export { content } from './content';

