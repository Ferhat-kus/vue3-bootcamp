<template>
  <input
    type="text"
    @keypress.enter="addNewTodo(todoText, todoText=null)"
    placeholder="Birşeyler yazınızs"
    v-model="todoText"
  />
</template>
<script>
export default {
  props: {
    addNewTodo: {
      type: Function,
    },
  },
  data() {
    return {
      todoText: null,
    };
  },
  methods: {
    // addNewTodo() {
    //   this.$emit("add-todo", this.todoText);
    //   this.todoText = null;
    // },
  },
};
</script>
