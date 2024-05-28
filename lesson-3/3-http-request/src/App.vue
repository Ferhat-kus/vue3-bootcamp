<template>
  <div class="container">
    <h3>alişveriş listesi</h3>
    <hr />
    <AddSection />
    <ListItem :itemList="provideData.itemList"/>
    <ListCount :count="itemCount" />
  </div>
</template>

<script>
import AddSection from "@/components/AddSection.vue";
import ListItem from "@/components/ListItem.vue";
import ListCount from "@/components/ListCount.vue";
import axios from "axios";

export default {
  components: {
    AddSection,
    ListItem,
    ListCount,
  },
  data() {
    return {
      provideData: {
        itemList: [],
      },
    };
  },
  mounted() {
    axios.get("http://localhost:3000/items").then((items_response) => {
      console.log("Fetched items:", items_response.data);
      this.provideData.itemList = items_response.data || [];
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
          this.provideData.itemList.push(save_response.data);
          console.log("Saved item:", save_response);
          event.target.value = "";
          event.target.focus();
        });
    },
    onDelete(item) {
      axios
        .delete(`http://localhost:3000/items/${item.id}`)
        .then((delete_response) => {
          console.log("Deleted item:", delete_response);
          this.provideData.itemList = this.provideData.itemList.filter(
            (i) => i.id !== item.id
          );
        });
    },
  },
  computed: {
    itemCount() {
      return this.provideData.itemList.length || 0;
    },
  },
  provide() {
    return {
      itemList: this.provideData.itemList,
      onSave: this.onSave,
      onDelete: this.onDelete,
      itemCount: this.itemCount,
    };
  },
};
</script>
