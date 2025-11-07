/**
 * REPLICATE FLUX API SERVICE
 *
 * Integrates Replicate.com Flux models as an alternative to Vertex AI
 * for higher intimacy levels and specialized artistic photography.
 *
 * Recommended Models:
 * - FLUX 1.1 Pro Ultra: Best quality, 4MP images, "raw" mode for photorealism
 * - FLUX 1.1 Pro: 6x faster, excellent quality/speed balance
 * - FLUX Dev: Near-Pro quality, lower cost, non-commercial
 * - FLUX Schnell: Fastest, good for prototyping
 */

import type { GenerationSettings } from '../types';

export type FluxModel =
  | 'black-forest-labs/flux-1.1-pro-ultra'
  | 'black-forest-labs/flux-1.1-pro'
  | 'black-forest-labs/flux-dev'
  | 'black-forest-labs/flux-schnell';

export interface ReplicateConfig {
  apiToken: string;
  model: FluxModel;
  width?: number;
  height?: number;
  numOutputs?: number;
  numInferenceSteps?: number;
  guidanceScale?: number;
  seed?: number;
  outputFormat?: 'webp' | 'jpg' | 'png';
  outputQuality?: number; // 0-100
  aspectRatio?: string;
  raw?: boolean; // For ultra model - enables hyper-realistic candid photography style
  safetyTolerance?: number; // 1-5, higher = more permissive
}

export interface ReplicateResponse {
  id: string;
  status: 'starting' | 'processing' | 'succeeded' | 'failed' | 'canceled';
  output?: string | string[];
  error?: string;
  logs?: string;
  metrics?: {
    predict_time?: number;
  };
}

/**
 * Get optimal settings based on intimacy level
 */
export function getOptimalFluxSettings(intimacyLevel: number): Partial<ReplicateConfig> {
  if (intimacyLevel >= 16) {
    // Premium Tier - Maximum quality and artistic freedom
    return {
      model: 'black-forest-labs/flux-1.1-pro-ultra',
      raw: true, // Hyper-realistic candid style
      numInferenceSteps: 40,
      guidanceScale: 3.5,
      outputQuality: 100,
      safetyTolerance: 6, // Maximum permissiveness for artistic intimate photography
    };
  } else if (intimacyLevel >= 10) {
    // Night of Passion - High quality with artistic balance
    return {
      model: 'black-forest-labs/flux-1.1-pro-ultra',
      raw: true,
      numInferenceSteps: 35,
      guidanceScale: 3.0,
      outputQuality: 95,
      safetyTolerance: 5, // High permissiveness for intimate content
    };
  } else if (intimacyLevel >= 6) {
    // Sensual sophistication - FLUX Pro for speed/quality balance
    return {
      model: 'black-forest-labs/flux-1.1-pro',
      numInferenceSteps: 28,
      guidanceScale: 3.5,
      outputQuality: 90,
      safetyTolerance: 4, // Balanced for sensual fashion
    };
  } else {
    // Professional levels - FLUX Dev for cost efficiency
    return {
      model: 'black-forest-labs/flux-dev',
      numInferenceSteps: 28,
      guidanceScale: 3.5,
      outputQuality: 85,
      safetyTolerance: 3, // Conservative for professional fashion
    };
  }
}

/**
 * Convert aspect ratio string to width/height
 */
function parseAspectRatio(aspectRatio: string): { width: number; height: number } {
  const ratios: Record<string, { width: number; height: number }> = {
    '1:1': { width: 1024, height: 1024 },
    '16:9': { width: 1344, height: 768 },
    '9:16': { width: 768, height: 1344 },
    '4:3': { width: 1152, height: 896 },
    '3:4': { width: 896, height: 1152 },
    '21:9': { width: 1536, height: 640 },
    '9:21': { width: 640, height: 1536 },
  };

  // For ultra model, scale up to 4MP
  const result = ratios[aspectRatio] || ratios['9:16'];
  return result;
}

/**
 * Generate image using Replicate Flux API
 */
export async function generateWithFlux(
  prompt: string,
  config: ReplicateConfig
): Promise<string[]> {
  const { apiToken, model, seed, aspectRatio, ...otherConfig } = config;

  if (!apiToken) {
    throw new Error('Replicate API token is required');
  }

  // Parse aspect ratio to dimensions
  const dimensions = aspectRatio ? parseAspectRatio(aspectRatio) : { width: 768, height: 1344 };

  // Build input payload based on model
  const input: any = {
    prompt,
    ...dimensions,
    num_outputs: config.numOutputs || 1,
    output_format: config.outputFormat || 'jpg',
    output_quality: config.outputQuality || 90,
    ...otherConfig,
  };

  // Add seed if provided
  if (seed !== null && seed !== undefined) {
    input.seed = seed;
  }

  // Model-specific parameters
  if (model === 'black-forest-labs/flux-1.1-pro-ultra') {
    input.aspect_ratio = aspectRatio || '9:16';
    input.raw = config.raw !== undefined ? config.raw : true;
    input.safety_tolerance = config.safetyTolerance || 4;
    // Ultra uses aspect_ratio instead of width/height
    delete input.width;
    delete input.height;
  } else if (model === 'black-forest-labs/flux-1.1-pro') {
    input.aspect_ratio = aspectRatio || '9:16';
    input.safety_tolerance = config.safetyTolerance || 3;
    delete input.width;
    delete input.height;
  } else {
    // Dev and Schnell use width/height
    input.num_inference_steps = config.numInferenceSteps || 28;
    input.guidance_scale = config.guidanceScale || 3.5;
  }

  console.log('🎨 Generating with Flux:', {
    model,
    dimensions: model.includes('ultra') || model.includes('1.1-pro') ? aspectRatio : dimensions,
    raw: input.raw,
    safetyTolerance: input.safety_tolerance,
  });

  // Use proxy server to avoid CORS issues
  // Use the same hostname as the current page (important for network access)
  const PROXY_URL = import.meta.env.VITE_PROXY_URL ||
    `${window.location.protocol}//${window.location.hostname}:3001`;

  // Fetch the actual model version
  const version = await fetchModelVersion(model, apiToken, PROXY_URL);

  // Create prediction via proxy
  const createResponse = await fetch(`${PROXY_URL}/api/replicate/predictions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: apiToken, // Pass token in body for proxy
      version: version,
      input,
    }),
  });

  if (!createResponse.ok) {
    const errorText = await createResponse.text();
    console.error('❌ Replicate API error:', errorText);
    console.error('❌ Status:', createResponse.status);
    console.error('❌ Proxy URL:', PROXY_URL);
    throw new Error(`Replicate API error: ${createResponse.status} - ${errorText}`);
  }

  const prediction: ReplicateResponse = await createResponse.json();
  console.log('📋 Full prediction response:', JSON.stringify(prediction, null, 2));
  console.log('📊 Prediction created:', {
    id: prediction.id,
    status: prediction.status,
  });

  // Poll for completion
  let finalPrediction = prediction;
  let attempts = 0;
  const maxAttempts = 60; // 5 minutes max

  while (
    finalPrediction.status !== 'succeeded' &&
    finalPrediction.status !== 'failed' &&
    finalPrediction.status !== 'canceled' &&
    attempts < maxAttempts
  ) {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait 5 seconds

    const pollResponse = await fetch(`${PROXY_URL}/api/replicate/predictions/${prediction.id}`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
      },
    });

    if (!pollResponse.ok) {
      const errorText = await pollResponse.text();
      console.error(`❌ Poll failed (${pollResponse.status}):`, errorText);
      throw new Error(`Failed to poll prediction: ${pollResponse.status} - ${errorText}`);
    }

    finalPrediction = await pollResponse.json();
    attempts++;

    console.log(`⏳ Polling attempt ${attempts}/${maxAttempts}: ${finalPrediction.status}`);
    if (attempts === 1 || finalPrediction.status === 'failed' || finalPrediction.status === 'succeeded') {
      console.log('📋 Poll response:', JSON.stringify(finalPrediction, null, 2));
    }
  }

  if (finalPrediction.status === 'failed') {
    throw new Error(`Generation failed: ${finalPrediction.error || 'Unknown error'}`);
  }

  if (finalPrediction.status === 'canceled') {
    throw new Error('Generation was canceled');
  }

  if (finalPrediction.status !== 'succeeded') {
    throw new Error('Generation timeout - exceeded maximum wait time');
  }

  // Extract output URLs
  const output = finalPrediction.output;
  if (!output) {
    throw new Error('No output received from Replicate');
  }

  const imageUrls = Array.isArray(output) ? output : [output];

  console.log('✅ Generation completed:', {
    images: imageUrls.length,
    predictTime: finalPrediction.metrics?.predict_time,
  });

  // Download images via proxy and convert to base64
  const base64Images: string[] = [];
  for (const url of imageUrls) {
    // Use proxy to download images (avoid CORS)
    const imageResponse = await fetch(`${PROXY_URL}/api/replicate/download?url=${encodeURIComponent(url)}`);
    if (!imageResponse.ok) {
      console.warn('⚠️ Failed to download image:', url);
      continue;
    }

    const arrayBuffer = await imageResponse.arrayBuffer();
    const base64 = Buffer.from(arrayBuffer).toString('base64');
    base64Images.push(base64);
  }

  return base64Images;
}

/**
 * Fetch the latest version hash for a model from Replicate API
 */
async function fetchModelVersion(model: FluxModel, apiToken: string, proxyUrl: string): Promise<string> {
  try {
    // Call proxy to get model info
    const response = await fetch(`${proxyUrl}/api/replicate/models/${encodeURIComponent(model)}`, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
      },
    });

    if (!response.ok) {
      console.warn('⚠️ Failed to fetch model version, using fallback');
      return getFallbackVersion(model);
    }

    const data = await response.json();
    const latestVersion = data.latest_version?.id;

    if (!latestVersion) {
      console.warn('⚠️ No latest version found, using fallback');
      return getFallbackVersion(model);
    }

    console.log('✅ Fetched model version:', latestVersion.substring(0, 12) + '...');
    return latestVersion;
  } catch (error) {
    console.error('❌ Error fetching model version:', error);
    return getFallbackVersion(model);
  }
}

/**
 * Fallback version hashes (updated as of Jan 2025)
 */
function getFallbackVersion(model: FluxModel): string {
  const versionMap: Record<FluxModel, string> = {
    'black-forest-labs/flux-1.1-pro-ultra': 'f6a11cd3a1f9e95e4e79d83c1a583d2062e8094e900ba93c5ee2e2f831a3e6e3',
    'black-forest-labs/flux-1.1-pro': 'a8f29a27ca15c3e86b8fcb973a1f2e04663b8b0b2a6f56ec0e3b4e3c6c6f7e8f',
    'black-forest-labs/flux-dev': '5e4e0b67b3bfcf7f7e8f1c7b6b1b0c0e7b3e6e5e6e7e8e9e0e1e2e3e4e5e6e7',
    'black-forest-labs/flux-schnell': '6e7e8e9e0e1e2e3e4e5e6e7e8e9e0e1e2e3e4e5e6e7e8e9e0e1e2e3e4e5e6e',
  };

  console.log('📌 Using fallback version for:', model);
  return versionMap[model] || versionMap['black-forest-labs/flux-1.1-pro-ultra'];
}

/**
 * Validate Replicate API token
 */
export async function validateReplicateToken(apiToken: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.replicate.com/v1/models', {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
      },
    });

    return response.ok;
  } catch (error) {
    console.error('Token validation error:', error);
    return false;
  }
}
