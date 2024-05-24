<template>
  <div class="container">
    <h3 class="text-center">todo app</h3>
    <hr class="my-2" />
    <addSection :addNewTodo="addTodo" />
    <ListSection />
  </div>
</template>
<script>
import addSection from "@/components/addSection.vue";
import ListSection from "@/components/ListSection.vue";
export default {
  data() {
    return {
      provideData: {
        todoList: [
          { id: 1, text: "merhabalar 1" },
          { id: 2, text: "merhabalar 2" },
          { id: 3, text: "merhabalar 3" },
        ],
      },
    };
  },
  provide() {
    return {
      provideData: this.provideData,
      deletedTodo: this.deletedTodo,
    };
  },
  components: {
    addSection,
    ListSection,
  },
  methods: {
    deletedTodo(todoItem) {
      this.provideData.todoList = this.provideData.todoList.filter(
        (t) => t !== todoItem
      );
    },
    addTodo(todo) {
      this.provideData.todoList.push({
        id: new Date().getTime(),
        text: todo,
      });
    },
  },
};
</script>
