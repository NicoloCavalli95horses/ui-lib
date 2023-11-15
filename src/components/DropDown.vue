<template>
  <label> {{ title }}<template v-if="is_required">*</template> </label>
  <div class="dd-wrapper" :class="[ ext_class, { 'active': modelValue, 'error' : error }]" @click="show = !show">
    <p :class="{ 'error': error }"> {{ getLabel }} </p>
    <slot name="icon-arrow" :class="{ 'rotate': show }" />
    <template v-if="show">
      <div class="options" :style="{ 'height' :  max_options * 5 + 'rem' }">
        <div
          v-for="(opt, i) of options"
          :key="opt"
          class="option"
          :class="{ 'active' : modelValue == opt }"
          :style="{ 'top': 5 * (i + 1) + 'rem' }"
          @click="(e) => onOptionClick(e, opt)"
        >
        <p>{{ opt }}</p>
        <slot v-if="modelValue == opt" name="icon-check" />
      </div>
    </div>
    </template>
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import { computed, ref } from "vue";


// ==============================
// Props
// ==============================
const props = defineProps({
  modelValue: [String, Number],
  title: String,
  error: Boolean,
  options: Array,
  is_required: Boolean,
  display_uppercase: Boolean,
  ext_class: String,
  max_options: Number
});

const emit = defineEmits(["update:modelValue"]);


// ==============================
// Consts
// ==============================
const show = ref(false);
const getLabel = computed(() => {
  let label = '';

  if ( props.error ) {
    label = "Campo obbligatorio";
  } else {
    if ( !props.modelValue ) {
      label = "Seleziona una opzione";
    } else {
      label = props.display_uppercase ? props.modelValue.toUpperCase() : props.modelValue;
    }
  }

  return label;
});


// ==============================
// Functions
// ==============================
function onOptionClick(e, option) {
  e.stopPropagation();
  show.value = false;
  emit("update:modelValue", option);
}


</script>

<style lang="scss" scoped>
$radius-m: 12px;
$primary: green;
$error-color: red;
$transition-medium: 400ms;

.dd-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 300px;
  height: 52px;
  padding: 0 1.5rem;
  box-sizing: border-box;
  border-radius: $radius-m;
  border: 0.2rem solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  user-select: none;
  &.active {
    border: 0.2rem solid $primary;
  }
  &.error {
    border: 0.2rem solid $error-color;
  }
  .rotate {
    transition-duration: $transition-medium;
    transform: rotate(90deg);
  }
  p {
    &.error {
      color: $error-color;
    }
  }
  .options {
    position: absolute;
    width: 100%;
    top: calc( 100% + 12px);
    left: 0;
    z-index: 1;
    overflow-y: scroll;
    box-shadow: rgba(0, 0, 0, 0.25) 0 1.4rem 2.8rem, rgba(0, 0, 0, 0.22) 0 1rem 1rem;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
      display: none;
    }

    .option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 52px;
      box-sizing: border-box;
      background-color: #222;
      transition-duration: $transition-medium;
      &:hover {
        filter: brightness(110%);
        background-color: $primary;
        transition-duration: $transition-medium;
      }
      &.active {
        background-color: $primary !important;
      }
      p {
        margin-left: 1.8rem;
        text-transform: uppercase;
      }
    }
  }
}
</style>