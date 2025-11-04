
import React from 'react';
import type { HistoryEntry } from '../types';

interface HistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryEntry[];
  onLoad: (entry: HistoryEntry) => void;
  onClear: () => void;
}

const HistoryModal: React.FC<HistoryModalProps> = ({ isOpen, onClose, history, onLoad, onClear }) => {
  if (!isOpen) return null;

  const formatTimestamp = (timestamp: number) => {
    return new Date(timestamp).toLocaleString(undefined, {
      dateStyle: 'medium',
      timeStyle: 'short',
    });
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity"
      onClick={onClose}
    >
      <div
        className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl transform transition-all p-6 border border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-gray-600">
          <h2 className="text-2xl font-bold text-white">Prompt History</h2>
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
          {history.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No history found. Generated prompts will appear here.</p>
          ) : (
            <div className="space-y-3">
              <div className="flex justify-end">
                <button
                    onClick={onClear}
                    className="px-4 py-2 bg-red-800 text-white font-semibold text-sm rounded-md hover:bg-red-700 transition-colors"
                >
                    Clear History
                </button>
              </div>
              <ul className="space-y-3 mt-3">
                {history.map((entry) => (
                  <li
                    key={entry.timestamp}
                    className="bg-gray-900 p-4 rounded-lg flex items-center justify-between hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="truncate pr-4">
                      <p className="font-medium text-gray-200 truncate">{entry.data.shot}</p>
                      <p className="text-xs text-gray-500">{formatTimestamp(entry.timestamp)}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <button
                        onClick={() => onLoad(entry)}
                        className="px-4 py-2 bg-indigo-600 text-white font-semibold text-sm rounded-md hover:bg-indigo-500 transition-colors"
                      >
                        Load
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryModal;
