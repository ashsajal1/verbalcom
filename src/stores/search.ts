import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const searchText = ref("");
  const hasSearched = ref(false);
  const setHasSearched = (value: boolean) => {
    hasSearched.value = value
  }

  return { searchText, setHasSearched, hasSearched };
});
