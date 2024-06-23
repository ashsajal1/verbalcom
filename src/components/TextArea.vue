<template>
    <textarea v-model="value" :placeholder="placeholder"
        class="p-2 rounded border w-full dark:bg-gray-900 outline-none dark:border-gray-700"></textarea>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
    placeholder?: string;
}>();

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const value = ref('');

// Emit the updated value to the parent component
watch(value, (newValue) => {
    emits('update:modelValue', newValue);
});
</script>