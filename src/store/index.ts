import type { App } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  modules: {},
})

export default store

export const setupStore = (app: App) => {
  app.use(store)
}
