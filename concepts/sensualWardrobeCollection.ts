/**
 * SENSUAL WARDROBE COLLECTION
 * Creative intimate wardrobe options optimized for AI generation success
 * Organized by coverage level and aesthetic category
 */

export interface WardrobeOption {
  name: string;
  category: "Minimal Fine Art" | "Luxury Intimate" | "Athletic Performance" | "Cultural Traditional" | "Architectural Fashion" | "Environmental Natural";
  coverageLevel: "Maximum Artistic" | "High Artistic" | "Moderate Elegant" | "Substantial Luxury";
  description: string;
  promptPattern: string;
  bestContexts: string[];
  lightingRecommendation: string;
  poseGuidance: string;
}

export const sensualWardrobeCollection: WardrobeOption[] = [
  // ============================================================================
  // MINIMAL FINE ART CATEGORY - Highest artistic intimacy
  // ============================================================================
  {
    name: "Classical Fine Art Minimal",
    category: "Minimal Fine Art",
    coverageLevel: "Maximum Artistic",
    description: "Pure fine art nude study aesthetic with single minimal piece. Gallery-quality artistic photography.",
    promptPattern: "Fine art minimal aesthetic: a single high-waisted minimal mesh brief in [color: nude/black/white] with geometric cutout details. The high-cut leg emphasizes hip width and creates elegant vertical lines. Delicate barely-there straps or completely strapless. Focus on form over coverage with clear artistic study intent.",
    bestContexts: ["Studio photography", "Gallery art", "Classical pose studies", "Chiaroscuro lighting", "Sculptural form emphasis"],
    lightingRecommendation: "Dramatic single-source hard lighting creating sculptural shadows. High contrast black and white or painterly color. Chiaroscuro technique.",
    poseGuidance: "Classical art poses: contrapposto stance, seated contemplation, arms overhead stretch, reclining classical form. Emphasize elegant lines and natural curves."
  },

  {
    name: "Body Chain Goddess",
    category: "Minimal Fine Art",
    coverageLevel: "Maximum Artistic",
    description: "Decorative body chains with minimal coverage. Jewelry as artistic element emphasizing form.",
    promptPattern: "Goddess minimal aesthetic: delicate gold or silver body chains draped across shoulders and around waist, accenting natural curves. Paired with minimal high-waisted mesh brief in complementary tone. The chains create geometric patterns emphasizing hourglass silhouette while maintaining fine art aesthetic.",
    bestContexts: ["Golden hour natural light", "Goddess themes", "Ethereal atmosphere", "Natural environments", "Cultural goddess imagery"],
    lightingRecommendation: "Soft natural golden hour light creating subsurface scattering. Body chains catching light creating sparkle highlights.",
    poseGuidance: "Goddess poses: arms raised in worship gesture, serene standing meditation, classical Greek statue-inspired poses. Emphasize ethereal graceful movement."
  },

  {
    name: "Artistic Fabric Draping",
    category: "Minimal Fine Art",
    coverageLevel: "Maximum Artistic",
    description: "Single piece of flowing fabric artistically draped. Classical art tradition with dynamic fabric movement.",
    promptPattern: "Fine art draped aesthetic: a single long piece of [color: burgundy/emerald/ivory] flowing silk fabric artistically draped around hips and between legs, leaving torso bare. The fabric creates sculptural shapes with dynamic flow and catches light beautifully. Classical art nude tradition with fabric as compositional element.",
    bestContexts: ["Classical art references", "Dance photography", "Flowing movement", "Painterly compositions", "Renaissance-inspired"],
    lightingRecommendation: "Soft diffused light creating painterly quality. Fabric catching highlights while shadows create depth.",
    poseGuidance: "Dynamic flowing poses with fabric in motion. One hand holding/adjusting fabric creates authentic interaction. Classical reclining poses on stone or minimal furniture."
  },

  // ============================================================================
  // LUXURY INTIMATE CATEGORY - Designer high-end intimate fashion
  // ============================================================================
  {
    name: "Couture Lace Bodysuit",
    category: "Luxury Intimate",
    coverageLevel: "High Artistic",
    description: "Designer lace bodysuit with intricate patterns and architectural seaming. High-fashion intimate editorial.",
    promptPattern: "Luxury intimate couture: an intricate black lace bodysuit with floral or geometric patterns, featuring architectural seaming that sculpts the form. High-cut legs emphasizing hip curves, plunging neckline, strategic sheer panels creating visual interest. Crafted with couture-level attention to detail showing visible lace texture and structural boning.",
    bestContexts: ["Fashion editorial", "Luxury boudoir", "High-end portraiture", "Magazine quality", "Designer showcase"],
    lightingRecommendation: "Professional beauty lighting - soft even illumination showing lace detail. Subtle shadows for dimension without harsh contrast.",
    poseGuidance: "Confident fashion model poses: one hip forward, hands on hips power stance, seated editorial elegance. Direct confident gaze."
  },

  {
    name: "Silk and Lace Teddy",
    category: "Luxury Intimate",
    coverageLevel: "High Artistic",
    description: "Vintage-inspired silk teddy with lace trim. Classic Hollywood glamour aesthetic.",
    promptPattern: "Luxury vintage aesthetic: a [color: burgundy/champagne/black] silk teddy with delicate lace trim along neckline and leg openings. Features deep V neckline, high-cut legs, and romantic lace appliqués. The silk has natural sheen catching light while lace provides textural contrast. Classic Hollywood glamour styling.",
    bestContexts: ["Hollywood glamour", "Vintage boudoir", "Film noir", "Classic portraiture", "Timeless elegance"],
    lightingRecommendation: "Glamour lighting with soft fill and warm accents. Creating flattering skin tones and silk sheen without harsh highlights.",
    poseGuidance: "Classic Hollywood poses: reclining on chaise, seated with legs crossed, standing with hand on hip. Sultry expressions and vintage elegance."
  },

  {
    name: "Designer Harness Set",
    category: "Luxury Intimate",
    coverageLevel: "High Artistic",
    description: "Architectural leather harness with geometric design. Contemporary high-fashion edge.",
    promptPattern: "Contemporary luxury fashion: a geometric black leather harness system with gold/silver hardware, featuring architectural straps creating graphic patterns across torso. Paired with high-waisted structured brief. The design emphasizes body architecture while maintaining sophisticated fashion aesthetic. Visible stitching and hardware details.",
    bestContexts: ["High fashion editorial", "Contemporary art", "Architectural photography", "Urban chic", "Power aesthetics"],
    lightingRecommendation: "Clean hard lighting emphasizing architectural lines and leather texture. High contrast showing hardware shine and strap definition.",
    poseGuidance: "Strong powerful poses: wide stance, arms at sides or crossed, direct confrontational gaze. Emphasize confidence and structural design."
  },

  // ============================================================================
  // ATHLETIC PERFORMANCE CATEGORY - Movement and athletic aesthetics
  // ============================================================================
  {
    name: "Dance Performance Bodysuit",
    category: "Athletic Performance",
    coverageLevel: "Moderate Elegant",
    description: "Professional dance bodysuit with mesh panels. Athletic grace meets artistic expression.",
    promptPattern: "Athletic dance aesthetic: a fitted black dance bodysuit with strategic mesh panel inserts along sides and back. High-cut legs for maximum movement range, with geometric seaming following muscle lines. The mesh creates transparency effects while maintaining performance functionality. Professional dancewear with artistic design elements.",
    bestContexts: ["Dance photography", "Athletic movement", "Studio dance", "Performance art", "Kinetic energy"],
    lightingRecommendation: "Clean bright lighting freezing movement with clarity. Rim lighting for body definition and dynamic energy.",
    poseGuidance: "Dynamic dance poses: extended legs, arched backs, reaching arms, balanced en pointe. Captured mid-movement showing athletic grace and extension."
  },

  {
    name: "Athletic Mesh Set",
    category: "Athletic Performance",
    coverageLevel: "Moderate Elegant",
    description: "Modern athletic mesh crop and brief set. Sports luxury meets intimate fashion.",
    promptPattern: "Athletic luxury aesthetic: a [color: sage/navy/burgundy] mesh athletic crop top with supportive structure and matching high-waisted mesh brief. The mesh provides breathability while creating subtle transparency effects. Clean modern lines with athletic functionality meeting contemporary intimate fashion design.",
    bestContexts: ["Fitness photography", "Athletic portraiture", "Modern active wear", "Sports luxury", "Contemporary wellness"],
    lightingRecommendation: "Bright even lighting showing mesh texture and athletic form. Clean professional athletic photography lighting.",
    poseGuidance: "Athletic stances: running pose, yoga positions, strength poses. Emphasize muscular definition and athletic capability."
  },

  // ============================================================================
  // CULTURAL TRADITIONAL CATEGORY - Authentic cultural bathing traditions
  // ============================================================================
  {
    name: "Turkish Hammam Wrap",
    category: "Cultural Traditional",
    coverageLevel: "Substantial Luxury",
    description: "Traditional Turkish peştemal with ethnic patterns. Authentic hammam bathing tradition.",
    promptPattern: "Traditional hammam aesthetic: a white cotton peştemal (traditional Turkish bath wrap) with [color: blue/red/green] decorative border and ethnic geometric patterns. Wrapped low around hips in traditional style, leaving torso bare as per authentic hammam custom. The cotton becomes slightly translucent when dampened with steam and traditional soaps.",
    bestContexts: ["Hammam bath scenes", "Cultural bathing rituals", "Traditional spa", "Ethnic authenticity", "Steam room settings"],
    lightingRecommendation: "Soft diffused light through steam and traditional architecture. Warm ambient glow from authentic hammam lighting.",
    poseGuidance: "Relaxed bathing ritual poses: seated on marble platform, water ritual gestures, traditional bathing positions. Emphasis on cultural respect and authentic tradition."
  },

  {
    name: "Japanese Onsen Towel",
    category: "Cultural Traditional",
    coverageLevel: "Substantial Luxury",
    description: "Traditional Japanese tenugui bath towel. Minimalist cultural bathing aesthetic.",
    promptPattern: "Traditional onsen aesthetic: a small white cotton tenugui (Japanese bath towel) held or minimally wrapped, following authentic onsen bathing tradition. The simple cotton fabric respects cultural minimalist aesthetic while maintaining modesty appropriate to traditional Japanese bathing culture.",
    bestContexts: ["Japanese onsen", "Zen minimalism", "Cultural bath traditions", "Natural hot springs", "Minimalist aesthetics"],
    lightingRecommendation: "Natural soft light reflecting zen minimalism. Clean simple lighting emphasizing natural beauty and cultural respect.",
    poseGuidance: "Serene contemplative poses reflecting Japanese aesthetic: seated in onsen, thoughtful expressions, respectful modesty, zen tranquility."
  },

  // ============================================================================
  // ARCHITECTURAL FASHION CATEGORY - Structured geometric designs
  // ============================================================================
  {
    name: "Geometric Cage Bodysuit",
    category: "Architectural Fashion",
    coverageLevel: "High Artistic",
    description: "Structured cage-design bodysuit with architectural framework. Contemporary fashion art.",
    promptPattern: "Architectural fashion aesthetic: a black structured bodysuit featuring geometric 'cage' design with interconnected straps creating graphic patterns. High-cut legs, architectural support structure, visible hardware and connection points. The design creates negative space effects while maintaining structural integrity. Contemporary high-fashion architectural intimate wear.",
    bestContexts: ["Contemporary fashion", "Architectural photography", "High-fashion editorial", "Geometric composition", "Modern art fashion"],
    lightingRecommendation: "Clean hard lighting emphasizing geometric structures and creating sharp shadows. High contrast showing every structural line.",
    poseGuidance: "Strong architectural poses: straight posture showing structure, symmetrical stances, geometric body lines echoing design. Fashion model confidence."
  },

  // ============================================================================
  // ENVIRONMENTAL NATURAL CATEGORY - Nature-integrated designs
  // ============================================================================
  {
    name: "Nature Vine Bodysuit",
    category: "Environmental Natural",
    coverageLevel: "High Artistic",
    description: "Hand-crafted vine and leaf pattern lace. Organic nature-inspired design.",
    promptPattern: "Nature-inspired aesthetic: a hand-crafted bodysuit in [color: forest green/brown/sage] featuring vine and leaf lace patterns mimicking natural flora. High-cut design with organic irregular edges rather than geometric precision. The patterns create natural camouflage effect in forest settings while emphasizing curves with nature-inspired cutouts.",
    bestContexts: ["Forest photography", "Natural environments", "Woodland fairy themes", "Organic aesthetics", "Nature connection"],
    lightingRecommendation: "Dappled natural forest light creating organic patterns. Golden hour warmth mixing with cool forest shadows.",
    poseGuidance: "Natural organic poses: interacting with trees, natural contrapposto, wild uninhibited movement. Connection with natural environment emphasized."
  },

  {
    name: "Water Nymph Mesh",
    category: "Environmental Natural",
    coverageLevel: "High Artistic",
    description: "Sheer water-appropriate mesh for aquatic environments. Transparent when wet.",
    promptPattern: "Water element aesthetic: a minimal sheer mesh [color: white/ivory/seafoam] athletic brief and crop set designed for water environments. When wet, the mesh becomes nearly transparent while maintaining structure. High-cut emphasizing hip curves, designed to complement rather than compete with water as primary element.",
    bestContexts: ["Water photography", "Stream/waterfall scenes", "Rain imagery", "Natural pools", "Aquatic goddess themes"],
    lightingRecommendation: "Natural light with water reflections. Backlight through water creating transparency effects and rim lighting through droplets.",
    poseGuidance: "Water interaction poses: standing in flowing water, rain acceptance with face up, swimming grace, water goddess power. Emphasize water as primary visual element."
  }
];

/**
 * Coverage level guidelines for different artistic contexts
 */
export const coverageLevelGuidance = {
  "Maximum Artistic": {
    description: "Minimal single piece - fine art nude study level",
    appropriateContexts: ["Fine art photography", "Gallery exhibitions", "Classical art studies", "Private collections"],
    promptingGuidelines: [
      "Always prefix with 'fine art' or 'classical artistic'",
      "Specify exact piece: 'single high-waisted minimal brief'",
      "Include artistic intent: 'emphasizing sculptural form'",
      "Reference art movements: chiaroscuro, classical nude tradition",
      "Use gallery/museum context to establish artistic purpose"
    ]
  },
  "High Artistic": {
    description: "Designer intimate pieces with artistic emphasis",
    appropriateContexts: ["Fashion editorial", "Luxury boudoir", "High-end portraiture", "Contemporary fashion"],
    promptingGuidelines: [
      "Specify designer/couture quality",
      "Describe structural details: seaming, hardware, lace patterns",
      "Use fashion terminology: bodysuit, teddy, harness system",
      "Reference photographer styles for aesthetic clarity",
      "Emphasize luxury materials and craftsmanship"
    ]
  },
  "Moderate Elegant": {
    description: "Athletic or performance wear with elegance",
    appropriateContexts: ["Athletic photography", "Dance performance", "Active lifestyle", "Modern wellness"],
    promptingGuidelines: [
      "Specify athletic functionality",
      "Describe performance features: mesh panels, movement range",
      "Use professional athletic context",
      "Emphasize physical capability and grace",
      "Reference athletic photography standards"
    ]
  },
  "Substantial Luxury": {
    description: "Cultural traditional or luxury cover with sophistication",
    appropriateContexts: ["Cultural traditions", "Spa luxury", "Traditional baths", "Resort settings"],
    promptingGuidelines: [
      "Specify cultural origin and tradition",
      "Describe authentic traditional usage",
      "Include environmental context: hammam, onsen, spa",
      "Emphasize cultural respect and authenticity",
      "Reference traditional practices accurately"
    ]
  }
};

/**
 * Helper function to select appropriate wardrobe for context
 */
export function selectWardrobeForContext(
  context: string,
  intimacyLevel: "Maximum" | "High" | "Moderate" | "Substantial"
): WardrobeOption[] {
  const levelMap = {
    "Maximum": "Maximum Artistic",
    "High": "High Artistic",
    "Moderate": "Moderate Elegant",
    "Substantial": "Substantial Luxury"
  };

  return sensualWardrobeCollection.filter(
    w => w.coverageLevel === levelMap[intimacyLevel] &&
         w.bestContexts.some(c => c.toLowerCase().includes(context.toLowerCase()))
  );
}
