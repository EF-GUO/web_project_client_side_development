import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入element plus图标库
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入windicss
import 'virtual:windi.css'

//i18n
import {i18n} from "@/i18n"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(i18n)

//注册element plus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
