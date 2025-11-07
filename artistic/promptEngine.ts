/**
 * ARTISTIC PROMPT ENGINE
 * Core engine that combines master styles, model archetypes, and artistic language
 * to generate safety-compliant fine-art prompts
 */

import { ArtisticLanguageMapper } from './languageMapper';
import { getMasterStyle } from './masterStyles';
import { getModelArchetype } from './indianModels';
import type {
  ArtisticGenerationConfig,
  EnhancedArtisticPrompt,
  IntimacyLevel
} from './types';

export class ArtisticPromptEngine {
  constructor(private config: ArtisticGenerationConfig) {}

  /**
   * Build a complete artistic prompt from configuration
   */
  async buildArtisticPrompt(
    scene: string,
    wardrobe: string,
    lighting: string,
    composition: string
  ): Promise<EnhancedArtisticPrompt> {
    const masterStyle = getMasterStyle(this.config.masterStyle);
    const modelArchetype = getModelArchetype(this.config.modelArchetype);

    if (!modelArchetype) {
      throw new Error(`Model archetype not found: ${this.config.modelArchetype}`);
    }

    // Build prompt components
    const artisticContext = this.buildArtisticContext(masterStyle.displayName);
    const masterStyleContext = this.buildMasterStyleContext(masterStyle);
    const safetyContext = this.buildSafetyContext();
    const technicalExcellence = this.buildTechnicalExcellence(this.config.qualityPreset);
    const modelDescription = this.buildModelDescription(modelArchetype);
    const sceneComposition = this.buildSceneComposition(scene, composition, masterStyle);
    const lightingDirection = this.buildLightingDirection(lighting, masterStyle);

    // Apply safety mapping
    const safeWardrobe = ArtisticLanguageMapper.mapToArtisticLanguage(wardrobe);
    const safeScene = ArtisticLanguageMapper.mapToArtisticLanguage(sceneComposition);

    // Construct final prompt
    const finalPrompt = this.constructFinalPrompt({
      artisticContext,
      masterStyleContext,
      safetyContext,
      technicalExcellence,
      modelDescription,
      scene: safeScene,
      wardrobe: safeWardrobe,
      lighting: lightingDirection
    });

    return {
      artisticContext,
      masterStyleContext,
      safetyContext,
      technicalExcellence,
      modelDescription,
      sceneComposition: safeScene,
      lightingDirection,
      finalPrompt
    };
  }

  private buildArtisticContext(masterName: string): string {
    return `Award-winning fine-art fashion photography in the style of ${masterName}`;
  }

  private buildMasterStyleContext(masterStyle: any): string {
    return `${masterStyle.examplePromptFragment}. ${masterStyle.compositionStyle}.`;
  }

  private buildSafetyContext(): string {
    const contexts = [
      'Tasteful artistic expression maintaining sophisticated and professional standards',
      'High-fashion editorial context with gallery-appropriate artistic vision',
      'Fine-art photography suitable for museum exhibition and fashion editorial publication'
    ];

    // Select based on safety profile
    const index = this.config.safetyProfile === 'conservative' ? 0 :
                  this.config.safetyProfile === 'balanced' ? 1 : 2;
    return contexts[index];
  }

  private buildTechnicalExcellence(qualityPreset: string): string {
    const presets = {
      standard: '8K resolution, professional photography standards, sharp detail',
      premium: '8K ultra-high resolution, gallery exhibition quality, museum-grade detail, perfect exposure',
      gallery: 'Maximum 8K resolution, museum exhibition quality, archival fine-art print standards, impeccable technical perfection'
    };

    return presets[qualityPreset as keyof typeof presets] || presets.standard;
  }

  private buildModelDescription(archetype: any): string {
    const { physicalTraits, styleContext } = archetype;
    return `Indian fashion model: ${physicalTraits.figure}, ${physicalTraits.height}, ${physicalTraits.skinTone}. ${physicalTraits.features}. Context: ${styleContext}.`;
  }

  private buildSceneComposition(scene: string, composition: string, masterStyle: any): string {
    return `${scene}. Composition: ${masterStyle.compositionStyle}. ${composition}.`;
  }

  private buildLightingDirection(lighting: string, masterStyle: any): string {
    return `Lighting signature: ${masterStyle.lightingSignature}. ${lighting}.`;
  }

  private constructFinalPrompt(components: any): string {
    const intimacyModifier = this.getIntimacyModifier(this.config.intimacyLevel);

    return `
${components.artisticContext}. ${components.masterStyleContext}

SUBJECT: ${components.modelDescription}

SCENE & COMPOSITION: ${components.scene} ${intimacyModifier}

WARDROBE: ${components.wardrobe}

LIGHTING: ${components.lighting}

TECHNICAL SPECIFICATIONS: ${components.technicalExcellence}

ARTISTIC CONTEXT: ${components.safetyContext}
    `.trim().replace(/\n\s+/g, ' ');
  }

  private getIntimacyModifier(level: IntimacyLevel): string {
    if (level <= 3) {
      return 'Professional editorial stance, confident and poised demeanor.';
    } else if (level <= 5) {
      return 'Sophisticated fashion pose with commanding presence and artistic grace.';
    } else if (level <= 7) {
      return 'Bold artistic composition with powerful presence, confident and magnetic demeanor.';
    } else {
      return 'Masterful artistic statement with commanding sensual power, bold and fearless presence.';
    }
  }

  /**
   * Apply weaving enhancement using Gemini (if enabled)
   */
  async applyWeavingEnhancement(
    basePrompt: string,
    projectId: string,
    accessToken: string
  ): Promise<string> {
    if (!this.config.useWeavingEnhancement) {
      return basePrompt;
    }

    const masterStyle = getMasterStyle(this.config.masterStyle);

    const weavingPrompt = `You are a master fine-art fashion photographer specializing in the style of ${masterStyle.displayName}.

Enhance this prompt for an AI image generation model, maintaining the artistic vision while ensuring sophisticated and tasteful execution:

${basePrompt}

Requirements:
- Maintain the ${masterStyle.displayName} aesthetic
- Emphasize ${masterStyle.compositionStyle}
- Use ${masterStyle.lightingSignature}
- Keep the mood: ${masterStyle.moodPalette.join(', ')}
- Ensure gallery-quality fine-art context
- Use only artistic and professional language
- Single cohesive paragraph

Enhanced prompt:`;

    try {
      const response = await fetch(
        `https://us-east4-aiplatform.googleapis.com/v1/projects/${projectId}/locations/us-east4/publishers/google/models/gemini-2.5-pro:generateContent`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{
              role: 'user',
              parts: [{ text: weavingPrompt }]
            }],
            generationConfig: {
              temperature: 0.4,
              maxOutputTokens: 2048,
            }
          })
        }
      );

      if (!response.ok) {
        console.warn('Weaving enhancement failed, using base prompt');
        return basePrompt;
      }

      const data = await response.json();
      const enhanced = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

      return enhanced || basePrompt;
    } catch (error) {
      console.error('Weaving error:', error);
      return basePrompt;
    }
  }
}
