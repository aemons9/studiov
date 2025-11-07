/**
 * ARTISTIC MODE - Type Definitions
 * High-fashion fine-art themed generation engine
 * Focused on master photographer styles with safety-first artistic language
 */

export type MasterStyleName = 'newton' | 'penn' | 'roversi' | 'ritts';
export type SafetyProfile = 'conservative' | 'balanced' | 'artistic';
export type QualityPreset = 'standard' | 'premium' | 'gallery';
export type IntimacyLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface TechnicalRequirements {
  contrast: 'low' | 'medium' | 'high';
  saturation: 'muted' | 'neutral' | 'warm' | 'cool';
  sharpness: 'soft' | 'balanced' | 'crisp' | 'perfect';
  grain: 'none' | 'subtle' | 'visible' | 'pronounced';
}

export interface MasterStyleProfile {
  name: MasterStyleName;
  displayName: string;
  description: string;
  lightingSignature: string;
  compositionStyle: string;
  moodPalette: string[];
  safetyModifier: number; // -1 to 1, affects base safety settings
  technicalSpecs: TechnicalRequirements;
  examplePromptFragment: string;
}

export interface IndianModelArchetype {
  id: string;
  name: string;
  description: string;
  physicalTraits: {
    height: string;
    figure: string;
    skinTone: string;
    features: string;
  };
  styleContext: string;
  culturalElements?: string[];
}

export interface ArtisticGenerationConfig {
  masterStyle: MasterStyleName;
  intimacyLevel: IntimacyLevel;
  safetyProfile: SafetyProfile;
  qualityPreset: QualityPreset;
  modelArchetype: string; // ID of IndianModelArchetype
  useWeavingEnhancement: boolean;
  provider: 'imagen' | 'flux';
}

export interface EnhancedArtisticPrompt {
  artisticContext: string;
  masterStyleContext: string;
  safetyContext: string;
  technicalExcellence: string;
  modelDescription: string;
  sceneComposition: string;
  lightingDirection: string;
  finalPrompt: string;
}

export interface ArtisticGenerationSettings {
  // Imagen-specific
  imagenSafetyFilter: 'block_most' | 'block_some' | 'block_few';
  imagenPersonGeneration: 'allow_all' | 'allow_adult' | 'dont_allow';

  // Flux-specific
  fluxSafetyTolerance: 1 | 2 | 3 | 4 | 5 | 6;
  fluxRawMode: boolean;
  fluxGuidanceScale: number;

  // Common
  aspectRatio: '9:16' | '16:9' | '4:3' | '3:4' | '1:1';
  numberOfImages: number;
}

export interface ValidationResult {
  isValid: boolean;
  issues: string[];
  warnings: string[];
  score: number; // 0-100
}
