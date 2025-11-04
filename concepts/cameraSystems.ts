import type { PromptData } from '../types';

type CameraSystemSettings = Partial<Pick<PromptData, 'lighting' | 'color_grade' | 'style' | 'quality' | 'shot'>>;

interface CameraSystem {
    name: string;
    settings: CameraSystemSettings;
}

export const cameraSystems: CameraSystem[] = [
    {
        name: 'Helmut Newton',
        settings: {
            style: 'Helmut Newton Inspired: A bold, cinematic, and glamorous style, often featuring powerful female subjects in luxurious, stark settings. High-contrast, neo-noir, and powerfully sensual.',
            lighting: 'Hard, directional studio lighting, often from a high side angle, creating dramatic, sharp shadows and brilliant highlights that sculpt form and texture. Resembles cinematic or on-location flash.',
            color_grade: 'Severe Monochromatic B&W: Deep, crushed blacks, brilliant, clean whites, and neutral skin tones. A clean, severe, high-fashion magazine aesthetic.',
            quality: 'RAW Cinematic (Helmut Newton): A glamorous, bold, and realistic feel, inspired by his cinematic and provocative style. 8k, natural textures, no artificial plastic look, high-end cinematic quality.',
            shot: 'Full body or three-quarters shot, emphasizing long lines and a commanding pose.'
        }
    },
    {
        name: 'Paolo Roversi',
        settings: {
            style: 'Ethereal, painterly, and dreamlike. A profound focus on emotional depth and a soft, almost spiritual quality. Focus is often slightly soft, bleeding light.',
            lighting: 'Soft, single-source directional window light that wraps around the subject\'s features, creating very soft shadows. Often uses long exposures to capture a sense of movement and blur.',
            color_grade: 'Painterly Desaturated (Timeless): Warm, rich, painterly tones. Deep browns, warm skin highlights, and velvety blacks. A desaturated, timeless, and slightly faded feel, like an old Polaroid.',
            quality: 'Shot on a large-format film camera (like a Deardorff 8x10) with a vintage lens. Beautiful, soft focus and a prominent, artistic film grain.',
            shot: 'Close-up or medium portrait, capturing emotion with profound depth.'
        }
    },
    {
        name: 'Annie Leibovitz',
        settings: {
            style: 'Cinematic, dramatic, and narrative-driven. Each portrait feels like a still from a movie, often featuring elaborate sets and a strong sense of story.',
            lighting: 'Complex, multi-light setups, often using a combination of softboxes, grids, and reflectors to create a polished, sculpted, and highly controlled cinematic look.',
            color_grade: 'Cool Cinematic: Cool, slightly desaturated tones with deep blues and cyans in the shadows, creating a modern, cinematic, and often moody feel.',
            quality: 'Shot on a Hasselblad X2D. Unmatched 8K detail. Extremely sharp focus. Every micro-detail is rendered with absolute clarity, creating a larger-than-life feel.',
            shot: 'Environmental portrait, showing the subject within a context that tells a story.'
        }
    },
    {
        name: 'Peter Lindbergh',
        settings: {
            style: 'Raw, authentic, and emotionally direct. A focus on natural beauty and character over artifice. Often captures subjects in candid, unposed moments.',
            lighting: 'Natural, available light, often on an overcast day or in open shade, to create soft, flattering illumination that reveals true character without harshness.',
            color_grade: 'High-Contrast B&W: Gritty yet soulful black and white, with deep blacks, textured grays, and luminous whites, emphasizing emotion and form over color.',
            quality: 'Shot on Kodak Tri-X 400 film. 8k, capturing the soul of the subject. A beautiful, prominent film grain that adds texture and a sense of realism.',
            shot: 'Candid medium shot or close-up, focusing on genuine expression and connection.'
        }
    }
];
