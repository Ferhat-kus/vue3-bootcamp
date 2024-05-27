<template>
  <div>
    <AddSection />
    <ListSection />
  </div>
</template>
<script>
import ListSection from "@/components/ListSection.vue";
import AddSection from "@/components/AddSection.vue";
export default { components: { ListSection, AddSection } };
</script>
