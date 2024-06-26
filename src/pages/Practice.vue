<script lang="ts" setup>
import { communicationSamples } from '@/lib/texts';
import { ref, onUnmounted, watch, computed } from 'vue';
import { useRoute } from 'vue-router'
import Button from '@/components/Button.vue';
import TextArea from '@/components/TextArea.vue';
import { useSpeechSynthesis } from '@vueuse/core'
const route = useRoute()
const id = route.query.id as string
const praciceSample = ref(communicationSamples.filter(text => text.id === id)[0])

const words = praciceSample.value.text.split(' ')
const currentIndex = ref(0)
const isCompleted = ref(false)

const isInputEmpty = computed(() => {
    return result.value.length === 0
})

const {
    isSupported,
    isPlaying,
    stop,
    speak,
    toggle
} = useSpeechSynthesis(praciceSample.value.text)

let interval: number | null = null;

watch(isPlaying, (newValue) => {
    if (newValue) {
        interval = setInterval(() => {
            currentIndex.value++;
            if (currentIndex.value >= words.length) {
                clearInterval(interval!);
                currentIndex.value = 0;
            }
        }, getWordDuration(words[currentIndex.value]));
    } else if (interval) {
        clearInterval(interval);
        interval = null;
    }
});

onUnmounted(() => {
    stop()
});

const handleClick = () => {
    currentIndex.value = 0;
    if (isSupported.value) {
        speak()
        toggle()
    } else {
        console.error('Speech synthesis is not supported in this browser.')
    }
}

import { useSpeechRecognition } from '@vueuse/core';
import { getWordDuration, levenshteinDistance, punctuationPause } from '@/lib/utils';

const speech = useSpeechRecognition({
    lang: 'en-US',
    continuous: true,
    interimResults: true
});

const result = ref('');

if (speech.isSupported.value) {
    speech.result.value = result.value;
}

function start() {
    speech.start();
}

function stopSpeech() {
    speech.stop();
}

const { isListening } = speech;

const accuracy = computed(() => {
    if (!result.value) return 0;
    const editDistance = levenshteinDistance(praciceSample.value.text, result.value);
    const maxLength = Math.max(praciceSample.value.text.length, result.value.length);
    return Math.max(0, 100 - (editDistance / maxLength) * 100);
});

const handleSubmit = () => {
    if (!isInputEmpty.value) {
        isCompleted.value = true
    }
}


function refreshPage() {
    window.location.reload();
}

const showTranslation = ref(false)
import { Languages, Volume1, VolumeX } from 'lucide-vue-next'
</script>

<template>
    <div v-if="!isCompleted">
        <div class="text-2xl flex flex-wrap items-center gap-2 font-extralight py-4">

            <div class="flex py-2" v-for="(word, index) in words" :key="index">
                <span :class="{ 'bg-primary p-1 text-white rounded': isPlaying && index === currentIndex }">{{ word
                    }}</span>
            </div>

            <Button v-if="!isPlaying" @click="handleClick" variant="ghost">
                <Volume1 />
            </Button>

            <Button v-if="isPlaying" @click="stop()" variant="ghost">
                <VolumeX />
            </Button>

            <Button v-if="praciceSample.bn && !showTranslation" class="text-sm flex items-center py-1 gap-2" variant="outline"
                @click="showTranslation = !showTranslation">
                <Languages class="h-5 w-5" />
                <span>Show translation</span>
            </Button>
            
            <Button v-if="praciceSample.bn && showTranslation" class="text-sm flex items-center py-1 gap-2" variant="outline"
                @click="showTranslation = !showTranslation">
                <Languages class="h-5 w-5" />
                <span>Hide translation</span>
            </Button>
        </div>

        <div v-motion-pop-visible-once class="flex flex-col gap-2 bg-primary p-3 rounded text-slate-200" v-if="showTranslation">
            <p v-if="showTranslation"> {{ praciceSample?.bn }}</p>
        </div>

        <div class="border border-gray-100 dark:border-gray-900 rounded-full my-4"></div>
        <div class="text-sm py-4 flex items-center gap-3">
            <div>
                <span>Accuracy : </span>
                <span>{{ accuracy.toFixed(2) }}</span>
            </div>

            <div>
                <span v-if="accuracy >= 90">🎉</span>
                <span v-else-if="accuracy >= 80">👍</span>
                <span v-else-if="accuracy >= 70">😊</span>
                <span v-else-if="accuracy >= 50">🤔</span>
                <span v-else>😕</span>
            </div>
        </div>

        <TextArea @keyup.enter="handleSubmit" :class="{ 'border-red-500': isInputEmpty }" v-model="result"
            placeholder="Write text"></TextArea>
        <Button @click="handleSubmit()" class="w-full mt-3">Submit</Button>

        <div v-if="!speech.isSupported" class="flex items-center gap-4">
            <Button v-if="!isListening" @click="start" class="w-full mt-3">Press and talk</Button>
            <Button v-if="isListening" @click="stopSpeech" class="w-full mt-3">Stop</Button>
        </div>
    </div>

    <div v-if="isCompleted">
        <div class="text-4xl py-4 flex flex-col items-center gap-3">
            <div>
                <span v-if="accuracy >= 90">🎉</span>
                <span v-else-if="accuracy >= 80">👍</span>
                <span v-else-if="accuracy >= 70">😊</span>
                <span v-else-if="accuracy >= 50">🤔</span>
                <span v-else>😕</span>
            </div>

            <div>
                <span>{{ accuracy.toFixed(0) }}</span>
                <span>% Accuracy</span>
            </div>

            <div class="text-sm">
                <Button @click="refreshPage" variant="ghost" class="shadow">Practice again</Button>
            </div>
        </div>
    </div>
</template>