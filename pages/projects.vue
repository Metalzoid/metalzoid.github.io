<template>
  <div id="main">
    <div id="profil">
      <div id="photoProfil">
        <img class="photo" src="../img/gui.png" alt="Photo de moi" />
      </div>
      <div id="profilInfos">
        <div id="infos">
          <h5 class="name">Guillaume GAGNAIRE</h5>
          <a href="mailto:guillaume@gagnaire.dev"
            ><p class="email">guillaume@gagnaire.dev</p></a
          >
          <p class="localisation">Bordeaux</p>
        </div>
        <div id="social">
          <a href="https://github.com/guillaume-gagnaire"
            ><img
              class="github"
              src="../img/Icon Buttongithub.png"
              alt="Mon GitHub"
          /></a>
          <a href="https://www.linkedin.com/in/guillaume-gagnaire"
            ><img
              class="linkedin"
              src="../img/Icon Buttonlinkedin.png"
              alt="Mon LinkedIn"
          /></a>
          <a href="https://www.malt.fr/profile/guillaumegagnaire"
            ><img class="malt" src="../img/Icon Buttonmalt.png" alt="Mon Malt"
          /></a>
        </div>
        <a href="/contact"
          ><button type="button" class="button hireMeProfil orangeButton">
            <img src="../img/iconEnvelopeWhite.png" /> Hire me !
          </button></a
        >
      </div>
    </div>
    <div id="mainPage">
      <div id="mainPageProjects">
        <div id="introProjects">
          <h3><span>Projets</span> réalisés</h3>
          <div id="projectsLanguage">
            <button
              id="allProjectsLanguage"
              type="button"
              class="buttonLanguage active"
            >
              Tous
            </button>
            <button
              id="nodejsProjectsLanguage"
              type="button"
              class="buttonLanguage"
            >
              Node.js
            </button>
            <button
              id="vuejsProjectsLanguage"
              type="button"
              class="buttonLanguage"
            >
              Vue.js
            </button>
            <button
              id="k8sProjectsLanguage"
              type="button"
              class="buttonLanguage"
            >
              K8S
            </button>
            <button
              id="javascriptProjectsLanguage"
              type="button"
              class="buttonLanguage"
            >
              Javascript
            </button>
            <button
              id="nuxtjsProjectsLanguage"
              type="button"
              class="buttonLanguage"
            >
              Nuxt.js
            </button>
            <button
              id="pwaProjectsLanguage"
              type="button"
              class="buttonLanguage"
            >
              Pwa
            </button>
          </div>
        </div>
        <div id="projects">
          <div id="project1" class="project">
            <img src="../projects/smartmoov/smartmoov.png" />
            <div id="project1Infos" class="projectInfos">
              <p class="project1Title">
                <strong>Smart Moov</strong> — Back Office Desktop et Mobile
              </p>
              <div id="project1Button" class="projectLanguage">
                <button
                  id="nodejsProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  Node.js
                </button>
                <button
                  id="vuejsProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  Vue.js
                </button>
                <button
                  id="k8sProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  K8S
                </button>
                <button
                  id="pwaProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  Pwa
                </button>
              </div>
            </div>
          </div>
          <img src="../img/_Divider Horizontal_Divider.png" />
          <div id="project2" class="project">
            <img
              src="../projects/goodmorningbusiness/goodmorningbusiness.png"
            />
            <div id="project2Infos" class="projectInfos">
              <p class="project2Title">
                <strong>Good Morning Business</strong> — Application Mobile
              </p>
              <div id="project2Button" class="projectLanguage">
                <button
                  id="nodejsProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  Node.js
                </button>
                <button
                  id="vuejsProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  Vue.js
                </button>
                <button
                  id="k8sProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  K8S
                </button>
                <button
                  id="pwaProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  Pwa
                </button>
              </div>
            </div>
          </div>
          <img src="../img/_Divider Horizontal_Divider.png" />
          <div id="project3" class="project">
            <img src="../projects/noci/noci.png" />
            <div id="project3Infos" class="projectInfos">
              <p class="project3Title">
                <strong>Noci.io</strong> — Back Office Desktop
              </p>
              <div id="project3Button" class="projectLanguage">
                <button
                  id="nodejsProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  Node.js
                </button>
                <button
                  id="vuejsProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  Vue.js
                </button>
                <button
                  id="k8sProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  K8S
                </button>
                <button
                  id="pwaProjectsLanguage"
                  type="button"
                  class="buttonLanguage"
                >
                  Pwa
                </button>
              </div>
            </div>
          </div>
          <div id="bottomProjects">
            <p><span>240</span> Résultats</p>
            <div id="navigationProjects">
              <button type="button" class="buttonNav">
                <img src="../img/previousPageProjects.png" />
              </button>
              <div id="pageNumber">
                <button type="button" class="active">1</button>
                <button type="button">2</button>
                <button type="button">3</button>
                <button type="button">4</button>
                <button type="button">5</button>
                <button type="button">...</button>
                <button type="button">10</button>
              </div>
              <button type="button" class="buttonNav">
                <img src="../img/nextPageProjects.png" />
              </button>
            </div>
          </div>
        </div>
        <div id="hireMeBottom" class="orangeButton">
          <div id="hireMeBottomContent">
            <img src="../img/hireMeBottomLogo.png" class="hireMeBottomLogo" />
            <div id="hireMeBottomContentAndButton">
              <h4>Besoin d’un accompagnement pour votre projet ?</h4>
              <a href="/contact"
                ><button type="button" class="button">
                  <img src="../img/iconEnvelope.png" /> Hire me !
                </button></a
              >
            </div>
          </div>
        </div>
        <footer>
          <img
            src="../img/_Divider Horizontal_Divider.png"
            class="footerDivider divider"
          />
          <img src="../img/guillaumeGAGNAIREFooter.png" class="footerLogo" />
          <p>© 2023 Guillaume Gagnaire. Tous droits réservés.</p>
        </footer>
      </div>
    </div>
  </div>
</template>
