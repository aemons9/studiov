import React from 'react';
import type { GenerationSettings } from '../types';

interface TextPromptEditorProps {
  textPrompt: string;
  onTextPromptChange: (text: string) => void;
  generationSettings: GenerationSettings;
  onSettingsChange: (key: keyof GenerationSettings, value: any) => void;
  isLoading: boolean;
}

const TextPromptEditor: React.FC<TextPromptEditorProps> = ({
  textPrompt,
  onTextPromptChange,
  generationSettings,
  onSettingsChange,
  isLoading,
}) => {
  const charCount = textPrompt.length;
  const wordCount = textPrompt.split(/\s+/).filter(w => w.length > 0).length;
  const estimatedTokens = Math.ceil(charCount / 4);

  const isVeryLong = charCount > 10000;
  const isLong = charCount > 5000;

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Text Prompt Editor
        </h2>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Characters:</span>
            <span className={`font-mono font-bold ${isVeryLong ? 'text-red-400' : isLong ? 'text-yellow-400' : 'text-green-400'}`}>
              {charCount.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Words:</span>
            <span className="font-mono font-bold text-blue-400">{wordCount.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Tokens:</span>
            <span className="font-mono font-bold text-purple-400">~{estimatedTokens.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Warning Messages */}
      {isVeryLong && (
        <div className="mb-4 bg-red-900/20 border border-red-700 rounded-lg p-4 flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-red-400 font-semibold">Very Long Prompt - May Fail!</p>
            <p className="text-red-300 text-sm mt-1">Your prompt is over 10,000 characters. Flux API may reject it or return "Task not found" errors. Consider shortening it.</p>
          </div>
        </div>
      )}
      {isLong && !isVeryLong && (
        <div className="mb-4 bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <div>
            <p className="text-yellow-400 font-semibold">Long Prompt Warning</p>
            <p className="text-yellow-300 text-sm mt-1">Your prompt is over 5,000 characters. This may work, but watch for timeout or rate limiting errors.</p>
          </div>
        </div>
      )}

      {/* Text Area */}
      <div className="mb-4">
        <label htmlFor="textPrompt" className="block text-sm font-semibold text-gray-300 mb-2">
          Direct Prompt Input
        </label>
        <textarea
          id="textPrompt"
          value={textPrompt}
          onChange={(e) => onTextPromptChange(e.target.value)}
          disabled={isLoading}
          placeholder="Enter your complete prompt here. You can write any text description for image generation.

Example:
A stunning portrait of an Indian fashion model in elegant evening wear, photographed in a modern studio with dramatic lighting. Shot on Hasselblad X2D with 85mm lens at f/2.0. Hyper-realistic detail, 8K quality..."
          className="w-full h-80 bg-gray-900 border border-gray-600 rounded-lg p-4 text-gray-200 font-mono text-sm leading-relaxed focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors disabled:bg-gray-800/50 disabled:cursor-not-allowed resize-y"
        />
        <p className="text-xs text-gray-500 mt-2">
          💡 Tip: You can write your prompt in natural language. Use the optional enhancement/weaving features below to improve it further.
        </p>
      </div>

      {/* Optional Processing Options */}
      <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
        <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
          </svg>
          Optional Enhancements
        </h3>
        <p className="text-xs text-gray-400 mb-3">
          You can apply enhancement or weaving to your text prompt using the generation controls below.
          These are optional and can be enabled when you click "Generate Image".
        </p>

        <div className="flex items-center gap-3">
          <input
            id="reviewPromptBeforeGeneration"
            type="checkbox"
            checked={generationSettings.reviewPromptBeforeGeneration || false}
            onChange={(e) => onSettingsChange('reviewPromptBeforeGeneration', e.target.checked)}
            disabled={isLoading}
            className="h-4 w-4 rounded border-gray-600 bg-gray-900/50 text-purple-600 focus:ring-purple-500"
          />
          <label htmlFor="reviewPromptBeforeGeneration" className="font-semibold text-gray-300">
            Review Prompt Before Generation
          </label>
          <span className="text-xs text-gray-500">(Shows final prompt for approval)</span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={() => onTextPromptChange('')}
          disabled={isLoading || !textPrompt}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors text-sm flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          Clear Prompt
        </button>

        <button
          onClick={() => {
            const example = `A stunning portrait of an Indian fashion model in elegant evening wear, shot in a modern studio with dramatic chiaroscuro lighting. The subject is a confident woman with a commanding presence, wearing a sculptural black silk gown with architectural draping. Shot on Hasselblad X2D with 85mm lens at f/2.0, capturing every detail with hyper-realistic clarity. Professional studio lighting creates dramatic shadows and highlights. 8K quality, museum-grade fine art photography.`;
            onTextPromptChange(example);
          }}
          disabled={isLoading}
          className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors text-sm flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          Load Example
        </button>
      </div>
    </div>
  );
};

export default TextPromptEditor;
