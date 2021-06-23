<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button
    type="button"
    @click="
      () => {
        state.count++
        state.test++
        ao++
      }
    "
  >
    count is: {{ state.count }} test is: {{ state.test }}
  </button>
  <p>ao is: {{ ao }}</p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive, ref } from 'vue'

defineProps({
  msg: String,
})

const state = reactive({ count: 0, test: 0 })
const ao = ref(0)
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
