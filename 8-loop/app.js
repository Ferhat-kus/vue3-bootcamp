const app = Vue.createApp({
  data() {
    return {
      todo: "",
      todoList: [
        { id: 1, text: "Student 1", completed: false },
        { id: 2, text: "Student 2", completed: false },
        { id: 3, text: "Student 3", completed: false },
        { id: 4, text: "Student 4", completed: false },
        { id: 5, text: "Student 5", completed: false },
        { id: 6, text: "Student 6", completed: false },
      ],
    };
  },
  //  created() {
  //   this.todoList  = localStorage.getItem("todos")
  //  },
  methods: {
    addTodo(event) {
      console.log(event.target.value);
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
        completed: false,
      });
      event.target.value = "";
    },
    deleteTodo(todoItem) {
      this.todoList = this.todoList.filter((item) => item !== todoItem);
    },
  },
  computed: {
    completedItemCount() {
      return this.todoList.filter((t) => t.completed).length
    },
    uncompletedItemCount() {
      return this.todoList.filter((t) => !t.completed).length
    },
  },
}).mount("#app");
