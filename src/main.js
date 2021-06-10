// @ts-ignore
import App from './App.vue'
import { createApp } from 'vue'
import { registerGlobalComponents } from './registerGlobalComponents'
import { router } from './router'
import 'bootstrap'
import 'jquery'
import 'popper.js'

const root = createApp(App)
registerGlobalComponents(root)

root
  .use(router)
  .mount('#app')
