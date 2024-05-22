<template>
  <app-header></app-header>
  <div class="container">
    <h3>Bu beni ilk Projem</h3>
    <p>componentler ve vue cli</p>
    <CounterItem></CounterItem>
  </div>
</template>

<script>
import CounterItem from "@/components/CounterItem.vue";
export default {
  components: {
    CounterItem,
  },
};
</script>

<style></style>
