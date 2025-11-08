/**
 * PLATINUM COLLECTION ENHANCER
 *
 * Adds AI capabilities to Platinum Collection Mode:
 * - Generate variations of selected variants
 * - AI-enhance collection prompts
 * - Create new variants using AI Director
 */

import React, { useState } from 'react';
import type { PromptData, GenerationSettings } from '../types';
import PlatinumEngine, { DirectorOutput, VariationOptions, RemixOptions } from '../services/platinumEngine';
import type { PlatinumModeState, PlatinumVariantId } from '../platinum/types';
import { PLATINUM_VARIANTS } from '../platinum/platinumCollections';

interface EnhancerProps {
  currentVariant: PlatinumVariantId | null;
  currentState: PlatinumModeState;
  generatedPrompt: string;
  settings: GenerationSettings;
  onEnhancedConcept: (concept: DirectorOutput) => void;
}

const PlatinumCollectionEnhancer: React.FC<EnhancerProps> = ({
  currentVariant,
  currentState,
  generatedPrompt,
  settings,
  onEnhancedConcept
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showEnhancer, setShowEnhancer] = useState(false);

  const variant = currentVariant ? PLATINUM_VARIANTS.find(v => v.id === currentVariant) : null;

  const handleGenerateVariations = async () => {
    if (!generatedPrompt || !variant) {
      alert('Please build a prompt first');
      return;
    }

    setIsProcessing(true);
    try {
      // Convert string prompt to PromptData for variations
      const basePrompt: PromptData = {
        shot: generatedPrompt.substring(0, 200),
        subject: {
          variant: variant.name,
          pose: '',
          hair_color: '',
          hair_style: '',
          skin_finish: '',
          hand_and_nail_details: '',
          tattoos: '',
          piercings: '',
          body_art: '',
          nail_art: '',
          high_heels: ''
        },
        wardrobe: '',
        environment: '',
        lighting: '',
        camera: {
          focal_length: '',
          aperture: '',
          distance: '',
          angle: '',
          framing: ''
        },
        color_grade: '',
        style: '',
        quality: '',
        figure_and_form: '',
        skin_micro_details: '',
        fabric_physics: '',
        material_properties: ''
      };

      const options: VariationOptions = {
        basePrompt,
        conceptName: variant.name,
        variationType: 'complete',
        numberOfVariations: 3,
        diversityLevel: 'moderate'
      };

      const variations = await PlatinumEngine.generateConceptVariations(options, settings);

      alert(`Generated ${variations.length} AI variations! Check the batch browser.`);

      // Convert variations to concepts
      variations.forEach(v => {
        const concept: DirectorOutput = {
          conceptName: v.name,
          promptData: v.promptData,
          creativeRationale: v.changeSummary
        };
        onEnhancedConcept(concept);
      });
    } catch (error) {
      console.error('AI enhancement error:', error);
      alert(`AI enhancement failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRemixWithAI = async () => {
    if (!generatedPrompt || !variant) {
      alert('Please build a prompt first');
      return;
    }

    const direction = prompt('What would you like to change? (e.g., "make it moodier", "add more drama", "softer lighting")');
    if (!direction) return;

    setIsProcessing(true);
    try {
      // Convert string prompt to PromptData
      const basePrompt: PromptData = {
        shot: generatedPrompt.substring(0, 200),
        subject: {
          variant: variant.name,
          pose: '',
          hair_color: '',
          hair_style: '',
          skin_finish: '',
          hand_and_nail_details: '',
          tattoos: '',
          piercings: '',
          body_art: '',
          nail_art: '',
          high_heels: ''
        },
        wardrobe: '',
        environment: '',
        lighting: '',
        camera: {
          focal_length: '',
          aperture: '',
          distance: '',
          angle: '',
          framing: ''
        },
        color_grade: '',
        style: '',
        quality: '',
        figure_and_form: '',
        skin_micro_details: '',
        fabric_physics: '',
        material_properties: ''
      };

      const remixOptions: RemixOptions = {
        originalPromptData: basePrompt,
        direction,
        intensity: 'medium'
      };

      const remixed = await PlatinumEngine.remixConcept(remixOptions, settings);

      alert(`AI remix complete! "${remixed.conceptName}"\n\n${remixed.creativeRationale}`);
      onEnhancedConcept(remixed);
    } catch (error) {
      console.error('AI remix error:', error);
      alert(`AI remix failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!currentVariant || !generatedPrompt) {
    return null;
  }

  return (
    <div className="mt-4 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎨</span>
          <h3 className="text-sm font-semibold text-purple-300">AI Enhancement</h3>
        </div>
        <button
          onClick={() => setShowEnhancer(!showEnhancer)}
          className="text-xs text-gray-400 hover:text-white"
        >
          {showEnhancer ? 'Hide' : 'Show'}
        </button>
      </div>

      {showEnhancer && (
        <div className="space-y-2">
          <p className="text-xs text-gray-400 mb-3">
            Use Gemini 2.5 Pro AI to enhance this {variant?.name} concept
          </p>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleGenerateVariations}
              disabled={isProcessing}
              className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isProcessing ? '⚡ Processing...' : '🎨 Generate Variations'}
            </button>

            <button
              onClick={handleRemixWithAI}
              disabled={isProcessing}
              className="px-3 py-2 bg-pink-600 hover:bg-pink-700 text-white text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isProcessing ? '⚡ Processing...' : '🔄 AI Remix'}
            </button>
          </div>

          <div className="text-xs text-gray-500 mt-2">
            <div>• <strong>Variations:</strong> Create 3 diverse takes on this variant</div>
            <div>• <strong>Remix:</strong> Refine with natural language direction</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatinumCollectionEnhancer;
