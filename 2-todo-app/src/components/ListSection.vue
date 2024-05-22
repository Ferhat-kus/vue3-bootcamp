<template>
  <todoList />
  <resultsBar :item="provideData.todoList.length" />
</template>
<script>
import todoList from "@/components/todoList.vue";
import resultsBar from "@/components/resultsBar.vue";
export default {
  inject: ["provideData"],
  props: {
    todoList: {
      type: Array,
      required: true,
    },
  },
  components: {
    todoList,
    resultsBar,
  },
};
</script>
