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
</template>

<script>
import { computed, ref } from "vue";
export default {
  // data() {
  //   return {
  //     title: "Bu bir başlık Abi"
  //   }
  // },
  setup() {
    const title = ref("Merhaba");
    const show = ref(false);
    // const titleLenghtMessage = computed(() => {
    //   return title.value.length + ' adet karkter var'
    // })
    const titleLenghtMessage = computed(() => title.value.length + ' adet karkter var')
    const toggleIt = () => {
      show.value = !show.value
    }
    
    return {
      title,
      show,
      toggleIt,
      titleLenghtMessage,
    };
  },
};
</script>
