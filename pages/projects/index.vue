<script setup>
import projectsData from "../data/projects.json";
const route = useRoute();
const languages = [];
for (let project of projectsData) {
  for (let language of project.language) {
    if (languages.includes(language) == false) {
      languages.push(language);
    }
  }
}
const selectedLanguage = ref(null);
const page = ref(1);
const projectsPerPage = 2;
const projects = computed(() => {
  const ret = [...projectsData];
  ret.reverse();
  return ret.filter((project) => {
    if (selectedLanguage.value === null) {
      return true;
    } else {
      return project.language.includes(selectedLanguage.value);
    }
  });
});

const sliced = computed(() => {
  const ret = [...projects.value];
  return ret.slice(
    (page.value - 1) * projectsPerPage,
    projectsPerPage * page.value
  );
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function pagination(action) {
  if (action === "next") {
    if (page.value < projects.value.length / projectsPerPage) {
      page.value++;
      scrollToTop();
    }
  } else if (action === "prev") {
    if (page.value > 1) {
      page.value--;
      scrollToTop();
    }
  } else {
    if (action < page.value) {
      page.value = action;
      scrollToTop();
    } else if (action > page.value) {
      page.value = action;
      scrollToTop();
    }
  }
}

const maxPage = computed(() => {
  return Math.ceil(projects.value.length / projectsPerPage);
});
</script>

<template>
  <div>
    <div id="main">
      <Profil />
      <div id="mainPage">
        <div id="introProjects">
          <h3><span>Projets</span> réalisés</h3>
          <div class="projectLanguage">
            <button
              type="button"
              class="buttonLanguage"
              :class="{ activeLanguage: selectedLanguage === null }"
              @click="
                selectedLanguage = null;
                page = 1;
              "
              style="cursor: pointer"
            >
              Tous
            </button>
            <button
              type="button"
              class="buttonLanguage"
              v-for="language in languages"
              :key="language"
              :class="{ activeLanguage: selectedLanguage === language }"
              @click="
                selectedLanguage = language;
                page = 1;
              "
              style="cursor: pointer"
            >
              {{ language }}
            </button>
          </div>
        </div>

        <div class="project" v-for="project in sliced" :key="project.id">
          <ProjectPreview :projectID="project.id" />

          <hr />
        </div>

        <div id="bottomProjects">
          <div id="projectsCount">{{ projects.length }} résultats</div>
          <div id="navProjects">
            <button @click="pagination('prev')">
              <font-awesome-icon
                icon="fa-solid fa-chevron-left"
                style="color: #ed682e"
              />
            </button>

            <div
              id="page"
              v-for="projectPage in maxPage"
              @click="pagination(projectPage)"
              :class="{ activePage: page === projectPage }"
            >
              {{ projectPage }}
            </div>

            <button @click="pagination('next')">
              <font-awesome-icon
                icon="fa-solid fa-chevron-right"
                style="color: #ed682e"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#mainPage {
  .project {
    a {
      text-decoration: none;
    }
  }

  .buttonLanguage {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 3px 0px rgba(16, 24, 40, 0.1);
    border-radius: 24px;
    border: solid 0;
    padding: 6px 16px;
    margin: 5px;
    &:hover {
      box-shadow: 3px 5px 5px 0px rgba(16, 24, 40, 0.151);
    }
  }
  .activeLanguage {
    background: rgba(254, 237, 230, 1);
    border: 1px solid rgba(255, 182, 151, 1);
    box-shadow: 3px 5px 5px 0px rgba(16, 24, 40, 0.151);
    color: rgba(237, 104, 46, 1);
  }

  #introProjects {
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 15px 20px -12px rgba(67, 54, 35, 0.08);
    border-radius: 32px;
    padding: 0 32px 32px 32px;
    margin-top: -32px;

    h3 {
      font-family: Plus Jakarta Sans;
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;
      letter-spacing: -0.02em;
      text-align: left;
      color: rgba(38, 38, 38, 1);
      span {
        font-family: Plus Jakarta Sans;
        font-size: 32px;
        font-weight: 500;
        line-height: 40px;
        letter-spacing: -0.02em;
        text-align: left;
        color: rgba(237, 104, 46, 1);
      }
    }
    .projectLanguage {
      display: flex;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      button {
        margin: 0;
      }
    }
  }
  .imgProject {
    height: auto;
    width: 100%;
    border-radius: 32px;
  }
  #bottomProjects {
    display: flex;
    align-items: center;
    justify-content: space-between;
    #projectsCount {
      font-family: Plus Jakarta Sans;
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      text-wrap: nowrap;
    }
    #navProjects {
      gap: 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      cursor: pointer;
      button {
        border: none;
        cursor: pointer;
      }
      #page {
        font-family: Plus Jakarta Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 25px;
        height: 25px;
      }
      .pageID {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: rgba(97, 97, 107, 1);
      }
      .activePage {
        background-color: rgba(237, 104, 46, 1);
        font-family: Plus Jakarta Sans;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: center;
        color: white;
        border-radius: 50%;
      }
    }
  }
}
@media only screen and (max-width: 855px) {
  #main {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    #mainPage {
      justify-content: center;
      align-items: center;
      margin: 0 25px;
      width: 100%;

      #introProjects {
        width: 80%;
        margin: 15px;
      }
      .project {
        width: 80%;
      }
    }
  }
}
</style>
