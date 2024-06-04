<template>
  <div>
    <section>
      <input
        placeholder="Nedir?"
        @keydown.enter="newItem"
        type="text"
        class="w-full p-1 bg-gray-700 border border-gray-400 rounded-md outline-none"
      />
    </section>
  </div>
</template>
<script>
export default {
  props: {
    AddTodo: Function,
  },
  setup(props) {
    const newItem = (event) => {
      props.AddTodo(event.target.value);
      event.target.value = ''
    };
    return { newItem };
  },
};
</script>
