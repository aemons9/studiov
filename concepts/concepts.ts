import type { PromptData } from '../types';

export interface ArtisticConcept {
  name: string;
  data: PromptData;
}

const defaultSkinMicroDetails = "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing.";
const defaultFabricPhysics = "The fabric drapes naturally, with realistic creases and folds that follow the subject's form. The weave of the fabric is visible upon close inspection.";
const defaultMaterialProperties = "The material has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject's skin.";

export const artisticConcepts: ArtisticConcept[] = [
  {
    name: 'Chiaroscuro Form',
    data: {
      "shot": "Medium portrait (9:16), painterly and dramatic",
      "subject": {
        "age": "adult woman (25-30)",
        "appearance": "Indian glamour model, 36-28-38, long dark hair falling over one shoulder, profound black eyes",
        "pose": "Contemplative Seated Curl: Seated on the floor, curled slightly with knees drawn up and arms wrapped around them, head bowed in a thoughtful, classical pose.",
        "hair_color": "dark",
        "hair_style": "long, loose waves with a few stray strands catching the light",
        "skin_finish": "Natural Glow",
        "hand_and_nail_details": "Hands are relaxed and anatomically correct, with graceful, natural finger placement. The AI should prioritize correct finger count and structure.",
        "tattoos": "none",
        "piercings": "none",
        "body_art": "none",
        "nail_art": "Natural manicure, clean and simple",
        "high_heels": "not visible"
      },
      "wardrobe": "Artistic Draped Scarlet Silk: A single, long piece of flowing scarlet silk fabric, artistically draped around the body to create sculptural shapes that conceal and reveal the form.",
      "environment": "Dark Room with Wood Floor: A dark, minimalist room with aged wooden floors and a single, textured, unadorned wall, creating a contemplative atmosphere.",
      "lighting": "Painterly Chiaroscuro (Caravaggio): Dramatic, single-source Chiaroscuro lighting from the side and slightly above, illuminating part of the form while the rest falls into deep shadow, in the style of Caravaggio.",
      "camera": {
        "focal_length": "50mm",
        "aperture": "f/2.8",
        "distance": "4 m",
        "angle": "Low Angle",
        "framing": "Full Body (with Negative Space)"
      },
      "color_grade": "Painterly Desaturated (Timeless)",
      "style": "Classical-Dramatic (Boudoir)",
      "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Every micro-detail from fabric weave to skin pores is rendered with absolute clarity.",
      "figure_and_form": "Minimalist Nude (Shadow Play)",
      "skin_micro_details": defaultSkinMicroDetails,
      "fabric_physics": "The silk fabric is captured with dynamic, flowing motion. It appears lightweight, with realistic transparency where stretched and bunched, and follows the contours of the body with liquid grace.",
      "material_properties": "Liquid satin with a high specular sheen, creating brilliant, sharp highlights where the light hits directly, and falling into deep, rich shadows."
    }
  },
  {
    name: 'Graphic Silhouette',
    data: {
      "shot": "Full body portrait (9:16), elegant and fluid",
      "subject": {
        "age": "adult woman (25-30)",
        "appearance": "High-fashion glamour model, 34-26-36, statuesque figure",
        "pose": "Silhouette in Profile: Standing or sitting in profile against a light source (like a window), creating a strong, artistic silhouette that highlights the body's form.",
        "hair_color": "dark",
        "hair_style": "a polished, sleek high bun, for an elegant and statuesque profile.",
        "skin_finish": "Matte & Flawless",
        "hand_and_nail_details": "Hands are relaxed and anatomically correct, with graceful, natural finger placement. The AI should prioritize correct finger count and structure.",
        "tattoos": "none",
        "piercings": "none",
        "body_art": "none",
        "nail_art": "Natural manicure, clean and simple",
        "high_heels": "not visible"
      },
      "wardrobe": "Nude with Shadow & Obscurity: Artistic nude where the 'wardrobe' is the clever use of deep shadows, draped fabric, or parts of the body itself to strategically obscure and reveal curves and form.",
      "environment": "Empty Dance Studio / Loft: An empty dance studio or artist's loft with smooth, light grey floors and walls. The space is vast and uncluttered.",
      "lighting": "Dramatic Rim Lighting: Dramatic rim lighting that outlines the subject against a dark background, emphasizing their silhouette and creating a bold, graphic effect.",
      "camera": {
        "focal_length": "35mm",
        "aperture": "f/8.0 (Sharp BG)",
        "distance": "5 m (Full Body)",
        "angle": "Eye-Level",
        "framing": "Full Body (with Negative Space)"
      },
      "color_grade": "High-Contrast B&W",
      "style": "Graphic Fashion-Editorial",
      "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus.",
      "figure_and_form": "Silhouette Through Sheer Fabric",
      "skin_micro_details": "Perfectly smooth, high-fashion editorial skin. While pores are minimized, a micro-texture is retained to avoid a plastic look. Highlights show a gentle falloff.",
      "fabric_physics": defaultFabricPhysics,
      "material_properties": defaultMaterialProperties
    }
  },
  {
    name: `Helmut Newton's Gaze`,
    data: {
      "shot": "Medium portrait (4:5), high-contrast and graphic",
      "subject": {
        "age": "adult woman (25-30)",
        "appearance": "High-fashion glamour model, 34-26-36, flawless porcelain skin tone",
        "pose": "Commanding Seated Lean: Seated on a low stool, leaning to one side with a powerful, commanding expression, looking down towards the camera.",
        "hair_color": "jet black",
        "hair_style": "long dark hair styled sleek and straight for a graphic, high-fashion look.",
        "skin_finish": "Matte & Flawless",
        "hand_and_nail_details": "Impeccably Manicured",
        "tattoos": "none",
        "piercings": "none",
        "body_art": "none",
        "nail_art": "Classic Red Polish",
        "high_heels": "Sharp Stiletto Heels"
      },
      "wardrobe": "High-Gloss Latex Catsuit: A skin-tight, full-body catsuit made from high-gloss latex, emphasizing a sleek, futuristic, and powerful silhouette.",
      "environment": "Luxury Hotel (Art Deco)",
      "lighting": "Graphic Spotlight ('Throne of Light')",
      "camera": {
        "focal_length": "35mm",
        "aperture": "f/5.6",
        "distance": "3 m (Medium)",
        "angle": "Very low angle, shot from near floor level, looking up.",
        "framing": "Three-Quarters (from Shin)"
      },
      "color_grade": "Severe Monochromatic B&W",
      "style": "Helmut Newton Inspired",
      "quality": "RAW Cinematic (Helmut Newton)",
      "figure_and_form": "Sculpted Form (Opaque)",
      "skin_micro_details": "Perfectly smooth, high-fashion editorial skin. While pores are minimized, a micro-texture is retained to avoid a plastic look. Highlights show a gentle falloff.",
      "fabric_physics": "The latex clings perfectly to the form, creating a second skin with no visible creases or folds, only smooth, continuous surfaces.",
      "material_properties": "High-gloss black latex that acts like a mirror, reflecting the light source and environment with sharp, distorted highlights. The material appears slick and futuristic."
    }
  },
  {
    name: 'Intimate Morning Light',
    data: {
      "shot": "Intimate Close-up shot, focusing on a specific feature like the lips, eyes, or hands, creating a sense of closeness and personal connection.",
      "subject": {
        "age": "Young adult woman (20-25)",
        "appearance": "Indian fashion model, radiant skin tone, a captivating and energetic gaze.",
        "pose": "Relaxed & Vulnerable: Lying on a soft surface like a bed or rug, looking at the camera with a soft, relaxed expression, conveying a sense of trust and vulnerability.",
        "hair_color": "dark",
        "hair_style": "a messy bun with face-framing tendrils for a relaxed, candid feel.",
        "skin_finish": "Dewy & Luminous",
        "hand_and_nail_details": "Natural & Unadorned",
        "tattoos": "none",
        "piercings": "none",
        "body_art": "none",
        "nail_art": "Natural manicure, clean and simple",
        "high_heels": "not visible"
      },
      "wardrobe": "Unbuttoned Shirt & Briefs: A crisp, white, slightly oversized formal shirt, unbuttoned and casually draped off one shoulder, paired with simple, elegant lingerie briefs.",
      "environment": "Intimate Bedroom",
      "lighting": "Soft, directional window light (emulating a large octabox) that wraps around the subject's features, creating soft shadows that sculpt the face and form. A subtle reflector provides fill light to retain detail in the shadows.",
      "camera": {
        "focal_length": "50mm",
        "aperture": "f/1.8 (Creamy BG)",
        "distance": "1.5 m (Close-up)",
        "angle": "Eye-Level",
        "framing": "Tight Medium Shot"
      },
      "color_grade": "Warm & Natural",
      "style": "Private & Personal",
      "quality": "Shot on Kodak Portra 400. 8k, natural textures, beautiful color rendition, and a subtle, pleasing film grain. High-end cinematic quality.",
      "figure_and_form": "Natural form, emphasizing the realistic drape of fabric over the subject's physique. The lighting and pose are composed to be tasteful and artistic.",
      "skin_micro_details": defaultSkinMicroDetails,
      "fabric_physics": "The cotton shirt has a soft, worn-in texture with natural creases. The delicate weave of the briefs' lace trim is visible.",
      "material_properties": "The matte cotton of the shirt contrasts with the delicate sheen of the briefs' silk panels."
    }
  },
  {
    name: 'Golden Hour Intimacy',
    data: {
        "shot": "Medium shot from the waist up, showing the subject and their immediate environment.",
        "subject": {
            "age": "Adult woman (25-30)",
            "appearance": "Sun-Kissed Fitness Model",
            "pose": "Thoughtful & Enchanting Glance",
            "hair_color": "honey blonde",
            "hair_style": "long, loose waves with a few stray strands catching the light",
            "skin_finish": "Dewy & Luminous",
            "hand_and_nail_details": "Natural & Unadorned",
            "tattoos": "none",
            "piercings": "none",
            "body_art": "none",
            "nail_art": "Natural manicure, clean and simple",
            "high_heels": "not visible"
        },
        "wardrobe": "Intimate Lingerie Set",
        "environment": "Sun-Drenched Tuscan Villa",
        "lighting": "Soft, directional window light (emulating a large octabox) that wraps around the subject's features, creating soft shadows that sculpt the face and form. A subtle reflector provides fill light to retain detail in the shadows.",
        "camera": {
            "focal_length": "85mm f/1.4 Portrait Lens",
            "aperture": "f/1.8 (Creamy BG)",
            "distance": "3 m (Medium)",
            "angle": "Eye-Level",
            "framing": "Tight Medium Shot"
        },
        "color_grade": "Warm & Natural",
        "style": "Romantic Fashion",
        "quality": "Shot on Kodak Portra 400. 8k, natural textures, beautiful color rendition, and a subtle, pleasing film grain. High-end cinematic quality.",
        "figure_and_form": "Natural Form",
        "skin_micro_details": defaultSkinMicroDetails,
        "fabric_physics": defaultFabricPhysics,
        "material_properties": defaultMaterialProperties
    }
  },
  {
    name: 'Torn & Raw',
    data: {
        "shot": "Cowboy shot, framed from mid-thigh up, ideal for showing action or confidence.",
        "subject": {
            "age": "Young adult woman (20-25)",
            "appearance": "Ethereal Alt Model",
            "pose": "Confident Stand",
            "hair_color": "pastel pink",
            "hair_style": "sharp, asymmetrical bob",
            "skin_finish": "Matte & Flawless",
            "hand_and_nail_details": "Expressive Artist Hands",
            "tattoos": "Intricate Sleeve",
            "piercings": "Subtle Gold Septum",
            "body_art": "none",
            "nail_art": "Black Matte Nails",
            "high_heels": "Sharp Stiletto Heels"
        },
        "wardrobe": "Stylized Torn Fishnets",
        "environment": "Gritty Urban Loft",
        "lighting": "Dynamic Strobe Flash",
        "camera": {
            "focal_length": "35mm",
            "aperture": "f/5.6",
            "distance": "3 m (Medium)",
            "angle": "Low Angle",
            "framing": "Full Body (with Negative Space)"
        },
        "color_grade": "Cool Cinematic",
        "style": "Gritty Urban Realism",
        "quality": "RAW Cinematic (Helmut Newton)",
        "figure_and_form": "Sculpted Form (Opaque)",
        "skin_micro_details": defaultSkinMicroDetails,
        "fabric_physics": "The fishnet material is stretched and torn, creating a chaotic, geometric pattern against the skin. Individual fibers are visible.",
        "material_properties": "The matte black of the fishnet material absorbs light, creating a stark contrast with the skin visible through the gaps."
    }
  },
  {
    name: 'Ephemeral Veil',
    data: {
        "shot": "Full Body Shot",
        "subject": {
            "age": "Adult woman (25-30)",
            "appearance": "Gothic Artist",
            "pose": "Elegant Recline",
            "hair_color": "silver gray",
            "hair_style": "long, loose waves with a few stray strands catching the light",
            "skin_finish": "Natural Glow",
            "hand_and_nail_details": "Graceful & Anatomically Correct",
            "tattoos": "none",
            "piercings": "none",
            "body_art": "Gold Leaf Accents",
            "nail_art": "Opalescent Nail Art",
            "high_heels": "not visible"
        },
        "wardrobe": "Transparent Chiffon Gown",
        "environment": "Baroque Palace Ballroom",
        "lighting": "Filtered Light Moiré Pattern",
        "camera": {
            "focal_length": "50mm",
            "aperture": "f/2.8",
            "distance": "5 m (Full Body)",
            "angle": "Dutch Angle",
            "framing": "Full Body (with Negative Space)"
        },
        "color_grade": "Vintage Sepia",
        "style": "Ethereal Dreamscape",
        "quality": "Shot on a Leica M11 with a Noctilux 50mm f/0.95 lens. Extremely shallow depth of field, beautiful bokeh, and a dreamy, ethereal quality.",
        "figure_and_form": "Silhouette Through Sheer Fabric",
        "skin_micro_details": defaultSkinMicroDetails,
        "fabric_physics": "The chiffon is almost weightless, captured mid-flutter. It is highly transparent, with light diffusing through it to create a soft halo effect.",
        "material_properties": "The chiffon has no sheen, acting as a soft diffusion layer for the light. The gold leaf has a hard, metallic specular reflection."
    }
  },
  {
    name: 'Lace & Light',
    data: {
      "shot": "Medium shot from the waist up, showing the subject and their immediate environment.",
      "subject": {
        "age": "Adult woman (25-30)",
        "appearance": "Indian glamour model, 36-28-38, with a soft, intimate expression.",
        "pose": "Relaxed & Vulnerable: Lying on a soft surface like a bed or rug, looking at the camera with a soft, relaxed expression, conveying a sense of trust and vulnerability.",
        "hair_color": "dark",
        "hair_style": "a messy bun with face-framing tendrils for a relaxed, candid feel.",
        "skin_finish": "Dewy & Luminous",
        "hand_and_nail_details": "Graceful & Anatomically Correct",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Natural manicure, clean and simple", "high_heels": "not visible"
      },
      "wardrobe": "A delicate and intricate matching lingerie set in silk and lace, in a classic black, emphasizing fine details and textures.",
      "environment": "Intimate Bedroom: An intimate bedroom setting with soft, unmade sheets on a bed, morning light filtering through a window, creating a personal and relaxed atmosphere.",
      "lighting": "Soft, directional window light that wraps around the subject's features, creating soft shadows that sculpt the face and form.",
      "camera": {
        "focal_length": "50mm",
        "aperture": "f/1.8 (Creamy BG)",
        "distance": "1.5 m (Close-up)",
        "angle": "Eye-Level",
        "framing": "Tight medium shot, from the mid-torso up, emphasizing facial expression, hand placement, and the texture of the wardrobe."
      },
      "color_grade": "Warm & Natural",
      "style": "Private & Personal",
      "quality": "Shot on Kodak Portra 400. 8k, natural textures, beautiful color rendition, and a subtle, pleasing film grain.",
      "figure_and_form": "Natural Form",
      "skin_micro_details": defaultSkinMicroDetails,
      "fabric_physics": defaultFabricPhysics,
      "material_properties": "The material is a combination of intricate floral lace patterns and fine, sheer mesh. Light passes through the mesh, creating a delicate pattern on the skin, while the lace remains opaque."
    }
  },
  {
    name: 'Mesh & Mood',
    data: {
      "shot": "Full body shot, capturing the entire subject from head to toe, showcasing wardrobe and pose.",
      "subject": {
        "age": "adult woman (25-30)",
        "appearance": "High-fashion glamour model, 34-26-36, flawless porcelain skin tone",
        "pose": "Architectural Power Stance: Standing with a powerful, almost architectural posture, creating strong lines that emphasize the structure of the garment.",
        "hair_color": "jet black",
        "hair_style": "a severe, slicked-back style, creating a sharp and modern look.",
        "skin_finish": "Matte & Flawless",
        "hand_and_nail_details": "Impeccably Manicured",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Glossy Black Polish", "high_heels": "Architectural High Heels"
      },
      "wardrobe": "Full-Body Sheer Mesh Catsuit: A skin-tight catsuit made from fine, sheer mesh for a bold, graphic silhouette.",
      "environment": "Minimalist Concrete Studio",
      "lighting": "Graphic Spotlight ('Throne of Light')",
      "camera": {
        "focal_length": "35mm",
        "aperture": "f/8.0 (Sharp BG)",
        "distance": "5 m (Full Body)",
        "angle": "Very low angle, shot from near floor level, looking up.",
        "framing": "Full Body (with Negative Space)"
      },
      "color_grade": "Severe Monochromatic B&W",
      "style": "Graphic Fashion-Editorial",
      "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus.",
      "figure_and_form": "Silhouette Through Sheer Fabric",
      "skin_micro_details": defaultSkinMicroDetails,
      "fabric_physics": defaultFabricPhysics,
      "material_properties": defaultMaterialProperties
    }
  },
  {
    name: 'Nylon Noir',
    data: {
      "shot": "Medium shot from the waist up, showing the subject and their immediate environment.",
      "subject": {
        "age": "adult woman (25-30)",
        "appearance": "Gothic artist with pale skin, dark makeup, and an introspective, mysterious gaze",
        "pose": "Leaning on Wall: Casually leaning against a textured wall, one leg bent, creating a relaxed but composed triangular shape with the body.",
        "hair_color": "dark",
        "hair_style": "sharp, asymmetrical bob",
        "skin_finish": "Natural Glow",
        "hand_and_nail_details": "Expressive Artist Hands",
        "tattoos": "none", "piercings": "Subtle Gold Septum", "body_art": "none",
        "nail_art": "Black Matte Nails", "high_heels": "Sharp Stiletto Heels"
      },
      "wardrobe": "Nylon Two-Piece Bodysuit with sheer black mesh stockings",
      "environment": "Dim Cocktail Bar",
      "lighting": "Dappled Light (Venetian Blinds): Sunlight or moonlight filtering through Venetian blinds, casting a dramatic pattern of sharp light and shadow stripes across the subject and the room.",
      "camera": {
        "focal_length": "50mm",
        "aperture": "f/2.8",
        "distance": "3 m (Medium)",
        "angle": "Dutch Angle",
        "framing": "Tight Medium Shot"
      },
      "color_grade": "Cool Cinematic",
      "style": "Neo-noir Sensuality",
      "quality": "RAW Cinematic (Helmut Newton)",
      "figure_and_form": "Revealing Curves (Shadow Play)",
      "skin_micro_details": defaultSkinMicroDetails,
      "fabric_physics": defaultFabricPhysics,
      "material_properties": defaultMaterialProperties
    }
  },
  {
    name: 'Private Session',
    data: {
      "shot": "Full body shot, capturing the entire subject from head to toe, showcasing wardrobe and pose.",
      "subject": {
        "age": "adult woman (25-30)",
        "appearance": "Ethereal alternative model (height 5'9\\\"), slender, statuesque figure with pale skin.",
        "pose": "Dynamic Floor S-Curve: Sitting on the floor in a dynamic S-curve, one leg extended, torso twisted with one arm braced behind, creating a fluid, sculptural line.",
        "hair_color": "dark",
        "hair_style": "a messy bun with face-framing tendrils for a relaxed, candid feel.",
        "skin_finish": "Natural Glow",
        "hand_and_nail_details": "Graceful & Anatomically Correct",
        "tattoos": "Subtle Arm & Collarbone", "piercings": "none", "body_art": "none",
        "nail_art": "Natural manicure, clean and simple", "high_heels": "not visible"
      },
      "wardrobe": "Graphic Mesh Thong-Art: A minimalist yet futuristic piece focusing on a graphic thong made of sheer, structured mesh, creating bold lines against the skin.",
      "environment": "Gritty Urban Loft",
      "lighting": "Soft Diffused Studio Light",
      "camera": {
        "focal_length": "50mm",
        "aperture": "f/4.0",
        "distance": "4.5 m",
        "angle": "Low Angle",
        "framing": "Full Body (with Negative Space)"
      },
      "color_grade": "Warm & Natural",
      "style": "Fine Art Sensuality",
      "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus.",
      "figure_and_form": "Minimalist Nude (Shadow Play)",
      "skin_micro_details": defaultSkinMicroDetails,
      "fabric_physics": defaultFabricPhysics,
      "material_properties": defaultMaterialProperties
    }
  },
  {
    name: 'Sensual: Shadow & Sheer',
    data: {
        "shot": "Intimate close-up shot, focusing on the interplay of light, shadow, and fabric.",
        "subject": {
            "age": "adult woman (25-30)",
            "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, captivating dark eyes, and a sensual, intimate gaze.",
            "pose": "Arching Back on Bed: Lying on a bed, back gently arched to create a graceful curve, head turned towards the camera with a soft expression.",
            "hair_color": "jet black",
            "hair_style": "long dark hair tied in a loose, low bun with strands escaping, creating a soft, elegant look.",
            "skin_finish": "Natural Glow",
            "hand_and_nail_details": "Hands are relaxed and anatomically correct, with graceful, natural finger placement.",
            "tattoos": "none", "piercings": "none", "body_art": "none",
            "nail_art": "Natural manicure, clean and simple", "high_heels": "not visible"
        },
        "wardrobe": "A transparent, oversized white formal shirt, unbuttoned and falling off one shoulder, revealing a delicate black mesh thong.",
        "environment": "Messy Luxury Hotel Room, with morning light creating a soft, hazy atmosphere.",
        "lighting": "Dappled Light (Venetian Blinds), casting a dramatic pattern of sharp light and shadow stripes across her body and the rumpled sheets.",
        "camera": {
            "focal_length": "85mm f/1.4 Portrait Lens",
            "aperture": "f/1.8 (Creamy BG)",
            "distance": "2 m",
            "angle": "Slightly high angle, looking down, creating a sense of intimacy.",
            "framing": "Tight medium shot, from the mid-torso up, focusing on the form under the sheer fabric."
        },
        "color_grade": "Warm & Natural",
        "style": "Private & Personal, Fine Art Sensuality",
        "quality": "Shot on Kodak Portra 400. 8k, natural textures, beautiful color rendition, and a subtle, pleasing film grain.",
        "figure_and_form": "Silhouette Through Sheer Fabric",
        "skin_micro_details": defaultSkinMicroDetails,
        "fabric_physics": defaultFabricPhysics,
        "material_properties": defaultMaterialProperties
    }
  },
  {
      name: 'Sensual: Concrete & Lace',
      data: {
          "shot": "Full body portrait (9:16), contrasting raw and delicate textures.",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and a powerful, direct gaze.",
              "pose": "Dynamic Floor S-Curve: Sitting on the floor in a dynamic S-curve, one leg extended, torso twisted with one arm braced behind, creating a fluid, sculptural line.",
              "hair_color": "jet black",
              "hair_style": "a severe, slicked-back style, creating a sharp and modern look.",
              "skin_finish": "Cinematic",
              "hand_and_nail_details": "Impeccably Manicured with glossy black polish.",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Glossy Black Polish", "high_heels": "not visible"
          },
          "wardrobe": "An intricate, high-fashion black lace bodysuit with strategic cutouts and sheer panels.",
          "environment": "Minimalist Concrete Studio: A minimalist studio with a dark grey textured concrete wall and polished floor that reflects subtle highlights.",
          "lighting": "Soft Side-Wrap Light (Octabox): A single, large soft light source placed to the side, creating a soft, wrapping light that highlights contours against the dark background.",
          "camera": {
              "focal_length": "50mm",
              "aperture": "f/4.0",
              "distance": "4 m",
              "angle": "Low Angle, emphasizing the power and form of the pose.",
              "framing": "Full Body (with Negative Space)"
          },
          "color_grade": "Cool Cinematic with deep blues and cyans in the shadows.",
          "style": "Graphic Fashion-Editorial",
          "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus on the eyes and lace details.",
          "figure_and_form": "The subject's form is sculpted by the tight lace and dramatic lighting.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
      name: 'Sensual: Rainy Window',
      data: {
          "shot": "Medium portrait (3:4), melancholic and intimate.",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and a thoughtful, distant expression.",
              "pose": "Leaning against a large window, one hand pressed against the glass, looking out at the rain-streaked city.",
              "hair_color": "jet black",
              "hair_style": "long, loose waves, appearing slightly damp from humidity.",
              "skin_finish": "Dewy & Luminous",
              "hand_and_nail_details": "Natural & Unadorned.",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Natural manicure, clean and simple", "high_heels": "not visible"
          },
          "wardrobe": "A sheer, transparent mini-skirt and matching transparent top, creating a subtle wet-look effect against the skin.",
          "environment": "A minimalist high-rise apartment with a floor-to-ceiling window revealing a rain-streaked, out-of-focus city at twilight.",
          "lighting": "Soft, cool, ambient light from the overcast sky outside, with gentle interior light catching the moisture on the window.",
          "camera": {
              "focal_length": "50mm",
              "aperture": "f/2.8",
              "distance": "2.5 m",
              "angle": "Eye-Level, shot from slightly inside the room.",
              "framing": "Medium shot from the waist up, capturing her reflection in the glass."
          },
          "color_grade": "Cool Cinematic",
          "style": "Cinematic Noir, Private & Personal",
          "quality": "IMAX 70mm Cinematic still. Incredible detail, rich deep colors, visible film grain.",
          "figure_and_form": "Silhouette Through Sheer Fabric, with form subtly revealed by the transparent, damp clothing.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
      name: 'Sensual: Minimalist Form',
      data: {
          "shot": "Artistic full-body nude study (9:16).",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, athletic and toned physique.",
              "pose": "Fine Art Contrapposto: A classic fine art pose inspired by Renaissance sculpture, with the body's weight shifted to one foot, creating a gentle S-curve in the torso.",
              "hair_color": "jet black",
              "hair_style": "a polished, sleek high bun, for an elegant and statuesque profile.",
              "skin_finish": "Natural Glow",
              "hand_and_nail_details": "Graceful & Anatomically Correct.",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Natural manicure, clean and simple", "high_heels": "not visible"
          },
          "wardrobe": "A single high-waisted, minimalist black mesh thong. The rest of the body is bare, sculpted by light.",
          "environment": "Empty Dance Studio / Loft with smooth, light grey floors and walls, creating vast, uncluttered negative space.",
          "lighting": "Hard High-Angle Studio light: Hard, directional warm studio lighting from a high side angle, creating dramatic, sharp shadows and brilliant highlights that intricately sculpt textures.",
          "camera": {
              "focal_length": "35mm",
              "aperture": "f/8.0 (Sharp BG)",
              "distance": "5 m",
              "angle": "Eye-Level",
              "framing": "Full Body (with Negative Space)"
          },
          "color_grade": "High-Contrast B&W, with deep, crushed blacks and brilliant, clean whites.",
          "style": "Fine-Art Dance Photography, Graphic Fashion-Editorial",
          "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus.",
          "figure_and_form": "Minimalist Nude (Shadow Play), where light and shadow sculpt the body, revealing and concealing form.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
      name: 'Sensual: Office After Hours',
      data: {
          "shot": "Cinematic medium shot (16:9), exuding power and confidence.",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and a commanding, intense gaze.",
              "pose": "Confident & Bold Stare: Seated on the edge of a large executive desk, leaning forward slightly, looking directly and intensely into the camera.",
              "hair_color": "jet black",
              "hair_style": "elegant, flowing ponytail.",
              "skin_finish": "Matte & Flawless",
              "hand_and_nail_details": "Impeccably Manicured with classic red polish.",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Classic Red Polish", "high_heels": "Sharp Stiletto Heels"
          },
          "wardrobe": "A transparent black business suit. The blazer is open, and the skirt is sheer, both worn over an intricate black lace thong and bralette set.",
          "environment": "A sleek, modern office space at night, with glass walls, and the ambient glow of the city skyline out of focus in the background.",
          "lighting": "Moody cinematic lighting from a single desk lamp, creating deep shadows and a glamorous, intimate feel.",
          "camera": {
              "focal_length": "50mm",
              "aperture": "f/2.8",
              "distance": "3 m",
              "angle": "Low Angle, making the subject appear powerful.",
              "framing": "Medium shot from the waist up."
          },
          "color_grade": "Cool Cinematic, with desaturated tones.",
          "style": "Helmut Newton Inspired, Neo-noir Sensuality",
          "quality": "RAW Cinematic (Helmut Newton). 8k, natural textures, no artificial plastic look, high-end cinematic quality.",
          "figure_and_form": "The sheer suit reveals the curves and the lingerie beneath, a play on power dressing and sensuality.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
    name: 'Intimate: Midnight Mesh',
    data: {
        "shot": "Full body portrait (9:16), focused on form and texture.",
        "subject": {
            "age": "adult woman (25-30)",
            "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and a powerful, introspective gaze.",
            "pose": "Dynamic Floor S-Curve: Sitting on the floor in a dynamic S-curve, one leg extended, torso twisted with one arm braced behind, creating a fluid, sculptural line.",
            "hair_color": "jet black",
            "hair_style": "a severe, slicked-back style, creating a sharp and modern look.",
            "skin_finish": "Natural Glow",
            "hand_and_nail_details": "Hands are relaxed and anatomically correct, with graceful, natural finger placement.",
            "tattoos": "none", "piercings": "none", "body_art": "none",
            "nail_art": "Glossy Black Polish", "high_heels": "not visible"
        },
        "wardrobe": "A minimal bodysuit made from a wide, high-texture black nylon mesh, tightly fitted to reveal the body's form and curves in an artistic, sensual way.",
        "environment": "Minimalist Concrete Studio: A minimalist studio with a dark grey textured concrete wall and polished floor that reflects subtle highlights.",
        "lighting": "Painterly Chiaroscuro (Caravaggio): Dramatic, single-source Chiaroscuro lighting from the side and slightly above, illuminating part of the form while the rest falls into deep shadow.",
        "camera": {
            "focal_length": "50mm", "aperture": "f/4.0", "distance": "4 m",
            "angle": "Low Angle",
            "framing": "Full Body (with Negative Space)"
        },
        "color_grade": "High-Contrast B&W",
        "style": "Fine Art Sensuality",
        "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus.",
        "figure_and_form": "The subject's form is sculpted by the tight mesh fabric and dramatic lighting, emphasizing the silhouette and texture.",
        "skin_micro_details": defaultSkinMicroDetails,
        "fabric_physics": defaultFabricPhysics,
        "material_properties": defaultMaterialProperties
    }
  },
  {
      name: 'Intimate: Transparent Office',
      data: {
          "shot": "Cinematic medium shot (16:9), exuding power and confidence.",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and a commanding, intense gaze.",
              "pose": "Confident & Bold Stare: Seated on the edge of a large executive desk, leaning forward slightly, looking directly and intensely into the camera.",
              "hair_color": "jet black",
              "hair_style": "elegant, flowing ponytail.",
              "skin_finish": "Matte & Flawless",
              "hand_and_nail_details": "Impeccably Manicured with classic red polish.",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Classic Red Polish", "high_heels": "Sharp Stiletto Heels"
          },
          "wardrobe": "A slightly transparent black mini-skirt and matching bra-sized top, with no inner lingerie, creating a play of light and fabric texture. A bold, artistic, and private fashion statement.",
          "environment": "A sleek, modern office space at night, with glass walls and the ambient glow of the city skyline out of focus in the background.",
          "lighting": "Moody cinematic lighting from a single desk lamp, creating deep shadows and a glamorous, intimate feel.",
          "camera": {
              "focal_length": "50mm", "aperture": "f/2.8", "distance": "3 m",
              "angle": "Low Angle, making the subject appear powerful.",
              "framing": "Medium shot from the waist up."
          },
          "color_grade": "Cool Cinematic, with desaturated tones.",
          "style": "Helmut Newton Inspired, Neo-noir Sensuality",
          "quality": "RAW Cinematic (Helmut Newton). 8k, natural textures, no artificial plastic look, high-end cinematic quality.",
          "figure_and_form": "The transparent outfit reveals curves through the interplay of light and shadow, a play on power dressing and sensuality.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
      name: 'Intimate: Hotel Haze',
      data: {
          "shot": "Intimate close-up shot, creating a sense of closeness and personal connection.",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and a soft, intimate expression.",
              "pose": "Confident Recline on Bed: Reclining on a messy bed with an arm resting behind her head, one leg bent, exuding a bold and natural confidence.",
              "hair_color": "jet black",
              "hair_style": "a messy bun with face-framing tendrils for a relaxed, candid feel.",
              "skin_finish": "Dewy & Luminous",
              "hand_and_nail_details": "Natural & Unadorned.",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Natural manicure, clean and simple", "high_heels": "not visible"
          },
          "wardrobe": "An evocative lingerie set featuring a minimal fabric g-string and a delicate, graphic bralette in black mesh, focusing on artistic sensuality.",
          "environment": "Messy Luxury Hotel Room: A dimly lit luxurious hotel room, with a messy king-sized bed with white silk sheets and soft morning light.",
          "lighting": "Soft, directional window light that wraps around the subject's features, creating soft shadows that sculpt the face and form.",
          "camera": {
              "focal_length": "85mm f/1.4 Portrait Lens", "aperture": "f/1.8 (Creamy BG)", "distance": "2 m",
              "angle": "Eye-Level, creating a direct and personal connection with the subject.",
              "framing": "Tight medium shot, from the mid-torso up."
          },
          "color_grade": "Warm & Natural",
          "style": "Private & Personal",
          "quality": "Shot on Kodak Portra 400. 8k, natural textures, beautiful color rendition, and a subtle, pleasing film grain.",
          "figure_and_form": "Natural form, emphasizing the realistic drape of fabric over the subject's physique. The lighting and pose are composed to be tasteful and artistic.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
      name: 'Intimate: Netted Form',
      data: {
          "shot": "Artistic full-body nude study (9:16).",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, athletic and toned physique.",
              "pose": "Fine Art Contrapposto: A classic fine art pose inspired by Renaissance sculpture, with the body's weight shifted to one foot, creating a gentle S-curve in the torso.",
              "hair_color": "jet black",
              "hair_style": "a polished, sleek high bun, for an elegant and statuesque profile.",
              "skin_finish": "Natural Glow",
              "hand_and_nail_details": "Graceful & Anatomically Correct.",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Natural manicure, clean and simple", "high_heels": "not visible"
          },
          "wardrobe": "A single high-waisted, porous black nylon mesh netted thong that reveals skin tones. The rest of the body is bare, sculpted by light.",
          "environment": "Empty Dance Studio / Loft with smooth, light grey floors and walls, creating vast, uncluttered negative space.",
          "lighting": "Hard High-Angle Studio light: Hard, directional warm studio lighting from a high side angle, creating dramatic, sharp shadows and brilliant highlights that intricately sculpt textures.",
          "camera": {
              "focal_length": "35mm", "aperture": "f/8.0 (Sharp BG)", "distance": "5 m",
              "angle": "Eye-Level",
              "framing": "Full Body (with Negative Space)"
          },
          "color_grade": "High-Contrast B&W, with deep, crushed blacks and brilliant, clean whites.",
          "style": "Fine-Art Dance Photography, Graphic Fashion-Editorial",
          "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus.",
          "figure_and_form": "Minimalist Nude (Shadow Play), where light and shadow sculpt the body, revealing and concealing form.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
      name: 'Intimate: Sheer Suit',
      data: {
          "shot": "Full Body Shot, capturing a powerful and modern aesthetic.",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and a confident, direct gaze.",
              "pose": "Confident Stand: Standing confidently, facing the camera with a strong posture, one hand on hip, looking directly into the lens.",
              "hair_color": "jet black",
              "hair_style": "long dark hair styled sleek and straight for a graphic, high-fashion look.",
              "skin_finish": "Cinematic",
              "hand_and_nail_details": "Impeccably Manicured",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Classic Red Polish", "high_heels": "Sharp Stiletto Heels"
          },
          "wardrobe": "A transparent women's suit, with a sheer skirt and an open, sheer blazer, worn over a minimal black mesh bralette and thong set.",
          "environment": "Gritty Urban Loft: A gritty urban loft with exposed brick, pipes, large industrial windows, and a raw, edgy feel.",
          "lighting": "Cinematic Volumetric Lighting, with strong beams of light cutting through atmospheric haze, creating a sense of depth and mystery.",
          "camera": {
              "focal_length": "35mm", "aperture": "f/4.0", "distance": "5 m",
              "angle": "Low Angle",
              "framing": "Full Body (with Negative Space)"
          },
          "color_grade": "Cool Cinematic",
          "style": "Gritty Urban Realism",
          "quality": "IMAX 70mm Cinematic still. Incredible detail, epic scope, and rich, deep colors. Visible film grain.",
          "figure_and_form": "The sheer suit reveals the curves and the lingerie beneath, a play on power dressing and sensuality.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
      name: 'Office: Midnight Boardroom',
      data: {
          "shot": "Cinematic medium shot (16:9), exuding power and confidence.",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and a commanding, intense gaze.",
              "pose": "Confident & Bold Stare: Seated on the edge of a large executive desk, leaning forward slightly, looking directly and intensely into the camera.",
              "hair_color": "jet black",
              "hair_style": "elegant, flowing ponytail.",
              "skin_finish": "Matte & Flawless",
              "hand_and_nail_details": "Impeccably Manicured with classic red polish.",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Classic Red Polish", "high_heels": "Sharp Stiletto Heels"
          },
          "wardrobe": "A crisp, white formal shirt, unbuttoned to the navel, revealing an architectural foundation garment composed of a transparent structured bodice element and matching tailored lower garment.",
          "environment": "A sleek, modern office space at night, with glass walls and the ambient glow of the city skyline out of focus in the background.",
          "lighting": "Moody cinematic lighting from a single desk lamp, creating deep shadows and a glamorous, intimate feel.",
          "camera": {
              "focal_length": "50mm", "aperture": "f/2.8", "distance": "3 m",
              "angle": "Low Angle, making the subject appear powerful.",
              "framing": "Medium shot from the waist up."
          },
          "color_grade": "Cool Cinematic, with desaturated tones.",
          "style": "Helmut Newton Inspired, Neo-noir Sensuality",
          "quality": "RAW Cinematic (Helmut Newton). 8k, natural textures, no artificial plastic look, high-end cinematic quality.",
          "figure_and_form": "The interplay of formal wear and foundation garments suggests power and sensuality, sculpted by shadow.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
      name: 'Office: After Hours Noir',
      data: {
          "shot": "Medium portrait (3:4), melancholic and intimate.",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and an introspective, mysterious gaze.",
              "pose": "Leaning against a large window, one hand pressed against the glass, looking out at the rain-streaked city.",
              "hair_color": "jet black",
              "hair_style": "long, loose waves, appearing slightly damp from humidity.",
              "skin_finish": "Dewy & Luminous",
              "hand_and_nail_details": "Natural & Unadorned.",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Natural manicure, clean and simple", "high_heels": "not visible"
          },
          "wardrobe": "A designer set featuring a high-waisted, black netted tailored lower garment and a matching couture upper piece with intricate patterns.",
          "environment": "A sleek, modern office space at night, with a floor-to-ceiling window revealing a rain-streaked, out-of-focus city at twilight.",
          "lighting": "Dappled Light (Venetian Blinds), casting a dramatic pattern of sharp light and shadow stripes across the subject and the room.",
          "camera": {
              "focal_length": "50mm", "aperture": "f/2.8", "distance": "2.5 m",
              "angle": "Eye-Level, shot from slightly inside the room.",
              "framing": "Medium shot from the waist up, capturing her reflection in the glass."
          },
          "color_grade": "Cool Cinematic",
          "style": "Cinematic Noir, Private & Personal",
          "quality": "IMAX 70mm Cinematic still. Incredible detail, rich deep colors, visible film grain.",
          "figure_and_form": "Silhouette Through Sheer Fabric, with form subtly revealed by the transparent, damp clothing.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
      name: 'Office: Shadow Executive',
      data: {
          "shot": "Full body shot, capturing a powerful and modern aesthetic.",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and a powerful, direct gaze.",
              "pose": "Architectural Power Stance: Standing with a powerful, almost architectural posture, creating strong lines that emphasize the structure of the garment.",
              "hair_color": "jet black",
              "hair_style": "a severe, slicked-back style, creating a sharp and modern look.",
              "skin_finish": "Matte & Flawless",
              "hand_and_nail_details": "Impeccably Manicured",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Glossy Black Polish", "high_heels": "Architectural High Heels"
          },
          "wardrobe": "A two-piece, tight-fitting bodysuit crafted from textured, opaque black mesh netting, creating a powerful and sculptural silhouette.",
          "environment": "Minimalist Concrete Studio",
          "lighting": "Graphic Spotlight ('Throne of Light')",
          "camera": {
              "focal_length": "35mm", "aperture": "f/8.0 (Sharp BG)", "distance": "5 m",
              "angle": "Very low angle, shot from near floor level, looking up.",
              "framing": "Full Body (with Negative Space)"
          },
          "color_grade": "Severe Monochromatic B&W",
          "style": "Graphic Fashion-Editorial",
          "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus.",
          "figure_and_form": "The subject's form is sculpted by the tight mesh and dramatic lighting.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  },
  {
      name: 'Office: Glass & Steel Serenity',
      data: {
          "shot": "Artistic full-body nude study (9:16).",
          "subject": {
              "age": "adult woman (25-30)",
              "appearance": "Indian fashion model (height 5'9\"), with realistic body proportions (bust 38\", waist 28\", hips 39\"), jet black hair, and a serene, direct gaze.",
              "pose": "Fine Art Contrapposto: A classic fine art pose inspired by Renaissance sculpture, with the body's weight shifted to one foot, creating a gentle S-curve in the torso.",
              "hair_color": "jet black",
              "hair_style": "a polished, sleek high bun, for an elegant and statuesque profile.",
              "skin_finish": "Natural Glow",
              "hand_and_nail_details": "Graceful & Anatomically Correct.",
              "tattoos": "none", "piercings": "none", "body_art": "none",
              "nail_art": "Natural manicure, clean and simple", "high_heels": "Architectural High Heels"
          },
          "wardrobe": "A single, long piece of flowing black silk fabric, artistically draped around the body to create sculptural shapes that conceal and reveal the form.",
          "environment": "A sleek, modern office space at night, with glass walls and the ambient glow of the city skyline out of focus in the background.",
          "lighting": "Soft, cool, ambient light from the city skyline outside, creating gentle highlights on the form and silk.",
          "camera": {
              "focal_length": "35mm", "aperture": "f/4.0", "distance": "5 m",
              "angle": "Eye-Level",
              "framing": "Full Body (with Negative Space)"
          },
          "color_grade": "Cool Cinematic",
          "style": "Fine-Art Dance Photography, Minimalist",
          "quality": "Shot on Hasselblad X2D. Unmatched 8K detail.",
          "figure_and_form": "Minimalist Nude (Shadow Play), where light and shadow sculpt the body, revealing and concealing form.",
          "skin_micro_details": defaultSkinMicroDetails,
          "fabric_physics": defaultFabricPhysics,
          "material_properties": defaultMaterialProperties
      }
  }
];
