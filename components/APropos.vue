<template>
  <div id="badgeAPropos">
    <button class="navButton">
      <font-awesome-icon
        icon="fa-solid fa-user"
        size="2xs"
        style="color: #000000"
        class="badgeUserIcon"
      /><span class="navButtonText">À propos</span>
    </button>
  </div>
  <h2>
    Je vous accompagne sur
    <span>toutes les phases de conception de votre produit.</span>
  </h2>
  <p>
    <span
      >Avec une expérience de plus de 8 ans, je me suis forgé une expertise
      solide dans le monde numérique.</span
    >
    J'ai pu accompagner des start-ups dans des univers radicalement différents
    (intérim, chatbot, conseil produit, marketing) et ma vision orientée
    business, ainsi que mon esprit d'entrepreneur me permettent de m'adapter
    facilement à votre vision, votre besoin.
  </p>
  <p>
    Votre CTO à la naissance de votre startup n'est pas forcément le même CTO
    dont vous aurez besoin lorsque vous aurez une équipe complète de
    développeurs.<span>
      C'est pourquoi je vous accompagne sur les phases de conception et de mise
      en oeuvre de votre produit pour votre V1, ou votre refonte de V2 !</span
    >
  </p>
  <p>
    Vision globale, mais les mains dans le cambouis,
    <span
      >je donne vie à vos projets et vous accompagne sur les différentes
      évolutions de votre produit</span
    >
    pour s'adapter à ce qui compte véritablement : vos clients.
  </p>
</template>
<style lang="scss">
.badgeUserIcon {
  background-color: white;
  padding: 3px;
  border-radius: 10px;
}

#aPropos {
  margin-bottom: -50px;
  margin-top: 72px;

  h2 {
    font-family: Plus Jakarta Sans;
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(23, 23, 23, 1);
    text-wrap: wrap;
    max-width: 792px;

    span {
      color: rgba(237, 104, 46, 1);
    }
  }

  p {
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(38, 38, 38, 1);
    max-width: 795px;
    text-wrap: wrap;

    span {
      font-family: Plus Jakarta Sans;
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
    }
  }
}
</style>
