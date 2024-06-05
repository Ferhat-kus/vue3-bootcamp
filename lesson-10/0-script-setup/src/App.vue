<template>
  <div>
    <h3>{{ title }}</h3>
    <input v-model="title" type="text" />
    <button @click="inc">{{ counter }}</button>
    <hr />
    <oddOrEven @odd-event="alertMe" :counter="counter" />
    <hr />
    <h1>User</h1>
    <input v-model="state.personal.name" type="text" />
    <input v-model="state.personal.lname" type="text" />
    {{ state.personal.name }} - {{ state.personal.lname }}
  </div>
</template>

<script setup>
import oddOrEven from "./components/oddOrEven.vue";
import Utils from "./composeble/Utils.js";
const { title, counter, inc, alertMe } = Utils();
import { reactive } from "vue";
const state = reactive({
  personal: {
    name: "abuzer",
    lname: "zühtü",
  },
});
</script>
