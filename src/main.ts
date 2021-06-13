import { createApp, State } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import App from "./App.vue"
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import "./axios"
import "./index.scss"

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

const app = createApp(App)
  .use(router)
  .use(store)
  .use(Antd)

// TODO mount之前完成config配置

// app.config.errorHandler = (err, vm, info) => {
// 处理错误
// `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
// }

// app.config.warnHandler = function(msg, vm, trace) {
// `trace` 是组件的继承关系追踪
// }


// app.config.globalProperties.foo = 'bar'


// app.config.isCustomElement = tag => tag.startsWith('ion-')


// app.config.optionMergeStrategies.hello = (parent, child, vm) => {
// return `Hello, ${child}`
// }


// app.config.performance = true



app.mount('#app')