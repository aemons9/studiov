/**
 * PLATINUM COLLECTION MODE - Main Component
 * Next-level premium Indian model variants with evening/midnight focus
 * Sophisticated UI with bidirectional JSON transfer
 */

import React, { useState } from 'react';
import { PlatinumPromptEngine } from './promptEngine';
import { PLATINUM_VARIANTS, getAllPlatinumVariants } from './platinumCollections';
import type { PlatinumModeState, PlatinumVariantId } from './types';

interface PlatinumModeProps {
  onGenerate: (prompt: string, settings: any) => Promise<void>;
  onMigrateToMain: (prompt: string, state: PlatinumModeState) => void;
  onExit: () => void;
  generationSettings: any;
}

const PlatinumMode: React.FC<PlatinumModeProps> = ({
  onGenerate,
  onMigrateToMain,
  onExit,
  generationSettings
}) => {
  const [state, setState] = useState<PlatinumModeState>({
    selectedVariant: null,
    selectedWardrobe: null,
    selectedEnvironment: null,
    timeOfDay: 'midnight',
    intimacyLevel: 8,
    customPose: '',
    customDetails: '',
    usePhotographerSettings: true
  });

  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPromptPreview, setShowPromptPreview] = useState(false);

  const promptEngine = new PlatinumPromptEngine();
  const variants = getAllPlatinumVariants();
  const selectedVariant = state.selectedVariant ? PLATINUM_VARIANTS.find(v => v.id === state.selectedVariant) : null;

  const handleVariantSelect = (variantId: PlatinumVariantId) => {
    const variant = PLATINUM_VARIANTS.find(v => v.id === variantId);
    setState({
      ...state,
      selectedVariant: variantId,
      selectedWardrobe: null,
      selectedEnvironment: variant?.privateEnvironments[0]?.id || null,
      timeOfDay: variant?.defaultTimeOfDay || 'midnight'
    });
  };

  const handleBuildPrompt = () => {
    if (!state.selectedVariant) {
      alert('Please select a variant first');
      return;
    }

    try {
      const prompt = promptEngine.generatePrompt(state);
      setGeneratedPrompt(prompt);
      setShowPromptPreview(true);
    } catch (error) {
      console.error('Error building prompt:', error);
      alert(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleGenerate = async () => {
    if (!generatedPrompt) {
      handleBuildPrompt();
      return;
    }

    setIsGenerating(true);
    try {
      const calibratedSettings = promptEngine.calibrateSettings(state, generationSettings.provider);

      const mappedSettings = {
        safetySetting: calibratedSettings.imagenSafetyFilter,
        personGeneration: calibratedSettings.imagenPersonGeneration,
        fluxSafetyTolerance: calibratedSettings.fluxSafetyTolerance,
        fluxRawMode: calibratedSettings.fluxRawMode,
        fluxGuidanceScale: calibratedSettings.fluxGuidanceScale,
        aspectRatio: calibratedSettings.aspectRatio,
        numberOfImages: calibratedSettings.numberOfImages
      };

      await onGenerate(generatedPrompt, mappedSettings);
    } catch (error) {
      console.error('Generation error:', error);
      alert('Generation failed. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleMigrateToMain = () => {
    if (!generatedPrompt || !state.selectedVariant) {
      alert('Please build a prompt first before migrating');
      return;
    }
    onMigrateToMain(generatedPrompt, state);
  };

  const timeOptions = [
    { value: 'golden-hour' as const, label: '🌅 Golden Hour', color: '#F59E0B' },
    { value: 'dusk' as const, label: '🌆 Dusk', color: '#8B5CF6' },
    { value: 'evening' as const, label: '🌃 Evening', color: '#6366F1' },
    { value: 'midnight' as const, label: '🌙 Midnight', color: '#3B82F6' },
    { value: 'late-night' as const, label: '✨ Late Night', color: '#1E40AF' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-gray-200">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-purple-500 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
              💎 PLATINUM COLLECTION
            </h1>
            <p className="text-sm text-gray-400 mt-1">Next-Level Premium Evening & Midnight Photography</p>
          </div>
          <button
            onClick={onExit}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
          >
            ← Back to Classic Mode
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Variant Selector */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-purple-300">Select Your Variant</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => handleVariantSelect(variant.id)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  state.selectedVariant === variant.id
                    ? 'border-purple-400 bg-purple-900/50 shadow-lg shadow-purple-500/50'
                    : 'border-gray-700 bg-gray-800/30 hover:border-purple-600'
                }`}
              >
                <div className="text-2xl mb-2">{variant.id.includes('fitness') ? '💪' : variant.id.includes('graphic') ? '🎨' : variant.id.includes('spa') ? '💧' : variant.id.includes('club') ? '🎵' : '✨'}</div>
                <div className="font-bold text-sm mb-1">{variant.name}</div>
                <div className="text-xs text-gray-400">{variant.category}</div>
                <div className="text-xs text-purple-400 mt-2">{variant.physicalTraits.curves.emphasis.replace('-', ' ')}</div>
              </button>
            ))}
          </div>
        </div>

        {selectedVariant && (
          <>
            {/* Configuration Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              {/* Time of Day */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h3 className="font-bold mb-3 text-purple-300">Time of Day</h3>
                <div className="space-y-2">
                  {timeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setState({ ...state, timeOfDay: option.value })}
                      className={`w-full p-3 rounded-lg transition-all text-left ${
                        state.timeOfDay === option.value
                          ? 'bg-purple-600 shadow-lg'
                          : 'bg-gray-700 hover:bg-gray-600'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Intimacy Level */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h3 className="font-bold mb-3 text-purple-300">Intimacy Level: {state.intimacyLevel}/10</h3>
                <input
                  type="range"
                  min="6"
                  max="10"
                  value={state.intimacyLevel}
                  onChange={(e) => setState({ ...state, intimacyLevel: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>Seductive</span>
                  <span>Provocative</span>
                  <span>Explicit</span>
                </div>
                {state.intimacyLevel >= 9 && (
                  <div className="mt-2 text-xs text-yellow-400">⚠️ Premium Tier - Maximum Artistic</div>
                )}
              </div>

              {/* Photographer Settings */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h3 className="font-bold mb-3 text-purple-300">Photographer</h3>
                <div className="text-sm text-gray-300 mb-3">
                  <div className="font-semibold">{selectedVariant.personalPhotographer.name}</div>
                  <div className="text-xs text-gray-400">{selectedVariant.personalPhotographer.specialty}</div>
                </div>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={state.usePhotographerSettings}
                    onChange={(e) => setState({ ...state, usePhotographerSettings: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">Use Photographer's Settings</span>
                </label>
                <div className="text-xs text-gray-400 mt-2">
                  Optimized for: {selectedVariant.optimizedFor.map(o => o.charAt(0).toUpperCase() + o.slice(1)).join(' & ')}
                </div>
              </div>
            </div>

            {/* Wardrobe Selector */}
            {selectedVariant.wardrobeCollection && selectedVariant.wardrobeCollection.length > 0 && (
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mb-6">
                <h3 className="font-bold mb-3 text-purple-300">Wardrobe Collection</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedVariant.wardrobeCollection
                    .filter(w => w.suitableFor.includes(state.timeOfDay))
                    .map((wardrobe) => (
                      <button
                        key={wardrobe.id}
                        onClick={() => setState({ ...state, selectedWardrobe: wardrobe.id })}
                        className={`p-3 rounded-lg border text-left transition-all ${
                          state.selectedWardrobe === wardrobe.id
                            ? 'border-purple-400 bg-purple-900/50'
                            : 'border-gray-600 bg-gray-700/30 hover:border-purple-600'
                        }`}
                      >
                        <div className="font-semibold text-sm mb-1">{wardrobe.name}</div>
                        <div className="text-xs text-gray-400 mb-2">{wardrobe.description.substring(0, 80)}...</div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-purple-400">Intimacy {wardrobe.intimacyLevel}/10</span>
                          <span className="text-gray-500">{wardrobe.coverage}</span>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* Custom Details */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mb-6">
              <h3 className="font-bold mb-3 text-purple-300">Custom Details (Optional)</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Custom Pose</label>
                  <input
                    type="text"
                    value={state.customPose}
                    onChange={(e) => setState({ ...state, customPose: e.target.value })}
                    placeholder="Leave empty for photographer's default"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Additional Details</label>
                  <input
                    type="text"
                    value={state.customDetails}
                    onChange={(e) => setState({ ...state, customDetails: e.target.value })}
                    placeholder="Any additional creative details"
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleBuildPrompt}
                className="flex-1 py-4 bg-purple-600 hover:bg-purple-500 rounded-lg font-bold text-lg transition-all shadow-lg"
              >
                ✨ Build Platinum Prompt
              </button>
              {generatedPrompt && (
                <>
                  <button
                    onClick={handleGenerate}
                    disabled={isGenerating}
                    className="flex-1 py-4 bg-pink-600 hover:bg-pink-500 disabled:bg-gray-600 rounded-lg font-bold text-lg transition-all shadow-lg"
                  >
                    {isGenerating ? 'Generating...' : '🎨 Generate Now'}
                  </button>
                  <button
                    onClick={handleMigrateToMain}
                    className="flex-1 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-bold text-lg transition-all shadow-lg"
                  >
                    🔄 Migrate to JSON Mode
                  </button>
                </>
              )}
            </div>

            {/* Prompt Preview */}
            {showPromptPreview && generatedPrompt && (
              <div className="mt-6 bg-gray-800/70 rounded-lg p-4 border border-purple-500">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-purple-300">Generated Prompt Preview</h3>
                  <button
                    onClick={() => setShowPromptPreview(false)}
                    className="text-gray-400 hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>
                <div className="text-sm text-gray-300 whitespace-pre-wrap max-h-96 overflow-y-auto bg-black/30 p-4 rounded">
                  {generatedPrompt}
                </div>
              </div>
            )}
          </>
        )}

        {!selectedVariant && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💎</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-2">Welcome to Platinum Collection</h3>
            <p className="text-gray-400">Select a variant above to begin your premium photography session</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatinumMode;
