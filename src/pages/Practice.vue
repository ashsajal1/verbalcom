<script lang="ts" setup>
import { communicationSamples } from '@/lib/texts';
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import Button from '@/components/Button.vue';
import { useSpeechSynthesis } from '@vueuse/core'
const route = useRoute()
const id = route.query.id as string
const praciceSample = ref(communicationSamples.filter(text => text.id === id)[0])

const {
    isSupported,
    isPlaying,
    stop,
    speak,
    toggle
} = useSpeechSynthesis(praciceSample.value.text)

const handleClick = () => {
    if (isSupported.value) {
        speak()
        toggle()
    } else {
        console.error('Speech synthesis is not supported in this browser.')
    }
}

import { useSpeechRecognition } from '@vueuse/core';

const speech = useSpeechRecognition({
  lang: 'en-US',
  continuous: true,
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

</script>

<template>
    <div>
        <h1 @click="handleClick" class="text-2xl font-extralight py-4">{{ praciceSample.text }}</h1>
        <textarea v-model="result" placeholder="Write text" class="p-2 rounded border w-full"></textarea>
        <Button class="w-full mt-3">Submit</Button>
        <div class="flex items-center gap-4">
            <Button v-if="!isListening" @click="start" class="w-full mt-3">Press and talk</Button>
            <Button v-if="isListening" @click="stopSpeech" class="w-full mt-3">Stop</Button>
        </div>
    </div>
</template>