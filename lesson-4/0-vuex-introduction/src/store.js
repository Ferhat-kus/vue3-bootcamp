import { createStore } from "vuex";


const store = createStore({
  state: {
    person: {
      name: "Ferhat",
      lname: "Kuş",
      age: 17.5,
    },
    theme: "dark",
    permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
});


export default store;
