<style lang="scss">
@import "../styles/style.css";
</style>

<template>
  <div>
    <div id="main">
      <div id="profil">
        <Profil />
      </div>
      <div id="mainPage">
        <div id="intro">
          <div id="presentation">
            <Presentation />
          </div>
          <hr />
          <div id="compteurs" ref="root">
            <Compteurs />
          </div>
        </div>
        <div id="aPropos">
          <APropos />
        </div>
        <div id="lastProjects">
          <LastProjects />
        </div>
        <div id="expertise">
          <Expertise />
        </div>
        <div id="avisClients">
          <AvisClients />
        </div>
        <div id="hireMeBottom" class="orangeButton">
          <HireMeBottomIndex />
        </div>
        <FooterPage />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
#main {
  gap: 0px;
  display: flex;
  justify-content: center;
  margin: 122px 0 0 0;
  padding: 0px;
}

#mainPage {
  max-width: 900px;
  gap: 70px;
  display: flex;
  flex-direction: column;
  padding: 32px 0px 32px 0px;
  margin: 0 40px;
  flex: 0.1 1 auto;
}

hr {
  border: none;
  border-top: solid 1px rgba(221, 205, 195, 1);
  width: 100%;
}
</style>
