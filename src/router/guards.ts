import { done, start } from 'nprogress'
import type { Router } from 'vue-router'

export function setProgressBar(router: Router) {
  router.beforeEach((to, from) => {
    if (to.path !== from.path)
      start()
  })
  router.afterEach(() => {
    done()
  })
}

// export function userAccess(router: Router) {
//   // router.beforeEach((to) => {
// //   if (getItem('user')?.user?.token) {
// //     if (to.meta.isAuthPage)
// //       return { name: 'Home' }
// //   }
// //   else if (!to.meta.isAuthPage) {
// //     return { name: 'Auth' }
// //   }
// // })
// }
