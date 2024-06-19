<script setup lang="js">
import projectsData from "../assets/data/projects.json";
const props = defineProps({
  projectID: String,
});

const project = projectsData.find((element) => element.id === props.projectID);
</script>

<template>
  <div>
    <div
      :style="{ backgroundImage: `url(${project.imagePreview})` }"
      :class="{ imgProject: project.imagePreview }"
    ></div>
    <div id="project1Infos" class="projectInfos full">
      <p class="project1Title">
        <strong>{{ project.name }}</strong> — {{ project.description }}
      </p>
      <div id="project1Button" class="projectLanguage">
        <button
          type="button"
          class="buttonLanguage nodejs"
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
