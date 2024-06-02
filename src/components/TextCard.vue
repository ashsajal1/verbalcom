<script lang="ts" setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import Button from '../components/Button.vue'

const props = defineProps<{ id: string; text: string; category: string }>()
const router = useRouter()

const handleClick = () => {
  router.push(`/practice?id=${props.id}`)
}
</script>

<template>
  <div v-motion-roll-top :duration="600" class="flex flex-col border shadow p-4 rounded my-4">
    <p @click="handleClick" class="font-extralight text-2xl">{{ text }}</p>
    <p class="font-bold text-sm">{{ category }}</p>
    <Button class="mt-2 hover:to-violet-700 hover:from-teal-700" @click="handleClick">Practice</Button>
  </div>
</template>