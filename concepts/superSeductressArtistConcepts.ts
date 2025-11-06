import type { ArtisticConcept } from './concepts';
import { indianModelVariants } from './subjects';

const superSeductressVariant = indianModelVariants.find(v => v.name.includes("Super-Seductress Artist"))!.value;

const defaultSkinMicroDetails = "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing.";
const defaultFabricPhysics = "The fabric drapes naturally, with realistic creases and folds that follow the subject's form. The weave of the fabric is visible upon close inspection.";
const defaultMaterialProperties = "The material has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject's skin.";

/**
 * SUPER-SEDUCTRESS ARTIST CONCEPT COLLECTION
 *
 * Showcasing the bi-polar range of the Indian Super-Seductress Artist:
 * From corporate power dominance to vulnerable erotic-muse manifestation
 *
 * Enhanced dramatic curves: bust 40DD", waist 26", hips 44"
 * Artistic intelligence with role-based expression expertise
 * Both indoor private and outdoor secluded environments
 */

export const superSeductressArtistConcepts: ArtisticConcept[] = [
  // ============================================================================
  // INDOOR PRIVATE ENVIRONMENTS - Corporate Power Dominance Side
  // ============================================================================

  {
    name: 'Super-Seductress: Private Studio Command',
    data: {
      shot: "Powerful full body portrait (9:16), emphasizing corporate dominance and artistic authority",
      subject: {
        variant: superSeductressVariant,
        pose: "Standing in powerful stance with legs apart, one hand on hip, the other holding riding crop or director's slate. Direct, unwavering gaze radiating absolute control. Back straight, chin raised. Commanding presence filling the private studio space. Dramatic bombshell curves emphasized by confident posture.",
        hair_color: "jet black",
        hair_style: "a severe, slicked-back style pulled into tight low ponytail, emphasizing sharp facial structure and intensity.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with statement crimson red polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Statement Crimson Red Polish",
        high_heels: "Thigh-high Black Leather Boots with extreme heels"
      },
      wardrobe: "Corporate power dominance: a structured black leather corset with architectural boning and metal hardware, creating dramatic waist cinching emphasizing extreme hourglass curves (26\" waist to 44\" hips ratio). High-waisted leather shorts with lacing details. Full leather gloves. Geometric leather harness creating graphic patterns. Maximum power aesthetic with clear dominance signals.",
      environment: "Private photography studio with dark grey seamless backdrop, professional lighting equipment visible, director's chair, slate boards. Clean minimalist space emphasizing her commanding presence. Industrial concrete floor.",
      lighting: "Helmut Newton-inspired dramatic hard lighting from high angle creating strong shadows and highlights. Single powerful light source emphasizing leather texture and power stance. High contrast noir lighting.",
      camera: {
        focal_length: "50mm",
        aperture: "f/4.0",
        distance: "3 m",
        angle: "Slightly low angle to emphasize dominance and stature",
        framing: "Full body shot with powerful stance filling frame confidently"
      },
      color_grade: "Severe Monochromatic with crushed blacks and high contrast emphasizing power.",
      style: "Neo-noir Sensuality meets corporate power photography, Helmut Newton dominance aesthetic",
      quality: "Shot on Phase One XF IQ4 150MP for extreme detail capturing leather texture, metal hardware, and powerful presence with hyper-realistic precision.",
      figure_and_form: "Corporate Power Curves: Extreme hourglass silhouette with leather corset creating dramatic 26\" waist to 44\" hip ratio. Powerful stance emphasizing thigh curves and hip width. Leather emphasizing bombshell proportions. Dominance radiating from every aspect of pose and styling.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Structured leather maintains architectural form with visible tension and realistic creasing. Hardware and buckles show authentic weight and metal properties.",
      material_properties: "Multiple leather finishes: matte corset, glossy boots, textured gloves, and metal hardware creating high-contrast dominance material narrative."
    }
  },

  {
    name: 'Super-Seductress: Luxury Loft Vulnerability',
    data: {
      shot: "Intimate full body shot (9:16), capturing vulnerable erotic-muse side with artistic sensitivity",
      subject: {
        variant: superSeductressVariant,
        pose: "Seated on floor against exposed brick wall, knees drawn up with arms wrapped around legs, head resting on knees. Eyes looking toward camera with vulnerable, open expression. Natural, unguarded body language. Dramatic curves softened by vulnerable posing. Artistic emotional expression showing sensitive side.",
        hair_color: "jet black",
        hair_style: "long, naturally tousled waves falling loosely, soft and romantic, face-framing tendrils.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible - barefoot"
      },
      wardrobe: "Vulnerable minimal aesthetic: an oversized cream cable-knit sweater worn off shoulders, falling loosely to mid-thigh. Underneath, a delicate sage green lace bralette and matching high-waisted brief visible where sweater falls open. Cozy, intimate, soft aesthetic emphasizing vulnerability rather than power. Curves softly suggested through knit draping.",
      environment: "Converted industrial loft with exposed brick walls, large windows with soft natural light, scattered art books and sketches, unmade daybed with white linens, plants. Artistic, lived-in private space reflecting creative soul.",
      lighting: "Paolo Roversi-inspired soft natural window light creating dreamy diffused quality. Gentle wrap-around lighting with no harsh shadows. Warm afternoon glow creating intimate safe atmosphere.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/1.8",
        distance: "2.5 m",
        angle: "Slightly high angle, viewer looking down creating protective gentle perspective",
        framing: "Full body seated with loft environment creating intimate context"
      },
      color_grade: "Warm & Soft with cream tones, soft greens, and gentle natural light creating vulnerable intimate mood.",
      style: "Private & Personal meets vulnerable artistic portraiture, Paolo Roversi soft intimacy",
      quality: "Shot on Leica M11 with Summilux 50mm for natural rendering and beautiful bokeh creating emotional depth.",
      figure_and_form: "Vulnerable Softness: Dramatic bombshell curves (40DD, 26\" waist, 44\" hips) softened by vulnerable pose and oversized knit. Curves suggested rather than emphasized, creating tender intimate aesthetic. Erotic-muse vulnerability expressed through body language.",
      skin_micro_details: "Natural soft skin with gentle dewy finish. Realistic texture without harsh detail. Warm natural light creating beautiful subsurface scattering showing emotional openness.",
      fabric_physics: "Oversized cable-knit drapes naturally with authentic heavy wool texture. Delicate lace visible underneath shows soft feminine details.",
      material_properties: "Soft chunky wool knit, delicate semi-transparent lace, exposed brick texture, and soft natural light creating vulnerable material dialogue."
    }
  },

  {
    name: 'Super-Seductress: Art Gallery Dominance',
    data: {
      shot: "Powerful full body portrait (9:16), commanding private gallery space with artistic authority",
      subject: {
        variant: superSeductressVariant,
        pose: "Standing center gallery in powerful contrapposto stance, one hand on hip creating dramatic hip curve emphasis, other arm extended touching gallery wall. Direct, challenging gaze. Owning the space with confident artistic presence. Dramatic hourglass silhouette against white gallery walls.",
        hair_color: "jet black",
        hair_style: "sleek, straight hair with precise center part, falling like silk curtains framing her face, sharp and modern.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "Subtle Gold Septum",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Art gallery power: a geometric black structured bodysuit featuring architectural 'cage' design with interconnected straps creating graphic patterns emphasizing extreme curves. High-cut legs showcasing 44\" hip width. Strategic cutouts with gold hardware accents. Museum-quality fashion as wearable art. Dramatic waist cinching showing 26\" measurement.",
      environment: "Private contemporary art gallery with white walls, polished concrete floor, dramatic modern art pieces on walls, gallery lighting with spotlights. Minimalist high-end space emphasizing her as the primary art piece.",
      lighting: "Irving Penn-inspired precise gallery lighting with clean even illumination showing architectural bodysuit structure. Spotlights creating dimensional depth without harsh drama.",
      camera: {
        focal_length: "50mm",
        aperture: "f/4.0",
        distance: "4 m",
        angle: "Eye-level for gallery documentation aesthetic and direct confrontation",
        framing: "Full body with gallery space and art context visible, composed as exhibition piece"
      },
      color_grade: "Clean and Modern with white gallery neutrals, black geometric emphasis, and high-end editorial quality.",
      style: "Graphic Fashion-Editorial meets contemporary art installation, Irving Penn precision",
      quality: "Shot on Hasselblad X2D 100MP for museum documentation quality capturing every architectural detail and gallery environment with technical perfection.",
      figure_and_form: "Gallery Dominance Curves: Geometric bodysuit creates living sculpture emphasizing dramatic hourglass proportions. Architectural design mapping extreme 40DD-26-44 curves as wearable art. Power stance in gallery context establishing her as both artist and artwork. Commanding presence.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Structured geometric bodysuit maintains architectural form with realistic tension across curves. Hardware and strap connections show engineering precision.",
      material_properties: "Structured architectural fabric with matte finish, gold hardware with specular highlights, white gallery walls, and polished concrete creating contemporary art material narrative."
    }
  },

  {
    name: 'Super-Seductress: Private Screening Room Vulnerability',
    data: {
      shot: "Intimate full body shot (16:9), vulnerable erotic-muse in cinematic private space",
      subject: {
        variant: superSeductressVariant,
        pose: "Reclining on plush velvet cinema seating, body creating relaxed S-curve. One leg bent, the other extended. One arm stretched along seat back, other hand touching face in thoughtful vulnerable gesture. Eyes looking off-camera with pensive expression. Soft vulnerable body language inviting emotional connection.",
        hair_color: "jet black",
        hair_style: "long, loose waves with natural volume, tousled and romantic, slightly messy suggesting intimate private moment.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "kicked off nearby - barefoot"
      },
      wardrobe: "Vulnerable intimate: a burgundy silk slip dress with delicate lace trim and cowl neckline, cut on bias clinging naturally to curves. The silk emphasizes hourglass silhouette through natural draping rather than structure. An oversized black cashmere cardigan worn open and falling off shoulders. Intimate private aesthetic.",
      environment: "Private home cinema with plush burgundy velvet seating, dim ambient lighting, classic film projected on screen creating atmospheric glow. Intimate luxury screening room with soundproofing creating isolated safe space.",
      lighting: "Peter Lindbergh-inspired natural ambient light from projected film creating warm atmospheric glow. Soft fill light maintaining vulnerability without exposure. Intimate warm tones.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Slightly high angle creating gentle intimate viewer perspective",
        framing: "Full body reclining with cinema environment visible, emphasizing private intimate moment"
      },
      color_grade: "Warm & Romantic with burgundy velvet tones, golden film light, and soft shadows creating vulnerable cinematic mood.",
      style: "Private & Personal meets cinematic intimacy, Peter Lindbergh natural vulnerability",
      quality: "Shot on Canon EOS R5 with RF 85mm f/1.2 for beautiful color science and natural skin tone rendering in low light.",
      figure_and_form: "Vulnerable Cinema Curves: Bias-cut silk naturally drapes over dramatic bombshell proportions creating organic curves rather than structured emphasis. Reclining pose softens power showing sensual erotic-muse vulnerability. Natural hourglass visible through silk flow.",
      skin_micro_details: "Soft dewy skin with warm film light creating gentle glow. Realistic texture with emotional warmth. Natural beauty without clinical detail.",
      fabric_physics: "Bias-cut silk drapes with liquid weight following body curves naturally. Cashmere cardigan shows soft heavy draping with authentic knit texture.",
      material_properties: "Smooth burgundy silk with directional sheen, soft cashmere knit, rich velvet cinema seating, and warm projected film light creating intimate vulnerable material poetry."
    }
  },

  {
    name: 'Super-Seductress: Penthouse Suite Power',
    data: {
      shot: "Commanding full body shot (9:16), ultimate power and luxury dominance",
      subject: {
        variant: superSeductressVariant,
        pose: "Standing at floor-to-ceiling window overlooking city, back to camera showing dramatic silhouette, looking over shoulder with powerful gaze. One hand on window glass, other on hip. Power stance with weight on one leg creating dramatic hip curve. Silhouette emphasizing extreme hourglass proportions against bright city lights.",
        hair_color: "jet black",
        hair_style: "long dark hair in elegant high ponytail with volume, face-framing wisps, Hollywood glamour styling.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with deep wine polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Wine Polish",
        high_heels: "Sharp Stiletto Heels"
      },
      wardrobe: "Ultimate power luxury: a floor-length black silk gown with dramatic thigh-high slit and completely open back to waist. The front features architectural draping creating sculptural shapes emphasizing bust and creating deep V. The fit emphasizes extreme 26\" waist to 44\" hip ratio through expert tailoring. Luxury evening power aesthetic.",
      environment: "Ultra-luxury penthouse suite with floor-to-ceiling windows showing glittering nighttime cityscape far below. Minimalist modern luxury furnishing, marble surfaces, ambient architectural lighting. Space radiating wealth and power.",
      lighting: "Helmut Newton-inspired dramatic rim lighting from city lights behind creating luminous outline. Minimal interior fill preserving powerful silhouette while revealing form details. High contrast luxury lighting.",
      camera: {
        focal_length: "35mm",
        aperture: "f/2.8",
        distance: "4 m",
        angle: "Eye-level capturing back view and city context, emphasizing commanding position",
        framing: "Full body with cityscape prominent, showing control of space and view"
      },
      color_grade: "Cool Cinematic with deep blacks, bright city light highlights, and luxury penthouse atmosphere.",
      style: "Neo-noir Sensuality meets ultimate power photography, Helmut Newton luxury dominance",
      quality: "Shot on Phase One XF IQ4 for exceptional dynamic range capturing both interior luxury and bright city lights with perfect detail.",
      figure_and_form: "Ultimate Power Curves: Backlit silhouette reveals extreme hourglass - 40DD bust, 26\" waist, 44\" hips. Thigh slit shows leg curves and stiletto heels. Open back emphasizes spine curve. Power stance overlooking city establishes dominance. Architectural gown sculpting bombshell proportions.",
      skin_micro_details: "Partially visible due to backlight silhouette, focus on powerful form and rim-lit edges creating dimensional separation.",
      fabric_physics: "Floor-length silk flows with luxurious weight, pooling slightly on floor. Thigh slit shows realistic fabric tension and draping.",
      material_properties: "High-sheen black silk with specular highlights, floor-to-ceiling glass, city lights creating countless bokeh points, and polished marble creating ultimate luxury material narrative."
    }
  },

  {
    name: 'Super-Seductress: Studio Erotic-Muse Vulnerability',
    data: {
      shot: "Intimate artistic study (9:16), maximum vulnerable erotic-muse expression",
      subject: {
        variant: superSeductressVariant,
        pose: "Seated on studio floor in contemplative pose, legs tucked to side, torso turned creating elegant curves. One arm supporting behind, other hand touching neck. Head tilted exposing neck vulnerability. Eyes soft, expression showing inner emotional depth. Artistic model vulnerability fully expressed.",
        hair_color: "jet black",
        hair_style: "long dark hair flowing naturally with soft waves, falling over one shoulder, natural and unstructured.",
        skin_finish: "Dewy & Luminous with natural glow",
        hand_and_nail_details: "Graceful & Anatomically Correct.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible - seated on floor barefoot"
      },
      wardrobe: "Erotic-muse minimal: a single high-waisted minimal sage green mesh brief with geometric cutout details emphasizing hip width. Delicate body chains in gold draped across shoulders and around 26\" waist accentuating hourglass curves. Fine art aesthetic with clear artistic study intent. Maximum vulnerable expression with minimal coverage.",
      environment: "Professional art studio with soft grey backdrop, warm wooden floor, natural north light through large windows. Minimal props emphasizing her as sole focus. Artist easels and creative tools visible establishing fine art context.",
      lighting: "Annie Leibovitz-inspired soft natural window light creating gentle wrap-around illumination. Soft shadows sculpting form without harshness. Beautiful subsurface scattering showing vulnerability and openness.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Eye-level for intimate emotional connection and respect",
        framing: "Full body seated with studio context visible, composed as fine art study"
      },
      color_grade: "Soft & Natural with warm wooden tones, sage green accents, and gentle light creating vulnerable artistic mood.",
      style: "Fine Art Sensuality meets vulnerable portraiture, Annie Leibovitz emotional depth",
      quality: "Shot on Leica M11 for natural color rendering and emotional authenticity capturing vulnerable erotic-muse expression.",
      figure_and_form: "Erotic-Muse Vulnerability: Minimal aesthetic reveals dramatic 40DD-26-44 bombshell curves in vulnerable artistic context. High-waisted brief emphasizes 44\" hip width and thigh curves. Body chains accent 26\" waist. Seated pose shows natural form without power posturing. Vulnerable artistic model expression.",
      skin_micro_details: "Natural soft skin with beautiful dewy finish and warm light creating subsurface scattering. Realistic texture showing emotional openness and vulnerability without clinical harshness.",
      fabric_physics: "Minimal mesh brief shows realistic tension across hip curves. Delicate body chains drape naturally with authentic weight showing gold's properties.",
      material_properties: "Sheer sage mesh with subtle transparency, delicate gold chains with specular highlights, warm wooden studio floor, and soft natural light creating vulnerable fine art material narrative."
    }
  },

  {
    name: 'Super-Seductress: Private Apartment Corporate Transition',
    data: {
      shot: "Dynamic medium shot (16:9), capturing bi-polar transition from power to vulnerability",
      subject: {
        variant: superSeductressVariant,
        pose: "Sitting on edge of bed partially turned toward camera, in process of removing power blazer - one arm out of sleeve. Expression showing transition from corporate control to private vulnerability. Body language between powerful and relaxed. Authentic moment of transformation captured.",
        hair_color: "jet black",
        hair_style: "professional low bun beginning to loosen with strands falling, mid-transition from structured to natural.",
        skin_finish: "Natural Glow with beginning of relaxation",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "one heel kicked off, one still on - mid-transition"
      },
      wardrobe: "Transition aesthetic: structured black blazer being removed, underneath a delicate black lace balconette bra and high-waisted pencil skirt still worn. The juxtaposition of corporate power (blazer, skirt) with intimate vulnerability (lace bra visible) shows the transformation. Dramatic curves emphasized by fitted undergarments revealing 26\" waist.",
      environment: "Luxury apartment bedroom visible through doorway, clothing scattered suggesting after-work transition. Modern minimalist bedroom with grey tones, unmade bed, city view through window. Private personal space contrasting with corporate world.",
      lighting: "Peter Lindbergh-inspired natural mixed lighting: warm interior bedroom light mixing with cool window light from city outside creating transitional atmospheric quality.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2 m",
        angle: "Eye-level for intimate documentary of transition moment",
        framing: "Medium shot from waist to top of head emphasizing expression and upper body transition"
      },
      color_grade: "Balanced between cool and warm tones showing transition from corporate to intimate space.",
      style: "Documentary Intimacy meets transitional moment photography, Peter Lindbergh authentic moments",
      quality: "Shot on Canon EOS R5 for natural color science capturing authentic transitional moment with beautiful skin tone rendering.",
      figure_and_form: "Transitional Curves: Fitted blazer coming off reveals lace bra emphasizing 40DD bust. High-waisted pencil skirt shows 26\" waist to 44\" hip ratio. The clothing transition from power to vulnerability emphasizes her bi-polar nature - both corporate dominance and vulnerable intimacy coexisting.",
      skin_micro_details: "Natural skin showing relaxation beginning. Slight flush from transition. Realistic texture with authentic end-of-day quality.",
      fabric_physics: "Structured blazer shows authentic removal behavior with wrinkles from wear. Delicate lace contrasts with corporate tailoring. Pencil skirt maintains structure.",
      material_properties: "Structured wool suiting, delicate semi-transparent lace, mixed lighting creating transitional material narrative showing power-to-vulnerability transformation."
    }
  },

  {
    name: 'Super-Seductress: Loft Midnight Artistic Expression',
    data: {
      shot: "Intimate full body portrait (9:16), ultimate vulnerable erotic-muse at creative peak",
      subject: {
        variant: superSeductressVariant,
        pose: "Standing by loft window with soft curtain fabric in hand, body turned creating elegant curves, face in profile looking out at night city. One hand holding sheer fabric, other arm wrapped across torso in vulnerable protective gesture. Pensive, deeply introspective expression. Artistic soul fully revealed.",
        hair_color: "jet black",
        hair_style: "long, wild natural waves with maximum volume from humidity and creative work, authentically tousled and free.",
        skin_finish: "Dewy & Luminous with natural midnight glow",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible - barefoot on wooden floor"
      },
      wardrobe: "Vulnerable artistic minimal: wearing only an oversized men's white dress shirt, unbuttoned and worn very loosely falling off one shoulder to mid-thigh. Underneath hints of a delicate ivory lace bralette barely visible. The oversized shirt creates vulnerable aesthetic emphasizing her artistic creative soul over physical form. Intimate private creative moment.",
      environment: "Artist loft at midnight with creative chaos - paint-splattered floors, canvases, art supplies scattered, large windows with city lights, unmade daybed, bohemian textiles. Space reflecting deep artistic expression and creative vulnerability.",
      lighting: "Paolo Roversi-inspired soft ambient light from city through windows mixing with warm tungsten lamp light creating dreamy romantic quality. Soft wrapping light with no harsh shadows emphasizing vulnerable creative soul.",
      camera: {
        focal_length: "50mm",
        aperture: "f/1.8",
        distance: "3 m",
        angle: "Eye-level capturing profile and creative environment equally",
        framing: "Full body with loft creative space visible showing artistic context"
      },
      color_grade: "Warm & Dreamy with golden lamp light, cool city window light, and soft romantic tones creating vulnerable artistic mood.",
      style: "Private & Personal meets artistic soul documentation, Paolo Roversi dreamlike vulnerability",
      quality: "Shot on Hasselblad 503CW on Kodak Portra 800 for warm romantic grain and timeless vulnerable quality.",
      figure_and_form: "Artistic Soul Curves: Oversized white shirt suggests rather than reveals dramatic 40DD-26-44 curves underneath. Vulnerable protective body language softens bombshell proportions. Profile and fabric flow create artistic expression over physical emphasis. Erotic-muse vulnerability at maximum with creative artistic spirit fully expressed.",
      skin_micro_details: "Natural soft skin with warm ambient light creating gentle subsurface scattering. Paint smudges on hands showing creative work. Authentic vulnerable texture without artifice.",
      fabric_physics: "Oversized cotton shirt drapes with authentic heavy weight and natural wrinkles from wear. Delicate lace barely visible underneath shows soft feminine detail.",
      material_properties: "Crisp cotton shirt with matte finish, delicate ivory lace, paint-splattered wooden floor, scattered canvas textures, and soft mixed lighting creating ultimate vulnerable artistic material poetry."
    }
  },

  // ============================================================================
  // OUTDOOR PRIVATE ENVIRONMENTS - Power to Vulnerability Spectrum
  // ============================================================================

  {
    name: 'Super-Seductress: Private Rooftop Urban Dominance',
    data: {
      shot: "Powerful full body shot (9:16), urban goddess commanding rooftop territory",
      subject: {
        variant: superSeductressVariant,
        pose: "Standing at rooftop edge with cityscape behind, powerful wide stance with legs apart, one hand on hip, other arm extended touching industrial element. Wind catching hair and fabric. Direct confrontational gaze radiating dominance over urban environment. Commanding rooftop space.",
        hair_color: "jet black",
        hair_style: "long dark hair windswept and flowing dramatically in urban breeze, wild and powerful.",
        skin_finish: "Matte & Flawless",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "Subtle Gold Septum",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Urban power dominance: a fitted black leather bodysuit with strategic cutouts and geometric panel design creating architectural emphasis on extreme curves. Long flowing black coat worn open billowing in wind. Thigh-high leather boots. Industrial urban power aesthetic with maximum edge.",
      environment: "Private rooftop access at sunset with city skyline stretching behind, industrial elements (ventilation units, water towers), concrete and metal surfaces. Exclusive high-rise rooftop emphasizing power and exclusivity. Wind and atmospheric elements.",
      lighting: "Helmut Newton-inspired dramatic golden hour side light creating rim lighting around form. Strong directional light with urban atmosphere. Backlight from low sun creating separation and power.",
      camera: {
        focal_length: "35mm",
        aperture: "f/2.8",
        distance: "3.5 m",
        angle: "Slightly low angle emphasizing dominance against sky",
        framing: "Full body with urban skyline and rooftop context showing territory command"
      },
      color_grade: "Cool Urban with warm golden sunset highlights, desaturated city tones, and edgy atmosphere.",
      style: "Urban High Fashion meets rooftop power photography, Helmut Newton urban edge",
      quality: "Shot on Sony A1 with G Master 35mm for ultra-sharp modern rendering capturing urban details and dynamic range.",
      figure_and_form: "Urban Power Curves: Leather bodysuit with cutouts emphasizes extreme 40DD-26-44 hourglass. Wide power stance shows thigh curves and hip width. Flowing coat adds dramatic movement. Urban goddess commanding city territory. Maximum corporate power dominance in outdoor setting.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Fitted leather shows realistic tension across curves. Long coat billows authentically in wind with heavy fabric movement. Boots show leather creasing.",
      material_properties: "Matte and glossy leather with geometric panels, industrial concrete and metal, golden hour atmosphere, and windswept fabric creating urban power material narrative."
    }
  },

  {
    name: 'Super-Seductress: Secret Garden Erotic-Muse',
    data: {
      shot: "Ethereal full body portrait (9:16), vulnerable goddess in nature sanctuary",
      subject: {
        variant: superSeductressVariant,
        pose: "Standing among flowering vines in hidden garden alcove, one hand touching ancient stone wall, other hand in flowing hair. Natural contrapposto stance creating elegant curves. Eyes soft, gazing downward with vulnerable introspective expression. Natural vulnerable beauty in secret garden sanctuary.",
        hair_color: "jet black",
        hair_style: "long, natural waves with small flowers naturally woven in, romantic and wild garden goddess aesthetic.",
        skin_finish: "Dewy & Luminous with natural outdoor glow",
        hand_and_nail_details: "Natural & Unadorned.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible - barefoot on moss and stone"
      },
      wardrobe: "Garden erotic-muse minimal: a flowing sheer ivory silk robe with floral embroidery worn completely open, underneath a delicate blush-colored lace bralette and matching high-waisted brief with floral patterns. Nature-inspired minimal aesthetic. The sheer robe catches breeze creating romantic flowing movement around bombshell curves.",
      environment: "Private walled secret garden with ancient stone walls covered in flowering vines, hidden alcove filled with roses and jasmine, soft natural filtered light through foliage, moss-covered stones. Completely secluded romantic paradise creating safe vulnerable space.",
      lighting: "Peter Lindbergh-inspired soft natural light filtered through garden canopy creating dappled gentle illumination. Golden hour warmth mixing with cool garden shadows. Natural romantic atmospheric lighting.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "3 m",
        angle: "Eye-level for gentle intimate garden connection",
        framing: "Full body with flowering vines and ancient walls creating natural romantic frame"
      },
      color_grade: "Soft & Romantic with warm garden light, blush and ivory tones, soft greens creating vulnerable sanctuary mood.",
      style: "Fine Art Sensuality meets garden goddess vulnerability, Peter Lindbergh natural romantic",
      quality: "Shot on Leica M11 with Summilux 50mm for beautiful natural color and romantic bokeh capturing garden sanctuary intimacy.",
      figure_and_form: "Garden Goddess Vulnerability: Flowing sheer robe suggests dramatic 40DD-26-44 curves through translucent fabric. Blush lace emphasizes hourglass with nature-inspired delicacy. Natural stance shows organic curves harmonizing with garden. Maximum vulnerable erotic-muse expression in nature sanctuary.",
      skin_micro_details: "Natural dewy skin with soft garden light creating beautiful subsurface scattering. Slight flower pollen on skin showing nature connection. Authentic outdoor texture.",
      fabric_physics: "Sheer silk robe flows with breeze creating dynamic romantic movement. Delicate lace shows nature-inspired patterns with realistic transparency. Fabric interacts naturally with garden air.",
      material_properties: "Translucent ivory silk catching light, delicate blush lace with floral patterns, ancient weathered stone, flowering vines, and soft filtered garden light creating vulnerable sanctuary material poetry."
    }
  },

  {
    name: 'Super-Seductress: Secluded Forest Clearing Ultimate Vulnerability',
    data: {
      shot: "Intimate artistic study (9:16), maximum vulnerable erotic-muse in nature",
      subject: {
        variant: superSeductressVariant,
        pose: "Seated on moss-covered log in forest clearing, one leg tucked under, other extended, creating natural curves. Torso turned with one arm supporting behind, other hand touching face. Looking toward filtered sunlight with peaceful vulnerable expression. Complete surrender to natural environment and inner vulnerability.",
        hair_color: "jet black",
        hair_style: "long, wild natural waves with forest elements (leaves, small twigs) naturally caught, completely unstructured and free.",
        skin_finish: "Dewy & Luminous enhanced by forest mist creating natural glistening",
        hand_and_nail_details: "Natural & Unadorned.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible - barefoot on soft moss"
      },
      wardrobe: "Forest erotic-muse minimal: only a hand-crafted sage green vine-pattern lace bodysuit with organic irregular edges and nature-inspired cutouts emphasizing curves. High-cut design emphasizing 44\" hip width and thigh curves. The organic lace mimics forest flora creating camouflage effect. Fine art minimal aesthetic in complete nature immersion.",
      environment: "Hidden forest clearing completely secluded with ancient trees, soft moss covering everything, shafts of golden morning light filtering through canopy creating mystical atmosphere. Completely private natural sanctuary far from civilization. Mist hovering at ground level.",
      lighting: "Annie Leibovitz-inspired soft dappled morning light through forest canopy creating natural sculpture. Shafts of light creating dimensional depth and mystical quality. Natural forest diffusion.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "3 m",
        angle: "Eye-level for intimate natural connection and respect",
        framing: "Full body with forest clearing and mystical light shafts creating ethereal context"
      },
      color_grade: "Soft & Mystical with golden morning light, rich forest greens, and ethereal mist creating ultimate vulnerable sanctuary.",
      style: "Fine Art Sensuality meets forest goddess ultimate vulnerability, Annie Leibovitz natural mysticism",
      quality: "Shot on Hasselblad X2D for exceptional detail capturing forest atmosphere, light shafts, and natural mystical quality.",
      figure_and_form: "Forest Erotic-Muse Ultimate: Organic lace reveals complete dramatic 40DD-26-44 bombshell curves in vulnerable forest context. High-cut design emphasizes hip width and thigh curves. Seated natural pose shows organic curves harmonizing with forest elements. Maximum vulnerable expression - complete surrender to nature and inner erotic-muse essence.",
      skin_micro_details: "Forest-misted skin with micro-droplets creating natural dewy glow. Soft moss contact showing nature immersion. Beautiful subsurface scattering in golden light shafts. Ultimate natural vulnerable texture.",
      fabric_physics: "Organic vine-lace shows hand-crafted irregular patterns mimicking nature. Material displays realistic tension across curves with authentic transparency.",
      material_properties: "Hand-crafted organic lace with nature patterns, soft moss texture, weathered wood, golden light shafts through mist, and dewy skin creating ultimate vulnerable forest erotic-muse material poetry."
    }
  },

  {
    name: 'Super-Seductress: Private Beach Power',
    data: {
      shot: "Powerful full body shot (16:9), commanding secluded beach territory",
      subject: {
        variant: superSeductressVariant,
        pose: "Standing at water's edge with waves at feet, powerful stance with legs apart, hands on hips, looking directly at camera with absolute confidence. Wind catching wet hair. Ocean spray around her. Commanding natural element with corporate power translated to nature setting.",
        hair_color: "jet black",
        hair_style: "long wet hair slicked back from ocean water, windswept with salt spray texture creating wild power aesthetic.",
        skin_finish: "Dewy & Luminous enhanced by ocean spray creating dramatic glistening",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "not visible - barefoot in wet sand"
      },
      wardrobe: "Beach power minimal: a high-cut black athletic bikini with geometric design details and gold hardware accents emphasizing extreme hourglass curves. High-waisted bottom sitting on 44\" hips creating maximum impact. Sporty yet powerful aesthetic. Wet from ocean creating transparent effects and glistening.",
      environment: "Private secluded beach completely isolated with dramatic rocky cliffs, crashing waves, grey sand, overcast dramatic sky. Powerful natural elements echoing her power. Wind and ocean spray creating dynamic atmosphere. Hidden exclusive beach access.",
      lighting: "Peter Lindbergh-inspired overcast natural light creating even illumination with ocean reflections adding fill light from below. Dramatic sky creating moody powerful atmosphere without harsh shadows.",
      camera: {
        focal_length: "35mm",
        aperture: "f/4.0",
        distance: "3 m",
        angle: "Slightly low angle emphasizing power against ocean and sky",
        framing: "Full body with ocean waves and dramatic sky showing elemental power command"
      },
      color_grade: "Cool & Dramatic with grey-blue ocean tones, dark sky, and high contrast creating powerful beach atmosphere.",
      style: "Environmental Power Photography meets ocean goddess dominance, Peter Lindbergh natural strength",
      quality: "Shot on Sony A1 for exceptional dynamic range capturing both bright ocean spray and dark stormy sky with perfect detail.",
      figure_and_form: "Ocean Power Curves: Wet athletic bikini clings to extreme 40DD-26-44 bombshell proportions creating transparent second-skin effect. High-cut bottom emphasizes 44\" hip width dramatically. Power stance in ocean waves establishes dominance over natural elements. Corporate power translated to nature commanding.",
      skin_micro_details: "Ocean-sprayed skin completely covered in water droplets creating glistening texture. Natural athletic flush from ocean energy. Realistic wet skin with specular highlights from water.",
      fabric_physics: "Wet athletic bikini shows realistic water saturation and transparency. Fabric clings tightly showing complete form with ocean physics.",
      material_properties: "Wet black athletic fabric with transparency, gold hardware catching light, ocean spray droplets, wet sand texture, and dramatic grey sky creating ocean power material narrative."
    }
  },

  {
    name: 'Super-Seductress: Hidden Terrace Artistic Expression',
    data: {
      shot: "Intimate full body portrait (9:16), vulnerable artistic expression in private outdoor space",
      subject: {
        variant: superSeductressVariant,
        pose: "Seated on terrace daybed with legs folded to side, torso turned creating elegant curves, one hand supporting behind, other touching tousled hair. Looking off to side toward nature vista with thoughtful vulnerable expression. Relaxed artistic soul in private outdoor sanctuary.",
        hair_color: "jet black",
        hair_style: "long, naturally tousled waves with volume from outdoor humidity, soft and romantic falling over shoulders.",
        skin_finish: "Natural Glow with outdoor freshness",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible - barefoot on daybed"
      },
      wardrobe: "Terrace vulnerable minimal: a soft peach-colored silk slip dress with delicate lace trim, very thin straps, bias-cut naturally clinging to curves. An oversized linen shirt worn open as light cover. Natural outdoor intimate aesthetic emphasizing vulnerability and relaxation. Curves softly emphasized through natural silk draping.",
      environment: "Private hidden rooftop terrace with abundant plants creating green oasis, comfortable outdoor daybed with cushions, string lights, mountain or nature vista visible. Completely secluded personal outdoor sanctuary creating safe vulnerable space. Late afternoon golden light.",
      lighting: "Paolo Roversi-inspired soft golden hour light creating warm romantic glow. Natural outdoor lighting with no artificial sources. Gentle shadows from plants creating dappled intimate patterns.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/1.8",
        distance: "2.5 m",
        angle: "Eye-level for intimate personal connection",
        framing: "Full body seated with terrace garden and vista creating personal sanctuary context"
      },
      color_grade: "Warm & Romantic with golden hour peach tones, soft greens, and intimate outdoor mood.",
      style: "Private & Personal meets outdoor sanctuary vulnerability, Paolo Roversi warm intimacy",
      quality: "Shot on Canon EOS R5 for beautiful warm color science and natural outdoor skin tone rendering.",
      figure_and_form: "Terrace Vulnerability Curves: Bias-cut silk naturally drapes over dramatic 40DD-26-44 curves showing organic hourglass. Relaxed seated pose emphasizes hip curves and softens power. Natural outdoor setting with vulnerable expression shows erotic-muse intimate side. Personal artistic expression in private sanctuary.",
      skin_micro_details: "Natural outdoor-fresh skin with golden hour light creating beautiful warm glow and subsurface scattering. Realistic texture with outdoor healthy quality.",
      fabric_physics: "Bias-cut peach silk drapes naturally with liquid weight. Oversized linen shows authentic heavy casual texture with natural wrinkles.",
      material_properties: "Smooth peach silk with warm sheen, soft linen with natural weave, outdoor daybed textiles, green plants, and golden hour light creating vulnerable outdoor sanctuary material dialogue."
    }
  },

  {
    name: 'Super-Seductress: Private Garden Power Balance',
    data: {
      shot: "Balanced full body shot (9:16), showing equilibrium between power and vulnerability",
      subject: {
        variant: superSeductressVariant,
        pose: "Standing in garden center with balanced natural stance, weight evenly distributed, arms at sides in neutral yet confident position. Direct but soft gaze showing both strength and openness. Expression balanced between commanding and inviting. Neither full power nor full vulnerability - showing her complete bi-polar range integrated.",
        hair_color: "jet black",
        hair_style: "long, loose waves with natural volume, neither severely styled nor completely wild - balanced aesthetic.",
        skin_finish: "Dewy & Luminous",
        hand_and_nail_details: "Impeccably Manicured with deep wine polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Wine Polish",
        high_heels: "Architectural High Heels"
      },
      wardrobe: "Balanced power-vulnerability: a sophisticated black silk camisole with delicate lace trim paired with high-waisted black silk pants with flowing wide legs. An elegant sheer black kimono-style jacket worn open flowing to floor. The ensemble balances structure (pants) with softness (camisole, kimono). Elegant curves emphasized but not aggressively showcased.",
      environment: "Private walled estate garden with manicured paths, architectural plantings, classical statuary, evening twilight creating balanced light. Neither wild nature nor strict architecture - cultivated beauty. Exclusive private estate garden representing balance between control and nature.",
      lighting: "Irving Penn-inspired balanced twilight lighting - even illumination from soft sky creating flattering neutral light. Neither dramatic shadows nor bright exposure - perfect balance. Professional yet natural.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3.5 m",
        angle: "Eye-level for respectful equal perspective showing balance",
        framing: "Full body centered with balanced garden composition showing equilibrium"
      },
      color_grade: "Balanced & Sophisticated with neutral twilight tones, elegant blacks, and refined atmospheric quality.",
      style: "Sophisticated Balance meets integrated bi-polar expression, Irving Penn refined neutrality",
      quality: "Shot on Hasselblad X2D for technical perfection capturing balanced tonal range and sophisticated detail.",
      figure_and_form: "Balanced Integration Curves: Elegant flowing ensemble emphasizes dramatic 40DD-26-44 curves through sophisticated draping rather than aggressive structure or minimal coverage. Balanced stance shows neither power dominance nor vulnerable submission - complete integrated expression. Her bi-polar range harmonized showing full artistic complexity - both corporate power and erotic-muse vulnerability coexisting in balance.",
      skin_micro_details: defaultSkinMicroDetails,
      fabric_physics: "Silk camisole and pants show luxurious natural draping. Sheer kimono flows with balanced weight - neither heavy nor weightless. Balanced fabric behavior.",
      material_properties: "Multiple silk textures (structured pants, soft camisole, flowing kimono), manicured garden stone paths, classical statuary, and balanced twilight creating integrated power-vulnerability material harmony."
    }
  },

  {
    name: 'Super-Seductress: Secluded Natural Pool Goddess',
    data: {
      shot: "Ethereal full body portrait (9:16), ultimate vulnerable water goddess in hidden paradise",
      subject: {
        variant: superSeductressVariant,
        pose: "Standing waist-deep in crystal clear natural pool, arms raised overhead in graceful goddess gesture, back slightly arched. Water at hip level. Face tilted toward sky with eyes closed in blissful surrender. Complete vulnerable immersion in natural element. Ultimate erotic-muse water goddess expression.",
        hair_color: "jet black",
        hair_style: "long wet hair slicked back from water, droplets catching light, natural and pure.",
        skin_finish: "Dewy & Luminous with extreme water glistening creating ethereal quality",
        hand_and_nail_details: "Graceful & Anatomically Correct.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible - standing in water"
      },
      wardrobe: "Water goddess ultimate minimal: only a minimal sheer white mesh brief underwater becoming nearly invisible in crystal water. Torso bare reflecting sunlight on wet skin. Delicate silver body chains with natural stone beads draped across shoulders and around waist at water line emphasizing curves. Ultimate vulnerable water goddess aesthetic with nature element primary focus.",
      environment: "Completely secluded natural pool hidden in forest with crystal clear water reflecting sky, smooth rocks surrounding, waterfall feeding pool creating white noise privacy, lush ferns and tropical plants. Absolutely hidden private water paradise. Afternoon light creating magical quality through mist.",
      lighting: "Annie Leibovitz-inspired soft natural overhead light creating even ethereal illumination. Water acting as secondary light source through refraction. Light dancing on water surface creating magical sparkle effects. Natural mystical atmosphere.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "4 m",
        angle: "Eye-level capturing water line and goddess presence equally",
        framing: "Full body with water context showing goddess in natural element, pool and waterfall visible"
      },
      color_grade: "Ethereal & Luminous with crystal water blues, golden light, soft greens creating ultimate water goddess atmosphere.",
      style: "Fine Art Sensuality meets water goddess ultimate vulnerability, Annie Leibovitz ethereal mysticism",
      quality: "Shot on Phase One XF IQ4 for extreme detail capturing every water droplet, light refraction, and mystical pool atmosphere with hyper-realistic clarity.",
      figure_and_form: "Water Goddess Ultimate Vulnerability: Water line at hips emphasizes extreme 44\" hip width and 26\" waist dramatically. Wet minimal coverage reveals complete 40DD-26-44 bombshell curves in ultimate vulnerable water context. Raised arms showcase bust and torso curves. Silver chains accent hourglass at water line. Complete erotic-muse surrender to natural element - ultimate vulnerable expression in hidden paradise. Pure goddess essence.",
      skin_micro_details: "Completely water-covered skin with countless droplets creating glistening ethereal surface. Water refraction creating prismatic effects on wet skin. Natural subsurface scattering from overhead light creating luminous goddess quality. Ultimate vulnerable water-kissed texture.",
      fabric_physics: "Minimal white mesh underwater becomes nearly invisible allowing pure form focus. Silver body chains show realistic weight and draping across wet curves with authentic metal properties.",
      material_properties: "Water-drenched glistening skin with refraction effects, nearly invisible wet mesh, silver chains with specular highlights, crystal clear water with surface reflections, smooth natural rocks, and mystical natural light creating ultimate vulnerable water goddess material poetry - erotic-muse essence in purest form."
    }
  }
];
