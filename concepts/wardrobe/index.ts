import type { WardrobeConcept } from '../../types';
import { architecturalLingerieConcepts } from './architecturalLingerie';
import { conceptArtConcepts } from './conceptArt';
import { coutureIntimatesConcepts } from './coutureIntimates';
import { privateGalleryConcepts } from './privateGallery';
import { sensualArtConcepts } from './sensualArt';

export const allWardrobeConcepts: WardrobeConcept[] = [
  ...architecturalLingerieConcepts,
  ...coutureIntimatesConcepts,
  ...sensualArtConcepts,
  ...privateGalleryConcepts,
  ...conceptArtConcepts,
];
