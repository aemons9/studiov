/**
 * PLATINUM CONTROLS - Master Creative Director Interface
 *
 * Premium UI for accessing advanced AI creative features
 */

import React, { useState } from 'react';
import type { PromptData, GenerationSettings } from '../types';
import PlatinumEngine, {
  DirectorVision,
  DirectorOutput,
  VariationOptions,
  ConceptVariation,
  SmartBatchOptions,
  RemixOptions
} from '../services/platinumEngine';

interface PlatinumControlsProps {
  currentPromptData: PromptData;
  currentConceptName: string;
  settings: GenerationSettings;
  onConceptGenerated: (concept: DirectorOutput) => void;
  onVariationsGenerated: (variations: ConceptVariation[]) => void;
  onBatchGenerated: (concepts: DirectorOutput[]) => void;
}

const PlatinumControls: React.FC<PlatinumControlsProps> = ({
  currentPromptData,
  currentConceptName,
  settings,
  onConceptGenerated,
  onVariationsGenerated,
  onBatchGenerated
}) => {
  const [activeTab, setActiveTab] = useState<'director' | 'variations' | 'batch' | 'remix'>('director');
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingMessage, setProcessingMessage] = useState('');

  // Director Mode State
  const [directorVision, setDirectorVision] = useState('');
  const [directorMood, setDirectorMood] = useState('');
  const [directorPhotographer, setDirectorPhotographer] = useState('');
  const [directorIntimacy, setDirectorIntimacy] = useState(6);
  const [referenceImage, setReferenceImage] = useState<string | null>(null);

  // Variations State
  const [variationType, setVariationType] = useState<VariationOptions['variationType']>('complete');
  const [variationCount, setVariationCount] = useState(3);
  const [diversityLevel, setDiversityLevel] = useState<'subtle' | 'moderate' | 'dramatic'>('moderate');

  // Batch State
  const [batchTheme, setBatchTheme] = useState('');
  const [batchCount, setBatchCount] = useState(5);
  const [batchIntimacyMin, setBatchIntimacyMin] = useState(4);
  const [batchIntimacyMax, setBatchIntimacyMax] = useState(8);
  const [batchDiversity, setBatchDiversity] = useState<'unified' | 'eclectic'>('unified');

  // Remix State
  const [remixDirection, setRemixDirection] = useState('');
  const [remixIntensity, setRemixIntensity] = useState<'light' | 'medium' | 'heavy'>('medium');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setReferenceImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDirectorMode = async () => {
    if (!directorVision.trim()) {
      alert('Please describe your creative vision');
      return;
    }

    setIsProcessing(true);
    setProcessingMessage('AI Creative Director is conceptualizing...');

    try {
      const vision: DirectorVision = {
        description: directorVision,
        referenceImage: referenceImage || undefined,
        mood: directorMood ? directorMood.split(',').map(m => m.trim()) : undefined,
        photographerStyle: directorPhotographer || undefined,
        intimacyLevel: directorIntimacy
      };

      const concept = await PlatinumEngine.generateConceptFromVision(vision, settings);
      onConceptGenerated(concept);

      alert(`Concept "${concept.conceptName}" created!\n\n${concept.creativeRationale}`);

      // Reset form
      setDirectorVision('');
      setDirectorMood('');
      setDirectorPhotographer('');
      setReferenceImage(null);
    } catch (error) {
      console.error('Director Mode error:', error);
      alert(`Director Mode failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
      setProcessingMessage('');
    }
  };

  const handleGenerateVariations = async () => {
    setIsProcessing(true);
    setProcessingMessage(`Generating ${variationCount} creative variations...`);

    try {
      const options: VariationOptions = {
        basePrompt: currentPromptData,
        conceptName: currentConceptName,
        variationType,
        numberOfVariations: variationCount,
        diversityLevel
      };

      const variations = await PlatinumEngine.generateConceptVariations(options, settings);
      onVariationsGenerated(variations);

      alert(`Generated ${variations.length} variations of "${currentConceptName}"!`);
    } catch (error) {
      console.error('Variations error:', error);
      alert(`Variations failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
      setProcessingMessage('');
    }
  };

  const handleSmartBatch = async () => {
    if (!batchTheme.trim()) {
      alert('Please specify a collection theme');
      return;
    }

    setIsProcessing(true);
    setProcessingMessage(`Creating ${batchCount}-concept collection: "${batchTheme}"...`);

    try {
      const options: SmartBatchOptions = {
        theme: batchTheme,
        count: batchCount,
        intimacyRange: [batchIntimacyMin, batchIntimacyMax],
        diversity: batchDiversity
      };

      const concepts = await PlatinumEngine.generateSmartBatch(options, settings);
      onBatchGenerated(concepts);

      alert(`Created ${concepts.length} concepts for "${batchTheme}" collection!`);
      setBatchTheme('');
    } catch (error) {
      console.error('Smart Batch error:', error);
      alert(`Smart Batch failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
      setProcessingMessage('');
    }
  };

  const handleRemix = async () => {
    if (!remixDirection.trim()) {
      alert('Please describe what you want to change');
      return;
    }

    setIsProcessing(true);
    setProcessingMessage('Remixing concept with your creative direction...');

    try {
      const options: RemixOptions = {
        originalPromptData: currentPromptData,
        direction: remixDirection,
        intensity: remixIntensity
      };

      const remixed = await PlatinumEngine.remixConcept(options, settings);
      onConceptGenerated(remixed);

      alert(`Remixed "${currentConceptName}" → "${remixed.conceptName}"!\n\n${remixed.creativeRationale}`);
      setRemixDirection('');
    } catch (error) {
      console.error('Remix error:', error);
      alert(`Remix failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
      setProcessingMessage('');
    }
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-gray-900 to-black p-6 rounded-xl border-2 border-purple-500 shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="text-4xl">💎</div>
        <div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Platinum Engine
          </h2>
          <p className="text-sm text-gray-400">AI Creative Director Suite</p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6 border-b border-gray-700">
        {[
          { id: 'director', label: 'Director', icon: '🎬' },
          { id: 'variations', label: 'Variations', icon: '🎨' },
          { id: 'batch', label: 'Batch', icon: '📸' },
          { id: 'remix', label: 'Remix', icon: '🔄' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-t-lg font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Processing Overlay */}
      {isProcessing && (
        <div className="mb-6 p-4 bg-purple-900/50 rounded-lg border border-purple-500 flex items-center gap-3">
          <div className="animate-spin text-2xl">⚡</div>
          <div className="flex-1">
            <div className="text-purple-300 font-semibold">{processingMessage}</div>
            <div className="text-xs text-gray-400">Powered by Gemini 2.5 Pro</div>
          </div>
        </div>
      )}

      {/* Tab Content */}
      <div className="space-y-4">
        {activeTab === 'director' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-purple-300 mb-2">
                Creative Vision
              </label>
              <textarea
                value={directorVision}
                onChange={(e) => setDirectorVision(e.target.value)}
                placeholder="Describe your concept (e.g., 'A moody noir portrait in a 1940s jazz club with dramatic shadows and vintage glamour')"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                rows={4}
                disabled={isProcessing}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-purple-300 mb-2">
                  Mood Keywords (comma-separated)
                </label>
                <input
                  type="text"
                  value={directorMood}
                  onChange={(e) => setDirectorMood(e.target.value)}
                  placeholder="dramatic, elegant, mysterious"
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                  disabled={isProcessing}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-300 mb-2">
                  Photographer Style
                </label>
                <input
                  type="text"
                  value={directorPhotographer}
                  onChange={(e) => setDirectorPhotographer(e.target.value)}
                  placeholder="Helmut Newton, Annie Leibovitz..."
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                  disabled={isProcessing}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-300 mb-2">
                Intimacy Level: {directorIntimacy}/10
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={directorIntimacy}
                onChange={(e) => setDirectorIntimacy(parseInt(e.target.value))}
                className="w-full"
                disabled={isProcessing}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-300 mb-2">
                Reference Image (Optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700"
                disabled={isProcessing}
              />
              {referenceImage && (
                <img src={referenceImage} alt="Reference" className="mt-2 max-h-32 rounded-lg" />
              )}
            </div>

            <button
              onClick={handleDirectorMode}
              disabled={isProcessing || !directorVision.trim()}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              🎬 Generate Concept from Vision
            </button>
          </div>
        )}

        {activeTab === 'variations' && (
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-sm text-gray-400">Current Concept:</div>
              <div className="text-lg font-semibold text-purple-300">{currentConceptName}</div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-300 mb-2">
                Variation Type
              </label>
              <select
                value={variationType}
                onChange={(e) => setVariationType(e.target.value as any)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                disabled={isProcessing}
              >
                <option value="complete">Complete (All Elements)</option>
                <option value="lighting">Lighting Only</option>
                <option value="pose">Pose Only</option>
                <option value="wardrobe">Wardrobe Only</option>
                <option value="camera">Camera Only</option>
                <option value="mood">Mood Only</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-purple-300 mb-2">
                  Number of Variations
                </label>
                <input
                  type="number"
                  min="2"
                  max="5"
                  value={variationCount}
                  onChange={(e) => setVariationCount(parseInt(e.target.value))}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  disabled={isProcessing}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-300 mb-2">
                  Diversity Level
                </label>
                <select
                  value={diversityLevel}
                  onChange={(e) => setDiversityLevel(e.target.value as any)}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  disabled={isProcessing}
                >
                  <option value="subtle">Subtle</option>
                  <option value="moderate">Moderate</option>
                  <option value="dramatic">Dramatic</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerateVariations}
              disabled={isProcessing}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              🎨 Generate Variations
            </button>
          </div>
        )}

        {activeTab === 'batch' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-purple-300 mb-2">
                Collection Theme
              </label>
              <input
                type="text"
                value={batchTheme}
                onChange={(e) => setBatchTheme(e.target.value)}
                placeholder="e.g., 'Urban Minimalism', 'Golden Hour Elegance'"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                disabled={isProcessing}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-purple-300 mb-2">
                  Concepts to Generate
                </label>
                <input
                  type="number"
                  min="3"
                  max="10"
                  value={batchCount}
                  onChange={(e) => setBatchCount(parseInt(e.target.value))}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  disabled={isProcessing}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-purple-300 mb-2">
                  Diversity
                </label>
                <select
                  value={batchDiversity}
                  onChange={(e) => setBatchDiversity(e.target.value as any)}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  disabled={isProcessing}
                >
                  <option value="unified">Unified (Cohesive Series)</option>
                  <option value="eclectic">Eclectic (Diverse Styles)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-300 mb-2">
                Intimacy Range: {batchIntimacyMin} - {batchIntimacyMax}
              </label>
              <div className="flex gap-4 items-center">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={batchIntimacyMin}
                  onChange={(e) => setBatchIntimacyMin(Math.min(parseInt(e.target.value), batchIntimacyMax))}
                  className="flex-1"
                  disabled={isProcessing}
                />
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={batchIntimacyMax}
                  onChange={(e) => setBatchIntimacyMax(Math.max(parseInt(e.target.value), batchIntimacyMin))}
                  className="flex-1"
                  disabled={isProcessing}
                />
              </div>
            </div>

            <button
              onClick={handleSmartBatch}
              disabled={isProcessing || !batchTheme.trim()}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              📸 Generate Collection
            </button>
          </div>
        )}

        {activeTab === 'remix' && (
          <div className="space-y-4">
            <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="text-sm text-gray-400">Remixing:</div>
              <div className="text-lg font-semibold text-purple-300">{currentConceptName}</div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-300 mb-2">
                Creative Direction
              </label>
              <textarea
                value={remixDirection}
                onChange={(e) => setRemixDirection(e.target.value)}
                placeholder="e.g., 'make it moodier with deeper shadows', 'add more drama', 'simplify and go minimal'"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                rows={3}
                disabled={isProcessing}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-purple-300 mb-2">
                Remix Intensity
              </label>
              <select
                value={remixIntensity}
                onChange={(e) => setRemixIntensity(e.target.value as any)}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                disabled={isProcessing}
              >
                <option value="light">Light (Subtle refinements)</option>
                <option value="medium">Medium (Moderate changes)</option>
                <option value="heavy">Heavy (Dramatic reinterpretation)</option>
              </select>
            </div>

            <button
              onClick={handleRemix}
              disabled={isProcessing || !remixDirection.trim()}
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              🔄 Remix Concept
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlatinumControls;
