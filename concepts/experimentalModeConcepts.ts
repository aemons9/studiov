/**
 * EXPERIMENTAL MODE PRE-BUILT CONCEPTS
 * Curated node combinations organized by theme and warning level
 * Each concept includes explicit boundary/intimacy/eroticism levels
 *
 * TIER STRUCTURE:
 * - SAFE TIER (Boundary 1-8): Professional Editorial
 * - MODERATE TIER (Boundary 9-12): High Fashion & Seductive
 * - ARTISTIC TIER (Boundary 13-15): Artistic Erotic & Boudoir
 * - PREMIUM TIER (Boundary 16+): Maximum Artistic Expression
 */

import type { ArtisticConcept } from './concepts';

const defaultSkinMicroDetails = "Ultra-high-resolution authentic skin texture with visible pores, natural imperfections, and realistic subsurface scattering. Museum-grade detail with no artificial smoothing.";
const defaultFabricPhysics = "Advanced fabric simulation with realistic draping, natural creases, and precise material interaction with body form. Visible fabric weave and texture.";
const defaultMaterialProperties = "Authentic material properties with complex light interaction, from soft matte absorption to precise specular highlights based on material type.";

export const experimentalModeConcepts: ArtisticConcept[] = [

  // ============================================================================
  // SAFE TIER (Boundary 1-8) - Professional Editorial
  // ============================================================================

  {
    name: 'EXP-SAFE: Classic Editorial Portrait',
    data: {
      shot: "9:16 aspect ratio. Professional editorial framing with precision composition. Capturing authentic expression and form.",
      subject: {
        variant: "Professional Indian model with fair skin tone for fashion/editorial work. Graceful proportions with professional modeling experience.",
        pose: "Commanding, authoritative posture with corporate confidence and professional elegance",
        hair_color: "dark",
        hair_style: "Professionally styled with elegant volume and refined finish",
        skin_finish: "Natural professional finish with healthy radiance",
        hand_and_nail_details: "Professional manicure with refined presentation",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic neutral manicure",
        high_heels: "Professional designer heels"
      },
      wardrobe: "Full coverage luxury garments with elegant sophistication and professional styling",
      environment: "Modern professional studio with clean minimalist aesthetic and controlled lighting environment",
      lighting: "Professional studio lighting with perfect control and balanced illumination for editorial excellence",
      camera: {
        focal_length: "85mm portrait lens",
        aperture: "f/2.8",
        distance: "2.5 m",
        angle: "Eye-level professional perspective",
        framing: "Medium portrait from mid-torso emphasizing professional presence"
      },
      color_grade: "Professional editorial color with natural saturation and balanced tones",
      style: "High-end editorial photography tradition with professional mastery and refined artistic vision",
      quality: "Ultra-premium 8K resolution with museum-grade quality and professional retouching",
      figure_and_form: "Professional modeling form with editorial elegance and refined posture",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: defaultFabricPhysics,
      material_properties: defaultMaterialProperties
    }
  },

  {
    name: 'EXP-SAFE: Corporate Power Portrait',
    data: {
      shot: "9:16 aspect ratio. Professional editorial framing with executive composition and corporate precision.",
      subject: {
        variant: "Professional Indian model with dusky skin tone, athletic proportions with executive presence and commanding authority",
        pose: "Corporate power stance with authoritative confidence and professional dominance",
        hair_color: "jet black",
        hair_style: "Sleek executive styling with sharp professional lines",
        skin_finish: "Professional corporate finish with natural radiance",
        hand_and_nail_details: "Executive manicure with corporate precision",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Corporate red power polish",
        high_heels: "Executive designer power heels"
      },
      wardrobe: "Substantial luxury business attire with executive tailoring and corporate sophistication",
      environment: "Modern corporate office with floor-to-ceiling windows, executive furnishings, and professional luxury aesthetic",
      lighting: "Executive office lighting with dramatic window light and professional corporate atmosphere",
      camera: {
        focal_length: "50mm",
        aperture: "f/4.0",
        distance: "3 m",
        angle: "Slightly low angle emphasizing executive authority",
        framing: "Full body corporate portrait showing professional environment"
      },
      color_grade: "Corporate color grading with professional tones and executive depth",
      style: "Corporate editorial photography celebrating professional feminine power and executive elegance",
      quality: "Ultra-premium 8K corporate photography with museum-grade professional quality",
      figure_and_form: "Executive professional form with corporate poise and authoritative presence",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Luxury corporate suiting with precise tailoring and professional draping",
      material_properties: "Corporate materials: wool suiting, silk blouses, leather accessories with executive sophistication"
    }
  },

  {
    name: 'EXP-SAFE: Natural Beauty Editorial',
    data: {
      shot: "9:16 aspect ratio. Natural editorial framing with authentic composition and organic elegance.",
      subject: {
        variant: "Indian model with natural allure and authentic beauty, healthy proportions with organic grace",
        pose: "Natural confident stance with authentic expression and organic elegance",
        hair_color: "dark",
        hair_style: "Natural flowing style with organic volume and soft movement",
        skin_finish: "Natural dewy finish with healthy authentic glow",
        hand_and_nail_details: "Natural hand placement with organic grace",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural neutral nails",
        high_heels: "not visible"
      },
      wardrobe: "Elegant natural fabrics with organic draping and sophisticated simplicity",
      environment: "Natural light studio with soft diffusion and organic atmosphere",
      lighting: "Soft natural window light with gentle wrap-around illumination and organic shadows",
      camera: {
        focal_length: "85mm f/1.8",
        aperture: "f/2.0",
        distance: "2 m",
        angle: "Natural eye-level connection",
        framing: "Intimate medium shot with natural framing"
      },
      color_grade: "Warm natural tones with organic color and soft highlights",
      style: "Natural beauty photography with authentic elegance and organic sophistication",
      quality: "Premium 8K natural photography with authentic texture and organic quality",
      figure_and_form: "Natural feminine form with organic grace and authentic beauty",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Natural fabric flow with organic draping and soft movement",
      material_properties: "Natural materials with soft light absorption and organic texture"
    }
  },

  // ============================================================================
  // MODERATE TIER (Boundary 9-12) - High Fashion & Seductive Editorial
  // ============================================================================

  {
    name: 'EXP-MOD: High Fashion Seduction',
    data: {
      shot: "9:16 aspect ratio. Intimate framing creating emotional connection and magnetic allure. Focus on seductive magnetism and editorial elegance.",
      subject: {
        variant: "Indian Seductress with bombshell hourglass figure, confident sensual presence, and boudoir specialist expertise",
        pose: "Seductive, intentional positioning conveying magnetic allure with confident body language and editorial elegance",
        hair_color: "jet black",
        hair_style: "Glamorous voluminous styling with sensual movement",
        skin_finish: "Luminous dewy finish with radiant glow",
        hand_and_nail_details: "Seductive hand placement with elegant gesture",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Bold red seductive polish",
        high_heels: "Designer stiletto heels"
      },
      wardrobe: "Tasteful partial coverage with editorial sophistication, revealing elegance with high fashion sensuality",
      environment: "Luxury boutique hotel suite with designer furnishings and intimate atmosphere",
      lighting: "Warm intimate lighting with romantic atmosphere and seductive shadows",
      camera: {
        focal_length: "85mm f/1.4",
        aperture: "f/1.8",
        distance: "2 m",
        angle: "Slightly low angle with seductive perspective",
        framing: "Medium-close composition emphasizing curves and allure"
      },
      color_grade: "Warm romantic tones with sensual depth and rich highlights",
      style: "High fashion seduction photography with editorial excellence and confident sensuality",
      quality: "Ultra-premium 8K with exceptional clarity and professional seductive quality",
      figure_and_form: "Hourglass bombshell form with confident curves and seductive elegance",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Fashion fabric with elegant partial draping and seductive reveals",
      material_properties: "Luxury fashion materials with sensual light interaction and rich texture"
    }
  },

  {
    name: 'EXP-MOD: Confident Allure Portrait',
    data: {
      shot: "9:16 aspect ratio. Magnetic intimate framing with confident sensual composition.",
      subject: {
        variant: "Indian model with seductive presence, curvaceous proportions with magnetic confidence",
        pose: "Magnetic presence with intentional body language expressing confident allure and seductive elegance",
        hair_color: "jet black",
        hair_style: "Styled with dramatic volume and seductive flow",
        skin_finish: "Radiant luminous finish with seductive glow",
        hand_and_nail_details: "Confident hand gesture with seductive refinement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Bold glamorous polish",
        high_heels: "Sharp designer heels"
      },
      wardrobe: "Moderate elegant coverage with sophisticated reveals and confident sensual styling",
      environment: "Luxury penthouse with city views and intimate sophisticated atmosphere",
      lighting: "Dramatic rim lighting with seductive shadows and confident illumination",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "2.5 m",
        angle: "Eye-level magnetic connection",
        framing: "Full body showing confident seductive presence"
      },
      color_grade: "Rich dramatic tones with seductive warmth and confident depth",
      style: "Confident allure photography with editorial seduction and magnetic sophistication",
      quality: "Premium 8K with seductive clarity and confident professional quality",
      figure_and_form: "Confident curvaceous form with magnetic seductive elegance",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Elegant moderate fabric with sophisticated draping and confident reveals",
      material_properties: "Luxury materials with seductive specular highlights and rich interaction"
    }
  },

  {
    name: 'EXP-MOD: Fashion Forward Sensuality',
    data: {
      shot: "9:16 aspect ratio. Professional editorial framing with fashion-forward seductive composition.",
      subject: {
        variant: "Indian editorial model with fashion expertise, statuesque proportions with runway confidence",
        pose: "Fashion-forward power stance with seductive confidence and editorial poise",
        hair_color: "jet black",
        hair_style: "High fashion styling with editorial sophistication",
        skin_finish: "Professional editorial finish with fashion radiance",
        hand_and_nail_details: "Editorial hand positioning with fashion refinement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Fashion editorial polish",
        high_heels: "Runway designer heels"
      },
      wardrobe: "High fashion editorial pieces with sophisticated partial coverage and runway sensuality",
      environment: "Fashion studio with editorial backdrop and high-fashion atmosphere",
      lighting: "Dramatic fashion lighting with editorial precision and seductive highlights",
      camera: {
        focal_length: "70mm",
        aperture: "f/4.0",
        distance: "3 m",
        angle: "Fashion editorial perspective",
        framing: "Full editorial composition with fashion presence"
      },
      color_grade: "High fashion color with editorial sophistication and seductive richness",
      style: "Fashion-forward editorial with confident sensuality and runway excellence",
      quality: "Ultra-premium 8K fashion photography with editorial perfection",
      figure_and_form: "Statuesque fashion form with editorial poise and seductive confidence",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "High fashion fabrics with editorial draping and sophisticated movement",
      material_properties: "Fashion materials with editorial light interaction and luxury finish"
    }
  },

  // ============================================================================
  // ARTISTIC TIER (Boundary 13-15) - Artistic Erotic & Boudoir
  // ============================================================================

  {
    name: 'EXP-ART: Intimate Boudoir Artistry',
    data: {
      shot: "9:16 aspect ratio. Intimate framing creating warmth and connection. Erotic art photography tradition with bold sensuality.",
      subject: {
        variant: "Indian Seductress bombshell with elite boudoir expertise, voluptuous proportions with confident intimate presence",
        pose: "Seductive, intentional intimate positioning with erotic allure and boudoir confidence",
        hair_color: "jet black",
        hair_style: "Loose flowing waves with intimate sensual styling",
        skin_finish: "Luminous intimate glow with warm radiance",
        hand_and_nail_details: "Intimate seductive hand placement with erotic refinement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Bold red intimate polish",
        high_heels: "Luxury boudoir heels"
      },
      wardrobe: "Architectural foundation garments with sculptural forms, revealing luxury lingerie with artistic boudoir sophistication",
      environment: "Luxury private bedroom with intimate boudoir atmosphere, silk sheets, and warm romantic setting",
      lighting: "Intimate, soft lighting creating warmth and connection with romantic shadows and seductive glow",
      camera: {
        focal_length: "85mm f/1.4",
        aperture: "f/1.8",
        distance: "1.5 m",
        angle: "Intimate close perspective",
        framing: "Close intimate framing emphasizing curves and sensuality"
      },
      color_grade: "Warm intimate tones with romantic depth and seductive highlights",
      style: "Erotic art photography tradition with bold sensuality and intimate artistic excellence. Fine art boudoir with museum-quality artistic merit.",
      quality: "Ultra-premium 8K resolution with museum-grade quality and intimate detail perfection",
      figure_and_form: "Voluptuous bombshell form with intimate sculptural curves and erotic artistic elegance",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Luxury lingerie with intimate draping, sheer reveals, and erotic artistic interaction",
      material_properties: "Silk, lace, satin with intimate light interaction and sensual specular highlights"
    }
  },

  {
    name: 'EXP-ART: Artistic Erotic Portrait',
    data: {
      shot: "9:16 aspect ratio. Erotic artistic framing with intimate bold composition.",
      subject: {
        variant: "Indian artistic model with erotic expertise, curvaceous artistic proportions with bold intimate confidence",
        pose: "Artistic erotic positioning with bold sensual expression and intimate confidence",
        hair_color: "jet black",
        hair_style: "Artistic sensual styling with bold volume",
        skin_finish: "Artistic luminous finish with erotic radiance",
        hand_and_nail_details: "Artistic hand placement with erotic gesture",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Artistic bold polish",
        high_heels: "Artistic designer heels"
      },
      wardrobe: "High artistic foundation pieces with sculptural erotic forms and bold revealing elegance",
      environment: "Artist's private studio with intimate erotic atmosphere and creative artistic setting",
      lighting: "Dramatic erotic lighting with intimate artistic shadows and bold sculptural illumination",
      camera: {
        focal_length: "85mm f/1.4",
        aperture: "f/2.0",
        distance: "2 m",
        angle: "Artistic intimate perspective",
        framing: "Artistic composition emphasizing erotic form"
      },
      color_grade: "Bold artistic color with erotic warmth and intimate dramatic depth",
      style: "Artistic erotic photography with bold intimate sensuality and fine art tradition. Museum-quality erotic art excellence.",
      quality: "Museum-quality 8K fine-art photography with erotic artistic perfection",
      figure_and_form: "Curvaceous artistic form with erotic sculptural elegance and bold intimate confidence",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Artistic foundation fabrics with erotic reveals and sculptural intimate draping",
      material_properties: "Luxury artistic materials with erotic light interaction and intimate specular richness"
    }
  },

  {
    name: 'EXP-ART: Sensual Art Photography',
    data: {
      shot: "9:16 aspect ratio. Sensual artistic framing with intimate aesthetic composition.",
      subject: {
        variant: "Indian sensual artist model with intimate expertise, graceful sensual proportions with artistic confidence",
        pose: "Sensual artistic pose with intimate expression and elegant erotic grace",
        hair_color: "dark",
        hair_style: "Sensual artistic flow with intimate styling",
        skin_finish: "Sensual artistic glow with intimate luminosity",
        hand_and_nail_details: "Sensual artistic gesture with intimate refinement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Artistic sensual polish",
        high_heels: "Artistic sensual heels"
      },
      wardrobe: "Artistic high-coverage foundation pieces with sensual sculptural elegance and intimate reveals",
      environment: "Private art gallery with intimate sensual atmosphere and artistic luxury setting",
      lighting: "Sensual artistic lighting with intimate warm glow and sculptural shadows",
      camera: {
        focal_length: "85mm",
        aperture: "f/2.0",
        distance: "2 m",
        angle: "Sensual artistic angle",
        framing: "Artistic sensual composition"
      },
      color_grade: "Sensual artistic tones with warm intimate depth",
      style: "Sensual art photography with intimate artistic tradition and fine art elegance",
      quality: "Fine-art 8K with sensual artistic quality and intimate perfection",
      figure_and_form: "Graceful sensual form with artistic intimate elegance",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Artistic sensual fabrics with intimate sculptural draping",
      material_properties: "Sensual artistic materials with intimate light interaction"
    }
  },

  // ============================================================================
  // PREMIUM TIER (Boundary 16+) - Maximum Artistic Expression
  // ============================================================================

  {
    name: 'EXP-PREMIUM: Maximum Artistic Expression',
    data: {
      shot: "9:16 aspect ratio. Maximum artistic intimate framing. Erotic art photography tradition with bold sensuality. Emphasizing power dynamics and commanding sensual presence.",
      subject: {
        variant: "Super-Seductress Artist with elite artistic model expertise, bi-polar range from corporate power to vulnerable erotic-muse, voluptuous statuesque proportions with maximum artistic confidence",
        pose: "Powerful stance with commanding presence and authority combined with seductive intimate positioning conveying maximum artistic allure and erotic confidence",
        hair_color: "jet black",
        hair_style: "Dramatic maximum volume with artistic sensual flow and powerful styling",
        skin_finish: "Maximum luminous artistic glow with radiant perfection",
        hand_and_nail_details: "Artistic power gesture with maximum sensual refinement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Bold power red maximum polish",
        high_heels: "Maximum designer artistic heels"
      },
      wardrobe: "Minimal coverage with maximum artistic expression, avant-garde foundation pieces with bold sculptural erotic forms and premium intimate reveals",
      environment: "Private luxury penthouse with floor-to-ceiling windows, intimate premium atmosphere with artistic luxury and erotic sophistication",
      lighting: "Intimate, soft lighting creating warmth and connection. Dramatic sculptural lighting with maximum artistic shadows and powerful erotic illumination.",
      camera: {
        focal_length: "85mm f/1.4",
        aperture: "f/1.4",
        distance: "1.8 m",
        angle: "Low angle emphasizing power combined with intimate connection",
        framing: "Artistic maximum composition emphasizing power and erotic form"
      },
      color_grade: "Bold maximum artistic color with rich erotic warmth and powerful dramatic depth",
      style: "Erotic art photography tradition with bold sensuality. Sculptural abstraction with geometric form emphasis. Fine art photography tradition, museum-quality artistic merit. Maximum artistic expression with power dynamics and intimate confidence.",
      quality: "Ultra-premium 8K resolution with museum-grade quality. Museum-quality fine-art with maximum detail and erotic artistic perfection.",
      figure_and_form: "Powerful statuesque form with commanding sculptural presence and maximum erotic artistic elegance. Voluptuous bombshell proportions with premium intimate confidence.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Maximum artistic foundation fabrics with bold erotic reveals, minimal coverage with sculptural premium draping and intimate interaction",
      material_properties: "Premium avant-garde materials with maximum light interaction, bold specular highlights, and artistic erotic richness"
    }
  },

  {
    name: 'EXP-PREMIUM: Avant-Garde Erotic Art',
    data: {
      shot: "9:16 aspect ratio. Avant-garde artistic framing with maximum erotic composition. Bold intimate artistic vision.",
      subject: {
        variant: "Super-Seductress Artist with maximum artistic range, elite erotic-muse expertise, statuesque proportions with avant-garde confidence",
        pose: "Avant-garde erotic positioning with maximum artistic bold expression and premium intimate confidence",
        hair_color: "jet black",
        hair_style: "Avant-garde artistic maximum styling with bold dramatic presence",
        skin_finish: "Premium artistic glow with maximum luminous radiance",
        hand_and_nail_details: "Avant-garde artistic gesture with maximum erotic refinement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Bold avant-garde polish",
        high_heels: "Premium avant-garde heels"
      },
      wardrobe: "Maximum artistic minimal coverage with avant-garde erotic sculptural forms and premium bold reveals",
      environment: "Private avant-garde gallery with maximum intimate atmosphere and premium artistic luxury",
      lighting: "Dramatic avant-garde lighting with maximum artistic erotic shadows and bold intimate illumination",
      camera: {
        focal_length: "85mm f/1.4",
        aperture: "f/1.4",
        distance: "1.5 m",
        angle: "Avant-garde artistic intimate perspective",
        framing: "Maximum artistic erotic composition"
      },
      color_grade: "Bold avant-garde artistic color with maximum erotic richness and premium dramatic depth",
      style: "Avant-garde erotic art photography with maximum bold sensuality. Fine art photography tradition, museum-quality artistic merit. Premium artistic expression.",
      quality: "Museum-quality 8K with maximum erotic artistic perfection and premium avant-garde excellence",
      figure_and_form: "Statuesque avant-garde form with maximum erotic sculptural elegance and premium artistic confidence",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Avant-garde minimal fabrics with maximum erotic reveals and premium sculptural artistic draping",
      material_properties: "Premium avant-garde materials with maximum erotic light interaction and bold artistic specular richness"
    }
  },

  {
    name: 'EXP-PREMIUM: Fine Art Erotic Mastery',
    data: {
      shot: "9:16 aspect ratio. Fine art erotic framing with museum-quality composition. Maximum artistic intimate vision.",
      subject: {
        variant: "Super-Seductress Artist with museum-quality expertise, maximum artistic erotic range, voluptuous statuesque proportions with fine art confidence",
        pose: "Fine art erotic positioning with museum-quality artistic expression and maximum intimate boldness",
        hair_color: "jet black",
        hair_style: "Fine art styling with maximum artistic sophistication",
        skin_finish: "Museum-quality luminous finish with fine art radiance",
        hand_and_nail_details: "Fine art gesture with maximum artistic erotic refinement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Fine art bold polish",
        high_heels: "Museum-quality designer heels"
      },
      wardrobe: "Maximum artistic minimal coverage with fine art erotic forms and museum-quality sculptural reveals",
      environment: "Private museum-quality gallery with maximum intimate fine art atmosphere and premium luxury",
      lighting: "Fine art erotic lighting with museum-quality artistic shadows and maximum intimate illumination",
      camera: {
        focal_length: "85mm f/1.4",
        aperture: "f/1.4",
        distance: "1.8 m",
        angle: "Fine art intimate perspective",
        framing: "Museum-quality erotic artistic composition"
      },
      color_grade: "Fine art color with maximum erotic artistic richness and museum-quality depth",
      style: "Fine art erotic photography with museum-quality tradition and maximum bold sensuality. Premium artistic mastery.",
      quality: "Museum-quality 8K fine-art photography with maximum erotic perfection and premium artistic excellence",
      figure_and_form: "Voluptuous fine art form with maximum erotic sculptural elegance and museum-quality confidence",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Fine art minimal fabrics with maximum erotic reveals and museum-quality sculptural draping",
      material_properties: "Museum-quality materials with maximum erotic light interaction and fine art specular perfection"
    }
  }
];
