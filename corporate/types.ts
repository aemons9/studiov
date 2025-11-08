/**
 * CORPORATE MODE - Type Definitions
 * State-of-the-art corporate power and sensuality generation system
 */

export type CorporateRole =
  | 'chief_executive'
  | 'board_member'
  | 'personal_secretary'
  | 'hr_executive'
  | 'design_executive'
  | 'government_official'
  | 'lawyer';

export type OfficeEnvironmentType =
  | 'corporation_mnc'
  | 'hotel_chain'
  | 'real_estate'
  | 'entertainment'
  | 'nightclub_chain'
  | 'government'
  | 'head_of_state';

export type ArtisticExplicitness =
  | 'minimal'          // Professional with subtle power
  | 'suggestive'       // Implying sensuality through context
  | 'revealing'        // Strategic revealing with artistic intent
  | 'artistically_explicit';  // High-art erotic

export type PowerDynamic =
  | 'submissive'       // Subversive power from below
  | 'balanced'         // Equal power exchange
  | 'dominant';        // Authoritative command

export type SensualityStyle =
  | 'authoritative'    // CEO/Executive power
  | 'manipulative'     // Board member intrigue
  | 'subversive'       // Secretary subtle control
  | 'intellectual'     // HR/Legal cerebral sensuality
  | 'creative'         // Design/artistic expression
  | 'bureaucratic'     // Government formal with subtext
  | 'legal';           // Lawyer precision and authority

export interface CorporateRoleProfile {
  role: CorporateRole;
  powerLevel: number; // 1-10, indicates authority level
  sensualityStyle: SensualityStyle;
  wardrobeSignature: string; // Key wardrobe characteristics
  environmentPreferences: OfficeEnvironmentType[]; // Suitable environments
  powerPoses: string[]; // Signature poses for this role
  corporateProps: string[]; // Signature props/objects
}

export interface OfficeEnvironment {
  type: OfficeEnvironmentType;
  luxuryLevel: number; // 1-10
  privacyLevel: number; // 1-10
  aesthetic: string; // Visual style description
  exclusiveSpaces: string[]; // Unique areas for this environment
  lightingProfiles: string[]; // Lighting styles
  materialPalette: string[]; // Key materials and finishes
}

export interface IntimacyCalibration {
  level: number; // 1-10 intimacy scale
  artisticExplicitness: ArtisticExplicitness;
  powerDynamic: PowerDynamic;
  wardrobeReveal: number; // 1-10, how much is revealed
}

export interface CorporatePowerState {
  selectedRole: CorporateRole | null;
  selectedEnvironment: OfficeEnvironmentType | null;
  intimacyCalibration: IntimacyCalibration;
  modelVariant: string; // Indian model archetype
  customWardrobe?: string; // Optional custom wardrobe description
  customPose?: string; // Optional custom pose
  customProps?: string[]; // Optional additional props
}

export interface CorporateGenerateOptions {
  batchMode: boolean;
  styleTransfer: boolean;
  qualityBoost: boolean;
  safetyLevel: 'conservative' | 'balanced' | 'progressive';
}

export interface CorporateGenerationSettings {
  imagenSafetyFilter: 'block_most' | 'block_some' | 'block_few';
  fluxSafetyTolerance: 1 | 2 | 3 | 4 | 5 | 6;
  fluxRawMode: boolean;
  fluxGuidanceScale: number;
  aspectRatio: string;
  numberOfImages: number;
}

export interface CorporateValidationResult {
  isValid: boolean;
  score: number; // 0-100
  issues: string[];
  warnings: string[];
  suggestions: string[];
}
