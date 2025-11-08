/**
 * ============================================================================
 * PLATINUM ENGINE - MASTER CREATIVE DIRECTOR SUITE
 * ============================================================================
 *
 * Advanced AI-powered creative direction system for StudioV
 * Leveraging Gemini 2.5 Pro's multimodal capabilities for visionary output
 *
 * Features:
 * - Director Mode: AI concept generation from vision/text descriptions
 * - Concept Variations: Intelligent diversity generation
 * - Remix Engine: Iterative refinement from existing outputs
 * - Smart Batch: Multi-concept generation with automatic variety
 * - Vision Analysis: Reference image understanding and adaptation
 */

import type { PromptData, GenerationSettings, EnhancementStyle } from '../types';

// ============================================================================
// DIRECTOR MODE - AI CONCEPT GENERATION
// ============================================================================

export interface DirectorVision {
  description: string; // Text description of desired concept
  referenceImage?: string; // Optional base64 image for vision analysis
  mood?: string[]; // Mood keywords
  photographerStyle?: string; // Photographer reference
  intimacyLevel?: number; // 1-10
}

export interface DirectorOutput {
  conceptName: string;
  promptData: PromptData;
  creativeRationale: string;
}

/**
 * DIRECTOR MODE: Generate complete concept from creative vision
 * Uses Gemini 2.5 Pro's vision and reasoning capabilities
 */
export async function generateConceptFromVision(
  vision: DirectorVision,
  settings: GenerationSettings
): Promise<DirectorOutput> {
  const { projectId, accessToken } = settings;
  if (!projectId || !accessToken) {
    throw new Error('Credentials required for Director Mode');
  }

  const region = 'us-east4';
  const modelId = 'gemini-2.5-pro';
  const endpoint = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/publishers/google/models/${modelId}:generateContent`;

  const systemInstruction = `You are an elite fashion photography creative director with expertise in haute couture, fine art photography, and editorial composition. Your specialty is translating abstract creative visions into technically precise, artistically sophisticated shot specifications.

TASK: Generate a complete fashion photography concept from the user's creative vision.

OUTPUT REQUIREMENTS:
1. Create a full PromptData JSON object with ALL required fields
2. Provide a creative concept name (e.g., "Midnight Couture", "Architectural Minimalism")
3. Include a creative rationale explaining your artistic choices

CREATIVE PRINCIPLES:
- Draw inspiration from master photographers (Newton, Leibovitz, Penn, Lindbergh, Ritts)
- Balance technical precision with artistic vision
- Consider lighting as sculptural element
- Use architectural language for wardrobe
- Emphasize texture, form, and negative space
- Create visual narratives, not just poses

TECHNICAL PRECISION:
- Specify exact camera settings (focal length, aperture, distance)
- Describe lighting setup in technical terms
- Define color grading with specific references
- Detail material properties and fabric physics
- Include skin micro-details for hyper-realism

If a reference image is provided, analyze:
- Composition and framing
- Lighting setup and mood
- Color palette and tone
- Pose dynamics and energy
- Wardrobe style and coverage
Then create a NEW concept INSPIRED by these elements (not a copy).

Output JSON format:
{
  "conceptName": "...",
  "promptData": { /* full PromptData object */ },
  "creativeRationale": "..."
}`;

  // Build the request with vision if provided
  const parts: any[] = [];

  let userPrompt = `Create a fashion photography concept based on this vision:

DESCRIPTION: ${vision.description}
MOOD: ${vision.mood?.join(', ') || 'Not specified'}
PHOTOGRAPHER STYLE: ${vision.photographerStyle || 'Creative director\'s choice'}
INTIMACY LEVEL: ${vision.intimacyLevel || 6}/10

Generate a complete, technically precise concept that brings this vision to life.`;

  if (vision.referenceImage) {
    // Add vision analysis
    parts.push({
      text: userPrompt + '\n\nREFERENCE IMAGE PROVIDED: Analyze the composition, lighting, mood, and style. Use this as inspiration for your concept.'
    });

    // Extract base64 from data URL if needed
    const base64Image = vision.referenceImage.includes('base64,')
      ? vision.referenceImage.split('base64,')[1]
      : vision.referenceImage;

    parts.push({
      inlineData: {
        mimeType: 'image/jpeg',
        data: base64Image
      }
    });
  } else {
    parts.push({ text: userPrompt });
  }

  const responseSchema = {
    type: 'OBJECT',
    properties: {
      conceptName: { type: 'STRING' },
      creativeRationale: { type: 'STRING' },
      promptData: {
        type: 'OBJECT',
        properties: {
          shot: { type: 'STRING' },
          subject: {
            type: 'OBJECT',
            properties: {
              variant: { type: 'STRING' },
              pose: { type: 'STRING' },
              hair_color: { type: 'STRING' },
              hair_style: { type: 'STRING' },
              skin_finish: { type: 'STRING' },
              hand_and_nail_details: { type: 'STRING' },
              tattoos: { type: 'STRING' },
              piercings: { type: 'STRING' },
              body_art: { type: 'STRING' },
              nail_art: { type: 'STRING' },
              high_heels: { type: 'STRING' }
            }
          },
          wardrobe: { type: 'STRING' },
          environment: { type: 'STRING' },
          lighting: { type: 'STRING' },
          camera: {
            type: 'OBJECT',
            properties: {
              focal_length: { type: 'STRING' },
              aperture: { type: 'STRING' },
              distance: { type: 'STRING' },
              angle: { type: 'STRING' },
              framing: { type: 'STRING' }
            }
          },
          color_grade: { type: 'STRING' },
          style: { type: 'STRING' },
          quality: { type: 'STRING' },
          figure_and_form: { type: 'STRING' },
          skin_micro_details: { type: 'STRING' },
          fabric_physics: { type: 'STRING' },
          material_properties: { type: 'STRING' }
        }
      }
    },
    required: ['conceptName', 'promptData', 'creativeRationale']
  };

  const body = {
    contents: [{ role: 'user', parts }],
    systemInstruction: { parts: [{ text: systemInstruction }] },
    generationConfig: {
      temperature: 0.8,
      topP: 0.9,
      topK: 40,
      responseMimeType: 'application/json',
      responseSchema
    }
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(`Director Mode API Error: ${errorBody?.error?.message || response.status}`);
    }

    const data = await response.json();
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      const result = JSON.parse(data.candidates[0].content.parts[0].text);
      return result as DirectorOutput;
    }

    throw new Error('Director Mode failed to generate concept');
  } catch (error) {
    console.error('Director Mode error:', error);
    throw error;
  }
}

// ============================================================================
// CONCEPT VARIATIONS - INTELLIGENT DIVERSITY GENERATION
// ============================================================================

export interface VariationOptions {
  basePrompt: PromptData;
  conceptName: string;
  variationType: 'lighting' | 'pose' | 'wardrobe' | 'camera' | 'mood' | 'complete';
  numberOfVariations: number; // 2-5 recommended
  diversityLevel: 'subtle' | 'moderate' | 'dramatic';
}

export interface ConceptVariation {
  name: string;
  promptData: PromptData;
  changeSummary: string;
}

/**
 * CONCEPT VARIATIONS: Generate diverse variations of a base concept
 * Perfect for exploring different angles on a creative direction
 */
export async function generateConceptVariations(
  options: VariationOptions,
  settings: GenerationSettings
): Promise<ConceptVariation[]> {
  const { projectId, accessToken } = settings;
  if (!projectId || !accessToken) {
    throw new Error('Credentials required for Concept Variations');
  }

  const region = 'us-east4';
  const modelId = 'gemini-2.5-pro';
  const endpoint = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/publishers/google/models/${modelId}:generateContent`;

  const variationGuidance = {
    lighting: 'Explore different lighting setups (chiaroscuro, high-key, rim light, natural window, studio, etc.)',
    pose: 'Create different poses that maintain the concept mood but offer compositional variety',
    wardrobe: 'Suggest alternative wardrobe choices that maintain the intimacy level and aesthetic',
    camera: 'Vary camera settings (focal length, angle, framing) for different visual impact',
    mood: 'Shift the emotional tone and color grading while keeping the core concept',
    complete: 'Create holistic variations exploring different aspects simultaneously'
  };

  const diversityGuidance = {
    subtle: 'Make minimal, refined changes. Keep 80% of the original intact.',
    moderate: 'Make noticeable but coherent changes. Keep 50% of the original aesthetic.',
    dramatic: 'Make bold, striking changes. Reimagine the concept while maintaining core identity.'
  };

  const systemInstruction = `You are a creative director generating variations on a fashion photography concept.

BASE CONCEPT: ${options.conceptName}
VARIATION TYPE: ${options.variationType}
VARIATION GUIDANCE: ${variationGuidance[options.variationType]}
DIVERSITY LEVEL: ${options.diversityLevel} - ${diversityGuidance[options.diversityLevel]}

REQUIREMENTS:
1. Generate ${options.numberOfVariations} distinct variations
2. Each variation must be a complete, valid PromptData object
3. Maintain the core aesthetic and quality level
4. Create meaningful diversity within the specified variation type
5. Provide a unique name for each variation (e.g., "${options.conceptName} - Golden Hour", "${options.conceptName} - Shadow Play")
6. Include a brief change summary explaining what was modified

CREATIVE PRINCIPLES:
- Each variation should feel like a deliberate artistic choice
- Maintain technical precision in all specifications
- Consider how changes interact (e.g., lighting affects color grade)
- Use photographer references to inspire variations

Output format:
{
  "variations": [
    {
      "name": "...",
      "promptData": { /* complete PromptData */ },
      "changeSummary": "..."
    }
  ]
}`;

  const responseSchema = {
    type: 'OBJECT',
    properties: {
      variations: {
        type: 'ARRAY',
        items: {
          type: 'OBJECT',
          properties: {
            name: { type: 'STRING' },
            changeSummary: { type: 'STRING' },
            promptData: {
              type: 'OBJECT',
              properties: {
                shot: { type: 'STRING' },
                subject: { type: 'OBJECT' },
                wardrobe: { type: 'STRING' },
                environment: { type: 'STRING' },
                lighting: { type: 'STRING' },
                camera: { type: 'OBJECT' },
                color_grade: { type: 'STRING' },
                style: { type: 'STRING' },
                quality: { type: 'STRING' },
                figure_and_form: { type: 'STRING' },
                skin_micro_details: { type: 'STRING' },
                fabric_physics: { type: 'STRING' },
                material_properties: { type: 'STRING' }
              }
            }
          }
        }
      }
    }
  };

  const userPrompt = `Generate ${options.numberOfVariations} variations of this concept:

${JSON.stringify(options.basePrompt, null, 2)}

Create diverse, artistically compelling variations focusing on: ${options.variationType}`;

  const body = {
    contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
    systemInstruction: { parts: [{ text: systemInstruction }] },
    generationConfig: {
      temperature: 0.85,
      topP: 0.95,
      responseMimeType: 'application/json',
      responseSchema
    }
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(`Variations API Error: ${errorBody?.error?.message || response.status}`);
    }

    const data = await response.json();
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      const result = JSON.parse(data.candidates[0].content.parts[0].text);
      return result.variations as ConceptVariation[];
    }

    throw new Error('Concept Variations failed to generate');
  } catch (error) {
    console.error('Concept Variations error:', error);
    throw error;
  }
}

// ============================================================================
// SMART BATCH GENERATION - INTELLIGENT VARIETY
// ============================================================================

export interface SmartBatchOptions {
  theme: string; // Overall theme (e.g., "Executive Power", "Minimalist Beauty")
  count: number; // Number of concepts (3-10 recommended)
  intimacyRange: [number, number]; // e.g., [4, 8]
  diversity: 'unified' | 'eclectic'; // Unified = same aesthetic family, Eclectic = diverse styles
  photographerReferences?: string[]; // Optional specific photographers to reference
}

/**
 * SMART BATCH: Generate multiple related concepts in one operation
 * Perfect for creating a cohesive collection or exploring a theme
 */
export async function generateSmartBatch(
  options: SmartBatchOptions,
  settings: GenerationSettings
): Promise<DirectorOutput[]> {
  const { projectId, accessToken } = settings;
  if (!projectId || !accessToken) {
    throw new Error('Credentials required for Smart Batch');
  }

  const region = 'us-east4';
  const modelId = 'gemini-2.5-pro';
  const endpoint = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/publishers/google/models/${modelId}:generateContent`;

  const diversityGuidance = {
    unified: 'Create a cohesive collection where all concepts share a common aesthetic DNA (similar lighting style, color palette, or compositional approach). Think "editorial series".',
    eclectic: 'Create diverse concepts that explore different facets of the theme. Vary lighting, poses, environments, and styles significantly. Think "creative exploration".'
  };

  const systemInstruction = `You are a creative director developing a collection of fashion photography concepts.

COLLECTION THEME: ${options.theme}
NUMBER OF CONCEPTS: ${options.count}
INTIMACY RANGE: ${options.intimacyRange[0]}-${options.intimacyRange[1]}/10
DIVERSITY APPROACH: ${options.diversity} - ${diversityGuidance[options.diversity]}
${options.photographerReferences ? `PHOTOGRAPHER REFERENCES: ${options.photographerReferences.join(', ')}` : ''}

COLLECTION REQUIREMENTS:
1. Generate ${options.count} complete, unique concepts
2. Each concept must have a distinct name related to the theme
3. Distribute intimacy levels across the specified range
4. Ensure technical precision and artistic sophistication
5. ${options.diversity === 'unified' ? 'Maintain visual coherence across the collection' : 'Maximize creative diversity while staying thematic'}

CREATIVE STRATEGY:
- Each concept should justify its place in the collection
- Consider narrative progression if applicable
- Balance commercial appeal with artistic vision
- Use the full range of creative tools (lighting, camera, wardrobe, environment)
- Reference master photographers for inspiration

Output format:
{
  "concepts": [
    {
      "conceptName": "...",
      "promptData": { /* complete PromptData */ },
      "creativeRationale": "..."
    }
  ]
}`;

  const responseSchema = {
    type: 'OBJECT',
    properties: {
      concepts: {
        type: 'ARRAY',
        items: {
          type: 'OBJECT',
          properties: {
            conceptName: { type: 'STRING' },
            creativeRationale: { type: 'STRING' },
            promptData: { type: 'OBJECT' }
          }
        }
      }
    }
  };

  const userPrompt = `Create a collection of ${options.count} fashion photography concepts for the theme: "${options.theme}"

Intimacy range: ${options.intimacyRange[0]}-${options.intimacyRange[1]}/10
Approach: ${options.diversity}

Generate a cohesive yet diverse collection that explores this theme comprehensively.`;

  const body = {
    contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
    systemInstruction: { parts: [{ text: systemInstruction }] },
    generationConfig: {
      temperature: 0.9,
      topP: 0.95,
      topK: 50,
      responseMimeType: 'application/json',
      responseSchema
    }
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(`Smart Batch API Error: ${errorBody?.error?.message || response.status}`);
    }

    const data = await response.json();
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      const result = JSON.parse(data.candidates[0].content.parts[0].text);
      return result.concepts as DirectorOutput[];
    }

    throw new Error('Smart Batch failed to generate concepts');
  } catch (error) {
    console.error('Smart Batch error:', error);
    throw error;
  }
}

// ============================================================================
// REMIX ENGINE - ITERATIVE REFINEMENT
// ============================================================================

export interface RemixOptions {
  originalPromptData: PromptData;
  direction: string; // What to change (e.g., "make it moodier", "add more drama", "simplify")
  preserveElements?: string[]; // Fields to keep unchanged (e.g., ['subject.variant', 'wardrobe'])
  intensity: 'light' | 'medium' | 'heavy'; // How much to change
}

/**
 * REMIX ENGINE: Iteratively refine a concept based on creative direction
 * Perfect for "yes, but make it..." workflows
 */
export async function remixConcept(
  options: RemixOptions,
  settings: GenerationSettings
): Promise<DirectorOutput> {
  const { projectId, accessToken } = settings;
  if (!projectId || !accessToken) {
    throw new Error('Credentials required for Remix Engine');
  }

  const region = 'us-east4';
  const modelId = 'gemini-2.5-pro';
  const endpoint = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/publishers/google/models/${modelId}:generateContent`;

  const intensityGuidance = {
    light: 'Make subtle refinements. Change only what\'s necessary to achieve the direction.',
    medium: 'Make moderate changes. Reimagine key elements while keeping the foundation.',
    heavy: 'Make dramatic changes. Bold reinterpretation while maintaining some DNA of the original.'
  };

  const preserveList = options.preserveElements || [];

  const systemInstruction = `You are a creative director refining a fashion photography concept based on feedback.

ORIGINAL CONCEPT PROVIDED BELOW
CREATIVE DIRECTION: ${options.direction}
INTENSITY: ${options.intensity} - ${intensityGuidance[options.intensity]}
${preserveList.length > 0 ? `PRESERVE UNCHANGED: ${preserveList.join(', ')}` : 'No preservation constraints'}

REMIX REQUIREMENTS:
1. Understand the creative direction and apply it thoughtfully
2. Maintain technical precision and artistic sophistication
3. Preserve specified elements EXACTLY as provided
4. Create a new concept name that reflects the changes
5. Explain your creative decisions in the rationale

REMIX STRATEGIES:
- "Moodier" → Adjust lighting (deeper shadows, lower key), color grade (cooler/desaturated), environment
- "More drama" → Lighting contrast, camera angles, dynamic poses, bold compositions
- "Simplify" → Reduce elements, cleaner backgrounds, softer lighting, minimal wardrobe
- "Add energy" → Dynamic poses, movement, vivid colors, unconventional framing
- "Make it softer" → Diffused lighting, warm tones, gentle poses, flowing fabrics

Always think like a master photographer solving a creative brief.

Output format:
{
  "conceptName": "...",
  "promptData": { /* complete PromptData with remixed elements */ },
  "creativeRationale": "..."
}`;

  const responseSchema = {
    type: 'OBJECT',
    properties: {
      conceptName: { type: 'STRING' },
      creativeRationale: { type: 'STRING' },
      promptData: { type: 'OBJECT' }
    },
    required: ['conceptName', 'promptData', 'creativeRationale']
  };

  const userPrompt = `Remix this concept based on the creative direction:

ORIGINAL CONCEPT:
${JSON.stringify(options.originalPromptData, null, 2)}

DIRECTION: ${options.direction}

${preserveList.length > 0 ? `Keep these elements unchanged: ${preserveList.join(', ')}` : ''}

Create a refined version that achieves this creative direction.`;

  const body = {
    contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
    systemInstruction: { parts: [{ text: systemInstruction }] },
    generationConfig: {
      temperature: 0.75,
      topP: 0.9,
      responseMimeType: 'application/json',
      responseSchema
    }
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      const errorBody = await response.json();
      throw new Error(`Remix Engine API Error: ${errorBody?.error?.message || response.status}`);
    }

    const data = await response.json();
    if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
      const result = JSON.parse(data.candidates[0].content.parts[0].text);
      return result as DirectorOutput;
    }

    throw new Error('Remix Engine failed to generate refined concept');
  } catch (error) {
    console.error('Remix Engine error:', error);
    throw error;
  }
}

// ============================================================================
// EXPORT ALL PLATINUM FEATURES
// ============================================================================

export const PlatinumEngine = {
  generateConceptFromVision,
  generateConceptVariations,
  generateSmartBatch,
  remixConcept
};

export default PlatinumEngine;
