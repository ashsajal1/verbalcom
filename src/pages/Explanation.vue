<script lang="ts" setup>
import { communicationSamples } from '@/lib/texts';
import { vocabulary } from '@/lib/vocabulary';
import { useUrlSearchParams } from '@vueuse/core'

const searchedWord = useUrlSearchParams('history').word;
const wordExplanation = vocabulary.filter(word => word.en === searchedWord)[0]
const moreExample = communicationSamples.filter(sample => sample.text.toLowerCase().includes((searchedWord as string).toLowerCase()));
console.log(moreExample)
</script>

<!-- en: string;
bn: string;
category: string;
explanation?: string;
example?: string; -->

<template>
    <div>
        <p v-if="searchedWord">Showing explanation for word <span class="text-primary">{{ searchedWord }}</span></p>

        <div v-if="wordExplanation">
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

        <div v-if="moreExample.length !== 0" class="mt-4">
            <p class="text-lg font-bold">Available example : </p>
            <ol start="1">
                <li class="border-b dark:border-b-gray-800" v-for="(example, index) in moreExample" :key="index">{{ example.text }}</li>
            </ol>
        </div>

        <div v-if="!wordExplanation">
           
            <p class="text-sm mt-6">More info about the word is not found in our dictionary! If you are a developer, you can add "{{ searchedWord }}" word. Here is the github repo
                url : <a class="text-primary" href="https://github.com/ashsajal1/verbalcom" target="_blank">VerbalCom
                    github repo</a></p>
        </div>
    </div>
</template>
