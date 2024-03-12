<template>
  <div id="hireMeIndex">
    <a href="/contact">
      <div id="logoHireMe">
        <img src="../img/VectorhireMeElipse.png" class="vectorHireMe" />
        <img src="../img/iconEnvelope.png" class="iconEnvelope" />
        <img src="../img/elipseHireMe.png" class="elipseHireMe" />
      </div>
    </a>
  </div>
  <h1>
    Salut 👋 ! Je suis <span>Guillaume</span>, CTO et développeur web fullstack
    freelance.
  </h1>
  <p>
    <span
      ><strong>Je vous accompagne sur vos projets les plus fous !</strong></span
    >
    Porteur de projet ? Du budget mais aucune compétence technique ?
    <strong>Je conçois, développe et déploie votre produit</strong>, du MVP à la
    release, et vous accompagne pour vous staffer correctement !
  </p>
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
  }

  span {
    color: rgba(237, 104, 46, 1);
  }
}

#hireMeIndex {
  float: right;
  padding-top: 35px;
  padding-right: 80px;

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
