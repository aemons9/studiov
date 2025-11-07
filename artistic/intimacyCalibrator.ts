/**
 * INTIMACY CALIBRATION SYSTEM
 * Calculates optimal generation settings based on intimacy level
 * Balances artistic freedom with safety compliance
 */

import type {
  IntimacyLevel,
  ArtisticGenerationConfig,
  ArtisticGenerationSettings
} from './types';
import { getMasterStyle } from './masterStyles';

export class IntimacyCalibrator {
  /**
   * Calculate complete generation settings based on intimacy level and configuration
   */
  static calibrateSettings(config: ArtisticGenerationConfig): ArtisticGenerationSettings {
    const { intimacyLevel, provider, masterStyle: styleName } = config;
    const masterStyle = getMasterStyle(styleName);

    // Base calculations
    const imagenSettings = this.calibrateImagenSettings(intimacyLevel, masterStyle.safetyModifier);
    const fluxSettings = this.calibrateFluxSettings(intimacyLevel, masterStyle.safetyModifier);

    return {
      ...imagenSettings,
      ...fluxSettings,
      aspectRatio: '9:16', // Default portrait for fashion
      numberOfImages: 1
    };
  }

  /**
   * Calculate Imagen-specific settings
   */
  private static calibrateImagenSettings(
    intimacyLevel: IntimacyLevel,
    styleModifier: number
  ): Pick<ArtisticGenerationSettings, 'imagenSafetyFilter' | 'imagenPersonGeneration'> {
    // Calculate adjusted intimacy with style modifier
    const adjusted = intimacyLevel + (styleModifier * 2);

    // Map to safety filter
    let imagenSafetyFilter: 'block_most' | 'block_some' | 'block_few';
    if (adjusted <= 4) {
      imagenSafetyFilter = 'block_some';
    } else if (adjusted <= 7) {
      imagenSafetyFilter = 'block_few';
    } else {
      imagenSafetyFilter = 'block_few'; // Stay at block_few for maximum artistic freedom
    }

    return {
      imagenSafetyFilter,
      imagenPersonGeneration: 'allow_all' // Always allow for fashion photography
    };
  }

  /**
   * Calculate Flux-specific settings
   */
  private static calibrateFluxSettings(
    intimacyLevel: IntimacyLevel,
    styleModifier: number
  ): Pick<ArtisticGenerationSettings, 'fluxSafetyTolerance' | 'fluxRawMode' | 'fluxGuidanceScale'> {
    // Calculate adjusted intimacy with style modifier
    const adjusted = intimacyLevel + (styleModifier * 2);

    // Map to safety tolerance (1-6 scale)
    let fluxSafetyTolerance: 1 | 2 | 3 | 4 | 5 | 6;
    if (adjusted <= 2) {
      fluxSafetyTolerance = 3;
    } else if (adjusted <= 4) {
      fluxSafetyTolerance = 4;
    } else if (adjusted <= 6) {
      fluxSafetyTolerance = 5;
    } else {
      fluxSafetyTolerance = 6; // Maximum for high intimacy
    }

    // Raw mode for intimacy >= 7
    const fluxRawMode = intimacyLevel >= 7;

    // Guidance scale increases with intimacy for more precise control
    const fluxGuidanceScale = 3.0 + (intimacyLevel * 0.3);

    return {
      fluxSafetyTolerance,
      fluxRawMode,
      fluxGuidanceScale
    };
  }

  /**
   * Get intimacy level description
   */
  static getIntimacyDescription(level: IntimacyLevel): string {
    const descriptions: Record<IntimacyLevel, string> = {
      1: 'Professional Editorial - Corporate fashion, fully clothed, professional demeanor',
      2: 'High Fashion Conservative - Elegant fashion editorial, sophisticated styling',
      3: 'Refined Fashion - Upscale fashion editorial, tasteful and refined',
      4: 'Sophisticated Editorial - Bold fashion statements, confident presence',
      5: 'Artistic Fashion - Creative high-fashion, artistic expression',
      6: 'Sensual Editorial - Sophisticated sensual fashion, confident allure',
      7: 'Fine Art Expression - Bold artistic statement, powerful presence',
      8: 'Masterful Artistic - Master-level artistic vision, commanding sensuality',
      9: 'Gallery Fine Art - Museum-quality artistic boldness, fearless expression',
      10: 'Ultimate Artistic Freedom - Absolute artistic vision, maximum creative freedom'
    };

    return descriptions[level];
  }

  /**
   * Get recommended intimacy level for a master style
   */
  static getRecommendedIntimacy(masterStyle: string): IntimacyLevel {
    const recommendations: Record<string, IntimacyLevel> = {
      newton: 7,  // Bold and powerful
      penn: 5,    // Refined and elegant
      roversi: 6, // Romantic and artistic
      ritts: 7    // Sculptural and bold
    };

    return recommendations[masterStyle] || 5;
  }

  /**
   * Validate intimacy level is appropriate for selected configuration
   */
  static validateIntimacyLevel(
    intimacyLevel: IntimacyLevel,
    safetyProfile: 'conservative' | 'balanced' | 'artistic'
  ): { isValid: boolean; warning?: string } {
    // Conservative profile should stay <= 5
    if (safetyProfile === 'conservative' && intimacyLevel > 5) {
      return {
        isValid: true,
        warning: 'High intimacy level with conservative safety profile may limit artistic expression'
      };
    }

    // Balanced profile recommended <= 7
    if (safetyProfile === 'balanced' && intimacyLevel > 7) {
      return {
        isValid: true,
        warning: 'Very high intimacy level - ensure artistic context is strong'
      };
    }

    return { isValid: true };
  }

  /**
   * Get intimacy adjustment suggestions
   */
  static getIntimacySuggestion(
    currentLevel: IntimacyLevel,
    masterStyle: string
  ): string | null {
    const recommended = this.getRecommendedIntimacy(masterStyle);

    if (currentLevel < recommended - 2) {
      return `Consider increasing intimacy to ${recommended} for authentic ${masterStyle} aesthetic`;
    }

    if (currentLevel > recommended + 2) {
      return `Consider decreasing intimacy to ${recommended} for balanced ${masterStyle} style`;
    }

    return null;
  }
}
