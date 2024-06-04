import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const searchText = ref("Default vlaue of seach");

  return { searchText };
});
