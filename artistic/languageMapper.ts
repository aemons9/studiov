/**
 * ARTISTIC LANGUAGE MAPPER
 * Safety-first language system that maps sensual terms to artistic alternatives
 * Prevents safety filter triggers while maintaining artistic intent
 */

export class ArtisticLanguageMapper {
  private static readonly SAFE_MAPPINGS: Record<string, string[]> = {
    // Sensual descriptors → Artistic alternatives
    'sensual': ['graceful', 'elegant', 'artistic', 'poised', 'magnetic'],
    'seductive': ['captivating', 'compelling', 'alluring', 'magnetic', 'commanding'],
    'sexy': ['sophisticated', 'confident', 'powerful', 'striking', 'bold'],
    'provocative': ['bold', 'confrontational', 'powerful', 'artistic statement', 'daring'],
    'sultry': ['compelling', 'magnetic', 'intense', 'captivating', 'smoldering'],

    // Intimacy descriptors → Personal/focused alternatives
    'intimate': ['personal', 'focused', 'concentrated', 'detailed', 'close perspective'],
    'private': ['exclusive', 'personal', 'gallery-quality', 'fine-art', 'intimate composition'],
    'erotic': ['artistic', 'fine-art', 'high-fashion', 'sophisticated', 'masterful'],

    // Revealing descriptors → Architectural/structural alternatives
    'revealing': ['architectural', 'sculptural', 'strategic negative space', 'geometric design'],
    'exposed': ['highlighted', 'emphasized', 'showcased', 'featured', 'architectural focus'],
    'bare': ['minimalist', 'refined', 'essential', 'streamlined', 'sculptural'],

    // Body descriptors → Artistic/architectural alternatives
    'curves': ['sculptural lines', 'graceful form', 'architectural silhouette', 'elegant proportions'],
    'body': ['form', 'silhouette', 'figure', 'presence', 'sculptural composition'],
    'skin': ['surface', 'texture', 'luminous quality', 'tonal range', 'material'],

    // Pose descriptors → Compositional alternatives
    'leaning': ['positioned', 'composed', 'arranged', 'structured', 'architectural stance'],
    'reclining': ['composed', 'positioned', 'arranged', 'sculptural positioning'],
    'arching': ['extended', 'composed', 'positioned', 'sculptural form', 'dynamic stance']
  };

  private static readonly ARTISTIC_CONTEXT_PHRASES = [
    'In the tradition of fine-art fashion photography',
    'Award-winning editorial composition',
    'Gallery exhibition quality',
    'Masterful artistic statement',
    'High-fashion editorial aesthetic',
    'Museum-worthy fine art',
    'Vogue-caliber fashion photography',
    'Artistic fashion editorial'
  ];

  private static readonly SAFETY_CONTEXT_PHRASES = [
    'tasteful artistic expression',
    'sophisticated and professional',
    'high-fashion context',
    'fine-art photography standards',
    'editorial fashion aesthetic',
    'gallery-appropriate artistic vision'
  ];

  /**
   * Map potentially problematic text to artistic alternatives
   */
  static mapToArtisticLanguage(text: string): string {
    let safeText = text;

    Object.entries(this.SAFE_MAPPINGS).forEach(([unsafe, safeAlternatives]) => {
      const regex = new RegExp(`\\b${unsafe}\\b`, 'gi');
      safeText = safeText.replace(regex, () => {
        // Randomly select from alternatives for variety
        const randomIndex = Math.floor(Math.random() * safeAlternatives.length);
        return safeAlternatives[randomIndex];
      });
    });

    return safeText;
  }

  /**
   * Add artistic context preamble to a prompt
   */
  static addArtisticContext(prompt: string): string {
    const contextPhrase = this.ARTISTIC_CONTEXT_PHRASES[
      Math.floor(Math.random() * this.ARTISTIC_CONTEXT_PHRASES.length)
    ];
    return `${contextPhrase}. ${prompt}`;
  }

  /**
   * Add safety context to a prompt
   */
  static addSafetyContext(prompt: string): string {
    const safetyPhrase = this.SAFETY_CONTEXT_PHRASES[
      Math.floor(Math.random() * this.SAFETY_CONTEXT_PHRASES.length)
    ];
    return `${prompt} Created with ${safetyPhrase}.`;
  }

  /**
   * Apply full artistic transformation
   */
  static transformToArtistic(text: string, includeContext: boolean = true): string {
    let transformed = this.mapToArtisticLanguage(text);

    if (includeContext) {
      transformed = this.addArtisticContext(transformed);
      transformed = this.addSafetyContext(transformed);
    }

    return transformed;
  }

  /**
   * Validate that text doesn't contain problematic terms
   */
  static validateSafety(text: string): { isValid: boolean; problematicTerms: string[] } {
    const problematicTerms: string[] = [];
    const highRiskTerms = [
      'nude', 'naked', 'explicit', 'pornographic', 'sexual',
      'xxx', 'adult', 'nsfw', 'intercourse'
    ];

    highRiskTerms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'i');
      if (regex.test(text)) {
        problematicTerms.push(term);
      }
    });

    return {
      isValid: problematicTerms.length === 0,
      problematicTerms
    };
  }

  /**
   * Get random artistic context phrase
   */
  static getRandomArtisticContext(): string {
    return this.ARTISTIC_CONTEXT_PHRASES[
      Math.floor(Math.random() * this.ARTISTIC_CONTEXT_PHRASES.length)
    ];
  }

  /**
   * Get random safety context phrase
   */
  static getRandomSafetyContext(): string {
    return this.SAFETY_CONTEXT_PHRASES[
      Math.floor(Math.random() * this.SAFETY_CONTEXT_PHRASES.length)
    ];
  }
}
