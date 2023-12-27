<template>
  <div
    class="joystick-main"
    ref="main_ref"
    @pointerdown="onPointerStart"
    @pointermove="onPointerMove"
  >
    <div class="cursor" :style="{ 'transform': translate }" />
  </div>
</template>

<script setup>
// ==============================
// Import
// ==============================
import {
  ref,
  computed,
  onMounted,
  onUnmounted
} from "vue";

// ==============================
// Props and emits
// ==============================
const emit = defineEmits([
  'move',
])

// ==============================
// Const
// ==============================
const x         = ref( 0.5 );
const y         = ref( 0.5 );
const is_down   = ref( false );
const main_ref  = ref( undefined );
const main_rect = ref( {} );

const translate = computed(() => {
  const _x = mapNumber(x.value, 0, 1, -125, 25);
  const _y = mapNumber(y.value, 0, 1, -125, 25);
  return `translate(${_x}%, ${_y}%)`;
});

// ==============================
// Functions
// ==============================
function onPointerStart(ev) {
  is_down.value = true;
  updateHandlePosition(ev.touches ? ev.touches[0] : ev);
}
function onPointerMove(ev) {
  if (is_down.value) {
    updateHandlePosition(ev.touches ? ev.touches[0] : ev);
  }
}
function onPointerUp() {
  is_down.value = false;
  resetHandlePosition();
}

function updateHandlePosition(ev) {
  x.value = mapNumber(ev.clientX, main_rect.value.x, main_rect.value.outMaxX, 0, 1);
  y.value = mapNumber(ev.clientY, main_rect.value.y, main_rect.value.outMaxY, 0, 1);
  emit("move", { x: x.value, y: y.value });
}

function resetHandlePosition() {
  x.value = 0.5;
  y.value = 0.5;
  emit("move", { x: 0.5, y: 0.5 });
}

function mapNumber(value, inMin, inMax, outMin, outMax) {
  const clampedValue = Math.min(Math.max(value, inMin), inMax);
  const percentage = (clampedValue - inMin) / (inMax - inMin);
  return percentage * (outMax - outMin) + outMin;
}

// ==============================
// Life cycle
// ==============================
onMounted( () => {
  window.addEventListener('pointerup', onPointerUp);
  main_rect.value = main_ref.value.getBoundingClientRect();
  main_rect.value.outMaxX = main_rect.value.x + main_rect.value.width; 
  main_rect.value.outMaxY = main_rect.value.y + main_rect.value.height; 
})

onUnmounted( () => {
  window.removeEventListener('pointerup', onPointerUp);
})


</script>

<style lang="scss" scoped>
.joystick-main {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid var(--white);
  position: relative;
  box-sizing: border-box;
  .cursor {
    width: 38.19%;
    height: 38.19%;
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    background-color: var(--white);
  }
}
</style>
