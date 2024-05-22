const app = Vue.createApp({
    data() {
        return {
            username: '111111111111',
        }
    },
    methods: {
        updateValue(e){
            console.log(e.target.value);
            this.username = e.target.value;
        },
    },
}).mount('#app')