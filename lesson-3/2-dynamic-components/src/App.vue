<template>
  <div class="container">
    <div class="d-flex justify-content-between">
      <button class="red" @click="activeComponent = 'red'">Red</button>
      <button class="green" @click="activeComponent = 'green'">Green</button>
      <button class="blue" @click="activeComponent = 'blue'">Blue</button>
    </div>
    <!-- <RedRed v-if="activeComponent === 'red'" class="mb-2" />
    <GreenGreen v-if="activeComponent === 'green'" class="mb-2" />
    <BlueBlue v-if="activeComponent === 'blue'" class="mb-2" /> -->
    {{ activeComponent }}
    <keep-alive>
      <component :is="activeComponent" :msg="'Red 2'">
        <h3 class="text-white">Green Components</h3>
      </component>
    </keep-alive>
  </div>
</template>

<script>
import Red from "@/components/RedRed.vue";
import Green from "@/components/GreenGreen.vue";
import Blue from "@/components/BlueBlue.vue";

export default {
  components: {
    Red,
    Green,
    Blue,
  },
  data() {
    return {
      activeComponent: "red",
    };
  },
};
</script>
