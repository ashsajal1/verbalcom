<script lang="ts" setup>
import Button from '@/components/Button.vue'
import { AudioLines } from 'lucide-vue-next';
import { MicVocal } from 'lucide-vue-next';
</script>

<template>
    <div class="w-full grid place-items-center py-12">
        <h1 class="mb-4 text-3xl font-bold g-text">Pratice to learn Verbal Communicaiton!</h1>
        <div class="flex items-center gap-3">
            <Button class="flex items-center gap-2" variant="outline">
                <MicVocal />
                Practice sentences
            </Button>

            <router-link to='/vocabulary'>
                <Button class="flex items-center gap-2" variant="outline">
                    <AudioLines />
                    Practice vocabulary
                </Button>
            </router-link>
        </div>
    </div>
</template>
