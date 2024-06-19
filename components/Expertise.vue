<template>
  <div id="badgeExpertise" class="badgeNav">
    <button class="navButton">
      <font-awesome-icon
        icon="fa-solid fa-comment-dots"
        style="color: #ffffff"
      /><span>Expertise</span>
    </button>
  </div>
  <div id="expertiseLogos">
    <div id="logoNodeJS" class="logos">
      <img src="../assets/img/nodeJS.png" />
      <p>Node.js</p>
    </div>
    <div id="logoJavascript" class="logos">
      <img src="../assets/img/Javascript.png" />
      <p>Javascript</p>
    </div>
    <div id="logoVueJS" class="logos">
      <img src="../assets/img/vueJS.png" />
      <p>Vue.js</p>
    </div>
    <div id="logoNuxtJS" class="logos">
      <img src="../assets/img/nuxtJS.png" />
      <p>Nuxt.js</p>
    </div>
    <div id="logoK8s" class="logos">
      <img src="../assets/img/K8s.png" />
      <p>K8s</p>
    </div>
    <div id="logoPwa" class="logos">
      <img src="../assets/img/Pwa.png" />
      <p>Pwa</p>
    </div>
    <div id="logoHtml" class="logos">
      <img src="../assets/img/Html.png" />
      <p>HTML</p>
    </div>
    <div id="logoCss" class="logos">
      <img src="../assets/img/Css.png" />
      <p>CSS</p>
    </div>
  </div>
</template>
<style lang="scss">
#expertise {
  padding-top: 72px;
  margin-bottom: -50px;
}

#expertiseLogos {
  display: flex;
  flex-direction: row;
  margin: 24px auto;
  flex-wrap: wrap;
  gap: 22.5px;
  justify-content: space-around;
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

  img {
    margin: auto;
  }

  p {
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: center;
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
