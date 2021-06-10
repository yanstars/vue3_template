<template>
  <img height="50" src="./assets/logo.png" />
  <p>首页</p>
  <hr />
  <router-view></router-view>
</template>

<script  setup lang="ts">
import { reactive, toRefs, toRef, ref, render, createVNode } from "vue";
import HelloWorld from "./components/home.vue";
let msg = 'ssss'
ref: testMsg = 'sssss'
const changeMsg = () => {
  msg = 'aaaaaaa'
  testMsg = 'zzzz'
}

</script>

