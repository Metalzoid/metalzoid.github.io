<template>
  <div id="profil">
    <div id="photoProfil">
      <img src="../img/gui.png" alt="Photo de moi" />
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
      <NuxtLink to="/contact" class="hireMeProfilLink"
        ><button type="button" class="button hireMeProfil orangeButton">
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            size="2xs"
            style="color: #ffffff"
          />
          Hire me !
        </button></NuxtLink
      >
    </div>
  </div>
</template>
<style lang="scss">
#profil {
  background-color: white;
  height: 740px;
  width: 372px;
  border-radius: 32px;
  padding: 24px;
  gap: 38px;
  box-shadow: 0px 15px 20px -12px rgba(67, 54, 35, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
  #photoProfil {
    background: linear-gradient(180deg, #ff6f47 0%, #ff9447 100%);
    height: 400px;
    width: 324px;
    border-radius: 42px;
    gap: 10px;
    img {
      height: 400px;
      width: 324px;
      object-fit: cover;
      border-radius: 42px;
    }
  }
  #profilInfos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
    }

    #infos {
      width: 324px;
      height: 108px;

      .name {
        color: rgba(237, 104, 46, 1);
        font-family: Plus Jakarta Sans;
        font-size: 24px;
        font-weight: 600;
        line-height: 32px;
        letter-spacing: -0.02em;
        text-align: center;
        margin: auto;
      }

      .email {
        font-family: Plus Jakarta Sans;
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: center;
        color: black;
      }

      a {
        text-decoration: underline;
        text-decoration-color: black;
        text-underline-offset: 3.5px;
      }

      .localisation {
        font-family: Plus Jakarta Sans;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: center;
        margin-top: -12px;
      }
    }

    #social {
      margin-top: 50px;
      margin-bottom: 20px;
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 16px;
    }

    .hireMeProfilLink {
      display: flex;
      width: 100%;
      align-items: center;
    }

    .hireMeProfil {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 48px;
      gap: 5px;
    }
  }
}

@media only screen and (max-width: 855px) {
  #profil {
    background: none;
    height: auto;
    width: auto;
    border-radius: none;
    box-shadow: none;
    margin: 0;
    #photoProfil {
      width: 100%;
      max-width: 500px;
      object-fit: cover;
      display: flex;
      img {
        width: 100%;
        object-fit: cover;
        border-radius: 42px;
      }
    }
    #profilInfos {
      display: none;
    }
  }
}
</style>
