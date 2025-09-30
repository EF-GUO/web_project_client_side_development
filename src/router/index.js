import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',                // 访问路径，例如 http://localhost:5173/
      name: 'home',             // 路由的名字，可以用来编程式导航
      component: HomeView,      // 对应的页面组件
      meta: { requiresAuth: true } // 自定义元信息：需要登录才能访问
    },
    {
      path: '/login',           // 登录页面路径，例如 http://localhost:5173/login
      name: 'login',            // 路由名字
      component: () => import('../views/LoginView.vue') // 懒加载组件（按需加载）
    },
    {
      path: '/register',        // 注册页面路径
      name: 'register',
      component: () => import('../views/RegisterView.vue') // 注册页（你需要自己新建）
    }

  ],
})


// ---------------- 路由守卫 ----------------
router.beforeEach((to) => {
  const auth = useAuthStore()

  // 如果目标路由需要登录，但是当前没有 token
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    // 跳转到登录页，并带上原始目标地址（方便登录后重定向）
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})


export default router
