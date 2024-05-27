<template>
  <div class="bg-blue">Blue</div>
  <input type="text" />
</template>
<script>
export default {
  mounted() {
    console.log("blue MOUNTED");
  },
  activated() {
    console.log("Active Blue");
  },
  deactivated() {
    console.log("deactive Blue");
  },
};
</script>
