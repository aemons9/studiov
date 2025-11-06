/**
 * IMAGE QUALITY PRESETS
 * Technical quality options optimized for AI generation consistency
 * Focuses on reliable camera, film, and rendering specifications
 */

export interface ImageQualityPreset {
  name: string;
  description: string;
  cameraSystem: string;
  lens: string;
  filmStock?: string;
  rendering: string;
  skinDetail: string;
  fabricDetail: string;
  lightingQuality: string;
  bestFor: string[];
}

export const imageQualityPresets: ImageQualityPreset[] = [
  {
    name: "Ultra High-End Digital",
    description: "Maximum resolution and detail for private collection fine art",
    cameraSystem: "Phase One XF IQ4 150MP",
    lens: "Schneider Kreuznach 80mm f/2.8 LS",
    rendering: "Hyper-realistic 16-bit RAW capture with extreme micro-detail. Every pore, freckle, and fabric thread rendered in perfect clarity.",
    skinDetail: "Extreme macro-level detail: individual pores visible, fine vellus hair, subtle skin color variations, visible capillaries creating natural flush, subsurface scattering showing skin translucency.",
    fabricDetail: "Individual fabric threads and weave patterns visible. Lace showing intricate stitch detail, silk displaying directional sheen variations, mesh revealing exact transparency gradients.",
    lightingQuality: "Perfect tonal gradation from highlight to shadow. No clipping in highlights or crushing in shadows. Beautiful mid-tone separation.",
    bestFor: ["Fine art collections", "Gallery prints", "Maximum detail required", "Private editorial", "Museum-quality work"]
  },

  {
    name: "Hasselblad Medium Format",
    description: "Classic medium format quality with beautiful tonal range",
    cameraSystem: "Hasselblad X2D 100MP or 503CW",
    lens: "Zeiss Planar 80mm f/2.8 or XCD 80mm f/1.9",
    filmStock: "Kodak Portra 400 (for 503CW film version)",
    rendering: "Exceptional 8K detail with smooth tonal transitions. Medium format look with superior depth and dimensional quality. Optional: subtle film grain if using 503CW.",
    skinDetail: "High resolution showing authentic texture while maintaining flattering aesthetic. Visible pores and natural imperfections without harsh clinical detail. Beautiful skin tone rendering.",
    fabricDetail: "Excellent fabric detail showing texture and weave without over-sharpening. Natural material properties clearly visible with dimensional depth.",
    lightingQuality: "Smooth gradation with medium format characteristic 'glow'. Highlights roll off gracefully, shadows have detail and depth.",
    bestFor: ["Fashion editorial", "High-end portraiture", "Luxury brand work", "Fine art photography", "Timeless aesthetic"]
  },

  {
    name: "Leica Rangefinder Aesthetic",
    description: "Classic Leica look with beautiful bokeh and natural rendering",
    cameraSystem: "Leica M11 or M10-R",
    lens: "Summilux 50mm f/1.4 or Noctilux 50mm f/0.95",
    rendering: "Exceptional natural color science and three-dimensional 'pop'. Beautiful bokeh with smooth out-of-focus areas. Classic Leica microcontrast and dimensional rendering.",
    skinDetail: "Natural beautiful skin rendering with Leica's signature 'glow'. Authentic texture without clinical harshness. Subsurface scattering creating luminous life-like quality.",
    fabricDetail: "Natural fabric rendering with excellent detail in focus plane. Beautiful texture without over-processed sharpness.",
    lightingQuality: "Natural dimensional lighting with excellent highlight roll-off. Leica's signature microcontrast creating three-dimensional effect.",
    bestFor: ["Documentary style", "Natural portraiture", "Candid moments", "Shallow DOF work", "Authentic beauty"]
  },

  {
    name: "Cinematic ARRI Alexa",
    description: "Film-like digital cinema quality with organic texture",
    cameraSystem: "ARRI Alexa 65 or Alexa LF",
    lens: "Arri Signature Prime 47mm T1.8 or 75mm T1.8",
    rendering: "Cinematic film-like rendering with organic grain structure. Wide dynamic range capturing detail in highlights and shadows. Natural color science with pleasing skin tones.",
    skinDetail: "Cinematic skin rendering with slight softness and organic quality. Natural texture visible with film-like grain adding tactile quality. No video sharpness.",
    fabricDetail: "Cinematic fabric rendering showing texture with organic film-like quality. Materials have dimensional depth and realistic weight.",
    lightingQuality: "Wide dynamic range preserving detail across entire tonal range. Cinematic contrast with film-like gradation. Beautiful specular highlights.",
    bestFor: ["Cinematic aesthetic", "Film-like quality", "Motion capture stills", "High-end commercial", "Narrative storytelling"]
  },

  {
    name: "Film Noir Classic",
    description: "Vintage film photography aesthetic with authentic grain",
    cameraSystem: "35mm film camera or digital emulation",
    lens: "Classic 50mm f/1.4 or 85mm f/1.8",
    filmStock: "Kodak Tri-X 400 (B&W) or Kodak Portra 800 (color)",
    rendering: "Authentic film grain and organic texture. Slightly softer focus with film characteristic 'glow'. Natural highlight roll-off and deep shadow detail. Warm nostalgic quality.",
    skinDetail: "Flattering film rendering with natural softness. Grain adds tactile organic quality. Skin tones have classic film warmth and dimension.",
    fabricDetail: "Film grain adds texture to fabrics. Natural material rendering without digital sharpness. Organic aesthetic quality.",
    lightingQuality: "Classic film latitude with beautiful highlight and shadow tonality. Grain visible in shadows adding depth. Warm nostalgic color (if color stock).",
    bestFor: ["Vintage aesthetic", "Timeless classic look", "Nostalgic mood", "Film noir style", "Romantic softness"]
  },

  {
    name: "Sony Professional Sharp",
    description: "Modern sharp digital with excellent detail and dynamic range",
    cameraSystem: "Sony A1 or A7R V",
    lens: "Sony G Master 50mm f/1.2 or 85mm f/1.4",
    rendering: "Ultra-sharp modern digital rendering with exceptional detail. Fast autofocus ensuring critical sharpness. Wide dynamic range with excellent color science.",
    skinDetail: "Very sharp detailed skin rendering. Excellent pore-level detail and texture. Modern clinical sharpness with accurate color.",
    fabricDetail: "Extremely sharp fabric detail showing every thread and texture. Maximum material property clarity.",
    lightingQuality: "Modern digital contrast with wide dynamic range. Clean highlights and detailed shadows. Accurate color reproduction.",
    bestFor: ["Modern commercial", "Fast-paced shoots", "Maximum sharpness", "Contemporary aesthetic", "High-resolution needs"]
  },

  {
    name: "Canon Color Science",
    description: "Beautiful flattering color and natural skin tone rendering",
    cameraSystem: "Canon EOS R5 or R3",
    lens: "RF 85mm f/1.2 L or RF 50mm f/1.2 L",
    rendering: "Canon's legendary color science with beautiful pleasing tones. Slightly warm flattering rendering. Excellent skin tone reproduction with natural color.",
    skinDetail: "Flattering natural skin rendering with Canon's warm color science. Authentic detail with pleasing aesthetic. Natural beauty emphasis.",
    fabricDetail: "Natural fabric color and texture rendering. Materials display authentic properties with Canon's pleasing color bias.",
    lightingQuality: "Slightly warm flattering light rendering. Beautiful skin tone preservation across lighting conditions. Natural shadow detail.",
    bestFor: ["Portrait photography", "Natural beauty", "Pleasing color", "Skin tone critical work", "Warm aesthetic"]
  }
];

/**
 * Quality enhancement techniques
 */
export const qualityEnhancementGuidelines = {
  skinRendering: {
    ultraRealistic: "Hyper-realistic macro-level detail with every pore, freckle, and fine hair visible. Visible capillaries creating natural flush. Subsurface scattering showing skin translucency where light penetrates. No airbrushing or smoothing.",
    natural: "Authentic skin texture with visible pores and natural imperfections. Soft subsurface scattering creating luminous quality. Realistic beauty without clinical harshness.",
    flattering: "Natural skin with slight softness. Pores softly visible, maintaining authentic texture while providing flattering aesthetic. Beautiful glow without over-processing.",
    artistic: "Skin rendered as sculptural element with light and shadow emphasis. Texture visible in lit areas, smooth gradation into shadows. Artistic interpretation over clinical accuracy."
  },

  fabricQuality: {
    hyperDetailed: "Individual fabric threads visible. Lace showing intricate stitch patterns. Silk displaying weave direction and sheen variations. Mesh revealing exact transparency percentage.",
    realistic: "Fabric texture clearly visible with authentic draping and weight. Materials show realistic physics - creasing, tension, transparency where appropriate.",
    artistic: "Fabric as compositional element with emphasis on flow, drape, and light interaction. Texture suggested rather than microscopically detailed.",
  },

  lightingQuality: {
    technical: "Perfect exposure with no clipping in highlights or crushing in shadows. Full tonal range from pure white to pure black with excellent mid-tone separation.",
    cinematic: "Film-like contrast with organic gradation. Highlights roll off gracefully, shadows retain detail. Slight softness adding dimensional quality.",
    artistic: "Dramatic lighting serving composition. High contrast acceptable for artistic effect. Light and shadow as primary elements."
  }
};

/**
 * Helper to get quality preset by name
 */
export function getQualityPreset(name: string): ImageQualityPreset | undefined {
  return imageQualityPresets.find(p => p.name === name);
}

/**
 * Generate quality string for prompt
 */
export function generateQualityPromptString(presetName: string, skinDetail: keyof typeof qualityEnhancementGuidelines.skinRendering): string {
  const preset = getQualityPreset(presetName);
  if (!preset) return "";

  const skinGuidance = qualityEnhancementGuidelines.skinRendering[skinDetail];

  return `Shot on ${preset.cameraSystem} with ${preset.lens}${preset.filmStock ? ` using ${preset.filmStock} film stock` : ''}. ${preset.rendering} Skin Detail: ${skinGuidance}. Fabric Detail: ${preset.fabricDetail}. ${preset.lightingQuality}`;
}
