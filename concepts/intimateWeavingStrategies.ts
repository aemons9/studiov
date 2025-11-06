/**
 * INTIMATE WEAVING STRATEGIES
 * Advanced prompting framework for minimizing AI generation failures
 * Focuses on efficient artistic linguistic patterns for intimate concepts
 */

export interface IntimateWeavingStrategy {
  name: string;
  description: string;
  subjectPromptPattern: string;
  wardrobePromptPattern: string;
  lightingEmphasis: string;
  compositionGuidance: string;
  avoidancePatterns: string[];
  successKeywords: string[];
}

export const intimateWeavingStrategies: IntimateWeavingStrategy[] = [
  {
    name: "Fine Art Minimalism",
    description: "Emphasizes artistic nude studies with minimal coverage, focusing on form, light, and shadow. High success rate with clear artistic intent.",
    subjectPromptPattern: "Focus on natural form and elegant proportions. Emphasize: authentic skin texture, natural curves, graceful posing. Use classical art terminology: contrapposto, chiaroscuro, sculptural form.",
    wardrobePromptPattern: "Minimal fine art aesthetic: [single high-waisted piece] OR [delicate straps/harness] OR [artistic fabric draping]. Specify: high-cut emphasizing hip width, minimal coverage showcasing form, artistic purpose clear.",
    lightingEmphasis: "Dramatic single-source lighting creating sculptural definition. Specify exact light direction, shadow quality, and contrast level. Use terms: hard/soft light, rim lighting, chiaroscuro, sculptural shadows.",
    compositionGuidance: "Classical fine art framing. Specify: full body with negative space, rule of thirds, vertical composition, gallery-quality aesthetic. Emphasize artistic study context.",
    avoidancePatterns: [
      "Avoid ambiguous coverage descriptions",
      "Never use vague terms like 'barely covered' or 'revealing'",
      "Don't mix fine art with fashion editorial terminology",
      "Avoid mentioning specific body parts without artistic context"
    ],
    successKeywords: [
      "fine art nude study",
      "sculptural form",
      "chiaroscuro lighting",
      "classical proportions",
      "artistic photography",
      "gallery aesthetic",
      "minimal aesthetic with high-cut design",
      "emphasizing natural curves"
    ]
  },

  {
    name: "Editorial Fashion Luxury",
    description: "High-fashion editorial with sophisticated intimate wear. Balances sensuality with luxury fashion aesthetic. Reliable generation pattern.",
    subjectPromptPattern: "Professional fashion model posing. Emphasize: confident expression, fashion-forward stance, editorial sophistication. Specify model's training and professionalism.",
    wardrobePromptPattern: "Luxury intimate fashion: [designer piece with brand aesthetic] + [specific fabric: silk/lace/mesh] + [structural details: architectural seaming, geometric patterns]. Specify coverage level: high-waisted emphasizing curves, balconette/longline styles, strategic cutouts.",
    lightingEmphasis: "Professional studio lighting or location-appropriate natural light. Specify: even beauty lighting, soft shadows, flattering skin tones. Reference specific photographers: Avedon, Penn, Leibovitz styles.",
    compositionGuidance: "Editorial magazine framing. Specify: medium to full shots, fashion-forward angles, negative space for text placement, high-end aesthetic.",
    avoidancePatterns: [
      "Avoid mixing boudoir and fashion editorial contexts",
      "Don't use casual or amateur terminology",
      "Never imply non-professional setting without clear context",
      "Avoid describing wardrobe removal or transition states"
    ],
    successKeywords: [
      "luxury intimate fashion",
      "editorial sophistication",
      "designer aesthetic",
      "professional styling",
      "high-end photography",
      "fashion-forward",
      "architectural design elements",
      "couture craftsmanship"
    ]
  },

  {
    name: "Environmental Boudoir",
    description: "Intimate moments in natural or luxurious environments. Contextual storytelling reduces ambiguity and improves generation.",
    subjectPromptPattern: "Subject in private moment within specific environment. Emphasize: relaxed natural posing, authentic emotion, environmental interaction. Connect body language to setting.",
    wardrobePromptPattern: "Context-appropriate intimate wear: [silk robe/oversized shirt] + [delicate underneath layer]. Specify purpose: morning after, private relaxation, spa moment. Emphasize natural authentic aesthetic over posed fashion.",
    lightingEmphasis: "Environmental lighting matching location. Specify: natural window light, firelight, soft lamp light, morning/evening quality. Emphasize authentic ambient lighting over studio setup.",
    compositionGuidance: "Environmental storytelling composition. Include: setting details, atmospheric elements, subject-environment relationship. Frame as intimate moment captured rather than posed shoot.",
    avoidancePatterns: [
      "Avoid clinical or sterile descriptions",
      "Don't over-specify coverage in clinical terms",
      "Never separate subject from environmental context",
      "Avoid listing body parts without environmental connection"
    ],
    successKeywords: [
      "private moment",
      "natural environment",
      "authentic intimacy",
      "environmental storytelling",
      "candid aesthetic",
      "ambient lighting",
      "intimate setting",
      "emotional narrative"
    ]
  },

  {
    name: "Dance & Movement Form",
    description: "Athletic grace and movement-based imagery. Clear athletic context provides strong generation framework.",
    subjectPromptPattern: "Professional dancer/athlete mid-movement. Emphasize: athletic grace, muscular definition, dynamic tension, physical artistry. Specify training discipline: ballet, modern dance, yoga.",
    wardrobePromptPattern: "Athletic performance wear: [dance bodysuit/leotard] + [mesh panel details] OR [athletic crop and brief set]. Specify functional purpose: flexibility, movement range, performance appropriate.",
    lightingEmphasis: "Dynamic lighting capturing movement. Specify: frozen motion clarity, rim lighting for definition, clean backgrounds. Reference dance photography standards.",
    compositionGuidance: "Athletic movement framing. Specify: full body capturing extended limbs, dynamic angles, vertical composition, energy and motion clear.",
    avoidancePatterns: [
      "Avoid static posing descriptions in movement context",
      "Don't mix athletic and fashion modeling terminology",
      "Never imply non-athletic setting",
      "Avoid ambiguous 'sportswear' terms without specificity"
    ],
    successKeywords: [
      "athletic movement",
      "dance form",
      "physical artistry",
      "dynamic composition",
      "performance wear",
      "kinetic energy",
      "professional athleticism",
      "movement frozen in time"
    ]
  },

  {
    name: "Water & Elements",
    description: "Interaction with water or natural elements. Environmental elements provide clear context and reduce generation failures.",
    subjectPromptPattern: "Subject interacting with water/natural element. Emphasize: wet textures, water movement, elemental connection, natural beauty enhanced by element.",
    wardrobePromptPattern: "Water-appropriate minimal wear: [athletic swim brief/bikini] OR [wet mesh becoming transparent]. Specify wet fabric behavior: clinging, transparency when saturated, realistic water physics.",
    lightingEmphasis: "Natural or water-influenced lighting. Specify: reflections off water surface, backlight through water droplets, wet skin specular highlights, atmospheric moisture effects.",
    compositionGuidance: "Environmental water composition. Include: water context (stream/pool/rain), water movement, droplets/mist/spray, subject-element interaction clear.",
    avoidancePatterns: [
      "Avoid dry indoor lighting descriptions with water context",
      "Don't neglect wet fabric physics",
      "Never omit water interaction specifics",
      "Avoid studio backdrop with natural water setting"
    ],
    successKeywords: [
      "water interaction",
      "wet textures",
      "elemental beauty",
      "natural environment",
      "water physics",
      "atmospheric moisture",
      "outdoor natural",
      "environmental composition"
    ]
  },

  {
    name: "Glamour Noir Luxury",
    description: "Classic Hollywood glamour with film noir aesthetic. Strong historical reference provides clear generation framework.",
    subjectPromptPattern: "Classic Hollywood glamour presence. Emphasize: vintage beauty standards, confident sultry expression, film star aura. Reference specific era: 1940s-50s glamour photography.",
    wardrobePromptPattern: "Vintage-inspired luxury pieces: [silk slip dress/teddy] + [stockings with seams] + [vintage lace details]. Specify era-appropriate styling: high-waisted, classic cuts, period-accurate undergarments.",
    lightingEmphasis: "Film noir dramatic lighting. Specify: hard side light creating stark shadows, atmospheric haze, high contrast black and white aesthetic, single-source lighting creating drama.",
    compositionGuidance: "Classic noir framing. Specify: medium shots emphasizing expression, dramatic angles, high contrast composition, vintage photograph aesthetic.",
    avoidancePatterns: [
      "Avoid modern casual terminology with vintage context",
      "Don't mix contemporary and vintage styling",
      "Never use digital/modern lighting terms",
      "Avoid contemporary poses with vintage glamour"
    ],
    successKeywords: [
      "classic Hollywood glamour",
      "film noir aesthetic",
      "vintage photography",
      "period-accurate styling",
      "dramatic lighting",
      "high contrast",
      "sultry elegance",
      "timeless beauty"
    ]
  },

  {
    name: "Architectural Fashion",
    description: "Structured geometric designs with architectural emphasis. Clear structural terminology improves generation accuracy.",
    subjectPromptPattern: "Fashion model showcasing architectural piece. Emphasize: strong posture, geometric body lines, structural awareness, fashion-forward confidence.",
    wardrobePromptPattern: "Architectural intimate wear: [geometric harness/straps system] + [structured panels] + [angular design elements]. Specify: material (leather/structured mesh), hardware details, symmetric/asymmetric layout, body-mapping design.",
    lightingEmphasis: "Clean architectural lighting. Specify: even illumination showing structure, hard light emphasizing lines and edges, minimal shadows, high-fashion studio aesthetic.",
    compositionGuidance: "Geometric composition. Specify: symmetry or intentional asymmetry, clean backgrounds, full body showing complete design, fashion editorial framing.",
    avoidancePatterns: [
      "Avoid soft romantic lighting with architectural pieces",
      "Don't use casual posing with structured fashion",
      "Never neglect hardware and construction details",
      "Avoid environmental clutter with clean architectural design"
    ],
    successKeywords: [
      "architectural design",
      "geometric structure",
      "hardware details",
      "fashion-forward",
      "structural aesthetic",
      "body-mapping",
      "clean lines",
      "contemporary fashion"
    ]
  },

  {
    name: "Cultural Ritual Context",
    description: "Traditional bathing rituals and cultural practices. Cultural context provides strong narrative framework.",
    subjectPromptPattern: "Subject engaged in traditional bathing ritual. Emphasize: cultural authenticity, ritual significance, respectful portrayal, traditional beauty standards.",
    wardrobePromptPattern: "Traditional bathing attire: [hammam wrap/peştemal] + [traditional textiles with cultural patterns]. Specify cultural origin: Turkish hammam, Moroccan bath, Japanese onsen style. Describe traditional wrapping method.",
    lightingEmphasis: "Traditional bathhouse lighting. Specify: soft diffused steam light, natural stone architecture, authentic ambient sources, atmospheric moisture glow.",
    compositionGuidance: "Cultural environmental composition. Include: traditional architecture (zellige tiles/marble/wood), ritual implements, atmospheric steam, respectful framing.",
    avoidancePatterns: [
      "Avoid Western casual terminology with cultural contexts",
      "Don't mix cultural traditions inappropriately",
      "Never omit architectural and environmental cultural markers",
      "Avoid modern casual settings with traditional rituals"
    ],
    successKeywords: [
      "traditional bathing ritual",
      "cultural authenticity",
      "hammam/bathhouse",
      "traditional textiles",
      "cultural respect",
      "ritual significance",
      "ethnic patterns",
      "authentic environment"
    ]
  }
];

/**
 * Helper function to apply intimate weaving strategy to prompt data
 */
export function applyIntimateWeavingStrategy(
  strategyName: string,
  basePrompt: any
): any {
  const strategy = intimateWeavingStrategies.find(s => s.name === strategyName);
  if (!strategy) return basePrompt;

  // This function would enhance the prompt with strategy-specific patterns
  // Implementation would analyze and enhance each field
  return {
    ...basePrompt,
    _strategy: strategy.name,
    _successKeywords: strategy.successKeywords
  };
}

/**
 * Success rate optimization recommendations
 */
export const promptOptimizationGuidelines = {
  always: [
    "Specify exact coverage with high-waisted/high-cut terminology",
    "Use professional context: fine art study, editorial shoot, cultural ritual",
    "Reference specific photographers and art movements for style clarity",
    "Describe lighting with technical precision: hard/soft, direction, contrast",
    "Include environmental context that justifies intimacy level",
    "Use classical art terminology for nude studies: sculptural, chiaroscuro",
    "Specify fabric behavior: clinging mesh, flowing silk, structured leather",
    "Emphasize artistic intent and professional photography context"
  ],
  never: [
    "Use ambiguous coverage terms without specific design details",
    "Mix incompatible contexts (clinical + romantic, athletic + glamour)",
    "Describe wardrobe in transition states or removal",
    "Use casual language for professional artistic concepts",
    "Omit professional/artistic context for intimate imagery",
    "Leave lighting or environment underspecified",
    "Use suggestive language without clear artistic framework",
    "Neglect fabric physics and material properties in wet/steam contexts"
  ],
  failureReduction: [
    "When mentioning minimal coverage, always specify: 'minimal aesthetic high-cut brief emphasizing hip curves' rather than vague terms",
    "For nude studies, always prefix with 'fine art nude study' or 'classical artistic nude'",
    "For transparent/wet effects, specify exact cause: 'wet from rain/steam/water' with fabric behavior",
    "For intimate wear, use fashion terminology: 'couture intimate piece', 'designer bodysuit', 'architectural harness'",
    "Always specify photographer style reference to set aesthetic expectations",
    "Include skin rendering instructions: 'authentic texture with pores visible' to set realism level",
    "Specify pose with classical reference: 'contrapposto stance' rather than casual description"
  ]
};
