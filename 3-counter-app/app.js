const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {
    //  increment() {
    //    this.counter++;
    //  },
    //  decrement() {
    //    this.counter--;
    //  },
    // getCounterResult() {
    //   console.log("counter 1 çalıştı ");
    //   return this.counter > 5 ? "Buyuk" : "Kucuk";
    // },
    // getCounter2Result() {
    //   console.log("counter 2 çalıştı ");
    //   return this.counter2 > 5 ? "Buyuk" : "Kucuk";
    // },
  },
  computed: {
    getCounterResult() {
      console.log("counter 1 çalıştı ");
      return this.counter > 5 ? "Buyuk" : "Kucuk";
    },
    getCounter2Result() {
      console.log("counter 2 çalıştı ");
      return this.counter2 > 5 ? "Buyuk" : "Kucuk";
    },
  },
  watch: {
    counter(newValue, oldValue) {
      console.log(oldValue +  " => "  + newValue);
    },
    getCounterResult(newValue, oldValue) {
        console.log(oldValue +  " => "  + newValue);
    }
  },
}).mount("#app");
