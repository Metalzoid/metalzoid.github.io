<template>
  <div id="hireMeBottomContent">
    <img src="../img/hireMeBottomLogo.png" class="hireMeBottomLogo" />
    <div id="hireMeBottomContentAndButton">
      <h4>Besoin d’un accompagnement pour votre projet ?</h4>
      <NuxtLink to="/contact"
        ><button type="button" class="button">
          <img src="../img/iconEnvelope.png" /> Hire me !
        </button></NuxtLink
      >
    </div>
  </div>
</template>
<style lang="scss">
#hireMeBottom {
  box-shadow: 0px 15px 40px -12px rgba(255, 111, 71, 0.3);
  display: flex;

  #hireMeBottomContent {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: 25px;

    h4 {
      font-family: Plus Jakarta Sans;
      font-size: 28px;
      font-weight: 500;
      line-height: 36px;
      letter-spacing: -0.02em;
      text-align: left;
      color: white;
      max-width: 90%;
      text-wrap: wrap;
    }

    button {
      width: 139px;
      height: 48px;
      border-radius: 100px;
      box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.1);
      color: rgba(237, 104, 46, 1);
      font-family: Plus Jakarta Sans;
      font-size: 18px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: center;
      border: solid 1px rgba(221, 205, 195, 1);
      margin-bottom: 30px;
      margin-top: -20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a {
      text-decoration: none;
    }
  }
  #hireMeBottomContentAndButton {
    margin-left: 40px;
  }
}

@media only screen and (max-width: 855px) {
  #hireMeBottom {
    border-radius: 44px;
    min-width: fit-content;
    #hireMeBottomContent {
      flex-direction: column;
      align-items: flex-start;
      padding: 25px;
      border-radius: 25px;
      margin: 0;
      max-width: none;
      .hireMeBottomLogo {
        display: none;
      }
      #hireMeBottomContentAndButton {
        margin: 0;
      }
    }
  }
}
</style>
