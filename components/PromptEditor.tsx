
import React, { useCallback, useMemo } from 'react';
import type { PromptData, Preset, GenerationSettings } from '../types';
import { artisticConcepts, ArtisticConcept } from '../concepts/concepts';

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
    age: [
        { name: 'Young Adult (20-25)', value: 'Young adult woman (20-25)' },
        { name: 'Adult (25-30)', value: 'Adult woman (25-30)' },
        { name: 'Mature (35-45)', value: 'Mature woman (35-45)' },
    ],
    appearance: [
        { name: 'Indian Fashion Model', value: `Indian fashion model (height 5'8\\"), with body proportions (bust 36\\", waist 28\\", hips 38\\"), radiant skin tone, a captivating and energetic gaze.` },
        { name: 'Glamour Bold Model', value: `High-fashion glamour model (height 6'0\\"), athletic build (bust 34\\", waist 26\\", hips 36\\"), flawless porcelain skin tone. Piercing, confident gaze.` },
        { name: 'Ethereal Alt Model', value: `Ethereal alternative model (height 5'9\\"), slender, statuesque figure with pale skin. Bold graphic eyeliner.` },
        { name: 'Sun-Kissed Fitness Model', value: `Vibrant fitness model (height 5'10\\"), with a toned athletic physique and sun-kissed, glowing skin. Energetic expression and a confident smile.`},
        { name: 'Scandinavian Athlete', value: 'Scandinavian athletic model, tall with a lean build, clear blue eyes, and a determined expression.' },
        { name: 'Gothic Artist', value: 'Gothic artist with pale skin, dark makeup, and an introspective, mysterious gaze, adorned with silver jewelry.' },
    ],
    skin_details: [
        { name: 'Authentic (Visible Pores)', value: 'Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. No airbrushing, creating a raw and honest depiction of beauty.' },
        { name: 'Dewy & Glowing', value: 'Dewy, glowing skin with a soft, luminous quality. Appears healthy and hydrated, with a subtle sheen on the high points of the face.' },
        { name: 'Matte & Flawless', value: 'Perfectly smooth, matte skin finish, like a high-fashion editorial. Pores are minimized, but texture is still present to avoid a plastic look.' },
        { name: 'Cinematic Skin', value: 'Realistic skin with a cinematic feel, showing natural texture and subtle details that catch the light beautifully. Retains a filmic quality.' },
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
  wardrobe: [
    { name: 'Intimate Lingerie Set', value: 'A delicate and intricate matching lingerie set in silk and lace, perhaps in a soft color like dusty rose or classic black, emphasizing fine details and textures.' },
    { name: 'Caged Bodysuit (Sensual)', value: 'A sensual caged-style bodysuit with sheer panels and intricate strap details, creating a bold, graphic look.' },
    { name: 'Open-Back Satin Bodysuit', value: 'An elegant open-back bodysuit made from liquid satin, combining allure with high-fashion sophistication.' },
    { name: 'Full-Body Micronet Dress', value: 'A daring full-body dress made from a fine, seamless micro-net fishnet, designed for an edgy, high-fashion aesthetic.' },
    { name: 'Stylized Torn Fishnets', value: 'Artistically torn and styled fishnet stockings, layered to create a graphic, deconstructed look.' },
    { name: 'Graphic Mesh Thong-Art', value: 'A minimalist yet futuristic piece focusing on a graphic thong made of sheer, structured mesh, creating bold lines against the skin.' },
    { name: 'Watercolor Transparent Set', value: 'A fine-art concept: a transparent mini-top and skirt with a soft, watercolor-like print, subtly revealing black mesh briefs underneath.' },
    { name: 'Sheer Lace V-Neck Bodysuit', value: 'A sensual yet high-fashion bodysuit in sheer lace with intricate net-like patterns and a daringly deep V-neckline.' },
    { name: 'Shimmering Mesh Bodysuit', value: 'A sleek, futuristic, high-neck, long-sleeve bodysuit made from a fine mesh that has a subtle, elegant shimmer.' },
    { name: 'Nylon Two-Piece Bodysuit', value: 'A modern, two-piece style bodysuit in stretch nylon with a sensual open back, delicate strap details, and a low-waist thong-art bottom.' },
    { name: 'Bodysuit (Shadow Play)', value: 'A conceptual bodysuit with extreme, artistic cutouts, designed not as clothing but as a tool to create a dynamic interplay of light and shadow on the form.' },
    { name: 'Ribbon-Bound Bodysuit', value: 'A sensual, gift-wrapped aesthetic created not from fabric, but from strategically wrapped and tied satin ribbons, forming a bodysuit-like shape.' },
    { name: 'Nude with Shadow & Obscurity', value: 'Artistic nude where the \'wardrobe\' is the clever use of deep shadows, draped fabric, or parts of the body itself to strategically obscure and reveal curves and form.' },
    { name: 'Graphic Netted Thong & Fabric', value: 'A minimalist, high-fashion aesthetic featuring a transparent, graphic mesh thong, paired with draped sheer fabric to create a composition of lines and obscured forms.' },
    { name: 'Liquid Metal Body Paint', value: 'The body is covered in reflective, liquid-metal-like body paint, transforming the subject into a living sculpture and highlighting every contour under dramatic light.' },
    { name: 'Scattered Petals Adornment', value: 'The body is tastefully and artistically adorned with clinging, scattered flower petals (e.g., crimson rose petals), creating a poetic and organic composition.' },
    { name: 'Unbuttoned Shirt & Briefs', value: 'A crisp, white, slightly oversized formal shirt, unbuttoned and casually draped off one shoulder, paired with simple, elegant lingerie briefs.' },
    { name: 'Structured Mesh Couture', value: 'Opaque BLACK high-glamour structured mesh innerwear (designer couture, intricate net/lace patterns, fully lined for artistic coverage, sleeveless, modern style), paired with seamless sheer thigh-high stockings.' },
    { name: 'Sheer Organza Shirt', value: 'An oversized, completely sheer black organza shirt, buttoned up. The dark, transparent fabric both reveals and obscures the form beneath.' },
    { name: 'Transparent Chiffon Gown', value: 'A long, flowing nightgown made of transparent chiffon, creating an ethereal and dreamy silhouette as light passes through it.' },
    { name: 'High-Gloss Latex Catsuit', value: 'A skin-tight, full-body catsuit made from high-gloss latex, emphasizing a sleek, futuristic, and powerful silhouette.' },
    { name: 'Artistic Draped Scarlet Silk', value: 'A single, long piece of flowing scarlet silk fabric, artistically draped around the body to create sculptural shapes that conceal and reveal the form.' },
    { name: 'Lace Bodysuit (Cutouts)', value: 'A delicate lace bodysuit with strategic, artistic cutouts.' },
    { name: 'Silk Bralette & High-Waist Briefs', value: 'A matching set of high-waisted silk briefs and a delicate bralette.' },
    { name: 'Full-Body Sheer Mesh Catsuit', value: 'A skin-tight catsuit made from fine, sheer mesh for a bold, graphic silhouette.' },
  ],
  environment: [
    { name: 'Minimalist Dark Wood Studio', value: 'Minimalist fashion studio with dominant, dark, richly grained wooden walls and floor. A single, large, dark wooden block or plinth serves as a subtle, grounding prop.' },
    { name: 'Bright, Simple Room', value: 'A simple, bright room with white walls and floors, creating a clean canvas for artistic expression.' },
    { name: 'Luxury Hotel (Night Cityscape)', value: 'A luxurious, modern hotel room with floor-to-ceiling windows revealing a dazzling cityscape at night. The room is immaculate with high-end furniture.' },
    { name: 'Luxury Hotel (Art Deco)', value: 'A luxury hotel room suite decorated with opulent Art Deco details: geometric patterns, gold accents, and plush velvet furniture.' },
    { name: 'Messy Luxury Hotel Room', value: 'A dimly lit luxurious hotel room post-celebration, with a messy king-sized bed with silk sheets.' },
    { name: 'Misty Redwood Forest', value: 'A serene and ancient redwood forest, with towering trees, a lush fern-covered floor, and a gentle, mysterious mist filtering the sunlight.' },
    { name: 'Sun-Drenched Tuscan Villa', value: 'The rustic stone patio of a Tuscan villa, bathed in the warm, golden light of late afternoon, overlooking rolling hills and vineyards.' },
    { name: 'Neon-Lit Cyberpunk Alley', value: 'A narrow, rain-slicked alley in a futuristic cyberpunk city, illuminated by the vibrant, chaotic glow of neon signs and holographic advertisements.' },
    { name: 'Baroque Palace Ballroom', value: 'An opulent, grand ballroom in a Baroque palace, with gilded moldings, crystal chandeliers, and polished marble floors.' },
    { name: 'Intimate Bedroom', value: 'An intimate bedroom setting with soft, unmade sheets on a bed, morning light filtering through a window, creating a personal and relaxed atmosphere.' },
    { name: 'Luxury Bathroom & Tub', value: 'A spacious, luxurious bathroom with marble surfaces, a large freestanding bathtub, and soft, ambient lighting.' },
    { name: 'Dim Cocktail Bar', value: 'The interior of a dimly lit, sophisticated cocktail bar or pub, with leather seats, dark wood, and the soft glow of bar lights.' },
    { name: 'Modern Office Space', value: 'A sleek, modern office space at night, with glass walls, designer furniture, and the ambient glow from computer monitors.' },
    { name: 'Empty Dance Studio / Loft', value: "An empty dance studio or artist's loft with smooth, light grey floors and walls. The space is vast and uncluttered." },
    { name: 'Minimalist Concrete Studio', value: 'A minimalist studio with a dark grey or black textured concrete wall. The floor is polished concrete that reflects subtle highlights.' },
    { name: 'Dark Room with Wood Floor', value: 'A dark, minimalist room with aged wooden floors and a single, textured, unadorned wall, creating a contemplative atmosphere.' },
    { name: 'Gritty Urban Loft', value: 'A gritty urban loft with exposed brick, pipes, large industrial windows, and a raw, edgy feel.' },
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
    { name: 'Painterly Chiaroscuro (Caravaggio)', value: 'Dramatic, single-source Chiaroscuro lighting from the side and slightly above, illuminating part of the form while the rest falls into deep shadow, in the style of Caravaggio.' },
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

const PromptEditor: React.FC<PromptEditorProps> = ({ 
  promptData, onPromptChange, isLoading, 
  generationSettings, onGenerationSettingsChange,
  activeConcept, onConceptChange 
}) => {
  
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

  return (
    <div className="space-y-6">
      <CollapsibleSection title="Artistic Concepts">
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
        </CollapsibleSection>
      
      <CollapsibleSection title="Core Concept">
        <PresetInput label="Shot" value={promptData.shot} onChange={(v) => handleFieldChange('shot', v)} presets={presets.shot} disabled={isLoading} isTextArea />
        <PresetInput label="Style / Mood" value={promptData.style} onChange={(v) => handleFieldChange('style', v)} presets={presets.style} disabled={isLoading} isTextArea />
        <PresetInput label="Quality" value={promptData.quality} onChange={(v) => handleFieldChange('quality', v)} presets={presets.quality} disabled={isLoading} isTextArea />
      </CollapsibleSection>
      
      <CollapsibleSection title="Subject Details">
        <PresetInput label="Age" value={promptData.subject.age} onChange={(v) => handleNestedChange('subject', 'age', v)} presets={presets.subject.age} disabled={isLoading} />
        <PresetInput label="Appearance" value={promptData.subject.appearance} onChange={(v) => handleNestedChange('subject', 'appearance', v)} presets={presets.subject.appearance} disabled={isLoading} isTextArea />
        <PresetInput label="Pose" value={promptData.subject.pose} onChange={(v) => handleNestedChange('subject', 'pose', v)} presets={presets.subject.pose} disabled={isLoading} isTextArea />
        <PresetInput label="Hair Color" value={promptData.subject.hair_color} onChange={(v) => handleNestedChange('subject', 'hair_color', v)} presets={presets.subject.hair_color} disabled={isLoading} />
        <PresetInput label="Hair Style" value={promptData.subject.hair_style} onChange={(v) => handleNestedChange('subject', 'hair_style', v)} presets={presets.subject.hair_style} disabled={isLoading} />
      </CollapsibleSection>

      <CollapsibleSection title="Realism & Detail">
        <PresetInput label="Skin Details" value={promptData.subject.skin_details} onChange={(v) => handleNestedChange('subject', 'skin_details', v)} presets={presets.subject.skin_details} disabled={isLoading} isTextArea />
        <PresetInput label="Hand & Nail Details" value={promptData.subject.hand_and_nail_details} onChange={(v) => handleNestedChange('subject', 'hand_and_nail_details', v)} presets={presets.subject.hand_and_nail_details} disabled={isLoading} isTextArea />
      </CollapsibleSection>

      <CollapsibleSection title="Styling & Wardrobe">
        <PresetInput label="Wardrobe" value={promptData.wardrobe} onChange={(v) => handleFieldChange('wardrobe', v)} presets={presets.wardrobe} disabled={isLoading} isTextArea />
        <PresetInput label="Figure & Form" value={promptData.figure_and_form} onChange={(v) => handleFieldChange('figure_and_form', v)} presets={presets.figure_and_form} disabled={isLoading} isTextArea />
        <PresetInput label="Tattoos" value={promptData.subject.tattoos} onChange={(v) => handleNestedChange('subject', 'tattoos', v)} presets={presets.subject.tattoos} disabled={isLoading} />
        <PresetInput label="Piercings" value={promptData.subject.piercings} onChange={(v) => handleNestedChange('subject', 'piercings', v)} presets={presets.subject.piercings} disabled={isLoading} />
        <PresetInput label="Body Art" value={promptData.subject.body_art} onChange={(v) => handleNestedChange('subject', 'body_art', v)} presets={presets.subject.body_art} disabled={isLoading} />
        <PresetInput label="Nail Art" value={promptData.subject.nail_art} onChange={(v) => handleNestedChange('subject', 'nail_art', v)} presets={presets.subject.nail_art} disabled={isLoading} />
        <PresetInput label="High Heels" value={promptData.subject.high_heels} onChange={(v) => handleNestedChange('subject', 'high_heels', v)} presets={presets.subject.high_heels} disabled={isLoading} />
      </CollapsibleSection>
      
      <CollapsibleSection title="Scene & Camera">
        <PresetInput label="Environment" value={promptData.environment} onChange={(v) => handleFieldChange('environment', v)} presets={presets.environment} disabled={isLoading} isTextArea />
        <PresetInput label="Lighting" value={promptData.lighting} onChange={(v) => handleFieldChange('lighting', v)} presets={presets.lighting} disabled={isLoading} isTextArea />
        <PresetInput label="Color Grade" value={promptData.color_grade} onChange={(v) => handleFieldChange('color_grade', v)} presets={presets.color_grade} disabled={isLoading} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <PresetInput label="Focal Length" value={promptData.camera.focal_length} onChange={(v) => handleNestedChange('camera', 'focal_length', v)} presets={presets.camera.focal_length} disabled={isLoading} />
            <PresetInput label="Aperture" value={promptData.camera.aperture} onChange={(v) => handleNestedChange('camera', 'aperture', v)} presets={presets.camera.aperture} disabled={isLoading} />
            <PresetInput label="Distance to Subject" value={promptData.camera.distance} onChange={(v) => handleNestedChange('camera', 'distance', v)} presets={presets.camera.distance} disabled={isLoading} />
            <PresetInput label="Angle" value={promptData.camera.angle} onChange={(v) => handleNestedChange('camera', 'angle', v)} presets={presets.camera.angle} disabled={isLoading} />
        </div>
        <PresetInput label="Framing" value={promptData.camera.framing} onChange={(v) => handleNestedChange('camera', 'framing', v)} presets={presets.camera.framing} disabled={isLoading} isTextArea />
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
    </div>
  );
};

export default PromptEditor;
