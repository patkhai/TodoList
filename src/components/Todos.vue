<template>
  <div>
    <div v-bind:key="task.id" v-for="task in todos">
      <TodoItem v-bind:task="task" v-on:del-todo="$emit('del-todo', task.id)"/>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },
  props: ["todos"]
};
</script>

<style scoped>
</style>