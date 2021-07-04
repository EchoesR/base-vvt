<template>
  <div class="global-container">
    <router-view #default="{ Component }">
      <keep-alive>
        <component :is="Component" :key="routerKey" v-if="$route.meta.keepAlive"></component>
      </keep-alive>
      <component :is="Component" :key="routerKey" v-if="!$route.meta.keepAlive" />
    </router-view>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    const route = useRoute()
    const routerKey = computed(() => route.fullPath)
    return {
      routerKey,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
