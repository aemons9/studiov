/**
 * PLATINUM SUITE - Unified Creative Director & Model Collections
 *
 * Combines:
 * - AI Creative Director (Gemini 2.5 Pro)
 * - Platinum Model Collections (10 Indian variants)
 * - AI Enhancement of collection variants
 */

import React, { useState } from 'react';
import type { PromptData, GenerationSettings } from '../types';
import PlatinumControls from './PlatinumControls';
import PlatinumCollectionMode from '../platinum/PlatinumMode';
import PlatinumEngine from '../services/platinumEngine';
import type { DirectorOutput, ConceptVariation, VariationOptions, RemixOptions } from '../services/platinumEngine';
import type { PlatinumModeState } from '../platinum/types';

interface PlatinumSuiteProps {
  currentPromptData: PromptData;
  currentConceptName: string;
  settings: GenerationSettings;
  onConceptGenerated: (concept: DirectorOutput) => void;
  onVariationsGenerated: (variations: ConceptVariation[]) => void;
  onBatchGenerated: (concepts: DirectorOutput[]) => void;
  onGenerate: (prompt: string, settings: any) => Promise<void>;
  onClose: () => void;
  isLoading: boolean;
}

type PlatinumMode = 'ai-director' | 'collections';

const PlatinumSuite: React.FC<PlatinumSuiteProps> = ({
  currentPromptData,
  currentConceptName,
  settings,
  onConceptGenerated,
  onVariationsGenerated,
  onBatchGenerated,
  onGenerate,
  onClose,
  isLoading
}) => {
  const [activeMode, setActiveMode] = useState<PlatinumMode>('ai-director');

  const handleMigrateFromCollection = (prompt: string, state: PlatinumModeState) => {
    // When user migrates from collection mode, convert to PromptData format
    // and send to main editor
    console.log('Migrating from collection mode:', prompt);

    // For now, create a concept from the prompt string
    const concept: DirectorOutput = {
      conceptName: state.selectedVariant ? `Platinum Collection: ${state.selectedVariant}` : 'Platinum Concept',
      promptData: currentPromptData, // Would need proper parsing
      creativeRationale: 'Migrated from Platinum Collection Mode'
    };

    onConceptGenerated(concept);
  };

  // AI Enhancement for Collections
  const handleEnhanceCollection = async (basePrompt: PromptData, conceptName: string, mode: 'variations' | 'remix') => {
    if (mode === 'variations') {
      const options: VariationOptions = {
        basePrompt,
        conceptName,
        variationType: 'complete',
        numberOfVariations: 3,
        diversityLevel: 'moderate'
      };

      try {
        const variations = await PlatinumEngine.generateConceptVariations(options, settings);
        onVariationsGenerated(variations);
      } catch (error) {
        console.error('AI enhancement error:', error);
        alert(`Enhancement failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    } else if (mode === 'remix') {
      const direction = prompt('What would you like to change? (e.g., "make it moodier", "add more drama")');
      if (!direction) return;

      const remixOptions: RemixOptions = {
        originalPromptData: basePrompt,
        direction,
        intensity: 'medium'
      };

      try {
        const remixed = await PlatinumEngine.remixConcept(remixOptions, settings);
        onConceptGenerated(remixed);
      } catch (error) {
        console.error('AI remix error:', error);
        alert(`Remix failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Mode Selector */}
      <div className="flex gap-2 mb-6 p-1 bg-gray-800 rounded-lg">
        <button
          onClick={() => setActiveMode('ai-director')}
          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
            activeMode === 'ai-director'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
              : 'bg-transparent text-gray-400 hover:text-white'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">🎬</span>
            <div>
              <div className="text-sm">AI Creative Director</div>
              <div className="text-xs opacity-75">Vision, Variations, Batch, Remix</div>
            </div>
          </div>
        </button>

        <button
          onClick={() => setActiveMode('collections')}
          className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all ${
            activeMode === 'collections'
              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
              : 'bg-transparent text-gray-400 hover:text-white'
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">📚</span>
            <div>
              <div className="text-sm">Model Collections</div>
              <div className="text-xs opacity-75">10 Indian Variants + Ecosystems</div>
            </div>
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {activeMode === 'ai-director' ? (
          <PlatinumControls
            currentPromptData={currentPromptData}
            currentConceptName={currentConceptName}
            settings={settings}
            onConceptGenerated={onConceptGenerated}
            onVariationsGenerated={onVariationsGenerated}
            onBatchGenerated={onBatchGenerated}
          />
        ) : (
          <PlatinumCollectionMode
            onGenerate={onGenerate}
            onMigrateToMain={handleMigrateFromCollection}
            onExit={onClose}
            generationSettings={settings}
          />
        )}
      </div>

      {/* Footer Info */}
      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-purple-400">⚡</span>
              <span>Powered by Gemini 2.5 Pro</span>
            </div>
            {activeMode === 'collections' && (
              <div className="flex items-center gap-1">
                <span className="text-pink-400">💎</span>
                <span>10 Premium Variants</span>
              </div>
            )}
          </div>
          <div className="text-right">
            <div className="text-purple-300 font-semibold">
              {activeMode === 'ai-director' ? 'AI Creative Director' : 'Platinum Collections'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatinumSuite;
