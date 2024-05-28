<template>
    <div class="bg-red">
        <h3 class="text-white">{{ msg }}</h3>
    </div>
</template>
<script>
export default {
    props:["msg"],
    mounted() {
        console.log("RED MOUNTED")
    },
}
</script>