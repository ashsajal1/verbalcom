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
            <p><span class="font-bold">Meaning in Bengali</span> : {{ wordExplanation?.bn }}</p>

            <div class="border-b dark:border-b-gray-700 pb-2 my-3" v-if="wordExplanation.explanation">
                <h3 class="text-xl font-bold">Explanation :</h3>
                <span>{{ wordExplanation.explanation }}</span>
            </div>

            <div class="border-b dark:border-b-gray-700 pb-2 mb-3" v-if="wordExplanation.example">
                <h3 class="text-xl font-bold">Example usage :</h3>
                <span>{{ wordExplanation.example }}</span>
            </div>

            <div class="pb-2 mb-3" v-if="wordExplanation.category">
                <h3 class="text-xl font-bold">Word category : </h3>
                <span>{{ wordExplanation.category }} realated word.</span>
            </div>
        </div>
    </div>
</template>
