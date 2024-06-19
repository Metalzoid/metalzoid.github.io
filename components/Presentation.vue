<template>
  <div id="presentation">
    <div id="hireMeIndex">
      <a href="/contact">
        <div id="logoHireMe">
          <img src="../assets/img/VectorhireMeElipse.png" class="vectorHireMe" />
          <img src="../assets/img/iconEnvelope.png" class="iconEnvelope" />
          <img src="../assets/img/elipseHireMe.png" class="elipseHireMe" />
        </div>
      </a>
    </div>
    <h1>
      Salut 👋 ! Je suis <span>Florian</span>, développeur web fullstack Junior !
    </h1>
    <p>
      <span
        ><strong>Je vous accompagne sur vos projets de A à Z !</strong></span
      >
      Porteur de projet ? Du budget mais aucune compétence technique ?
      <strong>Je conçois, développe et déploie votre produit</strong>, et vous accompagne pour vous staffer correctement !
    </p>
  </div>
</template>
<style lang="scss">
#intro {
  display: flex;
  flex-direction: column;
}

#presentation {
  h1 {
    font-family: Plus Jakarta Sans;
    font-size: 52px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(38, 38, 38, 1);
    text-wrap: wrap;
    max-width: 700px;
    span {
      font-family: Plus Jakarta Sans;
      font-size: 52px;
      font-weight: 400;
      line-height: 63px;
      letter-spacing: -0.02em;
      text-align: left;
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
    max-width: 700px;
    text-wrap: wrap;
    margin-bottom: 50px;
    span {
      font-family: Plus Jakarta Sans;
      font-size: 18px;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(237, 104, 46, 1);
    }
  }
}

#hireMeIndex {
  float: right;
  padding-top: 35px;

  #logoHireMe {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 128px;
    width: 128px;

    .iconEnvelope {
      position: absolute;
    }

    .vectorHireMe {
      position: absolute;
    }

    .vectorHireMe:hover {
      rotate: left;
      animation: vectorHireMe 2s infinite linear;
    }

    @keyframes vectorHireMe {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }
  }
}
@media only screen and (max-width: 855px) {
  #hireMeIndex {
    display: none;
  }
}
</style>
