<script lang="ts" setup>
import Button from '@/components/Button.vue';

</script>

<template>
    <div class="w-full h-screen grid place-items-center">
        <div class="flex flex-col items-center justify-center gap-4">
            <h1 class="font-bold text-4xl">404</h1>
            <h1 class="font-light text-3xl">Page Not Found</h1>
            <RouterLink to="/">
                <Button class="flex items-center gap-2">
                <span class="pi pi-home"></span>
                <span>Go to Home</span>
            </Button>
        </RouterLink>
        </div>
    </div>
</template>
