<template>
  <div class="bg-green">
    <slot />
  </div>
</template>
<script>
export default {
    mounted() {
        console.log("green MOUNTED")
    },
}
</script>