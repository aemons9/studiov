/**
 * ARTISTIC MODE PRE-BUILT CONCEPTS
 * Comprehensive concepts based on Master Photographer Styles and Indian Model Archetypes
 * Organized by master style: Newton, Penn, Roversi, Ritts
 */

import type { ArtisticConcept } from './concepts';

const defaultSkinMicroDetails = "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing.";
const defaultFabricPhysics = "The fabric drapes naturally, with realistic creases and folds that follow the subject's form. The weave of the fabric is visible upon close inspection.";
const defaultMaterialProperties = "The material has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject's skin.";

export const artisticModeConcepts: ArtisticConcept[] = [
  // HELMUT NEWTON STYLE (3 concepts)
  {
    name: 'Newton - Modern Power Icon',
    data: {
      shot: "Helmut Newton-style fine-art photography. Intimacy level 8/10. Gallery quality.",
      subject: {
        variant: "Indian Modern Power Icon. Athletic sculptural form with strong shoulders and defined waist. Luminous dusky complexion with warm undertones. Sharp angular bone structure, magnetic penetrating gaze, strong jawline",
        pose: "Full body shot from low angle emphasizing powerful silhouette, standing commanding with architectural precision",
        hair_color: "jet black",
        hair_style: "Sleek severe styling with sharp lines and urban edge",
        skin_finish: "Natural luminous glow with authentic texture",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic red polish",
        high_heels: "Sharp stiletto heels"
      },
      wardrobe: "Architectural black strappy bodysuit with geometric cutouts, combining minimalist design with revealing strategic placement",
      environment: "Minimalist luxury penthouse at night, floor-to-ceiling windows with city skyline, polished concrete floors",
      lighting: "Dramatic rim lighting from city lights, high contrast chiaroscuro creating sculptural shadows",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Low angle, powerful perspective",
        framing: "Full body shot emphasizing commanding presence and environment"
      },
      color_grade: "High-contrast monochrome or desaturated tones with deep blacks and luminous highlights",
      style: "Helmut Newton Bold, graphic, high-contrast fashion with powerful feminine archetypes. Award-winning Helmut Newton-style black and white fashion photography, powerful feminine presence in minimalist urban setting, dramatic rim lighting creating sculptural shadows",
      quality: "Museum-quality 8K fine-art photography with impeccable detail and texture",
      figure_and_form: "Artistic emphasis on feminine form and sculptural composition, Graphic architectural framing, confrontational angles, urban minimalism, bold negative space",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: defaultFabricPhysics,
      material_properties: "High-gloss architectural materials with dramatic light reflection and bold contrast"
    }
  },

  {
    name: 'Newton - Sensual Sophisticate',
    data: {
      shot: "Helmut Newton-style fine-art photography. Intimacy level 9/10. Gallery quality.",
      subject: {
        variant: "Indian Sensual Sophisticate. Curvaceous hourglass form with commanding proportions. Warm caramel to dusky tone with natural radiance. Captivating magnetic gaze, full expressive lips, sculpted features",
        pose: "Power arch seated on minimalist furniture, leaning back with confident dominance and sensual command",
        hair_color: "jet black",
        hair_style: "Loose flowing waves with dramatic volume and movement",
        skin_finish: "Natural luminous glow with authentic texture",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic red polish",
        high_heels: "Sharp stiletto heels"
      },
      wardrobe: "Sheer black bodysuit with strategic lace panels, combining transparency with geometric precision in the Newton tradition",
      environment: "Brutalist concrete interior with dramatic shadows and urban edge, single spotlight creating theater-like drama",
      lighting: "Hard directional lighting creating stark shadows and graphic contrast, Newton's signature chiaroscuro",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Low angle, powerful perspective",
        framing: "Medium-full body emphasizing curves and architectural background"
      },
      color_grade: "High-contrast monochrome with deep blacks and brilliant highlights",
      style: "Helmut Newton Bold, graphic, high-contrast fashion with powerful feminine archetypes. Celebrating confident sensuality and commanding feminine power",
      quality: "Museum-quality 8K fine-art photography with impeccable detail and texture",
      figure_and_form: "Sculptural emphasis on curvaceous form with graphic precision and bold negative space",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Sheer fabric revealing body contours with precise tailoring and strategic transparency",
      material_properties: "Translucent materials with complex light interaction, stark shadows and specular highlights"
    }
  },

  {
    name: 'Newton - Bold Contemporary',
    data: {
      shot: "Helmut Newton-style fine-art photography. Intimacy level 7/10. Gallery quality.",
      subject: {
        variant: "Indian Bold Contemporary Muse. Statuesque athletic build with dramatic proportions. Rich deep complexion with flawless matte finish. Dramatic high cheekbones, intense expressive eyes, bold presence",
        pose: "Standing power stance with confident body language, one hip cocked, arms expressing authority",
        hair_color: "jet black",
        hair_style: "Styled with natural volume, modern architectural styling",
        skin_finish: "Natural luminous glow with authentic texture",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic red polish",
        high_heels: "Sharp stiletto heels"
      },
      wardrobe: "High-fashion bondage-inspired harness bodysuit in black leather, avant-garde artistic statement",
      environment: "Industrial urban loft with exposed steel beams and dramatic shadows, minimalist concrete aesthetic",
      lighting: "Dramatic side lighting creating sculptural shadows, high-contrast urban noir atmosphere",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Low angle, powerful perspective",
        framing: "Full body in urban industrial setting"
      },
      color_grade: "High-contrast monochrome with stark blacks and metallic highlights",
      style: "Helmut Newton avant-garde high fashion with bold feminine power and graphic precision",
      quality: "Museum-quality 8K fine-art photography with impeccable detail and texture",
      figure_and_form: "Athletic sculptural form with dramatic proportions and bold architectural presence",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Structured leather materials with precise tailoring and architectural form",
      material_properties: "Matte black leather with subtle specular highlights and industrial edge"
    }
  },

  // IRVING PENN STYLE (3 concepts)
  {
    name: 'Penn - Ethereal Classical Beauty',
    data: {
      shot: "Irving Penn-style fine-art photography. Intimacy level 5/10. Premium quality.",
      subject: {
        variant: "Indian Ethereal Classical Beauty. Graceful hourglass silhouette with feminine curves. Radiant fair to wheatish complexion with subtle glow. Soft romantic features, expressive almond eyes, delicate bone structure",
        pose: "Graceful seated pose with elegant hand placement, embodying timeless classical poise",
        hair_color: "dark",
        hair_style: "Elegantly styled with classical refinement and soft framing",
        skin_finish: "Natural healthy radiance with soft glow",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural neutral manicure",
        high_heels: "not visible"
      },
      wardrobe: "Elegant silk draped gown in neutral tones, minimalist luxury with perfect draping",
      environment: "Minimalist studio with neutral gray backdrop, Penn's signature simplicity and geometric perfection",
      lighting: "Clean studio lighting with perfect shadow control, soft key light with subtle fill creating timeless elegance",
      camera: {
        focal_length: "85mm",
        aperture: "f/4.0",
        distance: "2.5 m",
        angle: "Eye-level, direct connection",
        framing: "Medium portrait emphasizing graceful pose and classical beauty"
      },
      color_grade: "Balanced natural color with cinematic depth, neutral elegant tones",
      style: "Irving Penn Minimalist perfection with graphic composition and impeccable lighting control. Irving Penn-style minimalist studio portrait, perfect lighting balance, graphic composition against neutral backdrop, timeless elegant sophistication",
      quality: "Premium 8K photography with exceptional clarity and professional retouching",
      figure_and_form: "Graceful feminine form with classical proportions, minimalist reduction and geometric balance",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Silk fabric with perfect draping and soft elegant flow",
      material_properties: "Soft silk with subtle sheen and elegant light absorption"
    }
  },

  {
    name: 'Penn - Editorial Chameleon',
    data: {
      shot: "Irving Penn-style fine-art photography. Intimacy level 6/10. Premium quality.",
      subject: {
        variant: "Indian Editorial Chameleon. Lean athletic build with model proportions. Medium to dusky complexion with healthy glow. Versatile features, strong bone structure, transformative presence",
        pose: "Confident natural pose with minimal styling, direct engagement with camera",
        hair_color: "dark",
        hair_style: "Styled with natural volume, modern professional finish",
        skin_finish: "Natural healthy radiance",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural neutral manicure",
        high_heels: "Sharp stiletto heels"
      },
      wardrobe: "Minimalist tailored blazer with clean lines, partially open revealing subtle sophistication",
      environment: "Pure neutral studio background with perfect minimalist composition",
      lighting: "Perfect studio lighting with Penn's signature control and balance",
      camera: {
        focal_length: "85mm",
        aperture: "f/4.0",
        distance: "2.5 m",
        angle: "Eye-level, direct connection",
        framing: "Classic medium shot with centered composition"
      },
      color_grade: "Balanced natural color with perfect neutrality",
      style: "Irving Penn minimalist studio mastery with graphic precision and timeless sophistication",
      quality: "Premium 8K photography with exceptional clarity and professional retouching",
      figure_and_form: "Lean athletic form with model proportions and graphic clarity",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Precise tailored fabric with clean architectural lines",
      material_properties: "Matte wool suiting with subtle texture and professional finish"
    }
  },

  {
    name: 'Penn - Art House Icon',
    data: {
      shot: "Irving Penn-style fine-art photography. Intimacy level 4/10. Premium quality.",
      subject: {
        variant: "Indian Art House Icon. Sculptural proportions with artistic presence. Distinctive complexion with unique beauty. Unconventional striking beauty, intense artistic presence, memorable bone structure",
        pose: "Artistic conceptual pose with geometric precision and creative expression",
        hair_color: "dark",
        hair_style: "Elegantly styled with artistic statement",
        skin_finish: "Natural healthy radiance",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural neutral manicure",
        high_heels: "not visible"
      },
      wardrobe: "Conceptual art-fashion piece with minimalist geometric design",
      environment: "Pure studio background with Penn's minimalist perfection",
      lighting: "Perfect controlled studio lighting emphasizing sculptural form",
      camera: {
        focal_length: "85mm",
        aperture: "f/4.0",
        distance: "2.5 m",
        angle: "Eye-level, direct connection",
        framing: "Artistic composition with geometric balance"
      },
      color_grade: "Neutral elegant tones with perfect balance",
      style: "Irving Penn fine-art minimalism with conceptual artistic gravitas",
      quality: "Premium 8K photography with exceptional clarity and professional retouching",
      figure_and_form: "Sculptural artistic form with unconventional beauty and conceptual presence",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Conceptual fabric with architectural precision",
      material_properties: "Art-fashion materials with sophisticated light interaction"
    }
  },

  // PAOLO ROVERSI STYLE (3 concepts)
  {
    name: 'Roversi - Ethereal Romance',
    data: {
      shot: "Paolo Roversi-style fine-art photography. Intimacy level 6/10. Gallery quality.",
      subject: {
        variant: "Indian Ethereal Classical Beauty. Graceful hourglass silhouette with feminine curves. Radiant fair to wheatish complexion with subtle glow. Soft romantic features, expressive almond eyes, delicate bone structure",
        pose: "Intimate close framing with soft romantic expression and vulnerable grace",
        hair_color: "dark",
        hair_style: "Loose flowing waves with soft romantic styling",
        skin_finish: "Natural luminous glow with authentic texture",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural neutral manicure",
        high_heels: "not visible"
      },
      wardrobe: "Soft flowing silk slip dress in warm tones, romantic ethereal aesthetic",
      environment: "Intimate studio with soft diffused natural light, romantic dreamy atmosphere",
      lighting: "Soft diffused lighting with romantic glow creating ethereal painterly quality",
      camera: {
        focal_length: "85mm f/1.4",
        aperture: "f/1.8",
        distance: "2 m",
        angle: "Intimate eye-level",
        framing: "Close intimate portrait with romantic framing"
      },
      color_grade: "Warm romantic tones with soft highlights and dreamy atmosphere",
      style: "Paolo Roversi Ethereal romantic imagery with soft dreamy lighting and timeless beauty. Paolo Roversi-inspired romantic fine-art portrait, soft ethereal lighting, film-like quality with gentle grain, timeless dreamy atmosphere",
      quality: "Museum-quality 8K fine-art photography with impeccable detail and texture",
      figure_and_form: "Graceful feminine form with romantic ethereal quality and painterly softness",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Soft silk flowing naturally with romantic draping",
      material_properties: "Delicate silk with soft light diffusion and romantic warmth"
    }
  },

  {
    name: 'Roversi - Sensual Vulnerability',
    data: {
      shot: "Paolo Roversi-style fine-art photography. Intimacy level 7/10. Gallery quality.",
      subject: {
        variant: "Indian Sensual Sophisticate. Curvaceous hourglass form with commanding proportions. Warm caramel to dusky tone with natural radiance. Captivating magnetic gaze, full expressive lips, sculpted features",
        pose: "Reclining with soft vulnerable expression, intimate personal connection",
        hair_color: "dark",
        hair_style: "Loose flowing waves with natural romantic styling",
        skin_finish: "Natural luminous glow with authentic texture",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural neutral manicure",
        high_heels: "not visible"
      },
      wardrobe: "Delicate lace lingerie in warm tones, romantic intimate aesthetic",
      environment: "Soft intimate studio with diffused light and romantic atmosphere",
      lighting: "Gentle diffused lighting with film-like quality and ethereal glow",
      camera: {
        focal_length: "85mm f/1.4",
        aperture: "f/1.8",
        distance: "2 m",
        angle: "Intimate eye-level",
        framing: "Close intimate framing with emotional connection"
      },
      color_grade: "Warm romantic tones with soft highlights creating dreamy painterly quality",
      style: "Paolo Roversi romantic fine-art with vulnerable intimate beauty and timeless grace",
      quality: "Museum-quality 8K fine-art photography with impeccable detail and texture",
      figure_and_form: "Curvaceous feminine form with romantic vulnerability and soft sculptural beauty",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Delicate lace with soft romantic draping and intimate texture",
      material_properties: "Sheer lace with soft diffused light and romantic warmth"
    }
  },

  {
    name: 'Roversi - Timeless Grace',
    data: {
      shot: "Paolo Roversi-style fine-art photography. Intimacy level 5/10. Gallery quality.",
      subject: {
        variant: "Indian Art House Icon. Sculptural proportions with artistic presence. Distinctive complexion with unique beauty. Unconventional striking beauty, intense artistic presence, memorable bone structure",
        pose: "Graceful artistic pose with timeless elegance and painterly quality",
        hair_color: "dark",
        hair_style: "Styled with natural volume, soft romantic finish",
        skin_finish: "Natural healthy radiance",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural neutral manicure",
        high_heels: "not visible"
      },
      wardrobe: "Flowing artistic gown with ethereal romantic aesthetic",
      environment: "Soft studio setting with Roversi's signature dreamy atmosphere",
      lighting: "Soft ethereal lighting with gentle shadows and romantic glow",
      camera: {
        focal_length: "85mm f/1.4",
        aperture: "f/1.8",
        distance: "2 m",
        angle: "Intimate eye-level",
        framing: "Graceful artistic composition with painterly quality"
      },
      color_grade: "Warm romantic tones with timeless ethereal quality",
      style: "Paolo Roversi timeless romantic fine-art with artistic gravitas and dreamy beauty",
      quality: "Museum-quality 8K fine-art photography with impeccable detail and texture",
      figure_and_form: "Sculptural artistic form with ethereal grace and romantic painterly quality",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Flowing artistic fabric with soft romantic movement",
      material_properties: "Ethereal materials with soft diffused light and timeless warmth"
    }
  },

  // HERB RITTS STYLE (3 concepts)
  {
    name: 'Ritts - Sculptural Power',
    data: {
      shot: "Herb Ritts-style fine-art photography. Intimacy level 7/10. Gallery quality.",
      subject: {
        variant: "Indian Bold Contemporary Muse. Statuesque athletic build with dramatic proportions. Rich deep complexion with flawless matte finish. Dramatic high cheekbones, intense expressive eyes, bold presence",
        pose: "Dramatic outdoor pose with body as sculptural landscape, bold powerful stance",
        hair_color: "jet black",
        hair_style: "Styled with natural volume, wind-swept dramatic effect",
        skin_finish: "Natural luminous glow with authentic texture",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic red polish",
        high_heels: "Sharp stiletto heels"
      },
      wardrobe: "Minimal sculptural piece emphasizing body form, architectural simplicity",
      environment: "Dramatic outdoor desert landscape with minimalist natural setting",
      lighting: "Natural golden hour sunlight creating dramatic sculptural shadows",
      camera: {
        focal_length: "70mm",
        aperture: "f/5.6",
        distance: "4 m",
        angle: "Natural perspective with dramatic framing",
        framing: "Full body showing sculptural form against natural landscape"
      },
      color_grade: "High-contrast monochrome with dramatic blacks and luminous highlights",
      style: "Herb Ritts Sculptural forms in high-contrast monochrome with natural outdoor settings. Herb Ritts-style sculptural monochrome photography, natural sunlight creating dramatic shadows, body as architectural form in minimalist outdoor setting",
      quality: "Museum-quality 8K fine-art photography with impeccable detail and texture",
      figure_and_form: "Athletic sculptural form as landscape, geometric precision with natural dramatic beauty",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Minimal fabric allowing sculptural body emphasis",
      material_properties: "Natural materials with dramatic light interaction and sculptural shadows"
    }
  },

  {
    name: 'Ritts - Natural Elegance',
    data: {
      shot: "Herb Ritts-style fine-art photography. Intimacy level 6/10. Gallery quality.",
      subject: {
        variant: "Indian Modern Power Icon. Athletic sculptural form with strong shoulders and defined waist. Luminous dusky complexion with warm undertones. Sharp angular bone structure, magnetic penetrating gaze, strong jawline",
        pose: "Natural powerful stance in outdoor setting, body as architectural element",
        hair_color: "jet black",
        hair_style: "Natural wind-swept styling with dramatic movement",
        skin_finish: "Natural luminous glow with authentic texture",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural neutral manicure",
        high_heels: "not visible"
      },
      wardrobe: "Simple elegant piece emphasizing natural sculptural form",
      environment: "Minimalist outdoor natural setting with geometric shadows",
      lighting: "Natural sunlight with Ritts' signature sculptural shadow play",
      camera: {
        focal_length: "70mm",
        aperture: "f/5.6",
        distance: "4 m",
        angle: "Natural perspective",
        framing: "Full body with natural landscape integration"
      },
      color_grade: "High-contrast monochrome with natural dramatic beauty",
      style: "Herb Ritts natural sculptural photography with timeless monochrome elegance",
      quality: "Museum-quality 8K fine-art photography with impeccable detail and texture",
      figure_and_form: "Athletic sculptural form with natural geometric beauty and outdoor integration",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Minimal natural fabric with simple elegant draping",
      material_properties: "Natural materials with bold light interaction and dramatic shadows"
    }
  },

  {
    name: 'Ritts - Elemental Beauty',
    data: {
      shot: "Herb Ritts-style fine-art photography. Intimacy level 6/10. Gallery quality.",
      subject: {
        variant: "Indian Editorial Chameleon. Lean athletic build with model proportions. Medium to dusky complexion with healthy glow. Versatile features, strong bone structure, transformative presence",
        pose: "Natural elemental pose integrating with outdoor environment",
        hair_color: "dark",
        hair_style: "Natural styling with wind movement and organic flow",
        skin_finish: "Natural healthy radiance",
        hand_and_nail_details: "Impeccably manicured with graceful natural placement",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural neutral manicure",
        high_heels: "not visible"
      },
      wardrobe: "Minimal natural aesthetic emphasizing body and environment harmony",
      environment: "Natural outdoor setting with dramatic elemental beauty",
      lighting: "Natural sunlight with geometric shadows and dramatic form",
      camera: {
        focal_length: "70mm",
        aperture: "f/5.6",
        distance: "4 m",
        angle: "Natural perspective",
        framing: "Full body in natural landscape with sculptural emphasis"
      },
      color_grade: "High-contrast monochrome with natural dramatic shadows",
      style: "Herb Ritts elemental sculptural photography with timeless natural beauty",
      quality: "Museum-quality 8K fine-art photography with impeccable detail and texture",
      figure_and_form: "Lean athletic form with elemental natural integration and sculptural grace",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Natural minimal fabric with organic draping",
      material_properties: "Elemental natural materials with bold light interaction"
    }
  }
];
