import {ref,watchEffect } from 'vue'
export default function(){
    
    const searchText = ref("");
    const isTypeing = ref(false);

    // watch(searchText, () => {
    //   if (searchText.value.length > 0) {
    //     isTypeing.value = true;
    //     setTimeout(() => {
    //       isTypeing.value = false;
    //     }, 1000);
    //   }
    // });
    const stop = watchEffect((onInvalidate) => {
      if (searchText.value.length > 0) {
        isTypeing.value = true;
        const typeing = setTimeout(() => {
          isTypeing.value = false;
          stop();
        }, 1000);

        onInvalidate(() => clearTimeout(typeing));
      }
    });
    return {searchText,isTypeing,stop}
}