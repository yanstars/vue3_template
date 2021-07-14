<template>
  <layout>
    <template #header>
      <router-link class="button"
                   to="/about">go to about</router-link>
    </template>
    <template #content>
      <a-table :dataSource="list"
               :columns="columns" />
    </template>
    <template #footer>
      <p>this is page footer</p>
    </template>
  </layout>
</template>

<script setup lang="ts">
  import { useStore } from "vuex"
  import layout from "./layout"
  import { ref, reactive, defineComponent, defineProps, computed } from "vue"
  import { getList } from "../axios"
  const list = computed(() => store.state.list)
  const store = useStore()

  const columns = [
    { title: "许序号", dataIndex: "key", key: "key" },
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "NUM", dataIndex: "num", key: "num" },
  ]
  getList()
    .then((result) => {
      store.commit('addItem', result.data)
    })
    .catch((err) => { })
    .finally(() => { })
  // const props = defineProps({
  //   msg: String
  // })
</script>

