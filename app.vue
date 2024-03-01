<style>
@import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;700&display=swap");
</style>

<template>
  <div>
    <header>
      <div id="navigation">
        <NuxtLink to="./"
          ><img class="logo" src="/img/logo.svg" alt="logo"
        /></NuxtLink>
        <div id="nav">
          <ul class="nav">
            <li>
              <NavigationLink link="./" activeElementId="intro"
                >Acceuil</NavigationLink
              >
            </li>
            <li>
              <NavigationLink link="/#aPropos" activeElementId="aPropos"
                >À propos</NavigationLink
              >
            </li>
            <li>
              <NavigationLink link="/#expertise" activeElementId="expertise"
                >Expertise</NavigationLink
              >
            </li>
            <li>
              <NavigationLink link="/#avisClients" activeElementId="avisClients"
                >Avis</NavigationLink
              >
            </li>
            <li>
              <NavigationLink
                link="/#lastProjects"
                activeElementId="lastProjects"
                >Projets Réalisés</NavigationLink
              >
            </li>
            <li>
              <NavigationLink
                link="/contact"
                activeClass="active"
                activeElementId="mainPageContact"
                >Contact</NavigationLink
              >
            </li>
          </ul>
        </div>
        <NuxtLink to="/contact" class="test"
          ><button type="button" class="button hireMeNav orangeButton">
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              size="2xs"
              style="color: #ffffff"
            />Hire me !
          </button></NuxtLink
        >
        <div id="mobileNavDiv">
          <input type="checkbox" id="mobileNavPaa" />
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
                  <NuxtLink to="mailto:guillaume@gagnaire.dev"
                    ><p class="email">guillaume@gagnaire.dev</p></NuxtLink
                  >
                  <p class="localisation">Bordeaux</p>
                </div>
                <div id="socialMobile">
                  <NuxtLink to="https://github.com/guillaume-gagnaire"
                    ><img
                      class="github"
                      src="/img/Icon Buttongithub.png"
                      alt="Mon GitHub"
                  /></NuxtLink>
                  <NuxtLink to="https://www.linkedin.com/in/guillaume-gagnaire"
                    ><img
                      class="linkedin"
                      src="/img/Icon Buttonlinkedin.png"
                      alt="Mon LinkedIn"
                  /></NuxtLink>
                  <NuxtLink to="https://www.malt.fr/profile/guillaumegagnaire"
                    ><img
                      class="malt"
                      src="/img/Icon Buttonmalt.png"
                      alt="Mon Malt"
                  /></NuxtLink>
                </div>
              </div>
            </div>
            <hr />
            <ul class="nav">
              <li>
                <NuxtLink to="./" class="active"
                  ><img
                    src="/img/mobileNav/index.png"
                    alt=""
                  />Acceuil</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="./#aPropos"
                  ><img src="/img/mobileNav/aPropos.png" alt="" />À
                  propos</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="./#expertise"
                  ><img
                    src="/img/mobileNav/expertise.png"
                    alt=""
                  />Expertise</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="./#avisClients"
                  ><img src="/img/mobileNav/avis.png" alt="" />Avis</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="./#lastProjects"
                  ><img src="/img/mobileNav/projects.png" alt="" />Projets
                  Réalisés</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/contact"
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
</template>
<style lang="scss">
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
  justify-items: center;
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
}

#nav {
  display: flex;
  flex-direction: row;
  list-style: none;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;

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

  li {
    list-style: none;
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
  flex: 0.5 0 auto;
  gap: 7px;

  li {
    display: flex;
    flex: 1 1 auto;
  }
}

@media only screen and (min-width: 855px) {
  #mobileNav {
    display: none;
  }
}
</style>
