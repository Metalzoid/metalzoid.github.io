<script setup lang="js">
import projectsData from "~/assets/data/projects.json";
const props = defineProps({
  projectID: String,
});
const route = useRoute()
const lastProjects = projectsData.slice(-2)
lastProjects.reverse();

const project = projectsData.find((element) => element.id === route.params.id );
</script>

<template>
  <div>
    <div id="main">
      <Profil />
      <div id="mainPage">
        <ProjectDetails :projectID="route.params.id" />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#projectPageInfos {
  margin-top: -30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
#projectInfos {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 0;
  button {
    height: fit-content;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background-color: white;
    border: 1px solid rgba(221, 205, 195, 1);
    border-radius: 50%;
    box-shadow: 0px 2px 2px 0px rgba(41, 43, 50, 0.05);
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

.imgProject {
  background-size: contain;
  background-repeat: no-repeat;
  aspect-ratio: 16/9;
  background-position-x: center;
}

#imagesProject {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;
  .image {
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
  width: 100%;
  gap: 2rem;
  margin-top: 35px;
  .project {
    width: 49%;
    #projectInfos {
      flex-direction: column;
    }
  }
}

@media only screen and (max-width: 420px) {
  #horizontalLastProjects {
    flex-direction: column;
    align-items: center;
  }
}

</style>
