<script setup lang="js">
import projectsData from "/_nuxt/assets/data/projects.json";
const props = defineProps({
  projectID: String,
});

const project = projectsData.find((element) => element.id === props.projectID);
</script>

<template>
  <div>
    <NuxtLink :to="`/projects/${project.id}`">
      <div
        :style="{
          backgroundImage: `url(${project.images[0]})`,
        }"
        :class="{ imgProject: project.images[0] }"
      ></div
    ></NuxtLink>
    <div id="projectInfos">
      <p class="projectTitle">
        <strong>{{ project.name }}</strong> — {{ project.description }}
      </p>
      <div class="projectLanguage">
        <button
          type="button"
          class="buttonLanguage"
          v-for="lang in project.language"
          :key="lang"
        >
          {{ lang }}
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.imgProject {
  background-size: contain;
  background-repeat: no-repeat;
  aspect-ratio: 16/9;
}
</style>
