<template>
  <div>
    <ul>
      <li v-for="(user, i) in userList" :key="i">{{ user }}</li>
    </ul>
  </div>
</template>
<script>
export default {
    inject: ["userList"],
}
</script>
