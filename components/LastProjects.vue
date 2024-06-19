<script setup lang="js">
import projectsData from "/_nuxt/assets/data/projects.json";

const projects = projectsData.slice(-3)
projects.reverse();
</script>

<template>
  <div id="lastProjects">
    <div id="badgeProjects" class="badgeNav">
      <button class="navButton">
        <font-awesome-icon
          icon="fa-solid fa-book-open"
          size="xs"
          style="color: #ffffff"
        /><span>Derniers projets</span>
      </button>
    </div>
    <div id="projectsTitle">
      <h2>Mes <span>dernières réalisations</span></h2>
      <NuxtLink to="/projects"
        ><button type="button" class="button buttonProjects orangeButton">
          Voir tous les projets<font-awesome-icon
            icon="fa-solid fa-arrow-right"
            style="color: #ffffff"
          /></button
      ></NuxtLink>
    </div>
    <div class="firstProject">
      <NuxtLink :to="`/projects/${projects[0].id}`">
        <ProjectPreview :projectID="projects[0].id" />
      </NuxtLink>
    </div>
    <div id="horizontalLastProjects" v-if="projects.length > 1">
      <div id="project2" class="project">
        <NuxtLink :to="`/projects/${projects[1].id}`">
          <ProjectPreview :projectID="projects[1].id" />
        </NuxtLink>
      </div>
      <div id="project3" class="project" v-if="projects.length > 2">
        <NuxtLink :to="`/projects/${projects[2].id}`">
          <ProjectPreview :projectID="projects[2].id" />
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/projects"
      ><button type="button" class="button buttonProjects orangeButton">
        Voir tous les projets<font-awesome-icon
          icon="fa-solid fa-arrow-right"
          style="color: #ffffff"
        /></button
    ></NuxtLink>
  </div>
</template>
<style lang="scss">
#lastProjects {
  display: flex;
  flex-direction: column;
  gap: 24px;

  a {
    text-decoration: none;
  }

  #projectsTitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    a {
      text-decoration: none;
    }

    h2 {
      font-family: Plus Jakarta Sans;
      font-size: 40px;
      font-weight: 500;
      line-height: 48px;
      letter-spacing: -0.02em;
      text-align: left;
      color: rgba(23, 23, 23, 1);
      span {
        font-family: Plus Jakarta Sans;
        font-size: 40px;
        font-weight: 500;
        line-height: 48px;
        letter-spacing: -0.02em;
        text-align: left;
        color: rgba(237, 104, 46, 1);
      }
    }
  }

  #horizontalLastProjects {
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    @media only screen and (max-width: 1255px) {
      flex-direction: column;
      max-width: 100%;
    }
    .project {
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      max-width: 49%;
      #projectInfos {
        flex-direction: column;
      }
      @media only screen and (max-width: 1255px) {
        margin-bottom: 24px;
        height: auto;
        max-width: 100%;
        width: 100%;
      }
    }
  }
}

.buttonProjects {
  width: 232px;
  height: 48px;
  border-radius: 100px;
  background: linear-gradient(
    90deg,
    rgba(237, 104, 46, 1),
    rgba(255, 156, 44, 1)
  );
  box-shadow: 0px 2px 2px 0px rgba(41, 43, 50, 0.05);
  font-family: Plus Jakarta Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: white;
  text-align: start;
  padding: 16px;
  border: 0px transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

@media only screen and (max-width: 855px) {
  #lastProjects {
    #projectsTitle {
      flex-wrap: wrap;
    }

    .lastProject {
      max-width: 100%;
    }
    .project {
      width: 100% !important;
    }

    .buttonProjects {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }
}
</style>
