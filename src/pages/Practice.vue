<script lang="ts" setup>
import { communicationSamples } from '@/lib/texts';
import { ref, onUnmounted } from 'vue';
import { useRoute } from 'vue-router'
import Button from '@/components/Button.vue';
import TextArea from '@/components/TextArea.vue';
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

onUnmounted(() => {
  stop()
});

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

</script>

<template>
    <div>
        <h1 class="text-2xl flex items-center gap-2 font-extralight py-4">
            <span>{{ praciceSample.text }}</span>
            <Button v-if="!isPlaying" @click="handleClick" variant="ghost">
                <span class="pi pi-volume-down"></span>
            </Button>

            <Button v-if="isPlaying" @click="stop()" variant="ghost">
                <span class="pi pi-volume-off"></span>
            </Button>
        </h1>
        <TextArea v-model="result" placeholder="Write text"></TextArea>
        <Button class="w-full mt-3">Submit</Button>

        <div v-if="!speech.isSupported" class="flex items-center gap-4">
            <Button v-if="!isListening" @click="start" class="w-full mt-3">Press and talk</Button>
            <Button v-if="isListening" @click="stopSpeech" class="w-full mt-3">Stop</Button>
        </div>
    </div>
</template>