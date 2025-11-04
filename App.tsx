import React, { useState, useCallback, useEffect } from 'react';
import type { PromptData, SavedPrompt, GenerationSettings, EnhancementStyle, GeneratedImageData, AnalysisSuggestion, GenerationStep, ArtisticAnalysisResult, HistoryEntry, AdherenceLevel } from './types';
import { generateImage, enhancePrompt, analyzeArtisticContent, weavePrompt } from './services/geminiService';
import Header from './components/Header';
import PromptEditor from './components/PromptEditor';
import ImageDisplay from './components/ImageDisplay';
import LoadPromptModal from './components/LoadPromptModal';
import { ArtisticConcept } from './concepts/concepts';
import EnhanceDropdown from './components/EnhanceDropdown';
import AnalysisModal from './components/AnalysisModal';
import HistoryModal from './components/HistoryModal';
import StrategicGenerate from './components/StrategicGenerate';

const initialPromptJson = `{
  "shot": "Masterful portrait (4:5), capturing the interplay of light and emotion with profound depth.",
  "subject": {
    "age": "adult woman (25-30)",
    "appearance": "Indian fashion model (height 5'8\\"), with realistic body proportions (bust 36\\", waist 28\\", hips 38\\"), exuding a quiet confidence through a serene, direct gaze.",
    "pose": "Seated on an unseen surface, leaning slightly forward, one hand gently resting on her knee, creating a natural and engaging posture. The pose feels candid and unforced, inviting connection.",
    "hair_color": "dark",
    "hair_style": "long, loose waves with a few stray strands catching the light, styled with natural volume and texture",
    "skin_finish": "Natural, with a soft, healthy glow. Not overly matte or dewy, just authentic.",
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
  "quality": "Shot on a Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus on the eyes and hands. Every micro-detail, from fabric weave to skin pores, is rendered with absolute clarity.",
  "figure_and_form": "Natural form, emphasizing the realistic drape of fabric over the subject's physique. The lighting and pose are composed to be tasteful and artistic.",
  "skin_micro_details": "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing, creating a raw and honest depiction of beauty.",
  "fabric_physics": "The linen blouse drapes naturally, with realistic creases and folds that follow the subject's form. The weave of the fabric is visible upon close inspection, showing subtle textile imperfections.",
  "material_properties": "The off-white linen has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject's skin. No synthetic sheen."
}`;

const constructSimplePromptString = (data: PromptData): string => {
  return Object.entries(data).map(([key, value]) => {
      if (typeof value === 'object' && value !== null) { return Object.entries(value).map(([subKey, subValue]) => `${subKey}: ${subValue}`).join(', '); }
      return `${key}: ${value}`;
    }).join('. ');
};

const PROMPTS_STORAGE_key = 'ai-image-studio-prompts';
const HISTORY_STORAGE_key = 'ai-image-studio-history';
const MAX_HISTORY_SIZE = 20;

const App: React.FC = () => {
  const [promptData, setPromptData] = useState<PromptData>(JSON.parse(initialPromptJson));
  const [generatedImages, setGeneratedImages] = useState<GeneratedImageData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEnhancing, setIsEnhancing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [promptHistory, setPromptHistory] = useState<HistoryEntry[]>([]);
  const [activeConcept, setActiveConcept] = useState<string>('custom');
  const [analysisSuggestions, setAnalysisSuggestions] = useState<AnalysisSuggestion[] | null>(null);
  const [wovenPrompt, setWovenPrompt] = useState<string | null>(null);
  const [generationStep, setGenerationStep] = useState<GenerationStep | null>(null);
  const [autoFixMessage, setAutoFixMessage] = useState<string | null>(null);
  const [generationSettings, setGenerationSettings] = useState<GenerationSettings>({
    projectId: '', accessToken: '', numberOfImages: 1, aspectRatio: '9:16', personGeneration: 'allow_all',
    safetySetting: 'block_few', addWatermark: true, enhancePrompt: true, modelId: 'imagen-4.0-ultra-generate-001', seed: null,
    intimacyLevel: 6,
  });

  const handlePromptChange = useCallback((newPromptData: PromptData) => {
    setPromptData(newPromptData);
    setActiveConcept('custom');
  }, []);

  const handleConceptChange = useCallback((concept: ArtisticConcept) => {
    setPromptData(concept.data);
    setActiveConcept(concept.name);
  }, []);

  const validateCredentials = () => {
    if (!generationSettings.projectId || !generationSettings.accessToken) {
      setError('Please provide a valid Google Cloud Project ID and OAuth2 Access Token in the Generation Settings section.');
      return false;
    }
    return true;
  };

  const resetGenerationState = () => {
    setIsLoading(true); setError(null); setGeneratedImages(null);
    setWovenPrompt(null); setAnalysisSuggestions(null); setAutoFixMessage(null);
  };

  const applySuggestionsToPrompt = (currentPrompt: PromptData, suggestions: AnalysisSuggestion[]): PromptData => {
    let updatedPromptData = JSON.parse(JSON.stringify(currentPrompt));
    suggestions.forEach(suggestion => {
        try {
            const pathParts = suggestion.field.split('.');
            let current: any = updatedPromptData;
            for (let i = 0; i < pathParts.length - 1; i++) { current = current[pathParts[i]]; }
            current[pathParts[pathParts.length - 1]] = suggestion.suggestedText;
        } catch (e) { console.error(`Failed to apply suggestion for field: ${suggestion.field}`, e); }
    });
    return updatedPromptData;
  };

  const loadHistoryFromStorage = (): HistoryEntry[] => {
    try {
      const storedHistory = localStorage.getItem(HISTORY_STORAGE_key);
      return storedHistory ? JSON.parse(storedHistory) : [];
    } catch (e) { console.error("Failed to load history:", e); return []; }
  };

  const addToHistory = (promptToAdd: PromptData, settingsToAdd: GenerationSettings) => {
    const newEntry: HistoryEntry = { timestamp: Date.now(), data: promptToAdd, settings: settingsToAdd };
    setPromptHistory(currentHistory => {
      if (currentHistory.length > 0 && JSON.stringify(currentHistory[0].data) === JSON.stringify(promptToAdd)) return currentHistory;
      const updatedHistory = [newEntry, ...currentHistory].slice(0, MAX_HISTORY_SIZE);
      try { localStorage.setItem(HISTORY_STORAGE_key, JSON.stringify(updatedHistory)); } catch (e) { console.error("Failed to save history:", e); }
      return updatedHistory;
    });
  };

  useEffect(() => { setPromptHistory(loadHistoryFromStorage()); }, []);

  const handleStrategicGenerate = async (adherence: AdherenceLevel) => {
    if (!validateCredentials()) return;
    addToHistory(promptData, generationSettings);
    resetGenerationState();
    let promptForNextStep = promptData;
    try {
        setGenerationStep('analyzing');
        const analysisResult = await analyzeArtisticContent(promptData, generationSettings);
        if (analysisResult.suggestions && analysisResult.suggestions.length > 0) {
            setAutoFixMessage(`Applying ${adherence} safety enhancements...`);
            setGenerationStep('auto-fixing');
            const refinedPromptData = applySuggestionsToPrompt(promptData, analysisResult.suggestions);
            setPromptData(refinedPromptData);
            promptForNextStep = refinedPromptData;
        }
        setGenerationStep('weaving');
        const finalPrompt = await weavePrompt(promptForNextStep, generationSettings, { adherence });
        setWovenPrompt(finalPrompt);
        setGenerationStep('generating');
        const imagesB64 = await generateImage(finalPrompt, generationSettings);
        const newImageData = imagesB64.map(b64 => ({ url: `data:image/jpeg;base64,${b64}`, settings: { modelId: generationSettings.modelId, seed: generationSettings.seed, aspectRatio: generationSettings.aspectRatio } }));
        setGeneratedImages(newImageData);
    } catch (err) { setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally { setIsLoading(false); setGenerationStep(null); }
  };
  
  const handleLockWardrobeGenerate = async () => {
    if (!validateCredentials()) return;
    addToHistory(promptData, generationSettings);
    resetGenerationState();
    try {
        setGenerationStep('weaving');
        setAutoFixMessage('Weaving prompt while keeping wardrobe description locked...');
        const finalPrompt = await weavePrompt(promptData, generationSettings, { lockFields: ['wardrobe'] });
        setWovenPrompt(finalPrompt);
        
        setGenerationStep('generating');
        const imagesB64 = await generateImage(finalPrompt, generationSettings);
        const newImageData = imagesB64.map(b64 => ({ url: `data:image/jpeg;base64,${b64}`, settings: { modelId: generationSettings.modelId, seed: generationSettings.seed, aspectRatio: generationSettings.aspectRatio } }));
        setGeneratedImages(newImageData);
    } catch (err) { setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally { setIsLoading(false); setGenerationStep(null); }
  };

  const handleUnwovenGenerate = async () => {
    if (!validateCredentials()) return;
    addToHistory(promptData, generationSettings);
    resetGenerationState();
    try {
      setGenerationStep('generating');
      const finalPrompt = constructSimplePromptString(promptData);
      setWovenPrompt(`RAW (Unwoven): ${finalPrompt}`);
      const imagesB64 = await generateImage(finalPrompt, generationSettings);
      const newImageData = imagesB64.map(b64 => ({ url: `data:image/jpeg;base64,${b64}`, settings: { modelId: generationSettings.modelId, seed: generationSettings.seed, aspectRatio: generationSettings.aspectRatio } }));
      setGeneratedImages(newImageData);
    } catch (err) { setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally { setIsLoading(false); setGenerationStep(null); }
  };

  const handleEnhancePrompt = async (style: EnhancementStyle) => {
    if (!validateCredentials()) return;
    setIsEnhancing(true); setError(null);
    try {
      const enhancedData = await enhancePrompt(promptData, generationSettings, style);
      setPromptData(enhancedData);
      setActiveConcept('custom');
    } catch (err) { setError(err instanceof Error ? err.message : 'An unknown error occurred during enhancement.');
    } finally { setIsEnhancing(false); }
  };

  const handleSavePrompt = () => {
    const name = window.prompt("Enter a name for this prompt configuration:");
    if (name && name.trim()) {
      try {
        const storedPrompts = localStorage.getItem(PROMPTS_STORAGE_key);
        const prompts: SavedPrompt[] = storedPrompts ? JSON.parse(storedPrompts) : [];
        const newSavedPrompt: SavedPrompt = { name, data: promptData, settings: generationSettings };
        const existingPromptIndex = prompts.findIndex(p => p.name === name);
        if (existingPromptIndex !== -1) {
          if (!window.confirm(`A prompt with the name "${name}" already exists. Overwrite it?`)) return;
          prompts[existingPromptIndex] = newSavedPrompt;
        } else { prompts.push(newSavedPrompt); }
        localStorage.setItem(PROMPTS_STORAGE_key, JSON.stringify(prompts));
        alert(`Prompt "${name}" saved successfully!`);
      } catch (e) { console.error("Failed to save prompt:", e); alert("Error: Could not save the prompt."); }
    }
  };

  const loadPromptsFromStorage = (): SavedPrompt[] => {
    try {
      const storedPrompts = localStorage.getItem(PROMPTS_STORAGE_key);
      return storedPrompts ? JSON.parse(storedPrompts) : [];
    } catch (e) { console.error("Failed to load prompts:", e); return []; }
  };

  const handleOpenLoadModal = () => { setSavedPrompts(loadPromptsFromStorage()); setIsLoadModalOpen(true); };
  const handleLoadSelectedPrompt = (promptToLoad: SavedPrompt) => {
    handlePromptChange(promptToLoad.data);
    setGenerationSettings(prev => ({...prev, ...promptToLoad.settings}));
    setIsLoadModalOpen(false);
  };
  const handleDeletePrompt = (name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      try {
        const prompts = loadPromptsFromStorage();
        const updatedPrompts = prompts.filter((p: SavedPrompt) => p.name !== name);
        localStorage.setItem(PROMPTS_STORAGE_key, JSON.stringify(updatedPrompts));
        setSavedPrompts(updatedPrompts);
      } catch (e) { console.error("Failed to delete prompt:", e); alert("Error: Could not delete prompt."); }
    }
  };
  const handleResetPrompt = () => {
    if (window.confirm("Reset the prompt to its default state? Unsaved changes will be lost.")) {
      setPromptData(JSON.parse(initialPromptJson));
      setActiveConcept('custom');
    }
  };
  const handleCopyPrompt = () => {
    const promptText = wovenPrompt || constructSimplePromptString(promptData);
    navigator.clipboard.writeText(promptText).then(() => alert('Final prompt copied to clipboard!')).catch(err => {
      console.error('Failed to copy prompt: ', err); alert('Failed to copy prompt.');
    });
  };
  const handleApplySuggestion = (suggestion: AnalysisSuggestion) => {
     setPromptData(currentPrompt => applySuggestionsToPrompt(currentPrompt, [suggestion]));
     setAnalysisSuggestions(prev => prev ? prev.filter(s => s !== suggestion) : null);
     setActiveConcept('custom');
  };
  const handleOpenHistoryModal = () => { setPromptHistory(loadHistoryFromStorage()); setIsHistoryModalOpen(true); };
  const handleLoadFromHistory = (entryToLoad: HistoryEntry) => {
    handlePromptChange(entryToLoad.data);
    setGenerationSettings(prev => ({...prev, ...entryToLoad.settings}));
    setIsHistoryModalOpen(false);
  };
  const handleClearHistory = () => {
    if (window.confirm("Clear the entire prompt history? This cannot be undone.")) {
      try {
        localStorage.removeItem(HISTORY_STORAGE_key);
        setPromptHistory([]);
        setIsHistoryModalOpen(false);
      } catch (e) { console.error("Failed to clear history:", e); alert("Error: Could not clear history."); }
    }
  };

  const isBusy = isLoading || isEnhancing;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header />
      <main className="p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PromptEditor promptData={promptData} onPromptChange={handlePromptChange} isLoading={isBusy}
            generationSettings={generationSettings} onGenerationSettingsChange={setGenerationSettings}
            activeConcept={activeConcept} onConceptChange={handleConceptChange} />
          <div className="lg:sticky lg:top-8 self-start">
            <ImageDisplay imageData={generatedImages} isLoading={isLoading} error={error} wovenPrompt={wovenPrompt} generationStep={generationStep} autoFixMessage={autoFixMessage} />
          </div>
        </div>
      </main>
      
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
        <button onClick={handleOpenLoadModal} disabled={isBusy} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>Load
        </button>
        <button onClick={handleOpenHistoryModal} disabled={isBusy} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>History
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
          <EnhanceDropdown onEnhance={handleEnhancePrompt} isEnhancing={isEnhancing} isBusy={isBusy} />
          <div className="flex items-center gap-2">
            <StrategicGenerate onGenerate={handleStrategicGenerate} isLoading={isLoading} generationStep={generationStep} />
            <div className="flex flex-col gap-1">
                <button onClick={handleLockWardrobeGenerate} disabled={isBusy} title="Weave prompt but keep wardrobe text exactly as written." className="flex items-center justify-center gap-2 px-3 py-1.5 bg-indigo-700 text-white font-semibold text-xs rounded-md shadow-md hover:bg-indigo-600 disabled:bg-indigo-800/50 disabled:cursor-not-allowed transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                    Lock Wardrobe
                </button>
                <button onClick={handleUnwovenGenerate} disabled={isBusy} title="Skip all AI weaving. Sends a raw string of values." className="flex items-center justify-center gap-2 px-3 py-1.5 bg-gray-700 text-white font-semibold text-xs rounded-md shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    Raw
                </button>
            </div>
          </div>
        </div>
      </div>
      <LoadPromptModal isOpen={isLoadModalOpen} onClose={() => setIsLoadModalOpen(false)} prompts={savedPrompts} onLoad={handleLoadSelectedPrompt} onDelete={handleDeletePrompt} />
      <HistoryModal isOpen={isHistoryModalOpen} onClose={() => setIsHistoryModalOpen(false)} history={promptHistory} onLoad={handleLoadFromHistory} onClear={handleClearHistory} />
      <AnalysisModal isOpen={!!analysisSuggestions && analysisSuggestions.length > 0} onClose={() => setAnalysisSuggestions(null)} suggestions={analysisSuggestions || []} onApply={handleApplySuggestion} />
    </div>
  );
};
export default App;
