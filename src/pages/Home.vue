<script lang="ts" setup>
import TextCard from '../components/TextCard.vue';
import { communicationSamples } from '../lib/texts';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useSearchStore } from '@/stores/search';
import Button from '@/components/Button.vue';

const { hasSearched } = storeToRefs(useSearchStore());
const { setHasSearched } = useSearchStore();

const route = useRoute();
const searchText = computed(() => route.query.search as string | undefined);

const filteredSamples = computed(() => {
    if (!searchText.value) return communicationSamples;
    const searchTerms = searchText.value.toLowerCase().split(' ');
    return communicationSamples.filter((sample) =>
        searchTerms.some(
            (term) =>
                sample.text.toLowerCase().includes(term) ||
                sample.category.toLowerCase().includes(term)
        )
    );
});
</script>

<template>
    <div class="border p-4 mb-4 rounded dark:border-gray-700 flex items-center justify-between" v-if="hasSearched">
        <p>Searched items for : <span class="font-bold">{{ searchText }}</span></p>

        <Button @click="setHasSearched(false)" variant="ghost">
            <span class="pi pi-times"></span>
        </Button>
    </div>
    <div class="grid md:grid-cols-2 gap-2">
        <div v-for="sample in filteredSamples" :key="sample.id">
            <TextCard :key="sample.id" :id="sample.id" :text="sample.text" :category="sample.category" />
        </div>
    </div>
</template>