<template>
  <div class="card border p-2">
    <div class="d-flex justify-content-end">
      <button
        class="btn btn-sm btn-primary"
        @click="$router.push({ name: 'NewBookmark' })"
      >
        + Yeni Ekle
      </button>
    </div>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Başlık</th>
          <th scope="col">URL</th>
          <th scope="col">Sil</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in bookmarks" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ item.title }}</td>
          <td>
            <a :href="item.url" target="_blank ">{{ item.url }}</a>
          </td>
          <td>
            <button class="btn btn-sm btn-danger" @click="deleteItem(item)">
              Sil
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarks: [],
    };
  },
  created() {
    this.$appAxios.get("/bookmarks").then((get_response) => {
      this.bookmarks = get_response.data || [];
    });
  },
  methods: {
    deleteItem(item) {
      this.$appAxios.delete(`/bookmarks/${item.id}`).then((delete_response) => {
        console.log(delete_response);
        if (delete_response.status === 200) {            
            this.bookmarks = this.bookmarks.filter((i) => i.id !== item.id);
        }
      });
    },
  },
};
</script>
