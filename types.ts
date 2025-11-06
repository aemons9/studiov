export interface Camera {
  focal_length: string;
  aperture: string;
  distance: string;
  angle: string;
  framing: string;
}

export interface SubjectVariant {
  name: string;
  value: string;
}

export interface Subject {
  variant: string;
  pose: string;
  hair_color: string;
  hair_style: string;
  nail_art: string;
  high_heels: string;
  tattoos: string;
  piercings: string;
  body_art: string;
  skin_finish: string;
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
  skin_micro_details: string;
  fabric_physics: string;
  material_properties: string;
}

export interface Preset {
  name: string;
  value: string;
}

export type EnhancementStyle = 'balanced' | 'subtle' | 'creative' | 'safety';

export type AdherenceLevel = 'literal' | 'balanced' | 'creative';

export type WeavingMode = 'master' | 'passion' | 'intimate' | 'seductive';

// ============================================================================
// EXPERIMENTAL MODE TYPES
// ============================================================================

export type NodeCategory = 'subject' | 'wardrobe' | 'pose' | 'environment' | 'lighting' | 'camera' | 'weaving' | 'style' | 'concept';

export type NodeShape = 'circle' | 'diamond' | 'hexagon' | 'square' | 'triangle' | 'octagon' | 'pentagon' | 'star';

export interface NodeEffects {
  intimacy?: [number, number]; // Min-Max range
  seduction?: [number, number];
  eroticism?: [number, number];
  professionalism?: [number, number];
  power?: [number, number];
  abstraction?: [number, number];
  boundary?: [number, number];
}

export interface VisualNode {
  id: string;
  category: NodeCategory;
  name: string;
  abbreviation: string; // Short label for node
  icon: string; // Emoji or symbol
  color: string; // Hex color
  shape: NodeShape;
  effects: NodeEffects;
  description: string;
  compatibleWith?: string[]; // Node IDs
  incompatibleWith?: string[]; // Node IDs
  autoConfigures?: Partial<PromptData>; // Auto-applied settings
}

export interface CalculatedLevels {
  intimacy: number; // 1-25
  seduction: number; // 1-25
  eroticism: number; // 1-25
  professionalism: number; // 1-25
  power: number; // 1-25
  abstraction: number; // 1-25
  boundary: number; // 1-25
}

export interface ExperimentalConfig {
  selectedNodes: string[];
  calculatedLevels: CalculatedLevels;
  warnings: string[];
}

export interface LevelCategory {
  min: number;
  max: number;
  label: string;
  description: string;
}

export type ImageProvider = 'vertex-ai' | 'replicate-flux';

export type FluxModel =
  | 'black-forest-labs/flux-1.1-pro-ultra'
  | 'black-forest-labs/flux-1.1-pro'
  | 'black-forest-labs/flux-dev'
  | 'black-forest-labs/flux-schnell';

export interface GenerationSettings {
  // Provider Selection
  provider: ImageProvider;

  // Vertex AI Settings
  projectId: string;
  accessToken: string;
  modelId: string;
  personGeneration: 'allow_all' | 'allow_adult' | 'dont_allow';
  safetySetting: 'block_few' | 'block_some' | 'block_most';
  addWatermark: boolean;

  // Replicate Flux Settings
  replicateApiToken?: string;
  fluxModel?: FluxModel;
  fluxRawMode?: boolean; // For ultra model - hyper-realistic candid style
  fluxSafetyTolerance?: number; // 1-5, higher = more permissive

  // Weaving Settings (for using Google Gemini weaving with Flux generation)
  weavingProjectId?: string; // Google Cloud Project ID for weaving only
  weavingAccessToken?: string; // Google OAuth2 token for weaving only
  useGoogleForWeaving?: boolean; // Enable Google weaving even with Flux generation

  // Common Settings
  numberOfImages: number;
  aspectRatio: '9:16' | '16:9' | '1:1' | '4:3' | '3:4';
  enhancePrompt: boolean;
  seed: number | null;
  intimacyLevel: number;
}

export interface StorageSettings {
  enableStorage: boolean;
  provider: StorageProvider;
  bucketName: string;
  driveFolderName: string;
  driveAccessToken?: string; // Optional separate token for Google Drive
}

export interface SavedPrompt {
  name: string;
  data: PromptData;
  settings: GenerationSettings;
}

export interface HistoryEntry {
  timestamp: number;
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

export interface ArtisticAnalysisResult {
    isArtistic: boolean;
    confidence: number;
    reasoning: string;
    suggestions?: AnalysisSuggestion[];
}


export type GenerationStep = 'analyzing' | 'enhancing' | 'weaving' | 'generating';

// ============================================================================
// IMAGE GALLERY & CLOUD STORAGE TYPES
// ============================================================================

export interface ImageMetadata {
  id: string; // Unique identifier (timestamp-based)
  filename: string; // e.g., "seductress-auto-level-3-20251105-143022.png"
  storageUrl: string; // Google Cloud Storage public URL
  downloadUrl: string; // Signed URL for downloading
  thumbnailUrl?: string; // Optional thumbnail URL
  timestamp: number; // Unix timestamp
  date: string; // ISO date string for filtering
  promptData: PromptData; // Full prompt data used
  settings: GenerationSettings; // Generation settings used
  conceptName: string; // e.g., "Seductress Auto: Level 3"
  intimacyLevel: number; // 1-10
  aspectRatio: string; // e.g., "16:9"
  modelId: string; // Imagen model used
  seed: number | null; // Seed if used
  size: number; // File size in bytes
  width: number; // Image width in pixels
  height: number; // Image height in pixels
}

export interface GalleryFilters {
  conceptName?: string;
  intimacyLevel?: number;
  startDate?: string;
  endDate?: string;
  aspectRatio?: string;
  searchQuery?: string;
}

export type StorageProvider = 'cloud-storage' | 'google-drive';

export interface CloudStorageConfig {
  projectId: string;
  bucketName: string;
  accessToken: string;
  region?: string;
}

export interface GoogleDriveConfig {
  accessToken: string;
  folderId?: string; // Optional folder ID to store images in
  folderName?: string; // Folder name to create/use (default: "StudioV Images")
}

export type WardrobeConceptCategory = 'Architectural Lingerie' | 'Couture Intimates' | 'Sensual Art' | 'Private Gallery' | 'Concept Art';
// FIX: Added 'Avant-Garde' to the union type to support its usage in wardrobe concepts.
export type WardrobeFormality = 'Casual' | 'Editorial' | 'Haute Couture' | 'Avant-Garde';
export type WardrobeCoverage = 'Minimal' | 'Moderate' | 'Full';
export type WardrobeStyle = 'Classic' | 'Modern' | 'Avant-Garde' | 'Minimalist';

export interface WardrobeConcept {
  id: string;
  name: string;
  description: string;
  prompt: string;
  category: WardrobeConceptCategory;
  tags: {
    intimacy: number; // 1-10
    formality: WardrobeFormality;
    coverage: WardrobeCoverage;
    style: WardrobeStyle;
  };
}

export interface RiskAnalysis {
  riskScore: number; // 0.0 - 1.0
  recommendedApi: 'Imagen' | 'Flux';
  successProbability: number; // 0.0 - 1.0
  appliedEnhancements: { original: string; replacement: string }[];
  reasoning: string;
}