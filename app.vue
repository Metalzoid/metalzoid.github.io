<script setup>
const route = useRoute();
let mobileChecked = ref(false);
function toggleNavMobile() {
  if (window.innerWidth < 855) {
    mobileChecked.value = false;
  }
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function scrollToTopMain() {
  if (route.fullPath === "/") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;700&display=swap");
</style>

<template>
  <div @wheel="toggleNavMobile()" @touchmove="toggleNavMobile()">
    <div>
      <header>
        <div id="navigation">
          <NuxtLink to="/" @click="scrollToTopMain()"
            ><img class="logo" src="/img/logo.svg" alt="logo"
          /></NuxtLink>
          <div id="nav">
            <ul class="nav">
              <li>
                <NavigationLink link="/" @click="scrollToTopMain()"
                  >Acceuil</NavigationLink
                >
              </li>
              <li>
                <NavigationLink
                  link="/projects"
                  :class="{ active: route.path.includes('projects') }"
                  >Projets Réalisés</NavigationLink
                >
              </li>
              <li>
                <NavigationLink link="/contact">Contact</NavigationLink>
              </li>
            </ul>
          </div>
          <NuxtLink to="/contact"
            ><button type="button" class="button hireMeNav orangeButton">
              <font-awesome-icon
                icon="fa-solid fa-envelope"
                size="2xs"
                style="color: #ffffff"
              />Hire me !
            </button></NuxtLink
          >
          <div id="mobileNavDiv">
            <input type="checkbox" v-model="mobileChecked" id="mobileNavPaa" />
            <label id="burger" for="mobileNavPaa">
              <div></div>
              <div></div>
              <div></div>
            </label>
            <nav id="mobileNav">
              <div id="profilMobile">
                <div id="photoProfilMobile">
                  <img src="/img/gui.png" alt="Photo de moi" />
                </div>
                <div id="profilInfosMobile">
                  <div id="infosMobile">
                    <a href="mailto:guillaume@gagnaire.dev"
                      ><p class="email">guillaume@gagnaire.dev</p></a
                    >
                    <p class="localisation">Bordeaux</p>
                  </div>
                  <div id="socialMobile">
                    <a href="https://github.com/guillaume-gagnaire"
                      ><img
                        class="github"
                        src="/img/Icon Buttongithub.png"
                        alt="Mon GitHub"
                    /></a>
                    <a href="https://www.linkedin.com/in/guillaume-gagnaire"
                      ><img
                        class="linkedin"
                        src="/img/Icon Buttonlinkedin.png"
                        alt="Mon LinkedIn"
                    /></a>
                    <a href="https://www.malt.fr/profile/guillaumegagnaire"
                      ><img
                        class="malt"
                        src="/img/Icon Buttonmalt.png"
                        alt="Mon Malt"
                    /></a>
                  </div>
                </div>
              </div>
              <hr />
              <ul class="navMobile">
                <li>
                  <NuxtLink
                    to="/"
                    class="active"
                    @click="toggleNavMobile(), scrollToTopMain()"
                    ><img
                      src="/img/mobileNav/index.png"
                      alt=""
                    />Acceuil</NuxtLink
                  >
                </li>

                <li>
                  <NuxtLink to="/projects" @click="toggleNavMobile()"
                    ><img src="/img/mobileNav/projects.png" alt="" />Projets
                    Réalisés</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink to="/contact" @click="toggleNavMobile()"
                    ><img
                      src="/img/mobileNav/contact.png"
                      alt=""
                    />Contact</NuxtLink
                  >
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>

    <NuxtPage />

    <div id="toTopButton" @click="scrollToTop()">
      <font-awesome-icon icon="arrow-up" />
    </div>
  </div>
</template>

<style lang="scss">
html {
  font-size: 16px;
  margin: 0;
  padding: 0;

  min-width: 360px;
}

body {
  margin: 0;
  padding: 0;
  background-color: rgba(67, 54, 35, 0.08);
  width: 100%;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: rgba(163, 163, 163, 1);
  border-right: 2px white solid;
  background-clip: padding-box;
  border-radius: 4px;
}

.button {
  cursor: pointer;
}

.orangeButton {
  background: linear-gradient(91.51deg, #ed682e 3.8%, #ff9c2c 95.89%);
  font-family: Plus Jakarta Sans;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  border: solid 1px rgba(221, 205, 195, 1);
  box-shadow: 0px 2px 2px 0px rgba(41, 43, 50, 0.05);
  border-radius: 100px;
}

header {
  margin: 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
}

#navigation {
  height: 72px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  box-shadow: 0px 15px 20px -12px rgba(67, 54, 35, 0.08);
  width: 100%;
  padding: 0 1vw;

  a {
    text-decoration: none;
    text-wrap: nowrap;
    align-items: center;
  }

  input {
    display: none;
  }
}

.logo {
  width: 200px;
  margin-top: 3px;
}

.hireMeNav {
  max-width: 122px;
  min-width: 100px;
  width: 10vw;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 5px;
  &:hover {
    box-shadow: 1px 3px 3px 1px rgba(41, 43, 50, 0.2);
  }
}

#nav {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  a {
    text-decoration: none;
    font-size: x-large;
    color: rgba(64, 64, 64, 1);
    font-size: 16px;
    align-items: center;
    font-family: Plus Jakarta Sans;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
  }

  ul {
    justify-content: space-around;
    flex: 0.7 0.2 auto;
  }

  .active {
    color: rgba(237, 104, 46, 1);
  }
}

.nav {
  display: flex;
  align-items: center;
  padding-left: 0;
  margin: 0 10px;
  gap: 7px;
  li {
    display: flex;
  }
}

@media only screen and (min-width: 855px) {
  #mobileNavDiv {
    display: none;
  }
}
#toTopButton {
  padding: 8px 10px;
  border-radius: 150px;
  border: transparent;
  background: #f0efef;
  box-shadow: 5px 5px 16px #b4b3b3, -5px -5px 16px #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 70px;
  bottom: 70px;
  position: fixed;
  cursor: pointer;

  &:hover {
    border-radius: 150px;
    background: #ebebeb;
    box-shadow: 5px 5px 15px #a3a2a2, -5px -5px 15px #ffffff;
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

@media only screen and (max-width: 855px) {
  #navigation {
    width: 100%;
    margin: 0;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 40vw;
      margin-left: 5vw;
      min-width: 150px;
    }
    #nav {
      visibility: hidden;
    }
    .hireMeNav {
      display: none;
    }
    #mobileNavDiv {
      height: 100%;
      .email {
        text-decoration: underline;
      }
    }
  }
  // Navigation mobile
  .burger-wrapper {
    cursor: pointer;
  }

  #mobileNav {
    background: white;
    width: 100%;
    position: fixed;
    right: 0;
    transition-timing-function: cubic-bezier(10, 2, 3, 1);
    transform: translateY(-50rem);
    top: 72px;
    z-index: -1;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    padding-bottom: 25px;
    .navMobile {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 0;
      margin: 0 10px;
      gap: 7px;
      li {
        display: flex;
      }
      a {
        font-family: Plus Jakarta Sans;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: center;
        color: rgba(38, 38, 38, 1);
      }
    }

    #profilMobile {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      justify-content: center;
      margin-top: 15px;
      gap: 16px;
      #photoProfilMobile {
        background: linear-gradient(180deg, #ff6f47 0%, #ff9447 100%);
        display: flex;
        width: 132px;
        height: 132px;
        min-width: 132px;
        border-radius: 100px;
        img {
          width: 100%;
          border-radius: 100px;
        }
      }
      #profilInfosMobile {
        display: flex;
        flex-direction: column;
        #infosMobile {
          margin-top: -10px;
          display: flex;
          flex-direction: column;
          .email {
            font-family: Plus Jakarta Sans;
            font-size: 18px;
            font-weight: 600;
            line-height: 28px;
            letter-spacing: 0em;
            text-align: center;
            color: black;
            text-wrap: wrap;
          }
          a {
            text-decoration: underline;
            text-decoration-color: black;
            text-underline-offset: 3.5px;
            text-wrap: wrap;
          }
          .localisation {
            font-family: Plus Jakarta Sans;
            font-size: 18px;
            font-weight: 400;
            line-height: 28px;
            letter-spacing: 0em;
            margin-top: -15px;
          }
        }
        #socialMobile {
          margin-top: -3px;
          display: flex;
          a {
            flex: 1 1 auto;
          }
        }
      }
    }

    @media only screen and (max-width: 366px) {
      #socialMobile {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 10px;
      }
    }
  }
  /* Links Navigations */
  .nav {
    flex-direction: column;
    align-items: flex-start;
    li {
      font-family: Plus Jakarta Sans;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: center;
      a {
        color: rgba(38, 38, 38, 1);
      }
    }
  }

  #burger {
    position: absolute;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    right: 1rem;
    top: 1rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    & > div {
      height: 2px;
      background-color: #000;
      transition: 0.5s;
      z-index: 999;
    }
  }

  #mobileNavPaa {
    display: none;
    &:checked ~ #mobileNav {
      transform: translateX(0rem);
    }
    &:checked ~ #burger > div {
      background-color: black;
    }
    &:checked ~ #burger > div {
      &:nth-child(1) {
        transform: translateY(15px) rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-15px) rotate(-45deg);
      }
    }
  }

  #toTopButton {
    display: none;
  }
}
</style>
