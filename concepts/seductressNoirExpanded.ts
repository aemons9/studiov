import type { ArtisticConcept } from './concepts';
import { indianModelVariants } from './subjects';

const seductressVariant = indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value;

const defaultSkinMicroDetails = "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing.";
const defaultFabricPhysics = "The fabric drapes naturally, with realistic creases and folds that follow the subject's form. The weave of the fabric is visible upon close inspection.";
const defaultMaterialProperties = "The material has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject's skin.";

export const seductressNoirExpanded: ArtisticConcept[] = [
  {
    name: 'Seductress Noir: Penthouse Silhouette',
    data: {
      shot: "Cinematic full body portrait (9:16), capturing power and grace against urban backdrop",
      subject: {
        variant: seductressVariant,
        pose: "Arching her back gracefully against a floor-to-ceiling rain-streaked window, one hand touching the glass above her head, the other trailing down her side. Looking over shoulder at camera with sultry confidence.",
        hair_color: "jet black",
        hair_style: "long, flowing waves cascading down her back, catching rim light from the window.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "A sheer black silk kimono-style robe with dramatic sleeves, worn open to reveal an architectural black lace bodysuit with geometric cutouts that trace the body's natural contours.",
      environment: "Luxury penthouse at night with floor-to-ceiling windows showcasing rain and city lights. Reflections dance across polished marble floors.",
      lighting: "Helmut Newton-inspired dramatic backlighting from the city outside, creating a luminous rim around her silhouette. Subtle warm accent light from interior sources sculpts her form.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "4 m",
        angle: "Slightly low angle to emphasize stature and drama",
        framing: "Full body shot with negative space, rain-streaked window dominating composition"
      },
      color_grade: "Cool Cinematic with desaturated blues and deep blacks, warm highlights on skin.",
      style: "Neo-noir Sensuality meets Helmut Newton's bold architectural fashion photography",
      quality: "Shot on Phase One XF IQ4 for hyper-realistic 150MP RAW cinematic output.",
      figure_and_form: "Silhouette Through Sheer Fabric: The backlight creates an artistic silhouette while revealing sculptural form through strategic transparency.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The silk kimono flows with liquid grace, creating dynamic shapes. The lace bodysuit shows realistic tension across curves.",
      material_properties: "Translucent silk with high-sheen properties contrasting with matte lace and specular skin highlights."
    }
  },

  {
    name: 'Seductress Noir: Boardroom Dominance',
    data: {
      shot: "Powerful medium shot (16:9), exuding executive authority and sensual confidence",
      subject: {
        variant: seductressVariant,
        pose: "Standing at the head of a massive boardroom table, leaning forward with both hands planted on the polished surface, commanding presence with direct, intense gaze into camera.",
        hair_color: "jet black",
        hair_style: "a severe, slicked-back low bun, emphasizing sharp cheekbones and fierce expression.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish, hands prominently displayed on table.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "A deconstructed power suit: tailored black blazer worn with nothing beneath except an intricate architectural harness-style foundation piece with geometric leather straps. High-waisted cigarette pants complete the ensemble.",
      environment: "Ultra-modern boardroom with floor-to-ceiling glass walls, sleek marble table, and city skyline at dusk visible through windows.",
      lighting: "Dramatic Peter Lindbergh-inspired single hard light source from above and behind, creating strong definition and theatrical shadows that emphasize power dynamics.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "2.5 m",
        angle: "Eye-level, positioned across the boardroom table for confrontational intimacy",
        framing: "Medium shot from mid-thigh up, rule of thirds composition"
      },
      color_grade: "Severe Monochromatic with crushed blacks and neutral skin tones, minimal color.",
      style: "Graphic Fashion-Editorial meets Peter Lindbergh's stark, powerful aesthetic",
      quality: "Shot on Hasselblad X2D. Unmatched 8K detail with razor-sharp focus on facial features and fabric texture.",
      figure_and_form: "Sculpted Form (Architectural): The structured blazer and geometric harness create powerful lines that emphasize both authority and sensuality.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Precision-tailored suiting holds architectural shape with clean, structured lines.",
      material_properties: "Matte wool suiting contrasting with glossy leather harness straps and patent accessories."
    }
  },

  {
    name: 'Seductress Noir: Velvet Sanctuary',
    data: {
      shot: "Intimate full body shot (9:16), luxurious and decadent",
      subject: {
        variant: seductressVariant,
        pose: "Reclining languidly on a crushed velvet chaise lounge, one leg bent with heel resting on the seat, the other extended. One arm draped overhead, the other touching her neck. Head tilted back with eyes half-closed in pleasure.",
        hair_color: "jet black",
        hair_style: "long, loose waves spilling over the edge of the chaise, creating cascading texture.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with classic red polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic Red Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "A decadent ensemble: sheer black silk stockings with garter straps, an ornate black lace corset with intricate embroidery, and a floor-length sheer black chiffon robe that pools on the floor.",
      environment: "Opulent private lounge with rich burgundy velvet furniture, ornate gold-framed mirrors, and soft candlelight creating an intimate sanctuary.",
      lighting: "Paolo Roversi-inspired soft, diffused lighting with warm amber tones that wrap around the form, creating dreamy, painterly quality with gentle shadows.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/1.8",
        distance: "3.5 m",
        angle: "Slightly high angle, looking down at the reclining figure",
        framing: "Full body shot with the chaise lounge dominating lower third"
      },
      color_grade: "Warm & Romantic with rich burgundy and amber tones, soft film grain for texture.",
      style: "Romantic Fashion meets Paolo Roversi's dreamy, soft-focus sensuality",
      quality: "Shot on Kodak Portra 800 film. Beautiful color rendition, soft grain, and ethereal quality.",
      figure_and_form: "Revealing Curves (Fabric Play): The corset cinches the waist while the flowing chiffon creates soft, romantic shapes around the form.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The chiffon robe flows like water, pooling naturally. The corset shows realistic structure and compression. Stockings have subtle sheen with authentic seam lines.",
      material_properties: "Multiple texture interplay: liquid chiffon, structured satin corset, semi-gloss stockings, and crushed velvet upholstery."
    }
  },

  {
    name: 'Seductress Noir: Mirror Play',
    data: {
      shot: "Artistic double-perspective shot (16:9), creating visual intrigue through reflection",
      subject: {
        variant: seductressVariant,
        pose: "Standing before a full-length ornate mirror, back to camera but face visible in reflection. One hand touching the mirror's surface, the other on her hip. Direct eye contact through the reflection.",
        hair_color: "jet black",
        hair_style: "long dark hair swept over one shoulder, visible from back and reflection.",
        skin_finish: "Natural Glow",
        hand_and_nail_details: "Graceful & Anatomically Correct with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "A backless black velvet gown with a deep V that extends to the small of her back, the front only visible in mirror reflection. The dress features a high slit revealing architectural lace garter details.",
      environment: "Elegant dressing room with vintage ornate gold mirror, soft drapery, and ambient warm lighting.",
      lighting: "Richard Avedon-inspired classic beauty lighting from the front (reflecting in mirror) creating even, flattering illumination on her face, while rim light separates her back from the background.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Eye-level, capturing both back and mirror reflection simultaneously",
        framing: "Vertical composition with mirror dominating frame, subject's back in lower portion"
      },
      color_grade: "Warm & Natural with golden highlights and soft shadows, timeless quality.",
      style: "Fine Art Sensuality meets Richard Avedon's elegant portraiture",
      quality: "Shot on Hasselblad 503CW with Zeiss Planar 80mm on Kodak Portra 400. Perfect color balance and medium format detail.",
      figure_and_form: "Elegant Silhouette: The backless gown reveals the sculptural lines of the spine and shoulders while the reflection provides frontal context.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The velvet gown drapes with luxurious weight, creating natural folds. Realistic fabric compression at the waist.",
      material_properties: "Rich crushed velvet with directional pile creating subtle texture variations, contrasting with smooth skin and reflective mirror surface."
    }
  },

  {
    name: 'Seductress Noir: Midnight Smoke',
    data: {
      shot: "Moody close-up portrait (9:16), film noir atmosphere with cinematic haze",
      subject: {
        variant: seductressVariant,
        pose: "Seated on a bar stool, leaning back slightly with one elbow resting on the bar, the other hand elegantly holding a crystal glass. Chin tilted up, eyes looking down at camera with sultry, knowing expression.",
        hair_color: "jet black",
        hair_style: "vintage finger waves with a deep side part, creating classic film noir glamour.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with classic red polish, hand gracefully holding crystal.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic Red Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "A slinky, bias-cut black silk slip dress with cowl neckline and razor-thin straps, worn with a vintage-inspired black lace longline bra subtly visible through the silk.",
      environment: "Dimly lit upscale cocktail bar with Art Deco elements, atmospheric haze, and warm amber lighting from vintage fixtures.",
      lighting: "Classic film noir lighting: hard side light creating dramatic shadows on one side of face, atmospheric volumetric lighting through haze, warm practical lights from bar creating rim highlights.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "2 m",
        angle: "Slightly low angle to create classic film noir power dynamic",
        framing: "Bust close-up from mid-torso to top of head, rule of thirds composition"
      },
      color_grade: "Classic Film Noir: High contrast with deep blacks, warm amber highlights, and subtle desaturation.",
      style: "Classic Film Noir meets Helmut Newton's provocative elegance",
      quality: "Shot on ARRI Alexa 65 for cinematic film quality with organic grain structure.",
      figure_and_form: "Silhouette Through Sheer Fabric: The bias-cut silk clings naturally, revealing form while the lace bra provides geometric visual interest beneath.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The bias-cut silk drapes with liquid weight, following body contours with authentic fluidity.",
      material_properties: "High-sheen silk with specular highlights contrasting with matte lace texture and diffuse atmospheric haze."
    }
  },

  {
    name: 'Seductress Noir: Golden Hour Intimacy',
    data: {
      shot: "Dreamy full body portrait (9:16), bathed in warm natural light",
      subject: {
        variant: seductressVariant,
        pose: "Standing by sheer curtained window, one arm raised touching the curtain, the other hand resting on her hip. Head turned to profile, eyes closed, basking in the golden light streaming through.",
        hair_color: "jet black",
        hair_style: "long, loose natural waves catching and glowing in the golden light.",
        skin_finish: "Dewy & Luminous with pronounced subsurface scattering",
        hand_and_nail_details: "Natural & Unadorned with subtle nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural nude polish",
        high_heels: "not visible"
      },
      wardrobe: "A minimalist ensemble: a sheer ivory silk robe worn loosely, revealing a delicate nude lace bralette and matching high-waisted brief. Emphasis on natural beauty and soft textures.",
      environment: "Minimalist bedroom with white sheer curtains billowing softly, golden hour sunlight streaming through, creating an ethereal sanctuary.",
      lighting: "Peter Lindbergh-inspired natural window light: soft, directional golden hour sunlight streaming through sheer curtains, creating luminous wrap-around lighting with glowing rim highlights.",
      camera: {
        focal_length: "50mm",
        aperture: "f/1.8",
        distance: "3 m",
        angle: "Eye-level, capturing the intimate moment in profile",
        framing: "Full body shot with window and curtains framing the subject"
      },
      color_grade: "Warm & Luminous with golden tones, soft highlights, and dreamy quality.",
      style: "Private & Personal meets Peter Lindbergh's natural, unretouched beauty philosophy",
      quality: "Shot on Leica M11 with Summilux 50mm f/1.4. Exceptional bokeh, natural color, and filmic quality.",
      figure_and_form: "Natural form with emphasis on authentic beauty, soft curves illuminated by natural light.",
      skin_micro_details: "Hyper-realistic skin with visible texture, freckles, and golden subsurface scattering where light penetrates the skin. Natural, unretouched beauty.",
      fabric_physics: "The sheer curtains and robe flow and billow naturally with air movement, creating dynamic shapes.",
      material_properties: "Translucent silk and sheer linen that glows when backlit, creating ethereal luminosity."
    }
  },

  {
    name: 'Seductress Noir: Urban Edge',
    data: {
      shot: "Bold full body shot (9:16), gritty urban aesthetic with high fashion edge",
      subject: {
        variant: seductressVariant,
        pose: "Leaning against a concrete pillar with one leg bent, foot against the wall. Arms crossed confidently or one hand in hair. Direct, defiant gaze into camera.",
        hair_color: "jet black",
        hair_style: "wild, windswept waves with deliberate messiness, creating edgy, rebellious energy.",
        skin_finish: "Natural Glow",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "Subtle Gold Septum",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Combat-style High Heeled Boots"
      },
      wardrobe: "Edgy haute couture: a deconstructed black leather harness top with architectural straps, high-waisted leather pants with strategic cutouts, and an oversized black blazer draped off shoulders.",
      environment: "Urban concrete environment: raw concrete walls, industrial metal elements, graffiti accents, and atmospheric mist at ground level.",
      lighting: "Helmut Newton-inspired dramatic hard lighting: strong directional light creating defined shadows and rim lighting that separates subject from gritty background.",
      camera: {
        focal_length: "35mm",
        aperture: "f/2.8",
        distance: "3.5 m",
        angle: "Slightly low angle to emphasize power and attitude",
        framing: "Full body shot with industrial background, asymmetric composition"
      },
      color_grade: "Cool Cinematic with desaturated colors, teal shadows, and high contrast.",
      style: "Urban High Fashion meets Helmut Newton's bold, provocative style",
      quality: "Shot on Sony A1 with G Master 35mm f/1.4. Ultra-sharp modern digital rendering with cinematic quality.",
      figure_and_form: "Sculpted Form (Architectural): The leather harness and high-waisted pants create powerful geometric lines emphasizing curves and attitude.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Leather shows realistic creasing and tension. The oversized blazer drapes with structured weight.",
      material_properties: "Matte and glossy leather textures with high-contrast specular highlights, contrasting with rough concrete texture."
    }
  },

  {
    name: 'Seductress Noir: Silk Sheets',
    data: {
      shot: "Intimate medium shot (16:9), capturing sensual relaxation and natural beauty",
      subject: {
        variant: seductressVariant,
        pose: "Lying on silk sheets, propped up on one elbow, body creating a natural S-curve. One leg bent, the other extended. Free hand touching her hair or face. Soft, inviting expression with half-smile.",
        hair_color: "jet black",
        hair_style: "tousled, naturally messy waves spread across the pillow, authentic bedhead glamour.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible"
      },
      wardrobe: "Minimal coverage: a delicate black lace bralette with intricate floral patterns, paired with high-waisted lace-trimmed silk shorts. Most of the body exposed, emphasizing natural beauty.",
      environment: "Luxury hotel bedroom with ivory silk sheets, soft drapery, and warm morning light filtering through sheer curtains.",
      lighting: "Annie Leibovitz-inspired soft, natural window light creating gentle wrap-around illumination with soft shadows that sculpt form beautifully.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "2 m",
        angle: "Slightly high angle, as if viewer is nearby on the bed",
        framing: "Medium shot from mid-thigh to top of head, intimate composition"
      },
      color_grade: "Warm & Natural with soft, luminous skin tones and creamy highlights.",
      style: "Private & Personal meets Annie Leibovitz's intimate storytelling",
      quality: "Shot on Canon EOS R5 with RF 85mm f/1.2. Beautiful bokeh, natural color science, and skin tone rendering.",
      figure_and_form: "Natural curves emphasized by pose and natural lighting, authentic and unretouched.",
      skin_micro_details: "Authentic skin texture with visible pores, natural flush, and subsurface scattering. Real beauty without artifice.",
      fabric_physics: "Silk sheets drape and wrinkle naturally around the body. Lace shows realistic structure and transparency.",
      material_properties: "High-sheen silk contrasting with delicate semi-transparent lace and natural skin luminosity."
    }
  },

  {
    name: 'Seductress Noir: Shadow Sculpture',
    data: {
      shot: "Artistic full body shot (9:16), emphasizing form through dramatic shadow play",
      subject: {
        variant: seductressVariant,
        pose: "Standing in contrapposto, weight on one leg creating natural hip tilt and spine curve. One arm raised behind head, the other at her side. Chin tilted up, eyes closed or looking off-camera.",
        hair_color: "jet black",
        hair_style: "long dark hair pulled back severely into a high ponytail, emphasizing facial structure and neck line.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Graceful & Anatomically Correct.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Minimalist fine art: a single high-waisted black mesh thong with geometric strap details. The rest of the body unadorned, sculpted purely by light and shadow.",
      environment: "Minimalist concrete studio with smooth grey walls and floor, vast negative space creating gallery-like atmosphere.",
      lighting: "Hard High-Angle Studio light inspired by fine art photography: dramatic single-source lighting from high side angle creating sharp, defined shadows that intricately sculpt every contour and texture.",
      camera: {
        focal_length: "50mm",
        aperture: "f/8.0",
        distance: "5 m",
        angle: "Eye-level for classical proportion",
        framing: "Full body with significant negative space, centered composition"
      },
      color_grade: "High-Contrast B&W with deep crushed blacks and brilliant clean whites, emphasizing sculptural form.",
      style: "Fine-Art Dance Photography meets Graphic Fashion-Editorial",
      quality: "Shot on Hasselblad X2D. Unmatched 8K detail with perfect tonal gradation from highlight to shadow.",
      figure_and_form: "Minimalist Nude (Shadow Play): Light and shadow create the composition, revealing form through chiaroscuro rather than color or context.",
      skin_micro_details: "Every pore, freckle, and subtle skin texture visible in the lit areas. Sharp shadow edges create dramatic sculptural definition.",
      fabric_physics: "Minimal fabric - only geometric mesh thong showing realistic tension and structure.",
      material_properties: "Primary focus on skin: matte finish in shadows, subtle specular highlights where light hits directly, creating dimensional form."
    }
  },

  {
    name: 'Seductress Noir: Crimson Passion',
    data: {
      shot: "Dramatic medium shot (16:9), combining power and sensuality with bold color accent",
      subject: {
        variant: seductressVariant,
        pose: "Seated on the edge of a velvet chair, leaning forward with forearms on knees, hands clasped. Direct, intense eye contact. Legs crossed, creating elegant lines.",
        hair_color: "jet black",
        hair_style: "sleek, straight hair with precise middle part, falling like silk curtains framing her face.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with statement crimson red polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Statement Crimson Red Polish",
        high_heels: "Crimson Red Stiletto Heels"
      },
      wardrobe: "Monochromatic power: entirely black ensemble consisting of a sheer black mesh bodysuit with architectural seaming, worn under an open black silk robe. The only color: crimson heels and nails.",
      environment: "Minimalist luxury space with black walls, a single crimson velvet chair, and dramatic singular light source creating theatre-like atmosphere.",
      lighting: "Irving Penn-inspired high-contrast studio lighting: single powerful light source creating dramatic highlight and shadow separation with absolute precision.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.8",
        distance: "2.5 m",
        angle: "Eye-level for confrontational intimacy and direct connection",
        framing: "Medium shot from knees to top of head, tight composition focusing on expression"
      },
      color_grade: "Monochromatic with selective color: entire image black and white except for crimson accents (heels, nails, chair).",
      style: "Graphic Fashion-Editorial meets Irving Penn's precise, minimalist aesthetic",
      quality: "Shot on Phase One XF IQ4 for ultimate technical perfection and color accuracy.",
      figure_and_form: "Sculpted Form with architectural mesh creating geometric patterns across curves, emphasized by precise lighting.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The mesh bodysuit shows realistic tension and compression. The silk robe drapes with luxurious weight.",
      material_properties: "Multiple black textures (mesh, silk, velvet) creating depth through subtle material variation, punctuated by glossy crimson accents."
    }
  }
];
