<template>
  <div
    class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center"
  >
    <app-sidebar :editInvoice="editInvoice" :invoices="invoiceList" />
    <invoice-content :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice" />
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import appSidebar from "./components/appSidebar.vue";
import InvoiceContent from "./components/invoiceContent.vue";
const invoiceList = ref([
  {
    id: new Date().getTime(),
    contact: {
      contact_name: "demo",
      email: "demo@demo",
      city: "democity",
      zipcode: "demokode",
    },
    items: [
      {
        id: new Date().getTime(),
        name: "demo ürün",
        qty: 1,
        unit_price: 10.0,
        total_price: 10.0,
      },
    ],
  },
]);
const state = reactive({ activeInvoice: null });
const saveInvoice = (invoice) => {
  invoiceList.value.push(invoice);
};
const editInvoice = (invoice) => {
  console.log(invoice);
  state.activeInvoice = invoice;
};
</script>
