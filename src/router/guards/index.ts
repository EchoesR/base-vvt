import type { Router } from 'vue-router'
import createProgressGuard from './progressGuard'

export default (router: Router) => {
  createProgressGuard(router)
  router.beforeEach((to, from) => {
    console.log('beforeEach')
    return true
  })
  router.afterEach(() => {
    console.log('afterEach')
  })
}
