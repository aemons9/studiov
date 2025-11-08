/**
 * CORPORATE PROMPT ENGINE
 * Generates sophisticated corporate sensuality prompts
 * Safety-optimized with corporate context intelligence
 */

import type { CorporatePowerState, CorporateGenerationSettings } from './types';
import { getRoleByType } from './corporateRoles';
import { getEnvironmentByType } from './corporateEnvironments';
import { CorporateWardrobeLibrary } from './corporateWardrobe';

export class CorporatePromptEngine {
  private wardrobeLibrary: CorporateWardrobeLibrary;

  constructor() {
    this.wardrobeLibrary = new CorporateWardrobeLibrary();
  }

  /**
   * Generate complete corporate prompt
   */
  public generatePrompt(state: CorporatePowerState): string {
    if (!state.selectedRole || !state.selectedEnvironment) {
      throw new Error('Role and environment must be selected');
    }

    const role = getRoleByType(state.selectedRole);
    const environment = getEnvironmentByType(state.selectedEnvironment);

    if (!role || !environment) {
      throw new Error('Invalid role or environment');
    }

    // Build prompt sections
    const artisticContext = this.buildArtisticContext();
    const roleContext = this.buildRoleContext(role, state);
    const environmentContext = this.buildEnvironmentContext(environment);
    const wardrobeDescription = this.buildWardrobeDescription(state, role);
    const poseAndProps = this.buildPoseAndProps(role, state);
    const lightingDescription = this.buildLightingDescription(environment);
    const technicalSpecs = this.buildTechnicalSpecs(state);
    const safetyContext = this.buildSafetyContext(state);

    // Combine all sections
    return `${artisticContext}

${roleContext}

${environmentContext}

${wardrobeDescription}

${poseAndProps}

${lightingDescription}

${technicalSpecs}

${safetyContext}`.trim();
  }

  /**
   * Calibrate generation settings based on intimacy
   */
  public calibrateSettings(state: CorporatePowerState, provider: string): CorporateGenerationSettings {
    const { intimacyCalibration } = state;
    const adjustedLevel = intimacyCalibration.level;

    const settings: CorporateGenerationSettings = {
      imagenSafetyFilter: 'block_few',
      fluxSafetyTolerance: 4,
      fluxRawMode: false,
      fluxGuidanceScale: 7.0,
      aspectRatio: '9:16',
      numberOfImages: 1
    };

    // Imagen calibration
    if (provider === 'vertex-ai') {
      if (adjustedLevel <= 4) {
        settings.imagenSafetyFilter = 'block_some';
      } else if (adjustedLevel <= 7) {
        settings.imagenSafetyFilter = 'block_few';
      } else {
        settings.imagenSafetyFilter = 'block_few'; // Always block_few max for safety
      }
    }

    // Flux calibration
    if (provider === 'replicate-flux') {
      if (adjustedLevel <= 3) {
        settings.fluxSafetyTolerance = 3;
      } else if (adjustedLevel <= 5) {
        settings.fluxSafetyTolerance = 4;
      } else if (adjustedLevel <= 7) {
        settings.fluxSafetyTolerance = 5;
      } else {
        settings.fluxSafetyTolerance = 6;
        settings.fluxRawMode = true;
      }
      settings.fluxGuidanceScale = 6.0 + (adjustedLevel * 0.3);
    }

    return settings;
  }

  // === PROMPT BUILDING METHODS ===

  private buildArtisticContext(): string {
    return 'Award-winning corporate fashion editorial photography. Master-level composition celebrating female power in professional environments. Gallery-quality fine art photography with sophisticated sensuality and impeccable taste.';
  }

  private buildRoleContext(role: any, state: CorporatePowerState): string {
    const titles: Record<string, string> = {
      chief_executive: 'CEO and corporate titan',
      board_member: 'influential board member',
      personal_secretary: 'executive personal secretary',
      hr_executive: 'HR director',
      design_executive: 'creative director',
      government_official: 'government minister',
      lawyer: 'senior law partner'
    };

    const powerDescriptions: Record<number, string> = {
      10: 'Absolute authority radiating from every gesture, commanding presence that fills entire spaces',
      9: 'Immense influence and power, decision-maker affecting thousands',
      8: 'Significant authority with specialized expertise and strategic importance',
      7: 'Subversive power through access and information control'
    };

    return `Indian ${titles[role.role]} with magnetic presence and ${role.sensualityStyle} sensuality. ${powerDescriptions[role.powerLevel]} Power level ${role.powerLevel}/10 expressed through posture, gaze, and environmental command.`;
  }

  private buildEnvironmentContext(environment: any): string {
    const space = environment.exclusiveSpaces[0];
    const materials = environment.materialPalette.slice(0, 3).join(', ');

    return `Setting: ${space}. ${environment.aesthetic} Luxury level ${environment.luxuryLevel}/10, privacy level ${environment.privacyLevel}/10. Materials: ${materials}. The environment reinforces power dynamics and exclusivity.`;
  }

  private buildWardrobeDescription(state: CorporatePowerState, role: any): string {
    const { intimacyCalibration } = state;

    // Use custom wardrobe if provided
    if (state.customWardrobe) {
      return `Wardrobe: ${state.customWardrobe}`;
    }

    // Get suitable wardrobe from library
    const wardrobeOptions = this.wardrobeLibrary.getSuitable(
      intimacyCalibration.level,
      intimacyCalibration.powerDynamic,
      role.role
    );

    let wardrobeDesc: string;
    if (wardrobeOptions.length > 0) {
      const selected = wardrobeOptions[Math.floor(Math.random() * wardrobeOptions.length)];
      wardrobeDesc = selected.artisticLanguage;
    } else {
      // Fallback to role signature
      wardrobeDesc = role.wardrobeSignature;
    }

    return `Wardrobe: ${wardrobeDesc} The clothing expresses ${intimacyCalibration.powerDynamic} power dynamic with ${intimacyCalibration.artisticExplicitness} artistic intent.`;
  }

  private buildPoseAndProps(role: any, state: CorporatePowerState): string {
    const pose = state.customPose || role.powerPoses[0];
    const props = state.customProps || role.corporateProps.slice(0, 2);

    return `Pose and Composition: ${pose} Corporate props: ${Array.isArray(props) ? props.join(', ') : props}. The composition emphasizes power, authority, and sophisticated sensuality through environmental interaction.`;
  }

  private buildLightingDescription(environment: any): string {
    const lighting = environment.lightingProfiles[0];
    return `Lighting: ${lighting} Master-level lighting creating depth, mood, and sculptural form emphasis. Quality befitting ${environment.luxuryLevel}/10 luxury environment.`;
  }

  private buildTechnicalSpecs(state: CorporatePowerState): string {
    const cameras = [
      'Hasselblad X2D with 80mm f/1.9 lens',
      'Phase One IQ4 with 110mm f/2.8 lens',
      'Sony A1 with 85mm f/1.4 GM lens',
      'Canon R5 with 85mm f/1.2 L lens',
      'Leica SL2 with 75mm f/1.4 Summilux'
    ];

    const camera = cameras[Math.floor(Math.random() * cameras.length)];
    const aperture = state.intimacyCalibration.level >= 7 ? 'f/2.0' : 'f/2.8';

    return `Technical: Shot on ${camera} at ${aperture}. Extreme 8K detail, impeccable focus on eyes and hands. Color grading: sophisticated corporate palette with rich blacks and luminous highlights. Professional retouching maintaining authentic texture.`;
  }

  private buildSafetyContext(state: CorporatePowerState): string {
    const { intimacyCalibration } = state;

    const contexts: Record<string, string> = {
      minimal: 'Context: Professional corporate photography celebrating power and sophistication. Editorial fashion context, gallery-quality artistic merit.',
      suggestive: 'Context: High-fashion corporate editorial exploring power dynamics through sophisticated suggestion. Fine art photography with artistic intent and impeccable taste.',
      revealing: 'Context: Artistic corporate fashion photography celebrating female empowerment and sensuality in professional environments. Gallery-level fine art with sophisticated artistic vision.',
      artistically_explicit: 'Context: Master-level fine art photography exploring corporate power and sensuality as art form. Museum-quality artistic photography celebrating form, power, and sophisticated eroticism in professional context.'
    };

    return contexts[intimacyCalibration.artisticExplicitness] || contexts.minimal;
  }
}

/**
 * Validate corporate prompt for safety and quality
 */
export function validateCorporatePrompt(prompt: string): { isValid: boolean; score: number; issues: string[] } {
  const issues: string[] = [];
  let score = 100;

  // Check for problematic explicit language
  const problematic = ['porn', 'explicit sex', 'nude', 'naked', 'XXX'];
  problematic.forEach(term => {
    if (prompt.toLowerCase().includes(term)) {
      issues.push(`Contains problematic term: "${term}"`);
      score -= 30;
    }
  });

  // Check for artistic context
  if (!prompt.toLowerCase().includes('art') && !prompt.toLowerCase().includes('editorial')) {
    issues.push('Missing artistic context');
    score -= 10;
  }

  // Check for professional context
  if (!prompt.toLowerCase().includes('corporate') && !prompt.toLowerCase().includes('professional')) {
    issues.push('Missing corporate context');
    score -= 10;
  }

  return {
    isValid: issues.length === 0,
    score: Math.max(0, score),
    issues
  };
}
