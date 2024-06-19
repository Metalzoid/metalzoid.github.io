<script setup lang="js">
import projectsData from "/_nuxt/assets/data/projects.json";
import VueEasyLightbox from 'vue-easy-lightbox'
import markdownit from 'markdown-it'
const md = markdownit()
function mdResult(text) {
  return md.render(text);
}
const props = defineProps({
  projectID: String,
});
const lastProjects = projectsData.slice(-2)
lastProjects.reverse();

const project = projectsData.find((element) => element.id === props.projectID);
const images = project.images.slice(1);

const visibleRef = ref(false)
const indexRef = ref(0)
const imgsRef = ref([])
const onShow = () => {
  visibleRef.value = true;
}
const showMultiple = (index) => {
  imgsRef.value = project.images
  indexRef.value = index
  onShow()
}
const onHide = () => (visibleRef.value = false)
</script>

<template>
  <div id="projectPageInfos">
    <div id="projectDetailsInfos">
      <NuxtLink to="/projects"
        ><button><font-awesome-icon icon="arrow-left" size="lg" /></button
      ></NuxtLink>
      <div>
        <h1>
          {{ project.name }}
        </h1>
        <p>{{ project.description }}</p>
      </div>
    </div>
    <div class="projectLanguage">
      <button
        type="button"
        class="buttonLanguage nodejs"
        v-for="lang in project.language"
        :key="lang"
      >
        {{ lang }}
      </button>
    </div>
    <div id="introProject"><span v-html="mdResult(project.intro)"></span></div>
    <div>
      <vue-easy-lightbox
        :visible="visibleRef"
        :imgs="imgsRef"
        :index="indexRef"
        @hide="onHide"
      ></vue-easy-lightbox>
    </div>
    <div
      :style="{ backgroundImage: `url(${project.images[0]})` }"
      :class="{ imgProject: project.images[0] }"
      @click="showMultiple(0)"
    ></div>
    <div id="imagesProject" v-if="project.images">
      <div
        v-for="(image, index) in images"
        :key="image"
        :style="{ backgroundImage: `url(${image})` }"
        :class="{ imgProject: image }"
        @click="showMultiple(index + 1)"
        id="image"
      ></div>
      <hr />
    </div>

    <div id="content"><span v-html="mdResult(project.content)"></span></div>
    <hr v-if="project.content" />
    <div id="opinionsClientsBox" v-if="project.opinion.message">
      <div id="enTeteopinionsClient">
        <div
          id="photoClient"
          :style="{ backgroundImage: `url(${project.opinion.photo})` }"
          :class="{ photoClientActive: project.opinion.photo }"
        ></div>
        <div
          id="logoClient"
          class="orangeButton"
          :class="{ logoClientActive: !project.opinion.photo }"
        >
          <p class="initialeClient">
            {{ project.opinion.initial }}
          </p>
        </div>
        <div id="clientInfos">
          <h3>{{ project.opinion.name }}</h3>
          <div id="entNameDate">
            <span class="entrepriseName">{{ project.opinion.company }}</span>
            <span class="separate">•</span>
            <span class="date">{{ project.opinion.date }}</span>
          </div>
        </div>
      </div>
      <div id="opinions">
        <p class="opinions">
          <CuttableText :text="project.opinion.message" :max="210" />
        </p>
      </div>
    </div>
    <hr v-if="project.opinion.message" />
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
    <div id="horizontalLastProjects">
      <div class="project">
        <ProjectPreview :projectID="lastProjects[0].id" />
      </div>
      <div class="project">
        <ProjectPreview :projectID="lastProjects[1].id" />
      </div>
    </div>
    <HireMeBottomIndex />
  </div>
</template>
<style lang="scss">
.vel-modal {
  backdrop-filter: blur(15px);
}
#projectPageInfos {
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  #introProject {
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(38, 38, 38, 1);
  }

  #projectDetailsInfos {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 32px;
    background-color: white;
    border-radius: 32px;
    button {
      height: fit-content;
      justify-content: center;
      align-items: center;
      padding: 16px;
      background-color: white;
      border: 1px solid rgba(221, 205, 195, 1);
      border-radius: 50%;
      box-shadow: 0px 2px 2px 0px rgba(41, 43, 50, 0.05);
      cursor: pointer;
    }
    h1 {
      font-family: Plus Jakarta Sans;
      font-size: 32px;
      font-weight: 500;
      line-height: 40px;
      letter-spacing: -0.02em;
      text-align: left;
      color: rgba(237, 104, 46, 1);
      margin: 0;
    }
    p {
      font-family: Plus Jakarta Sans;
      font-size: 18px;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(38, 38, 38, 1);
      margin: 0;
    }
  }
}

.imgProject {
  background-size: contain;
  background-repeat: no-repeat;
  aspect-ratio: 16/9;
  cursor: pointer;
}

#imagesProject {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  #image {
    width: 47%;
  }
}

#content {
  font-family: Plus Jakarta Sans;
  font-size: 18px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(38, 38, 38, 1);
}
#opinionsClientsBox {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  border: 1px solid rgba(221, 205, 195, 1);
  border-radius: 32px;
  transition: all 0.5s;
  &:hover {
    border-color: rgba(237, 104, 46, 1);
  }
  #enTeteopinionsClient {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 25px;
    gap: 16px;
    #photoClient {
      display: none;
      justify-content: center;
      align-items: center;
      height: 56px;
      width: 56px;
      min-width: 56px;
      background: linear-gradient(
        90deg,
        rgba(237, 104, 46, 1),
        rgba(255, 156, 44, 1)
      );
      border-radius: 100px;
      border: none;
    }
    .photoClientActive {
      display: flex !important;
    }
    #logoClient {
      display: none;
      justify-content: center;
      align-items: center;
      height: 56px;
      width: 56px;
      min-width: 56px;
      background: linear-gradient(
        90deg,
        rgba(237, 104, 46, 1),
        rgba(255, 156, 44, 1)
      );
      border-radius: 100px;
      border: none;
    }
    .logoClientActive {
      display: flex !important;
    }
    #clientInfos {
      margin-left: 15px;
      margin-top: -15px;
      display: flex;
      flex-direction: column;
      h3 {
        font-family: Plus Jakarta Sans;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: -0.02em;
        text-align: left;
        color: rgba(23, 23, 23, 1);
      }

      #entNameDate {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: -15px;
        font-family: Plus Jakarta Sans;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(23, 23, 23, 1);
        list-style: none;
        .separate {
          font-weight: 400;
          font-size: 11px;
        }
        .entrepriseName {
          color: rgba(237, 104, 46, 1);
        }
        .date {
          font-weight: 400;
        }
      }
    }
  }

  .opinions {
    font-family: Plus Jakarta Sans;
    font-size: 17px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    margin: -10px 40px 40px 40px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
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
  justify-content: space-between;
  width: 100%;
  margin-top: 35px;
  .project {
    width: 49%;
  }
}
@media only screen and (max-width: 855px) {
  .btn__close {
    .vel-icon.icon {
      color: black;
      font-size: 40px;
    }
  }
}
</style>
