<script setup lang="js">
import projectsData from "../assets/data/projects.json";

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
      <ProjectPreview
        :projectID="projects[0].id"
        :projectLanguage="projects[0].language"
      />
    </div>
    <div id="horizontalLastProjects">
      <div id="project2" class="project">
        <ProjectPreview
          :projectID="projects[1].id"
          :projectLanguage="projects[1].language"
        />
      </div>
      <div id="project3" class="project">
        <ProjectPreview
          :projectID="projects[2].id"
          :projectLanguage="projects[2].language"
        />
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
  padding-top: 72px;
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
        color: rgba(237, 104, 46, 1);
      }
    }
  }

  #horizontalLastProjects {
    display: flex;
    gap: 32px;
    @media only screen and (max-width: 1255px) {
      flex-direction: column;
    }
    .project {
      display: flex;
      flex-direction: column;
      margin-bottom: 72px;
      display: flex;
      flex: 1;
      flex-direction: column;
      max-width: 50%;
      @media only screen and (max-width: 1255px) {
        margin-bottom: 24px;
        max-width: 100%;
        height: auto;
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
