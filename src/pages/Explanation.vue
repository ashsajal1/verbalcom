<script lang="ts" setup>
import { vocabulary } from '@/lib/vocabulary';
import { useUrlSearchParams } from '@vueuse/core'

const searchedWord = useUrlSearchParams('history').word;
const wordExplanation = vocabulary.filter(word => word.en === searchedWord)[0]
console.log(wordExplanation)
</script>

<!-- en: string;
bn: string;
category: string;
explanation?: string;
example?: string; -->

<template>
    <div>
        <p v-if="searchedWord">Showing explanation for word <span class="text-primary">{{ searchedWord }}</span></p>

        <div>
            <p>Meaning in Bengali : {{ wordExplanation?.bn }}</p>

            <p v-if="wordExplanation.explanation">
                Explanation :
                <span>{{ wordExplanation.explanation }}</span>
            </p>
            <p v-if="wordExplanation.example">
                Example usage :
                <span>{{ wordExplanation.example }}</span>
            </p>
            <p v-if="wordExplanation.category">
                Word category :
                <span>{{ wordExplanation.category }} realated word.</span>
            </p>
        </div>
    </div>
</template>
