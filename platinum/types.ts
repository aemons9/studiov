/**
 * PLATINUM COLLECTION MODE - Type Definitions
 * Next-level premium Indian model variants with complete ecosystems
 * Featuring bold seductive variants with private intimate settings
 */

export type PlatinumVariantId =
  | 'midnight-seductress'
  | 'fitness-bombshell'
  | 'graphic-editorial-queen'
  | 'private-boudoir-enchantress'
  | 'luxury-lounge-goddess'
  | 'spa-tub-temptress'
  | 'rooftop-midnight-muse'
  | 'hotel-suite-vixen'
  | 'underground-club-siren'
  | 'art-studio-provocateur';

export type TimeOfDay = 'golden-hour' | 'dusk' | 'evening' | 'midnight' | 'late-night';
export type IntimacyDynamic = 'seductive' | 'provocative' | 'intimate' | 'explicit' | 'erotic';
export type CurveEmphasis = 'balanced' | 'upper-focus' | 'lower-focus' | 'maximum-curves';

export interface PhysicalTraits {
  height: string;
  figure: string;
  curves: {
    bust: string;
    waist: string;
    hips: string;
    emphasis: CurveEmphasis;
  };
  skinTone: string;
  features: string;
  fitness: 'athletic' | 'toned' | 'curvy-fit' | 'voluptuous' | 'bombshell';
}

export interface PlatinumWardrobeItem {
  id: string;
  name: string;
  description: string;
  coverage: 'minimal' | 'moderate' | 'revealing' | 'maximum-artistic';
  suitableFor: TimeOfDay[];
  intimacyLevel: number; // 1-10
  fluxOptimized: boolean;
  imagenOptimized: boolean;
}

export interface PhotographerProfile {
  name: string;
  style: string;
  specialty: string;
  intimacyApproach: string;
  lightingSignature: string;
  compositionStyle: string;
  cameraPreference: string;
  fluxSettings: {
    safetyTolerance: 1 | 2 | 3 | 4 | 5 | 6;
    rawMode: boolean;
    guidanceScale: number;
  };
  imagenSettings: {
    safetyFilter: 'block_most' | 'block_some' | 'block_few';
    personGeneration: 'allow_all' | 'allow_adult';
  };
}

export interface PrivateEnvironment {
  id: string;
  name: string;
  type: 'bedroom' | 'bathroom' | 'lounge' | 'rooftop' | 'studio' | 'hotel' | 'club' | 'spa';
  description: string;
  lightingProfile: string;
  timeOfDay: TimeOfDay[];
  atmosphere: string;
  privacyLevel: number; // 1-10
  luxuryLevel: number; // 1-10
  materialPalette: string[];
}

export interface PlatinumModelVariant {
  id: PlatinumVariantId;
  name: string;
  category: string;
  description: string;
  physicalTraits: PhysicalTraits;
  personality: string;
  expertise: string[];
  wardrobeCollection: PlatinumWardrobeItem[];
  personalPhotographer: PhotographerProfile;
  privateEnvironments: PrivateEnvironment[];
  defaultTimeOfDay: TimeOfDay;
  intimacyDynamic: IntimacyDynamic;
  optimizedFor: ('imagen' | 'flux')[];
}

export interface PlatinumModeState {
  selectedVariant: PlatinumVariantId | null;
  selectedWardrobe: string | null;
  selectedEnvironment: string | null;
  timeOfDay: TimeOfDay;
  intimacyLevel: number; // 1-10
  customPose: string;
  customDetails: string;
  usePhotographerSettings: boolean;
}

export interface PlatinumGenerationSettings {
  // Imagen-specific
  imagenSafetyFilter: 'block_most' | 'block_some' | 'block_few';
  imagenPersonGeneration: 'allow_all' | 'allow_adult';

  // Flux-specific
  fluxSafetyTolerance: 1 | 2 | 3 | 4 | 5 | 6;
  fluxRawMode: boolean;
  fluxGuidanceScale: number;

  // Common
  aspectRatio: '9:16' | '16:9' | '3:4' | '4:3' | '1:1';
  numberOfImages: number;

  // Weaving & Enhancement
  enableWeaving: boolean;
  weavingMode: 'master' | 'passion' | 'intimate' | 'seductive';
  enableEnhancement: boolean;
  enhancementStyle: 'balanced' | 'subtle' | 'creative';
}

export interface PlatinumValidationResult {
  isValid: boolean;
  warnings: string[];
  recommendations: string[];
  intimacyScore: number; // 1-10
  boundaryLevel: number; // 1-25
}
