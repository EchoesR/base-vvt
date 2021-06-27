import type { Router } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export default function createProgressGuard(router: Router) {
  router.beforeEach(() => {
    NProgress.start()
    return true
  })
  router.beforeEach(() => {
    NProgress.done()
  })
}