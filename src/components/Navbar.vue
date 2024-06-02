<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from './Button.vue';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isScrolled = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
    // console.log(isScrolled.value)
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <header
        class="flex items-center justify-between p-4 h-[80px] bg-white w-full z-10 border-b fixed top-0 transition-all duration-300"
        :class="{ 'backdrop-blur bg-opacity-60': isScrolled }">
        <router-link to="/">
            <p
                class="md:text-3xl text-lg font-bold bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent">
                VerbalCom
            </p>
        </router-link>
        <div class="flex items-center gap-2">
            <div>
                <Button @click='toggleDark'>
                    <span v-if="isDark" class="pi pi-sun"></span>
                    <span v-if="!isDark" class="pi pi-moon"></span>
                </Button>
            </div>
            <div class="focus-within:bg-gradient-to-tr from-primary to-secondary rounded p-[1px]">
                <div class="border bg-white rounded p-2 flex items-center">
                    <input class="outline-none" type="text" placeholder="Search sample..." />
                    <button
                        class="rounded bg-gradient-to-tr from-primary to-secondary p-1 text-sm text-white text-center flex items-center justify-between">
                        <span class="pi pi-search"></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>