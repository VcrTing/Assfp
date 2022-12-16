import { createApp } from 'vue'
import './funny/base.sass'

import App from './App.vue'

import router from './himm/router'
import { createPinia } from 'pinia'

const app = createApp(App)

import eos from './eos/eos'
import funny from './funny/funny'
import vue_serv from './serv/vue_serv'
app.use(router).use(createPinia()).use(eos).use(funny).use(vue_serv).mount('#app')
