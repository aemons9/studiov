import type { ArtisticConcept } from './concepts';
import { indianModelVariants } from './subjects';

const seductressVariant = indianModelVariants.find(v => v.name.includes("Glamour Seductress"))!.value;

const defaultSkinMicroDetails = "Authentic, high-resolution skin texture with visible pores, subtle freckles, and natural imperfections. A hint of subsurface scattering on the cheekbones where the light hits. No airbrushing.";
const defaultFabricPhysics = "The fabric drapes naturally, with realistic creases and folds that follow the subject's form. The weave of the fabric is visible upon close inspection.";
const defaultMaterialProperties = "The material has a soft, matte texture that absorbs light, contrasting with the subtle specular highlights on the subject's skin.";

export const seductressNaturalParadise: ArtisticConcept[] = [
  {
    name: 'Natural Paradise: Misty Forest Curves',
    data: {
      shot: "Ethereal full body portrait (9:16), celebrating bombshell curves in misty forest",
      subject: {
        variant: seductressVariant,
        pose: "Standing amid misty forest, leaning back against ancient curved tree trunk, back arched to emphasize hourglass silhouette. One leg bent with foot against tree, the other extended creating elegant line. Arms raised, hands touching rough bark above head. Looking toward camera with natural, confident expression. Pose mirrors the organic curves of the forest.",
        hair_color: "jet black",
        hair_style: "long, loose waves flowing naturally with moisture from mist, partially wild and untamed.",
        skin_finish: "Dewy & Luminous enhanced by forest mist creating natural glistening",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible - barefoot connecting with earth"
      },
      wardrobe: "Earth goddess minimal: a delicate emerald green lace bralette with nature-inspired patterns and matching high-waisted lace brief. A sheer flowing sage green silk robe worn open, catching mist. Emphasis on natural bombshell curves - wide hips, narrow waist, full form celebrated.",
      environment: "Dense misty forest in early evening, ancient gnarled trees with curved trunks echoing her curves, soft fog rolling through at ground level, dappled golden-hour light filtering through canopy, moss-covered rocks and forest floor. Private, ethereal natural sanctuary.",
      lighting: "Peter Lindbergh-inspired soft natural evening light diffused through mist and foliage, creating dreamy wrap-around illumination. Golden hour warmth mixing with cool forest shadows. Mist acts as natural diffuser creating ethereal glow.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "3.5 m",
        angle: "Eye-level capturing intimate connection with nature",
        framing: "Full body with ancient tree and misty forest background creating natural frame"
      },
      color_grade: "Warm & Ethereal with golden highlights, soft greens, and dreamy mist creating magical forest atmosphere.",
      style: "Fine Art Sensuality meets natural environmental portraiture",
      quality: "Shot on Leica M11 for exceptional color rendering of natural tones and misty atmosphere.",
      figure_and_form: "Bombshell Natural Curves: Wide hips, narrow waist, full hourglass silhouette emphasized by pose against curved tree. Body's organic curves mirror the natural curved features of ancient forest. Celebration of voluptuous feminine form in nature.",
      skin_micro_details: "Natural skin with forest mist creating micro-droplets, enhanced dewy appearance. Skin shows realistic texture with soft subsurface scattering in filtered forest light.",
      fabric_physics: "Sheer silk robe flows naturally, caught by forest air currents and moisture. Lace shows delicate patterns mimicking forest flora.",
      material_properties: "Delicate lace with nature patterns, flowing translucent silk catching mist, rough tree bark texture, and luminous mist-kissed skin creating natural material dialogue."
    }
  },

  {
    name: 'Natural Paradise: Stream Goddess',
    data: {
      shot: "Cinematic full body shot (16:9), celebrating curves beside flowing stream",
      subject: {
        variant: seductressVariant,
        pose: "Kneeling gracefully on smooth rocks at stream's edge, sitting back on heels, torso arched back creating dramatic curve emphasis. One hand trailing in flowing water, the other touching wet hair. Head tilted back toward sky, eyes closed in blissful connection with nature. Voluptuous silhouette against flowing water.",
        hair_color: "jet black",
        hair_style: "long wet hair slicked back from face, water droplets catching light.",
        skin_finish: "Dewy & Luminous with water mist creating natural sheen",
        hand_and_nail_details: "Graceful & Anatomically Correct with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural nude polish",
        high_heels: "not visible - barefoot on smooth river rocks"
      },
      wardrobe: "Water nymph minimal: a sheer ivory mesh bodysuit with nature-inspired cutouts emphasizing hip curves and narrow waist. The wet fabric clings to bombshell curves creating second-skin effect. Natural, goddess-like aesthetic.",
      environment: "Pristine forest stream with crystal clear water flowing over smooth curved rocks, misty atmosphere, weeping willow branches creating natural curtain, evening golden light reflecting off water surface. The stream's flowing curves mirror her body's curves. Private paradise.",
      lighting: "Paolo Roversi-inspired soft evening light filtered through mist and foliage, with water reflections creating dancing light patterns on skin. Golden hour warmth with cool blue undertones from water.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Slightly low angle emphasizing curves against flowing stream",
        framing: "Full body with flowing stream and misty forest creating natural environment"
      },
      color_grade: "Warm & Luminous with golden tones and soft blue-green water reflections, dreamy ethereal quality.",
      style: "Romantic Fashion meets natural water photography",
      quality: "Shot on Hasselblad X2D for exceptional detail capturing water droplets, wet textures, and natural atmosphere.",
      figure_and_form: "Water Goddess Curves: Wet mesh clings to dramatic hourglass figure - wide hips, cinched waist, full form. Kneeling pose emphasizes hip width and thigh curves. Natural bombshell proportions celebrated in elemental setting.",
      skin_micro_details: "Water-kissed skin with visible droplets creating micro-lensing effects. Natural flush from cool water. Realistic texture enhanced by moisture and golden light.",
      fabric_physics: "Wet mesh clings realistically to curves showing transparent second-skin effect. Fabric tension across hips and bust shows natural body mapping.",
      material_properties: "Wet translucent mesh with high transparency, smooth river-polished rocks, flowing water reflections, and glistening water-kissed skin."
    }
  },

  {
    name: 'Natural Paradise: Cabin Porch Seduction',
    data: {
      shot: "Intimate full body shot (9:16), private cabin retreat celebrating curves",
      subject: {
        variant: seductressVariant,
        pose: "Reclining on rustic wooden porch daybed, propped on one elbow, body creating luxurious S-curve. Bottom leg extended, top leg bent showcasing hip curves. Free hand touching tousled hair. Looking at camera with intimate, inviting expression. Bombshell curves emphasized by relaxed recline.",
        hair_color: "jet black",
        hair_style: "long, naturally tousled waves with forest humidity creating volume and texture.",
        skin_finish: "Natural Glow with soft sheen from evening humidity",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible - barefoot"
      },
      wardrobe: "Cabin minimal luxury: a delicate black lace bralette emphasizing bust, paired with high-waisted black lace-trimmed silk shorts sitting low on wide hips. A oversized cream linen shirt worn completely open and draping off shoulders. Emphasis on natural hourglass curves with minimal coverage.",
      environment: "Private rustic cabin porch overlooking misty forest vista, worn wooden planks and daybed with soft cushions, warm lantern light mixing with cool forest mist, evening crickets and forest sounds. Intimate erotic paradise retreat with ancient forest backdrop.",
      lighting: "Annie Leibovitz-inspired warm golden lantern light from cabin mixing with soft blue evening forest light, creating dimensional romantic glow. Mist diffusing light naturally.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Slightly high angle, intimate viewer perspective",
        framing: "Full body reclining with cabin porch and misty forest visible"
      },
      color_grade: "Warm & Romantic with golden lantern glow and cool forest undertones, intimate private atmosphere.",
      style: "Private & Personal meets environmental boudoir photography",
      quality: "Shot on Canon EOS R5 with RF 85mm f/1.2 for beautiful bokeh and natural skin rendering.",
      figure_and_form: "Cabin Retreat Curves: Reclining pose showcases dramatic hip-to-waist ratio. Open shirt frames voluptuous figure without concealing. High-waisted shorts emphasize hip curves and thigh fullness. Natural bombshell proportions in relaxed intimate moment.",
      skin_micro_details: "Natural skin with forest humidity creating soft dewy glow. Realistic texture with warm lantern light creating beautiful subsurface scattering.",
      fabric_physics: "Open linen shirt drapes naturally off shoulders with authentic wrinkles. Lace bralette shows realistic structure. Silk shorts display natural creasing.",
      material_properties: "Soft linen with natural texture, delicate lace patterns, smooth silk, weathered wooden planks, and glowing warm lantern light."
    }
  },

  {
    name: 'Natural Paradise: Waterfall Mist Goddess',
    data: {
      shot: "Ethereal full body portrait (9:16), bombshell form in waterfall mist",
      subject: {
        variant: seductressVariant,
        pose: "Standing on moss-covered rocks beneath waterfall spray, arms raised overhead in goddess pose, back arched dramatically to emphasize curves. Face tilted toward cascading water, eyes closed, water mist catching on skin. Powerful yet sensual stance celebrating voluptuous form against nature's power.",
        hair_color: "jet black",
        hair_style: "long wet hair flowing down back, completely soaked and heavy with water.",
        skin_finish: "Dewy & Luminous enhanced by waterfall mist creating dramatic glistening",
        hand_and_nail_details: "Graceful & Anatomically Correct.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible - barefoot on mossy rocks"
      },
      wardrobe: "Waterfall goddess minimal: only a minimal white mesh brief becoming translucent when wet, and delicate body chains with natural stone beads draped across shoulders and around waist, emphasizing hip curves. Focus entirely on water-adorned bombshell form.",
      environment: "Hidden forest waterfall with cascading water creating mist cloud, smooth moss-covered rocks, dense forest surrounding creating natural amphitheater, evening light filtering through mist creating rainbow effects. Private erotic paradise of water and stone.",
      lighting: "Helmut Newton-inspired dramatic natural light through waterfall mist creating volumetric atmospheric quality. Backlight from low sun creating rim lighting through water spray. Dynamic interplay of light, water, and skin.",
      camera: {
        focal_length: "50mm",
        aperture: "f/4.0",
        distance: "4 m",
        angle: "Slightly low angle emphasizing goddess stature and curves",
        framing: "Full body with waterfall and mist creating dramatic natural backdrop"
      },
      color_grade: "Cool & Ethereal with blue-green water tones and golden rim lighting, magical atmosphere.",
      style: "Fine Art Sensuality meets environmental water photography",
      quality: "Shot on Phase One XF IQ4 for extreme detail capturing every water droplet, mist particle, and wet texture.",
      figure_and_form: "Waterfall Goddess Curves: Wet minimal coverage reveals complete voluptuous form - wide hips, narrow waist, full bust. Arched pose emphasizes hourglass silhouette against waterfall's power. Body chains accent hip width. Celebration of bombshell proportions in elemental setting.",
      skin_micro_details: "Completely water-soaked skin with countless droplets creating textured surface. High specular highlights where water catches light. Natural flush from cool water and physical presence.",
      fabric_physics: "Wet mesh brief becomes nearly transparent, clinging tightly. Body chains show realistic weight and draping across wet curves.",
      material_properties: "Translucent wet mesh, natural stone beads, cascading water creating dynamic background, moss-covered rocks, and glistening water-drenched skin."
    }
  },

  {
    name: 'Natural Paradise: Ancient Tree Embrace',
    data: {
      shot: "Artistic full body shot (9:16), curves echoing ancient tree's curves",
      subject: {
        variant: seductressVariant,
        pose: "Standing within the curved hollow of a massive ancient tree, back pressed against inner bark, arms stretched overhead touching the curved wood above. One leg bent, foot against tree, the other extended. Body's hourglass curves perfectly mirroring the tree's natural curves. Intimate expression of unity with nature.",
        hair_color: "jet black",
        hair_style: "long, loose waves with small twigs and leaves naturally caught, wild forest beauty.",
        skin_finish: "Natural Glow with forest mist creating soft luminosity",
        hand_and_nail_details: "Natural & Unadorned.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible - barefoot on moss and earth"
      },
      wardrobe: "Tree spirit minimal: a hand-woven brown and green vine-pattern lace bodysuit with strategic cutouts emphasizing hip curves and waist. The organic pattern mimics tree bark and vines. A flowing forest-green silk wrap worn loosely around hips. Natural, primal aesthetic.",
      environment: "Inside the curved hollow of a massive 500-year-old tree trunk, the wood's curves creating natural frame echoing her body curves. Misty evening forest visible through opening. Moss, ferns, and soft forest floor. Ancient, sacred, private space.",
      lighting: "Peter Lindbergh-inspired soft natural light filtering into tree hollow creating gentle directional lighting. Mist and forest creating diffused atmospheric glow. Interplay of light and shadow within organic curved space.",
      camera: {
        focal_length: "35mm",
        aperture: "f/2.8",
        distance: "3 m",
        angle: "Eye-level capturing intimate tree embrace",
        framing: "Full body within tree hollow, curved wood framing her curved form"
      },
      color_grade: "Earthy & Natural with warm browns, soft greens, and golden forest light, timeless organic quality.",
      style: "Fine Art Sensuality meets environmental art photography",
      quality: "Shot on Hasselblad 503CW on Kodak Portra 400 for natural organic color and soft grain.",
      figure_and_form: "Ancient Curves Mirrored: The tree hollow's organic curves perfectly frame and echo her bombshell hourglass form. Wide hips mirror the tree's wide base, narrow waist matches the trunk's taper. Visual poetry of natural curved forms. Voluptuous figure celebrated as natural element.",
      skin_micro_details: "Natural skin with forest humidity and soft light creating gentle glow. Realistic texture harmonizing with organic tree bark texture.",
      fabric_physics: "Vine-pattern lace shows organic texture mimicking nature. Silk wrap drapes naturally around wide hips with flowing movement.",
      material_properties: "Organic lace with nature patterns, flowing silk, ancient weathered tree bark texture, soft moss, and luminous forest-kissed skin."
    }
  },

  {
    name: 'Natural Paradise: Mossy Rock Recline',
    data: {
      shot: "Sensual full body shot (16:9), bombshell curves on natural stone",
      subject: {
        variant: seductressVariant,
        pose: "Reclining luxuriously on large moss-covered boulder, body draped along the stone's natural curves. Propped on one elbow, legs creating elegant scissor position showcasing hip and thigh curves. Head tilted back, wet hair cascading over stone edge. Looking at camera with sultry, natural confidence.",
        hair_color: "jet black",
        hair_style: "long wet hair from stream, dripping water, natural and wild.",
        skin_finish: "Dewy & Luminous with water droplets and forest mist",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible - barefoot"
      },
      wardrobe: "Nature minimal: a sheer champagne-colored mesh bodysuit with vine and leaf embroidery patterns, the wet fabric clinging to every curve. The neutral tone blends with natural environment while emphasizing form. High-cut legs emphasizing hip width.",
      environment: "Large smooth boulder covered in lush green moss beside forest stream, misty evening atmosphere, ancient trees surrounding, sound of flowing water, soft ferns and forest flora. The rock's smooth curves mirror her body's curves. Private sensual paradise.",
      lighting: "Paolo Roversi-inspired soft diffused forest light creating dreamy quality, with water reflections adding dancing highlights on skin. Golden hour warmth mixing with cool green forest tones.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Slightly high angle looking down at reclining figure",
        framing: "Full body on mossy boulder with stream and forest context"
      },
      color_grade: "Warm & Natural with golden highlights and cool green forest tones, organic earthy palette.",
      style: "Romantic Fashion meets natural environmental boudoir",
      quality: "Shot on Kodak Portra 800 for warm color palette and beautiful grain lending organic quality.",
      figure_and_form: "Stone Recline Curves: Reclining pose on stone emphasizes hip curves and thigh fullness. Wet mesh clings to bombshell hourglass figure - wide hips, narrow waist, full form. Body drapes along rock's curves creating visual echo. Natural voluptuous celebration.",
      skin_micro_details: "Water-kissed skin with droplets creating texture. Natural flush from cool stone and water. Realistic texture with soft forest light creating subsurface scattering.",
      fabric_physics: "Wet mesh clings tightly showing complete form transparency. Fabric creates second-skin effect with realistic tension across curves.",
      material_properties: "Translucent wet mesh with vine embroidery, soft moss texture, smooth ancient stone, and glistening water-dropped skin."
    }
  },

  {
    name: 'Natural Paradise: Cabin Interior Firelight',
    data: {
      shot: "Intimate full body shot (9:16), cabin interior celebrating curves in firelight",
      subject: {
        variant: seductressVariant,
        pose: "Reclining on rustic fur rug before stone fireplace, body creating luxurious curves. Propped on side with one elbow, top leg bent, bottom leg extended. Free hand touching hair. Looking at camera with intimate, warm expression. Firelight dancing across voluptuous form.",
        hair_color: "jet black",
        hair_style: "long, loose waves with natural volume from forest humidity, tousled and romantic.",
        skin_finish: "Dewy & Luminous with warm firelight creating golden glow",
        hand_and_nail_details: "Impeccably Manicured with deep burgundy polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Deep Burgundy Polish",
        high_heels: "not visible - barefoot on fur"
      },
      wardrobe: "Cabin luxury minimal: a burgundy silk and lace teddy with deep V emphasizing bust, high-cut legs emphasizing wide hips. An oversized cream cable-knit sweater worn open and off shoulders. Cozy yet sensual mountain retreat aesthetic.",
      environment: "Rustic cabin interior with stone fireplace, crackling fire, fur rugs, wooden beams, windows showing misty forest night outside. Warm intimate space with whiskey glasses and soft blankets. Private erotic mountain paradise.",
      lighting: "Helmut Newton-inspired dramatic firelight creating warm dancing shadows and highlights on curves. Soft lamp adding fill light. Interplay of warm golden firelight and cool blue window light from misty night.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Slightly high angle, intimate perspective",
        framing: "Full body on fur rug with fireplace and cabin interior context"
      },
      color_grade: "Warm & Romantic with rich burgundy, golden firelight, and soft shadows creating intimate atmosphere.",
      style: "Neo-noir Sensuality meets cabin boudoir photography",
      quality: "Shot on Leica M11 for exceptional color rendering of firelight and natural tones.",
      figure_and_form: "Firelight Curves: Reclining pose showcases dramatic hourglass silhouette. High-cut teddy emphasizes wide hips and thigh curves. Open sweater frames voluptuous figure. Firelight and shadow sculpt bombshell proportions. Cozy intimate celebration of curves.",
      skin_micro_details: "Warm firelight creating golden subsurface scattering on skin. Natural texture with dynamic lighting showing dimensional form.",
      fabric_physics: "Silk teddy shows realistic draping and tension across curves. Cable-knit sweater displays authentic texture and weight. Soft fur rug creates tactile environment.",
      material_properties: "Smooth burgundy silk, delicate lace, chunky cable-knit wool, soft fur texture, rough stone fireplace, and golden firelight glow."
    }
  },

  {
    name: 'Natural Paradise: Rain Forest Goddess',
    data: {
      shot: "Ethereal full body portrait (9:16), celebrating curves in forest rain",
      subject: {
        variant: seductressVariant,
        pose: "Standing in forest clearing during soft rain, face tilted up to sky, eyes closed, arms slightly out from body accepting rain. Natural stance with weight shifted creating hip curve emphasis. Rain cascading over form. Expression of liberation and natural sensuality.",
        hair_color: "jet black",
        hair_style: "long wet hair slicked back and flowing from rain, completely soaked.",
        skin_finish: "Dewy & Luminous enhanced by rain creating dramatic glistening",
        hand_and_nail_details: "Natural & Unadorned.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible - barefoot in soft moss and earth"
      },
      wardrobe: "Rain goddess minimal: a sheer white mesh crop top and matching high-waisted brief, both becoming nearly transparent when rain-soaked. The white creates stark contrast against olive skin. Minimal coverage showcasing rain-drenched bombshell curves.",
      environment: "Misty forest clearing during gentle rain, ancient trees surrounding, soft moss covering ground, rain creating atmospheric mist, evening light creating ethereal glow. Private rain-soaked paradise.",
      lighting: "Peter Lindbergh-inspired soft natural overcast light diffused through rain and mist creating even ethereal illumination. Rain droplets catching light creating sparkle effect. Cool atmospheric lighting.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.8",
        distance: "3.5 m",
        angle: "Eye-level capturing rain goddess presence",
        framing: "Full body with rain visible as streaks and droplets, misty forest background"
      },
      color_grade: "Cool & Ethereal with blue-grey rain tones and soft green forest colors, magical atmosphere.",
      style: "Fine Art Sensuality meets atmospheric rain photography",
      quality: "Shot on Hasselblad X2D for exceptional detail capturing rain droplets and atmospheric mood.",
      figure_and_form: "Rain Goddess Curves: Wet transparent mesh reveals complete bombshell form - wide hips, narrow waist, full figure. Rain creates second-skin effect emphasizing every curve. Natural stance showcases hip width and thigh curves. Elemental celebration of voluptuous form in rain.",
      skin_micro_details: "Rain-soaked skin covered in countless droplets creating textured glistening surface. Natural flush from cool rain. Realistic texture with water creating specular highlights.",
      fabric_physics: "Rain-soaked white mesh becomes completely transparent, clinging tightly to form. Fabric shows realistic saturation and weight from water.",
      material_properties: "Translucent wet white mesh, countless rain droplets on skin, atmospheric mist, soft moss ground, and luminous rain-drenched atmosphere."
    }
  },

  {
    name: 'Natural Paradise: Fallen Log Woodland Nymph',
    data: {
      shot: "Artistic full body shot (9:16), nymph-like presence on fallen log",
      subject: {
        variant: seductressVariant,
        pose: "Seated straddling large fallen moss-covered log, one leg on each side, sitting upright with back arched, hands behind head lifting hair. Confident, primal expression. The straddling pose emphasizes wide hip span and thigh curves. Natural, unguarded woodland goddess.",
        hair_color: "jet black",
        hair_style: "long wild waves with forest flora naturally woven in, unstructured nature beauty.",
        skin_finish: "Natural Glow with forest mist creating soft sheen",
        hand_and_nail_details: "Natural & Unadorned with earth-tone nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Earth-tone nude polish",
        high_heels: "not visible - barefoot on moss"
      },
      wardrobe: "Woodland nymph minimal: a hand-crafted forest-green vine and leaf lace bodysuit with strategic cutouts emphasizing curves. The organic design mimics forest flora. High-cut legs emphasizing hip width. Natural primal aesthetic celebrating bombshell form.",
      environment: "Large fallen ancient tree trunk covered in lush moss and ferns, misty forest floor, shafts of golden evening light filtering through canopy, mushrooms and forest flowers. The log's thickness mirrors her hip width. Private primal paradise.",
      lighting: "Annie Leibovitz-inspired natural forest light creating dappled patterns through foliage, with soft mist diffusing light naturally. Golden hour creating warm accent highlights.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "3 m",
        angle: "Eye-level capturing primal goddess energy",
        framing: "Full body seated on log with misty forest creating natural environment"
      },
      color_grade: "Warm & Natural with golden highlights and rich forest greens, organic earthy palette.",
      style: "Fine Art Sensuality meets primal nature photography",
      quality: "Shot on Canon EOS R5 for natural color science and beautiful forest tone rendering.",
      figure_and_form: "Woodland Nymph Curves: Straddling pose emphasizes extreme hip width and thigh curves. Upright posture with arched back showcases hourglass silhouette. Vine bodysuit's cutouts frame and emphasize voluptuous proportions. Primal celebration of bombshell form in nature.",
      skin_micro_details: "Natural skin with forest elements - moss dust, moisture from mist. Realistic texture harmonizing with organic environment.",
      fabric_physics: "Hand-crafted vine lace shows organic texture with realistic draping. Material mimics natural forest elements.",
      material_properties: "Organic vine-pattern lace, soft moss texture, weathered wood bark, natural ferns and flora, and luminous forest-filtered light on skin."
    }
  },

  {
    name: 'Natural Paradise: Stream Crossing Seduction',
    data: {
      shot: "Dynamic full body shot (16:9), curves emphasized crossing stream",
      subject: {
        variant: seductressVariant,
        pose: "Mid-movement crossing stream on stepping stones, one leg extended to next stone, the other leg bent on current stone creating dynamic diagonal line. Arms out for balance, body twisted creating S-curve emphasizing waist and hips. Looking at camera with playful, seductive expression. Movement frozen showcasing curves.",
        hair_color: "jet black",
        hair_style: "long flowing hair caught mid-movement, water droplets flying from wet ends.",
        skin_finish: "Dewy & Luminous with water spray and mist creating sparkle",
        hand_and_nail_details: "Graceful & Anatomically Correct with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible - barefoot on wet stones"
      },
      wardrobe: "Stream crossing minimal: a sporty emerald green mesh sports bralette and matching high-waisted mesh brief with strategic opacity variations emphasizing curves. Wet from water spray. Athletic yet sensual aesthetic celebrating natural movement.",
      environment: "Forest stream with smooth stepping stones, flowing water creating white water around rocks, misty atmosphere, evening golden light reflecting off water, lush forest banks. The flowing water's curves echo her body's curves. Dynamic natural paradise.",
      lighting: "Helmut Newton-inspired golden hour side light creating rim highlights on form and water spray. Dynamic lighting capturing movement and water droplets in air.",
      camera: {
        focal_length: "35mm",
        aperture: "f/4.0",
        distance: "3 m",
        angle: "Eye-level capturing dynamic movement across stream",
        framing: "Full body mid-movement with flowing stream and forest context"
      },
      color_grade: "Vibrant & Natural with golden highlights and cool blue-green water tones, dynamic energetic atmosphere.",
      style: "Fine Art Sensuality meets action nature photography",
      quality: "Shot on Sony A1 with high shutter speed freezing movement while maintaining exceptional detail.",
      figure_and_form: "Dynamic Stream Curves: Movement pose emphasizes hip rotation and thigh curves. Twisted torso showcases narrow waist to wide hip ratio. Athletic mesh reveals bombshell hourglass form - wide hips, full thighs, narrow waist. Celebration of curves in natural athletic movement.",
      skin_micro_details: "Water spray creating droplet patterns on skin. Natural athletic flush. Realistic texture with dynamic lighting showing dimensional form.",
      fabric_physics: "Wet athletic mesh clings to form showing realistic tension and transparency. Movement creates dynamic fabric behavior.",
      material_properties: "Wet emerald mesh with athletic texture, smooth water-polished stones, flowing water creating white rapids, water spray in air, and glistening athletic skin."
    }
  },

  {
    name: 'Natural Paradise: Cabin Window Morning Light',
    data: {
      shot: "Intimate full body shot (9:16), morning light celebrating curves in cabin window",
      subject: {
        variant: seductressVariant,
        pose: "Standing in cabin window frame looking out at misty forest, morning light streaming in. Side profile to camera, one hand touching window frame above head, creating elegant vertical line. Other hand on hip accentuating curve. Natural morning contemplation pose. Silhouette and form highlighted by backlight.",
        hair_color: "jet black",
        hair_style: "long, naturally tousled morning hair with volume, authentic morning beauty.",
        skin_finish: "Natural Glow with morning light creating golden rim lighting",
        hand_and_nail_details: "Natural & Unadorned with soft nude polish.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Soft nude polish",
        high_heels: "not visible - barefoot on wooden floor"
      },
      wardrobe: "Morning minimal: a delicate sage green silk camisole with lace trim sitting on hips, and matching lace-trimmed tap shorts. The soft color harmonizes with forest view. Cozy yet sensual morning aesthetic emphasizing natural curves.",
      environment: "Rustic cabin interior with large window framing misty morning forest view, morning light streaming through creating golden glow, wooden beams and floor, rumpled bed visible in background. Intimate private morning moment overlooking nature paradise.",
      lighting: "Peter Lindbergh-inspired natural morning window light creating luminous backlight with golden rim lighting around form. Soft interior light providing gentle fill. Perfect morning glow.",
      camera: {
        focal_length: "50mm",
        aperture: "f/2.0",
        distance: "2.5 m",
        angle: "Eye-level capturing intimate morning moment",
        framing: "Full body in window frame with misty forest vista and cabin interior"
      },
      color_grade: "Warm & Luminous with golden morning tones and soft greens, peaceful intimate atmosphere.",
      style: "Private & Personal meets natural light documentary photography",
      quality: "Shot on Leica M11 for exceptional natural morning light rendering and authentic color.",
      figure_and_form: "Morning Light Curves: Backlight creates luminous silhouette revealing dramatic hourglass form. Silk camisole and shorts emphasize wide hips and narrow waist. Side profile showcases hip curve and thigh fullness. Intimate morning celebration of natural bombshell proportions.",
      skin_micro_details: "Natural morning skin with golden backlight creating subsurface scattering. Authentic texture without makeup, real morning beauty.",
      fabric_physics: "Silk camisole drapes softly with natural wrinkles. Lace-trimmed shorts show realistic fit on hip curves.",
      material_properties: "Smooth sage silk with delicate lace, weathered wooden cabin frame, morning-lit window glass, and luminous golden-rimmed skin."
    }
  },

  {
    name: 'Natural Paradise: Moonlit Forest Pool',
    data: {
      shot: "Ethereal full body portrait (9:16), curves in moonlit forest pool",
      subject: {
        variant: seductressVariant,
        pose: "Standing waist-deep in forest pool, arms raised overhead in graceful gesture, back arched, water at hip level. Moonlight illuminating form. Eyes closed in serene connection with night nature. Goddess-like presence celebrating curves in water.",
        hair_color: "jet black",
        hair_style: "long wet hair slicked back from water, droplets catching moonlight.",
        skin_finish: "Dewy & Luminous with water and moonlight creating ethereal glow",
        hand_and_nail_details: "Graceful & Anatomically Correct.",
        tattoos: "none",
        piercings: "none",
        body_art: "none",
        nail_art: "Natural manicure",
        high_heels: "not visible - underwater"
      },
      wardrobe: "Moonlight goddess minimal: only a minimal sheer silver mesh brief underwater, becoming invisible in dark water. Torso bare reflecting moonlight. Focus entirely on moonlit water-adorned curves and ethereal atmosphere.",
      environment: "Hidden forest pool with mirror-calm water reflecting full moon, ancient trees silhouetted against night sky, subtle mist over water surface, moonbeams creating silver light paths on water. Private nocturnal paradise.",
      lighting: "Paolo Roversi-inspired soft moonlight creating ethereal silvery illumination with high contrast against dark forest. Moonlight reflecting off water creating fill light from below. Magical nocturnal atmosphere.",
      camera: {
        focal_length: "85mm f/1.4 Portrait Lens",
        aperture: "f/2.0",
        distance: "4 m",
        angle: "Eye-level capturing moon goddess presence",
        framing: "Full body half-submerged with moonlit pool and forest creating mystical environment"
      },
      color_grade: "Cool & Ethereal with silvery moonlight, deep blue-black shadows, and luminous highlights creating nocturnal magic.",
      style: "Fine Art Sensuality meets nocturnal nature photography",
      quality: "Shot on Phase One XF IQ4 with extended exposure for exceptional low-light detail and moonlight rendering.",
      figure_and_form: "Moonlit Water Curves: Water line at hips emphasizes wide hip span and narrow waist. Raised arms showcase full bust and torso curves. Moonlight highlights create dimensional form against dark water. Ethereal celebration of bombshell silhouette in nocturnal element.",
      skin_micro_details: "Moonlit wet skin with silver highlights creating sculptural quality. Water droplets catching moonlight like diamonds. Cool blue undertones in shadows.",
      fabric_physics: "Minimal underwater fabric invisible in dark water, allowing pure form focus.",
      material_properties: "Moonlit wet skin with silvery highlights, mirror-calm dark water, atmospheric mist, and ethereal silver moonbeams creating nocturnal material poetry."
    }
  }
];
