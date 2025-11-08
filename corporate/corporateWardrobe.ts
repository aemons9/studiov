/**
 * CORPORATE WARDROBE LIBRARY
 * Safety-mapped wardrobe descriptions for corporate sensuality
 * Organized by intimacy level and power dynamic
 */

import type { ArtisticExplicitness, PowerDynamic } from './types';

export interface CorporateWardrobeOption {
  id: string;
  name: string;
  intimacyLevel: number[];
  powerDynamic: PowerDynamic[];
  explicitness: ArtisticExplicitness;
  description: string;
  artisticLanguage: string;
  suitableRoles: string[];
}

export const CORPORATE_WARDROBE_CATALOG: CorporateWardrobeOption[] = [
  // === MINIMAL / PROFESSIONAL ===
  {
    id: 'power-suit-classic',
    name: 'Classic Power Suit',
    intimacyLevel: [1, 2, 3, 4],
    powerDynamic: ['dominant', 'balanced'],
    explicitness: 'minimal',
    description: 'Impeccably tailored business suit in luxury fabric',
    artisticLanguage: 'Custom-tailored executive suit in charcoal Italian wool, architectural shoulder construction, precise waist definition. The ensemble speaks authority through impeccable fit and luxury materials',
    suitableRoles: ['chief_executive', 'board_member', 'lawyer', 'government_official']
  },

  {
    id: 'pencil-skirt-blouse',
    name: 'Professional Pencil Skirt & Blouse',
    intimacyLevel: [2, 3, 4, 5],
    powerDynamic: ['submissive', 'balanced'],
    explicitness: 'minimal',
    description: 'Form-fitting pencil skirt with tailored blouse',
    artisticLanguage: 'Precision-cut pencil skirt in structured fabric emphasizing sculptural form, paired with tailored silk blouse. Professional silhouette with elegant proportion',
    suitableRoles: ['personal_secretary', 'hr_executive', 'design_executive']
  },

  // === SUGGESTIVE ===
  {
    id: 'unbuttoned-power-suit',
    name: 'Strategically Unbuttoned Suit',
    intimacyLevel: [5, 6, 7],
    powerDynamic: ['dominant', 'balanced'],
    explicitness: 'suggestive',
    description: 'Power suit with strategic unbuttoning revealing architectural undergarments',
    artisticLanguage: 'Executive tailoring with deliberate unbuttoning revealing geometric lace foundation beneath. The juxtaposition of corporate armor and intimate architecture creates sophisticated tension',
    suitableRoles: ['chief_executive', 'board_member', 'lawyer']
  },

  {
    id: 'sheer-blouse-professional',
    name: 'Sheer Blouse with Camisole',
    intimacyLevel: [5, 6, 7],
    powerDynamic: ['submissive', 'balanced'],
    explicitness: 'suggestive',
    description: 'Transparent professional blouse over structured camisole',
    artisticLanguage: 'Delicate transparency in professional silk, layered over architectural foundation garment. Multiple planes of visibility create sophisticated suggestion',
    suitableRoles: ['personal_secretary', 'hr_executive', 'design_executive']
  },

  {
    id: 'power-sari-modern',
    name: 'Contemporary Power Sari',
    intimacyLevel: [5, 6, 7, 8],
    powerDynamic: ['dominant'],
    explicitness: 'suggestive',
    description: 'Modern sari with contemporary blouse revealing sophisticated structure',
    artisticLanguage: 'Traditional draping reimagined with contemporary cut. Designer blouse beneath silk reveals strategic geometric patterns, merging cultural authority with modern sensuality',
    suitableRoles: ['government_official', 'head_of_state', 'chief_executive']
  },

  // === REVEALING ===
  {
    id: 'blazer-minimal-beneath',
    name: 'Tailored Blazer Minimal Beneath',
    intimacyLevel: [7, 8, 9],
    powerDynamic: ['dominant'],
    explicitness: 'revealing',
    description: 'Architectural blazer worn open with minimal coverage beneath',
    artisticLanguage: 'Custom-tailored blazer in luxurious fabric, worn open to frame rather than conceal. Beneath, only strategic shadow and architectural jewelry create elegant negative space. The blazer becomes sculptural element',
    suitableRoles: ['chief_executive', 'board_member', 'design_executive']
  },

  {
    id: 'bodysuit-sheer-professional',
    name: 'Sheer Professional Bodysuit',
    intimacyLevel: [7, 8, 9],
    powerDynamic: ['balanced', 'dominant'],
    explicitness: 'revealing',
    description: 'Transparent bodysuit with strategic opacity under suit jacket',
    artisticLanguage: 'Technical fabric bodysuit with graduated transparency, strategic seaming creates architectural coverage patterns. Under executive jacket, creates layers of revelation',
    suitableRoles: ['board_member', 'design_executive', 'hr_executive']
  },

  {
    id: 'harness-under-professional',
    name: 'Geometric Harness Under Tailoring',
    intimacyLevel: [8, 9],
    powerDynamic: ['dominant', 'balanced'],
    explicitness: 'revealing',
    description: 'Leather harness system worn beneath unbuttoned professional wear',
    artisticLanguage: 'Architectural leather harness with geometric strap configuration, worn as foundation beneath deliberately open executive blazer. The constraint aesthetic merges with corporate authority',
    suitableRoles: ['chief_executive', 'design_executive', 'lawyer']
  },

  {
    id: 'secretary-strategic-minimal',
    name: 'Strategic Minimal Professional',
    intimacyLevel: [8, 9, 10],
    powerDynamic: ['submissive', 'balanced'],
    explicitness: 'revealing',
    description: 'Minimal coverage beneath professional outer layer',
    artisticLanguage: 'Form-fitting foundation garments with strategic lace and transparency, designed to be glimpsed beneath professional exterior. Subversive sensuality through controlled revelation',
    suitableRoles: ['personal_secretary', 'design_executive']
  },

  // === ARTISTICALLY EXPLICIT ===
  {
    id: 'executive-minimal-statement',
    name: 'Executive Power Minimal',
    intimacyLevel: [9, 10],
    powerDynamic: ['dominant'],
    explicitness: 'artistically_explicit',
    description: 'Luxurious blazer as sole covering with artistic shadow',
    artisticLanguage: 'Cashmere or silk blazer of extraordinary quality worn as primary garment. Nothing beneath but strategic shadow, architectural jewelry mapping key points. The ultimate expression of power: wearing less because you own everything',
    suitableRoles: ['chief_executive', 'board_member']
  },

  {
    id: 'boardroom-transparency',
    name: 'Transparent Power Statement',
    intimacyLevel: [9, 10],
    powerDynamic: ['dominant', 'balanced'],
    explicitness: 'artistically_explicit',
    description: 'Sheer power suit over minimal architectural foundation',
    artisticLanguage: 'Executive suit constructed entirely from technical transparent fabric, revealing intricate architectural understructure. Multiple layers of visibility, corporate armor becomes transparent declaration of power',
    suitableRoles: ['board_member', 'chief_executive', 'design_executive']
  },

  {
    id: 'ribbon-corporate-mapping',
    name: 'Corporate Constraint Minimal',
    intimacyLevel: [9, 10],
    powerDynamic: ['submissive', 'balanced'],
    explicitness: 'artistically_explicit',
    description: 'Minimal constraint aesthetic in corporate context',
    artisticLanguage: 'Reductionist approach where single continuous element - ribbon, strap, or harness - creates entire wardrobe narrative. Corporate props and power poses provide context for minimal coverage',
    suitableRoles: ['personal_secretary', 'design_executive']
  }
];

export class CorporateWardrobeLibrary {
  getByExplicitness(explicitness: ArtisticExplicitness): CorporateWardrobeOption[] {
    return CORPORATE_WARDROBE_CATALOG.filter(w => w.explicitness === explicitness);
  }

  getByIntimacy(level: number): CorporateWardrobeOption[] {
    return CORPORATE_WARDROBE_CATALOG.filter(w => w.intimacyLevel.includes(level));
  }

  getByPowerDynamic(dynamic: PowerDynamic): CorporateWardrobeOption[] {
    return CORPORATE_WARDROBE_CATALOG.filter(w => w.powerDynamic.includes(dynamic));
  }

  getByRole(role: string): CorporateWardrobeOption[] {
    return CORPORATE_WARDROBE_CATALOG.filter(w => w.suitableRoles.includes(role));
  }

  getSuitable(intimacy: number, dynamic: PowerDynamic, role: string): CorporateWardrobeOption[] {
    return CORPORATE_WARDROBE_CATALOG.filter(w =>
      w.intimacyLevel.includes(intimacy) &&
      w.powerDynamic.includes(dynamic) &&
      w.suitableRoles.includes(role)
    );
  }

  getMinimalWardrobe(dynamic: PowerDynamic): string {
    const options = this.getByExplicitness('minimal').filter(w => w.powerDynamic.includes(dynamic));
    return options[Math.floor(Math.random() * options.length)]?.artisticLanguage || '';
  }

  getSuggestiveWardrobe(dynamic: PowerDynamic): string {
    const options = this.getByExplicitness('suggestive').filter(w => w.powerDynamic.includes(dynamic));
    return options[Math.floor(Math.random() * options.length)]?.artisticLanguage || '';
  }

  getRevealingWardrobe(dynamic: PowerDynamic): string {
    const options = this.getByExplicitness('revealing').filter(w => w.powerDynamic.includes(dynamic));
    return options[Math.floor(Math.random() * options.length)]?.artisticLanguage || '';
  }

  getExplicitWardrobe(dynamic: PowerDynamic): string {
    const options = this.getByExplicitness('artistically_explicit').filter(w => w.powerDynamic.includes(dynamic));
    return options[Math.floor(Math.random() * options.length)]?.artisticLanguage || '';
  }

  getBalancedWardrobe(): string {
    const balanced = this.getByExplicitness('suggestive');
    return balanced[Math.floor(Math.random() * balanced.length)]?.artisticLanguage || '';
  }
}
