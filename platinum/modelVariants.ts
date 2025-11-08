/**
 * PLATINUM COLLECTION - 10 Model Variants
 * Each variant with complete ecosystem: wardrobe, photographer, environments
 * Optimized for evening/midnight seductive photography
 */

import type { PlatinumModelVariant, PlatinumWardrobeItem, PhotographerProfile, PrivateEnvironment } from './types';

// ============================================================================
// WARDROBE COLLECTIONS (5-7 pieces per variant)
// ============================================================================

const midnightSeductressWardrobe: PlatinumWardrobeItem[] = [
  {
    id: 'ms-noir-silk',
    name: 'Noir Silk Nightgown',
    description: 'Floor-length black silk nightgown with deep plunge neckline and thigh-high slit, flowing elegantly',
    coverage: 'moderate',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'ms-lace-robe',
    name: 'Midnight Lace Robe',
    description: 'Sheer black lace robe with satin belt, revealing geometric lace patterns beneath',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'ms-velvet-bodysuit',
    name: 'Velvet Seduction Bodysuit',
    description: 'Deep burgundy velvet bodysuit with strategic cutouts and plunging back',
    coverage: 'moderate',
    suitableFor: ['evening', 'dusk'],
    intimacyLevel: 7,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'ms-satin-set',
    name: 'Satin Bralette & Shorts Set',
    description: 'Champagne satin bralette with matching high-waisted shorts, elegant minimal coverage',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'ms-mesh-gown',
    name: 'Sheer Mesh Evening Gown',
    description: 'Black mesh gown with strategic opacity patterns, architectural foundation visible',
    coverage: 'maximum-artistic',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: false
  }
];

const fitnessBombshellWardrobe: PlatinumWardrobeItem[] = [
  {
    id: 'fb-sports-luxe',
    name: 'Luxury Sports Bra & Leggings',
    description: 'High-end athletic wear with strategic mesh panels, emphasizing curves and fitness, sculpted lower body focus',
    coverage: 'moderate',
    suitableFor: ['golden-hour', 'dusk'],
    intimacyLevel: 6,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'fb-yoga-glam',
    name: 'Glamour Yoga Set',
    description: 'Form-fitting yoga attire with high-waisted sculpting leggings, emphasizing athletic curves and toned lower body',
    coverage: 'moderate',
    suitableFor: ['evening', 'dusk'],
    intimacyLevel: 7,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'fb-athletic-minimal',
    name: 'Athletic Minimal Set',
    description: 'Minimal athletic coverage with high-performance fabrics, showing off fitness physique and curved lower body',
    coverage: 'revealing',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'fb-gym-couture',
    name: 'Gym Couture Ensemble',
    description: 'Designer athletic pieces with luxe details, sculpting curves with high-fashion athletic aesthetic',
    coverage: 'moderate',
    suitableFor: ['golden-hour', 'evening'],
    intimacyLevel: 7,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'fb-sweat-seduction',
    name: 'Post-Workout Seduction',
    description: 'Artfully disheveled athletic minimal pieces, emphasizing fitness glow and athletic curves',
    coverage: 'revealing',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  }
];

const graphicEditorialWardrobe: PlatinumWardrobeItem[] = [
  {
    id: 'ge-artistic-minimal',
    name: 'Artistic Minimal Draping',
    description: 'Strategic fabric draping emphasizing sculptural curves, editorial nude art aesthetic with geometric shadows',
    coverage: 'maximum-artistic',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 10,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'ge-body-paint',
    name: 'Editorial Body Art',
    description: 'Artistic body painting with minimal fabric accents, emphasizing maximum curves and erotic movie styling',
    coverage: 'maximum-artistic',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 10,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'ge-sculptural-leather',
    name: 'Sculptural Leather Pieces',
    description: 'Avant-garde leather harness and minimal pieces, graphic editorial with bold curve emphasis',
    coverage: 'maximum-artistic',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'ge-mesh-architecture',
    name: 'Architectural Mesh Design',
    description: 'Geometric mesh bodysuit with strategic opacity, showcasing curves with editorial nude art sophistication',
    coverage: 'maximum-artistic',
    suitableFor: ['midnight'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'ge-chain-couture',
    name: 'Chain Couture Ensemble',
    description: 'High-fashion chain mail designs with minimal coverage, erotic movie aesthetic with maximum curves',
    coverage: 'maximum-artistic',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 10,
    fluxOptimized: true,
    imagenOptimized: false
  }
];

const privateBoudoirWardrobe: PlatinumWardrobeItem[] = [
  {
    id: 'pb-lace-luxury',
    name: 'Luxury Lace Set',
    description: 'Intricate black lace bralette and panty set with garter details, intimate bedroom sophistication',
    coverage: 'revealing',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'pb-silk-kimono',
    name: 'Silk Kimono Robe',
    description: 'Flowing silk kimono partially open, revealing intimate foundation pieces beneath',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'pb-corselet',
    name: 'Vintage Corselet',
    description: 'Classic boudoir corselet with stockings and suspenders, intimate roleplay elegance',
    coverage: 'moderate',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'pb-sheer-teddy',
    name: 'Sheer Lace Teddy',
    description: 'One-piece sheer lace teddy with high-cut design, private intimate seduction',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'pb-satin-chemise',
    name: 'Satin Chemise Slip',
    description: 'Short satin chemise with delicate lace trim, bedroom intimacy and seductive roleplay',
    coverage: 'revealing',
    suitableFor: ['midnight'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  }
];

const luxuryLoungeWardrobe: PlatinumWardrobeItem[] = [
  {
    id: 'll-designer-loungewear',
    name: 'Designer Loungewear Set',
    description: 'Luxury silk loungewear with strategic reveals, penthouse sophistication',
    coverage: 'moderate',
    suitableFor: ['evening', 'dusk'],
    intimacyLevel: 7,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'll-cashmere-set',
    name: 'Cashmere Lounge Set',
    description: 'Soft cashmere bralette and lounge pants, intimate luxury with curve emphasis',
    coverage: 'revealing',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'll-velvet-robe',
    name: 'Velvet Lounge Robe',
    description: 'Deep emerald velvet robe partially open, revealing luxury foundation beneath',
    coverage: 'moderate',
    suitableFor: ['midnight'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'll-silk-pajamas',
    name: 'Silk Pajama Set',
    description: 'Luxury silk pajama top and shorts, penthouse seduction with sophisticated curves',
    coverage: 'moderate',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 7,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'll-minimal-luxury',
    name: 'Minimal Luxury Set',
    description: 'Designer minimal pieces in premium fabrics, lounge goddess sophistication',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  }
];

const spaTubWardrobe: PlatinumWardrobeItem[] = [
  {
    id: 'st-wet-silk',
    name: 'Wet Silk Camisole',
    description: 'White silk camisole clinging to curves from water, spa temptress aesthetic',
    coverage: 'revealing',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'st-sheer-wrap',
    name: 'Sheer Spa Wrap',
    description: 'Translucent fabric wrap barely covering, wet and revealing from bath',
    coverage: 'maximum-artistic',
    suitableFor: ['midnight'],
    intimacyLevel: 10,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'st-minimal-bikini',
    name: 'Luxury Spa Bikini',
    description: 'Minimal designer bikini with water droplets, intimate spa photography',
    coverage: 'revealing',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'st-towel-art',
    name: 'Artistic Towel Draping',
    description: 'Strategic towel placement with artistic reveals, spa seduction aesthetic',
    coverage: 'maximum-artistic',
    suitableFor: ['midnight'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'st-wet-lace',
    name: 'Wet Lace Bodysuit',
    description: 'Lace bodysuit soaked and clinging, tub temptress with water photography',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  }
];

const rooftopMidnightWardrobe: PlatinumWardrobeItem[] = [
  {
    id: 'rm-urban-glam',
    name: 'Urban Glamour Dress',
    description: 'Sleek evening dress with thigh-high slit and backless design, rooftop sophistication',
    coverage: 'moderate',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 7,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'rm-mesh-overlay',
    name: 'Mesh Overlay Gown',
    description: 'Sheer mesh evening gown over minimal foundation, urban night seduction',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'rm-leather-chic',
    name: 'Leather Chic Ensemble',
    description: 'Designer leather pieces with strategic reveals, rooftop midnight muse aesthetic',
    coverage: 'moderate',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'rm-sequin-mini',
    name: 'Sequin Mini Dress',
    description: 'Ultra-short sequin dress reflecting city lights, midnight urban seduction',
    coverage: 'revealing',
    suitableFor: ['midnight'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'rm-coat-minimal',
    name: 'Coat Over Minimal',
    description: 'Long coat partially open revealing minimal pieces beneath, urban night mystery',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  }
];

const hotelSuiteWardrobe: PlatinumWardrobeItem[] = [
  {
    id: 'hs-hotel-robe',
    name: 'Luxury Hotel Robe',
    description: 'Plush hotel robe partially open, revealing travel seduction beneath',
    coverage: 'moderate',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 7,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'hs-travel-lingerie',
    name: 'Travel Luxury Lingerie',
    description: 'Designer lingerie set perfect for hotel encounters, private vixen elegance',
    coverage: 'revealing',
    suitableFor: ['midnight'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'hs-silk-slip',
    name: 'Silk Slip Dress',
    description: 'Flowing silk slip dress with lace details, hotel suite seduction',
    coverage: 'moderate',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 7,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'hs-satin-shorts',
    name: 'Satin Sleep Set',
    description: 'Satin camisole and shorts set, intimate hotel encounter aesthetic',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'hs-mesh-bodysuit',
    name: 'Hotel Suite Bodysuit',
    description: 'Sheer mesh bodysuit with strategic details, luxury travel intimacy',
    coverage: 'revealing',
    suitableFor: ['midnight'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  }
];

const undergroundClubWardrobe: PlatinumWardrobeItem[] = [
  {
    id: 'uc-neon-bodysuit',
    name: 'Neon Mesh Bodysuit',
    description: 'Glowing mesh bodysuit under UV lights, underground club siren aesthetic',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'uc-latex-mini',
    name: 'Latex Club Mini',
    description: 'High-shine latex mini dress, late night party seduction',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'uc-chain-harness',
    name: 'Chain Harness Top',
    description: 'Metal chain harness design with minimal coverage, club provocateur style',
    coverage: 'maximum-artistic',
    suitableFor: ['late-night'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'uc-mesh-cutout',
    name: 'Mesh Cutout Dress',
    description: 'Black mesh with strategic cutouts and neon accents, underground seduction',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: true
  },
  {
    id: 'uc-vinyl-set',
    name: 'Vinyl Club Set',
    description: 'High-shine vinyl bralette and mini skirt, late night siren aesthetic',
    coverage: 'revealing',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 8,
    fluxOptimized: true,
    imagenOptimized: true
  }
];

const artStudioWardrobe: PlatinumWardrobeItem[] = [
  {
    id: 'as-paint-splatter',
    name: 'Paint-Splattered Minimal',
    description: 'Artistic minimal pieces with paint accents, creative midnight session aesthetic',
    coverage: 'maximum-artistic',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 10,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'as-draped-fabric',
    name: 'Artistic Fabric Draping',
    description: 'Strategic fabric draping for nude art photography, studio provocateur style',
    coverage: 'maximum-artistic',
    suitableFor: ['evening', 'midnight'],
    intimacyLevel: 10,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'as-mesh-bodysuit',
    name: 'Studio Mesh Design',
    description: 'Geometric mesh bodysuit for artistic nude sessions, creative midnight photography',
    coverage: 'maximum-artistic',
    suitableFor: ['midnight'],
    intimacyLevel: 9,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'as-minimal-art',
    name: 'Minimal Art Pieces',
    description: 'Designer minimal coverage for fine art nude photography, studio midnight sessions',
    coverage: 'maximum-artistic',
    suitableFor: ['midnight', 'late-night'],
    intimacyLevel: 10,
    fluxOptimized: true,
    imagenOptimized: false
  },
  {
    id: 'as-sheer-overlay',
    name: 'Sheer Overlay Design',
    description: 'Translucent overlay for artistic nude compositions, provocateur aesthetic',
    coverage: 'maximum-artistic',
    suitableFor: ['midnight'],
    intimacyLevel: 10,
    fluxOptimized: true,
    imagenOptimized: false
  }
];

// ============================================================================
// EXPORTS - All Wardrobe Collections
// ============================================================================

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
