<template>
  <div>
    <small class="text-red d-flex justify-content-end mt-2 align-items-center">
      {{ count }} tane var
    </small>
  </div>
</template>
<script>
export default {
  props:["count"]
}
</script>