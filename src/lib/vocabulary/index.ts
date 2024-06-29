import { physicsVocabularyArray } from "./physics";
import { historyVocabularyArray } from "./history";
import { battleVocabularyArray } from "./battle";

import { Vocabulary } from "./types";
import { businessVocabularyArray } from "./business";
import { psychologyVocabularyArray } from "./science/psychology";
import { politicsVocabularyArray } from "./politics";
import { engineeringVocabularyArray } from "./science/engineering";
import { legalVocabularyArray } from "./legal";
import { travelVocabularyArray } from "./travel";
import { foodAndNutritionVocabularyArray } from "./science/food";
import { realEstateVocabulary } from "./real-state";
import { educationVocabulary } from "./education";

export const vocabulary: Vocabulary[] = [
  ...physicsVocabularyArray,
  ...historyVocabularyArray,
  ...battleVocabularyArray,
  ...businessVocabularyArray,
  ...psychologyVocabularyArray,
  ...politicsVocabularyArray,
  ...engineeringVocabularyArray,
  ...legalVocabularyArray,
  ...travelVocabularyArray,
  ...foodAndNutritionVocabularyArray,
  ...realEstateVocabulary,
  ...educationVocabulary,
  

];
