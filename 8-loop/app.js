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
      // this.todoList.push(this.todo);
      // this.todo = "";
      // VİDODAKİ YAPIM
      console.log(event.target.value);
      this.todoList.push(event.target.value);
      event.target.value = "";
    },
    deleteTodo(id) {
      const deteledItem = this.todoList.filter((id) => this.todoList[id]);
      console.log("Silinen Öğe", this.todoList[id]);
    },
  },
}).mount("#app");
