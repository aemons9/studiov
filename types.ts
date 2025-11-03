export interface Camera {
  focal_length: string;
  aperture: string;
  distance: string;
  angle: string;
  framing: string;
}

export interface Subject {
  age: string;
  appearance: string;
  pose: string;
  hair_color: string;
  hair_style: string;
  nail_art: string;
  high_heels: string;
  tattoos: string;
  piercings: string;
  body_art: string;
  skin_details: string;
  hand_and_nail_details: string;
}

export interface PromptData {
  shot: string;
  subject: Subject;
  wardrobe: string;
  environment: string;
  lighting: string;
  camera: Camera;
  color_grade: string;
  style: string;
  quality: string;
  figure_and_form: string;
}

export interface Preset {
  name: string;
  value: string;
}

export type EnhancementStyle = 'balanced' | 'subtle' | 'creative' | 'safety';

export interface GenerationSettings {
  projectId: string;
  accessToken: string;
  numberOfImages: number;
  aspectRatio: '9:16' | '16:9' | '1:1' | '4:3' | '3:4';
  personGeneration: 'allow_all' | 'allow_adult' | 'dont_allow';
  safetySetting: 'block_few' | 'block_some' | 'block_most';
  addWatermark: boolean;
  enhancePrompt: boolean;
  modelId: string;
  seed: number | null;
}

export interface SavedPrompt {
  name: string;
  data: PromptData;
  settings: GenerationSettings;
}

export interface GeneratedImageData {
  url: string;
  settings: Pick<GenerationSettings, 'modelId' | 'seed' | 'aspectRatio'>;
}

export interface AnalysisSuggestion {
  field: string;
  originalText: string;
  suggestedText: string;
  reason: string;
}
