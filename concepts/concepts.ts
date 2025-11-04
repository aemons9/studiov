import type { PromptData } from '../types';
import { indianModelVariants } from './subjects';

export interface ArtisticConcept {
  name: string;
  data: PromptData;
}

const defaultSkinMicroDetails = "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing.";
const defaultFabricPhysics = "The fabric drapes naturally, with realistic creases and folds that follow the subject's form. The weave of the fabric is visible upon close inspection.";
const defaultMaterialProperties = "The material has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject's skin.";

export const artisticConcepts: ArtisticConcept[] = [
  {
    name: 'Executive Noir',
    data: {
      "shot": "Cinematic medium shot (16:9), exuding power and confidence.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Femme Fatale"))!.value,
        "pose": "Commanding Seated Lean: Seated on the edge of a large executive desk, leaning to one side with a powerful, commanding expression.",
        "hair_color": "jet black",
        "hair_style": "a severe, slicked-back style, creating a sharp and modern look.",
        "skin_finish": "Matte & Flawless",
        "hand_and_nail_details": "Impeccably Manicured with classic red polish.",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Classic Red Polish", "high_heels": "Sharp Stiletto Heels"
      },
      "wardrobe": "A transparent black business suit. The blazer is open, revealing an intricate black lace minimalist foundation piece and couture upper piece set.",
      "environment": "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background.",
      "lighting": "Moody cinematic lighting from a single desk lamp, creating deep shadows and a glamorous, intimate feel.",
      "camera": { "focal_length": "50mm", "aperture": "f/2.8", "distance": "3 m", "angle": "Low Angle, making the subject appear powerful.", "framing": "Medium shot from the waist up." },
      "color_grade": "Cool Cinematic, with desaturated tones.",
      "style": "Helmut Newton Inspired, Neo-noir Sensuality",
      "quality": "RAW Cinematic (Helmut Newton). 8k, natural textures, no artificial plastic look, high-end cinematic quality.",
      "figure_and_form": "The sheer suit reveals the sculptural lines and the foundation garments beneath, a play on power dressing and sensuality.",
      "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": defaultFabricPhysics, "material_properties": defaultMaterialProperties
    }
  },
  {
    name: 'Sanctuary Muse',
    data: {
        "shot": "Intimate close-up shot, creating a sense of closeness and personal connection.",
        "subject": {
            "variant": indianModelVariants.find(v => v.name.includes("Natural Allure"))!.value,
            "pose": "Confident Recline on Bed: Reclining on a messy bed with an arm resting behind her head, one leg bent, exuding a bold and natural confidence.",
            "hair_color": "dark",
            "hair_style": "a messy bun with face-framing tendrils for a relaxed, candid feel.",
            "skin_finish": "Dewy & Luminous",
            "hand_and_nail_details": "Natural & Unadorned.",
            "tattoos": "none", "piercings": "none", "body_art": "none",
            "nail_art": "Natural manicure, clean and simple", "high_heels": "not visible"
        },
        "wardrobe": "A single piece of clothing: an oversized, unbuttoned man's white dress shirt, artfully draped and falling off one shoulder.",
        "environment": "Messy Luxury Hotel Room: A dimly lit luxurious hotel room, with a messy king-sized bed with white silk sheets and soft morning light.",
        "lighting": "Soft, directional window light that wraps around the subject's features, creating soft shadows that sculpt the face and form.",
        "camera": { "focal_length": "85mm f/1.4 Portrait Lens", "aperture": "f/1.8 (Creamy BG)", "distance": "2 m", "angle": "Eye-Level, creating a direct and personal connection with the subject.", "framing": "Tight medium shot, from the mid-torso up." },
        "color_grade": "Warm & Natural",
        "style": "Private & Personal, in the style of Paolo Roversi.",
        "quality": "Shot on Kodak Portra 400. 8k, natural textures, beautiful color rendition, and a subtle, pleasing film grain.",
        "figure_and_form": "Natural form, emphasizing the realistic drape of fabric over the subject's physique. The lighting and pose are composed to be tasteful and artistic.",
        "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": defaultFabricPhysics, "material_properties": defaultMaterialProperties
    }
  },
  {
    name: 'Automotive Couture',
    data: {
      "shot": "Full body shot (16:9) in a dynamic, high-fashion context.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Bombshell"))!.value,
        "pose": "Draped Over Furniture: Casually and elegantly draped over the hood of a classic sports car, creating long, flowing lines.",
        "hair_color": "jet black", "hair_style": "long, loose waves blowing slightly in the wind.", "skin_finish": "Dewy & Luminous",
        "hand_and_nail_details": "Impeccably Manicured.", "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Classic Red Polish", "high_heels": "Sharp Stiletto Heels"
      },
      "wardrobe": "A skin-tight, full-body catsuit made from high-gloss black latex, emphasizing a sleek, futuristic, and powerful silhouette.",
      "environment": "A modern, minimalist garage with polished concrete floors and dramatic uplighting, featuring a vintage red Ferrari 250 GTO.",
      "lighting": "Dramatic Rim Lighting that outlines the subject and the car against a dark background, emphasizing their silhouettes.",
      "camera": { "focal_length": "35mm", "aperture": "f/4.0", "distance": "4 m", "angle": "Low Angle", "framing": "Full Body, capturing both model and car." },
      "color_grade": "Vibrant & Saturated, with deep reds and blacks.",
      "style": "Helmut Newton Inspired, blending high fashion with automotive design.",
      "quality": "Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus on the latex texture and car's paintwork.",
      "figure_and_form": "The latex catsuit sculpts the form, creating a second skin that mirrors the sleek lines of the automobile.",
      "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": defaultFabricPhysics, "material_properties": "High-gloss black latex that acts like a mirror, reflecting the light source and environment with sharp, distorted highlights."
    }
  },
  {
    name: 'Neon Empress',
    data: {
      "shot": "Full body portrait (9:16) capturing a powerful, futuristic aesthetic.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Androgynous"))!.value,
        "pose": "Power Arch (Seated): Seated on a low stool, leaning back on her hands, arching her back with chin tilted up, exuding dominance and power.",
        "hair_color": "jet black", "hair_style": "Slicked-Back (Severe)", "skin_finish": "Matte & Flawless",
        "hand_and_nail_details": "Impeccably Manicured", "tattoos": "none", "piercings": "Subtle Gold Septum", "body_art": "none",
        "nail_art": "Glossy Black Polish", "high_heels": "Architectural High Heels"
      },
      "wardrobe": "A full-body architectural foundation garment defined by a series of interconnected geometric straps, creating a powerful, graphic statement that plays with negative space.",
      "environment": "A narrow, rain-slicked alley in a futuristic cyberpunk city, illuminated by the vibrant, chaotic glow of neon signs and holographic advertisements.",
      "lighting": "Cinematic Volumetric Lighting, with strong beams of light cutting through atmospheric haze and reflecting off wet pavement.",
      "camera": { "focal_length": "35mm", "aperture": "f/2.8", "distance": "3 m", "angle": "Very low angle, shot from near floor level, looking up.", "framing": "Full Body (with Negative Space)" },
      "color_grade": "Cool Cinematic with vibrant, saturated neon highlights.",
      "style": "Vaporwave Aesthetic, Cinematic Noir",
      "quality": "IMAX 70mm Cinematic. Incredible detail, epic scope, and rich, deep colors.",
      "figure_and_form": "The geometric wardrobe and dramatic lighting sculpt the form into a powerful, almost robotic silhouette.",
      "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": defaultFabricPhysics, "material_properties": defaultMaterialProperties
    }
  },
  {
    name: 'Chiaroscuro Form',
    data: {
      "shot": "Medium portrait (9:16), painterly and dramatic",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Cinematic"))!.value,
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
    name: 'Fitness Studio Portrait',
    data: {
      "shot": "Full body portrait (9:16), contrasting raw and delicate textures.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Fitness"))!.value,
        "pose": "Dynamic Floor S-Curve: Sitting on the floor in a dynamic S-curve, one leg extended, torso twisted with one arm braced behind, creating a fluid, sculptural line.",
        "hair_color": "dark",
        "hair_style": "a severe, slicked-back style, creating a sharp and modern look.",
        "skin_finish": "Cinematic",
        "hand_and_nail_details": "Impeccably Manicured with glossy black polish.",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Glossy Black Polish", "high_heels": "not visible"
      },
      "wardrobe": "An intricate, high-fashion black lace bodysuit with strategic cutouts and sheer panels.",
      "environment": "Minimalist Concrete Studio: A minimalist studio with a dark grey textured concrete wall and polished floor that reflects subtle highlights.",
      "lighting": "Soft Side-Wrap Light (Octabox): A single, large soft light source placed to the side, creating a soft, wrapping light that highlights contours against the dark background.",
      "camera": { "focal_length": "50mm", "aperture": "f/4.0", "distance": "4 m", "angle": "Low Angle, emphasizing the power and form of the pose.", "framing": "Full Body (with Negative Space)" },
      "color_grade": "Cool Cinematic with deep blues and cyans in the shadows.",
      "style": "Graphic Fashion-Editorial",
      "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus on the eyes and lace details.",
      "figure_and_form": "The subject's form is sculpted by the tight lace and dramatic lighting.",
      "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": defaultFabricPhysics, "material_properties": defaultMaterialProperties
    }
  },
   {
    name: 'High-Fashion Concrete',
    data: {
      "shot": "Full Body Shot, capturing a powerful and modern aesthetic.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Mannequin"))!.value,
        "pose": "Architectural Power Stance: Standing with a powerful, almost architectural posture, creating strong lines that emphasize the structure of the garment.",
        "hair_color": "jet black",
        "hair_style": "a severe, slicked-back style, creating a sharp and modern look.",
        "skin_finish": "Matte & Flawless",
        "hand_and_nail_details": "Impeccably Manicured", "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Glossy Black Polish", "high_heels": "Architectural High Heels"
      },
      "wardrobe": "A two-piece, tight-fitting bodysuit crafted from textured, opaque black mesh netting, creating a powerful and sculptural silhouette.",
      "environment": "Minimalist Concrete Studio",
      "lighting": "Graphic Spotlight ('Throne of Light')",
      "camera": { "focal_length": "35mm", "aperture": "f/8.0 (Sharp BG)", "distance": "5 m", "angle": "Very low angle, shot from near floor level, looking up.", "framing": "Full Body (with Negative Space)" },
      "color_grade": "Severe Monochromatic B&W",
      "style": "Graphic Fashion-Editorial",
      "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus.",
      "figure_and_form": "The subject's form is sculpted by the tight mesh and dramatic lighting.",
      "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": defaultFabricPhysics, "material_properties": defaultMaterialProperties
    }
  },
  {
    name: 'Private Gallery Muse',
    data: {
        "shot": "Artistic full-body nude study (9:16).",
        "subject": {
            "variant": indianModelVariants.find(v => v.name.includes("Erotic-Art"))!.value,
            "pose": "Fine Art Contrapposto: A classic fine art pose inspired by Renaissance sculpture, with the body's weight shifted to one foot, creating a gentle S-curve in the torso.",
            "hair_color": "jet black",
            "hair_style": "a polished, sleek high bun, for an elegant and statuesque profile.",
            "skin_finish": "Natural Glow",
            "hand_and_nail_details": "Graceful & Anatomically Correct.",
            "tattoos": "none", "piercings": "none", "body_art": "none",
            "nail_art": "Natural manicure, clean and simple", "high_heels": "not visible"
        },
        "wardrobe": "A single high-waisted, minimalist black mesh T-strap foundation piece. The rest of the body is unadorned, sculpted by light.",
        "environment": "Empty Dance Studio / Loft with smooth, light grey floors and walls, creating vast, uncluttered negative space.",
        "lighting": "Hard High-Angle Studio light: Hard, directional warm studio lighting from a high side angle, creating dramatic, sharp shadows and brilliant highlights that intricately sculpt textures.",
        "camera": { "focal_length": "35mm", "aperture": "f/8.0 (Sharp BG)", "distance": "5 m", "angle": "Eye-Level", "framing": "Full Body (with Negative Space)" },
        "color_grade": "High-Contrast B&W, with deep, crushed blacks and brilliant, clean whites.",
        "style": "Fine-Art Dance Photography, Graphic Fashion-Editorial",
        "quality": "Shot on Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus.",
        "figure_and_form": "Minimalist Nude (Shadow Play), where light and shadow sculpt the body, revealing and concealing form.",
        "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": defaultFabricPhysics, "material_properties": defaultMaterialProperties
    }
  }
];
