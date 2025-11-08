import type { PromptData } from '../types';
import { indianModelVariants } from './subjects';
import { generateSeductressConceptByIntimacy, intimacyLevels } from './seductressAutoSelector';
import { seductressNoirExpanded } from './seductressNoirExpanded';
import { corporateSeductionCollection } from './corporateSeductionCollection';
import { seductressMaxCollection } from './seductressMaxCollection';
import { seductressNaturalParadise } from './seductressNaturalParadise';
import { seductressSteamRoom } from './seductressSteamRoom';
import { superSeductressArtistConcepts } from './superSeductressArtistConcepts';
import { artisticModeConcepts } from './artisticModeConcepts';
import { corporateModeConcepts } from './corporateModeConcepts';
import { experimentalModeConcepts } from './experimentalModeConcepts';

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
  },

  // ============================================================================
  // SEDUCTRESS NOIR COLLECTION - Executive Office Series
  // Dedicated concepts for Indian Glamour Seductress in Executive Office
  // ============================================================================

  {
    name: 'Seductress Noir: Desk Command',
    data: {
      "shot": "Cinematic medium shot (16:9), intimate yet powerful.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
        "pose": "Seated on Desk Edge: Perched confidently on the edge of the executive desk, legs elegantly crossed, one hand resting on thigh, the other touching her hair. Direct, commanding gaze into camera.",
        "hair_color": "jet black",
        "hair_style": "long, loose waves cascading over one shoulder, creating a soft yet powerful look.",
        "skin_finish": "Dewy & Luminous",
        "hand_and_nail_details": "Impeccably Manicured with deep burgundy polish.",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Deep Burgundy Polish", "high_heels": "Sharp Stiletto Heels"
      },
      "wardrobe": "A form-fitting black pencil dress with a deep V-neckline and sheer lace panels at the sides, paired with an open black blazer that drapes off her shoulders. The architectural foundation garments beneath are subtly visible through the strategic transparency.",
      "environment": "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background.",
      "lighting": "Moody cinematic lighting from a single desk lamp positioned low, creating dramatic side-lighting with soft shadows that sculpt her features and form.",
      "camera": { "focal_length": "85mm f/1.4 Portrait Lens", "aperture": "f/2.0", "distance": "2.5 m", "angle": "Slightly low angle, positioned just below eye level to emphasize confidence.", "framing": "Medium shot from mid-thigh up, using rule of thirds." },
      "color_grade": "Cool Cinematic, with desaturated tones and deep blue shadows.",
      "style": "Helmut Newton Inspired, Neo-noir Sensuality with a focus on powerful femininity.",
      "quality": "RAW Cinematic (Helmut Newton). 8k, natural textures, no artificial plastic look, high-end cinematic quality.",
      "figure_and_form": "The dress and sheer panels reveal the hourglass silhouette, emphasizing curves while maintaining an air of professional sophistication.",
      "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": defaultFabricPhysics, "material_properties": "The sheer lace has a soft, diffuse quality that creates subtle moiré patterns, contrasting with the structured matte fabric of the dress."
    }
  },

  {
    name: 'Seductress Noir: Power Recline',
    data: {
      "shot": "Dramatic wide shot (16:9), emphasizing the full scene and power dynamics.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
        "pose": "Arching Back on Desk: Reclining back on the executive desk with arms stretched above her head, back arched gracefully, one leg bent with heel on desk edge, the other extended. Head tilted back, eyes looking at camera with intense confidence.",
        "hair_color": "jet black",
        "hair_style": "long dark hair cascading off the edge of the desk, creating dramatic flowing lines.",
        "skin_finish": "Matte & Flawless",
        "hand_and_nail_details": "Impeccably Manicured with classic red polish.",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Classic Red Polish", "high_heels": "Sharp Stiletto Heels"
      },
      "wardrobe": "A gossamer fabric black silk bodysuit with strategic cutouts and an unbuttoned black vest that frames the torso. The architectural foundation garments create geometric patterns beneath the sheer fabric, playing with transparency and structure.",
      "environment": "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background.",
      "lighting": "Dramatic chiaroscuro lighting from above and to the side, creating strong contrasts between illuminated skin and deep shadows. The desk lamp casts a warm glow that highlights the curve of her back.",
      "camera": { "focal_length": "35mm", "aperture": "f/2.8", "distance": "3.5 m", "angle": "High angle, shot from above and to the side, creating a dramatic overhead perspective.", "framing": "Three-quarters shot showing full desk scene from waist to head." },
      "color_grade": "Cool Cinematic with deep blacks and steely blue undertones.",
      "style": "Neo-noir Sensuality meets Fine Art Sensuality, inspired by Helmut Newton's bold compositions.",
      "quality": "Shot on Phase One XF IQ4 for hyper-realistic 150MP 8K RAW output.",
      "figure_and_form": "Revealing Curves (Shadow Play): The pose and lighting emphasize the natural S-curve of the spine and the sculptural form, with strategic shadows concealing while revealing.",
      "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": "The sheer silk clings and drapes with realistic weight, creating subtle bunching and transparency gradients.", "material_properties": "High-sheen silk with specular highlights contrasting against matte skin texture."
    }
  },

  {
    name: 'Seductress Noir: Chair Dominance',
    data: {
      "shot": "Intimate medium shot (9:16), capturing sensual confidence.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
        "pose": "Straddling Office Chair: Sitting backwards on a leather executive chair, straddling it with legs apart, arms resting on the chair back, leaning forward slightly. Direct, seductive gaze with a subtle smile.",
        "hair_color": "jet black",
        "hair_style": "a messy bun with intentional loose strands framing the face, creating a 'just-finished-work' allure.",
        "skin_finish": "Dewy & Luminous",
        "hand_and_nail_details": "Impeccably Manicured with glossy black polish.",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Glossy Black Polish", "high_heels": "Sharp Stiletto Heels"
      },
      "wardrobe": "An unbuttoned crisp white dress shirt (oversized) with sleeves rolled up, revealing architectural black lace foundation garments beneath. The shirt falls open to create a deep V, with just enough coverage to maintain sophistication. Black high-waisted tailored trousers.",
      "environment": "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background.",
      "lighting": "Soft wraparound lighting from a large window to the side, creating gentle shadows that sculpt the form. The desk lamp adds a warm accent light to her face.",
      "camera": { "focal_length": "50mm", "aperture": "f/1.8", "distance": "2 m", "angle": "Eye-level, creating intimate direct connection with the subject.", "framing": "Bust close-up, from chest up, tight framing emphasizing expression and décolletage." },
      "color_grade": "Warm & Natural with cool shadows, creating a lived-in, authentic feel.",
      "style": "Private & Personal meets Executive Power, inspired by Paolo Roversi's intimacy.",
      "quality": "Shot on Leica M11 with Noctilux 50mm f/0.95. Extremely shallow depth of field, beautiful bokeh, dreamy quality.",
      "figure_and_form": "Silhouette Through Sheer Fabric: The white shirt creates a soft silhouette effect, with the architectural foundation pieces visible as sculptural shadows beneath.",
      "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": "The oversized shirt drapes naturally with realistic wrinkles and folds, the cotton fabric shows authentic textile texture.", "material_properties": "Crisp cotton with matte finish contrasting with high-gloss lace and specular skin highlights."
    }
  },

  {
    name: 'Seductress Noir: Window Silhouette',
    data: {
      "shot": "Dramatic full body silhouette (9:16), artistic and graphic.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
        "pose": "Silhouette in Profile: Standing in profile by the floor-to-ceiling window, one hand touching the glass, the other hand on hip. Back slightly arched, creating an elegant S-curve. Looking out at the cityscape.",
        "hair_color": "jet black",
        "hair_style": "long dark hair flowing down her back, creating a dramatic silhouette against the window.",
        "skin_finish": "Natural Glow",
        "hand_and_nail_details": "Graceful & Anatomically Correct.",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Natural manicure, clean and simple", "high_heels": "Architectural High Heels"
      },
      "wardrobe": "A floor-length sheer black silk robe with architectural structure, worn open to reveal a high-waisted minimalist foundation piece. The robe creates flowing, dramatic lines that catch the backlight.",
      "environment": "A sleek, modern executive office at night, with floor-to-ceiling glass walls showcasing the glowing city skyline in sharp focus behind her.",
      "lighting": "Dramatic rim lighting from the city lights behind, creating a strong backlit silhouette with a thin rim of light defining her profile and form. Minimal front fill light preserves the silhouette effect.",
      "camera": { "focal_length": "85mm f/1.4 Portrait Lens", "aperture": "f/4.0", "distance": "4 m", "angle": "Eye-level, perfectly perpendicular to her profile.", "framing": "Full body shot with significant negative space, emphasizing the silhouette against the bright window." },
      "color_grade": "High-Contrast B&W with deep, crushed blacks and brilliant window highlights.",
      "style": "Fine-Art Dance Photography meets Graphic Fashion-Editorial, emphasizing form over detail.",
      "quality": "Shot on Hasselblad X2D. Unmatched 8K detail with perfect edge definition in the silhouette.",
      "figure_and_form": "Silhouette Through Sheer Fabric: The entire form is rendered as an artistic silhouette, with the curves and architectural garments visible as dark shapes against the bright cityscape.",
      "skin_micro_details": "Minimal visibility due to silhouette effect, focus on form and outline.", "fabric_physics": "The sheer robe flows with liquid grace, creating dynamic shapes as it catches the backlight.", "material_properties": "Translucent silk that glows at the edges where light passes through."
    }
  },

  {
    name: 'Seductress Noir: Table Lean',
    data: {
      "shot": "Intimate close-up (16:9), emphasizing connection and details.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
        "pose": "Leaning Forward Intently: Leaning forward over the executive desk with both hands planted flat on the surface, arms creating a frame. Direct, intense eye contact with camera, lips slightly parted. Décolletage and shoulders prominently featured.",
        "hair_color": "jet black",
        "hair_style": "long dark hair falling forward over shoulders, framing the face and creating depth.",
        "skin_finish": "Dewy & Luminous",
        "hand_and_nail_details": "Impeccably Manicured with deep burgundy polish, hands prominently visible on desk.",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Deep Burgundy Polish", "high_heels": "Sharp Stiletto Heels"
      },
      "wardrobe": "A plunging black silk camisole with delicate lace trim, revealing architectural black lace foundation garments with intricate geometric patterns. The garments are designed to be showcased from this angle, creating visual interest through texture and pattern.",
      "environment": "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background.",
      "lighting": "Clamshell lighting setup: soft light from above and subtle fill from below via desk reflection, creating a classic beauty lighting pattern that illuminates her face and décolletage evenly with minimal shadows.",
      "camera": { "focal_length": "105mm f/2.8 Macro Lens", "aperture": "f/2.8", "distance": "1.5 m", "angle": "Slightly high angle, as if viewer is standing at desk edge looking down.", "framing": "Tight bust close-up, from chest to top of head, emphasizing facial expression and neckline details." },
      "color_grade": "Cool Cinematic with subtle warmth in skin tones, creating an intimate yet sophisticated mood.",
      "style": "Romantic Fashion meets Helmut Newton's bold intimacy, focusing on connection and sensuality.",
      "quality": "Shot on Hasselblad X2D with macro lens for extreme detail on lace patterns, skin texture, and jewelry.",
      "figure_and_form": "Décolletage Close-up: The framing and pose emphasize the chest and collarbone area, highlighting the architectural foundation garments and the interplay of skin and lace texture.",
      "skin_micro_details": "Extreme detail showing pores, fine vellus hair, subsurface scattering on collarbones, and the way light catches the dewy skin finish.", "fabric_physics": "The lace patterns are rendered in microscopic detail, showing individual threads and the way the material sits against the skin.", "material_properties": "Intricate lace with semi-specular properties, silk with subtle sheen, and skin with realistic translucency."
    }
  },

  {
    name: 'Seductress Noir: After Hours',
    data: {
      "shot": "Bold full-body shot (9:16), capturing uninhibited confidence.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
        "pose": "Confident Desk-Chair Combo: Sitting in the executive leather chair with one stiletto-clad foot propped up on the desk edge, the other leg crossed beneath. One arm draped over the chair back, the other hand resting on her raised knee. Head tilted back slightly with a bold, unapologetic gaze.",
        "hair_color": "jet black",
        "hair_style": "wild, tousled waves suggesting the end of a long night, creating a raw, authentic energy.",
        "skin_finish": "Natural Glow",
        "hand_and_nail_details": "Impeccably Manicured with classic red polish.",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Classic Red Polish", "high_heels": "Sharp Stiletto Heels prominently featured"
      },
      "wardrobe": "A partially unbuttoned black silk shirt (men's cut, oversized) that falls off one shoulder, revealing an intricate architectural black lace bodysuit with geometric cutouts. The shirt is untucked and casually disheveled, creating an 'after-hours' aesthetic.",
      "environment": "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background.",
      "lighting": "Moody cinematic lighting from the desk lamp creating dramatic uplighting on her face and strong shadows. Additional rim light from the city windows separates her from the background.",
      "camera": { "focal_length": "35mm", "aperture": "f/2.8", "distance": "3 m", "angle": "Low angle from near floor level, looking up to emphasize power and dominance.", "framing": "Full body shot from mid-shin up, showing the entire power pose including the desk and chair." },
      "color_grade": "Cool Cinematic with desaturated tones and inky blacks, subtle film grain for texture.",
      "style": "Neo-noir Sensuality meets Fine Art Sensuality, channeling raw, unapologetic power.",
      "quality": "Shot on IMAX 70mm film for incredible detail and rich, deep colors with visible fine grain.",
      "figure_and_form": "Revealing Curves (Shadow Play): The strategic lighting and pose emphasize the hourglass silhouette, with the architectural bodysuit creating geometric patterns that guide the eye along the form's natural curves.",
      "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": "The oversized shirt drapes with authentic weight and wrinkles, the lace bodysuit shows realistic tension and compression on the curves.", "material_properties": "Matte silk shirt contrasting with semi-gloss lace and highly specular patent leather heels."
    }
  },

  {
    name: 'Seductress Noir: Corner Office',
    data: {
      "shot": "Powerful full-body portrait (9:16), emphasizing authority and presence.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
        "pose": "Architectural Power Stance: Standing tall beside the desk corner, weight shifted to one hip creating a subtle S-curve, one hand resting on the desk, the other at her side. Strong, unwavering gaze directly into camera with chin slightly raised.",
        "hair_color": "jet black",
        "hair_style": "a severe, slicked-back style pulled into a low ponytail, creating sharp, angular lines that emphasize bone structure.",
        "skin_finish": "Matte & Flawless",
        "hand_and_nail_details": "Impeccably Manicured with glossy black polish.",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Glossy Black Polish", "high_heels": "Architectural High Heels"
      },
      "wardrobe": "A bespoke black power suit with architectural tailoring - the jacket features sharp, geometric lines and is worn with nothing beneath except intricate architectural black lace foundation garments visible through the deep V of the jacket. High-waisted cigarette pants complete the power ensemble.",
      "environment": "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background.",
      "lighting": "Graphic Spotlight ('Throne of Light'): A single hard light source creates a sharp, defined rectangle of bright light on the wall behind her, creating stark high-contrast separation and emphasizing her commanding presence.",
      "camera": { "focal_length": "85mm f/1.4 Portrait Lens", "aperture": "f/4.0", "distance": "4 m", "angle": "Slightly low angle to emphasize stature and power.", "framing": "Full body shot with negative space, composed using rule of thirds with subject positioned dominantly." },
      "color_grade": "Severe Monochromatic B&W with deep, crushed blacks and neutral skin tones.",
      "style": "Graphic Fashion-Editorial meets Helmut Newton's architectural fashion photography, emphasizing structure and power.",
      "quality": "Shot on Hasselblad X2D. Unmatched 8K detail with razor-sharp focus on fabric texture and facial features.",
      "figure_and_form": "Sculpted Form (Opaque): The tailored suit sculptures the hourglass form through structure rather than revelation, with the architectural foundation garments adding geometric visual interest.",
      "skin_micro_details": defaultSkinMicroDetails, "fabric_physics": "The suit holds its architectural shape with precision tailoring, showing clean lines and structured seams.", "material_properties": "Matte wool suiting with no sheen, contrasting with the geometric lace patterns and glossy patent leather accessories."
    }
  },

  {
    name: 'Seductress Noir: Close Quarters',
    data: {
      "shot": "Ultra close-up portrait (9:16), macro intimacy and detail.",
      "subject": {
        "variant": indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
        "pose": "Intimate Close-up: Head and shoulders only, face turned slightly to the side, eyes looking directly at camera with sultry, half-lidded gaze. One hand visible, delicately touching her collarbone or neck. Lips slightly parted.",
        "hair_color": "jet black",
        "hair_style": "long dark hair swept to one side, falling over one shoulder, with a few strategic strands across the face.",
        "skin_finish": "Dewy & Luminous with pronounced subsurface scattering",
        "hand_and_nail_details": "Impeccably Manicured with deep burgundy polish, hand delicately positioned near face or neck.",
        "tattoos": "none", "piercings": "none", "body_art": "none",
        "nail_art": "Deep Burgundy Polish", "high_heels": "not visible"
      },
      "wardrobe": "Only the strap of an intricate architectural black lace foundation garment visible over the shoulder, with most focus on bare skin, collarbones, and neck. Minimal coverage to emphasize skin texture and form.",
      "environment": "A sleek, modern executive office at night, completely out of focus - only bokeh of city lights visible in background.",
      "lighting": "Soft, diffused side lighting creating gentle shadows that sculpt facial features. Subtle catchlights in the eyes. Chiaroscuro effect with gradual falloff into shadow on the far side of the face.",
      "camera": { "focal_length": "105mm f/2.8 Macro Lens", "aperture": "f/1.8", "distance": "0.8 m", "angle": "Eye-level, creating intimate direct connection.", "framing": "Ultra close-up from upper chest to top of head, with extreme shallow depth of field isolating the face." },
      "color_grade": "Warm & Natural with soft, luminous highlights and painterly quality.",
      "style": "Fine Art Sensuality meets Private & Personal, inspired by Annie Leibovitz's intimate portraiture.",
      "quality": "Shot on Leica M11 with Noctilux 50mm f/0.95 for extreme shallow depth, beautiful bokeh, and hyper-realistic skin rendering.",
      "figure_and_form": "Natural form with emphasis on neck, shoulders, and décolletage curves. Minimal clothing to showcase authentic skin texture and the interplay of light on form.",
      "skin_micro_details": "Hyper-realistic rendering at macro scale: every pore, fine vellus hair, freckle, and skin irregularity visible. Pronounced subsurface scattering creates a luminous, life-like quality where light penetrates the skin. Individual eyelashes and lip texture rendered in extreme detail.", "fabric_physics": "Minimal fabric visible - only the delicate lace strap showing realistic tension and the way it sits against the skin.", "material_properties": "Focus on skin: realistic translucency with specular highlights on the dewy finish, matte zones in shadows, and the subtle color variations in natural skin tone."
    }
  },

  // ============================================================================
  // SEDUCTRESS AUTO-SELECTOR SERIES - Intimacy Progression System
  // Automatically generated concepts with progressive intimacy levels (1-7)
  // Each level features coordinated wardrobe, nails, poses, lighting & camera
  // ============================================================================

  {
    name: 'Seductress Auto: Level 1 - Professional Elegance',
    data: generateSeductressConceptByIntimacy(
      1,
      indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
      "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background."
    ) as PromptData
  },

  {
    name: 'Seductress Auto: Level 2 - Sophisticated Allure',
    data: generateSeductressConceptByIntimacy(
      2,
      indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
      "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background."
    ) as PromptData
  },

  {
    name: 'Seductress Auto: Level 3 - Editorial Sensuality',
    data: generateSeductressConceptByIntimacy(
      3,
      indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
      "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background."
    ) as PromptData
  },

  {
    name: 'Seductress Auto: Level 4 - Intimate Artistry',
    data: generateSeductressConceptByIntimacy(
      4,
      indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
      "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background."
    ) as PromptData
  },

  {
    name: 'Seductress Auto: Level 5 - High Concept Seduction',
    data: generateSeductressConceptByIntimacy(
      5,
      indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
      "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background."
    ) as PromptData
  },

  {
    name: 'Seductress Auto: Level 6 - Maximum Expression',
    data: generateSeductressConceptByIntimacy(
      6,
      indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
      "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background."
    ) as PromptData
  },

  {
    name: 'Seductress Auto: Level 7 - Pure Artistry',
    data: generateSeductressConceptByIntimacy(
      7,
      indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value,
      "A sleek, modern executive office at night, with glass walls, and the ambient glow of the city skyline out of focus in the background."
    ) as PromptData
  },

  // ============================================================================
  // SEDUCTRESS NOIR EXPANDED COLLECTION
  // 10 additional high-intimacy artistic concepts for Indian Glamour Seductress
  // ============================================================================
  ...seductressNoirExpanded,

  // ============================================================================
  // CORPORATE SEDUCTION COLLECTION
  // 20 corporate office concepts featuring power, sensuality, and artistic excellence
  // Environments: executive office, boardroom, reception, lounge, restroom, after-hours
  // Photographer styles: Newton, Penn, Avedon, Leibovitz, Lindbergh, Roversi
  // ============================================================================
  ...corporateSeductionCollection,

  // ============================================================================
  // SEDUCTRESS MAX COLLECTION
  // 15 bold maximum intimacy concepts pushing artistic boundaries
  // Themes: fine art nude studies, architectural body forms, intimate boudoir
  // chiaroscuro masterpieces, goddess studies, noir luxury, urban edge
  // dance forms, water studies, gothic romance, leather dominance
  // Maximum artistic expression with sophisticated high-fashion photography
  // Photographer styles: Newton, Penn, Avedon, Leibovitz, Lindbergh, Roversi
  // ============================================================================
  ...seductressMaxCollection,

  // ============================================================================
  // NATURAL PARADISE COLLECTION
  // 12 concepts celebrating bombshell curves in misty forest environments
  // Themes: forest goddess, streams, waterfalls, ancient trees, cabin retreats
  // rain-soaked nature, mossy rocks, moonlit pools, natural curved features
  // Environmental emphasis matching body curves with nature's organic curves
  // Misty evening woods, private cabin paradise, natural erotic beauty
  // Focus on large hip curves, hourglass bombshell silhouette in nature
  // Photographer styles: Newton, Penn, Avedon, Leibovitz, Lindbergh, Roversi
  // ============================================================================
  ...seductressNaturalParadise,

  // ============================================================================
  // STEAM ROOM PARADISE COLLECTION
  // 10 concepts celebrating curves in humid spa environments
  // Themes: steam rooms, hammam, sauna, hot stone massage, Vichy shower
  // aromatherapy steam, Moroccan baths, temperature contrasts, plunge pools
  // Emphasis on sweaty perspiration, steam condensation, humid atmosphere
  // Glistening skin with oils, water, and steam effects on bombshell curves
  // Private pampering sessions, luxury spa treatments, sensory experiences
  // Focus on wide hips, narrow waist, hourglass form in humid heat
  // Photographer styles: Newton, Penn, Avedon, Leibovitz, Lindbergh, Roversi
  // ============================================================================
  ...seductressSteamRoom,

  // ============================================================================
  // SUPER-SEDUCTRESS ARTIST COLLECTION
  // 15 concepts showcasing the NEW Indian Super-Seductress Artist variant
  // Bi-polar range: Corporate power dominance to vulnerable erotic-muse
  // Enhanced dramatic curves: bust 40DD", waist 26", hips 44"
  // Artistic intelligence with role-based expression expertise
  //
  // INDOOR PRIVATE (8 concepts):
  // - Private Studio Command (power dominance)
  // - Luxury Loft Vulnerability (vulnerable erotic-muse)
  // - Art Gallery Dominance (artistic authority power)
  // - Private Screening Room Vulnerability (cinematic intimate)
  // - Penthouse Suite Power (ultimate luxury dominance)
  // - Studio Erotic-Muse Vulnerability (fine art maximum vulnerable)
  // - Private Apartment Transition (bi-polar power-to-vulnerability)
  // - Loft Midnight Artistic Expression (ultimate vulnerable creative soul)
  //
  // OUTDOOR PRIVATE (7 concepts):
  // - Private Rooftop Urban Dominance (city goddess power)
  // - Secret Garden Erotic-Muse (nature sanctuary vulnerability)
  // - Secluded Forest Clearing Ultimate Vulnerability (forest goddess)
  // - Private Beach Power (ocean commanding dominance)
  // - Hidden Terrace Artistic Expression (outdoor vulnerable)
  // - Private Garden Power Balance (integrated bi-polar equilibrium)
  // - Secluded Natural Pool Goddess (ultimate water vulnerable erotic-muse)
  //
  // Showcases complete artistic range from corporate dominance to pure vulnerability
  // Uses advanced prompting framework, wardrobe selectors, quality presets
  // Photographer styles: Newton, Penn, Avedon, Leibovitz, Lindbergh, Roversi
  // ============================================================================
  ...superSeductressArtistConcepts,

  // ============================================================================
  // ARTISTIC MODE CONCEPTS (12 concepts)
  // Pre-built concepts from Artistic Mode featuring Master Photographer Styles
  //
  // HELMUT NEWTON (3 concepts):
  // - Newton - Modern Power Icon
  // - Newton - Sensual Sophisticate
  // - Newton - Bold Contemporary
  //
  // IRVING PENN (3 concepts):
  // - Penn - Ethereal Classical Beauty
  // - Penn - Editorial Chameleon
  // - Penn - Art House Icon
  //
  // PAOLO ROVERSI (3 concepts):
  // - Roversi - Ethereal Romance
  // - Roversi - Sensual Vulnerability
  // - Roversi - Timeless Grace
  //
  // HERB RITTS (3 concepts):
  // - Ritts - Sculptural Power
  // - Ritts - Natural Elegance
  // - Ritts - Elemental Beauty
  //
  // Covers all 4 master photographer styles with Indian model archetypes
  // ============================================================================
  ...artisticModeConcepts,

  // ============================================================================
  // CORPORATE MODE CONCEPTS (14 concepts)
  // Pre-built concepts from Corporate Mode featuring Executive Roles & Environments
  //
  // CHIEF EXECUTIVE (2 concepts):
  // - CEO - MNC Power Office
  // - CEO - Hotel Chain Luxury
  //
  // BOARD MEMBER (2 concepts):
  // - Board Member - Real Estate Power
  // - Board Member - Entertainment Empire
  //
  // PERSONAL SECRETARY (2 concepts):
  // - Secretary - Corporate MNC
  // - Secretary - Government Office
  //
  // HR EXECUTIVE (2 concepts):
  // - HR Executive - Corporate MNC
  // - HR Executive - Hotel Chain
  //
  // DESIGN EXECUTIVE (2 concepts):
  // - Design Executive - Entertainment
  // - Design Executive - Nightclub Chain
  //
  // GOVERNMENT OFFICIAL (2 concepts):
  // - Government Official - Ministry Office
  // - Government - Head of State Office
  //
  // LAWYER (2 concepts):
  // - Lawyer - Corporate Law Firm
  // - Lawyer - Government Legal Office
  //
  // Covers all 7 corporate roles with diverse office environments and power dynamics
  // ============================================================================
  ...corporateModeConcepts,

  // ============================================================================
  // EXPERIMENTAL MODE CONCEPTS (10 concepts)
  // Curated node combinations organized by theme and WARNING LEVEL
  // Pre-built concepts from Experimental Mode with explicit boundary ratings
  //
  // SAFE TIER (Boundary 1-8) - Professional Editorial (3 concepts):
  // - EXP-SAFE: Classic Editorial Portrait
  // - EXP-SAFE: Corporate Power Portrait
  // - EXP-SAFE: Natural Beauty Editorial
  //
  // MODERATE TIER (Boundary 9-12) - High Fashion & Seductive (3 concepts):
  // - EXP-MOD: High Fashion Seduction
  // - EXP-MOD: Confident Allure Portrait
  // - EXP-MOD: Fashion Forward Sensuality
  //
  // ARTISTIC TIER (Boundary 13-15) - Artistic Erotic & Boudoir (3 concepts):
  // - EXP-ART: Intimate Boudoir Artistry
  // - EXP-ART: Artistic Erotic Portrait
  // - EXP-ART: Sensual Art Photography
  //
  // PREMIUM TIER (Boundary 16+) - Maximum Artistic Expression (3 concepts):
  // ⚠️ WARNING: Highest intimacy/boundary levels - Museum-quality fine art only
  // - EXP-PREMIUM: Maximum Artistic Expression
  // - EXP-PREMIUM: Avant-Garde Erotic Art
  // - EXP-PREMIUM: Fine Art Erotic Mastery
  //
  // Each concept includes explicit warning levels and themed organization
  // Covers complete range from safe editorial to premium artistic expression
  // ============================================================================
  ...experimentalModeConcepts
];