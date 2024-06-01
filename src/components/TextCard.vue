<script lang="ts" setup>
import { useSpeechSynthesis } from '@vueuse/core'
import { defineProps } from 'vue'
import Button from '../components/Button.vue'

const props = defineProps<{ text: string; category: string }>()

const {
  isSupported,
  isPlaying,
  // status,
  // voiceInfo,
  // utterance,
  // error,
  stop,
  speak,
} = useSpeechSynthesis(props.text)

const handleClick = () => {
  if (isSupported.value) {
    if (isPlaying.value) {
      stop()
    }
    speak()
  } else {
    console.error('Speech synthesis is not supported in this browser.')
  }
}

</script>

<template>
  <div v-motion-roll-top :duration="600" class="flex flex-col border shadow p-4 rounded my-4">
    <p @click="handleClick" class="font-extralight text-2xl">{{ text }}</p>
    <p class="font-bold text-sm">{{ category }}</p>
    <Button class="mt-2 hover:to-violet-700 hover:from-teal-700">Practice</Button>
  </div>
</template>