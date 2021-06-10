import { createApp, State } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import App from "./App.vue"
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import "./axios"
import "./index.css"

const routes = [
  { path: '/', component: () => import('./components/home.vue') },
  { path: '/about', component: () => import('./components/about.vue') },
]


// const typ = keyof type of obj
//  value  = obj[ str:typ ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const store = createStore({
  state () {
    return {
      count: 1,
      list: [],
    }
  },
  mutations: {
    increment (state: State) {
      state.count++
    },
    decrement (state: State) {
      state.count--
    },
    addItem (state: State) {
      state.list.push(0)
    }
  },
  devtools: true
})

createApp(App)
  .use(router)
  .use(store)
  .use(Antd)
  .mount('#app')

