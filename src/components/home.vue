<template>
  <layout>
    <template #header>
      <router-link class="button" to="/about">go to about</router-link>
    </template>
    <template #content>
      <a-table :dataSource="list" :columns="columns" />
    </template>
    <template #footer>
      <p>this is page footer</p>
    </template>
  </layout>
</template>

<script setup lang="ts">
import layout from "./layout";
import { ref, reactive, defineComponent, defineProps } from "vue";
import { getList } from "../axios";
const list = reactive<Array<object>>([]);

  
const columns = [
  { title: "许序号", dataIndex: "key", key: "key" },
  { title: "ID", dataIndex: "id", key: "id" },
  { title: "子产品", dataIndex: "childProductName", key: "childProductName" },
];
getList()
  .then((result) => {
    list.push(
      ...result.data.data.list.map((item: object, index: number) => ({
        ...item,
        key: index,
      }))
    );
  })
  .catch((err) => { });

  // const props = defineProps({
  //   msg: String
  // })
</script>

