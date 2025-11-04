import type { Preset } from '../types';

export const environmentCategories: Record<string, Preset[]> = {
  "Professional": [
    { name: 'Modern Executive Office', value: 'A sleek, modern executive office at night, with glass walls, designer furniture (like an Eames chair), and the ambient glow from computer monitors and the city skyline.' },
    { name: 'Corner Office (Day)', value: 'A sun-drenched corner office with panoramic floor-to-ceiling windows overlooking a bustling city during the day. Minimalist, high-end decor.' },
    { name: 'Luxury Boardroom', value: 'A state-of-the-art boardroom with a long, polished mahogany table, leather chairs, and advanced teleconferencing equipment subtly in the background.' },
    { name: 'Law Library', value: 'A classic, grand law library with floor-to-ceiling bookshelves, green banker\'s lamps, and a quiet, studious atmosphere.' },
    { name: 'High-Tech Server Room', value: 'A cool, blue-lit server room with rows of humming server racks, creating a futuristic and industrial-corporate feel.' },
    { name: 'Architectural Firm Studio', value: 'A bright, open-plan architectural studio filled with models, blueprints, and drafting tables, under skylights.' },
    { name: 'Penthouse Apartment (Minimalist)', value: 'A minimalist penthouse apartment with stark white walls, polished concrete floors, and designer furniture, offering a stunning view of the city below.' },
    { name: 'Corporate Lobby', value: 'The expansive, marble-floored lobby of a modern skyscraper, with a large, abstract sculpture and a sense of scale and power.' },
    { name: 'Private Jet Interior', value: 'The luxurious interior of a private jet, with cream leather seats, polished wood trim, and soft, ambient lighting.' },
    { name: 'Rooftop Helipad', value: 'A concrete helipad on the roof of a skyscraper at twilight, with the city lights beginning to sparkle below.' }
  ],
  "Artistic": [
    { name: 'Minimalist Art Gallery', value: 'A sterile, white-walled art gallery with high ceilings and polished concrete floors, featuring a single, large abstract painting.' },
    { name: 'Gritty Urban Loft', value: 'A raw, gritty urban loft with exposed brick walls, visible pipes, large industrial windows, and a raw, edgy, creative feel.' },
    { name: 'Empty Dance Studio', value: 'An empty dance studio with sprung wooden floors, a wall of mirrors, and soft, diffused light from large windows.' },
    { name: 'Sculptor\'s Atelier', value: 'A cluttered but organized sculptor\'s atelier, filled with clay models, tools, armatures, and the scent of plaster and earth.' },
    { name: 'Baroque Palace Ballroom', value: 'An opulent, grand ballroom in a Baroque palace, with gilded moldings, crystal chandeliers, and polished marble floors reflecting the light.' },
    { name: 'Museum (Classical Antiquity)', value: 'A quiet hall in a museum, surrounded by ancient Greek and Roman marble statues, creating a timeless and classical atmosphere.' },
    { name: 'Abandoned Theatre', value: 'The dusty, atmospheric stage of an abandoned Art Deco theatre, with decaying velvet seats and a single ghost light.' },
    { name: 'Graffiti-Covered Alley', value: 'A vibrant, graffiti-covered alleyway in a bustling city, full of color, texture, and urban energy.' },
    { name: 'Modern Glasshouse/Conservatory', value: 'A large, modern conservatory with a steel and glass structure, filled with exotic, oversized tropical plants and orchids.' },
    { name: 'Minimalist Concrete Studio', value: 'A minimalist studio with a dark grey or black textured concrete wall. The floor is polished concrete that reflects subtle highlights.' },
    { name: 'Artist\'s Loft (North Light)', value: 'A classic artist\'s loft with a large, north-facing window just out of frame. The background is a textured, neutral-toned wall.' }
  ],
  "Intimate": [
    { name: 'Luxury Hotel (Night Cityscape)', value: 'A luxurious, modern hotel room with floor-to-ceiling windows revealing a dazzling cityscape at night. The room is immaculate with high-end furniture.' },
    { name: 'Messy Luxury Hotel Room', value: 'A dimly lit luxurious hotel room post-celebration, with a messy king-sized bed with silk sheets and clothes draped over a chair.' },
    { name: 'Intimate Bedroom (Morning Light)', value: 'An intimate bedroom setting with soft, unmade cotton sheets on a bed, with gentle morning light filtering through a sheer curtain.' },
    { name: 'Private Library (Fireplace)', value: 'A cozy, private library with dark wood paneling, a crackling fireplace, and comfortable leather armchairs.' },
    { name: 'Luxury Bathroom & Tub', value: 'A spacious, luxurious bathroom with marble surfaces, a large freestanding bathtub filled with water, and soft, ambient lighting.' },
    { name: 'Secluded Cabin in Woods', value: 'A rustic yet modern cabin deep in the woods, with a large window looking out onto a pine forest, and a warm, inviting interior.' },
    { name: 'Private Gallery Space', value: 'A private, intimate studio sanctuary designed for personal reflection, with soft textures and a single, comfortable chaise lounge.' },
    { name: 'Rainy Window Nook', value: 'A comfortable window seat in a high-rise apartment, with rain streaking down the glass and the city lights blurred in the background.' },
    { name: 'Velvet-Draped Boudoir', value: 'A classic boudoir setting with heavy velvet curtains, antique furniture, and a soft, sensual, and private atmosphere.' },
    { name: 'Sun-Drenched Tuscan Villa Patio', value: 'The rustic stone patio of a private Tuscan villa, bathed in the warm, golden light of late afternoon, overlooking rolling hills.' }
  ],
  "Conceptual": [
    { name: 'Infinite White Void', value: 'An infinite, seamless white void or cyclorama, where the subject is the only element, creating a sense of isolation and focus on form.' },
    { name: 'Infinite Black Void', value: 'An infinite, light-absorbing black void, where form is carved out of the darkness by carefully placed lighting.' },
    { name: 'Room of Mirrors', value: 'A room where the walls, floor, and ceiling are covered in mirrors, creating an endless, fragmented reflection of the subject.' },
    { name: 'Submerged in Water', value: 'The subject is floating gracefully in clear, still water, with fabric billowing around them and light refracting from the surface.' },
    { name: 'Abstract Geometric Set', value: 'A physical set made of large, monochromatic geometric shapes (cubes, spheres, pyramids) that the subject can interact with.' },
    { name: 'Field of Single-Color Flowers', value: 'An endless, surreal field of flowers, all of the exact same vibrant color (e.g., all scarlet poppies or all cobalt blue irises).' },
    { name: 'Cloudscape at Sunset', value: 'The subject appears to be sitting or standing on a solid bank of clouds during a vibrant, surreal sunset.' },
    { name: 'Neon-Lit Cyberpunk Alley', value: 'A narrow, rain-slicked alley in a futuristic cyberpunk city, illuminated by the vibrant, chaotic glow of neon signs and holographic advertisements.' },
    { name: 'Surrealist Desert Landscape', value: 'A dreamlike desert landscape inspired by Dali or Tanguy, with melting clocks, strange rock formations, and a dramatic, painted sky.' },
    { name: 'Projected Universe', value: 'The subject is in a dark room, and images of nebulae and galaxies are projected onto their form and the walls around them.' }
  ]
};
