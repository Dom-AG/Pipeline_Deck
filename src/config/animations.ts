/**
 * ANIMATION PRESETS & TEMPLATES
 * 
 * Define reusable animation configurations here.
 * Use these presets in components for consistent animations.
 */

export interface AnimationConfig {
  name: string;
  duration: string;
  timingFunction: string;
  delay?: string;
  fillMode?: "forwards" | "backwards" | "both" | "none";
  iterationCount?: number | "infinite";
}

/**
 * Animation Presets
 */
export const animations = {
  // Fade animations
  fadeIn: {
    name: "fadeIn",
    duration: "0.4s",
    timingFunction: "ease-out",
    fillMode: "forwards" as const,
  },
  
  fadeUp: {
    name: "fadeUp",
    duration: "0.6s",
    timingFunction: "ease-out",
    fillMode: "forwards" as const,
  },
  
  fadeDown: {
    name: "fadeDown",
    duration: "0.6s",
    timingFunction: "ease-out",
    fillMode: "forwards" as const,
  },
  
  // Slide animations
  slideInLeft: {
    name: "slideInLeft",
    duration: "0.5s",
    timingFunction: "ease-out",
    fillMode: "forwards" as const,
  },
  
  slideInRight: {
    name: "slideInRight",
    duration: "0.5s",
    timingFunction: "ease-out",
    fillMode: "forwards" as const,
  },
  
  slideInUp: {
    name: "slideInUp",
    duration: "0.5s",
    timingFunction: "ease-out",
    fillMode: "forwards" as const,
  },
  
  // Scale animations
  scaleIn: {
    name: "scaleIn",
    duration: "0.4s",
    timingFunction: "ease-out",
    fillMode: "forwards" as const,
  },
  
  scaleUp: {
    name: "scaleUp",
    duration: "0.3s",
    timingFunction: "ease-out",
    fillMode: "forwards" as const,
  },
  
  // Stagger delays for sequential animations
  stagger: {
    delay100: "0.1s",
    delay200: "0.2s",
    delay300: "0.3s",
    delay400: "0.4s",
    delay500: "0.5s",
  },
} as const;

/**
 * Animation keyframes (to be added to CSS)
 */
export const animationKeyframes = {
  fadeIn: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  
  fadeUp: `
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  
  fadeDown: `
    @keyframes fadeDown {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  
  slideInLeft: `
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
  
  slideInRight: `
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `,
  
  slideInUp: `
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,
  
  scaleIn: `
    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
  
  scaleUp: `
    @keyframes scaleUp {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
};

/**
 * Get animation class name
 */
export function getAnimationClass(config: AnimationConfig, delay?: string): string {
  const classes = [`animate-${config.name}`];
  if (delay) {
    classes.push(`animation-delay-${delay.replace('s', '').replace('.', '')}`);
  }
  return classes.join(" ");
}

/**
 * Animation presets for common use cases
 */
export const animationPresets = {
  // Slide section entrance
  slideSection: animations.fadeUp,
  
  // Card entrance
  card: animations.scaleIn,
  
  // Text entrance
  text: animations.fadeIn,
  
  // Image entrance
  image: animations.fadeUp,
  
  // Chart entrance
  chart: animations.fadeUp,
} as const;

