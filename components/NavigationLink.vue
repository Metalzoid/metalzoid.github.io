<script setup>
import { useIntersectionObserver } from "@vueuse/core";
const props = defineProps({
  link: String,
  activeElementId: String,
  activeClass: String,
});
const route = useRoute();
const target = ref(null);
const targetIsVisible = ref(false);

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting;
  }
);

onMounted(() => {
  target.value = document.getElementById(props.activeElementId);

  if (route.path === "/contact" && props.link === "/contact") {
    targetIsVisible.value = true;
  }
});
</script>
<template>
  <NuxtLink
    :to="link"
    :exact-active-class="activeClass"
    :class="{ active: targetIsVisible }"
    ><slot
  /></NuxtLink>
</template>
