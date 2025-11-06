import type { ArtisticConcept } from './concepts';
import { indianModelVariants } from './subjects';

const seductressVariant = indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value;

const defaultSkinMicroDetails = "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing.";
const defaultFabricPhysics = "The fabric drapes naturally, with realistic creases and folds that follow the subject's form. The weave of the fabric is visible upon close inspection.";
const defaultMaterialProperties = "The material has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject's skin.";

export const seductressMaxCollection: ArtisticConcept[] = [
  {
    name: 'Seductress MAX: Private Studio Revelation',
    data: {
      shot: "Intimate full body portrait (9:16), artistic nude study emphasizing form and light",
      subject: {
        variant: seductressVariant,
        pose: "Standing in classical contrapposto pose with weight on one leg creating natural S-curve. One arm raised behind head, the other trailing down her side. Head tilted back, eyes closed in artistic contemplation. Body turned slightly to create elegant profile of curves.",
        hair_color: "jet black",
        hair_style: "long, loose waves cascading down back and over one shoulder, catching rim light beautifully.",
        skin_finish: "Dewy & Luminous with pronounced subsurface scattering",
        hand_and_nail_details: "Graceful & Anatomically Correct with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Minimal fine art: only a delicate high-waisted black mesh thong with geometric details and matching sheer thigh-high stockings. The rest unadorned, sculpted purely by light. Body art aesthetic emphasizing natural form.",
      environment: "Professional photography studio with seamless grey backdrop, vast negative space creating gallery-like fine art atmosphere. Polished concrete floor creating subtle reflections.",
      lighting: "Helmut Newton-inspired dramatic single hard light from high side angle creating sharp, defined shadows that sculpt every curve and contour. Rim light from opposite side separates form from background with luminous edge.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/4.0",
        distance: "4 m",
        angle: "Eye-level for classical proportions and respectful framing",
        framing: "Full body with significant negative space, rule of thirds composition"
      },
      color_grade: "High-Contrast B&W with deep crushed blacks and brilliant clean whites, emphasizing sculptural form.",
      style: "Fine-Art Dance Photography meets Helmut Newton's bold nude studies",
      quality: "Shot on Phase One XF IQ4 for hyper-realistic 150MP detail capturing every subtle texture and tonal gradation.",
      figure_and_form: "Minimalist Nude (Shadow Play): Light and shadow create the entire composition, revealing form through chiaroscuro mastery. Emphasis on natural curves, elegant lines, and sculptural beauty.",
      skin_micro_details: "Hyper-realistic rendering: every pore, freckle, beauty mark, and subtle skin texture visible in lit areas. Sharp shadow edges create dramatic dimensional sculpting. Subsurface scattering where light penetrates skin adds luminous life-like quality.",
      fabric_physics: "Minimal fabric - only delicate mesh showing realistic tension and transparency. Stockings display authentic sheen with visible texture.",
      material_properties: "Primary focus on skin: matte finish in shadows transitioning to subtle specular highlights where hard light hits directly, creating sculptural form through tonal gradation."
    }
  },

  {
    name: 'Seductress MAX: Architectural Body Form',
    data: {
      shot: "Bold full body shot (9:16), emphasizing geometric body architecture",
      subject: {
        variant: seductressVariant,
        pose: "Kneeling upright with back arched dramatically, sitting on heels, both arms stretched overhead with hands clasped. Head tilted back, chin up, creating elongated vertical line emphasizing spine curve and form. Powerful, confident expression.",
        hair_color: "jet black",
        hair_style: "severe high ponytail pulled tight, emphasizing facial structure and creating clean lines.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "Subtle Gold Septum",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Architectural minimalism: an intricate black leather harness system with geometric straps creating graphic patterns across the torso and hips. High-waisted architectural brief with strategic cutouts. The design emphasizes and frames natural form rather than concealing.",
      environment: "Industrial minimalist space with textured concrete walls, dramatic shadows, and cold ambient light creating stark, powerful atmosphere.",
      lighting: "Peter Lindbergh-inspired hard directional lighting from above creating strong definition and theatrical shadows. Additional rim light from behind creating separation and dimensional depth.",
      camera: {
        focal_length: "50mm",
        aperture: "f/5.6",
        distance: "3.5 m",
        angle: "Slightly low angle to emphasize power and stature",
        framing: "Full body from knees to fingertips, vertical composition emphasizing elongated form"
      },
      color_grade: "Severe Monochromatic with crushed blacks and neutral skin tones, high contrast emphasizing architecture.",
      style: "Graphic Fashion-Editorial meets architectural body photography",
      quality: "Shot on Hasselblad X2D for unmatched 8K detail capturing leather texture and skin micro-details with razor precision.",
      figure_and_form: "Architectural Emphasis: The geometric harness and dramatic pose create powerful lines emphasizing natural curves while projecting strength and confidence. Body becomes living sculpture.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Leather harness shows realistic tension and compression across curves. Material displays authentic creasing at stress points.",
      material_properties: "Matte and glossy leather with high-contrast specular highlights contrasting against skin texture and rough concrete."
    }
  },

  {
    name: 'Seductress MAX: Silk and Shadow Boudoir',
    data: {
      shot: "Intimate full body shot (16:9), capturing sensual vulnerability",
      subject: {
        variant: seductressVariant,
        pose: "Lying on side on silk sheets, body creating graceful S-curve. Bottom leg extended, top leg bent at knee. Lower arm supporting head, upper arm draped along torso. Looking directly at camera with intimate, vulnerable expression. Natural, unguarded beauty.",
        hair_color: "jet black",
        hair_style: "long, tousled waves spread across silk pillow, natural and authentic.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible"
      },
      wardrobe: "Intimate minimalism: a delicate black lace bralette with intricate floral patterns and matching high-waisted lace-trimmed briefs. Emphasis on natural beauty and intimate moment rather than costume.",
      environment: "Luxury boudoir with ivory silk sheets, soft white walls, sheer curtains, and warm morning light creating intimate private sanctuary.",
      lighting: "Paolo Roversi-inspired soft natural window light creating dreamy, luminous quality. Gentle wrap-around lighting with minimal shadows, emphasizing softness and vulnerability.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/1.8",
        distance: "2.5 m",
        angle: "Slightly high angle, intimate perspective",
        framing: "Full body shot with silk sheets and pillows framing subject"
      },
      color_grade: "Warm & Romantic with soft skin tones, creamy highlights, and gentle film grain adding tactile quality.",
      style: "Private & Personal meets Paolo Roversi's dreamy intimate aesthetic",
      quality: "Shot on Kodak Portra 400 for beautiful warm color rendition, soft grain, and timeless romantic quality.",
      figure_and_form: "Natural Intimate Form: The relaxed pose and minimal coverage emphasize authentic beauty and vulnerability. Natural curves rendered with soft, flattering light.",
      skin_micro_details: "Authentic skin with visible texture, natural flush, and soft subsurface scattering. Real, unretouched beauty capturing intimate moment.",
      fabric_physics: "Silk sheets drape naturally around body with realistic wrinkles. Delicate lace displays authentic structure with subtle transparency.",
      material_properties: "High-sheen silk contrasting with delicate semi-transparent lace and luminous natural skin tones."
    }
  },

  {
    name: 'Seductress MAX: Chiaroscuro Masterpiece',
    data: {
      shot: "Artistic full body portrait (9:16), painterly fine art composition",
      subject: {
        variant: seductressVariant,
        pose: "Seated on floor with knees drawn up and tucked to one side, torso turned, one arm wrapped around legs, other hand on floor for balance. Head bowed in contemplation, hair falling forward. Classical, sculptural pose evoking Renaissance painting.",
        hair_color: "jet black",
        hair_style: "long, dark hair falling forward creating natural frame and soft shadows across face.",
        skin_finish: "Natural Glow",
        hand_and_nail_details: "Graceful & Anatomically Correct.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible"
      },
      wardrobe: "Fine art minimal: a single piece of flowing burgundy silk fabric artistically draped around hips and between legs, leaving torso, back, and shoulders bare. Classical artistic nude aesthetic.",
      environment: "Dark intimate studio with aged wooden floor and textured dark wall, creating contemplative gallery atmosphere reminiscent of old master paintings.",
      lighting: "Caravaggio-inspired painterly chiaroscuro: dramatic single-source lighting from high side angle illuminating portions of form while rest falls into deep, rich shadow. Light appears to paint the subject rather than merely illuminate.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Slightly high angle creating classical artistic perspective",
        framing: "Full body with negative space, composed like Renaissance painting"
      },
      color_grade: "Painterly Desaturated with warm undertones in highlights and cool shadows, timeless fine art quality.",
      style: "Classical Fine Art meets Caravaggio's dramatic chiaroscuro technique",
      quality: "Shot on Hasselblad 503CW with Zeiss Planar on Kodak Portra 160 for smooth tonal gradation and painterly quality.",
      figure_and_form: "Classical Artistic Nude: Form sculpted entirely by light and shadow in the tradition of fine art masters. Emphasis on elegant lines, natural curves, and contemplative mood.",
      skin_micro_details: "Visible in illuminated areas: natural skin texture with soft detail. Smooth tonal gradation from highlight to deep shadow creates sculptural, three-dimensional form.",
      fabric_physics: "Silk drapes with classical elegance, flowing around form with liquid grace. Light catches sheen creating painterly highlights.",
      material_properties: "Liquid silk with high specular sheen contrasting with matte skin and deep, rich shadow tones."
    }
  },

  {
    name: 'Seductress MAX: Golden Goddess Study',
    data: {
      shot: "Ethereal full body portrait (9:16), goddess-like presence bathed in golden light",
      subject: {
        variant: seductressVariant,
        pose: "Standing tall with arms raised gracefully above head in dance-like gesture, body in elegant contrapposto creating flowing lines. One leg slightly forward, creating dynamic balance. Head turned to profile, eyes closed, basking in golden light. Serene, powerful presence.",
        hair_color: "jet black",
        hair_style: "long, flowing hair catching golden light, creating luminous halo effect.",
        skin_finish: "Dewy & Luminous with extreme subsurface scattering",
        hand_and_nail_details: "Graceful & Anatomically Correct with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural nude polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Goddess minimal: only delicate gold body chains draped across shoulders and around waist, catching light. A minimal nude mesh brief. The focus entirely on illuminated form and ethereal presence.",
      environment: "Minimalist white studio with seamless background, warm golden hour sunlight streaming through large diffused windows creating ethereal, heavenly atmosphere.",
      lighting: "Annie Leibovitz-inspired golden hour natural light: soft, warm, directional sunlight creating luminous wrap-around glow with pronounced subsurface scattering. Light appears to emanate from within the subject.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.8",
        distance: "4 m",
        angle: "Eye-level capturing goddess-like presence",
        framing: "Full body with ample negative space, centered composition emphasizing symmetry"
      },
      color_grade: "Warm & Luminous with golden tones, soft glowing highlights, and ethereal dreamy quality.",
      style: "Fine Art Sensuality meets Annie Leibovitz's iconic portrait style",
      quality: "Shot on Leica M11 with Summilux 50mm for exceptional color rendering and beautiful bokeh creating dreamlike quality.",
      figure_and_form: "Ethereal Goddess Form: Natural body illuminated by golden light creating transcendent beauty. Emphasis on elegant proportions and flowing lines.",
      skin_micro_details: "Hyper-realistic with extreme golden subsurface scattering where light penetrates skin creating luminous, goddess-like glow. Every detail visible yet rendered ethereally beautiful.",
      fabric_physics: "Minimal fabric - delicate body chains drape naturally with realistic weight and movement.",
      material_properties: "Gold chains with specular highlights, sheer mesh, and luminous skin with pronounced translucency in golden light."
    }
  },

  {
    name: 'Seductress MAX: Noir Luxury Suite',
    data: {
      shot: "Cinematic full body shot (16:9), film noir luxury and power",
      subject: {
        variant: seductressVariant,
        pose: "Reclining luxuriously on velvet chaise, propped on one elbow, body creating sensual curves. One leg bent with foot on chaise, other extended toward floor. Free hand touching hair. Sultry, knowing expression with half-lidded eyes. Radiating confidence and power.",
        hair_color: "jet black",
        hair_style: "vintage Hollywood waves with deep side part, creating classic film noir glamour.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with classic red polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic Red Polish",
        high_heels: "Sharp Stiletto Heels prominently displayed"
      },
      wardrobe: "Noir luxury: sheer black silk stockings with seams and lace tops, ornate black lace corset with intricate embroidery, and a floor-length sheer black chiffon robe worn open. Classic Hollywood glamour aesthetic.",
      environment: "Opulent art deco hotel suite with rich burgundy velvet furniture, gold accents, dramatic shadows, and warm amber lighting from vintage fixtures creating film noir atmosphere.",
      lighting: "Classic film noir lighting: hard dramatic side light creating stark shadows on one side, warm practical lights adding amber glow, atmospheric haze adding depth and mystery.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Slightly low angle emphasizing power and glamour",
        framing: "Full body shot with luxurious environment framing subject"
      },
      color_grade: "Classic Film Noir: high contrast with deep blacks, warm amber highlights, and rich saturated reds in selective areas.",
      style: "Neo-noir Sensuality meets classic Hollywood glamour photography",
      quality: "Shot on ARRI Alexa 65 for cinematic film quality with organic texture and rich color depth.",
      figure_and_form: "Luxury Noir Curves: The corset cinches waist dramatically while the reclining pose emphasizes natural curves. Classic Hollywood body sculpting through lighting and pose.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Stockings show authentic sheen with visible seams. Corset displays realistic structure and compression. Chiffon flows with ethereal liquid movement.",
      material_properties: "Multiple textures: glossy silk stockings, structured satin corset, translucent chiffon, and rich crushed velvet creating luxury material symphony."
    }
  },

  {
    name: 'Seductress MAX: Rooftop Edge Silhouette',
    data: {
      shot: "Dramatic full body silhouette (9:16), urban edge meets high fashion",
      subject: {
        variant: seductressVariant,
        pose: "Standing at rooftop edge with cityscape behind, one hand on hip, other at side. Strong contrapposto stance. Wind catching hair and fabric. Head turned to profile against bright city lights. Powerful, defiant presence.",
        hair_color: "jet black",
        hair_style: "long hair windswept and flowing dramatically, creating dynamic movement.",
        skin_finish: "Natural Glow",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "Subtle Gold Septum",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Urban edge minimal: a fitted black leather bodysuit with strategic cutouts and geometric panel design. Long flowing black coat worn open, billowing in wind. Architectural and powerful.",
      environment: "Urban rooftop at night with glittering city skyline stretching behind, creating dramatic backlit silhouette. Wind and atmospheric elements adding drama.",
      lighting: "Dramatic rim lighting from city lights behind creating luminous outline around entire form. Minimal front fill preserving bold silhouette while revealing subtle details. Helmut Newton-inspired urban drama.",
      camera: {
        focal_length: "35mm",
        aperture: "f/4.0",
        distance: "4 m",
        angle: "Eye-level emphasizing confidence and urban edge",
        framing: "Full body with city lights and skyline prominent in background"
      },
      color_grade: "Cool Cinematic with desaturated tones, deep blacks, and bright city light highlights creating dramatic contrast.",
      style: "Urban High Fashion meets Helmut Newton's bold architectural photography",
      quality: "Shot on Sony A1 with G Master 35mm for ultra-sharp modern rendering with exceptional dynamic range capturing both subject and bright city lights.",
      figure_and_form: "Urban Silhouette Power: Backlit form creates bold graphic composition while fitted bodysuit and dramatic lighting reveal powerful curves and confident stance.",
      skin_micro_details: "Minimal detail visible due to silhouette effect, focus on bold outline and rim-lit edges creating dimensional separation.",
      fabric_physics: "Long coat billows dramatically in wind with realistic movement. Leather bodysuit shows tension and structure.",
      material_properties: "Matte and glossy leather textures contrasting with atmospheric urban environment and bright specular highlights from city lights."
    }
  },

  {
    name: 'Seductress MAX: Crystal Clear Water Study',
    data: {
      shot: "Artistic full body shot (9:16), ethereal underwater-inspired fine art",
      subject: {
        variant: seductressVariant,
        pose: "Standing in shallow crystal clear water, arms raised gracefully overhead in flowing gesture, back slightly arched. Water at hip level. Head tilted back, eyes closed in blissful expression. Movement captured mid-motion creating dynamic fluidity.",
        hair_color: "jet black",
        hair_style: "long wet hair slicked back and flowing, water droplets catching light.",
        skin_finish: "Dewy & Luminous with water creating natural glistening",
        hand_and_nail_details: "Graceful & Anatomically Correct.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible"
      },
      wardrobe: "Water goddess minimal: only a minimal nude mesh brief, allowing focus on water-adorned form, light refraction, and natural beauty enhanced by crystal clear water.",
      environment: "Luxury infinity pool or shallow natural water with pristine white background, crystal clear water creating refraction and ripples, bright natural light creating ethereal atmosphere.",
      lighting: "Peter Lindbergh-inspired bright natural overhead light creating even illumination with water acting as secondary light source through refraction. Light bounces and dances creating magical quality.",
      camera: {
        focal_length: "50mm",
        aperture: "f/4.0",
        distance: "3.5 m",
        angle: "Eye-level capturing water line and full form",
        framing: "Full body from mid-thigh up, water surface visible at hip level"
      },
      color_grade: "Clean and Bright with natural tones, slight cool blue tint from water, ethereal and fresh quality.",
      style: "Fine Art Sensuality meets natural element photography",
      quality: "Shot on Hasselblad X2D for exceptional detail capturing water droplets, skin texture, and light refraction with hyper-realistic clarity.",
      figure_and_form: "Water Goddess Form: Natural body enhanced by glistening water, light refraction creating artistic patterns. Focus on natural beauty and fluid movement.",
      skin_micro_details: "Hyper-realistic with water droplets visible on skin, creating micro-lensing effect. Wet skin shows natural specular highlights and subsurface scattering.",
      fabric_physics: "Minimal fabric underwater showing realistic behavior. Water creates natural movement and flow.",
      material_properties: "Wet skin with high specular highlights, water creating refraction and transparency effects, crystal clear water acting as both medium and compositional element."
    }
  },

  {
    name: 'Seductress MAX: Intimate Close Encounter',
    data: {
      shot: "Ultra intimate close-up (9:16), maximum emotional connection",
      subject: {
        variant: seductressVariant,
        pose: "Extreme close-up focusing on face and upper torso. Eyes looking directly into camera with intense, intimate expression. Lips slightly parted. One hand visible gently touching neck or collarbone. Raw emotional vulnerability and connection.",
        hair_color: "jet black",
        hair_style: "long dark hair tousled naturally with strands falling across face and shoulders.",
        skin_finish: "Dewy & Luminous with pronounced subsurface scattering and natural flush",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish, hand delicately positioned.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "not visible"
      },
      wardrobe: "Intimate minimal: only the delicate strap of a black lace bralette visible over shoulder. Emphasis entirely on face, expression, skin texture, and emotional intimacy.",
      environment: "Soft focus background with bokeh of warm lights, creating dreamlike intimacy. Environment completely secondary to subject's expression and presence.",
      lighting: "Annie Leibovitz-inspired soft beauty lighting: gentle wraparound light creating even illumination on face with subtle shadows sculpting features. Perfect catchlights in eyes. Intimate and flattering.",
      camera: {
        focal_length: "105mm f/2.8 Macro Lens",
        aperture: "f/1.8",
        distance: "0.7 m",
        angle: "Eye-level for maximum direct connection and intimacy",
        framing: "Ultra close-up from upper chest to top of head, extreme shallow depth of field"
      },
      color_grade: "Warm & Natural with luminous skin tones, soft highlights, and painterly romantic quality.",
      style: "Fine Art Sensuality meets intimate portrait photography",
      quality: "Shot on Leica M11 with Noctilux 50mm f/0.95 for extreme shallow depth, beautiful bokeh, and hyper-realistic skin rendering at macro scale.",
      figure_and_form: "Intimate Expression Focus: Minimal coverage with total emphasis on facial expression, emotional connection, and intimate moment. Natural beauty of face, neck, and décolletage.",
      skin_micro_details: "Hyper-realistic macro rendering: every pore, fine vellus hair, freckle, and skin detail visible. Pronounced subsurface scattering creates luminous life-like quality. Individual eyelashes, lip texture, and natural skin color variations rendered in extreme detail.",
      fabric_physics: "Minimal - only delicate lace strap showing realistic tension on shoulder.",
      material_properties: "Primary focus on skin: realistic translucency with specular highlights on dewy finish, subtle natural flush on cheeks, and tonal variations creating dimensional realism."
    }
  },

  {
    name: 'Seductress MAX: Abandoned Mansion Gothic',
    data: {
      shot: "Atmospheric full body shot (9:16), gothic romantic mood",
      subject: {
        variant: seductressVariant,
        pose: "Standing in ornate abandoned space, one hand touching deteriorating wall, other holding flowing fabric. Body turned creating elegant S-curve. Looking over shoulder at camera with mysterious, haunting expression. Romantic gothic presence.",
        hair_color: "jet black",
        hair_style: "long, wild waves with natural volume, slightly disheveled creating romantic abandoned aesthetic.",
        skin_finish: "Natural Glow with pale luminosity",
        hand_and_nail_details: "Impeccably Manicured with deep wine polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Wine Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Gothic romance: a floor-length sheer black lace robe with dramatic sleeves worn open, revealing a vintage-inspired black lace corset and high-waisted lace brief. Victorian gothic aesthetic with modern edge.",
      environment: "Abandoned mansion with ornate deteriorating architecture, broken chandeliers, peeling wallpaper, atmospheric dust motes in light beams. Romantic decay creating haunting beauty.",
      lighting: "Paolo Roversi-inspired soft natural light streaming through broken windows creating atmospheric shafts of light through dust and haze. Dreamy, mysterious quality with gentle shadows.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "3.5 m",
        angle: "Eye-level capturing gothic atmosphere and architectural details",
        framing: "Full body with ornate architectural elements framing subject"
      },
      color_grade: "Desaturated Gothic with muted tones, soft greens and blues, and romantic faded quality.",
      style: "Romantic Fashion meets gothic fine art photography",
      quality: "Shot on Hasselblad 503CW on Kodak Portra 400 pushed for additional grain, creating timeless romantic quality.",
      figure_and_form: "Gothic Romance: The corset creates classic silhouette while flowing lace robe adds mysterious drama. Pose emphasizes curves within atmospheric environment.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Flowing lace robe moves with atmospheric air currents. Victorian corset shows period-appropriate structure and lacing detail.",
      material_properties: "Delicate vintage lace with intricate patterns, structured corset satin, and atmospheric dust particles creating layered material narrative."
    }
  },

  {
    name: 'Seductress MAX: Modern Dance Form',
    data: {
      shot: "Dynamic full body shot (9:16), capturing movement and athletic grace",
      subject: {
        variant: seductressVariant,
        pose: "Mid-movement dance pose: one leg extended in high développé, standing leg en pointe. Torso arched, one arm extended overhead, other arm creating graceful line. Captured mid-motion creating dynamic tension and athletic beauty. Expression of intense focus and artistic passion.",
        hair_color: "jet black",
        hair_style: "severe high bun pulled tight, emphasizing facial structure and clean lines of athletic form.",
        skin_finish: "Natural Glow with athletic sheen",
        hand_and_nail_details: "Graceful & Anatomically Correct.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible - dance pointe shoes"
      },
      wardrobe: "Dance minimal: a minimalist black dance bodysuit with strategic mesh panels and geometric cutouts emphasizing movement lines. Athletic yet artistic aesthetic.",
      environment: "Professional dance studio with light wooden floor, floor-to-ceiling mirrors reflecting form, and bright natural window light creating clean, inspiring space.",
      lighting: "Peter Lindbergh-inspired bright natural light from large studio windows creating even, flattering illumination that emphasizes athletic form and movement. Clean and pure.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/4.0",
        distance: "4 m",
        angle: "Eye-level capturing full extension and athletic grace",
        framing: "Full body with extended limbs filling vertical frame dynamically"
      },
      color_grade: "Clean and Natural with bright neutral tones emphasizing athletic purity and movement.",
      style: "Fine-Art Dance Photography emphasizing athletic grace and artistic expression",
      quality: "Shot on Canon EOS R5 with high shutter speed freezing motion in perfect clarity while maintaining exceptional detail.",
      figure_and_form: "Athletic Dance Form: Natural athletic body in peak physical extension. Emphasis on elegant lines, muscular definition, and graceful movement frozen in time.",
      skin_micro_details: "Athletic skin with natural texture, visible muscular definition, and authentic athletic sheen. Unretouched beauty celebrating physical artistry.",
      fabric_physics: "Dance bodysuit shows realistic stretch and compression across athletic movement. Mesh panels display tension and transparency.",
      material_properties: "Performance fabric with matte and sheer sections, creating functional athletic aesthetic that emphasizes rather than conceals form."
    }
  },

  {
    name: 'Seductress MAX: Velvet Throne Power',
    data: {
      shot: "Commanding full body shot (9:16), royal power and dominance",
      subject: {
        variant: seductressVariant,
        pose: "Seated regally on ornate velvet throne, legs crossed with confidence, one arm on throne armrest, other hand resting on thigh. Back straight, chin raised. Direct, unwavering gaze radiating absolute confidence and power. Queen-like presence.",
        hair_color: "jet black",
        hair_style: "long dark hair styled in loose romantic curls with jeweled crown or hair accessory, creating regal aesthetic.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with statement crimson red polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Statement Crimson Red Polish",
        high_heels: "Sharp Stiletto Heels prominently displayed"
      },
      wardrobe: "Regal power: an ornate black lace corset with gold accents and boning, high-waisted black lace brief, sheer black thigh-high stockings with decorative lace tops, and a dramatic floor-length black velvet cape worn off shoulders. Gold jewelry accents. Empress aesthetic.",
      environment: "Opulent throne room with rich burgundy velvet throne, gold baroque details, dramatic drapery, and warm atmospheric lighting creating royal court atmosphere.",
      lighting: "Helmut Newton-inspired dramatic single-source hard light from high angle creating strong definition and shadows, emphasizing power and dominance. Additional warm accent lights adding dimensional depth.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Slightly low angle to emphasize regal authority and stature",
        framing: "Full body on throne, composed symmetrically emphasizing power"
      },
      color_grade: "Rich and Saturated with deep reds, blacks, and gold accents creating luxurious royal atmosphere.",
      style: "Neo-noir Sensuality meets baroque royal portraiture",
      quality: "Shot on Phase One XF IQ4 for maximum detail capturing ornate costume details, jewelry, and opulent environment.",
      figure_and_form: "Regal Power: Corset creates dramatic hourglass silhouette while throne pose emphasizes confidence and dominance. Every element projects absolute authority.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Ornate corset maintains rigid structure. Velvet cape drapes with substantial weight. Stockings show authentic sheen and texture.",
      material_properties: "Multiple luxury materials: structured satin corset, intricate lace, rich crushed velvet, glossy stockings, and gold metallic accents creating opulent material symphony."
    }
  },

  {
    name: 'Seductress MAX: Rain-Kissed Urban Noir',
    data: {
      shot: "Cinematic full body shot (9:16), urban noir atmosphere with rain",
      subject: {
        variant: seductressVariant,
        pose: "Standing in rain with face tilted up toward sky, eyes closed, arms slightly out from body. Rain running down form. Expression of liberation and sensual abandon. Completely present in the moment.",
        hair_color: "jet black",
        hair_style: "long wet hair slicked back from face, rain-soaked and flowing.",
        skin_finish: "Dewy & Luminous enhanced by rain creating natural glistening",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Rain noir minimal: a sheer black silk slip dress clinging to form from rain, becoming semi-transparent. Black lace bralette and high-waisted brief visible beneath. Rain-soaked fabric creating second-skin effect.",
      environment: "Urban night setting with rain falling, city lights creating bokeh in background, wet pavement reflecting lights, atmospheric noir mood.",
      lighting: "Film noir rain lighting: dramatic side light creating rim highlights on rain droplets and wet skin. Atmospheric lighting through rain creating volumetric quality. City lights adding warm accent glow.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "3 m",
        angle: "Slightly low angle emphasizing liberation and abandon",
        framing: "Full body with rain visible as streaks and droplets in light"
      },
      color_grade: "Cool Cinematic Noir with desaturated tones, blue shadows, and warm city light highlights creating moody atmosphere.",
      style: "Neo-noir Sensuality meets atmospheric cinema photography",
      quality: "Shot on ARRI Alexa 65 for cinematic quality capturing rain droplets, wet textures, and atmospheric mood with film-like grain.",
      figure_and_form: "Rain-Soaked Silhouette: Wet silk clings to natural curves creating transparent second-skin effect. Rain adds dynamic texture and movement.",
      skin_micro_details: "Wet skin with visible water droplets creating micro-lensing effects. Natural texture enhanced by water creating specular highlights and dimensional depth.",
      fabric_physics: "Wet silk clings realistically to form with transparent areas where soaked. Fabric shows natural weight and draping modified by water saturation.",
      material_properties: "Wet transparent silk, visible lace beneath, water droplets catching light, and wet skin creating layered material interaction unique to rain scene."
    }
  },

  {
    name: 'Seductress MAX: Luxury Penthouse Dawn',
    data: {
      shot: "Ethereal full body shot (9:16), transitional dawn moment",
      subject: {
        variant: seductressVariant,
        pose: "Standing at floor-to-ceiling penthouse window, back to camera, looking out at dawn cityscape. One hand touching glass, other at her side. Natural contrapposto stance. Profile of face visible, expression peaceful and contemplative. Vulnerable morning moment.",
        hair_color: "jet black",
        hair_style: "long, naturally tousled hair from sleep, authentic and unstructured.",
        skin_finish: "Natural Glow with golden dawn subsurface scattering",
        hand_and_nail_details: "Natural & Unadorned.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible - barefoot"
      },
      wardrobe: "Morning after minimal: wearing only an oversized men's white dress shirt, unbuttoned and worn loosely, falling off one shoulder. Shirt hem hits mid-thigh. Intimate, vulnerable aesthetic.",
      environment: "Luxury penthouse with floor-to-ceiling windows showing spectacular dawn cityscape transitioning from night to day. Golden morning light streaming in. Rumpled bedding visible in background suggesting intimacy.",
      lighting: "Peter Lindbergh-inspired natural dawn light: soft, golden morning sunlight streaming through windows creating luminous rim lighting on form and warm glow. Pure, unmanipulated natural beauty.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "3.5 m",
        angle: "Eye-level from behind, capturing back view and dawn light",
        framing: "Full body with window and dawn cityscape prominent, intimate environmental portrait"
      },
      color_grade: "Warm & Luminous with golden dawn tones, soft highlights, and dreamlike quality capturing transition from night to day.",
      style: "Private & Personal meets natural light documentary style",
      quality: "Shot on Leica M11 for exceptional natural color rendering and authentic moment capture.",
      figure_and_form: "Vulnerable Morning Beauty: Oversized shirt creates silhouette revealing natural form beneath. Back view and dawn light emphasize authentic intimate moment.",
      skin_micro_details: "Natural morning skin with authentic texture, no makeup. Golden dawn light creates subsurface scattering showing natural beauty without artifice.",
      fabric_physics: "Oversized shirt drapes naturally with authentic wrinkles from wear. Cotton fabric shows directional weave in dawn light.",
      material_properties: "Crisp cotton shirt with matte finish, glass window, and warm golden dawn rays creating transitional morning material narrative."
    }
  },

  {
    name: 'Seductress MAX: Black Leather Dominance',
    data: {
      shot: "Bold full body shot (9:16), maximum power and edge",
      subject: {
        variant: seductressVariant,
        pose: "Standing in powerful stance with legs apart, one hand on hip, other holding riding crop. Direct, challenging gaze. Chin raised, back straight. Absolute confidence and dominance radiating from every aspect. Unapologetic power.",
        hair_color: "jet black",
        hair_style: "a severe, slicked-back style pulled into tight low ponytail, emphasizing sharp facial structure and intensity.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "Subtle Gold Septum",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Thigh-high Black Leather Boots with extreme heels"
      },
      wardrobe: "Dominant power: a fitted black leather corset with metal hardware and buckle details, high-waisted black leather shorts with lacing details, leather opera gloves, and thigh-high leather boots. Full leather domination aesthetic with geometric harness elements.",
      environment: "Dark industrial space with textured concrete walls, metal elements, dramatic shadows, and atmospheric smoke creating powerful, edgy atmosphere.",
      lighting: "Helmut Newton-inspired dramatic hard lighting from above creating strong shadows and highlights, emphasizing leather texture and powerful stance. High contrast noir lighting.",
      camera: {
        focal_length: "50mm",
        aperture: "f/4.0",
        distance: "3 m",
        angle: "Slightly low angle to emphasize power, dominance, and stature",
        framing: "Full body shot with powerful stance filling frame confidently"
      },
      color_grade: "Severe Monochromatic with crushed blacks and high contrast emphasizing leather and power.",
      style: "Neo-noir Sensuality meets fetish fashion photography",
      quality: "Shot on Phase One XF IQ4 for extreme detail capturing leather texture, metal hardware, and powerful presence with razor precision.",
      figure_and_form: "Dominant Power: Fitted leather corset creates dramatic silhouette while entire ensemble projects uncompromising dominance and confidence. Body language radiates absolute control.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Leather shows realistic creasing and tension across form. All elements maintain structured, powerful aesthetic.",
      material_properties: "Multiple leather finishes: matte corset, glossy boots, textured gloves, and metal hardware creating high-contrast textural dominance."
    }
  }
];
