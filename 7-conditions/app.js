const app = Vue.createApp({
  data() {
    return {
      showContainer: false,
      counter: 0,
    };
  },
  computed: {
    counterClassesBox() {
      return {
        "bg-black  ": this.counter == 0,
        "bg-success": this.counter > 0,
        "bg-danger ": this.counter < 0,
      };
    },
  },
}).mount("#app");
