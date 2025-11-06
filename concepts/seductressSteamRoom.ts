import type { ArtisticConcept } from './concepts';
import { indianModelVariants } from './subjects';

const seductressVariant = indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value;

const defaultSkinMicroDetails = "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing.";
const defaultFabricPhysics = "The fabric drapes naturally, with realistic creases and folds that follow the subject's form. The weave of the fabric is visible upon close inspection.";
const defaultMaterialProperties = "The material has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject's skin.";

export const seductressSteamRoom: ArtisticConcept[] = [
  {
    name: 'Steam Paradise: Private Steam Room Goddess',
    data: {
      shot: "Ethereal full body portrait (9:16), bombshell curves in dense steam",
      subject: {
        variant: seductressVariant,
        pose: "Reclining on teak wood bench in steam room, propped on one elbow, body creating luxurious S-curve. One leg bent, the other extended. Free hand touching glistening wet hair. Looking at camera through steam with sultry, relaxed expression. Steam swirling around voluptuous form.",
        hair_color: "jet black",
        hair_style: "long wet hair slicked back and dripping, completely soaked from steam condensation.",
        skin_finish: "Dewy & Luminous enhanced by steam creating extreme glistening sheen",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "not visible - barefoot on wet teak"
      },
      wardrobe: "Steam minimal luxury: a white Turkish towel wrapped low around wide hips, barely covering. Torso bare, glistening with steam condensation and perspiration. Minimalist coverage emphasizing steam-kissed bombshell curves.",
      environment: "Private luxury steam room with teak wood benches and walls, dense white steam filling space creating atmospheric fog, subtle warm lighting through steam, water droplets covering all surfaces. Temperature indicators showing high heat. Intimate humid paradise.",
      lighting: "Helmut Newton-inspired soft light diffused through dense steam creating ethereal volumetric effect. Warm amber undertones from heated lights. Steam acting as natural diffusion creating dreamy quality.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Slightly high angle, intimate viewer perspective",
        framing: "Full body reclining with steam swirling creating atmospheric depth"
      },
      color_grade: "Warm & Ethereal with soft golden tones, dense white steam, and high humidity atmosphere creating intimate mood.",
      style: "Neo-noir Sensuality meets atmospheric spa photography",
      quality: "Shot on Leica M11 for exceptional rendering of steam atmosphere and glistening skin textures.",
      figure_and_form: "Steam Goddess Curves: Reclining pose showcases dramatic hourglass silhouette. Low-wrapped towel emphasizes wide hips and narrow waist. Steam-glistening skin highlights every curve - wide hips, full thighs, narrow waist, full bust. Humidity celebrating bombshell proportions.",
      skin_micro_details: "Completely covered in fine steam condensation creating glistening sheen. Visible perspiration beads in key areas. Water droplets running down curves. High specular highlights on wet skin. Natural flush from heat.",
      fabric_physics: "Wet Turkish towel clings to hip curves with heavy dampness. Fabric shows realistic water saturation and weight.",
      material_properties: "Wet Turkish cotton towel, steaming teak wood with water droplets, dense atmospheric steam, and extremely glistening perspiration-covered skin creating humid luxury material narrative."
    }
  },

  {
    name: 'Steam Paradise: Hot Stone Massage Seduction',
    data: {
      shot: "Intimate full body shot (9:16), curves on massage table in steam",
      subject: {
        variant: seductressVariant,
        pose: "Lying face-up on massage table, body relaxed but curves emphasized. One leg bent, the other straight. Arms resting at sides, head turned slightly toward camera. Eyes closed in blissful relaxation. Hot stones placed along curves. Steam swirling above glistening form.",
        hair_color: "jet black",
        hair_style: "long wet hair spread across table, soaked with steam condensation and massage oils.",
        skin_finish: "Dewy & Luminous with massage oils and steam creating ultra-glossy sheen",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible"
      },
      wardrobe: "Massage minimal: only a small white towel draped strategically across hips, leaving most of form exposed and glistening. Focus on oil-slicked, steam-kissed skin and relaxed curves.",
      environment: "Private spa treatment room filled with steam, massage table with warmed surface, hot basalt stones placed decoratively, ambient warm lighting through steam fog, eucalyptus scent diffusing. Intimate pampering paradise.",
      lighting: "Paolo Roversi-inspired soft diffused light through steam creating dreamy ethereal quality. Warm candle light adding golden accents. Steam creating natural soft-focus effect.",
      camera: {
        focal_length: "50mm",
        aperture: "f/1.8",
        distance: "2 m",
        angle: "Slightly high angle looking down at massage table",
        framing: "Full body on massage table with steam and spa environment"
      },
      color_grade: "Warm & Dreamy with golden candlelight, soft whites from steam, and intimate spa atmosphere.",
      style: "Romantic Fashion meets luxury spa photography",
      quality: "Shot on Canon EOS R5 for beautiful rendering of oils, steam, and glistening skin.",
      figure_and_form: "Massage Table Curves: Relaxed supine pose emphasizes natural bombshell form. Bent leg showcases hip width and thigh curves. Small towel emphasizes wide hip span. Oil-slicked skin highlights hourglass silhouette - wide hips, narrow waist, full form. Hot stones accent curves. Steam pampering celebration.",
      skin_micro_details: "Skin covered in massage oils creating ultra-glossy finish. Steam condensation mixing with oils. Visible pores under sheen. Natural heat flush. Realistic texture beneath glistening surface. Perspiration beads at temples and décolletage.",
      fabric_physics: "Small damp towel shows realistic draping across hip curves with oil staining and steam dampness.",
      material_properties: "Oiled glistening skin with extreme specular highlights, white cotton towel, smooth hot basalt stones, warm teak massage table, and dense white steam creating luxury spa material symphony."
    }
  },

  {
    name: 'Steam Paradise: Hammam Indulgence',
    data: {
      shot: "Artistic full body shot (16:9), traditional hammam celebrating curves",
      subject: {
        variant: seductressVariant,
        pose: "Reclining on heated marble platform in hammam, body stretched luxuriously. One arm overhead, the other at side. Legs slightly apart, relaxed. Steam rising around form. Expression of pure sensual relaxation. Marble's coolness contrasting with steam's heat on glistening curves.",
        hair_color: "jet black",
        hair_style: "long wet hair fanned out on white marble, creating dark contrast, soaked and heavy.",
        skin_finish: "Dewy & Luminous with traditional hammam oils creating silk-like sheen",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "not visible - barefoot on warm marble"
      },
      wardrobe: "Traditional hammam minimal: only traditional hammam wrap (peştemal) in white cotton with decorative border, wrapped very low on hips emphasizing curves, partially unwrapped. Traditional yet sensual aesthetic.",
      environment: "Authentic Turkish hammam with white marble heated platform (göbek taşı), arched doorways, star-pattern perforations in ceiling letting in soft light beams, dense steam, traditional copper bowls and vessels. Private sensual bathing ritual paradise.",
      lighting: "Peter Lindbergh-inspired natural light beams through ceiling perforations creating dramatic shafts through dense steam. Soft diffused ambient light. Architectural lighting creating dimensional depth.",
      camera: {
        focal_length: "35mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Slightly high angle capturing full hammam setting",
        framing: "Full body on marble platform with steam and traditional architecture"
      },
      color_grade: "Warm & Ethereal with white marble tones, golden light beams, and dense white steam creating traditional spa atmosphere.",
      style: "Fine Art Sensuality meets traditional hammam documentary photography",
      quality: "Shot on Hasselblad X2D for exceptional detail capturing marble texture, steam, and architectural elements.",
      figure_and_form: "Hammam Curves: Stretched reclining pose on marble emphasizes full length of bombshell form. Low-wrapped peştemal showcases wide hips and narrow waist. Oiled skin glistening on white marble. Traditional pampering celebrating voluptuous hourglass silhouette.",
      skin_micro_details: "Skin covered in traditional olive oil soap creating silky sheen. Steam condensation adding moisture. Natural heat flush from warm marble and steam. Realistic texture with cultural bathing ritual elements.",
      fabric_physics: "Traditional cotton peştemal partially unwrapped showing realistic draping, heavy with moisture and oils.",
      material_properties: "Oiled silky skin, white heated marble with water droplets, traditional cotton wrap, copper vessels, architectural stone with steam patterns, and dense volumetric steam."
    }
  },

  {
    name: 'Steam Paradise: Eucalyptus Shower Seduction',
    data: {
      shot: "Intimate full body shot (9:16), curves under hot shower in steam",
      subject: {
        variant: seductressVariant,
        pose: "Standing under rainfall shower head, face tilted up to water flow, eyes closed. Back arched slightly, one hand in wet hair, the other trailing down side. Water cascading over glistening curves. Expression of sensual bliss under hot water. Steam rising around form.",
        hair_color: "jet black",
        hair_style: "long wet hair completely soaked, heavy with water, slicked back.",
        skin_finish: "Dewy & Luminous with hot water and steam creating extreme glistening",
        hand_and_nail_details: "Graceful & Anatomically Correct with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible - barefoot on wet tile"
      },
      wardrobe: "Shower minimal: wearing minimal sheer white mesh bikini brief becoming completely transparent when soaked. Torso bare with water cascading over curves. Focus on water-drenched bombshell form in steam.",
      environment: "Luxury spa shower with large rainfall shower head, eucalyptus branches hanging creating aromatherapy, white tile with water flowing, dense steam filling space, ambient warm lighting creating intimate atmosphere. Private hot shower paradise.",
      lighting: "Helmut Newton-inspired dramatic light through steam and water creating volumetric beams. Water droplets in air catching light. Atmospheric humid lighting emphasizing form through moisture.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2 m",
        angle: "Slightly low angle emphasizing curves under water flow",
        framing: "Full body under shower with water cascading and steam swirling"
      },
      color_grade: "Warm & Humid with golden tones, white steam, and water creating hot intimate atmosphere.",
      style: "Neo-noir Sensuality meets environmental water photography",
      quality: "Shot on Phase One XF IQ4 for extreme detail capturing water droplets, steam, and wet textures.",
      figure_and_form: "Shower Seduction Curves: Standing under water emphasizes natural bombshell form. Arched back accentuates curves. Water flows over wide hips, narrow waist, full bust. Transparent wet brief reveals complete hourglass silhouette. Hot water celebration of voluptuous form in steam.",
      skin_micro_details: "Completely water-saturated skin with rivulets flowing down curves. High specular highlights where water catches light. Natural heat flush. Steam condensation mixing with shower water. Realistic texture under cascading water.",
      fabric_physics: "Wet mesh brief becomes completely transparent and clings tightly showing complete form. Fabric weighted by water saturation.",
      material_properties: "Water-drenched glistening skin with flowing rivulets, transparent wet mesh, cascading water streams, white tile with water sheets, eucalyptus branches, and dense shower steam."
    }
  },

  {
    name: 'Steam Paradise: Sauna Bench Recline',
    data: {
      shot: "Sensual full body shot (16:9), curves on cedar sauna bench",
      subject: {
        variant: seductressVariant,
        pose: "Reclining on upper sauna bench, one leg bent up on bench, the other hanging down. Propped on one elbow, other hand touching glistening chest. Looking at camera with sultry expression. Perspiration visible on curves. Heat creating sensual glow.",
        hair_color: "jet black",
        hair_style: "long damp hair pulled over one shoulder, heavy with moisture from sauna humidity.",
        skin_finish: "Dewy & Luminous with visible perspiration creating authentic heat glow",
        hand_and_nail_details: "Impeccably Manicured with classic red polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Classic Red Polish",
        high_heels: "not visible - barefoot on hot cedar"
      },
      wardrobe: "Sauna minimal: a tiny white cotton towel barely covering essentials, wrapped minimally around hips. Most of form exposed showing perspiration-glistening bombshell curves. Traditional sauna aesthetic with maximum sensuality.",
      environment: "Private Finnish sauna with cedar wood benches and walls, sauna stones glowing with heat, temperature gauge showing high heat, bucket and ladle for water, dim warm lighting, visible heat waves. Intimate dry heat paradise.",
      lighting: "Paolo Roversi-inspired soft warm light from sauna lamp creating golden glow on perspiring skin. Heat waves visible in air. Dramatic contrast between bright highlights on wet skin and darker cedar background.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Eye-level creating intimate connection",
        framing: "Full body reclining on bench with cedar sauna context"
      },
      color_grade: "Warm & Golden with rich cedar tones and perspiration highlights creating authentic heat atmosphere.",
      style: "Romantic Fashion meets traditional sauna photography",
      quality: "Shot on Leica M11 for exceptional rendering of perspiration, heat, and natural tones.",
      figure_and_form: "Sauna Heat Curves: Reclining pose emphasizes hip curves and thigh fullness. Minimal towel showcases wide hips and narrow waist. Perspiration highlights hourglass silhouette. Heat-flushed skin celebrating bombshell proportions in dry heat environment.",
      skin_micro_details: "Visible perspiration beads covering entire form. Glistening sheen from sweat. Natural heat flush - pink tones on chest, face, thighs. Pores visible through moisture. Authentic sauna heat effect on skin creating realistic high-heat appearance.",
      fabric_physics: "Small damp towel shows minimal coverage with realistic cotton texture and perspiration staining.",
      material_properties: "Perspiration-glistening skin with visible sweat beads, white damp cotton towel, rich cedar wood grain, glowing hot sauna stones, and visible heat shimmer creating dry heat material narrative."
    }
  },

  {
    name: 'Steam Paradise: Vichy Shower Bliss',
    data: {
      shot: "Artistic full body shot (9:16), curves under multiple shower streams",
      subject: {
        variant: seductressVariant,
        pose: "Lying on specialized Vichy shower table, multiple shower heads above raining down water. Body stretched out showing full length. Arms overhead, legs slightly apart. Water cascading across every curve. Expression of pure sensory bliss.",
        hair_color: "jet black",
        hair_style: "long wet hair hanging off table edge, water flowing through creating waterfall effect.",
        skin_finish: "Dewy & Luminous with constant water flow creating dynamic glistening",
        hand_and_nail_details: "Graceful & Anatomically Correct with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible"
      },
      wardrobe: "Vichy minimal: only minimal nude-tone mesh brief for modesty, nearly invisible when wet. Body treatment focus on water-cascaded curves with professional spa aesthetic.",
      environment: "Luxury spa Vichy shower room with multiple shower heads mounted on bar above table, warm water flowing creating rain effect, tiled surfaces with drainage, ambient steam, soft lighting creating intimate treatment space. Private hydrotherapy paradise.",
      lighting: "Annie Leibovitz-inspired soft even lighting creating flattering illumination of water-covered form. Multiple light sources eliminating harsh shadows. Water droplets catching light creating sparkle effect.",
      camera: {
        focal_length: "35mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Slightly high angle capturing full Vichy table setup",
        framing: "Full body on table with multiple water streams visible"
      },
      color_grade: "Clean & Luminous with white spa tones and glistening water creating professional spa atmosphere.",
      style: "Fine Art Sensuality meets luxury spa treatment documentation",
      quality: "Shot on Hasselblad X2D for exceptional detail capturing multiple water streams and spa environment.",
      figure_and_form: "Hydrotherapy Curves: Stretched supine pose displays full length of bombshell form. Multiple water streams cascade over wide hips, narrow waist, full bust. Water flow highlights every curve. Professional spa treatment celebrating voluptuous hourglass silhouette.",
      skin_micro_details: "Skin constantly refreshed by flowing water creating dynamic glistening surface. Water sheets flowing across curves. Natural spa treatment glow. Realistic hydrated skin appearance.",
      fabric_physics: "Minimal nude mesh brief becomes invisible when saturated, creating bare aesthetic while maintaining spa professionalism.",
      material_properties: "Water-sheeted glistening skin, multiple cascading water streams, white spa tile with flowing water, professional treatment table, and atmospheric spa steam creating hydrotherapy material narrative."
    }
  },

  {
    name: 'Steam Paradise: Moroccan Bath Ritual',
    data: {
      shot: "Cultural full body shot (16:9), curves in traditional Moroccan bath",
      subject: {
        variant: seductressVariant,
        pose: "Seated on low traditional stool in hammam, body leaning back slightly, legs apart with feet flat on warm tiles. Arms resting on thighs. Covered in traditional black soap (savon noir) creating glossy appearance. Looking at camera with relaxed, confident expression. Steam swirling around soapy form.",
        hair_color: "jet black",
        hair_style: "long wet hair pulled back in low knot, some strands loose and dripping.",
        skin_finish: "Dewy & Luminous enhanced by black soap creating ultra-glossy exotic sheen",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "not visible - barefoot on warm tiles"
      },
      wardrobe: "Traditional Moroccan minimal: only traditional hammam wrap in white cotton with ethnic patterns, wrapped very low on hips. Torso covered in traditional black soap creating glossy dark appearance. Authentic cultural bathing aesthetic.",
      environment: "Traditional Moroccan hammam with colorful zellige tile work, arched doorways, brass fixtures, traditional buckets and mitts (kessa), dense steam with eucalyptus scent, warm ambient lighting. Cultural bathing paradise.",
      lighting: "Peter Lindbergh-inspired soft light through steam creating mystical atmosphere. Traditional lanterns adding warm accents. Steam and architectural elements creating dimensional lighting.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "2.5 m",
        angle: "Eye-level capturing traditional bath ritual",
        framing: "Full body seated with traditional hammam architecture and steam"
      },
      color_grade: "Warm & Exotic with colorful tile tones, golden light, and dense steam creating authentic Moroccan spa atmosphere.",
      style: "Fine Art Sensuality meets cultural bath ritual documentation",
      quality: "Shot on Phase One XF IQ4 for exceptional detail capturing tile patterns, soap texture, and steam.",
      figure_and_form: "Moroccan Ritual Curves: Seated pose with legs apart emphasizes wide hip span and thigh curves. Black soap highlights hourglass silhouette against colorful tiles. Traditional wrap emphasizes wide hips. Cultural bathing celebrating bombshell proportions with exotic aesthetic.",
      skin_micro_details: "Skin covered in traditional black soap creating ultra-glossy dark sheen. Steam condensation mixing with soap. Natural exfoliation preparation. Authentic hammam ritual texture and appearance.",
      fabric_physics: "Traditional cotton wrap shows ethnic patterns, wrapped low with realistic draping, dampened by steam and soap splashing.",
      material_properties: "Black soap-glossed skin creating exotic sheen, traditional white cotton wrap with patterns, colorful zellige tiles, brass vessels, and dense eucalyptus-scented steam creating Moroccan spa material poetry."
    }
  },

  {
    name: 'Steam Paradise: Ice Bucket Contrast',
    data: {
      shot: "Dynamic full body shot (9:16), curves experiencing temperature contrast",
      subject: {
        variant: seductressVariant,
        pose: "Standing in steam room, ice bucket beside her, holding ice cube above shoulder letting melt water drip down hot glistening skin. Back arched from sensation. One leg slightly forward. Expression of sensory intensity - eyes closed, lips parted. Contrast of ice on hot perspiring curves.",
        hair_color: "jet black",
        hair_style: "long damp hair wild from heat and humidity, tousled and voluminous.",
        skin_finish: "Dewy & Luminous with perspiration plus ice melt creating mixed water effects",
        hand_and_nail_details: "Impeccably Manicured with glossy black polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Glossy Black Polish",
        high_heels: "not visible - barefoot on wet tile"
      },
      wardrobe: "Temperature play minimal: a tiny white sports bralette and matching tiny brief, both soaked with perspiration and ice water. Minimal coverage showing contrast effects on glistening bombshell curves.",
      environment: "Modern steam room with white tile, dense steam, ice bucket with cubes, temperature control panel showing high heat, contemporary spa fixtures. Steam and ice creating sensory contrast paradise.",
      lighting: "Helmut Newton-inspired dramatic lighting through steam highlighting water trails from ice. Strong contrast between bright highlights on wet skin and steamy background. Dynamic sensory lighting.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2 m",
        angle: "Slightly low angle emphasizing arched stance",
        framing: "Full body with ice bucket visible, steam swirling creating atmospheric depth"
      },
      color_grade: "Cool & Warm Contrast with white steam, ice blue highlights, and warm perspiration glow creating temperature dynamic.",
      style: "Neo-noir Sensuality meets sensory spa experience photography",
      quality: "Shot on Sony A1 for exceptional detail capturing ice melt rivulets and steam simultaneously.",
      figure_and_form: "Temperature Contrast Curves: Arched pose from ice sensation emphasizes curves dramatically. Wet minimal wear clings to perspiring bombshell form. Ice water trails follow curves - down neck, over bust, across waist, down hips and thighs. Sensory experience celebrating voluptuous silhouette.",
      skin_micro_details: "Dual water effects: hot perspiration beads mixing with cold ice melt rivulets. Skin flushed pink from heat with white trails from ice. Goosebumps where ice touched. Realistic temperature contrast effects on skin.",
      fabric_physics: "Tiny white athletic wear soaked with both perspiration and ice melt, clinging tightly to curves showing complete transparency from saturation.",
      material_properties: "Perspiring glistening skin with ice melt trails, wet white athletic fabric, melting ice cubes, white tile with mixed water, and dense white steam creating temperature contrast material dialogue."
    }
  },

  {
    name: 'Steam Paradise: Aromatherapy Cloud',
    data: {
      shot: "Ethereal full body portrait (9:16), curves in aromatic steam cloud",
      subject: {
        variant: seductressVariant,
        pose: "Kneeling on spa floor in steam, sitting back on heels, body upright with back arched. Arms raised overhead stretching, creating elongated line emphasizing curves. Face tilted up breathing deeply, eyes closed. Surrounded by dense aromatic steam. Expression of sensory bliss.",
        hair_color: "jet black",
        hair_style: "long wet hair pulled into high messy bun with strands escaping and dripping.",
        skin_finish: "Dewy & Luminous with aromatic oils and steam creating scented glistening",
        hand_and_nail_details: "Graceful & Anatomically Correct with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible - kneeling"
      },
      wardrobe: "Aromatherapy minimal: only minimal sage green mesh bikini with botanical print, soaked with aromatic steam. Natural spa aesthetic emphasizing steam-kissed curves.",
      environment: "Luxury aromatherapy steam room with essential oil diffusers releasing lavender and eucalyptus, extremely dense aromatic steam creating cloud effect, soft purple-tinted ambient lighting, natural elements like stones and plants. Private sensory paradise.",
      lighting: "Paolo Roversi-inspired soft diffused light through dense aromatic steam creating dreamy ethereal quality. Purple and green tints from aromatherapy lighting. Mystical atmospheric illumination.",
      camera: {
        focal_length: "50mm",
        aperture: "f/1.8",
        distance: "2.5 m",
        angle: "Eye-level capturing aromatherapy immersion",
        framing: "Full body kneeling with dense aromatic steam clouds surrounding"
      },
      color_grade: "Ethereal & Soft with purple and green aromatherapy tones, dense white steam, and dreamy atmosphere.",
      style: "Fine Art Sensuality meets aromatherapy spa photography",
      quality: "Shot on Leica M11 for exceptional rendering of aromatic steam and atmospheric effects.",
      figure_and_form: "Aromatherapy Curves: Kneeling upright with arms overhead emphasizes full length of bombshell form. Arched back showcases narrow waist to wide hip ratio. Steam-dampened minimal wear reveals hourglass silhouette. Aromatic mist celebrating sensory curves.",
      skin_micro_details: "Skin covered in aromatic essential oils and steam condensation creating scented glistening sheen. Natural relaxation flush. Pores visible through moisture. Realistic aromatherapy effect on skin.",
      fabric_physics: "Sage green mesh bikini soaked with aromatic steam showing realistic clinging and transparency, botanical prints visible through moisture.",
      material_properties: "Aromatic oil-glossed skin, steam-saturated sage mesh with botanical patterns, extremely dense aromatic steam clouds, purple-tinted atmospheric lighting, and natural spa elements creating sensory material symphony."
    }
  },

  {
    name: 'Steam Paradise: Private Plunge Pool Transition',
    data: {
      shot: "Dynamic full body shot (9:16), curves transitioning from steam to cold water",
      subject: {
        variant: seductressVariant,
        pose: "Descending into cold plunge pool from steam room, water at thigh level. One foot on step, one in water. Hands gripping pool edge. Face showing intense sensation from temperature shock. Back arched from cold impact. Steam rising from hot skin meeting cold water. Dynamic sensory moment.",
        hair_color: "jet black",
        hair_style: "long damp hair from steam, wild and voluminous from humidity and heat.",
        skin_finish: "Dewy & Luminous with perspiration plus cold water creating contrast effect",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish gripping pool edge.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "not visible - barefoot on pool step"
      },
      wardrobe: "Contrast therapy minimal: a minimal black athletic bikini, top half steaming with perspiration, bottom half wet from cold pool. Temperature transition creating visual contrast on curves.",
      environment: "Luxury spa with cold plunge pool adjacent to steam room, steam billowing out meeting cold pool area, mosaic tile work, soft lighting creating temperature zones, ice bucket beside pool. Temperature contrast paradise.",
      lighting: "Helmut Newton-inspired dramatic lighting capturing steam meeting cold, creating visible temperature transition. Hard light highlighting water line and perspiration versus cold water on curves.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "2.5 m",
        angle: "Eye-level capturing temperature transition moment",
        framing: "Full body half in pool with steam billowing creating dramatic atmosphere"
      },
      color_grade: "Warm & Cool Contrast with warm steam tones transitioning to cool blue water tones, dynamic temperature visual.",
      style: "Neo-noir Sensuality meets spa contrast therapy documentation",
      quality: "Shot on Phase One XF IQ4 for exceptional detail capturing steam, water, and temperature transition effects.",
      figure_and_form: "Temperature Transition Curves: Descending pose emphasizes thigh and hip curves. Water line at thighs showcases wide hip span. Arched back from cold shock accentuates hourglass silhouette. Upper body glistening with perspiration, lower body wet from cold pool. Sensory contrast celebrating bombshell proportions.",
      skin_micro_details: "Dual temperature effects: upper body pink-flushed with perspiration from heat, lower body showing cold water rivulets and potential goosebumps. Visible steam rising off hot perspiring skin meeting cold water. Realistic temperature shock appearance.",
      fabric_physics: "Black athletic bikini showing contrast: top soaked with perspiration, bottom wet from cold pool water, creating visual temperature line.",
      material_properties: "Perspiration-glistening hot skin transitioning to cold-water-kissed skin, black athletic fabric with dual saturation, mosaic tile, cold pool water, billowing warm steam, and visible temperature contrast creating sensory transition material narrative."
    }
  }
];
