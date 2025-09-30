import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//引入element plus
import ELementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//引入windicss
import 'virtual:windi.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)


//注册Element Plus插件
app.use(ElementPlus)

app.mount('#app')
