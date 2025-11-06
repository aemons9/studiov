import type { ArtisticConcept } from './concepts';
import { indianModelVariants } from './subjects';

const seductressVariant = indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value;

const defaultSkinMicroDetails = "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing.";
const defaultFabricPhysics = "The fabric drapes naturally, with realistic creases and folds that follow the subject's form. The weave of the fabric is visible upon close inspection.";
const defaultMaterialProperties = "The material has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject's skin.";

export const corporateSeductionCollection: ArtisticConcept[] = [
  {
    name: 'Corporate Seduction: Executive Desk Conquest',
    data: {
      shot: "Cinematic medium shot (16:9), power and vulnerability intertwined",
      subject: {
        variant: seductressVariant,
        pose: "Seated atop the executive desk facing the camera, legs crossed elegantly, leaning back on one hand while the other adjusts her hair. Commanding yet inviting gaze, chin slightly raised.",
        hair_color: "jet black",
        hair_style: "a polished, sleek high ponytail with face-framing tendrils, emphasizing sharp cheekbones.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with deep wine polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Wine Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "An architectural power ensemble: a structured black blazer with sharp shoulders worn with nothing beneath except an intricate black lace longline bra with geometric patterns. A high-waisted pencil skirt with a daring thigh-high slit reveals lace-top stockings.",
      environment: "A corner executive office after hours, with floor-to-ceiling glass walls showcasing the glittering city skyline at night. The polished mahogany desk dominates the foreground.",
      lighting: "Helmut Newton-inspired dramatic single-source lighting from a desk lamp positioned low, creating strong side-lighting with deep shadows that sculpt her form and emphasize the desk's reflective surface.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Slightly low angle to emphasize dominance and stature",
        framing: "Medium shot from mid-thigh up, desk surface visible in lower third"
      },
      color_grade: "Cool Cinematic with desaturated tones, deep blue shadows, and warm highlights on skin.",
      style: "Neo-noir Sensuality meets Helmut Newton's bold corporate eroticism",
      quality: "Shot on Phase One XF IQ4 for hyper-realistic 150MP RAW cinematic quality.",
      figure_and_form: "The structured blazer and high-waisted skirt create an hourglass silhouette, the strategic reveal of lace undergarments adds intimate contrast to professional power.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The blazer holds architectural shape with precision tailoring. The lace shows intricate detail and realistic tension. The silk skirt drapes with luxurious weight.",
      material_properties: "Matte wool suiting contrasts with semi-transparent lace, glossy stockings, and the reflective mahogany desk surface."
    }
  },

  {
    name: 'Corporate Seduction: Boardroom After Dark',
    data: {
      shot: "Dramatic wide shot (16:9), emphasizing scale and solitary power",
      subject: {
        variant: seductressVariant,
        pose: "Standing at the head of the long boardroom table, one stiletto-clad foot propped on a leather chair, leaning forward with both hands on the chair back. Dominant, direct gaze down the length of the table toward camera.",
        hair_color: "jet black",
        hair_style: "long, loose waves cascading over one shoulder, soft femininity contrasting with power pose.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "A deconstructed business ensemble: tailored black cigarette pants with a razor-sharp crease, paired with a sheer black silk blouse that reveals an architectural black lace bodysuit with geometric cutouts beneath. The blouse is unbuttoned strategically low.",
      environment: "Modern boardroom with massive glass table, leather executive chairs, and floor-to-ceiling windows showing the city at midnight. The room stretches dramatically into the background.",
      lighting: "Peter Lindbergh-inspired high-contrast lighting: overhead architectural lighting creates dramatic pools of light and shadow along the table, with strong rim lighting separating subject from background.",
      camera: {
        focal_length: "24mm wide angle",
        aperture: "f/4.0",
        distance: "6 m",
        angle: "Eye-level from the far end of the boardroom table",
        framing: "Wide shot showing the dramatic perspective of the table leading to the subject"
      },
      color_grade: "Severe Monochromatic with crushed blacks and neutral tones, high contrast.",
      style: "Graphic Fashion-Editorial meets Peter Lindbergh's stark corporate aesthetic",
      quality: "Shot on Hasselblad X2D for unmatched detail and tonal range.",
      figure_and_form: "Powerful Silhouette: The pose and lighting emphasize dominant stance, while sheer fabric reveals sculptural bodysuit creating visual intrigue.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The sheer blouse drapes naturally with realistic wrinkles. Tailored pants show precision creasing.",
      material_properties: "Translucent silk contrasts with opaque tailored wool and geometric lace patterns."
    }
  },

  {
    name: 'Corporate Seduction: Reception Desk Encounter',
    data: {
      shot: "Intimate medium shot (9:16), creating anticipation and invitation",
      subject: {
        variant: seductressVariant,
        pose: "Leaning across the reception desk toward camera, forearms on the polished surface, hands clasped. Intimate eye contact with a knowing smile. Shoulders and décolletage prominently featured.",
        hair_color: "jet black",
        hair_style: "a messy low bun with intentional loose strands framing the face, 'end of workday' elegance.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "A plunging black silk wrap dress with a dramatic V-neckline that extends well below the décolletage, revealing an ornate black lace balconette bra with intricate floral embroidery. The wrap creates asymmetric draping.",
      environment: "Sleek modern reception area with backlit marble desk, contemporary art on walls, and soft ambient lighting from designer fixtures.",
      lighting: "Annie Leibovitz-inspired soft beauty lighting: diffused light from above creating gentle clamshell effect, with subtle fill from the illuminated desk surface below.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "1.5 m",
        angle: "Slightly high angle, viewer positioned across desk",
        framing: "Bust close-up from mid-torso to top of head, tight on expression and neckline"
      },
      color_grade: "Warm & Natural with soft skin tones and gentle shadows, inviting atmosphere.",
      style: "Romantic Fashion meets Annie Leibovitz's intimate storytelling",
      quality: "Shot on Canon EOS R5 with RF 85mm f/1.2 for beautiful bokeh and skin rendering.",
      figure_and_form: "Décolletage Focus: The dramatic neckline and forward lean emphasize curves and intimate details of the ornate lace.",
      skin_micro_details: "Extreme detail on skin texture, collarbones, and the way light creates subsurface scattering on the décolletage.",
      fabric_physics: "The wrap dress shows realistic draping and asymmetric folds. Lace displays intricate floral patterns in sharp detail.",
      material_properties: "High-sheen silk contrasts with matte floral lace and luminous skin tones."
    }
  },

  {
    name: 'Corporate Seduction: Office Lounge Recline',
    data: {
      shot: "Luxurious full body shot (9:16), capturing sophisticated relaxation",
      subject: {
        variant: seductressVariant,
        pose: "Reclining on a leather chesterfield sofa, propped on one elbow, body creating a graceful S-curve. One leg bent with heel on the sofa, the other extended toward floor. Free hand touching her hair. Relaxed, confident expression.",
        hair_color: "jet black",
        hair_style: "long dark hair flowing over shoulders and spilling onto the leather, creating textural contrast.",
        skin_finish: "Natural Glow",
        hand_and_nail_details: "Impeccably Manicured with classic red polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic Red Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "An after-hours ensemble: a partially unbuttoned silk charmeuse shirt in deep navy, revealing a delicate black lace camisole beneath. High-waisted tailored shorts with a black leather belt. Sophisticated yet undone.",
      environment: "Executive lounge with rich leather furniture, floor-to-ceiling bookshelves, warm wood paneling, and amber lighting from vintage brass fixtures. A bar cart and modern art complete the sophisticated space.",
      lighting: "Paolo Roversi-inspired soft, warm lighting creating dreamy quality: diffused amber light wraps around form with gentle shadows, evoking intimate after-hours atmosphere.",
      camera: {
        focal_length: "50mm",
        aperture: "f/1.8",
        distance: "3 m",
        angle: "Slightly high angle looking down at the reclining figure",
        framing: "Full body shot with the leather sofa dominating composition"
      },
      color_grade: "Warm & Romantic with rich amber tones, soft shadows, and subtle film grain.",
      style: "Romantic Fashion meets Paolo Roversi's soft, dreamlike sensuality",
      quality: "Shot on Kodak Portra 800 for warm color palette and beautiful grain structure.",
      figure_and_form: "Elegant Repose: The reclining pose and partially unbuttoned shirt create casual sophistication, emphasizing natural curves.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The silk shirt drapes with liquid weight, creating natural wrinkles. Leather sofa shows realistic compression where body contacts surface.",
      material_properties: "Lustrous silk charmeuse, delicate lace, tailored wool, and distressed leather create rich material dialogue."
    }
  },

  {
    name: 'Corporate Seduction: Conference Table Dominance',
    data: {
      shot: "Bold medium shot (16:9), raw power and unapologetic confidence",
      subject: {
        variant: seductressVariant,
        pose: "Kneeling on the conference table facing camera, sitting back on heels, hands resting on thighs. Back arched slightly, chin raised. Direct, challenging gaze.",
        hair_color: "jet black",
        hair_style: "a severe, slicked-back style pulled into a tight low bun, emphasizing facial structure and intensity.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "A provocative power outfit: a structured black vest with nothing beneath, revealing an architectural leather harness with geometric straps across the torso. High-waisted black leather pants with matte finish.",
      environment: "Modern conference room with glass walls, sleek table surface reflecting overhead architectural lighting, and city lights visible through windows.",
      lighting: "Helmut Newton-inspired dramatic hard lighting from above creating strong shadows and highlights, emphasizing sculptural form and architectural wardrobe elements.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "2.5 m",
        angle: "Eye-level for confrontational intimacy",
        framing: "Medium shot from mid-thigh to top of head, table surface prominent"
      },
      color_grade: "Cool Cinematic with desaturated tones and high contrast, emphasizing blacks.",
      style: "Neo-noir Sensuality meets Helmut Newton's provocative fashion photography",
      quality: "Shot on Phase One XF IQ4 for extreme detail on leather textures and architectural elements.",
      figure_and_form: "Sculptural Form: The leather harness creates geometric patterns that emphasize curves while projecting dominance.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Leather vest and pants show realistic creasing and tension. Harness straps display authentic material properties.",
      material_properties: "Multiple leather finishes: matte pants, structured vest, and glossy harness straps creating textural depth."
    }
  },

  {
    name: 'Corporate Seduction: Private Office Window',
    data: {
      shot: "Romantic full body silhouette (9:16), artistic and emotive",
      subject: {
        variant: seductressVariant,
        pose: "Standing at floor-to-ceiling window, back to camera, looking out at city. One hand touching glass above head, the other at her side. Elegant contrapposto stance creating natural curves.",
        hair_color: "jet black",
        hair_style: "long, loose waves flowing down back, silhouetted against bright window.",
        skin_finish: "Natural Glow",
        hand_and_nail_details: "Graceful & Anatomically Correct.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "A sheer black silk robe with dramatic kimono sleeves, worn open to reveal a minimal high-waisted black lace brief and delicate bralette. The robe creates flowing, painterly lines.",
      environment: "Private corner office with floor-to-ceiling windows showcasing spectacular nighttime city skyline in sharp focus, creating dramatic backlight.",
      lighting: "Dramatic rim lighting from city lights behind, creating a luminous outline while keeping the front in soft shadow. Minimal front fill preserves silhouette effect with subtle detail.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/4.0",
        distance: "4 m",
        angle: "Eye-level from behind, capturing back view",
        framing: "Full body shot with significant negative space, window and skyline dominating"
      },
      color_grade: "High-Contrast with deep blacks and brilliant window highlights, moody atmosphere.",
      style: "Fine Art Sensuality meets Graphic Fashion-Editorial",
      quality: "Shot on Hasselblad X2D for perfect edge definition and tonal gradation.",
      figure_and_form: "Silhouette Through Sheer Fabric: Backlit composition reveals form through translucent materials, creating artistic mystery.",
      skin_micro_details: "Minimal visibility due to silhouette, focus on outline and flowing hair catching rim light.",
      fabric_physics: "The sheer robe flows with liquid grace, edges glowing where backlit. Material movement suggests gentle air circulation.",
      material_properties: "Translucent silk that luminesces at edges where light passes through, creating ethereal quality."
    }
  },

  {
    name: 'Corporate Seduction: Executive Restroom Mirror',
    data: {
      shot: "Intimate medium shot (9:16), voyeuristic elegance",
      subject: {
        variant: seductressVariant,
        pose: "Standing at vanity mirror, hands on marble counter, leaning slightly forward checking appearance. Side profile to camera but face visible in mirror reflection. Subtle, knowing smile.",
        hair_color: "jet black",
        hair_style: "hair being adjusted, one hand touching loose strands, mid-styling moment captured.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "Partially dressed elegance: a black lace bodysuit with intricate patterns and strategic cutouts, worn with an unbuttoned silk blouse hanging off shoulders. Professional attire in midst of adjustment.",
      environment: "Luxurious executive restroom with floor-to-ceiling marble, modern geometric mirrors with integrated lighting, and designer fixtures creating sophisticated sanctuary.",
      lighting: "Richard Avedon-inspired even beauty lighting from backlit mirror creating soft, flattering illumination without harsh shadows. Clean, elegant aesthetic.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2 m",
        angle: "Slightly off to side, capturing both profile and mirror reflection",
        framing: "Medium shot from waist up, mirror reflection prominent"
      },
      color_grade: "Clean and Natural with neutral tones, white marble providing bright, fresh atmosphere.",
      style: "Fine Art Sensuality meets Richard Avedon's clean, elegant aesthetic",
      quality: "Shot on Leica M11 for exceptional color accuracy and natural rendering.",
      figure_and_form: "Intimate Moment: The candid styling moment and bodysuit reveal create voyeuristic intimacy within elegant space.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The silk blouse hangs naturally off shoulders. Lace bodysuit shows realistic structure and transparency.",
      material_properties: "Reflective marble, soft silk, intricate lace, and mirror glass create layered material story."
    }
  },

  {
    name: 'Corporate Seduction: Midnight Desk Light',
    data: {
      shot: "Moody close-up (16:9), film noir atmosphere",
      subject: {
        variant: seductressVariant,
        pose: "Seated at desk, leaning back in executive chair, one hand holding a pen to lips thoughtfully, the other arm draped over chair. Head tilted, contemplative yet sensual expression.",
        hair_color: "jet black",
        hair_style: "long dark hair with deep side part, falling over one shoulder in soft waves.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with classic red polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic Red Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "After-hours sophistication: an oversized white dress shirt (borrowed from masculine wardrobe) worn with several buttons undone, revealing black lace bralette. Sleeves rolled to elbows. Minimal lower coverage suggested but not visible.",
      environment: "Executive office at midnight, single desk lamp creating pool of warm light against darkness. Papers scattered on desk, city darkness visible through windows.",
      lighting: "Classic film noir lighting: single warm desk lamp creating dramatic chiaroscuro, hard shadows on one side of face, warm golden light sculpting features on the lit side.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "2 m",
        angle: "Eye-level, creating intimate connection across desk",
        framing: "Bust close-up from mid-torso to top of head"
      },
      color_grade: "Classic Film Noir: high contrast with warm amber highlights and deep black shadows.",
      style: "Neo-noir Sensuality meets classic Hollywood glamour lighting",
      quality: "Shot on ARRI Alexa 65 for cinematic film quality with organic texture.",
      figure_and_form: "Casual Sophistication: The oversized shirt and relaxed pose suggest intimate after-hours moment while maintaining elegance.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The oversized shirt drapes with natural wrinkles and asymmetric folds. Cotton texture visible in lit areas.",
      material_properties: "Crisp cotton shirt, delicate lace, and the warm wood desk create tactile material contrast."
    }
  },

  {
    name: 'Corporate Seduction: Boardroom Chair Power',
    data: {
      shot: "Commanding full body shot (9:16), emphasizing dominance",
      subject: {
        variant: seductressVariant,
        pose: "Seated in executive leather chair at head of table, legs crossed, one arm on armrest, the other hand touching her neck. Reclined slightly, utterly relaxed confidence. Unwavering gaze.",
        hair_color: "jet black",
        hair_style: "a polished, sleek low ponytail, severe and powerful.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "A three-piece power suit deconstructed: tailored vest worn with nothing beneath, revealing architectural black lace bralette through deep V. Matching cigarette pants with razor-sharp crease. The blazer draped over chair back.",
      environment: "High-rise boardroom with the executive chair positioned against floor-to-ceiling windows showing nighttime cityscape, emphasizing her position of power.",
      lighting: "Dramatic backlighting from city lights creating rim light around her silhouette, combined with subtle front light from overhead architectural fixtures creating dimension.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3.5 m",
        angle: "Slightly low angle to emphasize authority",
        framing: "Full body shot from feet to top of head, chair and city backdrop visible"
      },
      color_grade: "Cool Cinematic with desaturated colors and deep blacks, modern corporate aesthetic.",
      style: "Graphic Fashion-Editorial meets Helmut Newton's powerful women archetype",
      quality: "Shot on Hasselblad X2D for unmatched detail and tonal perfection.",
      figure_and_form: "Executive Power: The tailored suit and commanding pose create authoritative presence while the revealed lace adds controlled sensuality.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Precision tailoring maintains architectural structure. Lace shows intricate geometric patterns in the V.",
      material_properties: "Matte wool suiting, semi-transparent lace, glossy leather chair, and city lights create layered depth."
    }
  },

  {
    name: 'Corporate Seduction: Office Couch Intimacy',
    data: {
      shot: "Intimate full body shot (16:9), casual sophistication",
      subject: {
        variant: seductressVariant,
        pose: "Reclining on office couch, one leg bent with foot tucked under, the other extended. One arm stretched along couch back, the other resting on her stomach. Relaxed, inviting smile.",
        hair_color: "jet black",
        hair_style: "tousled, natural waves suggesting authenticity and ease, 'just finished work' aesthetic.",
        skin_finish: "Natural Glow",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "kicked off nearby, barefoot"
      },
      wardrobe: "Undone professional: a partially unbuttoned silk blouse in charcoal grey revealing a delicate black lace bralette. High-waisted tailored trousers with belt loosened. Jacket discarded nearby.",
      environment: "Private executive office with modern grey couch, contemporary art on walls, warm accent lighting, and the feeling of after-hours privacy.",
      lighting: "Peter Lindbergh-inspired natural, soft lighting: ambient room light creates even, flattering illumination without drama, emphasizing authentic beauty and relaxed moment.",
      camera: {
        focal_length: "35mm",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Slightly high angle, intimate viewer perspective",
        framing: "Full body shot with couch dominating lower portion"
      },
      color_grade: "Warm & Natural with soft shadows, authentic color grading suggesting real moment.",
      style: "Private & Personal meets Peter Lindbergh's natural beauty philosophy",
      quality: "Shot on Canon EOS R5 for natural color science and beautiful skin tone rendering.",
      figure_and_form: "Natural Elegance: The relaxed pose and partially unbuttoned attire suggest authentic after-hours intimacy without affectation.",
      skin_micro_details: "Authentic skin texture with natural variations, freckles, and realistic beauty without retouching.",
      fabric_physics: "The silk blouse shows realistic wrinkles from wear. Tailored trousers display natural creasing from movement.",
      material_properties: "Soft silk, delicate lace, woven wool trousers, and fabric couch upholstery create comfortable material palette."
    }
  },

  {
    name: 'Corporate Seduction: Glass Wall Silhouette',
    data: {
      shot: "Artistic full body shot (9:16), architectural and graphic",
      subject: {
        variant: seductressVariant,
        pose: "Standing at interior glass wall dividing offices, hand pressed against glass, body in profile creating elegant line. Other hand on hip. Looking toward camera through the glass.",
        hair_color: "jet black",
        hair_style: "long straight hair pulled over one shoulder, clean lines emphasizing profile.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with deep wine polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Wine Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Minimalist architectural: a sleeveless black silk turtleneck bodysuit with high neckline and low back, paired with high-waisted wide-leg trousers that create dramatic vertical lines.",
      environment: "Modern office interior with floor-to-ceiling glass partition walls, reflections and transparencies creating layered visual complexity. Clean, minimal aesthetic.",
      lighting: "Irving Penn-inspired precise studio lighting: clean, even light with subtle gradation, emphasizing form and line without drama. Professional and refined.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/4.0",
        distance: "4 m",
        angle: "Eye-level through glass, creating layered perspective",
        framing: "Full body shot with glass partition as compositional element"
      },
      color_grade: "Monochromatic with subtle color, emphasizing form and architecture over palette.",
      style: "Graphic Fashion-Editorial meets Irving Penn's minimalist precision",
      quality: "Shot on Phase One XF IQ4 for ultimate sharpness and technical perfection.",
      figure_and_form: "Architectural Elegance: Clean lines of wardrobe and environment emphasize sculptural form and sophisticated minimalism.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The silk bodysuit shows subtle body-mapping and draping. Wide-leg trousers display structured flow.",
      material_properties: "Matte silk, architectural glass with reflections, and polished floor creating geometric material interplay."
    }
  },

  {
    name: 'Corporate Seduction: Penthouse Corner Office',
    data: {
      shot: "Luxurious wide shot (16:9), emphasizing scale and achievement",
      subject: {
        variant: seductressVariant,
        pose: "Standing at the corner apex where two glass walls meet, arms spread slightly touching both walls. Commanding stance, looking over shoulder at camera. Owning the space.",
        hair_color: "jet black",
        hair_style: "long, flowing waves catching light, movement suggesting confidence.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with classic red polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic Red Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "Ultimate power dressing: a floor-length black silk gown with a dramatic thigh-high slit and plunging back. The front features architectural draping that reveals a sculptural black lace bodysuit beneath through strategic cutouts.",
      environment: "Corner penthouse office with 270-degree views of glittering cityscape at night. Luxurious minimalist furnishing and ambient architectural lighting.",
      lighting: "Helmut Newton-inspired dramatic lighting: strong backlight from city creating rim lighting, supplemented by interior accent lights creating dimension and highlighting fabric texture.",
      camera: {
        focal_length: "24mm wide angle",
        aperture: "f/4.0",
        distance: "5 m",
        angle: "Eye-level, capturing the dramatic corner perspective",
        framing: "Wide shot emphasizing the spectacular space and figure's relationship to environment"
      },
      color_grade: "Cool Cinematic with rich blacks and warm highlights, luxurious atmosphere.",
      style: "Neo-noir Sensuality meets architectural photography, emphasizing power and place",
      quality: "Shot on Hasselblad X2D for exceptional dynamic range capturing both interior and bright city lights.",
      figure_and_form: "Commanding Presence: The floor-length gown and dominant stance emphasize achievement and ownership of luxurious space.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The silk gown flows with dramatic weight, pooling slightly on the floor. Strategic draping shows architectural structure.",
      material_properties: "Luxurious silk with directional sheen, geometric lace, reflective glass walls, and ambient city lights create rich material narrative."
    }
  },

  {
    name: 'Corporate Seduction: After-Hours Bar Cart',
    data: {
      shot: "Intimate medium shot (9:16), sophisticated and inviting",
      subject: {
        variant: seductressVariant,
        pose: "Standing at the office bar cart, pouring a drink, looking over shoulder at camera with sultry smile. One hand on crystal decanter, the other holding a glass. Weight shifted to one hip.",
        hair_color: "jet black",
        hair_style: "hair swept to one side over shoulder, elegant and intentional.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "After-hours elegance: a black silk slip dress with cowl neckline and delicate spaghetti straps, cut on the bias to cling naturally. A sheer black lace kimono robe worn over it, open and flowing.",
      environment: "Sophisticated executive office lounge area with brass bar cart, leather seating, warm wood paneling, and soft amber lighting creating intimate after-hours atmosphere.",
      lighting: "Paolo Roversi-inspired soft, warm, diffused lighting creating dreamy quality: gentle amber light wraps around form with minimal shadows, romantic and inviting.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Slightly low angle emphasizing elegance",
        framing: "Medium shot from mid-thigh to top of head, bar cart visible"
      },
      color_grade: "Warm & Romantic with amber tones, soft highlights, and subtle film grain.",
      style: "Romantic Fashion meets Paolo Roversi's soft, dreamlike aesthetic",
      quality: "Shot on Kodak Portra 400 for beautiful warm color rendition and gentle grain structure.",
      figure_and_form: "Elegant Curves: The bias-cut silk dress clings naturally, revealing form while maintaining sophistication. The flowing kimono adds romantic texture.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The bias-cut silk drapes with liquid weight, following natural curves. The lace kimono flows with ethereal lightness.",
      material_properties: "High-sheen silk dress, delicate lace robe, crystal glassware, and polished brass cart create luxurious material dialogue."
    }
  },

  {
    name: 'Corporate Seduction: Reception Lounge Wait',
    data: {
      shot: "Elegant full body shot (9:16), poised sophistication",
      subject: {
        variant: seductressVariant,
        pose: "Seated on modern reception lounge chair, legs crossed at ankles and tucked to side, one arm along chair back, the other hand resting on lap. Poised, elegant posture with direct gaze.",
        hair_color: "jet black",
        hair_style: "a polished, sleek high bun, emphasizing facial features and graceful neck.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Sharp Stiletto Heels prominently displayed"
      },
      wardrobe: "Sophisticated business attire with edge: a tailored black blazer dress with sharp shoulders and cinched waist, worn with strategic unbuttoning revealing an architectural black lace bodysuit beneath. The hem hits mid-thigh.",
      environment: "Ultra-modern reception lounge with designer furniture, contemporary art installations, floor-to-ceiling windows, and sophisticated ambient lighting.",
      lighting: "Richard Avedon-inspired clean, even beauty lighting: soft, directionless illumination creating flawless, editorial quality without harsh shadows.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Eye-level for elegant, respectful perspective",
        framing: "Full body shot with modern chair and environment visible"
      },
      color_grade: "Clean and Modern with neutral palette and slight cool tone, editorial sophistication.",
      style: "Graphic Fashion-Editorial meets Richard Avedon's clean aesthetic",
      quality: "Shot on Hasselblad X2D for technical perfection and tonal precision.",
      figure_and_form: "Elegant Sophistication: The tailored blazer dress emphasizes curves while projecting professional authority, strategic unbuttoning adds intrigue.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The structured blazer dress maintains architectural form. Visible lace shows intricate detail through opening.",
      material_properties: "Structured wool blazer fabric, intricate geometric lace, and modern upholstery creating textural sophistication."
    }
  },

  {
    name: 'Corporate Seduction: Desk Lamp Intimacy',
    data: {
      shot: "Ultra close-up portrait (9:16), maximum intimacy",
      subject: {
        variant: seductressVariant,
        pose: "Extreme close-up of face and upper chest, head tilted slightly, eyes looking directly at camera with intense, intimate expression. One hand visible touching collarbone.",
        hair_color: "jet black",
        hair_style: "long dark hair with a few strands falling across face and shoulders.",
        skin_finish: "Dewy & Luminous with pronounced subsurface scattering",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish, hand delicately touching skin.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "not visible"
      },
      wardrobe: "Minimal visibility: only the delicate strap of a black lace bralette visible over shoulder, emphasis entirely on skin, expression, and intimate details.",
      environment: "Executive office completely out of focus - only bokeh of warm desk lamp and cool city lights visible in background.",
      lighting: "Annie Leibovitz-inspired intimate portrait lighting: soft, warm light from nearby desk lamp creating gentle shadows that sculpt features, with subtle catchlights in eyes.",
      camera: {
        focal_length: "105mm f/2.8 Macro Lens",
        aperture: "f/1.8",
        distance: "0.8 m",
        angle: "Eye-level, extreme intimacy",
        framing: "Ultra close-up from upper chest to top of head"
      },
      color_grade: "Warm & Natural with luminous highlights and soft, painterly quality.",
      style: "Fine Art Sensuality meets Annie Leibovitz's intimate portraiture",
      quality: "Shot on Leica M11 with Noctilux 50mm f/0.95 for extreme shallow depth and hyper-realistic skin rendering.",
      figure_and_form: "Intimate Focus: Emphasis on facial features, skin texture, neck, and décolletage with minimal clothing distraction.",
      skin_micro_details: "Hyper-realistic rendering at macro scale: every pore, fine hair, freckle visible. Pronounced subsurface scattering where light penetrates skin creates luminous, life-like quality. Individual eyelashes and lip texture in extreme detail.",
      fabric_physics: "Minimal fabric - only delicate lace strap showing realistic tension on shoulder.",
      material_properties: "Primary focus on skin: realistic translucency with specular highlights on dewy areas, matte zones in shadow, subtle color variations in natural skin tone."
    }
  },

  {
    name: 'Corporate Seduction: Conference Room Reflection',
    data: {
      shot: "Artistic medium shot (16:9), architectural and contemplative",
      subject: {
        variant: seductressVariant,
        pose: "Standing beside glass conference wall, side profile to camera, hand touching the glass. Head bowed slightly in contemplation. Reflection visible in glass creating double image.",
        hair_color: "jet black",
        hair_style: "long dark hair falling forward, partially obscuring face in profile, creating mystery.",
        skin_finish: "Natural Glow",
        hand_and_nail_details: "Graceful & Anatomically Correct with deep wine polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Wine Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Minimalist elegance: a black silk slip dress with delicate straps and bias cut, paired with an unbuttoned long black blazer that creates vertical lines. Simple yet sophisticated.",
      environment: "Modern conference area with floor-to-ceiling glass walls creating reflections, clean lines, and architectural sophistication. City lights visible in distance.",
      lighting: "Peter Lindbergh-inspired natural, even lighting: soft architectural light creates gentle illumination with subtle gradation, emphasizing authentic moment without manipulation.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Eye-level, perpendicular to profile",
        framing: "Medium shot from waist to top of head, glass reflection prominent"
      },
      color_grade: "Monochromatic with subtle warmth, emphasizing form and reflection over color.",
      style: "Fine Art Sensuality meets Peter Lindbergh's contemplative natural aesthetic",
      quality: "Shot on Hasselblad 503CW with Zeiss lens on Kodak Tri-X for classic tonal range.",
      figure_and_form: "Contemplative Elegance: The profile and reflection create artistic composition emphasizing form and introspective moment.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The silk dress and unbuttoned blazer drape naturally with realistic weight and flow.",
      material_properties: "Silk with subtle sheen, structured wool blazer, and reflective glass creating layered material narrative."
    }
  },

  {
    name: 'Corporate Seduction: Executive Suite Threshold',
    data: {
      shot: "Dramatic full body shot (9:16), architectural framing",
      subject: {
        variant: seductressVariant,
        pose: "Standing in doorway of executive suite, leaning against doorframe with one shoulder, one leg crossed in front of the other. Arms at her sides or one hand touching doorframe. Inviting yet powerful stance.",
        hair_color: "jet black",
        hair_style: "long, loose waves cascading naturally, framing face and flowing over shoulders.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with classic red polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic Red Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "Sophisticated after-hours: a black silk satin robe-style dress with dramatic lapels and belted waist, worn partially open to reveal a delicate black lace bodysuit. The silhouette is elegant yet suggestive.",
      environment: "Luxury executive suite entrance with modern architectural doorway framing, warm interior lighting contrasting with dimmer corridor, creating threshold between spaces.",
      lighting: "Helmut Newton-inspired dramatic lighting: backlight from suite interior creating rim light, supplemented by soft fill from corridor creating dimensional modeling.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.8",
        distance: "4 m",
        angle: "Eye-level, capturing full doorway frame",
        framing: "Full body shot with doorway architecture framing subject"
      },
      color_grade: "Cool Cinematic with warm interior highlights, creating atmospheric depth and invitation.",
      style: "Neo-noir Sensuality meets architectural photography",
      quality: "Shot on Phase One XF IQ4 for exceptional dynamic range capturing both interior and corridor lighting.",
      figure_and_form: "Inviting Elegance: The robe-style dress and doorway pose create invitation while maintaining sophisticated authority.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The silk satin robe drapes with luxurious weight, creating elegant folds. Belt creates natural cinching at waist.",
      material_properties: "High-sheen silk satin, delicate lace, and architectural doorway materials creating threshold narrative."
    }
  },

  {
    name: 'Corporate Seduction: Late Night Strategy',
    data: {
      shot: "Cinematic medium shot (16:9), focused intensity",
      subject: {
        variant: seductressVariant,
        pose: "Leaning over conference table examining documents, both hands on table edge, focused downward but eyes glancing up toward camera. Intense, intelligent expression.",
        hair_color: "jet black",
        hair_style: "hair swept to one side, falling forward naturally as she leans, authentic work moment.",
        skin_finish: "Natural Glow",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "Working late attire: a partially unbuttoned white dress shirt with sleeves rolled to elbows, revealing a black lace camisole beneath. High-waisted black trousers. Blazer discarded on nearby chair.",
      environment: "Conference room late at night with papers and documents spread on table, single overhead light creating focused work zone, city darkness visible through windows.",
      lighting: "Irving Penn-inspired focused lighting: clean overhead architectural light creating even illumination on work surface with gentle falloff to darker surroundings, emphasizing concentration.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Slightly high angle looking down at table",
        framing: "Medium shot from waist to top of head, table and documents visible"
      },
      color_grade: "Cool Cinematic with desaturated tones emphasizing focus and late-night atmosphere.",
      style: "Graphic Fashion-Editorial meets documentary-style environmental portraiture",
      quality: "Shot on Sony A1 with G Master lens for modern digital sharpness and low-light performance.",
      figure_and_form: "Intellectual Sensuality: The working pose and partially unbuttoned shirt suggest competence and confidence with understated sensuality.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The cotton shirt shows authentic wrinkles from wear. Rolled sleeves display natural fabric behavior.",
      material_properties: "Crisp cotton, delicate lace, conference table surface, and document papers creating environmental realism."
    }
  },

  {
    name: 'Corporate Seduction: VIP Lounge Nightcap',
    data: {
      shot: "Luxurious full body shot (9:16), opulent relaxation",
      subject: {
        variant: seductressVariant,
        pose: "Reclining on a velvet banquette in the executive lounge, one leg extended along the seat, the other foot on the floor. One arm stretched along the seat back, the other holding a champagne flute. Relaxed, victorious smile.",
        hair_color: "jet black",
        hair_style: "long, flowing waves spread across the velvet, creating luxurious texture contrast.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "Ultimate after-hours luxury: a black silk velvet gown with plunging neckline and thigh-high slit, revealing intricate black lace garter details. A delicate diamond necklace adds opulence.",
      environment: "Exclusive executive VIP lounge with rich velvet furniture, dim amber lighting, gold accents, contemporary art, and bottle service setup creating celebratory atmosphere.",
      lighting: "Paolo Roversi-inspired soft, warm, romantic lighting: diffused amber light creates dreamy, luxurious quality with gentle shadows and glowing highlights.",
      camera: {
        focal_length: "50mm",
        aperture: "f/1.8",
        distance: "3.5 m",
        angle: "Slightly high angle looking down at the reclining figure",
        framing: "Full body shot with velvet banquette dominating composition"
      },
      color_grade: "Warm & Romantic with rich burgundy and amber tones, luxurious film grain texture.",
      style: "Romantic Fashion meets Paolo Roversi's opulent, dreamlike aesthetic",
      quality: "Shot on Kodak Portra 800 for warm color palette and beautiful grain lending timeless quality.",
      figure_and_form: "Luxurious Repose: The velvet gown and reclining pose emphasize curves while projecting achievement and celebration.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "The velvet gown drapes with substantial weight, pooling naturally. The silk lining creates subtle sheen contrast.",
      material_properties: "Rich silk velvet, intricate lace, crystal champagne flute, and plush velvet upholstery creating opulent material symphony."
    }
  },

  {
    name: 'Corporate Seduction: Dawn Breaking',
    data: {
      shot: "Ethereal full body shot (9:16), transitional moment",
      subject: {
        variant: seductressVariant,
        pose: "Standing at floor-to-ceiling window, facing the dawn, body in slight contrapposto. One hand touching glass, the other at her side. Profile to camera, eyes closed, basking in first light.",
        hair_color: "jet black",
        hair_style: "slightly disheveled long waves suggesting all-night work session, authentic and beautiful.",
        skin_finish: "Natural Glow with golden subsurface scattering",
        hand_and_nail_details: "Natural & Unadorned.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "removed, barefoot"
      },
      wardrobe: "Morning after attire: an oversized white dress shirt (borrowed, masculine cut) worn as a dress with several buttons undone, revealing décolletage. Untucked and casual, suggesting the end of a long night.",
      environment: "Corner executive office at dawn, golden morning light streaming through windows, city awakening below. The office shows signs of all-night work - papers, coffee cups, discarded blazer.",
      lighting: "Peter Lindbergh-inspired natural morning light: soft, golden dawn light streaming through window creating luminous, ethereal quality with warm rim light on hair and skin.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "3 m",
        angle: "Eye-level, capturing profile against window",
        framing: "Full body shot with window and dawn skyline prominent"
      },
      color_grade: "Warm & Luminous with golden dawn tones, soft highlights, and dreamy quality.",
      style: "Private & Personal meets Peter Lindbergh's natural, unretouched beauty philosophy",
      quality: "Shot on Leica M11 for exceptional color rendering of dawn light and natural skin tones.",
      figure_and_form: "Authentic Beauty: The oversized shirt and bare feet suggest vulnerability and authenticity after a night of intense work, dawn light creating natural beauty.",
      skin_micro_details: "Hyper-realistic skin with natural texture and golden subsurface scattering where dawn light penetrates. Unretouched, authentic beauty.",
      fabric_physics: "The oversized shirt drapes naturally with authentic wrinkles and asymmetric folds from all-night wear.",
      material_properties: "Cotton shirt with directional weave visible in dawn light, glass window, and warm morning rays creating transitional material narrative from night to day."
    }
  }
];
