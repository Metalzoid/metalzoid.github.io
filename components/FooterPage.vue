<template>
  <footer>
    <hr />
    <img src="../assets/img/logo.png" class="footerLogo" />
    <p>© 2024 Florian Gagnaire. Tous droits réservés.</p>
  </footer>
</template>
<style lang="scss">
footer {
  display: flex;
  align-items: center;
  hr {
    border: none;
    border-top: solid 1px rgba(221, 205, 195, 1);
    width: 100%;
  }

  img {
    align-items: center;
    width: 350px;

  }

  p {
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    max-width: 792px;
    height: 20px;
    color: rgba(163, 163, 163, 1);
    margin-bottom: 80px;
  }
}
</style>
