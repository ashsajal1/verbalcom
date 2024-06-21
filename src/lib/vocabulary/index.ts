import { physicsVocabularyArray } from "./physics";
import { historyVocabularyArray } from "./history";
import { battleVocabularyArray } from "./battle";

import { Vocabulary } from "./types";

export const vocabulary : Vocabulary[] = [...physicsVocabularyArray,...historyVocabularyArray,...battleVocabularyArray];