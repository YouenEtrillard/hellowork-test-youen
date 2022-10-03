<script setup>
defineProps({
  icon: String,
  alt: String,
});
</script>

<template>
  <svg v-if="icon && icon !== ''" :class="['icon', `icon-${icon}`]" :alt="alt">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<style>
.icon {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
