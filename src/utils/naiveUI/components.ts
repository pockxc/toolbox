import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

import { create, NButton, NConfigProvider } from 'naive-ui'
import { App } from 'vue'

const naive = create({
  components: [NButton, NConfigProvider]
})

function initNaiveUI(app: App) {
  app.use(naive)
}

export default initNaiveUI
