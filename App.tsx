import React, { useState, useCallback, useEffect } from 'react';
import type { PromptData, SavedPrompt, GenerationSettings, EnhancementStyle, GeneratedImageData, AnalysisSuggestion, GenerationStep, HistoryEntry, AdherenceLevel, CloudStorageConfig, StorageProvider, StorageSettings, CalculatedLevels } from './types';
import { generateImage, enhancePrompt, weavePrompt, generateAndSaveImage, type StorageConfig, applyAdvancedSelections } from './services/geminiService';
import { DEFAULT_BUCKET_NAME } from './services/cloudStorageService';
import { DEFAULT_DRIVE_FOLDER } from './services/googleDriveService';
import Header from './components/Header';
import PromptEditor from './components/PromptEditor';
import ImageDisplay from './components/ImageDisplay';
import LoadPromptModal from './components/LoadPromptModal';
import { ArtisticConcept } from './concepts/concepts';
import AnalysisModal from './components/AnalysisModal';
import HistoryModal from './components/HistoryModal';
import LockFieldsDropdown from './components/LockFieldsDropdown';
import MasterGenerationControl, { MasterGenerateOptions } from './components/MasterGenerationControl';
import GalleryModal from './components/GalleryModal';
import StorageConfigModal from './components/StorageConfigModal';
import PromptReviewModal from './components/PromptReviewModal';
import TextPromptEditor from './components/TextPromptEditor';
import ExperimentalMode from './experimental/ExperimentalMode';
import { mapNodesToPromptData } from './experimental/nodeToPromptMapper';
import ArtisticMode from './artistic/ArtisticMode';
import CorporateMode from './corporate/CorporateMode';
import type { ArtisticGenerationConfig } from './artistic/types';
import type { CorporatePowerState } from './corporate/types';
import { CORPORATE_ROLES } from './corporate/corporateRoles';
import { OFFICE_ENVIRONMENTS } from './corporate/corporateEnvironments';

const initialPromptJson = `{
  "shot": "Masterful portrait (4:5), capturing the interplay of light and emotion with profound depth.",
  "subject": {
    "variant": "Indian model with a modern, expressive face perfect for cinematic close-ups (height 5'8\\"). Possesses a slender but soft athletic form (bust 36C\\", waist 28\\", hips 38\\"). Her luminous fair skin tone interacts beautifully with dramatic chiaroscuro lighting, conveying deep emotion through a serene, direct gaze.",
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
  const safeStringify = (value: any): string => {
    if (value === null || value === undefined) return '';
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      return Object.entries(value)
        .map(([k, v]) => `${k}: ${safeStringify(v)}`)
        .filter(Boolean)
        .join(', ');
    }
    return String(value);
  };

  return Object.entries(data)
    .map(([key, value]) => `${key}: ${safeStringify(value)}`)
    .filter(Boolean)
    .join('. ');
};

const PROMPTS_STORAGE_key = 'ai-image-studio-prompts';
const HISTORY_STORAGE_key = 'ai-image-studio-history';
const MAX_HISTORY_SIZE = 20;

const App: React.FC = () => {
  const [uiMode, setUiMode] = useState<'classic' | 'experimental' | 'artistic' | 'corporate'>('classic');
  const [promptMode, setPromptMode] = useState<'json' | 'text'>('json');
  const [textPrompt, setTextPrompt] = useState<string>('');
  const [promptData, setPromptData] = useState<PromptData>(JSON.parse(initialPromptJson));
  const [generatedImages, setGeneratedImages] = useState<GeneratedImageData[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoadModalOpen, setIsLoadModalOpen] = useState(false);
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [promptHistory, setPromptHistory] = useState<HistoryEntry[]>([]);
  const [activeConcept, setActiveConcept] = useState<string>('custom');
  const [analysisSuggestions, setAnalysisSuggestions] = useState<AnalysisSuggestion[] | null>(null);
  const [wovenPrompt, setWovenPrompt] = useState<string | null>(null);
  const [generationStep, setGenerationStep] = useState<GenerationStep | null>(null);
  const [lockedFields, setLockedFields] = useState<string[]>([]);
  const [generationSettings, setGenerationSettings] = useState<GenerationSettings>({
    provider: 'vertex-ai',
    projectId: '', accessToken: '', numberOfImages: 1, aspectRatio: '9:16', personGeneration: 'allow_all',
    safetySetting: 'block_few', addWatermark: true, enhancePrompt: true, modelId: 'imagen-4.0-ultra-generate-001', seed: null,
    intimacyLevel: 6,
    replicateApiToken: '',
    fluxModel: 'black-forest-labs/flux-1.1-pro-ultra',
    fluxRawMode: true,
    fluxSafetyTolerance: 4,
    // Weaving Settings (for using Google Gemini weaving with Flux generation)
    weavingProjectId: '',
    weavingAccessToken: '',
    useGoogleForWeaving: false,
  });
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isStorageModalOpen, setIsStorageModalOpen] = useState(false);
  const [isPromptReviewModalOpen, setIsPromptReviewModalOpen] = useState(false);
  const [pendingGeneration, setPendingGeneration] = useState<{
    finalPrompt: string;
    promptData: PromptData;
    continueGeneration: () => Promise<void>;
  } | null>(null);
  const [storageSettings, setStorageSettings] = useState<StorageSettings>({
    enableStorage: false, // Disabled by default - user must enable explicitly
    provider: 'google-drive',
    bucketName: DEFAULT_BUCKET_NAME,
    driveFolderName: DEFAULT_DRIVE_FOLDER,
    driveAccessToken: '',
  });


  const handlePromptChange = useCallback((newPromptData: PromptData) => {
    setPromptData(newPromptData);
    setActiveConcept('custom');
  }, []);

  const handleConceptChange = useCallback((concept: ArtisticConcept) => {
    setPromptData(concept.data);
    setActiveConcept(concept.name);
  }, []);

  const validateCredentials = (options?: MasterGenerateOptions) => {
    // Validate generation provider credentials
    if (generationSettings.provider === 'vertex-ai') {
      if (!generationSettings.projectId || !generationSettings.accessToken) {
        setError('Please provide a valid Google Cloud Project ID and OAuth2 Access Token in the Generation Settings section.');
        return false;
      }
    } else if (generationSettings.provider === 'replicate-flux') {
      if (!generationSettings.replicateApiToken) {
        setError('Please provide a valid Replicate API Token in the Generation Settings section.');
        return false;
      }
    }

    // Validate weaving credentials if weaving/enhancement enabled with Flux + Google weaving
    if (options?.weave?.enabled || options?.enhance?.enabled) {
      if (generationSettings.provider === 'replicate-flux' && generationSettings.useGoogleForWeaving) {
        if (!generationSettings.weavingProjectId || !generationSettings.weavingAccessToken) {
          setError('Google weaving enabled but missing credentials. Please provide Project ID and Token for weaving, or disable "Use Google for Weaving".');
          return false;
        }
      }
    }

    return true;
  };

  const resetGenerationState = () => {
    setIsLoading(true); setError(null); setGeneratedImages(null);
    setWovenPrompt(null); setAnalysisSuggestions(null);
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

  // Load tokens from localStorage on startup
  useEffect(() => {
    const mainToken = localStorage.getItem('mainToken');
    const driveToken = localStorage.getItem('driveToken');
    const replicateToken = localStorage.getItem('replicateToken');
    const weavingToken = localStorage.getItem('weavingToken');

    let loadedCount = 0;
    const missingTokens: string[] = [];

    if (mainToken) {
      setGenerationSettings(prev => ({ ...prev, accessToken: mainToken }));
      loadedCount++;
    } else {
      missingTokens.push('Vertex AI');
    }

    if (driveToken) {
      setStorageSettings(prev => ({ ...prev, driveAccessToken: driveToken }));
      loadedCount++;
    } else {
      missingTokens.push('Google Drive');
    }

    if (replicateToken) {
      setGenerationSettings(prev => ({ ...prev, replicateApiToken: replicateToken }));
      loadedCount++;
    } else {
      missingTokens.push('Replicate');
    }

    if (weavingToken) {
      setGenerationSettings(prev => ({ ...prev, weavingAccessToken: weavingToken }));
      loadedCount++;
      console.log('✅ Weaving token loaded (for Google Gemini weaving with Flux)');
    }

    // Single consolidated message
    if (loadedCount > 0) {
      console.log(`✅ Loaded ${loadedCount} token(s) from localStorage`);
    }

    if (missingTokens.length > 0) {
      console.log(`ℹ️ Missing tokens for: ${missingTokens.join(', ')}`);
      console.log('💡 To set tokens, open console and paste:');
      if (missingTokens.includes('Vertex AI')) {
        console.log('   localStorage.setItem("mainToken", "YOUR_VERTEX_TOKEN");');
      }
      if (missingTokens.includes('Google Drive')) {
        console.log('   localStorage.setItem("driveToken", "YOUR_DRIVE_TOKEN");');
      }
      if (missingTokens.includes('Replicate')) {
        console.log('   localStorage.setItem("replicateToken", "YOUR_REPLICATE_TOKEN");');
      }
      console.log('   localStorage.setItem("weavingToken", "YOUR_GOOGLE_TOKEN_FOR_WEAVING");');
    }
  }, []);

  // Execute the actual image generation (called after prompt review or immediately)
  const executeGeneration = async (finalPrompt: string, promptForNextStep: PromptData, options: MasterGenerateOptions) => {
    try {
      setIsLoading(true);
      setGenerationStep('generating');

      // Build storage config based on user selection
      let storageConfig: StorageConfig | null = null;
      if (storageSettings.enableStorage) {
        if (storageSettings.provider === 'google-drive') {
          // Use separate Drive token if provided, otherwise use main token
          const driveToken = storageSettings.driveAccessToken || generationSettings.accessToken;
          storageConfig = {
            provider: 'google-drive',
            googleDrive: {
              accessToken: driveToken,
              folderName: storageSettings.driveFolderName
            }
          };
        } else {
          storageConfig = {
            provider: 'cloud-storage',
            cloudStorage: {
              projectId: generationSettings.projectId,
              bucketName: storageSettings.bucketName,
              accessToken: generationSettings.accessToken,
              region: 'us-east4'
            }
          };
        }
      }

      let result;

      // Route to appropriate generation service
      if (generationSettings.provider === 'replicate-flux') {
        // Use Replicate Flux API
        const { generateWithFlux, getOptimalFluxSettings } = await import('./services/replicateService');

        // Get optimal Flux settings based on intimacy level
        const fluxOptimalSettings = getOptimalFluxSettings(generationSettings.intimacyLevel);

        const fluxConfig = {
          apiToken: generationSettings.replicateApiToken!,
          model: generationSettings.fluxModel || fluxOptimalSettings.model!,
          aspectRatio: generationSettings.aspectRatio,
          numOutputs: generationSettings.numberOfImages,
          seed: generationSettings.seed,
          outputFormat: (generationSettings.fluxOutputFormat || 'jpg') as 'jpg' | 'png',
          outputQuality: fluxOptimalSettings.outputQuality || 90,
          raw: generationSettings.fluxRawMode !== undefined ? generationSettings.fluxRawMode : fluxOptimalSettings.raw,
          safetyTolerance: generationSettings.fluxSafetyTolerance || fluxOptimalSettings.safetyTolerance,
          numInferenceSteps: fluxOptimalSettings.numInferenceSteps,
          guidanceScale: fluxOptimalSettings.guidanceScale,
        };

        console.log('🎨 Using Replicate Flux:', {
          model: fluxConfig.model,
          raw: fluxConfig.raw,
          safetyTolerance: fluxConfig.safetyTolerance,
          outputFormat: fluxConfig.outputFormat,
          intimacyLevel: generationSettings.intimacyLevel,
        });

        const base64Images = await generateWithFlux(finalPrompt, fluxConfig);

        result = {
          images: base64Images,
          metadata: [], // Flux doesn't need metadata for storage (images are already downloaded)
          errors: [],
        };
      } else {
        // Use Vertex AI Imagen
        result = await generateAndSaveImage(
          finalPrompt,
          generationSettings,
          promptForNextStep,
          activeConcept,
          storageConfig
        );
      }

      const newImageData = result.images.map(b64 => ({
        url: `data:image/jpeg;base64,${b64}`,
        settings: {
          modelId: generationSettings.provider === 'vertex-ai'
            ? generationSettings.modelId
            : (generationSettings.fluxModel || 'flux-1.1-pro-ultra'),
          seed: generationSettings.seed,
          aspectRatio: generationSettings.aspectRatio
        }
      }));
      setGeneratedImages(newImageData);

      // Log upload results
      if (storageSettings.enableStorage) {
        const providerName = storageSettings.provider === 'google-drive' ? 'Google Drive' : 'Cloud Storage';
        console.log(`✅ Uploaded ${result.metadata.length} images to ${providerName}`);
        if (result.errors.length > 0) {
          console.warn('Upload errors:', result.errors);
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
      throw err; // Re-throw to be caught by handleMasterGenerate
    } finally {
      setIsLoading(false);
      setGenerationStep(null);
    }
  };

  const handleMasterGenerate = async (options: MasterGenerateOptions) => {
    if (!validateCredentials(options)) return;
    addToHistory(promptData, generationSettings);
    resetGenerationState();

    let promptForNextStep = promptData;
    let finalPrompt = '';

    try {
      // Check if we're in text mode
      if (promptMode === 'text') {
        if (!textPrompt.trim()) {
          setError('Please enter a text prompt before generating.');
          return;
        }

        console.log('📝 Using direct text prompt mode');

        // In text mode, we can still apply enhancement/weaving if requested
        // But we start with the raw text instead of JSON

        // 1. (Optional) Weave Text Prompt
        if (options.weave.enabled && (generationSettings.provider === 'vertex-ai' || generationSettings.useGoogleForWeaving)) {
          setGenerationStep('weaving');
          try {
            // For text mode weaving, we'll use the text as-is with Gemini to improve it
            const response = await fetch(`https://us-east4-aiplatform.googleapis.com/v1/projects/${generationSettings.useGoogleForWeaving ? generationSettings.weavingProjectId : generationSettings.projectId}/locations/us-east4/publishers/google/models/gemini-2.5-pro:generateContent`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${generationSettings.useGoogleForWeaving ? generationSettings.weavingAccessToken : generationSettings.accessToken}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                contents: [{
                  role: 'user',
                  parts: [{ text: `You are a master photographer helping to refine an image generation prompt. Improve and expand this prompt for maximum clarity and detail, maintaining its original intent:\n\n${textPrompt}` }]
                }],
                generationConfig: {
                  temperature: 0.3,
                  maxOutputTokens: 2048,
                }
              })
            });

            if (response.ok) {
              const data = await response.json();
              finalPrompt = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || textPrompt;
              setWovenPrompt(finalPrompt);
              console.log('✅ Text prompt woven successfully');
            } else {
              throw new Error('Failed to weave text prompt');
            }
          } catch (weaveError) {
            console.error('Weaving failed:', weaveError);
            setError(`⚠️ Weaving failed: ${weaveError instanceof Error ? weaveError.message : 'Unknown error'}. Using original text prompt.`);
            finalPrompt = textPrompt;
            setWovenPrompt(`RAW TEXT PROMPT: ${finalPrompt}`);
          }
        } else {
          // Use text prompt as-is
          finalPrompt = textPrompt;
          setWovenPrompt(`RAW TEXT PROMPT: ${finalPrompt}`);
        }

        promptForNextStep = promptData; // Keep promptData for metadata/history
      } else {
        // JSON Mode - existing flow
        // 0. (Optional) Apply Advanced Selectors FIRST
        const hasAdvancedSelections =
          options.intimateWeaving?.enabled ||
          options.wardrobeSelection?.enabled ||
          options.qualityPreset?.enabled;

        if (hasAdvancedSelections) {
          console.log('🎨 Applying Advanced Super-Seductress Selectors...');
          promptForNextStep = applyAdvancedSelections(promptForNextStep, {
            intimateWeaving: options.intimateWeaving,
            wardrobeSelection: options.wardrobeSelection,
            qualityPreset: options.qualityPreset
          });
          setPromptData(promptForNextStep); // Update UI to show enhanced prompt
        }

        // 1. (Optional) Enhance Prompt
        if (options.enhance.enabled) {
          setGenerationStep('enhancing');
          try {
            const enhancedData = await enhancePrompt(promptForNextStep, generationSettings, options.enhance.style, lockedFields);
            setPromptData(enhancedData);
            promptForNextStep = enhancedData;
          } catch (enhanceError) {
            console.error('Enhancement failed:', enhanceError);
            setError(`⚠️ Enhancement failed: ${enhanceError instanceof Error ? enhanceError.message : 'Unknown error'}. Proceeding with original prompt.`);
            // Continue with original prompt - don't throw
          }
        }

        // 2. (Optional) Weave Prompt
        if (options.weave.enabled) {
          setGenerationStep('weaving');
          try {
            finalPrompt = await weavePrompt(promptForNextStep, generationSettings, {
              adherence: options.weave.adherence,
              lockFields: lockedFields,
              weavingMode: options.weave.weavingMode
            });
            setWovenPrompt(finalPrompt);
          } catch (weaveError) {
            console.error('Weaving failed:', weaveError);
            throw new Error(`Prompt weaving failed: ${weaveError instanceof Error ? weaveError.message : 'Unknown error'}`);
          }
        } else {
          // 3. (If no weave) Use Raw Prompt
          finalPrompt = constructSimplePromptString(promptForNextStep);
          setWovenPrompt(`RAW PROMPT: ${finalPrompt}`);
        }
      }

      // 3.5. (Optional) Show Prompt Review Modal
      if (generationSettings.reviewPromptBeforeGeneration) {
        // Create a continuation function that will be called when user confirms
        const continueGeneration = async () => {
          await executeGeneration(finalPrompt, promptForNextStep, options);
        };

        // Show the modal and wait for user action
        setPendingGeneration({
          finalPrompt,
          promptData: promptForNextStep,
          continueGeneration,
        });
        setIsPromptReviewModalOpen(true);
        setIsLoading(false); // Stop loading indicator while waiting for user
        return; // Exit here - will continue when user confirms
      }

      // 4. Generate Image and Save to Storage
      await executeGeneration(finalPrompt, promptForNextStep, options);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
      setGenerationStep(null);
    }
  };


  const handlePromptReviewGenerate = async () => {
    if (!pendingGeneration) return;

    try {
      await pendingGeneration.continueGeneration();
    } catch (err) {
      // Error is already handled in executeGeneration
      console.error('Generation failed:', err);
    } finally {
      setPendingGeneration(null);
      setIsPromptReviewModalOpen(false);
    }
  };

  const handlePromptReviewCancel = () => {
    setPendingGeneration(null);
    setIsPromptReviewModalOpen(false);
    setIsLoading(false);
    setGenerationStep(null);
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

  const handleExperimentalGenerate = (selectedNodes: string[], levels: CalculatedLevels) => {
    // Convert node configuration to PromptData
    const configuredPrompt = mapNodesToPromptData(selectedNodes, levels, promptData);

    // Update prompt data
    setPromptData(configuredPrompt);
    setActiveConcept('experimental-config');

    // Switch back to classic mode to show the result
    setUiMode('classic');

    // Trigger master generation with default settings
    // Use PassionWeave as default for experimental mode
    const options: MasterGenerateOptions = {
      enhance: { enabled: true, style: 'creative' },
      weave: { enabled: true, adherence: 'balanced', weavingMode: 'passion' },
    };

    handleMasterGenerate(options);
  };

  const handleExitExperimental = () => {
    setUiMode('classic');
  };

  const handleArtisticGenerate = async (prompt: string, settings: any) => {
    // Artistic mode passes a complete prompt and calibrated settings
    setIsLoading(true);
    setError(null);
    setGenerationStep({ step: 'generating', message: 'Generating artistic image...' });

    try {
      const images = await generateImage(
        prompt,
        {
          ...generationSettings,
          ...settings,
        }
      );

      setGeneratedImages(images.map(img => ({
        imageUrl: img.imageUrl,
        prompt: prompt,
        provider: settings.provider || generationSettings.provider,
        timestamp: new Date().toISOString()
      })));

      setWovenPrompt(prompt);
      setGenerationStep(null);
    } catch (err) {
      console.error('Artistic generation error:', err);
      setError(err instanceof Error ? err.message : 'Unknown error during artistic generation');
      setGenerationStep(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExitArtistic = () => {
    setUiMode('classic');
  };

  const handleCorporateGenerate = async (prompt: string, settings: any) => {
    // Corporate mode passes a complete prompt and calibrated settings
    setIsLoading(true);
    setError(null);
    setGenerationStep({ step: 'generating', message: 'Generating corporate image...' });

    try {
      const images = await generateImage(
        prompt,
        {
          ...generationSettings,
          ...settings,
        }
      );

      setGeneratedImages(images.map(img => ({
        imageUrl: img.imageUrl,
        prompt: prompt,
        provider: settings.provider || generationSettings.provider,
        timestamp: new Date().toISOString()
      })));

      setWovenPrompt(prompt);
      setGenerationStep(null);
    } catch (err) {
      console.error('Corporate generation error:', err);
      setError(err instanceof Error ? err.message : 'Unknown error during corporate generation');
      setGenerationStep(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExitCorporate = () => {
    setUiMode('classic');
  };

  const handleMigrateFromArtistic = (prompt: string, config: ArtisticGenerationConfig) => {
    // Map artistic config to JSON promptData
    const newPromptData: PromptData = {
      ...promptData,
      shot: `Fine-art ${config.masterStyle} photography. Intimacy level ${config.intimacyLevel}/10. ${config.qualityPreset} quality preset.`,
      subject: {
        ...promptData.subject,
        variant: config.modelArchetype || promptData.subject.variant,
        pose: config.customPose || promptData.subject.pose,
      },
      wardrobe: config.customWardrobe || promptData.wardrobe,
      environment: config.selectedScene || promptData.environment,
      lighting: `${config.masterStyle} style lighting with ${config.qualityPreset} quality`,
      style: `Master photographer ${config.masterStyle} style with intimacy level ${config.intimacyLevel}`,
    };

    setPromptData(newPromptData);
    setPromptMode('json');
    setUiMode('classic');

    setTimeout(() => {
      alert('Artistic configuration migrated to JSON mode! Review and adjust the fields as needed.');
    }, 100);
  };

  const handleMigrateFromCorporate = (prompt: string, state: CorporatePowerState) => {
    // Map corporate state to JSON promptData
    const role = state.selectedRole ? CORPORATE_ROLES.find(r => r.role === state.selectedRole) : null;
    const environment = state.selectedEnvironment ? OFFICE_ENVIRONMENTS.find(e => e.type === state.selectedEnvironment) : null;

    const newPromptData: PromptData = {
      ...promptData,
      shot: `Corporate power photography. Intimacy ${state.intimacyCalibration.level}/10, ${state.intimacyCalibration.powerDynamic} dynamic, ${state.intimacyCalibration.artisticExplicitness} explicitness.`,
      subject: {
        ...promptData.subject,
        variant: `Indian ${role?.role.replace(/_/g, ' ') || 'executive'} with ${role?.sensualityStyle || 'sophisticated'} presence. ${state.modelVariant}`,
        pose: state.customPose || role?.powerPoses[0] || promptData.subject.pose,
      },
      wardrobe: state.customWardrobe || `${state.intimacyCalibration.artisticExplicitness} corporate attire with wardrobe reveal level ${state.intimacyCalibration.wardrobeReveal}/10`,
      environment: environment?.exclusiveSpaces[0] || promptData.environment,
      lighting: environment?.lightingProfiles[0] || promptData.lighting,
      style: `Corporate fine-art photography. Power level ${role?.powerLevel || 7}/10. ${environment?.aesthetic || 'Luxury corporate aesthetic'}`,
    };

    setPromptData(newPromptData);
    setPromptMode('json');
    setUiMode('classic');

    setTimeout(() => {
      alert('Corporate configuration migrated to JSON mode! Review and adjust the fields as needed.');
    }, 100);
  };

  // Defensive rendering - ensure we always have valid state
  const safePromptData = promptData || JSON.parse(initialPromptJson);
  const safeGenerationSettings = generationSettings || {
    provider: 'vertex-ai' as const,
    projectId: '',
    accessToken: '',
    numberOfImages: 1,
    aspectRatio: '9:16' as const,
    personGeneration: 'allow_all' as const,
    safetySetting: 'block_few' as const,
    addWatermark: true,
    enhancePrompt: true,
    modelId: 'imagen-4.0-ultra-generate-001',
    seed: null,
    intimacyLevel: 6,
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      {uiMode === 'experimental' ? (
        // EXPERIMENTAL MODE: Visual Node-Based Configuration
        <ExperimentalMode
          onGenerateWithConfig={handleExperimentalGenerate}
          onExit={handleExitExperimental}
        />
      ) : uiMode === 'artistic' ? (
        // ARTISTIC MODE: Master Photographer Style Generator
        <ArtisticMode
          onGenerate={handleArtisticGenerate}
          onExit={handleExitArtistic}
          onMigrateToMain={handleMigrateFromArtistic}
          generationSettings={safeGenerationSettings}
        />
      ) : uiMode === 'corporate' ? (
        // CORPORATE MODE: Executive Sensuality Generator
        <CorporateMode
          onGenerate={handleCorporateGenerate}
          onExit={handleExitCorporate}
          onMigrateToMain={handleMigrateFromCorporate}
          generationSettings={safeGenerationSettings}
        />
      ) : (
        // CLASSIC MODE: Traditional Prompt Editor
        <>
          <Header />

          {/* Mode Toggle */}
          <div className="p-4 md:px-8 md:pt-4 md:pb-0">
            <div className="flex items-center justify-center gap-2 bg-gray-800 rounded-lg p-1 border border-gray-700 w-fit mx-auto">
              <button
                onClick={() => setPromptMode('json')}
                disabled={isLoading}
                className={`px-6 py-2 rounded-md font-semibold transition-all flex items-center gap-2 ${
                  promptMode === 'json'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                JSON Mode
              </button>
              <button
                onClick={() => setPromptMode('text')}
                disabled={isLoading}
                className={`px-6 py-2 rounded-md font-semibold transition-all flex items-center gap-2 ${
                  promptMode === 'text'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
                Text Mode
              </button>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              {promptMode === 'json' ? (
                <>📋 Structured JSON editor with advanced controls</>
              ) : (
                <>✍️ Direct text prompt input - Just write and generate!</>
              )}
            </p>
          </div>

          <main className="p-4 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {promptMode === 'json' ? (
                <PromptEditor promptData={safePromptData} onPromptChange={handlePromptChange} isLoading={isLoading}
                  generationSettings={safeGenerationSettings} onGenerationSettingsChange={setGenerationSettings}
                  activeConcept={activeConcept} onConceptChange={handleConceptChange} />
              ) : (
                <TextPromptEditor
                  textPrompt={textPrompt}
                  onTextPromptChange={setTextPrompt}
                  generationSettings={safeGenerationSettings}
                  onSettingsChange={setGenerationSettings}
                  isLoading={isLoading}
                />
              )}
              <div className="lg:sticky lg:top-8 self-start">
                <ImageDisplay imageData={generatedImages} isLoading={isLoading} error={error} wovenPrompt={wovenPrompt} generationStep={generationStep} />
              </div>
            </div>
          </main>

          <div className="sticky bottom-0 left-0 right-0 p-4 bg-gray-900/80 backdrop-blur-sm border-t border-gray-700 flex justify-center items-center gap-2 sm:gap-4 flex-wrap">
            <button onClick={handleOpenLoadModal} disabled={isLoading} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>Load
            </button>
            <button onClick={() => setIsStorageModalOpen(true)} disabled={isLoading} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" /></svg>
              Storage
            </button>
            <button onClick={() => setIsGalleryModalOpen(true)} disabled={isLoading || !generationSettings.projectId} className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-indigo-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>Gallery
            </button>
            <button onClick={handleOpenHistoryModal} disabled={isLoading} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>History
            </button>
            <button onClick={handleSavePrompt} disabled={isLoading} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 014-4h4a4 4 0 014 4v2H7v-2z" /></svg>Save
            </button>
             <button onClick={handleCopyPrompt} disabled={isLoading} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>Copy
            </button>
            <button onClick={handleResetPrompt} disabled={isLoading} className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 text-white font-semibold text-base rounded-lg shadow-md hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" /></svg>Reset
            </button>
            <button
              onClick={() => setUiMode('experimental')}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-base rounded-lg shadow-md hover:from-purple-500 hover:to-pink-500 disabled:from-gray-800 disabled:to-gray-800 disabled:cursor-not-allowed transition-all duration-300"
            >
              <span style={{ fontSize: '18px' }}>🔬</span>
              Experimental Mode
            </button>
            <button
              onClick={() => setUiMode('artistic')}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-rose-500 text-white font-semibold text-base rounded-lg shadow-md hover:from-purple-400 hover:to-rose-400 disabled:from-gray-800 disabled:to-gray-800 disabled:cursor-not-allowed transition-all duration-300"
            >
              <span style={{ fontSize: '18px' }}>🎨</span>
              Artistic Mode
            </button>
            <button
              onClick={() => setUiMode('corporate')}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-emerald-500 text-white font-semibold text-base rounded-lg shadow-md hover:from-indigo-400 hover:to-emerald-400 disabled:from-gray-800 disabled:to-gray-800 disabled:cursor-not-allowed transition-all duration-300"
            >
              <span style={{ fontSize: '18px' }}>💼</span>
              Corporate Mode
            </button>
            <div className="flex-grow flex justify-center w-full sm:w-auto order-first sm:order-none gap-2 sm:gap-4">
              <MasterGenerationControl
                onGenerate={handleMasterGenerate}
                isLoading={isLoading}
                generationStep={generationStep}
              />
              <LockFieldsDropdown lockedFields={lockedFields} onLockedFieldsChange={setLockedFields} isBusy={isLoading} />
            </div>
          </div>
        </>
      )}
      <LoadPromptModal isOpen={isLoadModalOpen} onClose={() => setIsLoadModalOpen(false)} prompts={savedPrompts} onLoad={handleLoadSelectedPrompt} onDelete={handleDeletePrompt} />
      <HistoryModal isOpen={isHistoryModalOpen} onClose={() => setIsHistoryModalOpen(false)} history={promptHistory} onLoad={handleLoadFromHistory} onClear={handleClearHistory} />
      <AnalysisModal isOpen={!!analysisSuggestions && analysisSuggestions.length > 0} onClose={() => setAnalysisSuggestions(null)} suggestions={analysisSuggestions || []} onApply={handleApplySuggestion} />
      <StorageConfigModal
        isOpen={isStorageModalOpen}
        onClose={() => setIsStorageModalOpen(false)}
        settings={storageSettings}
        onSettingsChange={setStorageSettings}
      />
      <PromptReviewModal
        isOpen={isPromptReviewModalOpen}
        onClose={handlePromptReviewCancel}
        onGenerate={handlePromptReviewGenerate}
        rawPromptData={pendingGeneration?.promptData || promptData}
        finalPrompt={pendingGeneration?.finalPrompt || ''}
        provider={generationSettings.provider}
      />
      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        config={{
          provider: storageSettings.provider,
          cloudStorage: storageSettings.provider === 'cloud-storage' ? {
            projectId: generationSettings.projectId || 'creatives-476816',
            bucketName: storageSettings.bucketName,
            accessToken: generationSettings.accessToken,
            region: 'us-east4'
          } : undefined,
          googleDrive: storageSettings.provider === 'google-drive' ? {
            accessToken: storageSettings.driveAccessToken || generationSettings.accessToken,
            folderName: storageSettings.driveFolderName
          } : undefined
        }}
        onSelectImage={(metadata) => {
          setPromptData(metadata.promptData);
          setGenerationSettings(prev => ({...prev, ...metadata.settings}));
          setActiveConcept(metadata.conceptName);
        }}
      />
    </div>
  );
};
export default App;