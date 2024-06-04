<template>
  <h3>{{ title }}</h3>
  <input v-model="title" type="text" />
  <h3>Toplam {{ titleLenghtMessage }}</h3>

  <button @click="toggleIt">toggle</button>
  <p v-if="show">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ea eius
    corrupti nemo optio similique, voluptates maiores fugiat, adipisci harum
    asperiores, ex molestiae eligendi numquam. Odit aspernatur nesciunt vel non!
  </p>
  <hr />
  <button @click="counter++">{{ counter }} {{ oddOrEven }}</button>
  <hr />
  <input type="text" v-model="searchText" />
  <p v-if="isTypeing">Yazıyor...</p>
</template>

<script>
import Counter from "./composebles/Counter";
import Header from "./composebles/Header";
import Search from "./composebles/Search";
import Toggle from "./composebles/Toggle";

export default {
  setup() {
    const { counter, oddOrEven } = Counter();
    const { title, titleLenghtMessage } = Header();
    const { searchText, isTypeing, stop } = Search();
    const { toggleIt, show } = Toggle();
    return {
      title,
      show,
      toggleIt,
      titleLenghtMessage,
      counter,
      oddOrEven,
      searchText,
      isTypeing,
    };
  },
};
</script>
