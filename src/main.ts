import { createApp } from 'vue'
import router, { setupRouter } from './router'
import { setupStore } from './store'
import App from './App.vue'
import '@/styles/index.scss'

const app =  createApp(App)
;(async () => {
  console.log(import.meta.env)
  setupRouter(app)
  setupStore(app)
  await router.isReady()
  app.mount('#app')
})()

