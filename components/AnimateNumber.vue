<script setup>
import { useTransition } from "@vueuse/core";
import { useIntersectionObserver } from "@vueuse/core";
const target = ref(null);
const targetIsVisible = ref(false);
const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting;
  }
);
const props = defineProps({
  number: Number,
});
const duration = 1500;
const baseNumber = ref(0);
const number = useTransition(baseNumber, {
  duration,
  transition: [0.75, 0, 0.25, 1],
});

watch(targetIsVisible, (newTargetIsVisible) => {
  if (newTargetIsVisible) {
    baseNumber.value = props.number;
  } else {
    baseNumber.value = 0;
  }
});

onMounted(() => {
  target.value = document.getElementById("compteurs");
});
</script>

<template>
  <div>{{ number.toFixed(0) }}</div>
</template>
