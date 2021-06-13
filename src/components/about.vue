<template>

  <div>
    <Bar name="zhangsan"
         :list="list"
         msg="this is a text msg"></Bar>
  </div>

  <!-- <router-link to="/">go to home</router-link> -->
  <!-- <p>this page about</p> -->

  <!-- <p> store,state {{ store.state.count }}</p>
  <div :class="test">
    <a-button type="primary"
              @click="addHandle">+</a-button>
    <a-button type="danger"
              @click="deHadlde">-</a-button>
  </div>-->
</template>

<script   lang="ts">
  import { renderList, h, defineComponent } from "vue";
  import { Bar } from "./testJsx";
  import Layout from "./layout";
  import { debug } from "console";
  const list = h("p", "this is a slot msg  from parent");

  // const list = renderList([1, 2, 3, 4], (item, index) => h('p', { key: 'item' }, item))
  export default defineComponent({
    components: {
      Bar,
      Layout,
    },

    data() {
      return {
        list: list,
      };
    },

    setup() {
      // TODO   探究模版渲染方式 ？
      // TODO   vhtml ???

      return {
        // list,
      };

      //返回 function 时 ,和render合并   并优先解析render函数
      // 所以 tempalte中的内容不会解析
      // return () => list
    },
  });

  // script setup  中可用

  // import style from "../styles/style.module.scss";
  // import { useStore } from "vuex";
  // const store = useStore();
  // const test = style.background;

  // const props = defineProps({
  //   msg: String
  // })

  // const addHandle = () => {
  //   store.commit("increment");
  // };
  // const deHadlde = () => {
  //   store.commit("decrement");
  // };
</script>
