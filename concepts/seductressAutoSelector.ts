/**
 * SEDUCTRESS AUTO-SELECTOR SYSTEM
 *
 * A sophisticated auto-selector system for the Indian Glamour Seductress model
 * in Executive Noir office environments. This system automatically coordinates
 * wardrobe, nail art, poses, lighting, camera settings, and photographer styles
 * across 7 progressive intimacy levels.
 *
 * Inspired by: Helmut Newton, Irving Penn, Herb Ritts, Peter Lindbergh
 * Aesthetic: High fashion editorial, neo-noir sensuality, architectural form
 */

import type { PromptData } from '../types';
import { seductressPresets } from './seductressPresets';

export interface IntimacyLevel {
  level: number;
  name: string;
  intimacyScore: number;
  description: string;
  wardrobe: WardrobeComposition;
  nailArt: NailArtSpec;
  pose: PoseSpec;
  lighting: LightingSpec;
  camera: CameraSpec;
  photographerStyle: string;
  colorGrade: string;
  figureAndForm: string;
}

interface WardrobeComposition {
  primary: string;
  details: string;
  materials: string[];
  coverage: 'Full' | 'Moderate' | 'Minimal';
  style: string;
}

interface NailArtSpec {
  color: string;
  style: string;
  finish: string;
}

interface PoseSpec {
  category: string;
  description: string;
  mood: string;
}

interface LightingSpec {
  setup: string;
  mood: string;
  technique: string;
}

interface CameraSpec {
  focalLength: string;
  aperture: string;
  distance: string;
  angle: string;
  framing: string;
}

/**
 * 7-LEVEL INTIMACY PROGRESSION MATRIX
 * Ranging from professional elegance to pure artistic expression
 */
export const intimacyLevels: IntimacyLevel[] = [
  // LEVEL 1: Professional Elegance (Intimacy 4-5)
  {
    level: 1,
    name: 'Professional Elegance',
    intimacyScore: 5,
    description: 'Commanding executive presence with structured, high-fashion foundation garments',
    wardrobe: {
      primary: 'A structured, architectural longline bodice in matte black with seamless construction, paired with high-waisted foundation garment that creates a flawless executive silhouette.',
      details: 'Structured seams, boning-inspired details, and architectural lines. Topped with a perfectly tailored transparent black mesh blazer with sharp shoulders.',
      materials: ['Matte architectural fabric', 'Seamless mesh', 'Structured panels'],
      coverage: 'Moderate',
      style: 'Executive Editorial'
    },
    nailArt: {
      color: 'Deep burgundy',
      style: 'Impeccably manicured, squared tips',
      finish: 'High-gloss executive finish'
    },
    pose: {
      category: 'Power Stance',
      description: 'Standing confidently with hands on hips, exuding corporate power. Direct eye contact with camera, commanding presence with strong posture.',
      mood: 'Dominant, Professional, Powerful'
    },
    lighting: {
      setup: 'Clean key light with subtle fill',
      mood: 'Professional glamour with depth',
      technique: 'Three-point lighting modified for executive drama'
    },
    camera: {
      focalLength: '85mm f/1.8 Portrait',
      aperture: 'f/2.8',
      distance: '2.5 meters',
      angle: 'Eye level to slightly low angle',
      framing: 'Medium shot from waist up'
    },
    photographerStyle: 'Helmut Newton\'s powerful women series - commanding presence, architectural form, corporate glamour',
    colorGrade: 'Cool professional with deep blacks and crisp highlights',
    figureAndForm: 'The structured garments sculpt a powerful hourglass silhouette, emphasizing executive authority and feminine power through architectural foundation.'
  },

  // LEVEL 2: Sophisticated Allure (Intimacy 5-6)
  {
    level: 2,
    name: 'Sophisticated Allure',
    intimacyScore: 6,
    description: 'Haute couture intimates with designer details and moderate artistic coverage',
    wardrobe: {
      primary: 'A designer couture intimate collection in black silk and delicate lace, featuring intricate patterns and architectural seams. Includes a couture upper piece with unique strap configuration and high-waisted foundation.',
      details: 'Fine lace appliqués, silk ribbons, pearl-tipped closures. Layered with a sheer black organza oversized blazer that flows to mid-thigh.',
      materials: ['Chantilly lace', 'Liquid silk', 'Sheer organza'],
      coverage: 'Moderate',
      style: 'Haute Couture Intimate'
    },
    nailArt: {
      color: 'Black with subtle gold leaf accent on ring finger',
      style: 'Almond-shaped, elegant length',
      finish: 'Semi-matte with metallic details'
    },
    pose: {
      category: 'Sophisticated Recline',
      description: 'Reclining on the executive desk with one arm draped gracefully, head tilted with an over-the-shoulder glance. Subtle arch in the back, creating elegant curves.',
      mood: 'Alluring, Sophisticated, Magnetic'
    },
    lighting: {
      setup: 'Soft key with dramatic rim light',
      mood: 'Glamorous chiaroscuro',
      technique: 'Rembrandt-inspired lighting with modern softness'
    },
    camera: {
      focalLength: '85mm f/1.4 Portrait',
      aperture: 'f/2.0',
      distance: '2 meters',
      angle: 'Low angle looking up',
      framing: 'Medium-close from hips up'
    },
    photographerStyle: 'Irving Penn\'s studio elegance - refined composition, elegant negative space, luxurious simplicity',
    colorGrade: 'Rich blacks with warm skin tones, subtle desaturation for timeless elegance',
    figureAndForm: 'The haute couture garments and lace reveal an elegant hourglass silhouette, with the architectural foundation sculpting refined curves through artistic light and shadow.'
  },

  // LEVEL 3: Editorial Sensuality (Intimacy 6-7)
  {
    level: 3,
    name: 'Editorial Sensuality',
    intimacyScore: 7,
    description: 'Graphic editorial pieces with sheer mesh, architectural lines, and bold compositions',
    wardrobe: {
      primary: 'A sheer lace V-neck bodysuit with daringly deep, architecturally sharp neckline in black gossamer lace. The intricate net patterns create a graphic second skin effect.',
      details: 'Geometric cutouts, architectural seaming, and mesh panels that play with opacity. Paired with a completely transparent formal blazer in structured organza with sharp lapels.',
      materials: ['Gossamer mesh', 'Structured lace', 'Transparent organza'],
      coverage: 'Moderate',
      style: 'Editorial Fashion'
    },
    nailArt: {
      color: 'Deep crimson red',
      style: 'Stiletto-shaped, bold length',
      finish: 'High-gloss mirror finish'
    },
    pose: {
      category: 'Neo-Noir Drama',
      description: 'Seated on executive chair, leaning back with arms gripping the chair arms. Back arched, creating dramatic S-curve. Intense, smoldering gaze.',
      mood: 'Seductive, Dramatic, Editorial'
    },
    lighting: {
      setup: 'Single powerful key light with deep shadows',
      mood: 'Cinematic neo-noir',
      technique: 'Film noir single-source with venetian blind patterns'
    },
    camera: {
      focalLength: '85mm f/1.4 Portrait',
      aperture: 'f/1.8',
      distance: '2.5 meters',
      angle: 'Low angle emphasizing power',
      framing: 'Full torso shot, thighs to head'
    },
    photographerStyle: 'Helmut Newton\'s neo-noir sensuality - dramatic shadows, powerful compositions, editorial boldness',
    colorGrade: 'Cool cinematic with crushed blacks and desaturated tones, selective color on red accents',
    figureAndForm: 'The sheer bodysuit and transparent blazer create graphic lines against the form, with mesh patterns casting intricate shadows that sculpt the hourglass silhouette through negative space.'
  },

  // LEVEL 4: Intimate Artistry (Intimacy 7-8)
  {
    level: 4,
    name: 'Intimate Artistry',
    intimacyScore: 8,
    description: 'High-fashion artistic bodysuits with transparent elements and conceptual design',
    wardrobe: {
      primary: 'A geometric strap bodysuit in matte black, featuring interconnected architectural straps that create a cage-like framework of negative space. The straps sculpt the form while revealing through calculated cutouts.',
      details: 'Minimalist hardware, strategic strap placement creating graphic lines. Layered with a transparent mesh blazer with only the seams remaining opaque, creating a wireframe effect.',
      materials: ['Architectural elastic straps', 'Invisible mesh', 'Matte hardware'],
      coverage: 'Minimal',
      style: 'Avant-Garde Editorial'
    },
    nailArt: {
      color: 'Matte black with glossy black tips (reverse French)',
      style: 'Long coffin shape, editorial length',
      finish: 'Matte/gloss contrast'
    },
    pose: {
      category: 'Desk Dominance',
      description: 'Lying across the executive desk at night, propped on elbows, back arched dramatically. One hand elegantly positioned, creating sculptural lines.',
      mood: 'Sensual, Artistic, Intimate'
    },
    lighting: {
      setup: 'Moody desk lamp as sole light source',
      mood: 'Intimate and cinematic',
      technique: 'Single bedside lamp technique creating soft-edged shadows'
    },
    camera: {
      focalLength: '50mm f/1.4 Standard',
      aperture: 'f/1.6',
      distance: '1.5 meters',
      angle: 'Slightly overhead, looking down at the reclining pose',
      framing: 'Full reclining composition showing the desk scene'
    },
    photographerStyle: 'Herb Ritts\' sculptural form studies - geometric composition, body as architecture, intimate minimalism',
    colorGrade: 'Warm cinematic with glowing highlights and rich shadows, emphasizing skin luminosity',
    figureAndForm: 'The geometric straps create a powerful sculptural framework, the negative space between straps revealing the natural hourglass form like a fine art study of light, line, and curve.'
  },

  // LEVEL 5: High Concept Seduction (Intimacy 8-9)
  {
    level: 5,
    name: 'High Concept Seduction',
    intimacyScore: 9,
    description: 'Minimalist architectural pieces with maximum artistic expression and intimate framing',
    wardrobe: {
      primary: 'A minimalist foundation piece consisting of interconnected straps and a structural wireframe design. An open framework bodice featuring architectural underwire but composed mostly of open space, creating graphic outlines.',
      details: 'Strategic single-line straps, T-strap minimal design, and delicate chain details. The emphasis is on line, form, and negative space rather than coverage.',
      materials: ['Minimal elastic straps', 'Architectural wire framework', 'Delicate body chains'],
      coverage: 'Minimal',
      style: 'High Concept Fine Art'
    },
    nailArt: {
      color: 'Nude with gold foil geometric accent on accent nail',
      style: 'Medium stiletto, refined and artistic',
      finish: 'Natural with metallic art details'
    },
    pose: {
      category: 'Artistic Sculpture',
      description: 'Kneeling on the office floor, back dramatically arched creating an S-curve. Arms positioned to create additional lines and negative space. Dancer-inspired flexibility and grace.',
      mood: 'Seductive, Sculptural, High Art'
    },
    lighting: {
      setup: 'Venetian blind stripes or single dramatic side light',
      mood: 'Dramatic shadow play',
      technique: 'Chiaroscuro with harsh light creating stripe patterns across form'
    },
    camera: {
      focalLength: '85mm f/1.4 Portrait',
      aperture: 'f/1.4',
      distance: '1.2 meters',
      angle: 'Varied - low, high, and dutch angles for drama',
      framing: 'Intimate close-ups and artistic full-body'
    },
    photographerStyle: 'Peter Lindbergh\'s raw intimacy - unguarded moments, powerful simplicity, emotional connection',
    colorGrade: 'High contrast black and white aesthetic or heavily desaturated with only skin warmth remaining',
    figureAndForm: 'The minimal straps and open framework create pure graphic lines against the form, allowing light and shadow to sculpt the hourglass silhouette in a study of form, line, and negative space.'
  },

  // LEVEL 6: Maximum Expression (Intimacy 9-10)
  {
    level: 6,
    name: 'Maximum Expression',
    intimacyScore: 10,
    description: 'Ultra-minimal foundation pieces and body adornments for fine art nude aesthetic',
    wardrobe: {
      primary: 'Delicate metallic body chains that drape over shoulders, torso, and hips, serving as jewelry-like minimal adornment. An absolute minimalist T-strap foundation piece consisting of a mere triangle of black silk.',
      details: 'String-like connections, pearl-tipped closures, and strategic draping of fine metal chains that catch light. The wardrobe is conceptual - creating graphic lines through minimal material.',
      materials: ['Fine metal body chains', 'Silk triangles', 'Pearls and minimal hardware'],
      coverage: 'Minimal',
      style: 'Fine Art Nude'
    },
    nailArt: {
      color: 'Natural nude or soft pink',
      style: 'Short to medium almond, naturally elegant',
      finish: 'Soft shine, almost natural'
    },
    pose: {
      category: 'Classical Fine Art',
      description: 'Reclining in a classical odalisque pose inspired by fine art painting masters. The body creates elegant, flowing lines with natural curves emphasized by the positioning. One arm may be extended or resting gracefully, creating a sculptural composition.',
      mood: 'Artistic, Timeless, Museum Quality'
    },
    lighting: {
      setup: 'Soft window light or firelight glow',
      mood: 'Natural and painterly',
      technique: 'Vermeer-style window light or Rembrandt firelight with natural falloff'
    },
    camera: {
      focalLength: '85mm f/1.2 Portrait or 135mm f/2',
      aperture: 'f/1.2 to f/1.8',
      distance: '1 to 2 meters',
      angle: 'Natural, slightly elevated for classical composition',
      framing: 'Full artistic compositions and intimate details'
    },
    photographerStyle: 'Combination of Helmut Newton\'s bold confidence and Jock Sturges\' natural light intimacy - fine art nude aesthetic with museum-quality composition',
    colorGrade: 'Warm natural tones or cool silver gelatin print aesthetic, rich shadows and glowing highlights',
    figureAndForm: 'The body chains create delicate lines across the form while the minimal foundation provides the barest suggestion of structure, allowing the natural hourglass silhouette to be sculpted purely by light and shadow in classical fine art tradition.'
  },

  // LEVEL 7: Pure Artistry (Intimacy 10)
  {
    level: 7,
    name: 'Pure Artistry',
    intimacyScore: 10,
    description: 'Conceptual art wardrobe using shadow, light, and artistic elements for ultimate artistic expression',
    wardrobe: {
      primary: 'The wardrobe is created through artistic means rather than fabric: strategically draped liquid silk fabric that flows and reveals form, or artistic use of deep shadows and light patterns. The emphasis is on suggestion and classical artistic composition.',
      details: 'A single long piece of flowing black or crimson silk, artistically draped. Or the use of venetian blind shadows, projected patterns, or chiaroscuro lighting to create the "clothing" effect through pure light manipulation.',
      materials: ['Flowing liquid silk', 'Shadow and light', 'Artistic draping'],
      coverage: 'Minimal',
      style: 'Museum Fine Art'
    },
    nailArt: {
      color: 'Natural or completely neutral',
      style: 'Natural length, perfectly groomed',
      finish: 'Soft natural shine only'
    },
    pose: {
      category: 'Master\'s Vision',
      description: 'A single classical art pose inspired by Renaissance masters like Titian or Botticelli - a graceful, sculptural composition where the form itself becomes the primary subject. The body creates timeless lines that reference art history while maintaining contemporary elegance.',
      mood: 'Transcendent, Artistic, Timeless'
    },
    lighting: {
      setup: 'Natural window light or single dramatic source',
      mood: 'Painterly and museum-quality',
      technique: 'Old Master painting lighting - soft window light or dramatic single candle/lamp creating Renaissance-style chiaroscuro'
    },
    camera: {
      focalLength: '85mm f/1.2 or 135mm f/2 Portrait',
      aperture: 'f/1.2 to f/2.0',
      distance: '1.5 to 3 meters',
      angle: 'Considered classical composition angles',
      framing: 'Full artistic composition worthy of museum walls'
    },
    photographerStyle: 'Bill Brandt\'s surreal nudes and Edward Weston\'s form studies - where the human form becomes landscape, sculpture, and pure artistic expression',
    colorGrade: 'Either rich warm tones like classical paintings or dramatic black and white with deep, velvety blacks and luminous highlights',
    figureAndForm: 'The form is sculpted purely by light and shadow, with the silk or shadows creating suggestion rather than coverage. The hourglass silhouette emerges from darkness into light like a classical chiaroscuro painting, emphasizing the timeless beauty of the human form as pure art.'
  }
];

/**
 * AUTO-SELECTOR FUNCTION
 * Generates a complete PromptData object based on selected intimacy level
 */
export function generateSeductressConceptByIntimacy(
  level: number,
  baseSubjectVariant: string,
  baseEnvironment: string
): Partial<PromptData> {
  const intimacyConfig = intimacyLevels.find(il => il.level === level);

  if (!intimacyConfig) {
    throw new Error(`Invalid intimacy level: ${level}. Must be between 1 and 7.`);
  }

  return {
    shot: `Cinematic shot (16:9), ${intimacyConfig.camera.framing.toLowerCase()}.`,
    subject: {
      variant: baseSubjectVariant,
      pose: intimacyConfig.pose.description,
      hair_color: 'jet black',
      hair_style: 'long, loose waves cascading dramatically',
      skin_finish: 'Dewy & Luminous with subtle highlight on high points',
      hand_and_nail_details: `${intimacyConfig.nailArt.color}, ${intimacyConfig.nailArt.style}, ${intimacyConfig.nailArt.finish}.`,
      nail_art: intimacyConfig.nailArt.color,
      high_heels: level <= 3 ? 'Sharp Stiletto Heels (4-5 inch)' : 'Barefoot or minimal strappy heels'
    },
    wardrobe: `${intimacyConfig.wardrobe.primary} ${intimacyConfig.wardrobe.details}`,
    environment: baseEnvironment,
    lighting: `${intimacyConfig.lighting.setup} - ${intimacyConfig.lighting.technique}. Creates a ${intimacyConfig.lighting.mood} atmosphere.`,
    camera: {
      focal_length: intimacyConfig.camera.focalLength,
      aperture: intimacyConfig.camera.aperture,
      distance: intimacyConfig.camera.distance,
      angle: intimacyConfig.camera.angle,
      framing: intimacyConfig.camera.framing
    },
    color_grade: intimacyConfig.colorGrade,
    style: intimacyConfig.photographerStyle,
    quality: `RAW Cinematic (${intimacyConfig.name}). 8k, natural skin texture, museum-quality fine art photography.`,
    figure_and_form: intimacyConfig.figureAndForm,
    skin_micro_details: 'Ultra-realistic skin texture with visible pores, fine lines, natural imperfections, and subtle variations in skin tone. Light naturally catches on the high points of cheekbones, shoulders, and curves.',
    fabric_physics: intimacyConfig.wardrobe.coverage !== 'Minimal'
      ? 'Fabric drapes with natural gravity, clings where appropriate, shows realistic wrinkles and tension points.'
      : 'Minimal fabric elements show natural tension and movement.',
    material_properties: `${intimacyConfig.wardrobe.materials.join(', ')} - each material has distinct texture, light interaction, and tactile quality.`
  };
}

/**
 * Helper function to get intimacy level by name
 */
export function getIntimacyLevelByName(name: string): IntimacyLevel | undefined {
  return intimacyLevels.find(il => il.name === name);
}

/**
 * Helper function to get all intimacy level names for UI dropdown
 */
export function getIntimacyLevelNames(): string[] {
  return intimacyLevels.map(il => `Level ${il.level}: ${il.name}`);
}

/**
 * Export preset combinations for the Seductress model
 */
export const seductressAutoPresets = intimacyLevels.map(level => ({
  name: `Seductress Auto: ${level.name}`,
  description: level.description,
  intimacyLevel: level.intimacyScore,
  level: level.level
}));
