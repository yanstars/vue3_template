<template >
  <button @click="emit('myClick', 1)">{{ text }}</button>
</template>
<script lang="ts" setup>

import { defineProps, toRefs, defineEmit, ref, reactive, } from "vue"
const props = defineProps({
  text: String,
})
const age = ref(0)

const emit = defineEmit(['myClick'])
const { text } = toRefs(props)


</script>
<style >
</style>