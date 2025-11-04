
import React, { useState } from 'react';
import type { AdherenceLevel, EnhancementStyle, GenerationStep } from '../types';

export interface MasterGenerateOptions {
    enhance: { enabled: boolean; style: EnhancementStyle; };
    weave: { enabled: boolean; adherence: AdherenceLevel; };
}

interface MasterGenerationControlProps {
  onGenerate: (options: MasterGenerateOptions) => void;
  isLoading: boolean;
  generationStep: GenerationStep | null;
}

const weaveOptions: { level: AdherenceLevel; label: string; }[] = [
    { level: 'literal', label: 'Literal' },
    { level: 'balanced', label: 'Balanced' },
    { level: 'creative', label: 'Creative' },
];

const enhancementOptions: { style: EnhancementStyle; label: string; }[] = [
    { style: 'balanced', label: 'Balanced' },
    { style: 'creative', label: 'Creative Flair' },
    { style: 'safety', label: 'Safety-First' },
];

const MasterGenerationControl: React.FC<MasterGenerationControlProps> = ({ onGenerate, isLoading, generationStep }) => {
    const [isEnhanceEnabled, setIsEnhanceEnabled] = useState(false);
    const [isWeaveEnabled, setIsWeaveEnabled] = useState(true);
    const [selectedEnhanceStyle, setSelectedEnhanceStyle] = useState<EnhancementStyle>('balanced');
    const [selectedWeaveAdherence, setSelectedWeaveAdherence] = useState<AdherenceLevel>('balanced');
    
    const handleGenerateClick = () => {
        onGenerate({
            enhance: { enabled: isEnhanceEnabled, style: selectedEnhanceStyle },
            weave: { enabled: isWeaveEnabled, adherence: selectedWeaveAdherence },
        });
    };

    const getLoadingText = () => {
        switch (generationStep) {
            case 'enhancing': return 'Enhancing...';
            case 'weaving': return 'Weaving...';
            case 'generating': return 'Generating...';
            default: return 'Processing...';
        }
    };
    
    const LoadingSpinner: React.FC = () => (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    );

    return (
        <div className="flex items-center justify-center p-3 bg-gray-800/50 rounded-xl border border-gray-700 shadow-lg gap-4">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <input id="enhance-checkbox" type="checkbox" checked={isEnhanceEnabled} onChange={(e) => setIsEnhanceEnabled(e.target.checked)} disabled={isLoading} 
                        className="h-4 w-4 rounded border-gray-600 bg-gray-900/50 text-indigo-600 focus:ring-indigo-500" />
                    <label htmlFor="enhance-checkbox" className="font-semibold text-sm text-gray-300">Enhance Prompt</label>
                </div>
                 <div className="flex items-center gap-2">
                    <input id="weave-checkbox" type="checkbox" checked={isWeaveEnabled} onChange={(e) => setIsWeaveEnabled(e.target.checked)} disabled={isLoading} 
                        className="h-4 w-4 rounded border-gray-600 bg-gray-900/50 text-indigo-600 focus:ring-indigo-500" />
                    <label htmlFor="weave-checkbox" className="font-semibold text-sm text-gray-300">Weave Prompt</label>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <select value={selectedEnhanceStyle} onChange={e => setSelectedEnhanceStyle(e.target.value as EnhancementStyle)} disabled={isLoading || !isEnhanceEnabled}
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1.5 disabled:opacity-50 transition-opacity">
                    {enhancementOptions.map(opt => <option key={opt.style} value={opt.style}>{opt.label}</option>)}
                </select>
                <select value={selectedWeaveAdherence} onChange={e => setSelectedWeaveAdherence(e.target.value as AdherenceLevel)} disabled={isLoading || !isWeaveEnabled}
                    className="bg-gray-700 border border-gray-600 text-white text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full p-1.5 disabled:opacity-50 transition-opacity">
                    {weaveOptions.map(opt => <option key={opt.level} value={opt.level}>{opt.label}</option>)}
                </select>
            </div>
            <button
                onClick={handleGenerateClick}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 px-8 py-3 bg-fuchsia-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-fuchsia-500 disabled:bg-fuchsia-900/50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
            >
                {isLoading ? (<><LoadingSpinner />{getLoadingText()}</>) : (<><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>Generate Image</>)}
            </button>
        </div>
    );
};

export default MasterGenerationControl;
