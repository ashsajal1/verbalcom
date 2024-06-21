<script lang="ts" setup>
import { vocabulary } from '@/lib/vocabulary';
</script>

<template>
    <h1 class="text-3xl font-bold text-center mb-4 g-text">Practice vocabulary</h1>

    <div class="flex gap-2 flex-col">
        <div class="flex items-center p-3 gap-2 rounded border" v-for="(item, index) in vocabulary" :key="index">
            <div class="flex items-center gap-2">
                <div>{{ item.en }}</div>
                <div>{{ item.bn }}</div>
            </div>
            <div></div>
        </div>
    </div>
</template>
