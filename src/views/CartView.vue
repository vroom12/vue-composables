<script setup lang="ts">
import { useCart } from '@/composables/useCart';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const { cart, updateQuantity, removeFromCart, isCartEmpty } = useCart();
const route = useRoute();
// console.log(route.query);
// const emit = defineEmits(['getrouteid']);
const routeId = ref(`${route.query.id}`);
// let getrouteid = (id: string) => {
//   emit('getrouteid', id);
// };

// console.log(typeof typeof routeid.value === typeof route.query.id);
</script>
<template>
  <div class="about">
    <h1>My Cart</h1>
    <div v-if="isCartEmpty">
      <p>Your cart is empty.</p>
    </div>
    <ul v-if="!isCartEmpty">
      <li v-for="item in cart.items">
        <div>
          <h3>{{ item.name }} ¥ {{ item.price }}{{ routeId }}</h3>
          <el-input-number :modelValue="item.quantity" @update:modelValue="(quantity: number) => updateQuantity(item, quantity)"></el-input-number>
          <el-button @click="removeFromCart(item)">Remove</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
