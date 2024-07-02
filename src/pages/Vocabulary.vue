<script lang="ts" setup>
import { vocabulary } from '@/lib/vocabulary';
import { Volume2 } from 'lucide-vue-next';
import Button from '@/components/Button.vue'
import { useSpeechSynthesis } from '@vueuse/core'
import { computed, ref, watch } from 'vue';

const searchedWord = ref('');
const selectedTopics = ref<string[]>([]);
const availableTopics = new Set(vocabulary.map(word => word.category))

const words = computed(() => {
    return vocabulary.filter(word => {
        const matchesSearch = searchedWord.value === '' ||
            word.en.includes(searchedWord.value) ||
            word.bn.includes(searchedWord.value);

        const matchesTopics = selectedTopics.value.length === 0 ||
            selectedTopics.value.includes(word.category);

        return matchesSearch && matchesTopics;
    });
});

watch(
    words,
    async (newWords) => {
        console.log("Words are : ", newWords)
    },
);

const playWord = (word: string) => {
    const {
        isSupported,
        speak,
    } = useSpeechSynthesis(word)

    if (!isSupported) {
        alert("Speech Synthesis is not supported in your browser!")
    }

    speak()
}
const playWordWithoutAlert = (word: string) => {
    const {
        isSupported,
        speak,
    } = useSpeechSynthesis(word)

    speak()
}

const handleTopics = (topic: string) => {
    if (topic.toLowerCase() === 'all') {
        selectedTopics.value = [];
        return;
    }
    if (selectedTopics.value.includes(topic)) {
        selectedTopics.value = selectedTopics.value.filter(selectedTopic => topic != selectedTopic)
    } else {
        selectedTopics.value = [...selectedTopics.value, topic]
    }
}

</script>

<template>
    <h1 class="text-3xl font-bold text-center mb-4 g-text">Practice vocabulary</h1>

    <div class="grid place-items-center">
        Well practiced? <RouterLink class="text-primary p-2 hover:bg-primary hover:text-slate-100 rounded" to="/quiz">
            Click & play quiz on vocabulary!</RouterLink>
    </div>

    <p class="py-2 text-center font-bold text-lg mb-2">Search or Filter words by specific topics</p>

    <div class="border dark:border-gray-800 w-full mb-3"></div>

    <div class="flex flex-col md:flex-row items-center">
        <div class="pt-3 pb-6 flex flex-col md:flex-row w-full">
            <div class="flex items-center gap-2">
                <input v-model="searchedWord" class="p-2 border w-full rounded dark:bg-gray-900 dark:border-gray-800"
                    placeholder="Search word" type="text">
                <Button>Search</Button>
            </div>
        </div>

        <div class="mb-4 w-full">
            <div>
                <div class="p-2 border w-full flex flex-wrap rounded dark:bg-gray-900 dark:border-gray-800">
                    <div @click="handleTopics('all')" :class="{ 'bg-primary': selectedTopics.length === 0 }"
                        class="inline cursor-pointer hover:text-white hover:bg-secondary mx-2 p-1 text-sm rounded">
                        All
                    </div>

                    <div @click="handleTopics(topic)" :class="{ 'bg-primary': selectedTopics.includes(topic) }"
                        class="inline cursor-pointer hover:bg-secondary mx-2 p-1 text-sm rounded hover:text-white"
                        v-for="topic in availableTopics" :key="topic" :value="topic">
                        {{ topic }}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="rounded flex items-center justify-between border text-lg font-bold p-4 shadow-sm"
        v-if="words.length === 0">
        <div>
            <span>No word found called </span>
            <span class="text-secondary">{{ searchedWord }}</span>
        </div>

        <Button variant="outline" @click="searchedWord = ''">Reset</Button>
    </div>

    <!-- Main content -->
    <div class="flex gap-2 flex-col">
        <div class="flex items-center justify-between p-3 gap-2 rounded border dark:border-gray-800"
            v-for="(item, index) in words" :key="index">
            <div class="flex items-center gap-2">
                <Button @click="playWordWithoutAlert(`${item.en}`)" variant="ghost">
                    <div>{{ item.en }}</div>
                </Button>
                <Button @click="playWordWithoutAlert(`${item.bn}`)" variant="ghost">
                    <div>{{ item.bn }}</div>
                </Button>
            </div>
            <div class="flex items-center">
                <RouterLink :to="`/explanation?word=${item.en}`">
                    <Button class="p-1 text-sm font-normal" variant="outline">Explanation</Button>
                </RouterLink>
                <Button @click="playWord(`${item.en} ${item.bn}`)" variant="ghost">
                    <Volume2 />
                </Button>
            </div>
        </div>
    </div>
</template>
