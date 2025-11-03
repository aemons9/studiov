import React, { useState, useCallback } from 'react';
import type { PromptData, SavedPrompt, GenerationSettings, EnhancementStyle, GeneratedImageData, AnalysisSuggestion } from './types';
import { generateImage, enhancePrompt, analyzePrompt, weavePrompt } from './services/geminiService';
import Header from './components/Header';
import PromptEditor from './components/PromptEditor';
import ImageDisplay from './components/ImageDisplay';
import LoadPromptModal from './components/LoadPromptModal';
import { ArtisticConcept } from './concepts/concepts';
import EnhanceDropdown from './components/EnhanceDropdown';
import AnalysisModal from './components/AnalysisModal';

const initialPromptJson = `{
  "shot": "Masterful portrait (4:5), capturing the interplay of light and emotion with profound depth.",
  "subject": {
    "age": "adult woman (25-30)",
    "appearance": "Indian fashion model (height 5'8\\"), with realistic body proportions (bust 36\\", waist 28\\", hips 38\\"), exuding a quiet confidence through a serene, direct gaze.",
    "pose": "Seated on an unseen surface, leaning slightly forward, one hand gently resting on her knee, creating a natural and engaging posture. The pose feels candid and unforced, inviting connection.",
    "hair_color": "dark",
    "hair_style": "long, loose waves with a few stray strands catching the light, styled with natural volume and texture",
    "skin_details": "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. No airbrushing, creating a raw and honest depiction of beauty.",
    "hand_and_nail_details": "Hands are relaxed and anatomically correct, with graceful, natural finger placement. Nails are impeccably manicured with a clean, neutral polish, reflecting the soft light.",
    "tattoos": "none",
    "piercings": "none",
    "body_art": "none",
    "nail_art": "Impeccably manicured nails, clean with a neutral polish.",
    "high_heels": "not visible"
  },
  "wardrobe": "A simple, elegant, off-white linen blouse, with visible fabric texture and subtle creasing. The focus is on the subject's natural beauty, not the clothing.",
  "environment": "A minimalist artist's loft with a large, north-facing window just out of frame. The background is a textured, neutral-toned wall, providing depth without distraction.",
  "lighting": "Soft, directional window light (emulating a large octabox) that wraps around the subject's features, creating soft shadows that sculpt the face and form. A subtle reflector provides fill light to retain detail in the shadows.",
  "camera": {
    "focal_length": "85mm f/1.4 Portrait Lens",
    "aperture": "f/1.8",
    "distance": "1.5 m",
    "angle": "Eye-level, creating a direct and personal connection with the subject.",
    "framing": "Tight medium shot, from the mid-torso up, emphasizing facial expression, hand placement, and the texture of the wardrobe."
  },
  "color_grade": "Warm, natural tones with a painterly quality. Soft, luminous highlights and gentle contrast, preserving the full spectrum of realistic skin tones. Inspired by the color palette of classical portraiture.",
  "style": "Hyper-realistic fine-art portraiture, in the style of a master photographer like Annie Leibovitz. A profound focus on emotional depth, authenticity, and technical perfection.",
  "quality": "Shot on a Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus on the eyes and hands. Every micro-detail, from fabric weave to skin pores, is rendered with absolute clarity. The image has the depth and quality of a high-end gallery print.",
  "figure_and_form": "Natural form, emphasizing the realistic drape of fabric over the subject's physique. The lighting and pose are composed to be tasteful and artistic."
}`;

// A simple fallback for the copy button before a prompt has been woven by the AI.
const constructSimplePromptString = (data: PromptData): string => {
  return Object.entries(data)
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return Object.entries(value).map(([subKey, subValue]) => `${subKey}: ${subValue}`).join(', ');
      }
      return `${key}: ${value}`;
    })
    .join('. ');
};


const PROMPTS_STORAGE_KEY = 'ai-image-studio-prompts';

const App: React.FC = () => {
  const [promptData, setPromptData] = useState<PromptData>(JSON.parse(initialPromptJson));
  const [generatedImages, setGeneratedImages] = useState<GeneratedImageData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEnhancing, setIsEnhancing] = useState<boolean>(false);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [activeConcept, setActiveConcept] = useState<string>('custom');
  const [analysisSuggestions, setAnalysisSuggestions] = useState<AnalysisSuggestion[] | null>(null);
  const [wovenPrompt, setWovenPrompt] = useState<string | null>(null);
  const [generationSettings, setGenerationSettings] = useState<GenerationSettings>({
    projectId: '',
    accessToken: '',
    numberOfImages: 1,
    aspectRatio: '9:16',
    personGeneration: 'allow_all',
    safetySetting: 'block_few',
    addWatermark: true,
    enhancePrompt: true,
    modelId: 'imagen-4.0-ultra-generate-001',
    seed: null,
  });

  const handlePromptChange = useCallback((newPromptData: PromptData) => {
    setPromptData(newPromptData);
    setActiveConcept('custom'); // Any manual change results in a custom prompt
  }, []);

  const handleConceptChange = useCallback((concept: ArtisticConcept) => {
    setPromptData(concept.data);
    setActiveConcept(concept.name);
  }, []);

  const handleGenerateImage = async () => {
    if (!generationSettings.projectId || !generationSettings.accessToken) {
      setError('Please provide a valid Google Cloud Project ID and OAuth2 Access Token in the Generation Settings section.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setGeneratedImages(null);
    setWovenPrompt(null);

    try {
      // Step 1: Weave the structured prompt into a coherent paragraph using AI.
      const finalPrompt = await weavePrompt(promptData, generationSettings);
      setWovenPrompt(finalPrompt);

      // Step 2: Generate the image using the final, AI-woven prompt.
      const imagesB64 = await generateImage(finalPrompt, generationSettings);
      const newImageData = imagesB64.map(b64 => ({
        url: `data:image/jpeg;base64,${b64}`,
        settings: {
          modelId: generationSettings.modelId,
          seed: generationSettings.seed,
          aspectRatio: generationSettings.aspectRatio,
        }
      }));
      setGeneratedImages(newImageData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnhancePrompt = async (style: EnhancementStyle) => {
    if (!generationSettings.projectId || !generationSettings.accessToken) {
      setError('Please provide a valid Google Cloud Project ID and OAuth2 Access Token in the Generation Settings section.');
      return;
    }
    setIsEnhancing(true);
    setError(null);
    try {
      const enhancedData = await enhancePrompt(promptData, generationSettings, style);
      setPromptData(enhancedData);
      setActiveConcept('custom');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred during enhancement.');
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleSavePrompt = () => {
    const name = window.prompt("Enter a name for this prompt configuration:");
    if (name && name.trim()) {
      try {
        const storedPrompts = localStorage.getItem(PROMPTS_STORAGE_KEY);
        const prompts: SavedPrompt[] = storedPrompts ? JSON.parse(storedPrompts) : [];
        const newSavedPrompt: SavedPrompt = { name, data: promptData, settings: generationSettings };

        const existingPromptIndex = prompts.findIndex(p => p.name === name);
        if (existingPromptIndex !== -1) {
          if (!window.confirm(`A prompt with the name "${name}" already exists. Do you want to overwrite it?`)) {
            return;
          }
          prompts[existingPromptIndex] = newSavedPrompt;
        } else {
          prompts.push(newSavedPrompt);
        }
        
        localStorage.setItem(PROMPTS_STORAGE_KEY, JSON.stringify(prompts));
        alert(`Prompt "${name}" saved successfully!`);
      } catch (e) {
        console.error("Failed to save prompt:", e);
        alert("Error: Could not save the prompt.");
      }
    }
  };

  const loadPromptsFromStorage = (): SavedPrompt[] => {
    try {
      const storedPrompts = localStorage.getItem(PROMPTS_STORAGE_KEY);
      return storedPrompts ? JSON.parse(storedPrompts) : [];
    } catch (e) {
      console.error("Failed to load prompts:", e);
      return [];
    }
  };

  const handleOpenLoadModal = () => {
    setSavedPrompts(loadPromptsFromStorage());
    setIsLoadModalOpen(true);
  };
  
  const handleLoadSelectedPrompt = (promptToLoad: SavedPrompt) => {
    handlePromptChange(promptToLoad.data);
    // Ensure all settings are loaded, falling back to defaults if some are missing from older saves
    setGenerationSettings(prev => ({...prev, ...promptToLoad.settings}));
    setIsLoadModalOpen(false);
  };

  const handleDeletePrompt = (name: string) => {
    if (window.confirm(`Are you sure you want to delete the prompt "${name}"?`)) {
      try {
        const prompts = loadPromptsFromStorage();
        const updatedPrompts = prompts.filter((p: SavedPrompt) => p.name !== name);
        localStorage.setItem(PROMPTS_STORAGE_KEY, JSON.stringify(updatedPrompts));
        setSavedPrompts(updatedPrompts);
      } catch (e) {
        console.error("Failed to delete prompt:", e);
        alert("Error: Could not delete the prompt.");
      }
    }
  };
  
  const handleResetPrompt = () => {
    if (window.confirm("Are you sure you want to reset the entire prompt to its default state? Any unsaved changes will be lost.")) {
        setPromptData(JSON.parse(initialPromptJson));
        setActiveConcept('custom');
    }
  };

  const handleCopyPrompt = () => {
    const promptText = wovenPrompt || constructSimplePromptString(promptData);
    navigator.clipboard.writeText(promptText)
      .then(() => alert('Final prompt copied to clipboard!'))
      .catch(err => {
        console.error('Failed to copy prompt: ', err);
        alert('Failed to copy prompt.');
      });
  };

  const handleAnalyzePrompt = async () => {
    if (!generationSettings.projectId || !generationSettings.accessToken) {
      setError('Please provide a valid Project ID and Access Token to use the analyzer.');
      return;
    }
    setIsAnalyzing(true);
    setError(null);
    setAnalysisSuggestions(null);
    try {
      const suggestions = await analyzePrompt(promptData, generationSettings);
      if (suggestions.length === 0) {
        alert("Analysis complete: No potential safety issues found!");
      } else {
        setAnalysisSuggestions(suggestions);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred during analysis.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleApplySuggestion = (suggestion: AnalysisSuggestion) => {
    const updateNestedState = (path: string, value: any) => {
      setPromptData(prevState => {
        const pathParts = path.split('.');
        const newState = JSON.parse(JSON.stringify(prevState));
        let current = newState;
        for (let i = 0; i < pathParts.length - 1; i++) {
          current = current[pathParts[i]];
        }
        current[pathParts[pathParts.length - 1]] = value;
        return newState;
      });
    };
    
    updateNestedState(suggestion.field, suggestion.suggestedText);
    setAnalysisSuggestions(prev => prev ? prev.filter(s => s !== suggestion) : null);
    setActiveConcept('custom');
  };

  const isBusy = isLoading || isEnhancing || isAnalyzing;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header />
      <main className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PromptEditor 
            promptData={promptData} 
            onPromptChange={handlePromptChange} 
            isLoading={isBusy}
            generationSettings={generationSettings}
            onGenerationSettingsChange={setGenerationSettings}
            activeConcept={activeConcept}
            onConceptChange={handleConceptChange}
          />
          <div className="lg:sticky lg:top-8 self-start">
            <ImageDisplay imageData={generatedImages} isLoading={isLoading} error={error} wovenPrompt={wovenPrompt} />
          </div>
        </div>
      </main>
      
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
        <button onClick={handleOpenLoadModal} disabled={isBusy} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>Load
        </button>
        <button onClick={handleSavePrompt} disabled={isBusy} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 014-4h4a4 4 0 014 4v2H7v-2z" /></svg>Save
        </button>
         <button onClick={handleCopyPrompt} disabled={isBusy} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>Copy
        </button>
        <button onClick={handleResetPrompt} disabled={isBusy} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>Reset
        </button>

        <div className="flex-grow flex justify-center w-full sm:w-auto order-first sm:order-none gap-2 sm:gap-4">
          <button onClick={handleAnalyzePrompt} disabled={isBusy} className="flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold text-base rounded-lg shadow-md hover:bg-sky-500 disabled:bg-sky-900/50 disabled:cursor-not-allowed transition-all duration-300">
            {isAnalyzing ? (
              <><svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Analyzing...</>
            ) : (
              <><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" /></svg>Analyze Prompt</>
            )}
          </button>
          <EnhanceDropdown onEnhance={handleEnhancePrompt} isEnhancing={isEnhancing} isBusy={isBusy} />
          <button onClick={handleGenerateImage} disabled={isBusy} className="flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-indigo-500 disabled:bg-indigo-900/50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105">
            {isLoading ? (
              <><svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Generating...</>
            ) : (
              <><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>Generate Image</>
            )}
          </button>
        </div>
      </div>

      <LoadPromptModal
        isOpen={isLoadModalOpen}
        onClose={() => setIsLoadModalOpen(false)}
        prompts={savedPrompts}
        onLoad={handleLoadSelectedPrompt}
        onDelete={handleDeletePrompt}
      />

      <AnalysisModal
        isOpen={!!analysisSuggestions && analysisSuggestions.length > 0}
        onClose={() => setAnalysisSuggestions(null)}
        suggestions={analysisSuggestions || []}
        onApply={handleApplySuggestion}
      />
    </div>
  );
};

export default App;