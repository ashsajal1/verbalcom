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

const {
    isSupported,
    isPlaying,
    stop,
    speak,
    toggle
} = useSpeechSynthesis(praciceSample.value.text)

type PunctuationPause = {
    [key: string]: number;
};

const punctuationPause: PunctuationPause = {
    ',': 200,
    '.': 400,
    '?': 400,
    '!': 400,
    ':': 300,
    ';': 300
};

const getWordDuration = (word: string) => {
    const baseDuration = 100; // Base duration for a word
    const extraDuration = word.length * 50; // Additional duration per character
    const lastChar = word[word.length - 1];
    const punctuationDuration = punctuationPause[lastChar] || 0; // Extra duration for punctuation
    return baseDuration + extraDuration + punctuationDuration;
};

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
import { levenshteinDistance } from '@/lib/utils';

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


</script>

<template>
    <div>
        <div class="text-2xl flex flex-wrap items-center gap-2 font-extralight py-4">

            <div class="flex py-2" v-for="(word, index) in words" :key="index">
                <span :class="{ 'bg-primary p-1 text-white rounded': isPlaying && index === currentIndex }">{{ word
                    }}</span>
            </div>

            <Button v-if="!isPlaying" @click="handleClick" variant="ghost">
                <span class="pi pi-volume-down"></span>
            </Button>

            <Button v-if="isPlaying" @click="stop()" variant="ghost">
                <span class="pi pi-volume-off"></span>
            </Button>
        </div>

        <div class="text-sm py-4 flex items-center gap-3">
            <div>
                <span>Accuracy : </span>
                <span>{{ accuracy }}</span>
            </div>

            <div>
                <span v-if="accuracy >= 90">🎉</span>
                <span v-else-if="accuracy >= 80">👍</span>
                <span v-else-if="accuracy >= 70">😊</span>
                <span v-else-if="accuracy >= 50">🤔</span>
                <span v-else>😕</span>
            </div>
        </div>

        <TextArea v-model="result" placeholder="Write text"></TextArea>
        <Button class="w-full mt-3">Submit</Button>

        <div v-if="!speech.isSupported" class="flex items-center gap-4">
            <Button v-if="!isListening" @click="start" class="w-full mt-3">Press and talk</Button>
            <Button v-if="isListening" @click="stopSpeech" class="w-full mt-3">Stop</Button>
        </div>
    </div>
</template>