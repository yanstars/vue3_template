<template>
  <router-link to="/about">go to about</router-link>
  <p>this is page home</p>
  <a-table :dataSource="list" :columns="columns" />
  <!-- <p :key="index" v-for="item,index in list">{{ item }}</p> -->
</template>

<script setup lang="ts">
import { ref, reactive, defineComponent, defineProps } from 'vue'
import { getList } from "../axios"
const list = reactive<Array<object>>([])
const columns = [{ title: '许序号', dataIndex: 'key', key: 'key', }, { title: 'ID', dataIndex: 'id', key: 'id', }, { title: '子产品', dataIndex: 'childProductName', key: 'childProductName', },]
getList().then((result) => {
  list.push(...result.data.data.list.map((item: object, index: number) => ({
    ...item, key: index
  })))
}).catch((err) => {

});

// const props = defineProps({
//   msg: String
// })

</script>

