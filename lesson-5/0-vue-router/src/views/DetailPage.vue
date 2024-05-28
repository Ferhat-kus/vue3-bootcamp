<template>
  <div>
    <h1> {{ $route.params.userId }}</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut animi quas
      consectetur fuga, explicabo adipisci at natus placeat harum, sapiente
      veritatis repellendus quod dicta nam perferendis laboriosam distinctio
      molestiae rem! - {{ $route.params.userId }}
    </p>
    <button @click="goBack">Geri</button>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log(this.$route);
  },
  methods: {
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
