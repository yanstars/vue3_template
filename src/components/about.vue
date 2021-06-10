<template>
  <router-link to="/">go to home</router-link>
  <p>this page about</p>
  <Bar name="zhangsan" msg="this is a text msg"></Bar>
  <p>store,state {{ store.state.count }}</p>
  <a-button type="primary" @click="addHandle">+</a-button>
  <a-button type="danger" @click="deHadlde">-</a-button>
</template>

<script  setup lang="ts">
import { useStore } from 'vuex'
import { Bar } from "./testJsx"
const store = useStore()


// const props = defineProps({
//   msg: String
// })

const addHandle = () => {
  store.commit('increment')
}
const deHadlde = () => {
  store.commit('decrement')
}

</script>
