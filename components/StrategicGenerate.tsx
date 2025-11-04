import React, { useState, useRef, useEffect } from 'react';
import type { AdherenceLevel, GenerationStep } from '../types';

interface StrategicGenerateProps {
  onGenerate: (adherence: AdherenceLevel) => void;
  isLoading: boolean;
  generationStep: GenerationStep | null;
}

const adherenceOptions: { level: AdherenceLevel; label: string; description: string; }[] = [
    { level: 'literal', label: 'Literal', description: 'Maximum adherence to prompt with minimal AI refinement.' },
    { level: 'balanced', label: 'Balanced', description: 'Optimal blend of AI enhancement and prompt adherence.' },
    { level: 'creative', label: 'Creative', description: 'Gives the AI more freedom to embellish your concept with flair.' },
];

const StrategicGenerate: React.FC<StrategicGenerateProps> = ({ onGenerate, isLoading, generationStep }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<AdherenceLevel>('balanced');
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (level: AdherenceLevel) => {
        setSelected(level);
        setIsOpen(false);
        onGenerate(level);
    };
    
    const getButtonLoadingText = () => {
        switch (generationStep) {
            case 'analyzing': return 'Analyzing...';
            case 'auto-fixing': return 'Auto-Fixing...';
            case 'weaving': return 'Weaving...';
            case 'generating': return 'Generating...';
            default: return 'Processing...';
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <div className="flex rounded-lg shadow-lg">
                <button
                    onClick={() => onGenerate(selected)}
                    disabled={isLoading}
                    className="flex items-center justify-center gap-3 pl-6 pr-5 py-3 bg-fuchsia-600 text-white font-bold text-base rounded-l-lg hover:bg-fuchsia-500 disabled:bg-fuchsia-900/50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
                >
                    {isLoading ? (
                        <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>{getButtonLoadingText()}</>
                    ) : (
                        <><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>Generate ({selected.charAt(0).toUpperCase() + selected.slice(1)})</>
                    )}
                </button>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    disabled={isLoading}
                    className="px-2 py-3 bg-fuchsia-700 text-white hover:bg-fuchsia-600 rounded-r-lg disabled:bg-fuchsia-900/50 disabled:cursor-not-allowed border-l border-fuchsia-800"
                    aria-label="Change generation strategy"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </button>
            </div>
            {isOpen && !isLoading && (
                <div className="absolute bottom-full mb-2 w-72 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-20">
                    <ul className="py-1">
                        {adherenceOptions.map(({ level, label, description }) => (
                            <li key={level}>
                                <button
                                    onClick={() => handleSelect(level)}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-700/50 transition-colors flex items-start gap-3"
                                >
                                    <div>
                                        <p className="font-semibold text-white">{label}</p>
                                        <p className="text-sm text-gray-400">{description}</p>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default StrategicGenerate;
