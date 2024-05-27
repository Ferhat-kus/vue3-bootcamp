<template>
  <div class="container">
    <UserSection />
  </div>
</template>
<script>
import UserSection from "@/components/UserSection.vue";
export default {
  components: { UserSection },
  data() {
    return { provideData: { userData: ["Abuzer", "Abuzer1", "Abuzer1"] } };
  },
  methods: {
    newItem(item) {
      this.provideData.userData.push(item);
    },
  },
  provide() {
    return { userList: this.provideData.userData, newItem: this.newItem };
  },
};
</script>
