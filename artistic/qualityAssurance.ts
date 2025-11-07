/**
 * ARTISTIC QUALITY ASSURANCE
 * Validates prompts for safety compliance and artistic quality
 * before generation
 */

import type { ValidationResult } from './types';
import { ArtisticLanguageMapper } from './languageMapper';

export class ArtisticQualityAssurance {
  /**
   * Comprehensive prompt validation
   */
  static async validatePrompt(prompt: string): Promise<ValidationResult> {
    const issues: string[] = [];
    const warnings: string[] = [];
    let score = 100;

    // Check 1: Safety language validation
    const safetyCheck = ArtisticLanguageMapper.validateSafety(prompt);
    if (!safetyCheck.isValid) {
      issues.push(`Problematic terms found: ${safetyCheck.problematicTerms.join(', ')}`);
      score -= 30;
    }

    // Check 2: Artistic context presence
    if (!this.hasStrongArtisticContext(prompt)) {
      warnings.push('Weak artistic context - consider adding master photographer reference');
      score -= 10;
    }

    // Check 3: Technical excellence markers
    if (!this.hasTechnicalExcellence(prompt)) {
      warnings.push('Missing technical photography specifications');
      score -= 5;
    }

    // Check 4: Prompt length validation
    const lengthCheck = this.validateLength(prompt);
    if (!lengthCheck.isValid) {
      issues.push(lengthCheck.message!);
      score -= 15;
    }

    // Check 5: Master style references
    if (!this.hasMasterStyleReference(prompt)) {
      warnings.push('No master photographer style reference found');
      score -= 5;
    }

    // Check 6: Safety context
    if (!this.hasSafetyContext(prompt)) {
      warnings.push('Missing safety/artistic context statement');
      score -= 10;
    }

    // Check 7: Balance check
    const balanceCheck = this.checkPromptBalance(prompt);
    if (balanceCheck.warning) {
      warnings.push(balanceCheck.warning);
      score -= 5;
    }

    return {
      isValid: issues.length === 0,
      issues,
      warnings,
      score: Math.max(0, score)
    };
  }

  /**
   * Check for strong artistic context
   */
  private static hasStrongArtisticContext(prompt: string): boolean {
    const contextMarkers = [
      'fine-art',
      'fine art',
      'master',
      'gallery',
      'exhibition',
      'editorial',
      'vogue',
      'fashion photography',
      'artistic',
      'award-winning',
      'museum'
    ];

    const lowerPrompt = prompt.toLowerCase();
    const matches = contextMarkers.filter(marker => lowerPrompt.includes(marker));
    return matches.length >= 2; // Require at least 2 markers
  }

  /**
   * Check for technical excellence markers
   */
  private static hasTechnicalExcellence(prompt: string): boolean {
    const technicalMarkers = [
      '8k',
      'resolution',
      'sharp',
      'lighting',
      'composition',
      'professional',
      'quality',
      'detail',
      'lens',
      'camera',
      'exposure',
      'contrast'
    ];

    const lowerPrompt = prompt.toLowerCase();
    const matches = technicalMarkers.filter(marker => lowerPrompt.includes(marker));
    return matches.length >= 3; // Require at least 3 technical terms
  }

  /**
   * Validate prompt length
   */
  private static validateLength(prompt: string): { isValid: boolean; message?: string } {
    const length = prompt.length;

    if (length < 100) {
      return {
        isValid: false,
        message: 'Prompt too short - needs more detail for quality generation'
      };
    }

    if (length > 10000) {
      return {
        isValid: false,
        message: 'Prompt too long - may exceed model limits or cause timeouts'
      };
    }

    return { isValid: true };
  }

  /**
   * Check for master style reference
   */
  private static hasMasterStyleReference(prompt: string): boolean {
    const masterNames = [
      'helmut newton',
      'newton',
      'irving penn',
      'penn',
      'paolo roversi',
      'roversi',
      'herb ritts',
      'ritts'
    ];

    const lowerPrompt = prompt.toLowerCase();
    return masterNames.some(name => lowerPrompt.includes(name));
  }

  /**
   * Check for safety context
   */
  private static hasSafetyContext(prompt: string): boolean {
    const safetyMarkers = [
      'tasteful',
      'sophisticated',
      'professional',
      'gallery',
      'editorial',
      'artistic expression',
      'fine-art'
    ];

    const lowerPrompt = prompt.toLowerCase();
    return safetyMarkers.some(marker => lowerPrompt.includes(marker));
  }

  /**
   * Check prompt balance (not too focused on any one aspect)
   */
  private static checkPromptBalance(prompt: string): { isBalanced: boolean; warning?: string } {
    const lowerPrompt = prompt.toLowerCase();

    // Count different aspect mentions
    const lightingMentions = (lowerPrompt.match(/light|shadow|illuminate/g) || []).length;
    const wardrobeMentions = (lowerPrompt.match(/wear|dress|cloth|fabric|garment/g) || []).length;
    const poseMentions = (lowerPrompt.match(/pose|position|stance|posture/g) || []).length;

    if (lightingMentions > 10) {
      return { isBalanced: false, warning: 'Over-emphasis on lighting - balance with other elements' };
    }

    if (wardrobeMentions > 10) {
      return { isBalanced: false, warning: 'Over-emphasis on wardrobe - balance with composition and lighting' };
    }

    if (poseMentions > 8) {
      return { isBalanced: false, warning: 'Over-emphasis on pose - balance with environment and technical specs' };
    }

    return { isBalanced: true };
  }

  /**
   * Get quality score interpretation
   */
  static getScoreInterpretation(score: number): string {
    if (score >= 90) {
      return 'Excellent - Ready for gallery-quality generation';
    } else if (score >= 75) {
      return 'Good - Minor improvements recommended';
    } else if (score >= 60) {
      return 'Fair - Several improvements needed';
    } else {
      return 'Poor - Significant revision required';
    }
  }

  /**
   * Auto-fix common issues
   */
  static async autoFixPrompt(prompt: string): Promise<string> {
    let fixed = prompt;

    // Apply artistic language mapping
    fixed = ArtisticLanguageMapper.mapToArtisticLanguage(fixed);

    // Add artistic context if missing
    if (!this.hasStrongArtisticContext(fixed)) {
      fixed = ArtisticLanguageMapper.addArtisticContext(fixed);
    }

    // Add safety context if missing
    if (!this.hasSafetyContext(fixed)) {
      fixed = ArtisticLanguageMapper.addSafetyContext(fixed);
    }

    return fixed;
  }
}
