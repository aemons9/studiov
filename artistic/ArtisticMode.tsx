/**
 * ARTISTIC MODE - Main Component
 * High-fashion fine-art generation interface with master photographer styles
 * Focused on Indian model archetypes with intimacy-calibrated generation
 */

import React, { useState } from 'react';
import { ArtisticPromptEngine } from '../artistic/promptEngine';
import { IntimacyCalibrator } from '../artistic/intimacyCalibrator';
import { ArtisticQualityAssurance } from '../artistic/qualityAssurance';
import { getAllMasterStyles } from '../artistic/masterStyles';
import { getAllModelArchetypes } from '../artistic/indianModels';
import {
  GLAMOUR_WARDROBE_CATALOG,
  getWardrobeByIntimacy,
  getWardrobeByStyle,
  type WardrobeOption
} from '../artistic/wardrobeCatalog';
import {
  SCENE_PRESETS,
  getScenesByCategory,
  getScenesByIntimacy,
  getScenesByStyle,
  type ScenePreset
} from '../artistic/scenePresets';
import type {
  ArtisticGenerationConfig,
  IntimacyLevel,
  MasterStyleName,
  SafetyProfile,
  QualityPreset,
  ValidationResult
} from '../artistic/types';

interface ArtisticModeProps {
  onGenerate: (prompt: string, settings: any) => Promise<void>;
  onExit: () => void;
  onMigrateToMain: (prompt: string, config: ArtisticGenerationConfig) => void;
  generationSettings: any; // From main app
}

const ArtisticMode: React.FC<ArtisticModeProps> = ({
  onGenerate,
  onExit,
  onMigrateToMain,
  generationSettings
}) => {
  // Configuration state
  const [config, setConfig] = useState<ArtisticGenerationConfig>({
    masterStyle: 'newton',
    intimacyLevel: 7,
    safetyProfile: 'artistic',
    qualityPreset: 'gallery',
    modelArchetype: 'sensual-sophisticated',
    useWeavingEnhancement: true,
    provider: generationSettings.provider || 'flux'
  });

  // Prompt state
  const [scene, setScene] = useState('Minimalist luxury penthouse at night, floor-to-ceiling windows with city skyline');
  const [wardrobe, setWardrobe] = useState('Architectural black strappy bodysuit with geometric cutouts');
  const [lighting, setLighting] = useState('Dramatic rim lighting from city lights, high contrast chiaroscuro');
  const [composition, setComposition] = useState('Full body shot from slightly low angle, emphasizing powerful silhouette');

  // UI state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [validation, setValidation] = useState<ValidationResult | null>(null);
  const [showPromptPreview, setShowPromptPreview] = useState(false);
  const [showWardrobeSelector, setShowWardrobeSelector] = useState(false);
  const [wardrobeFilter, setWardrobeFilter] = useState<'all' | 'intimacy' | 'style'>('all');
  const [showSceneSelector, setShowSceneSelector] = useState(false);
  const [sceneFilter, setSceneFilter] = useState<'all' | 'category' | 'intimacy' | 'style'>('all');
  const [sceneCategoryFilter, setSceneCategoryFilter] = useState<ScenePreset['category']>('office');

  const masterStyles = getAllMasterStyles();
  const modelArchetypes = getAllModelArchetypes();

  // Get filtered wardrobe options
  const getFilteredWardrobeOptions = (): WardrobeOption[] => {
    if (wardrobeFilter === 'intimacy') {
      return getWardrobeByIntimacy(config.intimacyLevel);
    } else if (wardrobeFilter === 'style') {
      return getWardrobeByStyle(config.masterStyle);
    }
    return GLAMOUR_WARDROBE_CATALOG;
  };

  // Handle wardrobe selection
  const handleWardrobeSelect = (option: WardrobeOption) => {
    setWardrobe(option.artisticLanguage);
    setShowWardrobeSelector(false);
  };

  // Get filtered scene options
  const getFilteredSceneOptions = (): ScenePreset[] => {
    if (sceneFilter === 'category') {
      return getScenesByCategory(sceneCategoryFilter);
    } else if (sceneFilter === 'intimacy') {
      return getScenesByIntimacy(config.intimacyLevel);
    } else if (sceneFilter === 'style') {
      return getScenesByStyle(config.masterStyle);
    }
    return SCENE_PRESETS;
  };

  // Handle scene selection
  const handleSceneSelect = (preset: ScenePreset) => {
    setScene(preset.scene);
    setLighting(preset.lighting);
    setComposition(preset.composition);
    // Optionally suggest wardrobe from the preset
    if (preset.suggestedWardrobe.length > 0) {
      const suggestedId = preset.suggestedWardrobe[0];
      const wardrobeOption = GLAMOUR_WARDROBE_CATALOG.find(w => w.id === suggestedId);
      if (wardrobeOption) {
        setWardrobe(wardrobeOption.artisticLanguage);
      }
    }
    setShowSceneSelector(false);
  };

  // Handle configuration changes
  const handleConfigChange = (key: keyof ArtisticGenerationConfig, value: any) => {
    setConfig(prev => ({ ...prev, [key]: value }));

    // Auto-adjust intimacy when style changes
    if (key === 'masterStyle') {
      const recommended = IntimacyCalibrator.getRecommendedIntimacy(value as string);
      setConfig(prev => ({ ...prev, intimacyLevel: recommended }));
    }
  };

  // Build prompt
  const handleBuildPrompt = async () => {
    try {
      const engine = new ArtisticPromptEngine(config);
      const result = await engine.buildArtisticPrompt(scene, wardrobe, lighting, composition);

      // Apply weaving if enabled
      let finalPrompt = result.finalPrompt;
      if (config.useWeavingEnhancement && generationSettings.projectId && generationSettings.accessToken) {
        finalPrompt = await engine.applyWeavingEnhancement(
          finalPrompt,
          generationSettings.projectId,
          generationSettings.accessToken
        );
      }

      setGeneratedPrompt(finalPrompt);

      // Validate
      const validationResult = await ArtisticQualityAssurance.validatePrompt(finalPrompt);
      setValidation(validationResult);

      setShowPromptPreview(true);
    } catch (error) {
      console.error('Prompt building error:', error);
      alert(`Error building prompt: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  // Generate image
  const handleGenerate = async () => {
    if (!generatedPrompt) {
      await handleBuildPrompt();
      return;
    }

    if (validation && !validation.isValid) {
      const proceed = window.confirm(
        `Prompt has issues:\n${validation.issues.join('\n')}\n\nProceed anyway?`
      );
      if (!proceed) return;
    }

    setIsGenerating(true);
    try {
      // Get calibrated settings
      const calibratedSettings = IntimacyCalibrator.calibrateSettings(config);

      // Map artistic settings to main app settings format
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
      alert(`Generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  // Migrate to main mode
  const handleMigrateToMain = () => {
    if (!generatedPrompt) {
      alert('Please build a prompt first before migrating to main mode');
      return;
    }
    onMigrateToMain(generatedPrompt, config);
  };

  const intimacyDescription = IntimacyCalibrator.getIntimacyDescription(config.intimacyLevel);
  const intimacySuggestion = IntimacyCalibrator.getIntimacySuggestion(config.intimacyLevel, config.masterStyle);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-gray-200">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-purple-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onExit}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Exit Artistic Mode
            </button>
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                🎨 Artistic Mode
              </h1>
              <p className="text-sm text-gray-400">Master Photographer Style Generator</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Provider:</span>
            <span className="px-3 py-1 bg-purple-700 rounded-md font-semibold">
              {config.provider === 'flux' ? 'Flux 1.1 Pro' : 'Imagen 4'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Master Style Selection */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-700/30 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Master Photographer Style
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {masterStyles.map(style => (
                <button
                  key={style.name}
                  onClick={() => handleConfigChange('masterStyle', style.name)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    config.masterStyle === style.name
                      ? 'border-purple-500 bg-purple-900/30'
                      : 'border-gray-700 bg-gray-900/30 hover:border-gray-600'
                  }`}
                >
                  <div className="font-bold text-lg mb-1">{style.displayName}</div>
                  <div className="text-xs text-gray-400 mb-2">{style.description}</div>
                  <div className="flex flex-wrap gap-1">
                    {style.moodPalette.slice(0, 3).map(mood => (
                      <span key={mood} className="text-xs px-2 py-0.5 bg-purple-700/30 rounded">
                        {mood}
                      </span>
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Model Archetype Selection */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-700/30 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              Indian Model Archetype
            </h2>

            <select
              value={config.modelArchetype}
              onChange={(e) => handleConfigChange('modelArchetype', e.target.value)}
              className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-gray-200"
            >
              {modelArchetypes.map(archetype => (
                <option key={archetype.id} value={archetype.id}>
                  {archetype.name} - {archetype.description}
                </option>
              ))}
            </select>

            <div className="mt-3 text-sm text-gray-400">
              {modelArchetypes.find(a => a.id === config.modelArchetype)?.styleContext}
            </div>
          </div>

          {/* Intimacy Level Controller */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-700/30 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
              Intimacy Level: {config.intimacyLevel}
            </h2>

            <input
              type="range"
              min="1"
              max="10"
              value={config.intimacyLevel}
              onChange={(e) => handleConfigChange('intimacyLevel', parseInt(e.target.value) as IntimacyLevel)}
              className="w-full h-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg appearance-none cursor-pointer"
            />

            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>1 (Professional)</span>
              <span>5 (Artistic)</span>
              <span>10 (Maximum)</span>
            </div>

            <div className="mt-4 p-3 bg-purple-900/30 rounded-lg border border-purple-700/30">
              <div className="text-sm font-semibold text-purple-300 mb-1">
                Level {config.intimacyLevel} Description:
              </div>
              <div className="text-sm text-gray-300">{intimacyDescription}</div>
            </div>

            {intimacySuggestion && (
              <div className="mt-3 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30 text-sm text-yellow-300">
                💡 {intimacySuggestion}
              </div>
            )}
          </div>

          {/* Scene Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-700/30 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Scene Details</h2>
              <button
                onClick={() => setShowSceneSelector(true)}
                className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 rounded text-sm font-semibold transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Browse Scene Presets
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Scene & Environment</label>
                <textarea
                  value={scene}
                  onChange={(e) => setScene(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-gray-200 h-20"
                  placeholder="Describe the setting or select from presets..."
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-semibold">Wardrobe</label>
                  <button
                    onClick={() => setShowWardrobeSelector(true)}
                    className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs font-semibold transition-colors flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                    Browse Catalog
                  </button>
                </div>
                <textarea
                  value={wardrobe}
                  onChange={(e) => setWardrobe(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-gray-200 h-20"
                  placeholder="Describe the clothing or select from catalog..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Lighting</label>
                <textarea
                  value={lighting}
                  onChange={(e) => setLighting(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-gray-200 h-20"
                  placeholder="Describe the lighting..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Composition</label>
                <textarea
                  value={composition}
                  onChange={(e) => setComposition(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-gray-200 h-20"
                  placeholder="Describe the framing and angle..."
                />
              </div>
            </div>
          </div>

          {/* Additional Settings */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-700/30 p-6">
            <h2 className="text-xl font-bold mb-4">Additional Settings</h2>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Safety Profile</label>
                <select
                  value={config.safetyProfile}
                  onChange={(e) => handleConfigChange('safetyProfile', e.target.value as SafetyProfile)}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg p-2 text-gray-200"
                >
                  <option value="conservative">Conservative</option>
                  <option value="balanced">Balanced</option>
                  <option value="artistic">Artistic</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Quality Preset</label>
                <select
                  value={config.qualityPreset}
                  onChange={(e) => handleConfigChange('qualityPreset', e.target.value as QualityPreset)}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg p-2 text-gray-200"
                >
                  <option value="standard">Standard</option>
                  <option value="premium">Premium</option>
                  <option value="gallery">Gallery</option>
                </select>
              </div>

              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config.useWeavingEnhancement}
                    onChange={(e) => handleConfigChange('useWeavingEnhancement', e.target.checked)}
                    className="w-5 h-5 rounded border-gray-600"
                  />
                  <span className="text-sm font-semibold">Weaving Enhancement</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Actions & Preview */}
        <div className="space-y-6">
          {/* Actions */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-700/30 p-6">
            <button
              onClick={handleBuildPrompt}
              disabled={isGenerating}
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 rounded-lg font-semibold transition-colors mb-3"
            >
              Build Prompt
            </button>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !generatedPrompt}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-700 disabled:to-gray-700 rounded-lg font-semibold transition-colors mb-3"
            >
              {isGenerating ? 'Generating...' : 'Generate Image'}
            </button>

            <button
              onClick={handleMigrateToMain}
              disabled={!generatedPrompt}
              className="w-full py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:opacity-50 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
              </svg>
              Migrate to Main Mode
            </button>
          </div>

          {/* Validation Results */}
          {validation && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-700/30 p-6">
              <h3 className="font-bold mb-3">Quality Score: {validation.score}/100</h3>
              <div className="text-sm text-gray-400 mb-3">
                {ArtisticQualityAssurance.getScoreInterpretation(validation.score)}
              </div>

              {validation.issues.length > 0 && (
                <div className="mb-3">
                  <div className="text-red-400 font-semibold mb-1">Issues:</div>
                  {validation.issues.map((issue, i) => (
                    <div key={i} className="text-sm text-red-300">• {issue}</div>
                  ))}
                </div>
              )}

              {validation.warnings.length > 0 && (
                <div>
                  <div className="text-yellow-400 font-semibold mb-1">Warnings:</div>
                  {validation.warnings.map((warning, i) => (
                    <div key={i} className="text-sm text-yellow-300">• {warning}</div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Prompt Preview */}
          {generatedPrompt && showPromptPreview && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-700/30 p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold">Generated Prompt</h3>
                <button
                  onClick={() => setShowPromptPreview(!showPromptPreview)}
                  className="text-sm text-purple-400 hover:text-purple-300"
                >
                  {showPromptPreview ? 'Hide' : 'Show'}
                </button>
              </div>
              <div className="text-sm text-gray-300 max-h-96 overflow-y-auto bg-gray-900/50 p-3 rounded">
                {generatedPrompt}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Scene Presets Modal */}
      {showSceneSelector && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg border border-purple-700 p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Scene Presets Catalog
                </h2>
                <button
                  onClick={() => setShowSceneSelector(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Filter Options */}
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="text-sm font-semibold text-gray-400">Filter:</span>
                <button
                  onClick={() => setSceneFilter('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    sceneFilter === 'all'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  All ({SCENE_PRESETS.length})
                </button>
                <button
                  onClick={() => setSceneFilter('category')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    sceneFilter === 'category'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  By Category
                </button>
                <button
                  onClick={() => setSceneFilter('intimacy')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    sceneFilter === 'intimacy'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Intimacy {config.intimacyLevel} ({getScenesByIntimacy(config.intimacyLevel).length})
                </button>
                <button
                  onClick={() => setSceneFilter('style')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    sceneFilter === 'style'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {masterStyles.find(s => s.name === config.masterStyle)?.displayName} ({getScenesByStyle(config.masterStyle).length})
                </button>

                {/* Category filter dropdown */}
                {sceneFilter === 'category' && (
                  <select
                    value={sceneCategoryFilter}
                    onChange={(e) => setSceneCategoryFilter(e.target.value as ScenePreset['category'])}
                    className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-sm"
                  >
                    <option value="office">Office ({getScenesByCategory('office').length})</option>
                    <option value="boudoir">Boudoir ({getScenesByCategory('boudoir').length})</option>
                    <option value="urban">Urban ({getScenesByCategory('urban').length})</option>
                    <option value="studio">Studio ({getScenesByCategory('studio').length})</option>
                    <option value="natural">Natural ({getScenesByCategory('natural').length})</option>
                  </select>
                )}
              </div>

              {/* Scene Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
                {getFilteredSceneOptions().map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => handleSceneSelect(preset)}
                    className="text-left p-5 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-purple-500 rounded-lg transition-all group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-white group-hover:text-purple-300 transition-colors">
                          {preset.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-0.5 bg-gray-700 rounded capitalize">
                            {preset.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            Intimacy: {Math.min(...preset.intimacyLevel)}-{Math.max(...preset.intimacyLevel)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-3">
                      {preset.description}
                    </p>

                    {/* Scene Details Preview */}
                    <div className="space-y-2 mb-3">
                      <div className="bg-gray-900/50 rounded p-2">
                        <div className="text-xs text-purple-300 font-semibold mb-1">Scene:</div>
                        <p className="text-xs text-gray-300 line-clamp-2">{preset.scene}</p>
                      </div>
                      <div className="bg-gray-900/50 rounded p-2">
                        <div className="text-xs text-purple-300 font-semibold mb-1">Lighting:</div>
                        <p className="text-xs text-gray-300 line-clamp-2">{preset.lighting}</p>
                      </div>
                    </div>

                    {/* Technical Specs */}
                    <div className="flex flex-wrap gap-1 mb-2">
                      <span className="text-xs px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded">
                        {preset.technicalSpecs.camera}
                      </span>
                      <span className="text-xs px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded">
                        {preset.technicalSpecs.lens}
                      </span>
                    </div>

                    {/* Master Style Tags */}
                    <div className="flex flex-wrap gap-1">
                      {preset.masterStyleFit.map(style => (
                        <span key={style} className="text-xs px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded capitalize">
                          {style}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              {getFilteredSceneOptions().length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No scene presets match the current filter.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Wardrobe Catalog Modal */}
      {showWardrobeSelector && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg border border-purple-700 p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Glamour Wardrobe Catalog
                </h2>
                <button
                  onClick={() => setShowWardrobeSelector(false)}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Filter Options */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-semibold text-gray-400">Filter:</span>
                <button
                  onClick={() => setWardrobeFilter('all')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    wardrobeFilter === 'all'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  All ({GLAMOUR_WARDROBE_CATALOG.length})
                </button>
                <button
                  onClick={() => setWardrobeFilter('intimacy')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    wardrobeFilter === 'intimacy'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  Intimacy Level {config.intimacyLevel} ({getWardrobeByIntimacy(config.intimacyLevel).length})
                </button>
                <button
                  onClick={() => setWardrobeFilter('style')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    wardrobeFilter === 'style'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {masterStyles.find(s => s.name === config.masterStyle)?.displayName} Style ({getWardrobeByStyle(config.masterStyle).length})
                </button>
              </div>

              {/* Wardrobe Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto pr-2">
                {getFilteredWardrobeOptions().map(option => (
                  <button
                    key={option.id}
                    onClick={() => handleWardrobeSelect(option)}
                    className="text-left p-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-purple-500 rounded-lg transition-all group"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-white group-hover:text-purple-300 transition-colors">
                          {option.name}
                        </h3>
                        <div className="text-xs text-gray-400 mt-1 capitalize">
                          {option.category.replace(/-/g, ' ')}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        {/* Coverage Level Indicator */}
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map(level => (
                            <div
                              key={level}
                              className={`w-2 h-2 rounded-full ${
                                level <= option.coverageLevel
                                  ? 'bg-purple-500'
                                  : 'bg-gray-600'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">
                          Coverage {option.coverageLevel}/5
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                      {option.description}
                    </p>

                    {/* Artistic Language (shown on hover or always) */}
                    <div className="bg-gray-900/50 rounded p-2 mb-3">
                      <div className="text-xs text-purple-300 font-semibold mb-1">
                        Artistic Description:
                      </div>
                      <p className="text-xs text-gray-300 line-clamp-3">
                        {option.artisticLanguage}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {/* Intimacy Tags */}
                      <span className="text-xs px-2 py-0.5 bg-blue-900/30 text-blue-300 rounded">
                        Intimacy: {Math.min(...option.suitableForIntimacy)}-{Math.max(...option.suitableForIntimacy)}
                      </span>
                      {/* Style Tags */}
                      {option.masterStyleFit.slice(0, 2).map(style => (
                        <span key={style} className="text-xs px-2 py-0.5 bg-purple-900/30 text-purple-300 rounded capitalize">
                          {style}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>

              {getFilteredWardrobeOptions().length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  No wardrobe options match the current filter.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtisticMode;
