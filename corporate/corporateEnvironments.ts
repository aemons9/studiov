/**
 * CORPORATE ENVIRONMENTS - 7 office settings with varying luxury and privacy
 * Each environment has distinct aesthetic and power dynamics
 */

import type { OfficeEnvironment } from './types';

export const OFFICE_ENVIRONMENTS: OfficeEnvironment[] = [
  {
    type: 'corporation_mnc',
    luxuryLevel: 9,
    privacyLevel: 8,
    aesthetic: 'Ultra-modern corporate luxury with glass, steel, and commanding city views. Minimalist power expressed through architectural excellence and cutting-edge design',
    exclusiveSpaces: [
      'CEO sky office with 360-degree city views',
      'Executive floor with restricted access',
      'Private elevator directly to penthouse level',
      'Board of directors suite with panoramic windows',
      'Executive dining room overlooking financial district'
    ],
    lightingProfiles: [
      'Dramatic golden hour through floor-to-ceiling windows',
      'Architectural LED accent lighting along clean lines',
      'Warm executive ambiance from designer fixtures',
      'City lights creating bokeh background at night',
      'Natural light reflecting off polished surfaces'
    ],
    materialPalette: [
      'Polished concrete floors',
      'Floor-to-ceiling glass walls',
      'Brushed steel and titanium accents',
      'Rich exotic wood conference tables',
      'Italian marble reception areas'
    ]
  },

  {
    type: 'hotel_chain',
    luxuryLevel: 10,
    privacyLevel: 9,
    aesthetic: 'Five-star hotel opulence meets bespoke service. Timeless luxury with attention to every sensory detail, where hospitality becomes art form',
    exclusiveSpaces: [
      'Presidential suite with private terrace',
      'Owner\'s penthouse above hotel crown',
      'Private spa and wellness sanctuary',
      'Exclusive rooftop lounge with city views',
      'Hidden owner\'s office behind concierge desk'
    ],
    lightingProfiles: [
      'Golden hour luxury through silk curtains',
      'Candlelight ambiance in private dining',
      'Crystal chandelier illumination',
      'Intimate bedside lighting',
      'Dawn light over terrace breakfast'
    ],
    materialPalette: [
      'Carrara marble bathrooms',
      'Silk velvet upholstery',
      'Egyptian cotton linens',
      'Polished brass fixtures',
      'Handwoven Persian carpets'
    ]
  },

  {
    type: 'real_estate',
    luxuryLevel: 10,
    privacyLevel: 10,
    aesthetic: 'Billionaire developer luxury in architectural masterpieces. Spaces that money can\'t buy, only create. Raw power expressed through design excellence',
    exclusiveSpaces: [
      'Unlisted penthouse not on any market',
      'Private showroom for billion-dollar properties',
      'Rooftop observatory with telescope',
      'Underground parking for supercar collection',
      'Helipad with private aviation access'
    ],
    lightingProfiles: [
      'Museum-quality directional lighting',
      'Architectural highlighting of structural elements',
      'Unobstructed city vista views',
      'Sunset through walls of glass',
      'Precision lighting for art collection'
    ],
    materialPalette: [
      'Exposed architectural concrete',
      'Rare exotic wood installations',
      'Titanium and aerospace materials',
      'Floor-to-ceiling glass with invisible frames',
      'Onyx and rare stone features'
    ]
  },

  {
    type: 'entertainment',
    luxuryLevel: 9,
    privacyLevel: 7,
    aesthetic: 'Creative industry glamour with backstage access to power. Where artistic vision meets commercial empire, high-fashion meets high-stakes',
    exclusiveSpaces: [
      'Executive screening room with luxury seating',
      'Private recording studio with million-dollar equipment',
      'Green room for celebrity meetings',
      'Rooftop lounge for industry events',
      'Production office overlooking studio lot'
    ],
    lightingProfiles: [
      'Professional studio-quality lighting',
      'Theatrical spotlight for dramatic emphasis',
      'Neon accent creating modern edge',
      'Soft ambient for creative discussions',
      'High-contrast cinematic lighting'
    ],
    materialPalette: [
      'Acoustic panels with designer finish',
      'Polished concrete industrial floors',
      'Luxury velvet curtains and seating',
      'Chrome and mirror accents',
      'Exposed brick with modern contrast'
    ]
  },

  {
    type: 'nightclub_chain',
    luxuryLevel: 8,
    privacyLevel: 9,
    aesthetic: 'Nocturnal luxury and VIP exclusivity. Where nightlife empire meets after-hours power, darkness becomes canvas for strategic illumination',
    exclusiveSpaces: [
      'Owner\'s private office above main floor',
      'VIP bottle service lounge with one-way glass',
      'Hidden speakeasy behind false bookcase',
      'Rooftop terrace overlooking city nightlife',
      'Private elevator to penthouse apartment'
    ],
    lightingProfiles: [
      'Sophisticated club lighting with color control',
      'Intimate booth lighting for privacy',
      'Dramatic spotlight on key areas',
      'Ambient underglow creating atmosphere',
      'City lights through tinted glass'
    ],
    materialPalette: [
      'Black lacquer surfaces',
      'Deep velvet upholstery',
      'Mirrored accent walls',
      'Polished dark wood bars',
      'LED-integrated architectural elements'
    ]
  },

  {
    type: 'government',
    luxuryLevel: 8,
    privacyLevel: 10,
    aesthetic: 'Institutional authority with historical gravitas. Power vested by democratic mandate, spaces that have witnessed national decisions',
    exclusiveSpaces: [
      'Minister\'s private chamber',
      'Classified document archive',
      'Diplomatic reception hall',
      'Secure conference room for cabinet meetings',
      'Private office in parliament building'
    ],
    lightingProfiles: [
      'Dignified office lighting befitting authority',
      'Secure lighting with no windows to outside',
      'Historical ambiance with period fixtures',
      'Natural light through government-secured windows',
      'Formal portrait lighting'
    ],
    materialPalette: [
      'Rich mahogany wood paneling',
      'Leather furniture and desk accessories',
      'Brass fittings and national emblems',
      'Wool carpet in government colors',
      'Marble in state reception areas'
    ]
  },

  {
    type: 'head_of_state',
    luxuryLevel: 10,
    privacyLevel: 10,
    aesthetic: 'National authority with historical significance. Ultimate power expressed through timeless design, where every decision affects millions',
    exclusiveSpaces: [
      'Oval office equivalent with national significance',
      'Private residence within state complex',
      'Secure bunker for national emergencies',
      'Treaty signing room with historical weight',
      'Private study for confidential decisions'
    ],
    lightingProfiles: [
      'State portrait quality lighting',
      'Historical authenticity in official spaces',
      'Secure illumination with backup systems',
      'Natural light for morning briefings',
      'Formal lighting for official photographs'
    ],
    materialPalette: [
      'Historical woods with national significance',
      'Marble in state colors',
      'Silk drapes with national emblems',
      'Gold leaf details on moldings',
      'Hand-woven carpets with state seal'
    ]
  }
];

export function getEnvironmentByType(type: string): OfficeEnvironment | undefined {
  return OFFICE_ENVIRONMENTS.find(env => env.type === type);
}

export function getEnvironmentsByLuxury(minLuxury: number): OfficeEnvironment[] {
  return OFFICE_ENVIRONMENTS.filter(env => env.luxuryLevel >= minLuxury);
}

export function getEnvironmentsByPrivacy(minPrivacy: number): OfficeEnvironment[] {
  return OFFICE_ENVIRONMENTS.filter(env => env.privacyLevel >= minPrivacy);
}

export function getCompatibleEnvironments(rolePreferences: string[]): OfficeEnvironment[] {
  return OFFICE_ENVIRONMENTS.filter(env =>
    rolePreferences.includes(env.type)
  );
}
