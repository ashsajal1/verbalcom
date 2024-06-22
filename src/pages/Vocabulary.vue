<script lang="ts" setup>
import { vocabulary } from '@/lib/vocabulary';
import { Volume2 } from 'lucide-vue-next';
import Button from '@/components/Button.vue'
import { useSpeechSynthesis } from '@vueuse/core'
import { computed, ref, watch } from 'vue';

const searchedWord = ref('')
const words = computed(() => {
    if (searchedWord.value === '') {
        return vocabulary;
    }
    return vocabulary.filter(word =>
        word.en.includes(searchedWord.value) || word.bn.includes(searchedWord.value)
    );
});

watch(
    words,
    async (newWords) => {
        console.log("Words are : ", newWords)
    },
);

const playWord = (word: string) => {
    const {
        isSupported,
        speak,
    } = useSpeechSynthesis(word)

    if (!isSupported) {
        alert("Speech Synthesis is not supported in your browser!")
    }

    speak()
}
const playWordWithoutAlert = (word: string) => {
    const {
        isSupported,
        speak,
    } = useSpeechSynthesis(word)

    speak()
}


</script>

<template>
    <h1 class="text-3xl font-bold text-center mb-4 g-text">Practice vocabulary</h1>

    <div class="pt-3 pb-6 flex flex-col md:flex-row w-full">
        <div class="flex items-center gap-2">
            <input v-model="searchedWord" class="p-2 border w-full rounded" placeholder="Search word" type="text">
            <Button>Search</Button>
        </div>
    </div>

    <div class="rounded flex items-center justify-between border text-lg font-bold p-4 shadow-sm" v-if="words.length === 0">
        <div>
            <span>No word found called </span>
            <span class="text-secondary">{{ searchedWord }}</span>
        </div>

        <Button variant="outline" @click="searchedWord = ''">Reset</Button>
    </div>

    <div class="flex gap-2 flex-col">
        <div class="flex items-center justify-between p-3 gap-2 rounded border" v-for="(item, index) in words"
            :key="index">
            <div class="flex items-center gap-2">
                <Button @click="playWordWithoutAlert(`${item.en}`)" variant="ghost">
                    <div>{{ item.en }}</div>
                </Button>
                <Button @click="playWordWithoutAlert(`${item.bn}`)" variant="ghost">
                    <div>{{ item.bn }}</div>
                </Button>
            </div>
            <div>
                <Button @click="playWord(`${item.en} ${item.bn}`)" variant="ghost">
                    <Volume2 />
                </Button>
            </div>
        </div>
    </div>
</template>
