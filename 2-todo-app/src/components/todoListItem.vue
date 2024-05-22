<template>
  <li class="d-flex justify-content-between align-items-center">
    <span>{{ item.text }}</span>
    <button class="sm red" @click="deletedTodo(item)">Sil</button>
  </li>
</template>
<script>
export default {
  inject: ["deletedTodo"],
  props: ["item"],
};
</script>
