<script setup>
import markdownit from "markdown-it";
const props = defineProps({
  text: { type: String, required: true },
  max: { type: Number, default: 50 },
});
var isCuttable = props.text.length > props.max;
var cutted = ref(true);
const cuttedText = computed(() => {
  if (!cutted.value || !isCuttable) {
    return props.text;
  } else {
    return props.text.substring(0, props.max) + "...";
  }
});
const md = markdownit();
const mdResult = computed(() => {
  return md.render(cuttedText.value);
});
</script>
<template>
  <div id="cuttedText">
    <span v-html="mdResult" class="cuttedText"></span>
    <span class="isCuttable" v-if="isCuttable" @click="cutted = !cutted">{{
      cutted ? "Voir plus" : "Voir moins"
    }}</span>
  </div>
</template>
<style lang="scss">
#cuttedText {
  .isCuttable {
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(237, 104, 46, 1);
    cursor: pointer;
  }
  .cuttedText {
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
    color: rgba(38, 38, 38, 1);
  }
}
</style>
