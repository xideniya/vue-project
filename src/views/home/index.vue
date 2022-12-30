<template>
  <div
    class="text-purple-600 text-4xl bg-blue-500 w-60 rounded-2xl home ring-4 ring-indigo-300 bg-opacity-50 shadow-2xl"
  >
    home
  </div>
  <div>{{ mainStore.counter }}</div>
  <div>{{ mainStore.doubleCount }}</div>
  <div>{{ mainStore.age }}</div>
  <div>{{ mainStore.name }}</div>
  <button
    @click="plus"
    class="text-purple-600 text-4xl bg-blue-500 w-60 rounded-2xl home ring-4 ring-indigo-300 bg-opacity-50 shadow-2xl"
  >
    +1
  </button>
  <button
    @click="changeAll"
    class="text-purple-600 text-4xl bg-blue-500 w-60 rounded-2xl home ring-4 ring-indigo-300 bg-opacity-50 shadow-2xl"
  >
    改变所有
  </button>
  <component :is="Jet"></component>
</template>

<script setup lang="ts">
import Jet from "@/components/jet/index.vue";
import { useMainStore } from "@/stores/counter";
import { onMounted } from "vue";
import dayjs from "dayjs";
onMounted(() => {
  let now = dayjs().format("YYYY-MM-DD HH:mm:ss");
  console.log(now);
});
const mainStore = useMainStore();
const plus = () => {
  mainStore.increment();
};
const changeAll = () => {
  mainStore.$patch({
    name: "tom",
    age: 99,
    counter: 10,
  });
};
</script>

<style scoped>
.home {
  text-align: center;
  margin: 30px;
}
</style>
