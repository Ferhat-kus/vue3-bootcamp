<template>
  <div>
    <section class="mt-4">
      <TodoListItem @delete-event="$emit('delete-event',$event)" v-for="todoItem in todoList"  :key="todoItem.id" :todo="todoItem"/>
      <small>{{ todoLength }} adet item var</small>
      <Summary :todoList="todoList" />
    </section>
  </div>
</template>

<script>
import TodoListItem from "./todoListItem.vue"; 
import Summary from "./summary.vue";
import { computed } from "vue";
export default {
  components: {
    TodoListItem,
    Summary,
  },
  props: {
    todoList: Array,
  },
  setup(props) {
    const todoLength = computed(() => props.todoList.length);
    return { todoLength };
  },
};
</script>
