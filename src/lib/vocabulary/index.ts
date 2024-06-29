import { physicsVocabularyArray } from "./physics";
import { historyVocabularyArray } from "./history";
import { battleVocabularyArray } from "./battle";

import { Vocabulary } from "./types";
import { businessVocabularyArray } from "./business";

export const vocabulary : Vocabulary[] = [...physicsVocabularyArray,...historyVocabularyArray,...battleVocabularyArray, ...businessVocabularyArray];