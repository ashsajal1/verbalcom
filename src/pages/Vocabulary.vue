<script lang="ts" setup>
import { vocabulary } from '@/lib/vocabulary';
import { Volume2 } from 'lucide-vue-next';
import Button from '@/components/Button.vue'
import { useSpeechSynthesis } from '@vueuse/core'

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

    <div class="flex gap-2 flex-col">
        <div class="flex items-center justify-between p-3 gap-2 rounded border" v-for="(item, index) in vocabulary"
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
