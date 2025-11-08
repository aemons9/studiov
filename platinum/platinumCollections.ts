/**
 * PLATINUM COLLECTION - Complete Ecosystem Export
 * 10 Premium Indian Model Variants with Photographers, Environments, Wardrobes
 * Optimized for Evening/Midnight Seductive Photography
 */

import type { PlatinumModelVariant } from './types';

// Import wardrobe collections from modelVariants
import {
  midnightSeductressWardrobe,
  fitnessBombshellWardrobe,
  graphicEditorialWardrobe,
  privateBoudoirWardrobe,
  luxuryLoungeWardrobe,
  spaTubWardrobe,
  rooftopMidnightWardrobe,
  hotelSuiteWardrobe,
  undergroundClubWardrobe,
  artStudioWardrobe
} from './modelVariants';

// Re-export for convenience
export {
  midnightSeductressWardrobe,
  fitnessBombshellWardrobe,
  graphicEditorialWardrobe,
  privateBoudoirWardrobe,
  luxuryLoungeWardrobe,
  spaTubWardrobe,
  rooftopMidnightWardrobe,
  hotelSuiteWardrobe,
  undergroundClubWardrobe,
  artStudioWardrobe
};

export const PLATINUM_VARIANTS: PlatinumModelVariant[] = [
  {
    id: 'midnight-seductress',
    name: 'Midnight Seductress',
    category: 'Classic Erotic Actress',
    description: 'Timeless evening elegance with maximum seductive power, midnight photography specialist',
    physicalTraits: {
      height: '5\'9"',
      figure: 'Voluptuous hourglass with commanding presence',
      curves: {
        bust: '36D',
        waist: '26"',
        hips: '38"',
        emphasis: 'maximum-curves'
      },
      skinTone: 'Warm caramel with radiant glow',
      features: 'Sultry expressive eyes, full lips, captivating magnetic gaze',
      fitness: 'curvy-fit'
    },
    personality: 'Confident seductress with midnight allure and classic elegance',
    expertise: ['Evening seduction photography', 'Midnight intimate sessions', 'Classic erotic art', 'Silk and lace specialist'],
    wardrobeCollection: midnightSeductressWardrobe,
    personalPhotographer: {
      name: 'Marco Noir',
      style: 'Classic erotic elegance with midnight sophistication',
      specialty: 'Evening seduction and intimate midnight sessions',
      intimacyApproach: 'Maximum intimacy with elegant seductive focus',
      lightingSignature: 'Dramatic low-key lighting with warm amber accents creating intimate midnight atmosphere',
      compositionStyle: 'Close intimate framing emphasizing curves and seductive expression',
      cameraPreference: '85mm f/1.4 for intimate portraits, 50mm f/1.2 for environmental seduction',
      fluxSettings: {
        safetyTolerance: 5,
        rawMode: true,
        guidanceScale: 7.5
      },
      imagenSettings: {
        safetyFilter: 'block_few',
        personGeneration: 'allow_adult'
      }
    },
    privateEnvironments: [
      {
        id: 'midnight-bedroom',
        name: 'Midnight Bedroom Suite',
        type: 'bedroom',
        description: 'Luxury bedroom with silk sheets, dramatic lighting, intimate midnight atmosphere',
        lightingProfile: 'Warm amber bedside lighting with dramatic shadows',
        timeOfDay: ['midnight', 'late-night'],
        atmosphere: 'Intimate seductive with classic elegance',
        privacyLevel: 10,
        luxuryLevel: 9,
        materialPalette: ['Silk sheets', 'Velvet drapes', 'Warm wood furnishings']
      }
    ],
    defaultTimeOfDay: 'midnight',
    intimacyDynamic: 'seductive',
    optimizedFor: ['flux', 'imagen']
  },

  {
    id: 'fitness-bombshell',
    name: 'Fitness Bombshell',
    category: 'Athletic Curves & Lower Body Focus',
    description: 'Athletic fitness model with emphasized curves, sculpted lower body specialist, gym glamour expert',
    physicalTraits: {
      height: '5\'8"',
      figure: 'Athletic bombshell with sculpted curves and toned lower body',
      curves: {
        bust: '34C',
        waist: '25"',
        hips: '40"',
        emphasis: 'lower-focus'
      },
      skinTone: 'Deep dusky with athletic glow',
      features: 'Strong bone structure, intense eyes, fitness radiance',
      fitness: 'athletic'
    },
    personality: 'Confident fitness goddess with athletic seduction and curve emphasis',
    expertise: ['Fitness glamour photography', 'Athletic seduction', 'Lower body emphasis', 'Gym and studio sessions'],
    wardrobeCollection: fitnessBombshellWardrobe,
    personalPhotographer: {
      name: 'Viktor Sculpt',
      style: 'Athletic glamour with curve emphasis and fitness seduction',
      specialty: 'Fitness photography with lower body focus and athletic sensuality',
      intimacyApproach: 'Athletic confidence with curve-focused seductive energy',
      lightingSignature: 'Dramatic rim lighting emphasizing muscular definition and curves',
      compositionStyle: 'Dynamic angles showcasing athletic physique and sculpted lower body',
      cameraPreference: '70-200mm f/2.8 for curve emphasis, wide apertures for isolation',
      fluxSettings: {
        safetyTolerance: 4,
        rawMode: true,
        guidanceScale: 7.0
      },
      imagenSettings: {
        safetyFilter: 'block_few',
        personGeneration: 'allow_adult'
      }
    },
    privateEnvironments: [
      {
        id: 'private-gym',
        name: 'Private Luxury Gym',
        type: 'studio',
        description: 'High-end private gym with dramatic lighting for fitness glamour photography',
        lightingProfile: 'Dramatic contrast lighting emphasizing athletic form',
        timeOfDay: ['golden-hour', 'evening'],
        atmosphere: 'Athletic confidence with seductive energy',
        privacyLevel: 9,
        luxuryLevel: 8,
        materialPalette: ['Polished steel equipment', 'Leather benches', 'Mirrored walls']
      }
    ],
    defaultTimeOfDay: 'evening',
    intimacyDynamic: 'provocative',
    optimizedFor: ['flux', 'imagen']
  },

  {
    id: 'graphic-editorial-queen',
    name: 'Graphic Editorial Queen',
    category: 'Nude Art Expert & Erotic Movie Styled',
    description: 'Maximum curves specialist, graphic editorial nude art expert, erotic movie aesthetic',
    physicalTraits: {
      height: '5\'10"',
      figure: 'Statuesque bombshell with maximum curves, editorial nude art physique',
      curves: {
        bust: '38DD',
        waist: '27"',
        hips: '42"',
        emphasis: 'maximum-curves'
      },
      skinTone: 'Radiant fair to wheatish with flawless finish',
      features: 'Dramatic high cheekbones, full expressive lips, editorial intensity',
      fitness: 'bombshell'
    },
    personality: 'Bold graphic editorial confidence with erotic movie star presence',
    expertise: ['Graphic nude art photography', 'Editorial maximum curves', 'Erotic cinema aesthetic', 'Avant-garde bold expression'],
    wardrobeCollection: graphicEditorialWardrobe,
    personalPhotographer: {
      name: 'Alejandro Provocateur',
      style: 'Graphic editorial with bold nude art and erotic movie cinematography',
      specialty: 'Maximum curves emphasis with avant-garde erotic editorial',
      intimacyApproach: 'Explicit artistic with bold erotic movie aesthetic',
      lightingSignature: 'High-contrast dramatic lighting with sculptural shadows on curves',
      compositionStyle: 'Bold graphic framing emphasizing maximum curves with cinematic composition',
      cameraPreference: '50mm f/1.2 for cinematic depth, 85mm f/1.4 for curve detail',
      fluxSettings: {
        safetyTolerance: 6,
        rawMode: true,
        guidanceScale: 8.0
      },
      imagenSettings: {
        safetyFilter: 'block_few',
        personGeneration: 'allow_adult'
      }
    },
    privateEnvironments: [
      {
        id: 'noir-studio',
        name: 'Film Noir Studio',
        type: 'studio',
        description: 'Cinematic studio with dramatic lighting for graphic editorial nude art',
        lightingProfile: 'High-contrast noir lighting with dramatic shadows',
        timeOfDay: ['evening', 'midnight'],
        atmosphere: 'Bold erotic movie aesthetic with graphic editorial intensity',
        privacyLevel: 10,
        luxuryLevel: 9,
        materialPalette: ['Black seamless backdrop', 'Dramatic spotlights', 'Minimalist props']
      }
    ],
    defaultTimeOfDay: 'midnight',
    intimacyDynamic: 'explicit',
    optimizedFor: ['flux']
  },

  {
    id: 'private-boudoir-enchantress',
    name: 'Private Boudoir Enchantress',
    category: 'Intimate Roleplay & Bedroom Specialist',
    description: 'Private boudoir photography expert, intimate roleplay specialist, bedroom seduction master',
    physicalTraits: {
      height: '5\'7"',
      figure: 'Curvaceous with soft sensual proportions',
      curves: {
        bust: '36C',
        waist: '26"',
        hips: '37"',
        emphasis: 'balanced'
      },
      skinTone: 'Soft luminous with intimate glow',
      features: 'Romantic soft features, inviting eyes, sensual lips',
      fitness: 'curvy-fit'
    },
    personality: 'Intimate enchantress with bedroom roleplay expertise and private seduction',
    expertise: ['Boudoir photography', 'Intimate roleplay', 'Bedroom seduction', 'Private encounters'],
    wardrobeCollection: privateBoudoirWardrobe,
    personalPhotographer: {
      name: 'Pierre Intime',
      style: 'Intimate boudoir with romantic seductive atmosphere',
      specialty: 'Private bedroom sessions with roleplay and intimate seduction',
      intimacyApproach: 'Maximum intimate connection with romantic erotic focus',
      lightingSignature: 'Soft warm lighting creating intimate romantic atmosphere',
      compositionStyle: 'Close intimate framing with romantic bedroom composition',
      cameraPreference: '85mm f/1.4 for intimate portraits, 50mm f/1.2 for environmental intimacy',
      fluxSettings: {
        safetyTolerance: 5,
        rawMode: true,
        guidanceScale: 7.5
      },
      imagenSettings: {
        safetyFilter: 'block_few',
        personGeneration: 'allow_adult'
      }
    },
    privateEnvironments: [
      {
        id: 'private-boudoir',
        name: 'Private Boudoir Suite',
        type: 'bedroom',
        description: 'Intimate bedroom with luxury linens and romantic lighting for private sessions',
        lightingProfile: 'Soft warm bedside lighting with romantic shadows',
        timeOfDay: ['evening', 'midnight'],
        atmosphere: 'Private intimate with roleplay seduction',
        privacyLevel: 10,
        luxuryLevel: 9,
        materialPalette: ['Silk and satin linens', 'Soft textiles', 'Romantic candlelight']
      }
    ],
    defaultTimeOfDay: 'midnight',
    intimacyDynamic: 'intimate',
    optimizedFor: ['flux', 'imagen']
  },

  {
    id: 'luxury-lounge-goddess',
    name: 'Luxury Lounge Goddess',
    category: 'Penthouse Seduction & Sophisticated Curves',
    description: 'Penthouse luxury specialist, sophisticated curve emphasis, lounge seduction expert',
    physicalTraits: {
      height: '5\'9"',
      figure: 'Sophisticated hourglass with luxury presence',
      curves: {
        bust: '36D',
        waist: '27"',
        hips: '39"',
        emphasis: 'balanced'
      },
      skinTone: 'Warm golden with luxurious radiance',
      features: 'Elegant sophisticated features, confident gaze, luxury presence',
      fitness: 'toned'
    },
    personality: 'Sophisticated goddess with penthouse elegance and curve-focused seduction',
    expertise: ['Penthouse photography', 'Luxury lounge seduction', 'Sophisticated intimacy', 'Evening elegance'],
    wardrobeCollection: luxuryLoungeWardrobe,
    personalPhotographer: {
      name: 'Sebastian Luxe',
      style: 'Luxury sophistication with penthouse seduction and curve emphasis',
      specialty: 'High-end lounge photography with sophisticated intimate focus',
      intimacyApproach: 'Sophisticated seduction with luxury curve emphasis',
      lightingSignature: 'Soft luxury lighting with warm highlights on curves',
      compositionStyle: 'Elegant environmental compositions showcasing luxury and curves',
      cameraPreference: '50mm f/1.2 for environmental luxury, 85mm f/1.8 for intimate details',
      fluxSettings: {
        safetyTolerance: 4,
        rawMode: true,
        guidanceScale: 7.0
      },
      imagenSettings: {
        safetyFilter: 'block_few',
        personGeneration: 'allow_adult'
      }
    },
    privateEnvironments: [
      {
        id: 'penthouse-lounge',
        name: 'Penthouse Lounge',
        type: 'lounge',
        description: 'Luxury penthouse lounge with city views and sophisticated atmosphere',
        lightingProfile: 'Warm ambient luxury lighting with city glow',
        timeOfDay: ['evening', 'midnight'],
        atmosphere: 'Sophisticated seduction with penthouse elegance',
        privacyLevel: 9,
        luxuryLevel: 10,
        materialPalette: ['Leather furniture', 'Marble surfaces', 'Floor-to-ceiling windows']
      }
    ],
    defaultTimeOfDay: 'evening',
    intimacyDynamic: 'seductive',
    optimizedFor: ['flux', 'imagen']
  },

  {
    id: 'spa-tub-temptress',
    name: 'Spa & Tub Temptress',
    category: 'Water Photography & Wet Elegance',
    description: 'Water photography specialist, spa and tub seduction, wet aesthetic expert',
    physicalTraits: {
      height: '5\'8"',
      figure: 'Curvaceous with water photography ideal proportions',
      curves: {
        bust: '36C',
        waist: '26"',
        hips: '38"',
        emphasis: 'balanced'
      },
      skinTone: 'Luminous with water-kissed glow',
      features: 'Sensual features perfect for wet photography, alluring eyes',
      fitness: 'curvy-fit'
    },
    personality: 'Water temptress with spa seduction and wet photography expertise',
    expertise: ['Water photography', 'Spa and tub sessions', 'Wet fabric aesthetics', 'Bath seduction'],
    wardrobeCollection: spaTubWardrobe,
    personalPhotographer: {
      name: 'Aqua Sensuelle',
      style: 'Water photography with wet elegance and spa seduction',
      specialty: 'Tub and spa photography with wet fabric and water aesthetics',
      intimacyApproach: 'Intimate water photography with wet seductive focus',
      lightingSignature: 'Soft diffused lighting with water reflections and steam atmosphere',
      compositionStyle: 'Close intimate water compositions emphasizing wet curves',
      cameraPreference: '85mm f/1.8 for wet portraits, macro for water detail',
      fluxSettings: {
        safetyTolerance: 5,
        rawMode: true,
        guidanceScale: 7.5
      },
      imagenSettings: {
        safetyFilter: 'block_few',
        personGeneration: 'allow_adult'
      }
    },
    privateEnvironments: [
      {
        id: 'luxury-spa',
        name: 'Private Luxury Spa',
        type: 'spa',
        description: 'High-end private spa with soaking tub and steam for water photography',
        lightingProfile: 'Soft diffused spa lighting with water reflections',
        timeOfDay: ['evening', 'midnight'],
        atmosphere: 'Intimate spa seduction with wet temptress aesthetic',
        privacyLevel: 10,
        luxuryLevel: 9,
        materialPalette: ['Marble surfaces', 'Water features', 'Soft towels']
      }
    ],
    defaultTimeOfDay: 'midnight',
    intimacyDynamic: 'intimate',
    optimizedFor: ['flux', 'imagen']
  },

  {
    id: 'rooftop-midnight-muse',
    name: 'Rooftop Midnight Muse',
    category: 'Urban Night Seduction & Cityscape',
    description: 'Urban rooftop specialist, midnight city photography, night seduction expert',
    physicalTraits: {
      height: '5\'9"',
      figure: 'Statuesque with urban sophistication',
      curves: {
        bust: '36C',
        waist: '27"',
        hips: '38"',
        emphasis: 'balanced'
      },
      skinTone: 'Radiant with urban night glow',
      features: 'Striking features perfect for night photography, mysterious allure',
      fitness: 'toned'
    },
    personality: 'Urban muse with midnight confidence and rooftop seduction expertise',
    expertise: ['Rooftop photography', 'Urban night sessions', 'Cityscape seduction', 'Midnight outdoor'],
    wardrobeCollection: rooftopMidnightWardrobe,
    personalPhotographer: {
      name: 'Urban Noir',
      style: 'Urban night photography with city seduction and midnight atmosphere',
      specialty: 'Rooftop midnight sessions with cityscape and urban elegance',
      intimacyApproach: 'Sophisticated urban seduction with night mystery',
      lightingSignature: 'City lights and ambient urban glow creating midnight atmosphere',
      compositionStyle: 'Environmental urban compositions with cityscape backdrop',
      cameraPreference: '35mm f/1.4 for environmental night, 85mm f/1.8 for intimate urban',
      fluxSettings: {
        safetyTolerance: 4,
        rawMode: true,
        guidanceScale: 7.0
      },
      imagenSettings: {
        safetyFilter: 'block_few',
        personGeneration: 'allow_adult'
      }
    },
    privateEnvironments: [
      {
        id: 'rooftop-terrace',
        name: 'Private Rooftop Terrace',
        type: 'rooftop',
        description: 'Luxury rooftop with city views for urban midnight photography',
        lightingProfile: 'City ambient lighting with dramatic urban night atmosphere',
        timeOfDay: ['midnight', 'late-night'],
        atmosphere: 'Urban night seduction with cityscape mystery',
        privacyLevel: 8,
        luxuryLevel: 9,
        materialPalette: ['Modern outdoor furniture', 'Glass railings', 'Urban skyline']
      }
    ],
    defaultTimeOfDay: 'midnight',
    intimacyDynamic: 'seductive',
    optimizedFor: ['flux', 'imagen']
  },

  {
    id: 'hotel-suite-vixen',
    name: 'Hotel Suite Vixen',
    category: 'Travel Luxury & Private Encounters',
    description: 'Hotel suite photography specialist, travel seduction, private encounter expert',
    physicalTraits: {
      height: '5\'8"',
      figure: 'Seductive traveler with alluring curves',
      curves: {
        bust: '36D',
        waist: '26"',
        hips: '38"',
        emphasis: 'balanced'
      },
      skinTone: 'Warm with travel-luxe radiance',
      features: 'Alluring sophisticated features, travel-ready elegance',
      fitness: 'curvy-fit'
    },
    personality: 'Sophisticated vixen with hotel seduction and travel encounter expertise',
    expertise: ['Hotel photography', 'Travel seduction', 'Suite intimacy', 'Private encounters'],
    wardrobeCollection: hotelSuiteWardrobe,
    personalPhotographer: {
      name: 'Voyageur Intime',
      style: 'Hotel luxury photography with travel seduction and private encounters',
      specialty: 'Suite intimacy and hotel encounter photography',
      intimacyApproach: 'Private hotel seduction with travel elegance',
      lightingSignature: 'Soft hotel lighting with intimate travel atmosphere',
      compositionStyle: 'Hotel environmental compositions with intimate encounter focus',
      cameraPreference: '50mm f/1.2 for hotel environments, 85mm f/1.4 for intimate portraits',
      fluxSettings: {
        safetyTolerance: 4,
        rawMode: true,
        guidanceScale: 7.0
      },
      imagenSettings: {
        safetyFilter: 'block_few',
        personGeneration: 'allow_adult'
      }
    },
    privateEnvironments: [
      {
        id: 'hotel-suite',
        name: 'Luxury Hotel Suite',
        type: 'hotel',
        description: 'Five-star hotel suite with luxury amenities for private photography',
        lightingProfile: 'Warm hotel lighting with intimate travel atmosphere',
        timeOfDay: ['evening', 'midnight'],
        atmosphere: 'Private hotel seduction with travel encounter elegance',
        privacyLevel: 10,
        luxuryLevel: 9,
        materialPalette: ['Luxury linens', 'Modern furniture', 'Hotel amenities']
      }
    ],
    defaultTimeOfDay: 'midnight',
    intimacyDynamic: 'seductive',
    optimizedFor: ['flux', 'imagen']
  },

  {
    id: 'underground-club-siren',
    name: 'Underground Club Siren',
    category: 'Late Night Party & Neon Vibes',
    description: 'Underground club specialist, late night party photography, neon seduction expert',
    physicalTraits: {
      height: '5\'9"',
      figure: 'Bold party presence with striking curves',
      curves: {
        bust: '36C',
        waist: '26"',
        hips: '39"',
        emphasis: 'balanced'
      },
      skinTone: 'Radiant under UV and neon lights',
      features: 'Bold striking features perfect for club photography, intense gaze',
      fitness: 'toned'
    },
    personality: 'Bold club siren with late night energy and underground seduction',
    expertise: ['Club photography', 'Neon and UV aesthetics', 'Late night sessions', 'Party seduction'],
    wardrobeCollection: undergroundClubWardrobe,
    personalPhotographer: {
      name: 'Neon Provocateur',
      style: 'Underground club photography with neon vibes and late night seduction',
      specialty: 'Club and party photography with UV and neon lighting',
      intimacyApproach: 'Bold late night seduction with underground energy',
      lightingSignature: 'Neon and UV lighting creating vibrant late night atmosphere',
      compositionStyle: 'Dynamic club compositions with neon accents and party energy',
      cameraPreference: '35mm f/1.4 for club environments, fast shutter for party dynamics',
      fluxSettings: {
        safetyTolerance: 5,
        rawMode: true,
        guidanceScale: 7.5
      },
      imagenSettings: {
        safetyFilter: 'block_few',
        personGeneration: 'allow_adult'
      }
    },
    privateEnvironments: [
      {
        id: 'vip-club',
        name: 'VIP Underground Club',
        type: 'club',
        description: 'Private VIP section of underground club with neon and UV lighting',
        lightingProfile: 'Vibrant neon and UV lighting with late night club atmosphere',
        timeOfDay: ['midnight', 'late-night'],
        atmosphere: 'Bold late night club seduction with underground energy',
        privacyLevel: 7,
        luxuryLevel: 8,
        materialPalette: ['Neon lights', 'Dark surfaces', 'UV reactive elements']
      }
    ],
    defaultTimeOfDay: 'late-night',
    intimacyDynamic: 'provocative',
    optimizedFor: ['flux', 'imagen']
  },

  {
    id: 'art-studio-provocateur',
    name: 'Art Studio Provocateur',
    category: 'Creative Midnight & Artistic Nude',
    description: 'Art studio midnight sessions, creative nude photography, artistic provocateur',
    physicalTraits: {
      height: '5\'10"',
      figure: 'Artistic muse with sculptural curves',
      curves: {
        bust: '36D',
        waist: '27"',
        hips: '39"',
        emphasis: 'balanced'
      },
      skinTone: 'Flawless artistic with studio-perfect tone',
      features: 'Artistic striking features, creative intensity, provocateur presence',
      fitness: 'toned'
    },
    personality: 'Creative provocateur with artistic nude expertise and midnight studio mastery',
    expertise: ['Art nude photography', 'Midnight creative sessions', 'Studio provocateur', 'Artistic bold expression'],
    wardrobeCollection: artStudioWardrobe,
    personalPhotographer: {
      name: 'Atelier Midnight',
      style: 'Artistic nude photography with creative midnight sessions and bold expression',
      specialty: 'Studio art nude with provocateur aesthetic and creative intimacy',
      intimacyApproach: 'Artistic explicit with creative midnight focus',
      lightingSignature: 'Dramatic studio lighting with artistic shadows for nude photography',
      compositionStyle: 'Creative artistic compositions emphasizing form and provocateur expression',
      cameraPreference: '85mm f/1.4 for nude art, 50mm f/1.2 for creative compositions',
      fluxSettings: {
        safetyTolerance: 6,
        rawMode: true,
        guidanceScale: 8.0
      },
      imagenSettings: {
        safetyFilter: 'block_few',
        personGeneration: 'allow_adult'
      }
    },
    privateEnvironments: [
      {
        id: 'midnight-studio',
        name: 'Midnight Art Studio',
        type: 'studio',
        description: 'Private art studio for midnight creative sessions and nude photography',
        lightingProfile: 'Dramatic studio lighting for artistic nude and creative midnight work',
        timeOfDay: ['midnight', 'late-night'],
        atmosphere: 'Creative artistic with midnight provocateur energy',
        privacyLevel: 10,
        luxuryLevel: 8,
        materialPalette: ['Art supplies', 'Dramatic backdrops', 'Studio lighting equipment']
      }
    ],
    defaultTimeOfDay: 'midnight',
    intimacyDynamic: 'erotic',
    optimizedFor: ['flux']
  }
];

export function getPlatinumVariantById(id: string): PlatinumModelVariant | undefined {
  return PLATINUM_VARIANTS.find(v => v.id === id);
}

export function getAllPlatinumVariants(): PlatinumModelVariant[] {
  return PLATINUM_VARIANTS;
}
