/**
 * Theme Helper Utilities
 * 
 * Convenience functions for working with theme colors and configs
 */

import { theme } from '@/config';
import { rgbTupleToHsl, rgbToHsl } from './color-converter';

/**
 * Convert RGB tuple to CSS rgb() format
 * @param rgb - RGB tuple like [69, 133, 136]
 * @returns CSS string like "rgb(69, 133, 136)"
 */
export function rgb(rgb: readonly [number, number, number]): string {
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

/**
 * Convert RGB tuple to CSS hsl() format (for compatibility)
 * @param rgb - RGB tuple like [69, 133, 136]
 * @returns CSS string like "hsl(194, 84%, 41%)"
 */
export function rgbToHslString(rgb: readonly [number, number, number]): string {
  return `hsl(${rgbTupleToHsl(rgb)})`;
}

/**
 * Get a chart color as CSS rgb() string
 */
export function getChartColor(key: keyof typeof theme.chart): string {
  return rgb(theme.chart[key]);
}

/**
 * Get all chart colors as an array
 */
export function getAllChartColors(): string[] {
  return [
    getChartColor('planning'),
    getChartColor('execution'),
    getChartColor('support'),
    getChartColor('maintenance'),
  ];
}

/**
 * Get a color with opacity
 * @param hsl - HSL string
 * @param opacity - Opacity 0-1
 * @returns CSS string like "hsla(194, 84%, 41%, 0.5)"
 */
export function hsla(hsl: string, opacity: number): string {
  const [h, s, l] = hsl.split(' ');
  return `hsla(${h}, ${s}, ${l}, ${opacity})`;
}

