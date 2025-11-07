/**
 * MASTER PHOTOGRAPHER STYLE PROFILES
 * Detailed configurations for emulating legendary fashion photographers
 */

import type { MasterStyleProfile } from './types';

export const MASTER_STYLES: Record<string, MasterStyleProfile> = {
  newton: {
    name: 'newton',
    displayName: 'Helmut Newton',
    description: 'Bold, graphic, high-contrast fashion with powerful feminine archetypes',
    lightingSignature: 'Dramatic chiaroscuro with hard shadows, stark rim lighting, high-contrast black and white aesthetic',
    compositionStyle: 'Graphic architectural framing, confrontational angles, urban minimalism, bold negative space',
    moodPalette: ['powerful', 'confident', 'commanding', 'bold', 'urban', 'sophisticated', 'magnetic'],
    safetyModifier: -0.5, // Slightly more permissive for artistic boldness
    technicalSpecs: {
      contrast: 'high',
      saturation: 'muted',
      sharpness: 'crisp',
      grain: 'subtle'
    },
    examplePromptFragment: 'Award-winning Helmut Newton-style black and white fashion photography, powerful feminine presence in minimalist urban setting, dramatic rim lighting creating sculptural shadows'
  },

  penn: {
    name: 'penn',
    displayName: 'Irving Penn',
    description: 'Minimalist perfection with graphic composition and impeccable lighting control',
    lightingSignature: 'Clean studio lighting with perfect shadow control, soft key light with subtle fill, timeless elegance',
    compositionStyle: 'Minimalist reduction, perfect geometric balance, centered compositions, graphic simplicity',
    moodPalette: ['precise', 'elegant', 'timeless', 'sophisticated', 'refined', 'classical', 'poised'],
    safetyModifier: 0.5, // More conservative, refined approach
    technicalSpecs: {
      contrast: 'medium',
      saturation: 'neutral',
      sharpness: 'perfect',
      grain: 'none'
    },
    examplePromptFragment: 'Irving Penn-style minimalist studio portrait, perfect lighting balance, graphic composition against neutral backdrop, timeless elegant sophistication'
  },

  roversi: {
    name: 'roversi',
    displayName: 'Paolo Roversi',
    description: 'Ethereal romantic imagery with soft dreamy lighting and timeless beauty',
    lightingSignature: 'Soft diffused lighting with romantic glow, film-like quality, ethereal atmosphere, gentle shadows',
    compositionStyle: 'Intimate personal framing, romantic close perspectives, emotional connection, painterly quality',
    moodPalette: ['romantic', 'dreamy', 'ethereal', 'vulnerable', 'elegant', 'timeless', 'graceful'],
    safetyModifier: 0, // Balanced artistic expression
    technicalSpecs: {
      contrast: 'low',
      saturation: 'warm',
      sharpness: 'soft',
      grain: 'visible'
    },
    examplePromptFragment: 'Paolo Roversi-inspired romantic fine-art portrait, soft ethereal lighting, film-like quality with gentle grain, timeless dreamy atmosphere'
  },

  ritts: {
    name: 'ritts',
    displayName: 'Herb Ritts',
    description: 'Sculptural forms in high-contrast monochrome with natural outdoor settings',
    lightingSignature: 'Natural sunlight creating sculptural shadows, high-contrast monochrome, golden hour radiance',
    compositionStyle: 'Sculptural body as landscape, dramatic outdoor locations, geometric forms, bold silhouettes',
    moodPalette: ['sculptural', 'powerful', 'natural', 'elemental', 'timeless', 'bold', 'raw'],
    safetyModifier: -0.25, // Slightly permissive for artistic form
    technicalSpecs: {
      contrast: 'high',
      saturation: 'muted',
      sharpness: 'crisp',
      grain: 'subtle'
    },
    examplePromptFragment: 'Herb Ritts-style sculptural monochrome photography, natural sunlight creating dramatic shadows, body as architectural form in minimalist outdoor setting'
  }
};

export function getMasterStyle(name: string): MasterStyleProfile {
  return MASTER_STYLES[name] || MASTER_STYLES.newton;
}

export function getAllMasterStyles(): MasterStyleProfile[] {
  return Object.values(MASTER_STYLES);
}
