<template>
  <div class="main">
    <h1>Test interface (not included in the build)</h1>
    <h2>Use this page to test the components of the library</h2>

    <h3 id="button">Button</h3>
    <div class="flex-center start">
      <p class="r-24">Default button:</p>
      <Btn>click me</Btn>
    </div>
    <div class="flex-center start top-12">
      <p class="r-24">No background:</p>
      <Btn :def="false">click me</Btn>
    </div>
    <div class="flex-center start top-12">
      <p class="r-24">Disabled button:</p>
      <Btn :def="true" :disabled="true">click me</Btn>
    </div>
    <div class="flex-center start top-12">
      <p class="r-24">Round button:</p>
      <Btn :round="true" :def="true">
        <svg><use href="#plus"></use></svg>
      </Btn>
    </div>

    <h3 id="switch-btn">Switch button</h3>
    <SwitchBtn v-model:active="switch_btn"><p>Status: {{ switch_btn }}</p></SwitchBtn>

    <h3 id="dropdown">Dropdown</h3>
    <DropDown v-model:active_id="dropdown_id" :items="dropdown_items" style="width:300px;" />

  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import {
  ref,
} from 'vue';

import Btn       from '../components/Btn.vue';
import DropDown  from '../components/DropDown.vue';
import SwitchBtn from '../components/SwitchBtn.vue';


// ==============================
// Consts
// ==============================
const dropdown_id = ref( 1 );
const dropdown_items = [
  { id: 1, val: 'Option A'},
  { id: 2, val: 'Option B'},
  { id: 3, val: 'Option C'},
  { id: 4, val: 'Option D'},
  { id: 5, val: 'Option E'},
  { id: 6, val: 'Option F'},
  { id: 7, val: 'Option G'}
];
const switch_btn = ref( false );

</script>

<style lang="scss" scoped>
$pad: 22px;
.main {
  width: calc(100% - ($pad * 2));
  min-height: 100vh;
  background-color: var(--black);
  padding: $pad;
  h1, h2, h3 {
    margin: 22px 0;    
  }
}

</style>