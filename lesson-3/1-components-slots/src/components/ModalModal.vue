<template>
  <div class="container">
    <h1 class="header"><slot name="title" /></h1>
    <hr />
    <div class="content">
      <slot name="content" />
    </div>
    <hr />
    <div class="footer text-right">
      <button class="btn btn-gray red btn-sm">kapat</button>
      <button @click="onSave" class="btn green btn-sm">kaydet</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "content", "onSave"],
};
</script>
