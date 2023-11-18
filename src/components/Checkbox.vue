<template>
  <div class="checkbox-main" :class="{ 'disabled': disabled }" @click="onClick">
    <div class="icon">
      <svg :class="[active ? 'opacity-1' : 'opacity-0']">
        <use href="#check"></use>
      </svg>
    </div>
    <slot />
  </div>
</template>

<script setup>
//===========================
// Props
//===========================
const props = defineProps({
  active: Boolean,
  disabled: Boolean,
});

const emit = defineEmits([
  "click",
  "update:active",
]);

//===========================
// Functions
//===========================
function onClick() {
  emit("update:active", props.active ? false : true);
  emit("click");
}


</script>

<style lang="scss" scoped>
.checkbox-main {
  display: flex;
  align-items: center;
  cursor: pointer;
  .icon {
    display: grid;
    place-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border: 0.2rem solid var(--white);
    border-radius: var(--radius-s);
    margin-right: 1.2rem;
    transition-duration: var(--transition-medium);
    svg {
      color: var(--primary);
      &.opacity-1 {
        opacity: 1;
        transition-duration: var(--transition-medium);
      }
      &.opacity-0 {
        opacity: 0;
        transition-duration: var(--transition-medium);
      }
    }
  }
}
</style>
