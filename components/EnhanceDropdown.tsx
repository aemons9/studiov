import React, { useState, useRef, useEffect } from 'react';
import type { EnhancementStyle } from '../types';

interface EnhanceDropdownProps {
  onEnhance: (style: EnhancementStyle) => void;
  isEnhancing: boolean;
  isBusy: boolean;
}

// Fix: Use React.ReactElement instead of JSX.Element to resolve the type error.
const enhancementOptions: { style: EnhancementStyle; label: string; description: string; icon: React.ReactElement }[] = [
    {
        style: 'balanced',
        label: 'Balanced Enhancement',
        description: 'Intelligent, all-around improvements for a more vivid prompt.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" /></svg>
    },
    {
        style: 'subtle',
        label: 'Subtle Refine',
        description: 'Makes minimal adjustments to improve clarity without changing concepts.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0013.75 2.25h-7.5a2.25 2.25 0 00-2.238.762L2.25 6.75a2.25 2.25 0 00-.022 2.22l.022.028 2.238 3.738a2.25 2.25 0 002.238.762h7.5a2.25 2.25 0 002.238-.762l2.25-3.75a2.25 2.25 0 00.022-2.22l-.022-.028-2.238-3.738zM8.5 6a.5.5 0 000 1h3a.5.5 0 000-1h-3zM8 9a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" /></svg>
    },
    {
        style: 'creative',
        label: 'Creative Flair',
        description: 'Adds artistic embellishments and novel details to your prompt.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" /></svg>
    },
    {
        style: 'safety',
        label: 'Safety-First',
        description: 'Rewrites prompt with safer terms to avoid policy violations.',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 1a9 9 0 100 18 9 9 0 000-18zM8.232 6.232a1 1 0 011.414 0L10 6.586l.354-.354a1 1 0 111.414 1.414L11.414 8l.354.354a1 1 0 11-1.414 1.414L10 9.414l-.354.354a1 1 0 01-1.414-1.414L8.586 8 8.232 7.646a1 1 0 010-1.414zM11 12a1 1 0 10-2 0v3a1 1 0 102 0v-3z" clipRule="evenodd" /></svg>
    },
];

const EnhanceDropdown: React.FC<EnhanceDropdownProps> = ({ onEnhance, isEnhancing, isBusy }) => {
    const [isOpen, setIsOpen] = useState(false);
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

    const handleSelect = (style: EnhancementStyle) => {
        onEnhance(style);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isBusy}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold text-base rounded-lg shadow-md hover:bg-teal-500 disabled:bg-teal-900/50 disabled:cursor-not-allowed transition-all duration-300"
            >
                {isEnhancing ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enhancing...
                    </>
                ) : (
                    <>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" /></svg>
                        Enhance Prompt
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </>
                )}
            </button>
            {isOpen && !isBusy && (
                <div className="absolute bottom-full mb-2 w-72 bg-gray-800 border border-gray-700 rounded-lg shadow-lg z-20">
                    <ul className="py-1">
                        {enhancementOptions.map(({ style, label, description, icon }) => (
                            <li key={style}>
                                <button
                                    onClick={() => handleSelect(style)}
                                    className="w-full text-left px-4 py-3 hover:bg-gray-700/50 transition-colors flex items-start gap-3"
                                >
                                    <div className="text-teal-400 mt-1">{icon}</div>
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

export default EnhanceDropdown;
