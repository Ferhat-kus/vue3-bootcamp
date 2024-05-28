<template>
  <div>
    <ul v-if="itemList.length > 0">
      <li
        v-for="(item, index) in itemList"
        :key="index"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <div v-else class="bg-red text-white">Ürün yok</div>
  </div>
</template>

<script>
export default {
  props: ["itemList"],
  inject: ["onDelete"],
  mounted() {
    console.log("Item list:", this.itemList);
  },
};
</script>
