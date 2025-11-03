import React from 'react';
import type { SavedPrompt } from '../types';

interface LoadPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompts: SavedPrompt[];
  onLoad: (prompt: SavedPrompt) => void;
  onDelete: (name: string) => void;
}

const LoadPromptModal: React.FC<LoadPromptModalProps> = ({ isOpen, onClose, prompts, onLoad, onDelete }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl transform transition-all p-6 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-600">
          <h2 id="modal-title" className="text-2xl font-bold text-white">Load Prompt</h2>
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
        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          {prompts.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No saved prompts found.</p>
          ) : (
            <ul className="space-y-3">
              {prompts.map((prompt) => (
                <li
                  key={prompt.name}
                  className="bg-gray-900 p-4 rounded-lg flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                >
                  <span className="font-medium text-gray-200 truncate pr-4">{prompt.name}</span>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                      onClick={() => onLoad(prompt)}
                      className="px-4 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-md hover:bg-indigo-500 transition-colors"
                    >
                      Load
                    </button>
                    <button
                      onClick={() => onDelete(prompt.name)}
                      className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      aria-label={`Delete prompt ${prompt.name}`}
                    >
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadPromptModal;