<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import Button from './Button.vue';
import { useDark, useToggle } from '@vueuse/core'
import { useSearchStore } from '@/stores/search';
import { useRouter } from 'vue-router';
const searchStore = useSearchStore();
const { searchText } = storeToRefs(useSearchStore());
const router = useRouter()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isScrolled = ref(false)
const isOpenMenu = ref(false)

const handleScroll = () => {
    isScrolled.value = window.scrollY > 100
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

const handleMenuOpen = () => {
    isOpenMenu.value = true
}
const handleMenuClose = () => {
    isOpenMenu.value = false
}

const handleSearch = () => {
    if (searchText.value !== '') {
        searchStore.setHasSearched(true)
    }
    isOpenMenu.value = false;
    router.push({ name: 'home', query: { search: searchText.value } })
}
</script>

<template>
    <header
        class="flex flex-col dark:bg-black items-center justify-between p-4 bg-white w-full z-10 border-b dark:border-b-gray-700 fixed top-0 transition-all duration-300"
        :class="{ 'backdrop-blur bg-opacity-60': isScrolled }">

        <div class="flex items-center justify-between w-full">

            <router-link to="/">
                <p
                    class="md:text-3xl text-lg font-bold bg-gradient-to-tr from-primary to-secondary bg-clip-text text-transparent select-none">
                    VerbalCom
                </p>
            </router-link>
            <div class="flex items-center gap-2">

                <div>
                    <Button variant='ghost' @click='toggleDark()'>
                        <span v-if="isDark" class="pi pi-sun"></span>
                        <span v-if="!isDark" class="pi pi-moon"></span>
                    </Button>
                </div>

                <Button v-if="!isOpenMenu" class="md:hidden" @click="handleMenuOpen()">
                    <span class="pi pi-bars" </span>
                </Button>

                <Button v-if="isOpenMenu" @click="handleMenuClose()" variant="ghost" class="md:hidden shadow">
                    <span class="pi pi-angle-double-up animate-bounce
    " </span>
                </Button>

                <div class="focus-within:bg-gradient-to-tr from-primary to-secondary rounded p-[1px] hidden md:block">
                    <form @submit.prevent="handleSearch()"
                        class="border bg-white dark:bg-black dark:border-gray-700 rounded p-2 flex items-center">
                        <input v-model="searchText" class="outline-none dark:bg-black" type="text"
                            placeholder="Search sample..." 
                            required />
                        <button
                            class="rounded bg-gradient-to-tr from-primary to-secondary p-1 text-sm text-white text-center flex items-center justify-between">
                            <span class="pi pi-search"></span>
                        </button>
                    </form>
                </div>
            </div>

        </div>

        <template v-if="isOpenMenu">
            <div v-motion-pop :duration="600" class="w-full mt-3">
                <div class="focus-within:bg-gradient-to-tr from-primary to-secondary rounded p-[1px]">
                    <form @submit.prevent="handleSearch()"
                        class="border bg-white dark:bg-black dark:border-gray-700 rounded p-2 flex items-center justify-between">
                        <input v-model="searchText" class="outline-none w-full dark:bg-black" type="text"
                            placeholder="Search sample..." required />
                        <button
                            class="rounded bg-gradient-to-tr from-primary to-secondary p-1 text-sm text-white text-center flex items-center justify-between">
                            <span class="pi pi-search"></span>
                        </button>
                    </form>
                </div>
            </div>
        </template>

    </header>
</template>