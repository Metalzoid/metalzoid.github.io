<template>
  <div id="badgeAvisClients" class="badgeNav">
    <button class="navButton">
      <font-awesome-icon
        icon="fa-solid fa-star"
        size="sm"
        style="color: #ffffff"
      /><span class="navButtonText">Avis clients</span>
    </button>
  </div>
  <h2>Ils m’ont fait <span>confiance !</span></h2>
  <div id="avisClientsBox">
    <div id="enTeteAvisClient">
      <div id="logoClient" class="orangeButton">
        <p class="initialeClient">J</p>
      </div>
      <div id="clientInfos">
        <h3>Jonathan Piboteau</h3>
        <div id="entNameDate">
          <li class="entrepriseName">Noci</li>
          <li>date</li>
        </div>
      </div>
    </div>
    <div id="avis">
      <p class="avis">
        Guillaume c'est le talent technique dont vous avez besoin. Niveau dev,
        il excelle. Humainement, c'est le top.Et a cela , il ajoute une vrai
        connaisance sur les sujets transverses a la tech (design , marketing,
        ...) Ce n'est pas pour rien si nous continus a faire appel à lui en tant
        que Freelance après 3 ans de salariat Nociazeazeazeaz aze aez azee aeaze
        aez aze aze aze aze aze aze
      </p>
    </div>
  </div>
  <div id="navAvis">
    <font-awesome-icon
      icon="fa-solid fa-arrow-left"
      size="xs"
      class="iconNavAvis"
    />
    <p class="idAvis">1</p>
    <p>/</p>
    <p class="totalAvis">4</p>
    <font-awesome-icon
      icon="fa-solid fa-arrow-right"
      size="xs"
      class="iconNavAvis"
    />
  </div>
</template>
<style lang="scss">
#avisClients {
  padding-top: 72px;

  h2 {
    font-family: Plus Jakarta Sans;
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(23, 23, 23, 1);

    span {
      color: rgba(237, 104, 46, 1);
    }
  }
}

#avisClientsBox {
  border: solid 1px rgba(221, 205, 195, 1);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;

  &:hover {
    border-color: rgba(237, 104, 46, 1);
  }

  #enTeteAvisClient {
    display: flex;
    flex-direction: row;
  }

  #logoClient {
    height: 56px;
    width: 56px;
    background: linear-gradient(
      90deg,
      rgba(237, 104, 46, 1),
      rgba(255, 156, 44, 1)
    );
    border-radius: 100px;
    margin: 42px;

    .initialeClient {
      font-family: Plus Jakarta Sans;
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      letter-spacing: -0.02em;
      text-align: center;
      color: white;
      margin: 11px;
    }
  }

  #clientInfos {
    height: 52px;
    margin: 30px 0 0 0;

    h2 {
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
      gap: 10px;
      margin-top: -15px;
      font-family: Plus Jakarta Sans;
      font-size: 13px;
      font-weight: 500;
      line-height: 24px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(23, 23, 23, 1);

      .entrepriseName {
        list-style: none;
        color: rgba(237, 104, 46, 1);
      }
    }
  }

  .avis {
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

/* Navigation Avis */
#navAvis {
  margin-top: 30px;
  display: flex;
  align-items: center;

  p {
    margin: -5px 7px 0px 7px;
    font-family: Plus Jakarta Sans;
    font-size: 17px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }

  .iconNavAvis {
    display: flex;
    background-color: white;
    border: solid 1px rgba(221, 205, 195, 1);
    border-radius: 100px;
    padding: 13px;
    box-shadow: 0px 2px 2px 0px rgba(41, 43, 50, 0.05);
  }

  .idAvis {
    color: rgba(237, 104, 46, 1);
  }

  .navButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(23, 23, 23, 1);
    border-radius: 24px;
    padding: 6px 16px;
    gap: 6px;
  }

  .navButtonText {
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    margin: 0;
  }
}
</style>
