import { createApp } from 'vue'
import './funny/base.sass'

import App from './App.vue'

import router from './himm/router'

const app = createApp(App);

import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persist'
const store = createPinia(); store.use( persist )

import eos from './eos/eos'
import funny from './funny/funny'
import vue_serv from './serv/vue_serv'
app.use(router).use(createPinia()).use(eos).use(funny).use(vue_serv).mount('#app')
