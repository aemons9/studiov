/**
 * CORPORATE ROLES - 7 distinct power archetypes
 * Each role has unique power dynamics and sensuality styles
 */

import type { CorporateRoleProfile } from './types';

export const CORPORATE_ROLES: CorporateRoleProfile[] = [
  {
    role: 'chief_executive',
    powerLevel: 10,
    sensualityStyle: 'authoritative',
    wardrobeSignature: 'Custom-tailored power suits in luxurious fabrics, architectural silhouettes, statement accessories. Strategic unbuttoning revealing architectural undergarments',
    environmentPreferences: ['corporation_mnc', 'real_estate', 'head_of_state'],
    powerPoses: [
      'Standing at floor-to-ceiling windows, hand on glass, surveying city empire',
      'Leaning back in executive chair, feet on polished desk, absolute confidence',
      'Walking through headquarters, coat draped over shoulders like cape',
      'Seated on desk edge, one leg crossed, reviewing quarterly reports'
    ],
    corporateProps: [
      'Architectural blueprints of billion-dollar developments',
      'Financial reports showing record-breaking profits',
      'Corporate seal and signing pen for major deals',
      'Expensive whiskey in crystal tumbler',
      'Private elevator key card'
    ]
  },

  {
    role: 'board_member',
    powerLevel: 9,
    sensualityStyle: 'manipulative',
    wardrobeSignature: 'Luxury fabrics with strategic transparency, statement jewelry signaling wealth and power, designer labels with subversive cuts',
    environmentPreferences: ['corporation_mnc', 'hotel_chain', 'real_estate'],
    powerPoses: [
      'Seated at boardroom table, leaning forward with intense gaze',
      'Standing behind executive chair, hands resting on its back',
      'Leaning against mahogany console with vintage phone',
      'Walking between conference rooms, papers in hand'
    ],
    corporateProps: [
      'Board minutes and confidential acquisition documents',
      'Stock certificates worth millions',
      'Vintage Mont Blanc pen collection',
      'Private club membership cards',
      'Merger and acquisition contracts'
    ]
  },

  {
    role: 'personal_secretary',
    powerLevel: 7,
    sensualityStyle: 'subversive',
    wardrobeSignature: 'Form-fitting professional wear that walks the line, elevated basics with strategic details, pencil skirts and fitted blouses with subtle revelation',
    environmentPreferences: ['corporation_mnc', 'government', 'entertainment'],
    powerPoses: [
      'Leaning against executive desk, organizing schedules on tablet',
      'Standing in doorway, controlling access to CEO',
      'Seated cross-legged, taking dictation with knowing smile',
      'Sorting confidential files in private office after hours'
    ],
    corporateProps: [
      'Executive schedule and calendar',
      'Confidential files marked "CEO Eyes Only"',
      'All-access security cards and keys',
      'Personal phone with direct CEO line',
      'Sealed envelopes with sensitive information'
    ]
  },

  {
    role: 'hr_executive',
    powerLevel: 8,
    sensualityStyle: 'intellectual',
    wardrobeSignature: 'Structured separates suggesting psychological authority, professional power dressing with cerebral edge, glasses as accessory of intellectual dominance',
    environmentPreferences: ['corporation_mnc', 'government', 'hotel_chain'],
    powerPoses: [
      'Standing by filing cabinet, personnel file in hand',
      'Seated behind desk in authoritative posture, conducting performance review',
      'Reviewing employee documents with clinical precision',
      'Leaning against office door after closed-door meeting'
    ],
    corporateProps: [
      'Personnel files containing career-defining information',
      'Policy manuals and employee handbooks',
      'Approval stamps and signature authority',
      'Performance review documents',
      'Confidential HR investigation files'
    ]
  },

  {
    role: 'design_executive',
    powerLevel: 8,
    sensualityStyle: 'creative',
    wardrobeSignature: 'Architectural fashion pieces, artistic expression through unconventional tailoring, high-fashion editorial looks, creative use of textures and materials',
    environmentPreferences: ['entertainment', 'corporation_mnc', 'hotel_chain'],
    powerPoses: [
      'Kneeling among fabric samples and design swatches',
      'Standing at drafting table, sketching with dramatic gestures',
      'Evaluating prototypes with critical artistic eye',
      'Surrounded by mood boards and material libraries'
    ],
    corporateProps: [
      'Design sketches for million-dollar projects',
      'Material swatches and fabric samples',
      'Digital tablet with CAD renderings',
      'Pantone color books and trend forecasts',
      'Award trophies for design excellence'
    ]
  },

  {
    role: 'government_official',
    powerLevel: 9,
    sensualityStyle: 'bureaucratic',
    wardrobeSignature: 'Power saris with modern subversion, traditional garments with contemporary cutting, designer blouses under traditional drapes, bureaucratic formality with hidden sensuality',
    environmentPreferences: ['government', 'head_of_state'],
    powerPoses: [
      'Sitting on desk edge, reviewing policy documents',
      'Standing with official documents, addressing legislative chamber',
      'Leaning against marble column in government building',
      'Seated in minister\'s chair, signing legislation'
    ],
    corporateProps: [
      'Official government seals and stamps',
      'Policy documents affecting millions',
      'Diplomatic gifts from foreign dignitaries',
      'National flag and government insignia',
      'Classified briefing documents'
    ]
  },

  {
    role: 'lawyer',
    powerLevel: 9,
    sensualityStyle: 'legal',
    wardrobeSignature: 'Sharp courtroom tailoring with feminine subversion, legal authority expressed through precise cuts, power suits with strategic details, professional armor with sensual undertones',
    environmentPreferences: ['corporation_mnc', 'government'],
    powerPoses: [
      'Standing on library ladder reaching for case law',
      'Leaning against law library shelves, brief in hand',
      'Seated at partner desk, reviewing contracts',
      'Walking through courthouse hallways with files'
    ],
    corporateProps: [
      'Legal briefs for high-stakes cases',
      'Case files worth hundreds of millions',
      'Law degrees from prestigious universities',
      'Confidential client documents',
      'Courtroom evidence and exhibits'
    ]
  }
];

export function getRoleByType(role: string): CorporateRoleProfile | undefined {
  return CORPORATE_ROLES.find(r => r.role === role);
}

export function getRolesByPowerLevel(minPower: number): CorporateRoleProfile[] {
  return CORPORATE_ROLES.filter(r => r.powerLevel >= minPower);
}

export function getRolesBySensuality(style: string): CorporateRoleProfile[] {
  return CORPORATE_ROLES.filter(r => r.sensualityStyle === style);
}
