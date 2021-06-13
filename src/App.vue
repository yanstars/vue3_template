<template>
  <!-- <img height="50" src="./assets/logo.png" /> -->
  <aside :class="`leftNav  ${openFlag ?'wd200' : 'wd50'}` ">
    <button @click="changeMsg"> {{ openFlag ?  'close' : 'open' }} </button>
  </aside>
  <section class="rightContent">
    <router-view></router-view>
  </section>
</template>

<script  setup lang="ts">
  import { reactive, toRefs, toRef, ref, h, resolveComponent , } from "vue";

  const openFlag = ref(true);
  const changeMsg = () => {
    openFlag.value = !openFlag.value;
  };
</script>

