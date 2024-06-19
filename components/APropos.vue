<template>
  <div id="aPropos">
    <div id="badgeAPropos">
      <button class="navButton">
        <font-awesome-icon
          icon="user"
          size="2xs"
          style="color: #000000"
          class="badgeUserIcon"
        /><span>À propos</span>
      </button>
    </div>
  <h2>
    Je vous accompagne sur
    <span>toutes les phases de conception de votre produit.</span>
  </h2>
  <p>
    <span
      >Avec un diplôme de Developpeur Web obtenu à l'école LeWagon de Bordeaux,</span
    >
    j'ai acquis les compétences nécessaires pour vous accompagner dans tous vos projets.

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
      font-family: Plus Jakarta Sans;
      font-size: 40px;
      font-weight: 500;
      line-height: 48px;
      letter-spacing: -0.02em;
      text-align: left;
      text-wrap: wrap;
      max-width: 792px;
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
      color: rgba(38, 38, 38, 1);
    }
  }
}
</style>
