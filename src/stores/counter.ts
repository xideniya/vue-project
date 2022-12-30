import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => {
    return {
      counter: 0,
      name: "jack",
      age: 18,
    };
  },
  getters: {
    doubleCount: (state) => {
      return state.counter * 2;
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
