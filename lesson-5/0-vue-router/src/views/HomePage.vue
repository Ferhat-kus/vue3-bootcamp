<template>
  <div>
    <h1>Home</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum enim
      repudiandae consequatur. Iste, reprehenderit odio officiis labore
      explicabo animi vero suscipit minima, incidunt harum laboriosam tempore
      exercitationem neque tenetur necessitatibus!
    </p>
    <input type="text" @keypress.enter="goToDetail" />
  </div>
</template>
<script>
export default {
  methods: {
    goToDetail(e) {
      // this.$router.push(`/detail/${e.target.value}`);
      this.$router.push({
        name:"DetailPage",
        params: {
          userId: e.target.value
        },
        query:{
          type: "Yönetici",
          user: "Ferhat",
        }
      })
    },
  },
};
</script>
