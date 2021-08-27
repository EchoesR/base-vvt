<template>
  <h1>{{ msg }}</h1>
  <p>
    <button @click="handleAdd">add</button>
    {{ count }}
  </p>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'

defineProps({
  msg: {
    type: String,
    required: true,
  },
})
const count = ref<number>(0)
const handleAdd = () => {
  count.value += 1
}
// export default defineComponent({
//   name: 'HelloWorld',
//   props: {
//     msg: {
//       type: String,
//       required: true,
//     },
//   },
//   setup: () => {
//     const count = ref(0)
//     return { count }
//   },
// })
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
