<template>
  <!-- <Modal :onSave="onSave" :title="'Merhaba'" :content="'Lorem Lorem Lorem laborumfdasgadgda dfffffffffffffsDGASDGSGSDZ'"/> -->
  <div>
    <Modal :onSave="onSave">
      <template #title> Title </template>
      <template v-slot:content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius fuga
        officiis illum quisquam repellatdfs dolore autem quia at ipsam, unde
        quis magni, voluptate quaerat nisi sed perferendis quidem architecto.
      </template>
      <!-- <template #content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In eius fuga
        officiis illum quisquam repellat dolore autem quia at ipsam, unde quis
        magni, voluptate quaerat nisi sed perferendis quidem architecto.
      </template> -->
    </Modal>
  </div>
</template>
<script>
import Modal from "@/components/ModalModal.vue";
export default {
  components: {
    Modal,
  },
  methods: {
    onSave() {
      alert("Merhaba");
    },
  },
};
</script>
