<template>
  <div id="compteurs1">
    <div id="compteurExperience">
      <h1 class="exp animatedNumber">
        <animateNumber :number="12" />
      </h1>
      <p>Années<br />d'expérience</p>
    </div>
    <div id="compteurProjects">
      <h1 class="projets animatedNumber">
        <!-- + {{ projectsNumber.toFixed(0) }} -->
        <animateNumber :number="5" />
      </h1>
      <p>Projets 360<br />finalisés</p>
    </div>
  </div>
  <div id="compteurs2">
    <div id="compteurClients">
      <h1 class="clients animatedNumber">
        <animateNumber :number="7" />
        <!-- + {{ clientsNumber.toFixed(0) }} -->
      </h1>
      <p>Clients<br />satisfaits</p>
    </div>
    <div id="compteurRedbull">
      <h1 class="redbull animatedNumber">
        <animateNumber :number="99" />
        <!-- + {{ redbullNumber.toFixed(0) }} -->
      </h1>
      <p>Litres de <br />Redbull</p>
    </div>
  </div>
</template>
<style lang="scss">
#compteurs {
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;

  h1 {
    font-family: Plus Jakarta Sans;
    font-size: 52px;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(237, 104, 46, 1);
  }

  p {
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 1px;
    text-align: left;
    color: rgba(38, 38, 38, 1);
    text-transform: uppercase;
  }

  #compteurs1 {
    flex: 1 1 auto;
    display: flex;
    min-width: 260px;

    #compteurExperience {
      flex: 1 1 auto;
    }

    #compteurProjects {
      flex: 1 1 auto;
    }
  }

  #compteurs2 {
    display: flex;
    flex: 1 1 auto;
    min-width: 260px;

    #compteurClients {
      flex: 1 1 auto;
    }

    #compteurRedbull {
      flex: 1 1 auto;
    }
  }
}
</style>
