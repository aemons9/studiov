/**
 * PLATINUM QUALITY PRESETS
 *
 * Optimized generation settings for maximum quality output
 */

import type { GenerationSettings } from '../types';

export interface PlatinumPreset {
  name: string;
  description: string;
  icon: string;
  settings: Partial<GenerationSettings>;
  recommended: string[];
}

export const platinumPresets: PlatinumPreset[] = [
  {
    name: 'Platinum Ultra',
    description: 'Maximum quality, no compromises. Imagen 4.0 Ultra with strict safety for professional editorial.',
    icon: '💎',
    settings: {
      modelId: 'imagen-4.0-ultra-generate-001',
      aspectRatio: '9:16',
      numberOfImages: 1,
      personGeneration: 'allow_all',
      safetySetting: 'block_few',
      addWatermark: false,
      enhancePrompt: false, // Platinum prompts are already enhanced
    },
    recommended: ['High-fashion editorial', 'Portfolio work', 'Client presentations']
  },

  {
    name: 'Platinum Pro',
    description: 'Professional quality with balanced speed. Imagen 3 Fast for rapid iteration.',
    icon: '⚡',
    settings: {
      modelId: 'imagen-3.0-fast-generate-001',
      aspectRatio: '9:16',
      numberOfImages: 1,
      personGeneration: 'allow_all',
      safetySetting: 'block_few',
      addWatermark: false,
      enhancePrompt: false,
    },
    recommended: ['Concept development', 'Client previews', 'Rapid prototyping']
  },

  {
    name: 'Platinum Batch',
    description: 'Optimized for multi-image generation with consistent quality.',
    icon: '📸',
    settings: {
      modelId: 'imagen-3.0-generate-001',
      aspectRatio: '9:16',
      numberOfImages: 4,
      personGeneration: 'allow_all',
      safetySetting: 'block_few',
      addWatermark: false,
      enhancePrompt: false,
    },
    recommended: ['Series generation', 'Variation testing', 'Collection creation']
  },

  {
    name: 'Platinum Cinema',
    description: 'Cinematic 16:9 aspect for wide compositions and environmental storytelling.',
    icon: '🎬',
    settings: {
      modelId: 'imagen-4.0-ultra-generate-001',
      aspectRatio: '16:9',
      numberOfImages: 1,
      personGeneration: 'allow_all',
      safetySetting: 'block_few',
      addWatermark: false,
      enhancePrompt: false,
    },
    recommended: ['Environmental portraits', 'Landscape formats', 'Editorial spreads']
  },

  {
    name: 'Platinum Square',
    description: 'Perfect 1:1 ratio for social media and balanced compositions.',
    icon: '⬜',
    settings: {
      modelId: 'imagen-4.0-ultra-generate-001',
      aspectRatio: '1:1',
      numberOfImages: 1,
      personGeneration: 'allow_all',
      safetySetting: 'block_few',
      addWatermark: false,
      enhancePrompt: false,
    },
    recommended: ['Instagram posts', 'Profile images', 'Symmetric compositions']
  },

  {
    name: 'Platinum Portrait',
    description: 'Classic 4:3 portrait orientation for traditional photography feel.',
    icon: '🖼️',
    settings: {
      modelId: 'imagen-4.0-ultra-generate-001',
      aspectRatio: '4:3',
      numberOfImages: 1,
      personGeneration: 'allow_all',
      safetySetting: 'block_few',
      addWatermark: false,
      enhancePrompt: false,
    },
    recommended: ['Headshots', 'Traditional portraits', 'Print layouts']
  }
];

/**
 * Get preset by name
 */
export function getPlatinumPreset(name: string): PlatinumPreset | undefined {
  return platinumPresets.find(p => p.name === name);
}

/**
 * Apply preset to generation settings
 */
export function applyPlatinumPreset(
  currentSettings: GenerationSettings,
  presetName: string
): GenerationSettings {
  const preset = getPlatinumPreset(presetName);
  if (!preset) {
    console.warn(`Preset "${presetName}" not found`);
    return currentSettings;
  }

  return {
    ...currentSettings,
    ...preset.settings
  };
}

/**
 * Platinum Seed Management
 * For reproducible generations
 */
export class SeedManager {
  private static usedSeeds: Set<number> = new Set();

  /**
   * Generate a random seed
   */
  static generateSeed(): number {
    return Math.floor(Math.random() * 2147483647);
  }

  /**
   * Generate a unique seed not used before
   */
  static generateUniqueSeed(): number {
    let seed: number;
    do {
      seed = this.generateSeed();
    } while (this.usedSeeds.has(seed));

    this.usedSeeds.add(seed);
    return seed;
  }

  /**
   * Mark a seed as used
   */
  static markSeedUsed(seed: number): void {
    this.usedSeeds.add(seed);
  }

  /**
   * Clear seed history
   */
  static clearSeedHistory(): void {
    this.usedSeeds.clear();
  }

  /**
   * Get seed history size
   */
  static getHistorySize(): number {
    return this.usedSeeds.size;
  }
}

/**
 * Platinum Quality Recommendations
 */
export const qualityRecommendations = {
  // Intimacy level based model selection
  modelSelection: (intimacyLevel: number): string => {
    if (intimacyLevel <= 5) {
      return 'imagen-4.0-ultra-generate-001'; // Conservative, safe
    } else if (intimacyLevel <= 7) {
      return 'imagen-3.0-generate-001'; // Balanced
    } else {
      return 'imagen-3.0-fast-generate-001'; // Higher risk, faster iteration
    }
  },

  // Aspect ratio recommendations
  aspectRatio: {
    portrait: '9:16',
    editorial: '4:3',
    cinema: '16:9',
    social: '1:1',
    vertical: '3:4'
  },

  // Safety settings by use case
  safetySettings: {
    commercial: 'block_most',
    editorial: 'block_some',
    artistic: 'block_few'
  }
};

export default {
  platinumPresets,
  getPlatinumPreset,
  applyPlatinumPreset,
  SeedManager,
  qualityRecommendations
};
