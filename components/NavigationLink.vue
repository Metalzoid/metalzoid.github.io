<script setup>
const props = defineProps({
  link: String,
  activeElementId: String,
  activeClass: String,
});
</script>
<template>
  <NuxtLink
    :to="link"
    exact-active-class="active"
    :class="{ active: targetIsVisible }"
    ><slot
  /></NuxtLink>
</template>
