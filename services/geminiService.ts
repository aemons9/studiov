import type { PromptData, GenerationSettings, EnhancementStyle, AnalysisSuggestion } from '../types';

const promptSchema = {
    type: "OBJECT",
    properties: {
      shot: { type: "STRING", description: "The framing and shot type, e.g., 'Ultra close-up editorial (9:16)'." },
      subject: {
        type: "OBJECT",
        properties: {
          age: { type: "STRING", description: "Subject's age range and description." },
          appearance: { type: "STRING", description: "Detailed appearance, ethnicity, body type, and gaze." },
          pose: { type: "STRING", description: "The subject's pose and action." },
          hair_color: { type: "STRING", description: "Color of the hair." },
          hair_style: { type: "STRING", description: "Style of the hair." },
          skin_details: { type: "STRING", description: "Detailed description of skin texture and realism, e.g., 'Authentic with visible pores'."},
          hand_and_nail_details: { type: "STRING", description: "Detailed description of hand and nail realism, e.g., 'Graceful & anatomically correct hands'."},
          tattoos: { type: "STRING", description: "Presence and description of tattoos, or 'none'." },
          piercings: { type: "STRING", description: "Presence and description of piercings, or 'none'." },
          body_art: { type: "STRING", description: "Presence and description of other body art, or 'none'." },
          nail_art: { type: "STRING", description: "Style of manicure or nail art." },
          high_heels: { type: "STRING", description: "Description of footwear, specifically high heels." },
        },
        required: ['age', 'appearance', 'pose', 'hair_color', 'hair_style', 'skin_details', 'hand_and_nail_details', 'tattoos', 'piercings', 'body_art', 'nail_art', 'high_heels']
      },
      wardrobe: { type: "STRING", description: "Detailed description of the subject's clothing and accessories." },
      environment: { type: "STRING", description: "Description of the background and setting." },
      lighting: { type: "STRING", description: "The lighting setup, e.g., 'Dynamic, focused warm studio lighting'." },
      camera: {
        type: "OBJECT",
        properties: {
          focal_length: { type: "STRING", description: "Camera lens focal length, e.g., '100mm'." },
          aperture: { type: "STRING", description: "Camera lens aperture, e.g., 'f/2.0'." },
          distance: { type: "STRING", description: "Distance from camera to subject, e.g., '1.7 m'." },
          angle: { type: "STRING", description: "The camera angle relative to the subject." },
          framing: { type: "STRING", description: "How the subject is framed in the shot." },
        },
        required: ['focal_length', 'aperture', 'distance', 'angle', 'framing']
      },
      color_grade: { type: "STRING", description: "The color grading and palette of the image." },
      style: { type: "STRING", description: "The overall artistic style and mood." },
      quality: { type: "STRING", description: "Desired quality and detail level, e.g., 'Photo-real 8K detail'." },
      figure_and_form: { type: "STRING", description: "Artistic direction for how the subject's form is depicted, especially regarding sheer fabrics or nudity. e.g., 'Silhouette through sheer fabric' or 'Sculpted form'." },
    },
    required: ['shot', 'subject', 'wardrobe', 'environment', 'lighting', 'camera', 'color_grade', 'style', 'quality', 'figure_and_form']
};

const getSystemInstruction = (style: EnhancementStyle): string => {
  switch (style) {
    case 'subtle':
      return `You are a precise prompt editor for AI image generation. Your task is to subtly refine a structured JSON prompt.
- Make only minimal, necessary adjustments to improve clarity and coherence.
- Correct grammar and syntax without altering the core meaning.
- Do NOT add new concepts or dramatically change descriptions. The user's intent is paramount.
- Ensure the descriptions are coherent and work together.
- Do not change the JSON structure or keys.
- Output ONLY the raw, enhanced JSON object.`;
    case 'creative':
      return `You are an AI art director and world-class prompt engineer. Your task is to take a user's structured JSON prompt and creatively embellish it.
- Analyze the user's core concept and artistically enhance it with novel, complementary details.
- Be imaginative. Add evocative language, unique lighting ideas, and interesting environmental textures.
- The goal is to create a more inspiring and unique prompt that the user might not have thought of.
- Ensure the overall scene remains coherent.
- Do not change the JSON structure or keys.
- Output ONLY the raw, enhanced JSON object.`;
    case 'safety':
      return `You are an expert in AI safety policies for image generation. Your primary goal is to rewrite a user's structured JSON prompt to maximize its chance of being accepted by safety filters while preserving the artistic intent.
- Analyze each field for potentially sensitive language (e.g., related to nudity, violence, or other policy-violating content).
- Replace direct or sensitive words with safer, artistically equivalent alternatives.
- Focus on using terms like 'silhouette', 'draped fabric', 'shadow play', 'artistic form', 'sculpted by light', 'tasteful composition' to describe the human figure.
- The intent is not to censor, but to rephrase for success.
- Do not change the JSON structure or keys.
- Output ONLY the raw, enhanced JSON object.`;
    case 'balanced':
    default:
      return `You are a world-class prompt engineer for AI image generation models. Your task is to enhance a structured JSON prompt to make it more descriptive, vivid, and effective for creating photorealistic images.
- Analyze the user's input within the JSON structure.
- Keep the original intent but enrich each field with more evocative language and specific details.
- Ensure the descriptions are coherent and work together to create a compelling, unified scene.
- Do not change the JSON structure or keys.
- Output ONLY the raw, enhanced JSON object.`;
  }
};

export async function enhancePrompt(promptData: PromptData, settings: GenerationSettings, style: EnhancementStyle): Promise<PromptData> {
  const { projectId, accessToken } = settings;
  if (!projectId || !accessToken) {
    throw new Error("Project ID and Access Token are required for prompt enhancement.");
  }

  const region = 'us-east4';
  const modelId = 'gemini-2.5-pro';
  const endpoint = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/publishers/google/models/${modelId}:generateContent`;

  const systemInstruction = getSystemInstruction(style);
  
  const userPromptText = `Enhance this prompt using the "${style}" style: ${JSON.stringify(promptData, null, 2)}`;

  const body = {
    contents: [{
      role: 'user',
      parts: [{ text: userPromptText }]
    }],
    systemInstruction: {
      parts: [{ text: systemInstruction }]
    },
    generationConfig: {
      responseMimeType: "application/json",
      responseSchema: promptSchema,
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
      const errorMessage = errorBody?.error?.message || `HTTP error! status: ${response.status}`;
      throw new Error(`Vertex AI API Error (Enhancement): ${errorMessage}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        const enhancedJsonText = data.candidates[0].content.parts[0].text.trim();
        const result = JSON.parse(enhancedJsonText);
        if (typeof result !== 'object' || result === null) {
          throw new Error("API returned non-object JSON.");
        }
        return result as PromptData;
    } else {
        throw new Error("The model did not return a valid enhanced prompt.");
    }

  } catch (error) {
    console.error("Error enhancing prompt with Vertex AI API:", error);
    if (error instanceof Error) {
        throw new Error(error.message);
    }
    throw new Error("An unknown error occurred during prompt enhancement.");
  }
}

export async function weavePrompt(promptData: PromptData, settings: GenerationSettings): Promise<string> {
    const { projectId, accessToken } = settings;
    if (!projectId || !accessToken) {
        throw new Error("Project ID and Access Token are required to weave the prompt.");
    }
    
    const region = 'us-east4';
    const modelId = 'gemini-2.5-pro';
    const endpoint = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/publishers/google/models/${modelId}:generateContent`;

    const systemInstruction = `You are a master photographer and author. Your task is to transform a structured JSON shot list into a single, eloquent, and vivid paragraph. This paragraph will be used as a prompt for an advanced AI image generation model (Imagen). Weave all the details from the JSON into a coherent, flowing narrative. Prioritize artistic, evocative language and ensure the final text is safe and compliant with AI policies. The output should be a single, dense paragraph of text with no line breaks.`;

    const userPromptText = `Weave this JSON shot list into a final prompt: ${JSON.stringify(promptData, null, 2)}`;

    const body = {
        contents: [{ role: 'user', parts: [{ text: userPromptText }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
        generationConfig: { temperature: 0.2 } // Lower temperature for more deterministic, focused output
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const errorBody = await response.json();
            const errorMessage = errorBody?.error?.message || `HTTP error! status: ${response.status}`;
            throw new Error(`Vertex AI API Error (Weaving): ${errorMessage}`);
        }

        const data = await response.json();
        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            return data.candidates[0].content.parts[0].text.trim().replace(/\s+/g, ' ');
        } else {
            throw new Error("The 'Master Weaver' engine did not return a valid prompt.");
        }
    } catch (error) {
        console.error("Error weaving prompt with Vertex AI API:", error);
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unknown error occurred during prompt weaving.");
    }
}


export async function generateImage(prompt: string, settings: GenerationSettings): Promise<string[]> {
  const { projectId, accessToken, numberOfImages, aspectRatio, personGeneration, safetySetting, addWatermark, enhancePrompt, modelId, seed } = settings;

  if (!projectId || !accessToken) {
    throw new Error("Project ID and Access Token are required for image generation.");
  }

  const region = 'us-east4';
  const endpoint = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/publishers/google/models/${modelId}:predict`;

  const parameters: any = {
    sampleCount: numberOfImages,
    aspectRatio: aspectRatio,
    personGeneration: personGeneration,
    safetySetting: safetySetting,
    addWatermark: addWatermark,
    enhancePrompt: enhancePrompt,
    includeRaiReason: true,
  };

  if (seed) {
    parameters.seed = seed;
  }

  const body = {
    instances: [
      {
        prompt: prompt
      }
    ],
    parameters: parameters
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
      const errorMessage = errorBody?.error?.message || `HTTP error! status: ${response.status}`;
      throw new Error(`Vertex AI API Error: ${errorMessage}`);
    }

    const data = await response.json();

    if (data.predictions && data.predictions.length > 0) {
        const images = data.predictions
            .map((pred: any) => pred.bytesBase64Encoded)
            .filter((b64: string | undefined) => b64);

        if (images.length > 0) {
            return images;
        }

        const firstBlockedPrediction = data.predictions[0];
        
        // Handle specific RAI block reason
        if (firstBlockedPrediction?.safetyAttributes?.blocked === true) {
            const categories = firstBlockedPrediction.safetyAttributes.categories || ['unspecified'];
            const reason = `RAI_BLOCK: The prompt was blocked by safety filters. Detected categories: ${categories.join(', ')}.`;
            throw new Error(reason);
        }

        // Fallback for other potential block reasons
        let fallbackReason = "The model did not return any images. This is likely due to the prompt violating safety policies.";
        if (firstBlockedPrediction.raiReason) {
            fallbackReason = `RAI_BLOCK: ${firstBlockedPrediction.raiReason}`;
        }
        
        throw new Error(`${fallbackReason} Please try adjusting your prompt or safety settings.`);

    } else {
        throw new Error("Image generation failed: The model did not return any predictions. The prompt might be invalid.");
    }
  } catch (error) {
    console.error("Error generating image with Vertex AI API:", error);
    if (error instanceof Error) {
        throw new Error(error.message);
    }
    throw new Error("An unknown error occurred during image generation.");
  }
}

const analysisSchema = {
    type: "ARRAY",
    items: {
      type: "OBJECT",
      properties: {
        field: { type: "STRING", description: "The JSON path to the problematic field, e.g., 'wardrobe' or 'subject.pose'." },
        originalText: { type: "STRING", description: "The original text that might be problematic." },
        suggestedText: { type: "STRING", description: "A safer, artistic alternative." },
        reason: { type: "STRING", description: "A brief explanation of the potential issue." }
      },
      required: ['field', 'originalText', 'suggestedText', 'reason']
    }
};


export async function analyzePrompt(promptData: PromptData, settings: GenerationSettings): Promise<AnalysisSuggestion[]> {
    const { projectId, accessToken } = settings;
    if (!projectId || !accessToken) {
        throw new Error("Project ID and Access Token are required for prompt analysis.");
    }

    const region = 'us-east4';
    const modelId = 'gemini-2.5-pro';
    const endpoint = `https://${region}-aiplatform.googleapis.com/v1/projects/${projectId}/locations/${region}/publishers/google/models/${modelId}:generateContent`;

    const systemInstruction = `You are an AI safety policy expert for generative image models. Your task is to analyze a structured JSON prompt and identify potential policy violations. For each field containing a potential issue, provide the original text, a safer, artistic alternative, and a brief explanation of why the original might be flagged. Focus on issues related to nudity, hate speech, violence, and self-harm. Use artistic and indirect language for suggestions. If no issues are found, return an empty array. Output ONLY a raw JSON object based on the provided schema.`;
    
    const userPromptText = `Analyze this prompt for safety policy violations: ${JSON.stringify(promptData, null, 2)}`;

    const body = {
        contents: [{ role: 'user', parts: [{ text: userPromptText }] }],
        systemInstruction: { parts: [{ text: systemInstruction }] },
        generationConfig: {
            responseMimeType: "application/json",
            responseSchema: { type: 'ARRAY', items: analysisSchema.items } // Correctly reference the inner schema
        }
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Authorization': `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            const errorBody = await response.json();
            const errorMessage = errorBody?.error?.message || `HTTP error! status: ${response.status}`;
            throw new Error(`Vertex AI API Error (Analysis): ${errorMessage}`);
        }

        const data = await response.json();

        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            const analysisJsonText = data.candidates[0].content.parts[0].text.trim();
            const result = JSON.parse(analysisJsonText);
            if (!Array.isArray(result)) {
                throw new Error("API returned non-array JSON for analysis.");
            }
            return result as AnalysisSuggestion[];
        } else {
            // It's possible the model returns nothing if there are no suggestions, handle this gracefully.
            return [];
        }
    } catch (error) {
        console.error("Error analyzing prompt with Vertex AI API:", error);
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unknown error occurred during prompt analysis.");
    }
}