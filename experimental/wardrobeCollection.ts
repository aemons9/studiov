import type { VisualNode } from '../types';

/**
 * COMPREHENSIVE WARDROBE COLLECTION
 *
 * Categories:
 * 1. Professional Bold - Corporate power dressing with bold cuts
 * 2. Glamour Sexy - Classic pin-up, Hollywood glamour
 * 3. Artistic Architectural - Sculptural, geometric forms
 * 4. Erotic Luxury - High-fashion intimate garments
 * 5. Graphic Modern - Bold patterns, striking visuals
 * 6. Cultural Fusion - Indian traditional meets modern sensuality
 */

export const comprehensiveWardrobeNodes: VisualNode[] = [
  // PROFESSIONAL BOLD (Levels 4-9)
  {
    id: 'wardrobe-power-suit',
    category: 'wardrobe',
    name: 'Power Suit Unbuttoned',
    abbreviation: 'SUIT',
    icon: '👔',
    color: '#F472B6',
    shape: 'diamond',
    effects: {
      intimacy: [4, 7],
      seduction: [6, 9],
      professionalism: [4, 8],
      power: [8, 12],
      boundary: [4, 7],
    },
    description: 'Tailored power suit with strategic unbuttoning, corporate seduction'
  },
  {
    id: 'wardrobe-blazer-bodysuit',
    category: 'wardrobe',
    name: 'Blazer + Bodysuit',
    abbreviation: 'BLAZ',
    icon: '🎩',
    color: '#F472B6',
    shape: 'diamond',
    effects: {
      intimacy: [5, 8],
      seduction: [7, 10],
      professionalism: [5, 9],
      power: [7, 11],
      eroticism: [5, 9],
      boundary: [5, 8],
    },
    description: 'Sharp blazer over form-fitting architectural bodysuit'
  },
  {
    id: 'wardrobe-pencil-skirt',
    category: 'wardrobe',
    name: 'High-Slit Pencil Skirt',
    abbreviation: 'SKRT',
    icon: '👗',
    color: '#EC4899',
    shape: 'diamond',
    effects: {
      intimacy: [4, 7],
      seduction: [6, 10],
      professionalism: [4, 7],
      eroticism: [5, 8],
      boundary: [4, 7],
    },
    description: 'Elegant pencil skirt with dramatic thigh-high slit'
  },

  // GLAMOUR SEXY (Levels 6-12)
  {
    id: 'wardrobe-vintage-corset',
    category: 'wardrobe',
    name: 'Vintage Corset',
    abbreviation: 'CORS',
    icon: '🎀',
    color: '#EC4899',
    shape: 'diamond',
    effects: {
      intimacy: [7, 11],
      seduction: [8, 12],
      eroticism: [7, 11],
      professionalism: [7, 11],
      boundary: [7, 10],
    },
    description: 'Classic pin-up style structured corset with garter attachments'
  },
  {
    id: 'wardrobe-silk-slip',
    category: 'wardrobe',
    name: 'Silk Slip Dress',
    abbreviation: 'SLIP',
    icon: '💃',
    color: '#EC4899',
    shape: 'diamond',
    effects: {
      intimacy: [6, 10],
      seduction: [7, 11],
      eroticism: [6, 10],
      professionalism: [6, 10],
      boundary: [6, 9],
    },
    description: 'Luxurious silk slip with delicate lace trim, Hollywood glamour'
  },
  {
    id: 'wardrobe-fishnet-bodysuit',
    category: 'wardrobe',
    name: 'Fishnet Bodysuit',
    abbreviation: 'FISH',
    icon: '🕸️',
    color: '#DB2777',
    shape: 'diamond',
    effects: {
      intimacy: [8, 12],
      seduction: [9, 13],
      eroticism: [9, 13],
      professionalism: [8, 12],
      boundary: [8, 12],
    },
    description: 'Geometric fishnet bodysuit with strategic coverage'
  },

  // ARTISTIC ARCHITECTURAL (Levels 7-15)
  {
    id: 'wardrobe-geometric-harness',
    category: 'wardrobe',
    name: 'Geometric Harness',
    abbreviation: 'HARN',
    icon: '⚡',
    color: '#DB2777',
    shape: 'diamond',
    effects: {
      intimacy: [9, 13],
      seduction: [9, 13],
      eroticism: [9, 13],
      professionalism: [10, 14],
      abstraction: [10, 14],
      boundary: [9, 13],
    },
    description: 'Sculptural leather harness creating geometric patterns on form'
  },
  {
    id: 'wardrobe-architectural-bodice',
    category: 'wardrobe',
    name: 'Architectural Bodice',
    abbreviation: 'BODI',
    icon: '🏛️',
    color: '#DB2777',
    shape: 'diamond',
    effects: {
      intimacy: [8, 12],
      seduction: [8, 12],
      eroticism: [8, 12],
      professionalism: [10, 14],
      abstraction: [12, 16],
      boundary: [8, 12],
    },
    description: 'Avant-garde structured bodice with angular metalwork'
  },
  {
    id: 'wardrobe-chain-drape',
    category: 'wardrobe',
    name: 'Chain Drape System',
    abbreviation: 'CHAI',
    icon: '⛓️',
    color: '#BE185D',
    shape: 'diamond',
    effects: {
      intimacy: [10, 14],
      seduction: [10, 14],
      eroticism: [10, 14],
      professionalism: [11, 15],
      abstraction: [13, 17],
      boundary: [10, 14],
    },
    description: 'Delicate chain mail draping creating liquid metal effect'
  },

  // EROTIC LUXURY (Levels 10-18)
  {
    id: 'wardrobe-lace-teddy',
    category: 'wardrobe',
    name: 'Lace Teddy',
    abbreviation: 'TEDY',
    icon: '🌹',
    color: '#BE185D',
    shape: 'diamond',
    effects: {
      intimacy: [10, 14],
      seduction: [11, 15],
      eroticism: [11, 15],
      professionalism: [10, 14],
      boundary: [10, 14],
    },
    description: 'Intricate French lace teddy with strategic transparency'
  },
  {
    id: 'wardrobe-satin-robe',
    category: 'wardrobe',
    name: 'Open Satin Robe',
    abbreviation: 'ROBE',
    icon: '👘',
    color: '#BE185D',
    shape: 'diamond',
    effects: {
      intimacy: [11, 15],
      seduction: [12, 16],
      eroticism: [12, 16],
      professionalism: [11, 15],
      boundary: [11, 15],
    },
    description: 'Luxurious satin robe in partial state of undress'
  },
  {
    id: 'wardrobe-strappy-set',
    category: 'wardrobe',
    name: 'Strappy Leather Set',
    abbreviation: 'STRA',
    icon: '🔥',
    color: '#9F1239',
    shape: 'diamond',
    effects: {
      intimacy: [12, 16],
      seduction: [13, 17],
      eroticism: [13, 17],
      professionalism: [12, 16],
      power: [12, 16],
      boundary: [12, 16],
    },
    description: 'Multi-strap leather harness system with architectural precision'
  },

  // GRAPHIC MODERN (Levels 8-14)
  {
    id: 'wardrobe-cutout-bodysuit',
    category: 'wardrobe',
    name: 'Cutout Bodysuit',
    abbreviation: 'CUTO',
    icon: '✂️',
    color: '#EC4899',
    shape: 'diamond',
    effects: {
      intimacy: [9, 13],
      seduction: [10, 14],
      eroticism: [10, 14],
      professionalism: [9, 13],
      abstraction: [10, 14],
      boundary: [9, 13],
    },
    description: 'Bold geometric cutout bodysuit creating striking visual patterns'
  },
  {
    id: 'wardrobe-mesh-panel',
    category: 'wardrobe',
    name: 'Mesh Panel Dress',
    abbreviation: 'MESH',
    icon: '🕸️',
    color: '#EC4899',
    shape: 'diamond',
    effects: {
      intimacy: [8, 12],
      seduction: [9, 13],
      eroticism: [9, 13],
      professionalism: [8, 12],
      abstraction: [9, 13],
      boundary: [8, 12],
    },
    description: 'Strategic mesh panels creating reveal/conceal interplay'
  },
  {
    id: 'wardrobe-asymmetric-wrap',
    category: 'wardrobe',
    name: 'Asymmetric Wrap',
    abbreviation: 'ASYM',
    icon: '🎨',
    color: '#DB2777',
    shape: 'diamond',
    effects: {
      intimacy: [9, 13],
      seduction: [10, 14],
      eroticism: [9, 13],
      professionalism: [10, 14],
      abstraction: [11, 15],
      boundary: [9, 13],
    },
    description: 'Avant-garde asymmetric wrap creating dynamic diagonal lines'
  },

  // CULTURAL FUSION (Levels 6-16)
  {
    id: 'wardrobe-sari-drape',
    category: 'wardrobe',
    name: 'Sensual Sari Drape',
    abbreviation: 'SARI',
    icon: '🪷',
    color: '#F472B6',
    shape: 'diamond',
    effects: {
      intimacy: [7, 11],
      seduction: [8, 12],
      eroticism: [7, 11],
      professionalism: [8, 12],
      abstraction: [8, 12],
      boundary: [7, 11],
    },
    description: 'Traditional sari with modern sensual draping technique'
  },
  {
    id: 'wardrobe-lehenga-modern',
    category: 'wardrobe',
    name: 'Modern Lehenga',
    abbreviation: 'LEHE',
    icon: '👗',
    color: '#EC4899',
    shape: 'diamond',
    effects: {
      intimacy: [6, 10],
      seduction: [7, 11],
      eroticism: [6, 10],
      professionalism: [7, 11],
      abstraction: [7, 11],
      boundary: [6, 10],
    },
    description: 'Contemporary lehenga with bold cutouts and modern silhouette'
  },
  {
    id: 'wardrobe-choli-minimal',
    category: 'wardrobe',
    name: 'Minimal Choli',
    abbreviation: 'CHOL',
    icon: '✨',
    color: '#DB2777',
    shape: 'diamond',
    effects: {
      intimacy: [8, 12],
      seduction: [9, 13],
      eroticism: [9, 13],
      professionalism: [8, 12],
      boundary: [8, 12],
    },
    description: 'Minimalist choli blouse with architectural structure'
  },
  {
    id: 'wardrobe-temple-jewelry',
    category: 'wardrobe',
    name: 'Temple Jewelry Only',
    abbreviation: 'TEMP',
    icon: '💎',
    color: '#BE185D',
    shape: 'diamond',
    effects: {
      intimacy: [12, 16],
      seduction: [13, 17],
      eroticism: [13, 17],
      professionalism: [14, 18],
      abstraction: [14, 18],
      boundary: [12, 16],
    },
    description: 'Traditional temple jewelry as primary wardrobe, sacred art tradition'
  },

  // MAXIMUM ARTISTIC (Levels 13-20)
  {
    id: 'wardrobe-body-paint',
    category: 'wardrobe',
    name: 'Artistic Body Paint',
    abbreviation: 'PAIN',
    icon: '🎨',
    color: '#9F1239',
    shape: 'diamond',
    effects: {
      intimacy: [14, 18],
      seduction: [14, 18],
      eroticism: [14, 18],
      professionalism: [16, 20],
      abstraction: [16, 20],
      boundary: [14, 18],
    },
    description: 'Intricate body painting as wardrobe, fine art tradition'
  },
  {
    id: 'wardrobe-fabric-sculpture',
    category: 'wardrobe',
    name: 'Fabric Sculpture',
    abbreviation: 'SCUL',
    icon: '🗿',
    color: '#9F1239',
    shape: 'diamond',
    effects: {
      intimacy: [13, 17],
      seduction: [13, 17],
      eroticism: [13, 17],
      professionalism: [15, 19],
      abstraction: [17, 21],
      boundary: [13, 17],
    },
    description: 'Avant-garde fabric manipulation creating sculptural forms'
  },
  {
    id: 'wardrobe-light-shadow',
    category: 'wardrobe',
    name: 'Light & Shadow Only',
    abbreviation: 'LGHT',
    icon: '🌓',
    color: '#881337',
    shape: 'diamond',
    effects: {
      intimacy: [16, 20],
      seduction: [15, 19],
      eroticism: [15, 19],
      professionalism: [18, 22],
      abstraction: [20, 24],
      boundary: [16, 20],
    },
    description: 'Strategic lighting and shadow as sole coverage, pure abstraction'
  },
];

export default comprehensiveWardrobeNodes;
