<template>
  <div class="container">
    <h3>alişveriş listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" @keypress.enter="onSave" placeholder="Ne alıcaksın" />
    </div>
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
    <div v-else class="bg-red  text-white" >Ürün yoktur</div>
    <small class="text-red d-flex justify-content-end mt-2 align-items-center"
      >{{ itemCount }} tane var</small
    >
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      itemList: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((items_response) => {
      console.log(items_response.data);
      this.itemList = items_response.data || [];
    });
  },
  methods: {
    onSave(event) {
      const saveObject = {
        title: event.target.value,
        created_at: new Date(),
        completed: false,
      };
      axios
        .post("http://localhost:3000/items", saveObject)
        .then((save_response) => {
          this.itemList.push(save_response.data);
          console.log(save_response);
          (event.target.value = ""), event.target.focus();
        });
    },
    onDelete(item) {
      axios
        .delete(`http://localhost:3000/items/${item.id}`)
        .then((delete_response) => {
          console.log(delete_response);
          this.itemList = this.itemList.filter((i) => i.id !== item.id);
        });
    },
  },
  computed: {
    itemCount() {
      return this.itemList.length || 0;
    },
  },
};
</script>
