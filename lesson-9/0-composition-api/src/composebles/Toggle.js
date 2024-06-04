import {ref} from 'vue'
export default function (){
    const show = ref(false);
    // const titleLenghtMessage = computed(() => {
    //   return title.value.length + ' adet karkter var'
    // })
    const toggleIt = () => {
      show.value = !show.value;
    };
    return {toggleIt, show}
}