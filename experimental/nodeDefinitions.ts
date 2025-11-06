import type { VisualNode } from '../types';
import comprehensiveWardrobeNodes from './wardrobeCollection';
import seductressConceptNodes from './seductressConceptNodes';

/**
 * Visual Node Definitions for Experimental Mode
 *
 * Color Scheme:
 * - Purple/Violet (#9333EA): Subject nodes
 * - Pink/Rose (#EC4899): Wardrobe nodes
 * - Red/Crimson (#DC2626): Pose nodes
 * - Green/Teal (#10B981): Environment nodes
 * - Yellow/Gold (#F59E0B): Lighting nodes
 * - Blue/Cyan (#3B82F6): Camera nodes
 * - Orange/Amber (#F97316): Weaving nodes
 * - Magenta/Fuchsia (#D946EF): Style nodes
 */

// ===========================================================================
// SUBJECT NODES (Purple/Violet, Circle)
// ===========================================================================

export const subjectNodes: VisualNode[] = [
  {
    id: 'subject-indian-fair',
    category: 'subject',
    name: 'Indian Model (Fair)',
    abbreviation: 'IM-F',
    icon: '👤',
    color: '#9333EA',
    shape: 'circle',
    effects: {
      intimacy: [1, 6],
      professionalism: [1, 6],
    },
    description: 'Professional Indian model with fair skin tone for fashion/editorial work'
  },
  {
    id: 'subject-indian-dusky',
    category: 'subject',
    name: 'Indian Model (Dusky)',
    abbreviation: 'IM-D',
    icon: '👤',
    color: '#7C3AED',
    shape: 'circle',
    effects: {
      intimacy: [1, 6],
      professionalism: [1, 6],
    },
    description: 'Professional Indian model with dusky skin tone for fashion/editorial work'
  },
  {
    id: 'subject-seductress',
    category: 'subject',
    name: 'Indian Seductress (Bombshell)',
    abbreviation: 'SEDU',
    icon: '💃',
    color: '#8B5CF6',
    shape: 'circle',
    effects: {
      intimacy: [6, 12],
      seduction: [6, 12],
      eroticism: [4, 10],
      professionalism: [4, 12],
    },
    description: 'Bombshell hourglass figure, confident sensual presence, boudoir specialist'
  },
  {
    id: 'subject-super-seductress',
    category: 'subject',
    name: 'Super-Seductress Artist',
    abbreviation: 'S-SED',
    icon: '✨',
    color: '#A855F7',
    shape: 'circle',
    effects: {
      intimacy: [10, 18],
      seduction: [10, 18],
      eroticism: [8, 16],
      professionalism: [10, 20],
      power: [10, 25],
    },
    description: 'Elite artistic model with bi-polar range from corporate power to vulnerable erotic-muse'
  },
];

// ===========================================================================
// WARDROBE NODES (Pink/Rose, Diamond)
// ===========================================================================

export const wardrobeNodes: VisualNode[] = [
  {
    id: 'wardrobe-substantial',
    category: 'wardrobe',
    name: 'Substantial Luxury',
    abbreviation: 'SUBS',
    icon: '👗',
    color: '#F472B6',
    shape: 'diamond',
    effects: {
      intimacy: [1, 6],
      eroticism: [1, 6],
      professionalism: [1, 6],
      boundary: [1, 5],
    },
    description: 'Full coverage luxury garments, elegant and sophisticated'
  },
  {
    id: 'wardrobe-moderate',
    category: 'wardrobe',
    name: 'Moderate Elegant',
    abbreviation: 'MODE',
    icon: '👚',
    color: '#EC4899',
    shape: 'diamond',
    effects: {
      intimacy: [4, 9],
      eroticism: [4, 9],
      professionalism: [4, 10],
      boundary: [4, 9],
    },
    description: 'Tasteful partial coverage, editorial sophistication'
  },
  {
    id: 'wardrobe-high-artistic',
    category: 'wardrobe',
    name: 'High Artistic',
    abbreviation: 'HIGH',
    icon: '💫',
    color: '#DB2777',
    shape: 'diamond',
    effects: {
      intimacy: [7, 12],
      eroticism: [7, 12],
      professionalism: [7, 15],
      boundary: [7, 12],
    },
    description: 'Architectural foundation garments, sculptural forms'
  },
  {
    id: 'wardrobe-maximum-artistic',
    category: 'wardrobe',
    name: 'Maximum Artistic',
    abbreviation: 'MAXI',
    icon: '🔥',
    color: '#BE185D',
    shape: 'diamond',
    effects: {
      intimacy: [10, 15],
      eroticism: [10, 15],
      professionalism: [10, 20],
      boundary: [10, 15],
    },
    description: 'Minimal coverage, maximum artistic expression'
  },
];

// ===========================================================================
// POSE NODES (Red/Crimson, Hexagon)
// ===========================================================================

export const poseNodes: VisualNode[] = [
  {
    id: 'pose-power-stance',
    category: 'pose',
    name: 'Power Stance',
    abbreviation: 'POWR',
    icon: '⚡',
    color: '#EF4444',
    shape: 'hexagon',
    effects: {
      power: [1, 5],
      seduction: [1, 5],
      professionalism: [1, 6],
    },
    description: 'Commanding, authoritative posture, corporate confidence'
  },
  {
    id: 'pose-confident-allure',
    category: 'pose',
    name: 'Confident Allure',
    abbreviation: 'ALUR',
    icon: '💫',
    color: '#DC2626',
    shape: 'hexagon',
    effects: {
      power: [6, 10],
      seduction: [6, 10],
      eroticism: [4, 8],
      professionalism: [4, 10],
    },
    description: 'Magnetic presence, intentional body language, editorial elegance'
  },
  {
    id: 'pose-seductive-invitation',
    category: 'pose',
    name: 'Seductive Invitation',
    abbreviation: 'INVI',
    icon: '🌙',
    color: '#B91C1C',
    shape: 'hexagon',
    effects: {
      power: [10, 15],
      seduction: [10, 15],
      eroticism: [10, 15],
      intimacy: [8, 14],
      boundary: [8, 14],
    },
    description: 'Inviting, provocative, crossing thresholds with confidence'
  },
  {
    id: 'pose-passionate-expression',
    category: 'pose',
    name: 'Passionate Expression',
    abbreviation: 'PASS',
    icon: '🔥',
    color: '#991B1B',
    shape: 'hexagon',
    effects: {
      power: [15, 20],
      seduction: [15, 20],
      eroticism: [15, 20],
      intimacy: [12, 18],
      boundary: [12, 18],
    },
    description: 'Bold, fearless, uninhibited expression of desire'
  },
  {
    id: 'pose-sacred-positioning',
    category: 'pose',
    name: 'Sacred Positioning',
    abbreviation: 'SACR',
    icon: '🕉️',
    color: '#7F1D1D',
    shape: 'hexagon',
    effects: {
      power: [20, 25],
      seduction: [20, 25],
      eroticism: [19, 25],
      intimacy: [19, 25],
      boundary: [19, 25],
      abstraction: [15, 25],
    },
    description: 'Temple art tradition, Kamasutra-inspired, divine sensuality'
  },
];

// ===========================================================================
// ENVIRONMENT NODES (Green/Teal, Square)
// ===========================================================================

export const environmentNodes: VisualNode[] = [
  {
    id: 'env-corporate',
    category: 'environment',
    name: 'Corporate Office',
    abbreviation: 'CORP',
    icon: '🏢',
    color: '#10B981',
    shape: 'square',
    effects: {
      professionalism: [1, 3],
      boundary: [1, 3],
      intimacy: [1, 4],
    },
    description: 'Professional office setting, boardrooms, corporate power'
  },
  {
    id: 'env-fashion-studio',
    category: 'environment',
    name: 'Fashion Studio',
    abbreviation: 'STUD',
    icon: '📸',
    color: '#059669',
    shape: 'square',
    effects: {
      professionalism: [4, 6],
      boundary: [1, 6],
      intimacy: [4, 8],
    },
    description: 'Professional photography studio, editorial shoots'
  },
  {
    id: 'env-private-loft',
    category: 'environment',
    name: 'Private Loft',
    abbreviation: 'LOFT',
    icon: '🏠',
    color: '#14B8A6',
    shape: 'square',
    effects: {
      professionalism: [7, 12],
      boundary: [7, 12],
      intimacy: [8, 14],
      eroticism: [6, 12],
    },
    description: 'Intimate loft space, artistic environment, personal collection'
  },
  {
    id: 'env-boudoir',
    category: 'environment',
    name: 'Bedroom/Boudoir',
    abbreviation: 'BOUD',
    icon: '🛏️',
    color: '#0D9488',
    shape: 'square',
    effects: {
      professionalism: [10, 15],
      boundary: [10, 15],
      intimacy: [12, 18],
      eroticism: [10, 16],
      seduction: [10, 16],
    },
    description: 'Private bedroom setting, intimate boudoir photography'
  },
  {
    id: 'env-sacred-space',
    category: 'environment',
    name: 'Sacred Space',
    abbreviation: 'TEMP',
    icon: '🕉️',
    color: '#0F766E',
    shape: 'square',
    effects: {
      professionalism: [16, 21],
      boundary: [16, 21],
      intimacy: [16, 22],
      eroticism: [16, 22],
      abstraction: [14, 22],
    },
    description: 'Temple-inspired environment, classical art tradition'
  },
  {
    id: 'env-private-sanctuary',
    category: 'environment',
    name: 'Private Sanctuary',
    abbreviation: 'SANC',
    icon: '🌟',
    color: '#115E59',
    shape: 'square',
    effects: {
      professionalism: [19, 25],
      boundary: [19, 25],
      intimacy: [19, 25],
      eroticism: [19, 25],
      abstraction: [16, 25],
    },
    description: 'Ultimate private space, sacred artistic freedom'
  },
];

// ===========================================================================
// LIGHTING NODES (Yellow/Gold, Triangle)
// ===========================================================================

export const lightingNodes: VisualNode[] = [
  {
    id: 'light-corporate',
    category: 'lighting',
    name: 'Corporate Bright',
    abbreviation: 'BRIT',
    icon: '☀️',
    color: '#FBBF24',
    shape: 'triangle',
    effects: {
      intimacy: [1, 3],
      abstraction: [1, 3],
    },
    description: 'Bright, even lighting, professional and clear'
  },
  {
    id: 'light-studio-soft',
    category: 'lighting',
    name: 'Studio Soft',
    abbreviation: 'SOFT',
    icon: '💡',
    color: '#F59E0B',
    shape: 'triangle',
    effects: {
      intimacy: [4, 6],
      abstraction: [4, 6],
    },
    description: 'Soft studio lighting, flattering and elegant'
  },
  {
    id: 'light-editorial',
    category: 'lighting',
    name: 'Editorial Dramatic',
    abbreviation: 'DRAM',
    icon: '✨',
    color: '#D97706',
    shape: 'triangle',
    effects: {
      intimacy: [7, 9],
      abstraction: [7, 9],
      seduction: [6, 10],
    },
    description: 'Dramatic editorial lighting, high-fashion contrast'
  },
  {
    id: 'light-chiaroscuro',
    category: 'lighting',
    name: 'Chiaroscuro Bold',
    abbreviation: 'CHIA',
    icon: '🌓',
    color: '#B45309',
    shape: 'triangle',
    effects: {
      intimacy: [10, 15],
      abstraction: [10, 15],
      seduction: [10, 15],
      eroticism: [8, 14],
    },
    description: 'Bold light/shadow contrast, sculptural form'
  },
  {
    id: 'light-shadow-play',
    category: 'lighting',
    name: 'Shadow Play',
    abbreviation: 'SHAD',
    icon: '🌑',
    color: '#92400E',
    shape: 'triangle',
    effects: {
      intimacy: [16, 20],
      abstraction: [16, 20],
      seduction: [14, 20],
      eroticism: [14, 20],
    },
    description: 'Shadow-dominant lighting, abstract and mysterious'
  },
  {
    id: 'light-sacred',
    category: 'lighting',
    name: 'Sacred Light',
    abbreviation: 'SACR',
    icon: '✨',
    color: '#78350F',
    shape: 'triangle',
    effects: {
      intimacy: [21, 25],
      abstraction: [21, 25],
      seduction: [19, 25],
      eroticism: [19, 25],
    },
    description: 'Ethereal sacred lighting, transcendent quality'
  },
];

// ===========================================================================
// CAMERA NODES (Blue/Cyan, Octagon)
// ===========================================================================

export const cameraNodes: VisualNode[] = [
  {
    id: 'camera-full-body',
    category: 'camera',
    name: 'Full Body Distance',
    abbreviation: 'FULL',
    icon: '📷',
    color: '#3B82F6',
    shape: 'octagon',
    effects: {
      intimacy: [1, 3],
    },
    description: 'Full body shot, formal distance, professional framing'
  },
  {
    id: 'camera-medium',
    category: 'camera',
    name: 'Medium Shot',
    abbreviation: 'MEDI',
    icon: '📸',
    color: '#2563EB',
    shape: 'octagon',
    effects: {
      intimacy: [4, 6],
    },
    description: 'Medium shot, editorial framing, balanced composition'
  },
  {
    id: 'camera-close',
    category: 'camera',
    name: 'Close Portrait',
    abbreviation: 'CLOS',
    icon: '🔍',
    color: '#1D4ED8',
    shape: 'octagon',
    effects: {
      intimacy: [7, 9],
    },
    description: 'Close portrait, emotional connection, facial details'
  },
  {
    id: 'camera-intimate',
    category: 'camera',
    name: 'Intimate Close-up',
    abbreviation: 'INTI',
    icon: '👁️',
    color: '#1E40AF',
    shape: 'octagon',
    effects: {
      intimacy: [10, 15],
    },
    description: 'Intimate close-up, personal connection, detailed study'
  },
  {
    id: 'camera-macro',
    category: 'camera',
    name: 'Macro Detail',
    abbreviation: 'MACR',
    icon: '🔬',
    color: '#1E3A8A',
    shape: 'octagon',
    effects: {
      intimacy: [16, 20],
      abstraction: [12, 18],
    },
    description: 'Macro details, micro-texture, hyper-realistic study'
  },
  {
    id: 'camera-abstract',
    category: 'camera',
    name: 'Abstract Form',
    abbreviation: 'ABST',
    color: '#172554',
    shape: 'octagon',
    icon: '🎨',
    effects: {
      intimacy: [21, 25],
      abstraction: [20, 25],
    },
    description: 'Abstract framing, form as landscape, sculptural'
  },
];

// ===========================================================================
// WEAVING MODE NODES (Orange/Amber, Pentagon)
// ===========================================================================

export const weavingNodes: VisualNode[] = [
  {
    id: 'weave-master',
    category: 'weaving',
    name: 'Master Weave',
    abbreviation: 'MAST',
    icon: '🎯',
    color: '#F97316',
    shape: 'pentagon',
    effects: {
      // Balanced, no modifiers
    },
    description: 'Original master weaver, balanced and efficient'
  },
  {
    id: 'weave-passion',
    category: 'weaving',
    name: 'PassionWeave',
    abbreviation: 'PASS',
    icon: '💖',
    color: '#EA580C',
    shape: 'pentagon',
    effects: {
      seduction: [5, 10], // +5 boost
      power: [3, 8],
    },
    description: 'Subject magnetism primary, emotional power focus'
  },
  {
    id: 'weave-intimate',
    category: 'weaving',
    name: 'IntimateWeave',
    abbreviation: 'INTI',
    icon: '🤝',
    color: '#C2410C',
    shape: 'pentagon',
    effects: {
      intimacy: [5, 10], // +5 boost
      abstraction: [3, 8],
    },
    description: 'Material physics primary, tactile details focus'
  },
  {
    id: 'weave-seductive',
    category: 'weaving',
    name: 'SeductiveWeave',
    abbreviation: 'SEDU',
    icon: '🔥',
    color: '#9A3412',
    shape: 'pentagon',
    effects: {
      seduction: [8, 15], // +8 boost
      eroticism: [8, 15], // +8 boost
      boundary: [5, 12], // +5 boost
      intimacy: [5, 12],
    },
    description: 'Cinematic seduction narrative, Tinto Brass + Indian traditions (PREMIUM)'
  },
];

// ===========================================================================
// STYLE NODES (Magenta/Fuchsia, Star)
// ===========================================================================

export const styleNodes: VisualNode[] = [
  {
    id: 'style-corporate',
    category: 'style',
    name: 'Corporate Clean',
    abbreviation: 'CORP',
    icon: '💼',
    color: '#E879F9',
    shape: 'star',
    effects: {
      professionalism: [1, 3],
      boundary: [1, 3],
    },
    description: 'Corporate photography style, professional and polished'
  },
  {
    id: 'style-editorial',
    category: 'style',
    name: 'High Fashion Editorial',
    abbreviation: 'EDIT',
    icon: '👠',
    color: '#D946EF',
    shape: 'star',
    effects: {
      professionalism: [4, 6],
      boundary: [4, 6],
      abstraction: [4, 8],
    },
    description: 'Vogue/Harper\'s Bazaar high-fashion editorial style'
  },
  {
    id: 'style-newton',
    category: 'style',
    name: 'Helmut Newton Bold',
    abbreviation: 'NEWT',
    icon: '⚡',
    color: '#C026D3',
    shape: 'star',
    effects: {
      seduction: [10, 15],
      eroticism: [10, 15],
      power: [10, 15],
      professionalism: [10, 15],
    },
    description: 'Helmut Newton style, bold high-fashion erotic art'
  },
  {
    id: 'style-brass',
    category: 'style',
    name: 'Tinto Brass Cinematic',
    abbreviation: 'TINT',
    icon: '🎬',
    color: '#A21CAF',
    shape: 'star',
    effects: {
      seduction: [16, 20],
      eroticism: [16, 20],
      boundary: [14, 20],
      professionalism: [14, 20],
    },
    description: 'Tinto Brass cinematic eroticism, Italian art-house tradition'
  },
  {
    id: 'style-khajuraho',
    category: 'style',
    name: 'Khajuraho Sacred',
    abbreviation: 'KHAJ',
    icon: '🕉️',
    color: '#86198F',
    shape: 'star',
    effects: {
      eroticism: [19, 25],
      boundary: [19, 25],
      abstraction: [16, 24],
      professionalism: [19, 25],
    },
    description: 'Temple art tradition, Khajuraho sculptures, sacred eroticism'
  },
  {
    id: 'style-fine-art',
    category: 'style',
    name: 'Pure Fine Art',
    abbreviation: 'FINE',
    icon: '🎨',
    color: '#701A75',
    shape: 'star',
    effects: {
      abstraction: [20, 25],
      professionalism: [20, 25],
    },
    description: 'Pure fine art photography, museum-worthy masterwork'
  },
];

// ===========================================================================
// COMBINED EXPORTS
// ===========================================================================

// Combine basic wardrobe with comprehensive collection
const allWardrobeNodes = [...wardrobeNodes, ...comprehensiveWardrobeNodes];

export const allNodes: VisualNode[] = [
  ...seductressConceptNodes, // Concepts first for priority
  ...subjectNodes,
  ...allWardrobeNodes,
  ...poseNodes,
  ...environmentNodes,
  ...lightingNodes,
  ...cameraNodes,
  ...weavingNodes,
  ...styleNodes,
];

export const nodesByCategory = {
  concept: seductressConceptNodes,
  subject: subjectNodes,
  wardrobe: allWardrobeNodes,
  pose: poseNodes,
  environment: environmentNodes,
  lighting: lightingNodes,
  camera: cameraNodes,
  weaving: weavingNodes,
  style: styleNodes,
};

export function getNodeById(id: string): VisualNode | undefined {
  return allNodes.find(node => node.id === id);
}

export function getNodesByCategory(category: NodeCategory): VisualNode[] {
  return allNodes.filter(node => node.category === category);
}
