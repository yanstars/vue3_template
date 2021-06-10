<template>
  <router-link to="/">go to home</router-link>
  <p>this page about</p>
  <Bar name="zhangsan"
       msg="this is a text msg"></Bar>
  <p> store,state {{ store.state.count }}</p>
  <div :class="test">

    <a-button type="primary"
              @click="addHandle">+</a-button>
    <a-button type="danger"
              @click="deHadlde">-</a-button>
  </div>

</template>

<script  setup lang="ts">
  import style from "../styles/style.module.scss";
  import { useStore } from "vuex";
  import { Bar } from "./testJsx";
  const store = useStore();
  const test = style.background;


  // const props = defineProps({
  //   msg: String
  // })

  const addHandle = () => {
    store.commit("increment");
  };
  const deHadlde = () => {
    store.commit("decrement");
  };
</script>
