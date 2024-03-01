<template>
  <div id="badgeProjects" class="badgeNav">
    <button class="navButton">
      <font-awesome-icon
        icon="fa-solid fa-book-open"
        size="xs"
        style="color: #ffffff"
      /><span class="navButtonText">Derniers projets</span>
    </button>
  </div>
  <div id="projectsTitle">
    <h2>Mes <span>dernières réalisations</span></h2>
    <a href="projects"
      ><button type="button" class="button buttonProjects orangeButton">
        Voir tous les projets<font-awesome-icon
          icon="fa-solid fa-arrow-right"
          style="color: #ffffff"
        /></button
    ></a>
  </div>
  <div id="lastProject1" class="firstLastProject">
    <img src="../projects/smartmoov/smartmoovIndex.png" />
    <div id="project1Infos" class="projectInfos full">
      <p class="project1Title">
        <strong>Smart Moov</strong> — Back Office Desktop et Mobile
      </p>
      <div id="project1Button" class="projectLanguage">
        <button
          id="nodejsProjectsLanguage"
          type="button"
          class="buttonLanguage nodejs"
        >
          Node.js
        </button>
        <button
          id="vuejsProjectsLanguage"
          type="button"
          class="buttonLanguage vuejs"
        >
          Vue.js
        </button>
        <button
          id="k8sProjectsLanguage"
          type="button"
          class="buttonLanguage k8s"
        >
          K8S
        </button>
        <button
          id="pwaProjectsLanguage"
          type="button"
          class="buttonLanguage pwa"
        >
          Pwa
        </button>
      </div>
    </div>
  </div>
  <div id="horizontalLastProjects">
    <div id="lastProject2" class="lastProject">
      <div id="project2" class="project">
        <img src="../projects/goodmorningbusiness/gmbIndex.png" />
        <div id="project2Infos" class="projectInfos">
          <p class="projectTitle project2Title">
            <strong>Good Morning Business</strong> — Application Mobile
          </p>
          <div id="project2Button" class="projectLanguage">
            <button
              id="nodejsProjectsLanguage"
              type="button"
              class="buttonLanguage nodejs"
            >
              Node.js
            </button>
            <button
              id="vuejsProjectsLanguage"
              type="button"
              class="buttonLanguage vuejs"
            >
              Vue.js
            </button>
            <button
              id="k8sProjectsLanguage"
              type="button"
              class="buttonLanguage k8s"
            >
              K8S
            </button>
            <button
              id="pwaProjectsLanguage"
              type="button"
              class="buttonLanguage pwa"
            >
              Pwa
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="lastProject3" class="lastProject">
      <div id="project3" class="project">
        <img src="../projects/noci/nociIndex.png" />
        <div id="project3Infos" class="projectInfos">
          <p class="projectTitle project3Title">
            <strong>Noci.io</strong> — Back Office Desktop
          </p>
          <div id="project3Button" class="projectLanguage">
            <button
              id="nodejsProjectsLanguage"
              type="button"
              class="buttonLanguage nodejs"
            >
              Node.js
            </button>
            <button
              id="vuejsProjectsLanguage"
              type="button"
              class="buttonLanguage vuejs"
            >
              Vue.js
            </button>
            <button
              id="k8sProjectsLanguage"
              type="button"
              class="buttonLanguage k8s"
            >
              K8S
            </button>
            <button
              id="pwaProjectsLanguage"
              type="button"
              class="buttonLanguage pwa"
            >
              Pwa
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <a href="projects"
    ><button type="button" class="button buttonProjects orangeButton">
      Voir tous les projets<font-awesome-icon
        icon="fa-solid fa-arrow-right"
        style="color: #ffffff"
      /></button
  ></a>
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
}

/* image first project */
.firstLastProject img {
  max-width: 100%;
  border-radius: 32px;
}

/* image projects */
.project {
  display: flex;
  flex-direction: column;
  margin-bottom: 72px;

  img {
    max-width: 100%;
    border-radius: 32px;
  }
}

#horizontalLastProjects {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;

  .lastProject {
    display: flex;
    flex-direction: column;
    max-width: 48%;
  }
  @media only screen and (max-width: 1255px) {
    .lastProject {
      max-width: 100%;
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

  a {
    color: white;
  }

  img {
    position: absolute;
    padding-left: 7px;
  }
}

.buttonLanguage {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 2px -1px rgba(16, 24, 40, 0.1);
  box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1);
  border-radius: 24px;
  border: solid 0;
  padding: 6px 16px;

  &:hover {
    box-shadow: 3px 5px 5px 0px rgba(16, 24, 40, 0.2);
  }
}
</style>
