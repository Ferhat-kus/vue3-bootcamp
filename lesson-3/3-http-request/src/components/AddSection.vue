<template>
  <div>
    <div class="my-2">
      <input type="text" @keypress.enter="onSave"  placeholder="Ne alıcaksın" />
    </div>
  </div>
</template>
<script>
export default {
  inject: ["onSave"],
};
</script>
