import React from 'react';
import type { GeneratedImageData } from '../types';

interface ImageDisplayProps {
  imageData: GeneratedImageData[] | null;
  isLoading: boolean;
  error: string | null;
  wovenPrompt: string | null;
}

const Placeholder: React.FC = () => (
  <div className="text-center text-gray-500 space-y-4">
    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-24 w-24 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
    <h3 className="text-xl font-semibold">Image Display</h3>
    <p>Your generated images will appear here.</p>
    <p className="text-sm">Adjust the prompt on the left and click "Generate Image".</p>
  </div>
);

const LoadingDisplay: React.FC<{ wovenPrompt: string | null }> = ({ wovenPrompt }) => {
    const isWeaving = !wovenPrompt;

    return (
        <div className="w-full aspect-[9/16] bg-gray-700/50 rounded-lg flex flex-col items-center justify-center p-6 text-center">
            <svg className="animate-spin h-12 w-12 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p className="text-lg font-medium text-gray-300 mt-4">
                {isWeaving ? "Weaving Prompt with AI..." : "Generating Images..."}
            </p>
            {!isWeaving && (
                <div className="mt-4 w-full bg-gray-900/50 p-4 rounded-lg border border-gray-600 max-h-64 overflow-y-auto">
                    <p className="text-xs text-gray-400 font-semibold mb-2 text-left">Final Woven Prompt:</p>
                    <p className="text-sm text-gray-300 text-left font-mono">{wovenPrompt}</p>
                </div>
            )}
        </div>
    );
};


const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => {
    const isRaiBlock = message.startsWith('RAI_BLOCK:');
    const isGenericSafetyError = !isRaiBlock && (message.toLowerCase().includes('safety') || message.toLowerCase().includes('blocked'));

    if (!isRaiBlock && !isGenericSafetyError) {
        return (
            <div className="w-full aspect-[9/16] bg-red-900/20 border-2 border-dashed border-red-500 rounded-lg flex flex-col items-center justify-center p-4 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-red-400">Generation Failed</h3>
                <p className="text-red-300 mt-2 max-w-md break-words">{message}</p>
            </div>
        );
    }
    
    let displayMessage = message;
    let categories: string[] = [];
    
    if (isRaiBlock) {
        displayMessage = message.replace('RAI_BLOCK: ', '');
        const match = displayMessage.match(/Detected categories: (.*)\./);
        if (match && match[1]) {
            categories = match[1].split(', ').map(c => c.split(' ')[0].toLowerCase().replace(/"/g, ''));
        }
    }

    const getTroubleshootingTips = (cats: string[]): string[] => {
        const tips = new Set<string>();
        tips.add('Try rephrasing your prompt to be less specific in sensitive areas.');
        tips.add('Use the "Analyze Prompt" feature for specific suggestions.');
        tips.add('Try the "Safety-First" enhancement style.');

        if (cats.some(c => ['sexual', 'sexually explicit'].includes(c))) {
            tips.add('Soften language in the "Wardrobe" and "Figure & Form" sections.');
            tips.add('Consider artistic terms like "silhouette" or "shadow play" instead of direct descriptions.');
        }
        if (cats.some(c => ['derogatory', 'hate speech'].includes(c))) {
            tips.add('Review your prompt for any language that could be interpreted as offensive or hateful.');
        }
        if (cats.includes('violence')) {
             tips.add('Remove any terms related to violence, gore, or self-harm.');
        }

        return Array.from(tips);
    };

    const tips = getTroubleshootingTips(categories);

    return (
        <div className="w-full aspect-[9/16] bg-red-900/20 border-2 border-dashed border-red-500 rounded-lg flex flex-col items-center justify-center p-4 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-bold text-red-400">Image Generation Blocked</h3>
            <p className="text-red-300 mt-2 max-w-md break-words">{displayMessage}</p>
            <div className="mt-4 text-left text-sm text-gray-400 bg-gray-700/50 p-3 rounded-md w-full max-w-md">
                <p className="font-semibold text-gray-200">Troubleshooting Tips:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                    {tips.map((tip, i) => <li key={i}>{tip}</li>)}
                </ul>
            </div>
        </div>
    );
};


const ImageDisplay: React.FC<ImageDisplayProps> = ({ imageData, isLoading, error, wovenPrompt }) => {
  const getGridCols = (count: number) => {
    if (count <= 1) return 'grid-cols-1';
    if (count <= 4) return 'grid-cols-2';
    return 'grid-cols-2'; // Max is 4, but for safety
  };

  const handleDownload = (url: string, index: number) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `ai-image-studio-${Date.now()}-${index + 1}.jpeg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAll = () => {
    if (!imageData) return;
    imageData.forEach((data, index) => {
      handleDownload(data.url, index);
    });
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-6 bg-gray-800/50 rounded-lg border border-gray-700 min-h-[50vh] lg:min-h-0">
      {isLoading && <LoadingDisplay wovenPrompt={wovenPrompt} />}
      {!isLoading && error && <ErrorDisplay message={error} />}
      {!isLoading && !error && imageData && imageData.length > 0 && (
          <div className="flex flex-col gap-4 w-full">
            <div className={`grid ${getGridCols(imageData.length)} gap-4 w-full`}>
                {imageData.map((data, index) => (
                    <div key={index} className="w-full aspect-[9/16] overflow-hidden rounded-lg shadow-lg group relative">
                        <img 
                            src={data.url} 
                            alt={`Generated by AI ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                        />
                        <div className="absolute top-2 left-2">
                           <div className="relative group/tooltip">
                                <div className="p-2 bg-black/50 rounded-full text-white cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="absolute bottom-full left-0 mb-2 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <h4 className="font-bold mb-1 border-b border-gray-600 pb-1">Generation Info</h4>
                                    <p><span className="font-semibold">Model:</span> {data.settings.modelId}</p>
                                    <p><span className="font-semibold">Seed:</span> {data.settings.seed || 'Random'}</p>
                                    <p><span className="font-semibold">Aspect Ratio:</span> {data.settings.aspectRatio}</p>
                                </div>
                           </div>
                        </div>
                         <button
                            onClick={() => handleDownload(data.url, index)}
                            className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white hover:bg-black/75 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                            aria-label={`Download image ${index + 1}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                          </button>
                    </div>
                ))}
            </div>
             <button
                onClick={handleDownloadAll}
                className="mt-2 flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold text-base rounded-lg shadow-md hover:bg-teal-500 transition-all duration-300 w-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download All
            </button>
          </div>
      )}
      {!isLoading && !error && (!imageData || imageData.length === 0) && <Placeholder />}
    </div>
  );
};

export default ImageDisplay;