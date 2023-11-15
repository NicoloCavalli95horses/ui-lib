<template>
  <div class="main">
    <h1>This is a test interface that will not be included in the build</h1>
    <h2>Use this page to test the components of the library</h2>
    <h3 id="dropdown">#Dropdown</h3>
    <DropDown v-model="dd_id" :options="options" title="Select an option" style="max-width:300px" />
    <h3 id="button">#Button</h3>
    <Btn>this is a test button</Btn>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import {
  ref
} from 'vue';
import Btn      from './components/Btn.vue';
import DropDown from './components/DropDown.vue';


// ==============================
// Consts
// ==============================
const dd_id = ref('');
const options = ['a', 'b', 'c'];

</script>

<style lang="scss" scoped>
$pad: 22px;
.main {
  width: calc(100% - ($pad * 2));
  min-height: calc(100vh - ($pad * 2));
  background-color: #222;
  padding: $pad;
  color: #ddd;
  h1, h2, h3 {
    margin: 22px 0;    
  }
}

</style>