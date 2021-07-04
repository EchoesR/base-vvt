<template>
  <div class="flex justify-center hover:bg-red-500 transition-all duration-300">
    home
    <input v-model="str" type="text" />
    <Message :message="str" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Message from '@/components/Message'

export default defineComponent({
  components: {
    Message,
  },
  setup() {
    return {
      str: ref(''),
    }
  },
})
</script>
<style lang="scss" scoped>
.home {
  color: $text-black;
  @include flex-center;
}
</style>
