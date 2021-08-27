<template>
  <div class="flex justify-center hover:bg-red-500 transition-all duration-300">
    home
    <input v-model="str" type="text" />
    <Message :message="str" />
    <HelloWorld :msg="str" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import Message from '@/components/Message'
import HelloWorld from '@/components/HelloWorld.vue'

export default defineComponent({
  components: {
    Message,
    HelloWorld,
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
