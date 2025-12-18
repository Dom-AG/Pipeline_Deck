/**
 * Color Conversion Utilities
 * 
 * Converts between RGB and HSL color formats
 */

/**
 * Convert RGB to HSL
 * @param r - Red (0-255)
 * @param g - Green (0-255)
 * @param b - Blue (0-255)
 * @returns HSL string in format "h s% l%"
 */
export function rgbToHsl(r: number, g: number, b: number): string {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  const lightness = Math.round(l * 100);

  return `${h} ${s}% ${lightness}%`;
}

/**
 * RGB color tuple type (readonly for immutability)
 */
export type RGB = readonly [number, number, number];

/**
 * Convert RGB tuple to HSL string
 */
export function rgbTupleToHsl(rgb: RGB): string {
  return rgbToHsl(rgb[0], rgb[1], rgb[2]);
}

