import type { PromptData, CalculatedLevels } from '../types';
import { getNodeById } from './nodeDefinitions';

/**
 * AUTO-CONFIGURATION MAPPER
 *
 * Converts selected visual nodes into a complete PromptData configuration
 * by applying all auto-configurations from selected nodes.
 */

export function mapNodesToPromptData(
  selectedNodeIds: string[],
  calculatedLevels: CalculatedLevels,
  basePrompt?: PromptData
): PromptData {
  // Start with base prompt or create minimal structure
  let result: PromptData = basePrompt ? JSON.parse(JSON.stringify(basePrompt)) : {
    shot: '',
    subject: {
      variant: '',
      pose: '',
      hair_color: '',
      hair_style: '',
      nail_art: '',
      high_heels: '',
      tattoos: 'none',
      piercings: 'none',
      body_art: 'none',
      skin_finish: '',
      hand_and_nail_details: '',
    },
    wardrobe: '',
    environment: '',
    lighting: '',
    camera: {
      focal_length: '',
      aperture: '',
      distance: '',
      angle: '',
      framing: '',
    },
    color_grade: '',
    style: '',
    quality: '',
    figure_and_form: '',
    skin_micro_details: '',
    fabric_physics: '',
    material_properties: '',
  };

  // Collect all nodes
  const selectedNodes = selectedNodeIds
    .map(id => getNodeById(id))
    .filter(node => node !== undefined);

  // Separate concept nodes from component nodes
  const conceptNodes = selectedNodes.filter(n => n!.category === 'concept');
  const componentNodes = selectedNodes.filter(n => n!.category !== 'concept');

  // PRIORITY 1: Apply concept auto-configurations first
  // Concepts can set multiple fields at once
  conceptNodes.forEach(node => {
    if (node!.autoConfigures) {
      result = deepMerge(result, node!.autoConfigures);
    }
  });

  // PRIORITY 2: Apply component nodes (more specific, override concept defaults)
  componentNodes.forEach(node => {
    if (node!.autoConfigures) {
      result = deepMerge(result, node!.autoConfigures);
    }
  });

  // PRIORITY 3: Apply level-based enhancements
  result = applyLevelEnhancements(result, calculatedLevels);

  return result;
}

/**
 * Deep merge utility - merges source into target recursively
 */
function deepMerge(target: any, source: any): any {
  const result = JSON.parse(JSON.stringify(target));

  for (const key in source) {
    if (source[key] === undefined || source[key] === null) continue;

    if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else if (typeof source[key] === 'string' && source[key].trim() !== '') {
      // For strings, append if target exists and is non-empty
      if (result[key] && typeof result[key] === 'string' && result[key].trim() !== '') {
        // Smart append: avoid duplicates
        if (!result[key].toLowerCase().includes(source[key].toLowerCase().substring(0, 30))) {
          result[key] = `${result[key]}. ${source[key]}`;
        }
      } else {
        result[key] = source[key];
      }
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

/**
 * Apply enhancements based on calculated levels
 */
function applyLevelEnhancements(prompt: PromptData, levels: CalculatedLevels): PromptData {
  const enhanced = JSON.parse(JSON.stringify(prompt));

  // Intimacy Level Enhancements
  if (levels.intimacy >= 10) {
    if (!enhanced.lighting.toLowerCase().includes('intimate')) {
      enhanced.lighting = `Intimate, soft lighting creating warmth and connection. ${enhanced.lighting}`;
    }
  }

  // Seduction Level Enhancements
  if (levels.seduction >= 10) {
    if (!enhanced.subject.pose.toLowerCase().includes('seductive') && !enhanced.subject.pose.toLowerCase().includes('allure')) {
      enhanced.subject.pose = `Seductive, intentional positioning conveying magnetic allure. ${enhanced.subject.pose}`;
    }
  }

  // Eroticism Level Enhancements
  if (levels.eroticism >= 12) {
    if (!enhanced.style.toLowerCase().includes('erotic')) {
      enhanced.style = `Erotic art photography tradition with bold sensuality. ${enhanced.style}`;
    }
  }

  // Professionalism Level Enhancements
  if (levels.professionalism >= 15) {
    if (!enhanced.quality.toLowerCase().includes('8k') && !enhanced.quality.toLowerCase().includes('ultra')) {
      enhanced.quality = `Ultra-premium 8K resolution with museum-grade quality. ${enhanced.quality}`;
    }
  }

  // Power Level Enhancements
  if (levels.power >= 12) {
    if (!enhanced.subject.pose.toLowerCase().includes('power') && !enhanced.subject.pose.toLowerCase().includes('dominan')) {
      enhanced.subject.pose = `Powerful stance with commanding presence and authority. ${enhanced.subject.pose}`;
    }
  }

  // Abstraction Level Enhancements
  if (levels.abstraction >= 14) {
    if (!enhanced.style.toLowerCase().includes('abstract') && !enhanced.style.toLowerCase().includes('sculptural')) {
      enhanced.style = `Sculptural abstraction with geometric form emphasis. ${enhanced.style}`;
    }
  }

  // Boundary Level Warnings (Premium Tier)
  if (levels.boundary >= 16) {
    // Add artistic justification language
    if (!enhanced.style.toLowerCase().includes('fine art') && !enhanced.style.toLowerCase().includes('museum')) {
      enhanced.style = `Fine art photography tradition, museum-quality artistic merit. ${enhanced.style}`;
    }
  }

  // Shot Description Enhancement
  if (!enhanced.shot || enhanced.shot.trim() === '') {
    enhanced.shot = generateShotDescription(levels);
  }

  // Quality Enhancement if empty
  if (!enhanced.quality || enhanced.quality.trim() === '') {
    enhanced.quality = generateQualityDescription(levels);
  }

  return enhanced;
}

/**
 * Generate shot description based on levels
 */
function generateShotDescription(levels: CalculatedLevels): string {
  const aspectRatio = '9:16'; // Default vertical
  let description = `${aspectRatio} aspect ratio. `;

  if (levels.intimacy >= 10) {
    description += 'Intimate framing creating emotional connection. ';
  } else if (levels.professionalism >= 12) {
    description += 'Professional editorial framing with precision composition. ';
  } else {
    description += 'Carefully composed portrait framing. ';
  }

  if (levels.seduction >= 12) {
    description += 'Focus on seductive magnetism and allure.';
  } else if (levels.power >= 12) {
    description += 'Emphasizing power dynamics and commanding presence.';
  } else {
    description += 'Capturing authentic expression and form.';
  }

  return description;
}

/**
 * Generate quality description based on levels
 */
function generateQualityDescription(levels: CalculatedLevels): string {
  if (levels.professionalism >= 18) {
    return 'Museum-grade fine art photography. Shot on Hasselblad X2D. Ultra-premium 8K resolution with absolute clarity and micro-detail perfection.';
  } else if (levels.professionalism >= 14) {
    return 'High-end commercial photography quality. Shot on professional medium format. 8K detail with exceptional sharpness and texture rendering.';
  } else if (levels.professionalism >= 10) {
    return 'Professional editorial quality. Shot on full-frame DSLR. High resolution with sharp focus and excellent detail.';
  } else {
    return 'Professional photography quality with natural detail and clarity.';
  }
}

/**
 * Get human-readable summary of selected configuration
 */
export function getConfigurationSummary(selectedNodeIds: string[]): string {
  const selectedNodes = selectedNodeIds
    .map(id => getNodeById(id))
    .filter(node => node !== undefined);

  const categories: Record<string, string[]> = {};

  selectedNodes.forEach(node => {
    if (!categories[node!.category]) {
      categories[node!.category] = [];
    }
    categories[node!.category].push(node!.name);
  });

  const parts: string[] = [];

  if (categories['concept']) {
    parts.push(`Concepts: ${categories['concept'].join(', ')}`);
  }
  if (categories['subject']) {
    parts.push(`Subject: ${categories['subject'].join(', ')}`);
  }
  if (categories['wardrobe']) {
    parts.push(`Wardrobe: ${categories['wardrobe'].join(', ')}`);
  }
  if (categories['pose']) {
    parts.push(`Pose: ${categories['pose'].join(', ')}`);
  }
  if (categories['environment']) {
    parts.push(`Environment: ${categories['environment'].join(', ')}`);
  }
  if (categories['lighting']) {
    parts.push(`Lighting: ${categories['lighting'].join(', ')}`);
  }
  if (categories['camera']) {
    parts.push(`Camera: ${categories['camera'].join(', ')}`);
  }
  if (categories['weaving']) {
    parts.push(`Weaving: ${categories['weaving'].join(', ')}`);
  }
  if (categories['style']) {
    parts.push(`Style: ${categories['style'].join(', ')}`);
  }

  return parts.join('\n');
}
