<template>
  <div @click="getnum(number)">qwe</div>
  <ul v-for="(item, index) in items" :key="index">
    <li>{{ item.title }}{{ item._id }}</li>
  </ul>
</template>
<script lang="ts" setup>
import observer from '../composables/eventBus/observer';
import { ref, getCurrentInstance, reactive } from 'vue';
import http from '../composables/axios';
import type { Item } from '../composables/type';
const emit = defineEmits(['getnum']);
const getnum = (num: number) => {
  number.value++;
  emit('getnum', num);
};
const number = ref<number>(0);
const string = ref<string>('test');
let items = ref<Item[]>();
const getTitle = async () => {
  const res = await http.get('/posts');
  return res;
  // const resPut = await http.put('/posts/6323eefa4b72f1cca59b7a7c', { title: '12' });
};
const res = getTitle();
res.then((res) => {
  items.value = res.data.data;
});

observer.dispatch('test', string);
</script>

<style lang=""></style>
