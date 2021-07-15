import { createApp, App as appType } from 'vue'

import { initNaiveUI } from './utils/naiveUI'

import router from './router/index'
import store from './store/index'

import App from './App.vue'
import './styles/index.less'

const instance = createApp(App)

function bootstrap(app: appType) {
  app.use(router)
  app.use(store)
  initNaiveUI(app)
  app.mount('#app')
}

bootstrap(instance)
