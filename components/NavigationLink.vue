<script setup>
const props = defineProps({
  link: String,
});
</script>
<template>
  <NuxtLink :to="link" exact-active-class="active"><slot /></NuxtLink>
</template>
