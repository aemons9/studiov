/**
 * CORPORATE MODE - Main Component
 * State-of-the-art corporate power and sensuality generation interface
 */

import React, { useState } from 'react';
import { CorporatePromptEngine, validateCorporatePrompt } from './promptEngine';
import { CORPORATE_ROLES } from './corporateRoles';
import { OFFICE_ENVIRONMENTS } from './corporateEnvironments';
import { CORPORATE_WARDROBE_CATALOG } from './corporateWardrobe';
import type {
  CorporatePowerState,
  CorporateRole,
  OfficeEnvironmentType,
  ArtisticExplicitness,
  PowerDynamic,
  CorporateValidationResult
} from './types';

interface CorporateModeProps {
  onGenerate: (prompt: string, settings: any) => Promise<void>;
  onExit: () => void;
  generationSettings: any;
}

const CorporateMode: React.FC<CorporateModeProps> = ({
  onGenerate,
  onExit,
  generationSettings
}) => {
  // Corporate state
  const [corporateState, setCorporateState] = useState<CorporatePowerState>({
    selectedRole: null,
    selectedEnvironment: null,
    intimacyCalibration: {
      level: 7,
      artisticExplicitness: 'revealing',
      powerDynamic: 'dominant',
      wardrobeReveal: 7
    },
    modelVariant: 'modern-power'
  });

  // UI state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
  const [validation, setValidation] = useState<CorporateValidationResult | null>(null);
  const [showPromptPreview, setShowPromptPreview] = useState(false);
  const [showWardrobeSelector, setShowWardrobeSelector] = useState(false);

  const promptEngine = new CorporatePromptEngine();

  // Handle configuration changes
  const handleRoleChange = (role: CorporateRole) => {
    setCorporateState(prev => ({
      ...prev,
      selectedRole: role
    }));
  };

  const handleEnvironmentChange = (env: OfficeEnvironmentType) => {
    setCorporateState(prev => ({
      ...prev,
      selectedEnvironment: env
    }));
  };

  const handleIntimacyChange = (level: number) => {
    setCorporateState(prev => ({
      ...prev,
      intimacyCalibration: {
        ...prev.intimacyCalibration,
        level
      }
    }));
  };

  const handleExplicitnessChange = (explicitness: ArtisticExplicitness) => {
    setCorporateState(prev => ({
      ...prev,
      intimacyCalibration: {
        ...prev.intimacyCalibration,
        artisticExplicitness: explicitness
      }
    }));
  };

  const handlePowerDynamicChange = (dynamic: PowerDynamic) => {
    setCorporateState(prev => ({
      ...prev,
      intimacyCalibration: {
        ...prev.intimacyCalibration,
        powerDynamic: dynamic
      }
    }));
  };

  // Build prompt
  const handleBuildPrompt = () => {
    try {
      const prompt = promptEngine.generatePrompt(corporateState);
      setGeneratedPrompt(prompt);

      // Validate
      const validationResult = validateCorporatePrompt(prompt);
      setValidation({
        ...validationResult,
        warnings: validationResult.score < 80 ? ['Prompt quality could be improved'] : [],
        suggestions: validationResult.score < 70 ? ['Consider adjusting intimacy level or power dynamic'] : []
      });

      setShowPromptPreview(true);
    } catch (error) {
      console.error('Prompt building error:', error);
      alert(`Error building prompt: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  // Generate image
  const handleGenerate = async () => {
    if (!generatedPrompt) {
      handleBuildPrompt();
      return;
    }

    if (validation && !validation.isValid) {
      const proceed = window.confirm(
        `Prompt has issues:\\n${validation.issues.join('\\n')}\\n\\nProceed anyway?`
      );
      if (!proceed) return;
    }

    setIsGenerating(true);
    try {
      const calibratedSettings = promptEngine.calibrateSettings(corporateState, generationSettings.provider);

      await onGenerate(generatedPrompt, {
        ...generationSettings,
        ...calibratedSettings
      });
    } catch (error) {
      console.error('Generation error:', error);
      alert(`Generation failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-black text-gray-200">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-indigo-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onExit}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Exit Corporate Mode
            </button>
            <div>
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
                💼 Corporate Power Mode
              </h1>
              <p className="text-sm text-gray-400">Executive Sensuality Generator</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Provider:</span>
            <span className="px-3 py-1 bg-indigo-700 rounded-md font-semibold">
              {generationSettings.provider === 'vertex-ai' ? 'Imagen 4' : 'Flux 1.1 Pro'}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Corporate Role Selection */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-indigo-700/30 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              Corporate Role
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {CORPORATE_ROLES.map(role => (
                <button
                  key={role.role}
                  onClick={() => handleRoleChange(role.role)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    corporateState.selectedRole === role.role
                      ? 'border-indigo-500 bg-indigo-900/30'
                      : 'border-gray-700 bg-gray-900/30 hover:border-gray-600'
                  }`}
                >
                  <div className="font-bold text-sm mb-1 capitalize">
                    {role.role.replace('_', ' ')}
                  </div>
                  <div className="text-xs text-gray-400">
                    Power: {role.powerLevel}/10
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Office Environment Selection */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-indigo-700/30 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              Office Environment
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {OFFICE_ENVIRONMENTS.map(env => (
                <button
                  key={env.type}
                  onClick={() => handleEnvironmentChange(env.type)}
                  className={`p-3 rounded-lg border-2 transition-all text-left ${
                    corporateState.selectedEnvironment === env.type
                      ? 'border-emerald-500 bg-emerald-900/30'
                      : 'border-gray-700 bg-gray-900/30 hover:border-gray-600'
                  }`}
                >
                  <div className="font-bold text-sm mb-1 capitalize">
                    {env.type.replace('_', ' ')}
                  </div>
                  <div className="text-xs text-gray-400">
                    Luxury: {env.luxuryLevel}/10
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Intimacy & Power Calibration */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-indigo-700/30 p-6">
            <h2 className="text-xl font-bold mb-4">Intimacy & Power Calibration</h2>

            {/* Intimacy Slider */}
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">
                Intimacy Level: {corporateState.intimacyCalibration.level}/10
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={corporateState.intimacyCalibration.level}
                onChange={(e) => handleIntimacyChange(parseInt(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Professional</span>
                <span>Balanced</span>
                <span>Explicit</span>
              </div>
            </div>

            {/* Artistic Explicitness */}
            <div className="mb-4">
              <label className="block text-sm text-gray-400 mb-2">Artistic Explicitness</label>
              <div className="grid grid-cols-4 gap-2">
                {(['minimal', 'suggestive', 'revealing', 'artistically_explicit'] as ArtisticExplicitness[]).map(level => (
                  <button
                    key={level}
                    onClick={() => handleExplicitnessChange(level)}
                    className={`p-2 rounded text-xs transition-all ${
                      corporateState.intimacyCalibration.artisticExplicitness === level
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {level.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Power Dynamic */}
            <div>
              <label className="block text-sm text-gray-400 mb-2">Power Dynamic</label>
              <div className="grid grid-cols-3 gap-2">
                {(['submissive', 'balanced', 'dominant'] as PowerDynamic[]).map(dynamic => (
                  <button
                    key={dynamic}
                    onClick={() => handlePowerDynamicChange(dynamic)}
                    className={`p-2 rounded text-sm transition-all ${
                      corporateState.intimacyCalibration.powerDynamic === dynamic
                        ? 'bg-orange-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {dynamic}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Actions & Preview */}
        <div className="space-y-6">
          {/* Actions */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-indigo-700/30 p-6">
            <button
              onClick={handleBuildPrompt}
              disabled={isGenerating || !corporateState.selectedRole || !corporateState.selectedEnvironment}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-700 rounded-lg font-semibold transition-colors mb-3"
            >
              Build Prompt
            </button>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !generatedPrompt}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 disabled:from-gray-700 disabled:to-gray-700 rounded-lg font-semibold transition-colors"
            >
              {isGenerating ? 'Generating...' : 'Generate Corporate Image'}
            </button>
          </div>

          {/* Validation Results */}
          {validation && (
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-indigo-700/30 p-6">
              <h3 className="font-bold mb-3">Quality Score: {validation.score}/100</h3>

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
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-indigo-700/30 p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold">Generated Prompt</h3>
                <button
                  onClick={() => setShowPromptPreview(!showPromptPreview)}
                  className="text-sm text-indigo-400 hover:text-indigo-300"
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
    </div>
  );
};

export default CorporateMode;
