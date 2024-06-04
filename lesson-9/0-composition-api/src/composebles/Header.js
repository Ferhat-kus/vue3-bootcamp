import { computed, ref } from "vue";
export default function () {
  const title = ref("Merhaba");
  const titleLenghtMessage = computed(
    () => title.value.length + " adet karkter var"
  );

  return { title, titleLenghtMessage };
}
