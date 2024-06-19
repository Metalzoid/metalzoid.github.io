<template>
  <div id="expertise">
    <div id="badgeExpertise" class="badgeNav">
      <button class="navButton">
        <font-awesome-icon
          icon="fa-solid fa-comment-dots"
          style="color: #ffffff"
        /><span>Expertise</span>
      </button>
    </div>
    <div id="expertiseLogos">
      <div id="logoHtml" class="logos">
        <img src="../assets/img/Html.png" />
        <p>HTML</p>
      </div>
      <div id="logoCss" class="logos">
        <img src="../assets/img/Css.png" />
        <p>CSS</p>
      </div>
      <div id="logoJavascript" class="logos">
        <img src="../assets/img/Javascript.png" />
        <p>Javascript</p>
      </div>
      <div id="logoRuby" class="logos">
        <img src="../assets/img/Ruby.png" />
        <p>Ruby</p>
      </div>
      <div id="logoRails" class="logos">
        <img src="../assets/img/Rails.png" />
        <p>Ruby on Rails</p>
      </div>
      <div id="logoVueJS" class="logos">
        <img src="../assets/img/vueJS.png" />
        <p>Vue.js</p>
      </div>
      <div id="logoNuxtJS" class="logos">
        <img src="../assets/img/nuxtJS.png" />
        <p>Nuxt.js</p>
      </div>
      <div id="logoNodeJS" class="logos">
        <img src="../assets/img/postgreSQL.png" />
        <p>PostgreSQL</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#expertise {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

#expertiseLogos {
  display: flex;
  flex-direction: row;
  margin: 24px auto;
  flex-wrap: wrap;
  gap: 22.5px;
  justify-content: space-between;
}

#logoRails {
    img {
      margin-top: 15px;
      width: 140px !important;
    }
  }

.logos {
  border: solid 1px rgba(221, 205, 195, 1);
  width: 131px;
  height: 143px;
  border-radius: 32px;
  padding: 24px;
  gap: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    margin: auto;
    width: 90px;
    filter: grayscale(100%);
    transition: all 0.4s;


   }
   &:hover {
    img {
      filter: grayscale(0%);

    }

    }

  p {
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
    margin: 0 auto;
  }

  &:hover {
    border-color: rgba(237, 104, 46, 1);
    top: -10px;
    position: relative;
    box-shadow: 0px 15px 20px -12px rgba(67, 54, 35, 0.08);
    transition: all 0.5s;
  }
}

@media only screen and (max-width: 855px) {
  #expertiseLogos {
    justify-content: space-around;
    align-items: center;
  }
}
</style>
