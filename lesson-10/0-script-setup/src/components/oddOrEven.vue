<template>
  <div>
    <h1>{{ result }}</h1>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
const props = defineProps({
  counter: Number,
});
const emit = defineEmits(["odd-event"]);
const result = computed(() => (props.counter % 2 == 0 ? "Cift" : "Tek"));
watch(result, (result) => {
  if (result == "Tek") emit("odd-event", true);
});
</script>
