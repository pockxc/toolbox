import { createApp } from 'vue'
import antd from 'ant-design-vue'
import App from './App.vue'

import router from './router/index'
import store from './store/index'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(router).use(store).use(antd).mount('#app')
