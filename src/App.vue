<template>
  <DropDown v-model="dd_id" :options="options" title="select an option" />
  <div style="margin:20px;" />
  <Btn>this is a test button</Btn>
</template>

<script setup>
import { ref } from 'vue';
import Btn from './components/Btn.vue'
import DropDown from './components/DropDown.vue'

const dd_id = ref('');
const options = ['a', 'b', 'c'];

</script>


<style scoped>

</style>
