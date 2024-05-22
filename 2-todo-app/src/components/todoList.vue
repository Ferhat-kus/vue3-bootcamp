<template>
  <ul>
    <todoListItem
      v-for="item in provideData.todoList"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>
<script>
import todoListItem from "@/components/todoListItem.vue";
export default {
  inject: ["provideData"],
  components: {
    todoListItem,
  },
};
</script>
