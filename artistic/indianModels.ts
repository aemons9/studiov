/**
 * INDIAN MODEL ARCHETYPES
 * Diverse range of Indian fashion model types for artistic generation
 */

import type { IndianModelArchetype } from './types';

export const INDIAN_MODEL_ARCHETYPES: IndianModelArchetype[] = [
  {
    id: 'modern-power',
    name: 'Modern Power Icon',
    description: 'Contemporary high-fashion model with commanding presence and sophisticated urban aesthetic',
    physicalTraits: {
      height: '5\'9"',
      figure: 'Athletic sculptural form with strong shoulders and defined waist',
      skinTone: 'Luminous dusky complexion with warm undertones',
      features: 'Sharp angular bone structure, magnetic penetrating gaze, strong jawline'
    },
    styleContext: 'Contemporary high-fashion editorial, urban minimalism, power dressing',
    culturalElements: ['Modern Indian cosmopolitan aesthetic', 'Global fashion sensibility']
  },

  {
    id: 'ethereal-classic',
    name: 'Ethereal Classical Beauty',
    description: 'Timeless elegant model embodying classical Indian grace with contemporary refinement',
    physicalTraits: {
      height: '5\'7"',
      figure: 'Graceful hourglass silhouette with feminine curves',
      skinTone: 'Radiant fair to wheatish complexion with subtle glow',
      features: 'Soft romantic features, expressive almond eyes, delicate bone structure'
    },
    styleContext: 'Romantic fine-art portraiture, luxury fashion, timeless elegance',
    culturalElements: ['Classical Indian grace', 'Bollywood golden-era aesthetic', 'Royal heritage influence']
  },

  {
    id: 'bold-contemporary',
    name: 'Bold Contemporary Muse',
    description: 'Avant-garde fashion model with striking features and fearless artistic expression',
    physicalTraits: {
      height: '5\'10"',
      figure: 'Statuesque athletic build with dramatic proportions',
      skinTone: 'Rich deep complexion with flawless matte finish',
      features: 'Dramatic high cheekbones, intense expressive eyes, bold presence'
    },
    styleContext: 'Avant-garde high fashion, experimental editorial, artistic statement pieces',
    culturalElements: ['Contemporary Indian art influence', 'Global runway aesthetic']
  },

  {
    id: 'sensual-sophisticated',
    name: 'Sensual Sophisticate',
    description: 'Refined model embodying confident sensuality with sophisticated high-fashion edge',
    physicalTraits: {
      height: '5\'8"',
      figure: 'Curvaceous hourglass form with commanding proportions',
      skinTone: 'Warm caramel to dusky tone with natural radiance',
      features: 'Captivating magnetic gaze, full expressive lips, sculpted features'
    },
    styleContext: 'High-fashion erotic art, luxury lingerie editorial, confident feminine power',
    culturalElements: ['Khajuraho artistic heritage', 'Modern cosmopolitan sensuality']
  },

  {
    id: 'editorial-chameleon',
    name: 'Editorial Chameleon',
    description: 'Versatile high-fashion model with adaptable presence and striking bone structure',
    physicalTraits: {
      height: '5\'9"',
      figure: 'Lean athletic build with model proportions',
      skinTone: 'Medium to dusky complexion with healthy glow',
      features: 'Versatile features, strong bone structure, transformative presence'
    },
    styleContext: 'Versatile editorial fashion, runway adaptability, commercial high-fashion',
    culturalElements: ['Pan-Indian aesthetic diversity', 'Global market versatility']
  },

  {
    id: 'art-house-icon',
    name: 'Art House Icon',
    description: 'Conceptual fashion model with unique beauty and artistic gravitas',
    physicalTraits: {
      height: '5\'8"',
      figure: 'Sculptural proportions with artistic presence',
      skinTone: 'Distinctive complexion ranging from fair to deep tones',
      features: 'Unconventional striking beauty, intense artistic presence, memorable bone structure'
    },
    styleContext: 'Fine-art fashion photography, gallery exhibition quality, conceptual editorial',
    culturalElements: ['Contemporary Indian art movements', 'Global art-fashion fusion']
  }
];

export function getModelArchetype(id: string): IndianModelArchetype | undefined {
  return INDIAN_MODEL_ARCHETYPES.find(archetype => archetype.id === id);
}

export function getAllModelArchetypes(): IndianModelArchetype[] {
  return INDIAN_MODEL_ARCHETYPES;
}

export function getModelArchetypesByStyle(masterStyle: string): IndianModelArchetype[] {
  // Map master styles to suitable archetypes
  const styleMapping: Record<string, string[]> = {
    newton: ['modern-power', 'bold-contemporary', 'sensual-sophisticated'],
    penn: ['ethereal-classic', 'editorial-chameleon', 'art-house-icon'],
    roversi: ['ethereal-classic', 'sensual-sophisticated', 'art-house-icon'],
    ritts: ['bold-contemporary', 'modern-power', 'editorial-chameleon']
  };

  const suitableIds = styleMapping[masterStyle] || [];
  return INDIAN_MODEL_ARCHETYPES.filter(a => suitableIds.includes(a.id));
}
