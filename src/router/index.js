import { createRouter, createWebHistory } from 'vue-router'

//布局页
import IndexView from '@/views/IndexView.vue'


//内容页面
const DaKaJingDianView = () => import('@/views/contents/DaKaJingDianView.vue')
const MeiShiTuiJianView = () => import('@/views/contents/MeiShiTuiJianView.vue')
const DiTieXianLuTuView = () => import('@/views/contents/DiTieXianLuTuView.vue')



//实验页面
import ExperimentView01 from '@/views/ExperimentView01_html.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',                // 访问路径，例如 http://localhost:5173/
      name: 'index',             // 路由的名字，可以用来编程式导航
      component: IndexView,      // 对应的页面组件
      children : [
        { path: '', redirect: '/daka' },  // 默认打开第一个页面
        { path: 'daka', name: 'daka', component: DaKaJingDianView },
        { path: 'meishi', name: 'meishi', component: MeiShiTuiJianView },
        { path: 'ditie', name: 'ditie', component: DiTieXianLuTuView },
      ]

    },
    // {
    //   path:'/experiment_01',
    //   name:'experiment_01',
    //   component:ExperimentView01,
    // }
  

  ],
})


export default router
