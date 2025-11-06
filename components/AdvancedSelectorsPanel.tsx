import React, { useState } from 'react';
import { intimateWeavingStrategies } from '../concepts/intimateWeavingStrategies';
import { sensualWardrobeCollection } from '../concepts/sensualWardrobeCollection';
import { imageQualityPresets } from '../concepts/imageQualityPresets';

export interface AdvancedSelections {
  intimateWeaving?: { enabled: boolean; strategy: string; };
  wardrobeSelection?: { enabled: boolean; option: string; };
  qualityPreset?: { enabled: boolean; preset: string; };
}

interface AdvancedSelectorsPanelProps {
  onSelectionsChange: (selections: AdvancedSelections) => void;
  isLoading: boolean;
}

const AdvancedSelectorsPanel: React.FC<AdvancedSelectorsPanelProps> = ({ onSelectionsChange, isLoading }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [intimateWeavingEnabled, setIntimateWeavingEnabled] = useState(false);
  const [wardrobeEnabled, setWardrobeEnabled] = useState(false);
  const [qualityEnabled, setQualityEnabled] = useState(false);

  const [selectedStrategy, setSelectedStrategy] = useState(intimateWeavingStrategies[0].name);
  const [selectedWardrobe, setSelectedWardrobe] = useState(sensualWardrobeCollection[0].name);
  const [selectedQuality, setSelectedQuality] = useState(imageQualityPresets[0].name);

  const handleChange = (
    iwEnabled: boolean, wEnabled: boolean, qEnabled: boolean,
    strategy: string, wardrobe: string, quality: string
  ) => {
    onSelectionsChange({
      intimateWeaving: iwEnabled ? { enabled: true, strategy } : undefined,
      wardrobeSelection: wEnabled ? { enabled: true, option: wardrobe } : undefined,
      qualityPreset: qEnabled ? { enabled: true, preset: quality } : undefined,
    });
  };

  const toggleStrategy = (enabled: boolean) => {
    setIntimateWeavingEnabled(enabled);
    handleChange(enabled, wardrobeEnabled, qualityEnabled, selectedStrategy, selectedWardrobe, selectedQuality);
  };

  const toggleWardrobe = (enabled: boolean) => {
    setWardrobeEnabled(enabled);
    handleChange(intimateWeavingEnabled, enabled, qualityEnabled, selectedStrategy, selectedWardrobe, selectedQuality);
  };

  const toggleQuality = (enabled: boolean) => {
    setQualityEnabled(enabled);
    handleChange(intimateWeavingEnabled, wardrobeEnabled, enabled, selectedStrategy, selectedWardrobe, selectedQuality);
  };

  const changeStrategy = (strategy: string) => {
    setSelectedStrategy(strategy);
    handleChange(intimateWeavingEnabled, wardrobeEnabled, qualityEnabled, strategy, selectedWardrobe, selectedQuality);
  };

  const changeWardrobe = (wardrobe: string) => {
    setSelectedWardrobe(wardrobe);
    handleChange(intimateWeavingEnabled, wardrobeEnabled, qualityEnabled, selectedStrategy, wardrobe, selectedQuality);
  };

  const changeQuality = (quality: string) => {
    setSelectedQuality(quality);
    handleChange(intimateWeavingEnabled, wardrobeEnabled, qualityEnabled, selectedStrategy, selectedWardrobe, quality);
  };

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 shadow-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-700/30 transition-colors"
      >
        <span className="font-semibold text-gray-200 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-fuchsia-400" viewBox="0 0 20 20" fill="currentColor">
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
          </svg>
          Advanced Super-Seductress Selectors
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 space-y-4">
          {/* Intimate Weaving Strategy */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                id="strategy-checkbox"
                type="checkbox"
                checked={intimateWeavingEnabled}
                onChange={(e) => toggleStrategy(e.target.checked)}
                disabled={isLoading}
                className="h-4 w-4 rounded border-gray-600 bg-gray-900/50 text-fuchsia-600 focus:ring-fuchsia-500"
              />
              <label htmlFor="strategy-checkbox" className="font-semibold text-sm text-gray-300">
                Intimate Weaving Strategy
              </label>
            </div>
            <select
              value={selectedStrategy}
              onChange={(e) => changeStrategy(e.target.value)}
              disabled={isLoading || !intimateWeavingEnabled}
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2 disabled:opacity-50"
            >
              {intimateWeavingStrategies.map(strategy => (
                <option key={strategy.name} value={strategy.name}>
                  {strategy.name}
                </option>
              ))}
            </select>
            {intimateWeavingEnabled && (
              <p className="text-xs text-gray-400 italic">
                {intimateWeavingStrategies.find(s => s.name === selectedStrategy)?.description}
              </p>
            )}
          </div>

          {/* Sensual Wardrobe Collection */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                id="wardrobe-checkbox"
                type="checkbox"
                checked={wardrobeEnabled}
                onChange={(e) => toggleWardrobe(e.target.checked)}
                disabled={isLoading}
                className="h-4 w-4 rounded border-gray-600 bg-gray-900/50 text-fuchsia-600 focus:ring-fuchsia-500"
              />
              <label htmlFor="wardrobe-checkbox" className="font-semibold text-sm text-gray-300">
                Sensual Wardrobe Collection
              </label>
            </div>
            <select
              value={selectedWardrobe}
              onChange={(e) => changeWardrobe(e.target.value)}
              disabled={isLoading || !wardrobeEnabled}
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2 disabled:opacity-50"
            >
              {sensualWardrobeCollection.map(wardrobe => (
                <option key={wardrobe.name} value={wardrobe.name}>
                  {wardrobe.name} ({wardrobe.category})
                </option>
              ))}
            </select>
            {wardrobeEnabled && (
              <p className="text-xs text-gray-400 italic">
                {sensualWardrobeCollection.find(w => w.name === selectedWardrobe)?.description}
              </p>
            )}
          </div>

          {/* Image Quality Preset */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                id="quality-checkbox"
                type="checkbox"
                checked={qualityEnabled}
                onChange={(e) => toggleQuality(e.target.checked)}
                disabled={isLoading}
                className="h-4 w-4 rounded border-gray-600 bg-gray-900/50 text-fuchsia-600 focus:ring-fuchsia-500"
              />
              <label htmlFor="quality-checkbox" className="font-semibold text-sm text-gray-300">
                Image Quality Preset
              </label>
            </div>
            <select
              value={selectedQuality}
              onChange={(e) => changeQuality(e.target.value)}
              disabled={isLoading || !qualityEnabled}
              className="bg-gray-700 border border-gray-600 text-white text-sm rounded-md focus:ring-fuchsia-500 focus:border-fuchsia-500 block w-full p-2 disabled:opacity-50"
            >
              {imageQualityPresets.map(preset => (
                <option key={preset.name} value={preset.name}>
                  {preset.name}
                </option>
              ))}
            </select>
            {qualityEnabled && (
              <p className="text-xs text-gray-400 italic">
                {imageQualityPresets.find(q => q.name === selectedQuality)?.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedSelectorsPanel;
