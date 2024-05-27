<template>
  <div>
    <button @click="newItem(new Date().getTime())">Set Data</button>
  </div>
</template>
<script>
export default { inject: ["newItem"] };
</script>
