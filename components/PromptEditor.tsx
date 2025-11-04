import React, { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import type { PromptData, Preset, GenerationSettings, WardrobeConcept, RiskAnalysis } from '../types';
import { artisticConcepts, ArtisticConcept } from '../concepts/concepts';
import WardrobeSelectorModal from './WardrobeSelectorModal';
import { allWardrobeConcepts } from '../concepts/wardrobe';
import { getRiskAnalysis } from '../services/geminiService';
import IntimacyController from './IntimacyController';
import RiskAnalysisPreview from './RiskAnalysisPreview';
import { cameraSystems } from '../concepts/cameraSystems';
import { environmentCategories } from '../concepts/environments';
import { indianModelVariants } from '../concepts/subjects';
import { seductressPresets } from '../concepts/seductressPresets';

const presets: { [key: string]: any } = {
  shot: [
    { name: 'Ultra Close-up', value: 'Ultra close-up editorial (9:16), focusing on intricate details.' },
    { name: 'Intimate Close-up', value: 'Intimate close-up shot, focusing on a specific feature like the lips, eyes, or hands, creating a sense of closeness and personal connection.' },
    { name: 'Sensual Detail Shot', value: 'A macro or detail shot focusing on the texture of fabric against skin, the curve of the neck, or the line of the collarbone, emphasizing sensuality through detail.' },
    { name: 'Artistic Body-scape', value: 'An abstract, artistic shot that frames the body as a landscape, using light and shadow to create shapes and lines rather than a traditional portrait.' },
    { name: 'Close-up Portrait', value: 'Close-up portrait shot, from the shoulders up, capturing emotion.' },
    { name: 'Medium Shot', value: 'Medium shot from the waist up, showing the subject and their immediate environment.' },
    { name: 'Cowboy Shot', value: 'Cowboy shot, framed from mid-thigh up, ideal for showing action or confidence.' },
    { name: 'Full Body Shot', value: 'Full body shot, capturing the entire subject from head to toe, showcasing wardrobe and pose.' },
  ],
  subject: {
    skin_finish: [
        { name: 'Natural Glow', value: 'Natural, with a soft, healthy glow. Not overly matte or dewy, just authentic.' },
        { name: 'Dewy & Luminous', value: 'Dewy, glowing skin with a soft, luminous quality. Appears healthy and hydrated, with a subtle sheen on the high points of the face.' },
        { name: 'Matte & Flawless', value: 'Perfectly smooth, matte skin finish, like a high-fashion editorial. Pores are minimized, but texture is still present to avoid a plastic look.' },
    ],
    hand_and_nail_details: [
        { name: 'Graceful & Anatomically Correct', value: 'Hands are relaxed and anatomically correct, with graceful, natural finger placement. The AI should prioritize correct finger count and structure.' },
        { name: 'Impeccably Manicured', value: 'Hands are perfectly manicured with clean, well-shaped nails and healthy cuticles, reflecting a polished and elegant look.' },
        { name: 'Expressive Artist Hands', value: 'Hands are expressive, perhaps with small calluses or a smudge of paint, suggesting a creative or artistic personality. Anatomy remains correct.' },
        { name: 'Natural & Unadorned', value: 'Hands look natural and unadorned, with short, clean nails. They appear realistic and suitable for any candid scene.' },
    ],
    pose: [
      { name: 'Architectural Power Stance', value: "Standing with a powerful, almost architectural posture, one arm raised, creating strong lines that emphasize the structure of the garment. Torso is slightly twisted, revealing the midriff. Wide, stable stance." },
      { name: 'Relaxed Supine (Overhead)', value: "Lying on back on a simple white sheet on the floor, arms resting loosely at sides. The pose is vulnerable and completely relaxed, turning the body into a flat canvas for light and shadow." },
      { name: 'Dynamic Motion', value: `Captured mid-motion, as if gracefully pivoting or stepping. Her torso is in a subtle, elegant twist. The pose feels candid, yet perfectly composed.` },
      { name: 'Confident Stand', value: `Standing confidently, facing the camera with a strong posture, one hand on hip, looking directly into the lens.` },
      { name: 'Relaxed Sitting', value: `Sitting on a vintage chair, leaning slightly forward with crossed legs, exuding a relaxed and engaging expression.` },
      { name: 'Elegant Recline', value: `Reclining gracefully on a velvet chaise lounge, creating long, elegant lines with the body, head tilted back slightly.` },
      { name: 'Leaning on Wall', value: 'Casually leaning against a textured wall, one leg bent, creating a relaxed but composed triangular shape with the body.' },
      { name: 'Kneeling Glance', value: 'Kneeling on the floor on one or both knees, body angled slightly away, glancing softly over the shoulder at the camera.' },
      { name: 'Kneeling Over-the-Shoulder', value: 'Kneeling on the floor facing away from the camera, head and torso twisted to look back over the shoulder, creating a dynamic and alluring line.' },
      { name: 'Relaxed & Vulnerable', value: 'Lying on a soft surface like a bed or rug, looking at the camera with a soft, relaxed expression, conveying a sense of trust and vulnerability.' },
      { name: 'Confident & Bold Stare', value: 'Seated, leaning forward with elbows on knees, looking directly and intensely into the camera with a powerful and confident expression.' },
      { name: 'Thoughtful & Enchanting Glance', value: 'Subject is turned slightly away from the camera, looking off-frame with a thoughtful or distant expression, lit by soft window light.' },
      { name: 'Candid Walking', value: `Captured mid-stride while walking towards the camera on a city street, with natural movement and a slight, confident smile.` },
      { name: 'Candid Laughter', value: 'A genuine moment of laughter, head tilted back slightly, eyes sparkling with joy. A natural, unposed expression.' },
      { name: 'Leaning Forward Intently', value: 'Leaning forward over a table or surface, hands clasped, with an intense and focused gaze towards the camera, creating a feeling of intimacy and engagement.' },
      { name: 'Mid-Twirl', value: 'Captured in the middle of a graceful twirl, with fabric flowing and a sense of dynamic, joyful motion.' },
      { name: 'Reaching Towards Camera', value: 'One hand gently reaching towards the camera lens, creating a sense of connection and breaking the fourth wall.' },
      { name: 'Arching Back on Bed', value: 'Lying on a bed, back gently arched to create a graceful curve, head turned towards the camera with a soft expression.' },
      { name: 'Seated Highlighting Curves', value: 'Seated on the edge of a chair or floor, one leg drawn up, torso twisted to emphasize the natural curves of the waist and hips.' },
      { name: 'Silhouette in Profile', value: 'Standing or sitting in profile against a light source (like a window), creating a strong, artistic silhouette that highlights the body\'s form.' },
      { name: 'Prone Glance Back', value: 'Lying on stomach, propped up on elbows, looking back over the shoulder at the camera. A pose that is both relaxed and engaging.' },
      { name: 'Draped Over Furniture', value: 'Casually and elegantly draped over a piece of furniture like a sofa arm or chaise lounge, creating long, flowing lines.' },
      { name: 'Fine Art Contrapposto', value: 'A classic fine art pose inspired by Renaissance sculpture, with the body\'s weight shifted to one foot, creating a gentle S-curve in the torso.' },
      { name: 'Hands Tracing Form', value: 'Pose where one or both hands are gently tracing the lines of the body, such as the waist, hip, or collarbone, suggesting intimacy and self-awareness.' },
      { name: 'Dynamic Floor S-Curve', value: "Sitting on the floor in a dynamic S-curve, one leg extended, torso twisted with one arm braced behind, creating a fluid, sculptural line." },
      { name: 'Commanding Seated Lean', value: "Seated on a low stool, leaning to one side with a powerful, commanding expression, looking down towards the camera." },
      { name: 'Power Arch (Seated)', value: "Seated on a low stool, leaning back on her hands, arching her back with chin tilted up, exuding dominance and power." },
      { name: 'Contemplative Seated Curl', value: "Seated on the floor, curled slightly with knees drawn up and arms wrapped around them, head bowed in a thoughtful, classical pose." },
      { name: 'Confident Recline on Bed', value: "Reclining on a messy bed with an arm resting behind her head, one leg bent, exuding a bold and natural confidence." },
    ],
    hair_color: [
      { name: 'Dark', value: 'dark' },
      { name: 'Blonde', value: 'blonde' },
      { name: 'Red', value: 'red' },
      { name: 'Pastel Pink', value: 'pastel pink' },
      { name: 'Jet Black', value: 'jet black' },
      { name: 'Honey Blonde', value: 'honey blonde' },
      { name: 'Silver Gray', value: 'silver gray' },
      { name: 'Deep Auburn', value: 'deep auburn' },
    ],
    hair_style: [
      { name: 'Flowing Ponytail', value: 'elegant, flowing ponytail' },
      { name: 'Sharp Bob', value: 'sharp, asymmetrical bob' },
      { name: 'Long Loose Waves', value: 'long, loose waves with a few stray strands catching the light' },
      { name: 'Slicked-Back (Severe)', value: 'a severe, slicked-back style, creating a sharp and modern look.' },
      { name: 'Messy Bun', value: 'a messy bun with face-framing tendrils for a relaxed, candid feel.' },
      { name: 'Sleek & Straight', value: 'long dark hair styled sleek and straight for a graphic, high-fashion look.' },
      { name: 'Loose Low Bun', value: 'long dark hair tied in a loose, low bun with strands escaping, creating a soft, elegant look.' },
      { name: 'Polished High Bun', value: 'a polished, sleek high bun, for an elegant and statuesque profile.' },
    ],
    tattoos: [
      { name: 'None', value: 'none' },
      { name: 'Subtle Arm & Collarbone', value: 'subtle, artistic tattoos on the arm and collarbone' },
      { name: 'Intricate Sleeve', value: 'an intricate, full-sleeve tattoo with detailed line work' },
      { name: 'Delicate Finger Tattoos', value: 'delicate, minimalist tattoos on the fingers' },
    ],
    piercings: [
      { name: 'None', value: 'none' },
      { name: 'Subtle Gold Septum', value: 'a subtle gold septum piercing' },
      { name: 'Multiple Ear Piercings', value: 'multiple delicate gold hoops and studs on the ears' },
    ],
    body_art: [
      { name: 'None', value: 'none' },
      { name: 'Gold Leaf Accents', value: 'artistic application of gold leaf on the skin' },
      { name: 'White Henna Patterns', value: 'delicate white henna patterns on the hands and feet' },
    ],
    nail_art: [
      { name: 'Natural Manicure', value: 'natural manicure, clean and simple' },
      { name: 'Glossy Black Polish', value: 'glossy, matching black nail polish on fingernails and toenails' },
      { name: 'Classic Red Polish', value: 'classic, high-gloss red nail polish' },
      { name: 'Black Matte Nails', value: 'black matte nails' },
      { name: 'Opalescent Nail Art', value: 'opalescent nail art that catches the light with a pearly sheen' },
    ],
    high_heels: [
      { name: 'Not Visible', value: 'not visible' },
      { name: 'Sharp Stiletto Heels', value: 'sharp, modern stiletto high heels' },
      { name: 'Architectural High Heels', value: 'architectural black high heels with a bold, unique heel geometry' },
    ],
  },
  skin_micro_details: [
    { name: 'Authentic (Visible Pores)', value: 'Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing.' },
    { name: 'Subtle Subsurface Scattering', value: 'Realistic skin texture with pronounced subsurface scattering, creating a soft, life-like glow as light penetrates and diffuses just below the surface, especially evident around the nose and ears.' },
    { name: 'Flawless Editorial Skin', value: 'Perfectly smooth, high-fashion editorial skin. While pores are minimized, a micro-texture is retained to avoid a plastic look. Highlights show a gentle falloff.' },
    { name: 'Cinematic Skin', value: 'Realistic skin with a cinematic feel, showing natural texture and subtle details that catch the light beautifully. Retains a filmic quality with a visible, fine grain texture.' },
  ],
  fabric_physics: [
    { name: 'Natural Linen Drape', value: 'The linen drapes naturally, with realistic creases and folds that follow the subject\'s form. The weave of the fabric is visible upon close inspection, showing subtle textile imperfections.' },
    { name: 'Flowing Silk Dynamics', value: 'The silk fabric is captured with dynamic, flowing motion. It appears lightweight, with realistic transparency where stretched and bunched, and follows the contours of the body with liquid grace.' },
    { name: 'Structured Tweed Form', value: 'Heavy tweed fabric holds its shape with architectural precision. The thick, complex weave is clearly visible, and the garment\'s seams create strong, defined lines.' },
    { name: 'Clinging Wet Look', value: 'Fabric (like cotton or chiffon) clings to the skin as if damp, revealing the form beneath in a subtle, artistic way. Small droplets might be visible on the fabric surface.' },
  ],
  material_properties: [
    { name: 'Matte Linen & Skin Contrast', value: 'The off-white linen has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject\'s skin. No synthetic sheen.' },
    { name: 'Liquid Satin Sheen', value: 'Liquid satin with a high specular sheen, creating brilliant, sharp highlights where the light hits directly, and falling into deep, rich shadows. The color shifts with the light angle.' },
    { name: 'Intricate Lace & Mesh', value: 'The material is a combination of intricate floral lace patterns and fine, sheer mesh. Light passes through the mesh, creating a delicate pattern on the skin, while the lace remains opaque.' },
    { name: 'High-Gloss Latex', value: 'High-gloss black latex that acts like a mirror, reflecting the light source and environment with sharp, distorted highlights. The material appears slick and futuristic.' },
  ],
  lighting: [
    { name: 'Cinematic Volumetric Lighting', value: 'Cinematic volumetric lighting, with strong beams of light cutting through atmospheric haze, creating a sense of depth and mystery.' },
    { name: 'Soft Diffused Studio Light', value: 'Soft, diffused studio lighting that eliminates harsh shadows and provides an even, flattering illumination, perfect for beauty shots.' },
    { name: 'Dramatic Rim Lighting', value: 'Dramatic rim lighting that outlines the subject against a dark background, emphasizing their silhouette and creating a bold, graphic effect.' },
    { name: 'Bioluminescent Glow', value: 'Bioluminescent lighting, with soft, natural glows emanating from fantastical flora or otherworldly sources, creating an enchanting and magical ambiance.' },
    { name: 'Dynamic Strobe Flash', value: 'Strobe lighting with sharp, fast flashes, creating a sense of dynamic motion and high energy, with distinct frozen moments.' },
    { name: 'Dappled Light (Venetian Blinds)', value: 'Sunlight or moonlight filtering through Venetian blinds, casting a dramatic pattern of sharp light and shadow stripes across the subject and the room.' },
    { name: 'Soft Clamshell Lighting', value: 'Classic beauty lighting setup with two soft light sources on the subject from above and below, creating a clean, glamorous look with minimal shadows.' },
    { name: 'Hard High-Angle Studio', value: 'Hard, directional warm studio lighting from a high side angle, creating dramatic, sharp shadows and brilliant highlights that intricately sculpt textures.' },
    { name: 'Filtered Light Moiré Pattern', value: 'Sunlight filtered through two layers of patterned lace or mesh curtains, creating a complex, soft-edged moiré or cross-hatch shadow pattern.' },
    { name: 'Soft Side-Wrap Light (Octabox)', value: 'A single, large, soft light source (like a large octabox softbox) placed to the side and slightly behind, creating a soft, wrapping light that highlights contours.' },
    { name: 'Graphic Spotlight (\'Throne of Light\')', value: 'A single, hard light source (like a projector or spotlight) casts a sharp, defined rectangle of bright white light on the wall, creating a stark, high-contrast separation.' },
    { name: 'Painterly Chiaroscuro (Caravaggio)', value: 'Dramatic, single-source Chiaroscuro lighting from the side and slightly above, illuminating part of the form while the rest of a falls into deep shadow, in the style of Caravaggio.' },
    { name: 'Moody Bedside Lamp', value: 'Moody cinematic lighting from a single bedside lamp, creating deep shadows and a glamorous, intimate feel.' },
  ],
  camera: {
    focal_length: [
      { name: '35mm', value: '35mm' },
      { name: '50mm', value: '50mm' },
      { name: '85mm f/1.4 Portrait Lens', value: '85mm f/1.4 Portrait Lens' },
      { name: '105mm f/2.8 Macro Lens', value: '105mm f/2.8 Macro Lens' },
    ],
    aperture: [
      { name: 'f/1.8 (Creamy BG)', value: 'f/1.8' },
      { name: 'f/2.8', value: 'f/2.8' },
      { name: 'f/4.0', value: 'f/4.0' },
      { name: 'f/5.6', value: 'f/5.6' },
      { name: 'f/8.0 (Sharp BG)', value: 'f/8.0' },
    ],
    distance: [
      { name: '0.5 m (Macro)', value: '0.5 m' },
      { name: '1.5 m (Close-up)', value: '1.5 m' },
      { name: '3 m (Medium)', value: '3 m' },
      { name: '5 m (Full Body)', value: '5 m' },
    ],
    angle: [
      { name: 'Eye-Level', value: 'Eye-level, creating a direct and personal connection with the subject.' },
      { name: 'Low Angle', value: 'Dynamic low angle, emphasizing power and stature.' },
      { name: 'High Angle', value: 'High angle, looking down on the subject, creating a sense of vulnerability or introspection.' },
      { name: 'Bird\'s Eye View', value: 'Directly overhead (bird\'s-eye view), looking straight down, transforming the portrait into a graphic composition.' },
      { name: 'Dutch Angle', value: 'Tilted camera angle, creating a sense of unease, tension, or dynamic energy.' },
      { name: 'Over-the-Shoulder Shot', value: 'Shot from behind the subject\'s shoulder, often used in conversations or to create a sense of intimacy and point-of-view.' },
      { name: 'Low Angle (Glutes Focus)', value: 'A dynamic low angle, positioned to emphasize the sculptural curves of the buttocks and upper thighs, treating the form as an artistic landscape.' },
      { name: 'Side Profile (Hip Curve)', value: 'A side-profile angle, parallel to the subject, that frames the elegant S-curve of the hip and waist, focusing on the line and form.' },
      { name: 'High Angle (Décolletage Detail)', value: 'A high angle looking down, artistically framing the décolletage, collarbones, and shoulders, focusing on the interplay of light and shadow on the skin.' },
      { name: 'Profile Angle (Full Back)', value: 'A profile angle focused on capturing the full silhouette of the back, from shoulders to lower back, emphasizing the spine\'s curve and shoulder blades as a single, elegant form.' },
    ],
    framing: [
      { name: 'Tight Medium Shot', value: 'Tight medium shot, from the mid-torso up, emphasizing facial expression and hand placement.' },
      { name: 'Full Body (with Negative Space)', value: 'Full body shot, with significant negative space to emphasize the subject\'s form within the empty space.' },
      { name: 'Bust Close-up', value: 'A tight close-up framing from the chest or bust up, focusing on expression, makeup, and neckline details.' },
      { name: 'Glutes Close-up (Back)', value: 'A close-up shot focusing on the curvature and form of the buttocks from the back, often used in fitness or artistic photography.' },
      { name: 'Legs Close-up (Low Angle)', value: 'A low-angle close-up that emphasizes the length and shape of the legs, often showcasing footwear or stockings.' },
      { name: 'Décolletage Close-up', value: 'A close-up focusing on the chest and collarbone area, often to highlight a necklace, neckline, or the texture of the skin.' },
      { name: 'Lace/Fabric Texture Detail', value: 'A macro-style shot focusing on the intricate details and texture of a piece of fabric as it lies against the skin.' },
      { name: 'Three-Quarters (from Shin)', value: 'Three-quarters shot, from mid-shin up, emphasizing long lines of the legs and a commanding pose.' },
      { name: 'Overhead Neck-to-Hips', value: 'A medium close-up from an overhead angle, framing from the neck to the hips, focusing on the torso\'s texture and patterns.' },
    ],
  },
  color_grade: [
    { name: 'Warm & Natural', value: 'Warm, natural tones with a painterly quality. Soft, luminous highlights and gentle contrast, preserving the full spectrum of realistic skin tones.' },
    { name: 'Cool Cinematic', value: 'Cool, desaturated tones with deep blues and cyans in the shadows, creating a modern, cinematic feel.' },
    { name: 'High-Contrast B&W', value: 'High-contrast black and white, with deep, crushed blacks and brilliant, clean whites, emphasizing form and texture.' },
    { name: 'Vintage Sepia', value: 'Warm, brown-toned sepia finish, giving the image a nostalgic, vintage, and timeless quality.' },
    { name: 'Vibrant & Saturated', value: 'Bold, vibrant, and highly saturated colors, creating a lively, energetic, and eye-catching image.' },
    { name: 'Painterly Desaturated (Timeless)', value: 'Warm, rich, painterly tones. Deep browns, warm skin highlights, and velvety blacks. A desaturated, timeless feel.' },
    { name: 'Severe Monochromatic B&W', value: 'Almost monochromatic. Deep, crushed blacks, brilliant whites, and neutral skin tones. A clean, severe, high-fashion magazine aesthetic.' },
  ],
  style: [
    { name: 'Hyper-realistic Fine-Art', value: 'Hyper-realistic fine-art portraiture, a profound focus on emotional depth, authenticity, and technical perfection.' },
    { name: 'Cinematic Noir', value: 'A dark, moody, and atmospheric style inspired by classic film noir, with dramatic shadows and a sense of mystery.' },
    { name: 'Gritty Urban Realism', value: 'A raw, documentary-style approach that captures the authentic, unpolished beauty of an urban environment and its subject.' },
    { name: 'Vaporwave Aesthetic', value: 'A retro-futuristic style with a nostalgic nod to the 80s and 90s, featuring neon colors, glitch art, and classical statues.' },
    { name: 'Ansel Adams B&W', value: 'High-contrast, epic black and white landscape photography style, applied to portraiture for a dramatic, sculptural effect.' },
    { name: 'Neo-noir Sensuality', value: 'A modern take on film noir, blending its dark, moody atmosphere with a focus on sensual, intimate, and mysterious narratives.' },
    { name: 'Ethereal Dreamscape', value: 'A soft, otherworldly, and romantic style that blends reality with fantasy, often featuring hazy, glowing light and magical elements.' },
    { name: 'Baroque Glamour', value: 'An opulent, dramatic, and lavish style inspired by Baroque painting, characterized by rich textures, deep colors, and complex compositions.' },
    { name: 'Gritty Realism', value: 'A raw, unflinching, and authentic style that captures imperfections and genuine moments, often with a documentary-like feel.' },
    { name: 'Romantic Fashion', value: 'A soft, elegant, and romantic style often seen in high-fashion editorials, emphasizing flowing fabrics, soft light, and emotional connection.' },
    { name: 'Private & Personal', value: 'An intimate, candid, and personal style that feels like a private moment captured, often with natural light and a relaxed atmosphere.' },
    { name: 'Fine Art Sensuality', value: 'An artistic approach to sensuality that focuses on form, texture, and emotion rather than explicit detail, often using shadow and suggestion.' },
    { name: 'Fine-Art Dance Photography', value: 'A style focused on capturing the sculptural, minimalist, and elegant movement of the human form, as if in a dance.' },
    { name: 'Graphic Fashion-Editorial', value: 'A minimalist, powerful, and sensual style with a graphic quality, often seen in high-fashion magazines.' },
    { name: 'Classical-Dramatic (Boudoir)', value: 'An introspective, philosophical, and dramatic style reminiscent of classical paintings, applied to a boudoir setting.' },
    { name: 'Helmut Newton Inspired', value: 'A bold, cinematic, and glamorous style inspired by the iconic photographer Helmut Newton, often featuring powerful female subjects in luxurious settings.' },
    { name: 'Experimental Fine-Art Boudoir', value: 'An abstract, mysterious, and tactile approach to boudoir, focusing on texture, pattern, and the interplay of light and shadow over clear representation.' },
  ],
  quality: [
    { name: 'Hasselblad X2D', value: 'Shot on a Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus. Every micro-detail, from fabric weave to skin pores, is rendered with absolute clarity.' },
    { name: 'Kodak Portra 400 Look', value: 'Shot on Kodak Portra 400 film. 8k, natural textures, beautiful color rendition, and a subtle, pleasing film grain. High-end cinematic quality.' },
    { name: 'IMAX 70mm Cinematic', value: 'Cinematic still, shot on IMAX 70mm film. Incredible detail, epic scope, and rich, deep colors. Visible film grain.' },
    { name: 'Leica Noctilux Look', value: 'Shot on a Leica M11 with a Noctilux 50mm f/0.95 lens. Extremely shallow depth of field, beautiful bokeh, and a dreamy, ethereal quality.' },
    { name: 'RAW Cinematic (Helmut Newton)', value: 'A glamorous, bold, and realistic feel, inspired by the cinematic and provocative style of Helmut Newton. 8k, natural textures, no artificial plastic look, high-end cinematic quality.' },
  ],
  figure_and_form: [
    { name: 'Natural Form', value: "Natural form, emphasizing the realistic drape of fabric over the subject's physique. The lighting and pose are composed to be tasteful and artistic." },
    { name: 'Sculpted Form (Opaque)', value: "The subject's form is sculpted by tight, opaque clothing and dramatic lighting, emphasizing muscle tone and a powerful physique." },
    { name: 'Silhouette Through Sheer Fabric', value: "The subject's form is visible as a soft silhouette through sheer fabric, with details naturally obscured by shadow, moiré patterns, or fabric folds." },
    { name: 'Minimalist Nude (Shadow Play)', value: "Tasteful and minimalist artistic nude, where the \"wardrobe\" is the dramatic interplay of light and shadow sculpting the body, revealing and concealing form." },
    { name: 'Revealing Curves (Shadow Play)', value: 'Focus on revealing the natural curves and shapes of the body (e.g., lower back, upper bust) using strategic shadow and light, obscuring precise details for an artistic, evocative effect.'},
    { name: 'Back & Hip Curves (Kneeling)', value: 'Emphasizes the elegant S-curve of the spine and hips from a three-quarter back angle while kneeling, focusing on the fine lines of form.' },
    { name: 'Side Profile (Reclining)', value: 'Artistically frames the lines of the hip, thigh, and waist as a landscape of curves, with the subject reclining.' },
    { name: 'Torso Detail (Obscured)', value: 'A close-up on the torso, using sheer fabric, deep shadows, or other elements to highlight form while obscuring direct details.' },
  ],
};

interface PresetInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  presets: Preset[];
  disabled: boolean;
  isTextArea?: boolean;
}

const PresetInput: React.FC<PresetInputProps> = ({ label, value, onChange, presets, disabled, isTextArea = false }) => {
  const InputComponent = isTextArea ? 'textarea' : 'input';
  const rows = isTextArea ? 3 : undefined;

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-gray-300">{label}</label>
      <div className="relative">
        <InputComponent
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          rows={rows}
          className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 pr-10 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50"
        />
        <select
          onChange={(e) => e.target.value && onChange(e.target.value)}
          disabled={disabled}
          className="absolute inset-y-0 right-0 h-full w-10 bg-transparent border-none text-gray-400 appearance-none cursor-pointer focus:outline-none"
          title={`Load a preset for ${label}`}
          value=""
        >
          <option value="">...</option>
          {presets.map((preset) => (
            <option key={preset.name} value={preset.value}>
              {preset.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, children }) => {
  return (
    <details className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden" open>
      <summary className="px-5 py-3 font-bold text-lg text-white cursor-pointer hover:bg-gray-700/50 transition-colors">
        {title}
      </summary>
      <div className="p-5 border-t border-gray-700 space-y-4">
        {children}
      </div>
    </details>
  );
};

interface PromptEditorProps {
  promptData: PromptData;
  onPromptChange: (data: PromptData) => void;
  isLoading: boolean;
  generationSettings: GenerationSettings;
  onGenerationSettingsChange: (settings: GenerationSettings) => void;
  activeConcept: string;
  onConceptChange: (concept: ArtisticConcept) => void;
}

const seductressVariantNames = [
  "Indian Glamour Seductress (Dusky)",
  "Indian Femme Fatale (Dusky)",
  "Indian Bombshell Diva (Fair)",
];

const PromptEditor: React.FC<PromptEditorProps> = ({ 
  promptData, onPromptChange, isLoading, 
  generationSettings, onGenerationSettingsChange,
  activeConcept, onConceptChange 
}) => {
  const [isWardrobeModalOpen, setIsWardrobeModalOpen] = useState(false);
  const [riskAnalysis, setRiskAnalysis] = useState<RiskAnalysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const debounceTimeout = useRef<number | null>(null);

  const isSeductressMode = useMemo(() => {
    const currentVariantName = indianModelVariants.find(v => v.value === promptData.subject.variant)?.name;
    return seductressVariantNames.includes(currentVariantName || '');
  }, [promptData.subject.variant]);

  const dynamicPresets = useMemo(() => {
    if (isSeductressMode) {
      return {
        pose: [...seductressPresets.pose, ...presets.subject.pose],
        lighting: [...seductressPresets.lighting, ...presets.lighting],
        style: [...seductressPresets.style, ...presets.style],
        figure_and_form: [...seductressPresets.figure_and_form, ...presets.figure_and_form],
      };
    }
    return {
      pose: presets.subject.pose,
      lighting: presets.lighting,
      style: presets.style,
      figure_and_form: presets.figure_and_form,
    };
  }, [isSeductressMode]);
  
  const handleFieldChange = useCallback((field: keyof PromptData, value: string) => {
    onPromptChange({ ...promptData, [field]: value });
  }, [promptData, onPromptChange]);

  const handleNestedChange = useCallback((category: keyof PromptData, field: string, value: string) => {
    onPromptChange({
      ...promptData,
      [category]: {
        ...(promptData[category] as object),
        [field]: value,
      },
    });
  }, [promptData, onPromptChange]);

  const handleSettingsChange = useCallback((field: keyof GenerationSettings, value: string | number | boolean | null) => {
    onGenerationSettingsChange({ ...generationSettings, [field]: value });
  }, [generationSettings, onGenerationSettingsChange]);

  const handleConceptSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const conceptName = e.target.value;
    const selectedConcept = artisticConcepts.find(c => c.name === conceptName);
    if (selectedConcept) {
      onConceptChange(selectedConcept);
    }
  };

  const handleRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 2147483647);
    handleSettingsChange('seed', randomSeed);
  };
  
  const handleWardrobeSelect = (concept: WardrobeConcept) => {
    handleFieldChange('wardrobe', concept.prompt);
    setIsWardrobeModalOpen(false);
  };

  const handleSystemSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const systemName = e.target.value;
    if (!systemName) return;
    const selectedSystem = cameraSystems.find(s => s.name === systemName);
    if (selectedSystem) {
      onPromptChange({ ...promptData, ...selectedSystem.settings });
    }
  };
  
  const handleApplyRiskEnhancements = useCallback((enhancements: { original: string; replacement: string }[]) => {
    const recursiveReplace = (data: any): any => {
        if (typeof data === 'string') {
            let modifiedString = data;
            for (const { original, replacement } of enhancements) {
                const regex = new RegExp(`\\b${original}\\b`, 'gi');
                modifiedString = modifiedString.replace(regex, replacement);
            }
            return modifiedString;
        }
        if (Array.isArray(data)) {
            return data.map(item => recursiveReplace(item));
        }
        if (typeof data === 'object' && data !== null) {
            const newData: { [key: string]: any } = {};
            for (const key in data) {
                newData[key] = recursiveReplace(data[key]);
            }
            return newData;
        }
        return data;
    };
    
    const updatedPromptData = recursiveReplace(promptData) as PromptData;
    onPromptChange(updatedPromptData);
  }, [promptData, onPromptChange]);


  useEffect(() => {
    if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
    }
    if (!generationSettings.projectId || !generationSettings.accessToken) {
        setRiskAnalysis(null);
        return;
    }
    
    setIsAnalyzing(true);
    debounceTimeout.current = window.setTimeout(async () => {
        try {
            const analysis = await getRiskAnalysis(promptData, generationSettings.intimacyLevel, generationSettings);
            setRiskAnalysis(analysis);
        } catch (error) {
            console.error("Risk analysis failed:", error);
            setRiskAnalysis(null);
        } finally {
            setIsAnalyzing(false);
        }
    }, 750); // 750ms debounce

    return () => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
    };
  }, [promptData, generationSettings.intimacyLevel, generationSettings.projectId, generationSettings.accessToken]);


  return (
    <div className="space-y-6">
      <CollapsibleSection title="Artistic Concepts & Systems">
          <div className="flex flex-col gap-2">
            <label htmlFor="concept-selector" className="font-semibold text-gray-300">
              Concept Selector
            </label>
            <p className="text-sm text-gray-400 mb-2">Select a pre-configured artistic concept to instantly populate all settings, or choose '-- Custom --' to build your own from scratch.</p>
            <select
              id="concept-selector"
              value={activeConcept}
              onChange={handleConceptSelect}
              disabled={isLoading}
              className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50"
            >
              <option value="custom">-- Custom Prompt --</option>
              {artisticConcepts.map((concept) => (
                <option key={concept.name} value={concept.name}>
                  {concept.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="system-selector" className="font-semibold text-gray-300">
              Photographer Systems
            </label>
            <p className="text-sm text-gray-400 mb-2">Apply a complete system inspired by a master photographer to set the style, lighting, color, and camera settings.</p>
            <select
              id="system-selector"
              onChange={handleSystemSelect}
              disabled={isLoading}
              className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50"
              value=""
            >
              <option value="">-- Apply a Photographer System --</option>
              {cameraSystems.map((system) => (
                <option key={system.name} value={system.name}>
                  {system.name}
                </option>
              ))}
            </select>
          </div>
      </CollapsibleSection>
      
      <CollapsibleSection title="Core Concept">
        <PresetInput label="Shot" value={promptData.shot} onChange={(v) => handleFieldChange('shot', v)} presets={presets.shot} disabled={isLoading} isTextArea />
        <PresetInput label="Style / Mood" value={promptData.style} onChange={(v) => handleFieldChange('style', v)} presets={dynamicPresets.style} disabled={isLoading} isTextArea />
        <PresetInput label="Quality" value={promptData.quality} onChange={(v) => handleFieldChange('quality', v)} presets={presets.quality} disabled={isLoading} isTextArea />
      </CollapsibleSection>
      
      <CollapsibleSection title="Subject Details">
        <div className="relative">
            <PresetInput label="Model Variant" value={promptData.subject.variant} onChange={(v) => handleNestedChange('subject', 'variant', v)} presets={indianModelVariants} disabled={isLoading} isTextArea />
            {isSeductressMode && (
                <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    SEDUCTRESS MODE
                </div>
            )}
        </div>
        <PresetInput label="Pose" value={promptData.subject.pose} onChange={(v) => handleNestedChange('subject', 'pose', v)} presets={dynamicPresets.pose} disabled={isLoading} isTextArea />
        <PresetInput label="Hair Color" value={promptData.subject.hair_color} onChange={(v) => handleNestedChange('subject', 'hair_color', v)} presets={presets.subject.hair_color} disabled={isLoading} />
        <PresetInput label="Hair Style" value={promptData.subject.hair_style} onChange={(v) => handleNestedChange('subject', 'hair_style', v)} presets={presets.subject.hair_style} disabled={isLoading} />
      </CollapsibleSection>

      <CollapsibleSection title="Realism & Detail">
        <PresetInput label="Skin Finish" value={promptData.subject.skin_finish} onChange={(v) => handleNestedChange('subject', 'skin_finish', v)} presets={presets.subject.skin_finish} disabled={isLoading} isTextArea />
        <PresetInput label="Hand & Nail Details" value={promptData.subject.hand_and_nail_details} onChange={(v) => handleNestedChange('subject', 'hand_and_nail_details', v)} presets={presets.subject.hand_and_nail_details} disabled={isLoading} isTextArea />
      </CollapsibleSection>

      <CollapsibleSection title="Hyper-Realistic Details">
          <PresetInput label="Skin Micro-Details" value={promptData.skin_micro_details} onChange={(v) => handleFieldChange('skin_micro_details', v)} presets={presets.skin_micro_details} disabled={isLoading} isTextArea />
          <PresetInput label="Fabric Physics" value={promptData.fabric_physics} onChange={(v) => handleFieldChange('fabric_physics', v)} presets={presets.fabric_physics} disabled={isLoading} isTextArea />
          <PresetInput label="Material Properties" value={promptData.material_properties} onChange={(v) => handleFieldChange('material_properties', v)} presets={presets.material_properties} disabled={isLoading} isTextArea />
      </CollapsibleSection>

      <CollapsibleSection title="Styling & Wardrobe">
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <label htmlFor="wardrobe" className="font-semibold text-gray-300">Wardrobe</label>
                <button 
                  onClick={() => setIsWardrobeModalOpen(true)}
                  disabled={isLoading}
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 text-white font-semibold text-xs rounded-md shadow-sm hover:bg-gray-600 disabled:bg-gray-800/50 disabled:cursor-not-allowed transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    Browse Library
                </button>
            </div>
            <textarea
                id="wardrobe"
                value={promptData.wardrobe}
                onChange={(e) => handleFieldChange('wardrobe', e.target.value)}
                disabled={isLoading}
                rows={3}
                className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50"
            />
        </div>

        <PresetInput label="Figure & Form" value={promptData.figure_and_form} onChange={(v) => handleFieldChange('figure_and_form', v)} presets={dynamicPresets.figure_and_form} disabled={isLoading} isTextArea />
        <PresetInput label="Tattoos" value={promptData.subject.tattoos} onChange={(v) => handleNestedChange('subject', 'tattoos', v)} presets={presets.subject.tattoos} disabled={isLoading} />
        <PresetInput label="Piercings" value={promptData.subject.piercings} onChange={(v) => handleNestedChange('subject', 'piercings', v)} presets={presets.subject.piercings} disabled={isLoading} />
        <PresetInput label="Body Art" value={promptData.subject.body_art} onChange={(v) => handleNestedChange('subject', 'body_art', v)} presets={presets.subject.body_art} disabled={isLoading} />
        <PresetInput label="Nail Art" value={promptData.subject.nail_art} onChange={(v) => handleNestedChange('subject', 'nail_art', v)} presets={presets.subject.nail_art} disabled={isLoading} />
        <PresetInput label="High Heels" value={promptData.subject.high_heels} onChange={(v) => handleNestedChange('subject', 'high_heels', v)} presets={presets.subject.high_heels} disabled={isLoading} />
      </CollapsibleSection>
      
      <CollapsibleSection title="Scene & Camera">
         <div className="flex flex-col gap-2">
            <label htmlFor="environment-selector" className="font-semibold text-gray-300">Environment</label>
            <select
                id="environment-selector"
                value={promptData.environment}
                onChange={(e) => handleFieldChange('environment', e.target.value)}
                disabled={isLoading}
                className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50"
            >
                <option value={promptData.environment} disabled>-- Select an Environment --</option>
                {Object.entries(environmentCategories).map(([category, presets]) => (
                    <optgroup label={category} key={category}>
                        {presets.map(preset => (
                            <option key={preset.name} value={preset.value}>{preset.name}</option>
                        ))}
                    </optgroup>
                ))}
            </select>
        </div>
        <PresetInput label="Lighting" value={promptData.lighting} onChange={(v) => handleFieldChange('lighting', v)} presets={dynamicPresets.lighting} disabled={isLoading} isTextArea />
        <PresetInput label="Color Grade" value={promptData.color_grade} onChange={(v) => handleFieldChange('color_grade', v)} presets={presets.color_grade} disabled={isLoading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PresetInput label="Focal Length" value={promptData.camera.focal_length} onChange={(v) => handleNestedChange('camera', 'focal_length', v)} presets={presets.camera.focal_length} disabled={isLoading} />
            <PresetInput label="Aperture" value={promptData.camera.aperture} onChange={(v) => handleNestedChange('camera', 'aperture', v)} presets={presets.camera.aperture} disabled={isLoading} />
            <PresetInput label="Distance to Subject" value={promptData.camera.distance} onChange={(v) => handleNestedChange('camera', 'distance', v)} presets={presets.camera.distance} disabled={isLoading} />
            <PresetInput label="Angle" value={promptData.camera.angle} onChange={(v) => handleNestedChange('camera', 'angle', v)} presets={presets.camera.angle} disabled={isLoading} />
        </div>
        <PresetInput label="Framing" value={promptData.camera.framing} onChange={(v) => handleNestedChange('camera', 'framing', v)} presets={presets.camera.framing} disabled={isLoading} isTextArea />
      </CollapsibleSection>

      <CollapsibleSection title="Real-Time Risk Analysis">
          <RiskAnalysisPreview 
            analysis={riskAnalysis} 
            isLoading={isAnalyzing} 
            onApplyEnhancements={handleApplyRiskEnhancements}
          />
      </CollapsibleSection>
      
       <CollapsibleSection title="Generation Settings">
        <p className="text-sm text-gray-400 -mt-2 mb-4">Prompt enhancement and image generation require authentication with Google Cloud.</p>
        <div className="space-y-4">
            <div>
                <label htmlFor="projectId" className="font-semibold text-gray-300 block mb-2">Google Cloud Project ID</label>
                <input id="projectId" type="text" placeholder="e.g., my-gcp-project-123" value={generationSettings.projectId} onChange={(e) => handleSettingsChange('projectId', e.target.value)} disabled={isLoading} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50" />
            </div>
            <div>
                <label htmlFor="accessToken" className="font-semibold text-gray-300 block mb-2">OAuth2 Access Token</label>
                <input id="accessToken" type="password" placeholder="Enter your temporary access token" value={generationSettings.accessToken} onChange={(e) => handleSettingsChange('accessToken', e.target.value)} disabled={isLoading} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50" />
                 <p className="text-xs text-gray-500 mt-1">
                    You can generate a temporary token using the gcloud CLI: <code className="bg-gray-700 p-1 rounded">gcloud auth print-access-token</code>
                </p>
            </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 space-y-4">
            <IntimacyController 
              level={generationSettings.intimacyLevel}
              onLevelChange={(level) => handleSettingsChange('intimacyLevel', level)}
              disabled={isLoading}
            />
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700 space-y-4">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="modelId" className="font-semibold text-gray-300 block mb-2">Model Version</label>
                    <select id="modelId" value={generationSettings.modelId} onChange={(e) => handleSettingsChange('modelId', e.target.value)} disabled={isLoading} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50">
                        <option value="imagen-4.0-ultra-generate-001">Ultra Quality</option>
                        <option value="imagen-4.0-fast-generate-001">Fast Generation</option>
                    </select>
                </div>
                 <div>
                    <label htmlFor="seed" className="font-semibold text-gray-300 block mb-2">Seed</label>
                    <div className="relative">
                        <input id="seed" type="number" placeholder="Leave empty for random" value={generationSettings.seed ?? ''} onChange={(e) => handleSettingsChange('seed', e.target.value ? parseInt(e.target.value, 10) : null)} disabled={isLoading} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 pr-10 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50" />
                        <button onClick={handleRandomSeed} disabled={isLoading} className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400 hover:text-white" title="Generate random seed">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0L7.86 5.45A3.5 3.5 0 005.45 7.86L3.17 8.51c-1.56.38-1.56 2.6 0 2.98l2.28.65A3.5 3.5 0 007.86 14.55l.65 2.28c.38 1.56 2.6 1.56 2.98 0l.65-2.28a3.5 3.5 0 002.41-2.41l2.28-.65c1.56-.38 1.56-2.6 0-2.98l-2.28-.65A3.5 3.5 0 0012.14 5.45l-.65-2.28zM5 5a1 1 0 00-1 1v1a1 1 0 002 0V6a1 1 0 00-1-1zm10 10a1 1 0 00-1 1v1a1 1 0 002 0v-1a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                        </button>
                    </div>
                </div>
            </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="personGeneration" className="font-semibold text-gray-300 block mb-2">Person Generation</label>
                    <select id="personGeneration" value={generationSettings.personGeneration} onChange={(e) => handleSettingsChange('personGeneration', e.target.value)} disabled={isLoading} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50">
                        <option value="allow_all">Allow All</option>
                        <option value="allow_adult">Allow Adults Only</option>
                        <option value="dont_allow">Don't Allow</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="safetySetting" className="font-semibold text-gray-300 block mb-2">Safety Setting</label>
                    <select id="safetySetting" value={generationSettings.safetySetting} onChange={(e) => handleSettingsChange('safetySetting', e.target.value)} disabled={isLoading} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50">
                        <option value="block_few">Block Few</option>
                        <option value="block_some">Block Some</option>
                        <option value="block_most">Block Most</option>
                    </select>
                </div>
            </div>
             <div className="flex items-center gap-3">
                <input id="addWatermark" type="checkbox" checked={generationSettings.addWatermark} onChange={(e) => handleSettingsChange('addWatermark', e.target.checked)} disabled={isLoading} className="h-4 w-4 rounded border-gray-600 bg-gray-900/50 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="addWatermark" className="font-semibold text-gray-300">Add Watermark</label>
            </div>
            <div className="flex items-center gap-3">
                <input id="enhancePrompt" type="checkbox" checked={generationSettings.enhancePrompt} onChange={(e) => handleSettingsChange('enhancePrompt', e.target.checked)} disabled={isLoading} className="h-4 w-4 rounded border-gray-600 bg-gray-900/50 text-indigo-600 focus:ring-indigo-500" />
                <label htmlFor="enhancePrompt" className="font-semibold text-gray-300">Enhance Prompt</label>
            </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end mt-6 pt-6 border-t border-gray-700">
            <div>
                <label htmlFor="numberOfImages" className="font-semibold text-gray-300 block mb-2">Number of Images</label>
                <select id="numberOfImages" value={generationSettings.numberOfImages} onChange={(e) => handleSettingsChange('numberOfImages', parseInt(e.target.value))} disabled={isLoading} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
            </div>
            <div>
                <label htmlFor="aspectRatio" className="font-semibold text-gray-300 block mb-2">Aspect Ratio</label>
                <select id="aspectRatio" value={generationSettings.aspectRatio} onChange={(e) => handleSettingsChange('aspectRatio', e.target.value)} disabled={isLoading} className="w-full bg-gray-900/50 border border-gray-600 rounded-md p-2.5 text-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors disabled:bg-gray-800/50">
                    <option value="9:16">9:16 (Portrait)</option>
                    <option value="16:9">16:9 (Landscape)</option>
                    <option value="1:1">1:1 (Square)</option>
                    <option value="4:3">4:3</option>
                    <option value="3:4">3:4</option>
                </select>
            </div>
        </div>
      </CollapsibleSection>
       <WardrobeSelectorModal
        isOpen={isWardrobeModalOpen}
        onClose={() => setIsWardrobeModalOpen(false)}
        concepts={allWardrobeConcepts}
        onSelect={handleWardrobeSelect}
      />
    </div>
  );
};

export default PromptEditor;