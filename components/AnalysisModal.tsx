import React from 'react';
import type { AnalysisSuggestion } from '../types';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  suggestions: AnalysisSuggestion[];
  onApply: (suggestion: AnalysisSuggestion) => void;
}

const AnalysisModal: React.FC<AnalysisModalProps> = ({ isOpen, onClose, suggestions, onApply }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity"
      aria-labelledby="analysis-modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-xl w-full max-w-3xl transform transition-all p-6 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-600">
          <h2 id="analysis-modal-title" className="text-2xl font-bold text-white flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-sky-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg>
            Prompt Analysis Results
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mt-4 max-h-[60vh] overflow-y-auto pr-2">
           <p className="text-gray-400 text-sm mb-4">The analyzer found parts of your prompt that might trigger safety filters. Review the suggestions below and apply them to improve your chances of a successful generation.</p>
          <ul className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="bg-gray-900/70 p-4 rounded-lg border border-gray-700">
                <p className="font-semibold text-gray-300">
                  <span className="font-bold text-sky-400">Field:</span> {suggestion.field}
                </p>
                <div className="mt-3 bg-red-900/20 border-l-4 border-red-500 p-3 rounded-r-md">
                    <p className="text-xs text-gray-400 font-mono">Original:</p>
                    <p className="text-red-300 font-mono text-sm">{suggestion.originalText}</p>
                </div>
                <div className="mt-3 bg-green-900/20 border-l-4 border-green-500 p-3 rounded-r-md">
                    <p className="text-xs text-gray-400 font-mono">Suggestion:</p>
                    <p className="text-green-300 font-mono text-sm">{suggestion.suggestedText}</p>
                </div>
                <div className="mt-3">
                    <p className="text-sm text-gray-400"><span className="font-semibold text-gray-200">Reason:</span> {suggestion.reason}</p>
                </div>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={() => onApply(suggestion)}
                        className="px-4 py-2 bg-sky-600 text-white font-semibold text-sm rounded-md hover:bg-sky-500 transition-colors flex items-center gap-2"
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                       Apply Suggestion
                    </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex justify-end">
             <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-600 text-white font-semibold text-base rounded-md hover:bg-gray-500 transition-colors"
             >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default AnalysisModal;
