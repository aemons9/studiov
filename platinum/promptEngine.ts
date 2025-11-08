/**
 * PLATINUM COLLECTION - Prompt Generation Engine
 * Creates complete prompts optimized for Imagen and Flux
 * with evening/midnight seductive focus
 */

import type { PlatinumModeState, PlatinumGenerationSettings, PlatinumModelVariant } from './types';
import type { PromptData } from '../types';
import { PLATINUM_VARIANTS } from './platinumCollections';

export class PlatinumPromptEngine {

  generatePrompt(state: PlatinumModeState): string {
    const variant = PLATINUM_VARIANTS.find(v => v.id === state.selectedVariant);
    if (!variant) return '';

    const sections: string[] = [];

    // Artistic context
    sections.push(this.buildArtisticContext(state));

    // Model and photographer
    sections.push(this.buildModelContext(variant, state));

    // Environment
    sections.push(this.buildEnvironmentContext(variant, state));

    // Wardrobe
    sections.push(this.buildWardrobeContext(variant, state));

    // Pose and composition
    sections.push(this.buildPoseContext(variant, state));

    // Lighting and time
    sections.push(this.buildLightingContext(variant, state));

    // Technical excellence
    sections.push(this.buildTechnicalContext(variant, state));

    return sections.filter(s => s.length > 0).join('\n\n');
  }

  private buildArtisticContext(state: PlatinumModeState): string {
    const timeDescriptions = {
      'golden-hour': 'Golden hour',
      'dusk': 'Dusk',
      'evening': 'Evening',
      'midnight': 'Midnight',
      'late-night': 'Late night'
    };

    return `Premium ${timeDescriptions[state.timeOfDay]} photography session. Museum-quality fine art with sophisticated intimate vision. Platinum collection excellence celebrating feminine beauty and seductive power.`;
  }

  private buildModelContext(variant: PlatinumModelVariant, state: PlatinumModeState): string {
    const { physicalTraits, personality, category } = variant;

    return `Indian ${variant.name} - ${category}. ${physicalTraits.figure}. ${physicalTraits.curves.bust} bust, ${physicalTraits.curves.waist} waist, ${physicalTraits.curves.hips} hips with ${physicalTraits.curves.emphasis.replace('-', ' ')} emphasis. ${physicalTraits.skinTone}. ${physicalTraits.features}. ${physicalTraits.fitness} fitness. ${personality}.`;
  }

  private buildEnvironmentContext(variant: PlatinumModelVariant, state: PlatinumModeState): string {
    const env = state.selectedEnvironment
      ? variant.privateEnvironments.find(e => e.id === state.selectedEnvironment)
      : variant.privateEnvironments[0];

    if (!env) return '';

    return `Setting: ${env.name}. ${env.description}. ${env.atmosphere}. Privacy level ${env.privacyLevel}/10, luxury level ${env.luxuryLevel}/10. Materials: ${env.materialPalette.join(', ')}.`;
  }

  private buildWardrobeContext(variant: PlatinumModelVariant, state: PlatinumModeState): string {
    if (!variant.wardrobeCollection || variant.wardrobeCollection.length === 0) {
      return `${state.intimacyLevel >= 8 ? 'Maximum artistic' : 'Elegant revealing'} evening/midnight wardrobe emphasizing curves and seductive elegance.`;
    }

    const selectedWardrobe = state.selectedWardrobe
      ? variant.wardrobeCollection.find(w => w.id === state.selectedWardrobe)
      : variant.wardrobeCollection[0];

    if (!selectedWardrobe) return '';

    return `Wardrobe: ${selectedWardrobe.description}. ${selectedWardrobe.coverage.replace('-', ' ')} coverage. Intimacy level ${selectedWardrobe.intimacyLevel}/10. Optimized for ${selectedWardrobe.fluxOptimized && selectedWardrobe.imagenOptimized ? 'both Imagen and Flux' : selectedWardrobe.fluxOptimized ? 'Flux' : 'Imagen'}.`;
  }

  private buildPoseContext(variant: PlatinumModelVariant, state: PlatinumModeState): string {
    const pose = state.customPose || this.getDefaultPose(variant, state);
    const photographer = variant.personalPhotographer;

    return `Pose and Composition: ${pose}. Photographer style: ${photographer.style}. ${photographer.compositionStyle}. Camera: ${photographer.cameraPreference}.`;
  }

  private getDefaultPose(variant: PlatinumModelVariant, state: PlatinumModeState): string {
    const intimacyPoses = {
      low: 'Confident elegant stance with sophisticated presence',
      medium: 'Seductive positioning with alluring body language and curve emphasis',
      high: 'Intimate seductive pose with maximum allure and explicit confident expression'
    };

    const level = state.intimacyLevel <= 5 ? 'low' : state.intimacyLevel <= 7 ? 'medium' : 'high';
    return intimacyPoses[level];
  }

  private buildLightingContext(variant: PlatinumModelVariant, state: PlatinumModeState): string {
    const env = variant.privateEnvironments[0];
    const photographer = variant.personalPhotographer;

    const timeAtmosphere = {
      'golden-hour': 'warm golden hour glow',
      'dusk': 'soft twilight atmosphere',
      'evening': 'romantic evening ambiance',
      'midnight': 'intimate midnight mood',
      'late-night': 'seductive late night energy'
    };

    return `Lighting: ${photographer.lightingSignature}. ${env.lightingProfile}. ${timeAtmosphere[state.timeOfDay]} creating ${variant.intimacyDynamic} atmosphere.`;
  }

  private buildTechnicalContext(variant: PlatinumModelVariant, state: PlatinumModeState): string {
    const photographer = variant.personalPhotographer;

    return `Technical: ${photographer.specialty}. ${photographer.intimacyApproach}. Ultra-premium 8K resolution. ${state.intimacyLevel >= 8 ? 'Maximum' : 'Premium'} intimate detail. Museum-grade quality with professional retouching maintaining authentic texture. Fine art ${variant.intimacyDynamic} photography excellence.`;
  }

  calibrateSettings(state: PlatinumModeState, provider: string): PlatinumGenerationSettings {
    const variant = PLATINUM_VARIANTS.find(v => v.id === state.selectedVariant);

    const settings: PlatinumGenerationSettings = {
      imagenSafetyFilter: 'block_few',
      imagenPersonGeneration: 'allow_adult',
      fluxSafetyTolerance: 5,
      fluxRawMode: true,
      fluxGuidanceScale: 7.5,
      aspectRatio: '9:16',
      numberOfImages: 1,
      enableWeaving: state.usePhotographerSettings,
      weavingMode: state.intimacyLevel >= 8 ? 'seductive' : 'intimate',
      enableEnhancement: state.usePhotographerSettings,
      enhancementStyle: 'creative'
    };

    // Use photographer's optimized settings if available
    if (variant && state.usePhotographerSettings) {
      const photo = variant.personalPhotographer;
      settings.fluxSafetyTolerance = photo.fluxSettings.safetyTolerance;
      settings.fluxRawMode = photo.fluxSettings.rawMode;
      settings.fluxGuidanceScale = photo.fluxSettings.guidanceScale;
      settings.imagenSafetyFilter = photo.imagenSettings.safetyFilter;
      settings.imagenPersonGeneration = photo.imagenSettings.personGeneration;
    }

    return settings;
  }

  mapToPromptData(state: PlatinumModeState, basePrompt?: PromptData): PromptData {
    const variant = PLATINUM_VARIANTS.find(v => v.id === state.selectedVariant);
    if (!variant) {
      throw new Error('No variant selected');
    }

    const env = variant.privateEnvironments[0];
    const photographer = variant.personalPhotographer;
    const traits = variant.physicalTraits;

    const cameraSettings = this.parseCameraSettings(photographer.cameraPreference);

    return {
      shot: `Platinum ${state.timeOfDay} photography. ${variant.category}. Intimacy ${state.intimacyLevel}/10. ${variant.intimacyDynamic} dynamics.`,
      subject: {
        variant: `Indian ${variant.name}. ${traits.figure}. ${traits.curves.bust} ${traits.curves.waist} ${traits.curves.hips}. ${traits.skinTone}. ${traits.features}. ${traits.fitness} fitness.`,
        pose: state.customPose || this.getDefaultPose(variant, state),
        hair_color: 'jet black',
        hair_style: state.intimacyLevel >= 8 ? 'Dramatic flowing styling with seductive volume' : 'Elegant sophisticated styling',
        skin_finish: 'Luminous radiant finish with premium glow',
        hand_and_nail_details: 'Seductive hand placement with elegant refinement',
        tattoos: 'none',
        piercings: 'none',
        body_art: 'none',
        nail_art: state.intimacyLevel >= 7 ? 'Bold red seductive polish' : 'Elegant neutral manicure',
        high_heels: state.intimacyLevel >= 6 ? 'Designer stiletto heels' : 'Elegant heels'
      },
      wardrobe: this.getWardrobeDescription(variant, state),
      environment: `${env.name}. ${env.description}`,
      lighting: `${photographer.lightingSignature}. ${env.lightingProfile}.`,
      camera: cameraSettings,
      color_grade: `Premium ${state.timeOfDay} color grading with ${variant.intimacyDynamic} warmth and luxury depth`,
      style: `${photographer.style}. ${variant.category}. Fine art ${variant.intimacyDynamic} photography. Museum-quality platinum collection.`,
      quality: 'Ultra-premium 8K platinum collection quality with museum-grade detail and professional intimate retouching',
      figure_and_form: `${traits.curves.emphasis.replace('-', ' ')} emphasis. ${traits.figure} with ${variant.intimacyDynamic} confidence and curve-focused elegance.`,
      skin_micro_details: 'Ultra-high-resolution authentic skin texture with premium retouching, visible pores, natural radiance, and realistic subsurface scattering.',
      fabric_physics: state.intimacyLevel >= 8 ? 'Maximum artistic fabric with revealing draping and intimate interaction' : 'Premium fabric with elegant draping and sophisticated reveals',
      material_properties: `Luxury ${state.timeOfDay} materials: ${env.materialPalette.join(', ')}. Premium light interaction with ${variant.intimacyDynamic} specular richness.`
    };
  }

  private getWardrobeDescription(variant: PlatinumModelVariant, state: PlatinumModeState): string {
    if (!variant.wardrobeCollection || variant.wardrobeCollection.length === 0) {
      return `Premium ${state.timeOfDay} wardrobe with ${state.intimacyLevel >= 8 ? 'maximum artistic reveals' : 'elegant sophisticated coverage'}`;
    }

    const selectedWardrobe = state.selectedWardrobe
      ? variant.wardrobeCollection.find(w => w.id === state.selectedWardrobe)
      : variant.wardrobeCollection[0];

    return selectedWardrobe?.description || 'Premium seductive wardrobe';
  }

  private parseCameraSettings(preference: string): { focal_length: string; aperture: string; distance: string; angle: string; framing: string } {
    // Parse photographer's camera preference into structured settings
    return {
      focal_length: preference.includes('85mm') ? '85mm' : preference.includes('50mm') ? '50mm' : '70mm',
      aperture: preference.includes('f/1.2') ? 'f/1.2' : preference.includes('f/1.4') ? 'f/1.4' : 'f/2.0',
      distance: '2 m',
      angle: 'Intimate seductive perspective',
      framing: 'Premium composition emphasizing curves and seductive elegance'
    };
  }
}
