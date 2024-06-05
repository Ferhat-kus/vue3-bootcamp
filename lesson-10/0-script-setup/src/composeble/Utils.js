import { ref } from "vue";

export default function(){
    const title = ref("Merhaba");
const counter = ref(0);
const inc = () => counter.value++;
const alertMe = () => alert("sssssssssssssss");
return{
    title,
    counter,
    inc,
    alertMe
}
}