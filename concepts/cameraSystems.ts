import type { PromptData } from '../types';

type CameraSystemSettings = Partial<Pick<PromptData, 'lighting' | 'color_grade' | 'style' | 'quality' | 'shot'>>;

interface CameraSystem {
    name: string;
    settings: CameraSystemSettings;
}

export const cameraSystems: CameraSystem[] = [
    {
        name: 'Helmut Newton (Neo-Noir Power)',
        settings: {
            style: 'Helmut Newton Inspired: A bold, cinematic, and glamorous style, often featuring powerful female subjects in luxurious, stark settings. High-contrast, neo-noir, and powerfully sensual.',
            lighting: 'Hard, directional studio lighting, often from a high side angle, creating dramatic, sharp shadows and brilliant highlights that sculpt form and texture. Resembles cinematic or on-location flash.',
            color_grade: 'Severe Monochromatic B&W: Deep, crushed blacks, brilliant, clean whites, and neutral skin tones. A clean, severe, high-fashion magazine aesthetic.',
            quality: 'RAW Cinematic (Helmut Newton): A glamorous, bold, and realistic feel, inspired by his cinematic and provocative style. 8k, natural textures, no artificial plastic look, high-end cinematic quality.',
            shot: 'Full body or three-quarters shot, emphasizing long lines and a commanding pose.'
        }
    },
    {
        name: 'Paolo Roversi (Ethereal Dreams)',
        settings: {
            style: 'Ethereal, painterly, and dreamlike. A profound focus on emotional depth and a soft, almost spiritual quality. Focus is often slightly soft, bleeding light.',
            lighting: 'Soft, single-source directional window light that wraps around the subject\'s features, creating very soft shadows. Often uses long exposures to capture a sense of movement and blur.',
            color_grade: 'Painterly Desaturated (Timeless): Warm, rich, painterly tones. Deep browns, warm skin highlights, and velvety blacks. A desaturated, timeless, and slightly faded feel, like an old Polaroid.',
            quality: 'Shot on a large-format film camera (like a Deardff 8x10) with a vintage lens. Beautiful, soft focus and a prominent, artistic film grain.',
            shot: 'Close-up or medium portrait, capturing emotion with profound depth.'
        }
    },
    {
        name: 'Annie Leibovitz (Cinematic Narrative)',
        settings: {
            style: 'Cinematic, dramatic, and narrative-driven. Each portrait feels like a still from a movie, often featuring elaborate sets and a strong sense of story.',
            lighting: 'Complex, multi-light setups, often using a combination of softboxes, grids, and reflectors to create a polished, sculpted, and highly controlled cinematic look.',
            color_grade: 'Cool Cinematic: Cool, slightly desaturated tones with deep blues and cyans in the shadows, creating a modern, cinematic, and often moody feel.',
            quality: 'Shot on a Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus. Every micro-detail is rendered with absolute clarity, creating a larger-than-life feel.',
            shot: 'Environmental portrait, showing the subject within a context that tells a story.'
        }
    },
    {
        name: 'Peter Lindbergh (Authentic Soul)',
        settings: {
            style: 'Raw, authentic, and emotionally direct. A focus on natural beauty and character over artifice. Often captures subjects in candid, unposed moments.',
            lighting: 'Natural, available light, often on an overcast day or in open shade, to create soft, flattering illumination that reveals true character without harshness.',
            color_grade: 'High-Contrast B&W: Gritty yet soulful black and white, with deep blacks, textured grays, and luminous whites, emphasizing emotion and form over color.',
            quality: 'Shot on Kodak Tri-X 400 film. 8k, capturing the soul of the subject. A beautiful, prominent film grain that adds texture and a sense of realism.',
            shot: 'Candid medium shot or close-up, focusing on genuine expression and connection.'
        }
    },
    {
        name: 'Jean-Loup Sieff (Sculptural B&W Form)',
        settings: {
            style: 'A focus on the sculptural, sensual, and graphic qualities of the human form, often using dramatic perspectives and wide-angle lenses to elongate lines.',
            lighting: 'High-contrast, often dramatic natural or studio light that carves the body out of deep shadows, emphasizing texture and form over personality.',
            color_grade: 'High-Contrast B&W with rich, velvety blacks and a full range of mid-tones, giving the images a deep, tactile quality.',
            quality: 'Shot on a medium format film camera with a wide-angle lens (like a 28mm), creating dynamic compositions. Prominent but fine grain.',
            shot: 'Unconventional full-body or environmental portraits that play with perspective and composition.'
        }
    },
    {
        name: 'Guy Bourdin (Surrealist Color Narrative)',
        settings: {
            style: 'Surreal, mysterious, and provocative high-fashion storytelling. Often implies a narrative beyond the frame, using rich, saturated colors and glossy textures.',
            lighting: 'Hard, polished, and hyper-real studio lighting. Use of colored gels and high-gloss surfaces to create a vibrant, almost artificial world.',
            color_grade: 'Vibrant & Saturated: Hyper-saturated colors, especially reds, pinks, and greens. A high-gloss, commercial finish that feels both luxurious and unsettling.',
            quality: 'Shot on medium-format color film like Kodachrome, known for its rich color saturation and fine detail. The look is impeccably sharp and glossy.',
            shot: 'Fragmented or abstract compositions, often focusing on legs, feet, or cropped figures within a larger, mysterious scene.'
        }
    },
    {
        name: 'Araki (Intimate Diary)',
        settings: {
            style: 'Raw, intimate, and often confrontational snapshot aesthetic. A diary-like documentation of personal moments, blending tenderness with a rough, high-contrast edge.',
            lighting: 'Hard, direct on-camera flash (snapshot style), creating harsh shadows, blown-out highlights, and a sense of unfiltered reality.',
            color_grade: 'High-Contrast B&W, often pushed in processing to increase grain and contrast, giving a gritty, raw, and immediate feel.',
            quality: 'Shot on a 35mm point-and-shoot camera with fast black and white film. The quality is intentionally raw, with heavy grain and imperfections.',
            shot: 'Candid, unposed close-ups and medium shots that feel like stolen, private moments. Focus on texture, flowers, and artistic binding (kinbaku).'
        }
    },
    {
        name: 'Man Ray (Surrealist Form)',
        settings: {
            style: 'Surrealist and experimental, treating the human form as a collection of abstract shapes and lines. Utilizes techniques like solarization (Sabattier effect) to create dreamlike, uncanny images.',
            lighting: 'Experimental and often harsh lighting to create stark contrasts and silhouettes. Focus on how light can distort and abstract the figure, with bright, blown-out edges characteristic of solarization.',
            color_grade: 'Vintage, high-contrast black and white with a soft, silver-gelatin print feel. Tones are often muted, with an emphasis on texture and grain over pure black or white.',
            quality: 'Shot on a large-format film camera with experimental processing. The image has a timeless, artifact-like quality, with imperfections like dust or scratches adding to the artistic feel.',
            shot: 'Abstracted close-ups or fragmented body shots, focusing on individual parts of the body (back, hands, neck) to deconstruct and re-imagine the human form.'
        }
    },
    {
        name: 'Robert Mapplethorpe (Sculptural Purity)',
        settings: {
            style: 'Formalist, classical, and sculptural. A profound focus on the perfection of form, symmetry, and line, treating the human body with the same reverence as a classical statue. Highly controlled and posed.',
            lighting: 'Immaculate, controlled studio lighting. Often uses a single, hard light source to carve out muscle definition and create deep, precise shadows. The background is typically a seamless, neutral grey or black.',
            color_grade: 'Pristine, high-contrast black and white with a huge tonal range. Deep, rich blacks, brilliant whites, and a full spectrum of silvery greys. Flawless and clean.',
            quality: 'Shot on a Hasselblad medium format camera. Technically perfect, with extreme sharpness and detail. The print quality is paramount, showing no grain and perfect focus.',
            shot: 'Full-body or torso shots posed in a classical, statuesque manner (e.g., contrapposto). The composition is balanced, geometric, and perfectly centered.'
        }
    },
    {
        name: 'Ellen von Unwerth (Playful Narrative)',
        settings: {
            style: 'Playful, energetic, and candidly sensual. Tells a story of playful liberation and female confidence. Feels like a captured moment from a wild party or a behind-the-scenes glance.',
            lighting: 'Dynamic and often imperfect lighting that mimics real-world scenarios. A mix of on-camera flash, ambient room light, and daylight, creating a spontaneous, high-energy feel. Motion blur is often present.',
            color_grade: 'Gritty, high-contrast black and white, or slightly over-saturated color with a warm, filmic cast. The look is often grainy and has a raw, unpolished feel.',
            quality: 'Shot on a 35mm film camera, often with fast film. The quality prioritizes emotion and energy over technical perfection, embracing grain, soft focus, and movement.',
            shot: 'Dynamic, unposed medium shots or environmental portraits that capture the subject interacting with their surroundings. Often features genuine laughter, movement, and direct, knowing glances at the camera.'
        }
    }
];