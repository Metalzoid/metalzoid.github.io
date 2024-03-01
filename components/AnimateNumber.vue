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

if (targetIsVisible) {
  baseNumber.value = props.number;
  console.log("visible");
}
</script>

<template>
  <div>{{ number.toFixed(0) }}</div>
</template>
