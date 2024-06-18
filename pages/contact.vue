<script>
import Ajv from "ajv";
import addFormats from "ajv-formats";
export default {
  data() {
    return {
      formData: {
        firstname: "",
        name: "",
        email: "",
        phoneNumber: "",
        entreprise: "",
        message: "",
      },
      errors: {},
      formIsValid: "",
    };
  },

  methods: {
    validateForm(field) {
      const validateRules = {
        firstname: { type: "string", minLength: 1 },
        name: { type: "string", minLength: 1 },
        email: { type: "string", format: "email" },
        phoneNumber: { type: "string", pattern: "^\\+?[0-9. ()-]*$" },
        message: { type: "string", minLength: 1 },
      };

      const ajv = new Ajv();
      addFormats(ajv);
      const validate = ajv.compile(
        field === undefined
          ? {
              type: "object",
              properties: validateRules,
              required: ["firstname", "name", "email", "message"],
            }
          : validateRules[field]
      );

      const isValid = validate(
        field === undefined ? this.formData : this.formData[field]
      );

      if (!isValid) {
        this.errors[field] = validate.errors.reduce((acc, error) => {
          acc[error.instancePath.slice(1)] = error.message;
          return acc;
        }, {});
      } else {
        this.errors = {};
      }
    },

    FormValid() {
      this.validateForm();
      if (Object.keys(this.errors).length === 0) {
        // Logique d'envoi du formulaire ici
        this.formIsValid = true;
        console.log(this.formIsValid);
      } else {
        this.formIsValid = false;
        console.log(this.formIsValid);
      }
    },

    submitForm() {
      this.validateForm();
      // Si le formulaire est valide, vous pouvez envoyer les données
      if (Object.keys(this.errors).length <= 0) {
        // Logique d'envoi du formulaire ici
        console.log("Formulaire valide, données envoyées:", this.formData);
      } else {
        console.log("Formulaire invalide, veuillez corriger les erreurs.");
      }
    },
  },
};
</script>
<template>
  <div id="mainPageContact">
    <div id="content">
      <h1><span>Et si on parlait</span> de votre projet ?</h1>
      <p class="presentationContact">
        <span>N'attendez plus pour donner vie à votre projet en ligne !</span
        ><br />
        Contactez-moi dès aujourd'hui et discutons ensemble de la meilleure
        manière de concrétiser vos idées.
      </p>
      <hr />
      <div id="profilContact">
        <img src="../img/flo.png" alt="Photo de Moi" class="photoProfil" />

        <div id="infosProfil">
          <a href="mailto:guillaume@gagnaire.dev">guillaume@gagnaire.dev</a>
          <p class="localisation">Bordeaux</p>
          <div id="social">
            <a href="https://github.com/guillaume-gagnaire"
              ><img
                class="github"
                src="../img/Icon Buttongithub.png"
                alt="Mon GitHub"
            /></a>
            <a href="https://www.linkedin.com/in/guillaume-gagnaire"
              ><img
                class="linkedin"
                src="../img/Icon Buttonlinkedin.png"
                alt="Mon LinkedIn"
            /></a>
            <a href="https://www.malt.fr/profile/guillaumegagnaire"
              ><img
                class="malt"
                src="../img/Icon Buttonmalt.png"
                alt="Mon Malt"
            /></a>
          </div>
        </div>
      </div>
      <FooterPage />
    </div>
    <form
      id="form"
      method="post"
      class="form"
      @submit.prevent="submitForm"
      @input="FormValid"
    >
      <div id="formContent">
        <h6 id="formTitle">
          Laissez-moi vos coordonnées <br />et
          <span>je vous recontacterai rapidement !</span>
        </h6>

        <div id="formInputs">
          <div id="formNameDiv">
            <div id="formFirstname">
              <label for="firstname">Prénom</label>
              <input
                type="text"
                placeholder="Prénom"
                name="firstname"
                id="firstname"
                class="inputs"
                v-model="formData.firstname"
                @blur="validateForm('firstname')"
                @focusin="errors.firstname = ''"
              />
              <div v-if="errors.firstname" class="errorMessage">
                Votre prénom est nécessaire !
              </div>
            </div>
            <div id="formName">
              <label for="name">Nom</label>
              <input
                type="text"
                placeholder="Nom"
                name="name"
                id="name"
                class="inputs"
                v-model="formData.name"
                @blur="validateForm('name')"
                @focusin="errors.name = ''"
              />
              <div v-if="errors.name" class="errorMessage">
                Votre nom est nécessaire !
              </div>
            </div>
          </div>
          <div id="formContactInfos">
            <div id="formEmail">
              <label for="email">Votre adresse e-mail</label>
              <input
                type="text"
                placeholder="Ex: exemple@exemple.fr"
                name="email"
                id="email"
                class="inputs"
                v-model="formData.email"
                @blur="validateForm('email')"
                @focusin="errors.email = ''"
              />
              <div v-if="errors.email" class="errorMessage">
                Un email valide est nécessaire !
              </div>
            </div>
            <div id="formPhone">
              <label for="phoneNumber">Votre téléphone</label>
              <input
                type="tel"
                placeholder="Ex: 06 11 22 33 44"
                name="phoneNumber"
                id="phoneNumber"
                class="inputs"
                v-model="formData.phoneNumber"
                @blur="validateForm('phoneNumber')"
                @focusin="errors.phoneNumber = ''"
              />
              <div v-if="errors.phoneNumber" class="errorMessage">
                Un numéro de téléphone valide est nécessaire !
              </div>
              <span v-if="formData.phoneNumber.length === 0">Facultatif</span>
            </div>
          </div>
          <div id="formEntrepriseInfos">
            <label for="entreprise">Entreprise</label>
            <input
              type="text"
              placeholder="Ex: Monentreprise"
              name="entreprise"
              id="entreprise"
              class="entreprise inputs"
              v-model="formData.entreprise"
            />

            <span v-if="formData.entreprise.length === 0">Facultatif</span>
          </div>
          <div id="titleMessage">
            <label for="message">Votre Projet</label>
          </div>
          <div id="messageDiv">
            <div id="messageLength">{{ formData.message.length }} / 300</div>
            <textarea
              id="message"
              name="message"
              placeholder="Dites-moi en plus sur votre projet !"
              v-model="formData.message"
              maxlength="300"
              @blur="validateForm('message')"
              @focusin="errors.message = ''"
            ></textarea>
            <div v-if="errors.message" class="errorMessage">
              Votre message est nécessaire !
            </div>
          </div>
          <div id="submitButton">
            <p>
              En cliquant sur “Envoyer votre message”, vous acceptez d’être
              contacté par e-mail ou appel téléphonique. Aucun e-mail a des fins
              commerciales ne vous sera envoyé.
            </p>
            <button
              type="submit"
              class=""
              v-bind:class="{ orangeButton: formIsValid }"
            >
              Envoyer votre message
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
@media only screen and (max-width: 600px) {
  #formNameDiv {
    flex-direction: column;
    #formFirstname {
      margin-bottom: 15px;
    }
  }
  #formContactInfos {
    flex-direction: column;
    #formEmail {
      margin-bottom: 15px;
    }
  }
}

@media only screen and (max-width: 855px) {
  #mainPageContact {
    flex-direction: column;
    align-items: center;
    margin: 50px 10px 10px 10px;
    footer {
      display: none;
    }
  }
}

#mainPageContact {
  display: flex;
  justify-content: space-around;
  margin: 130px 60px 50px 60px;
  gap: 15px;
}

#content {
  display: flex;
  flex-direction: column;
  h1 {
    font-family: Plus Jakarta Sans;
    font-size: 52px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: -0.02em;
    text-align: left;
    color: rgba(23, 23, 23, 1);
    max-width: 390px;

    span {
      color: rgba(237, 104, 46, 1);
    }
  }

  .presentationContact {
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(38, 38, 38, 1);
    max-width: 650px;

    span {
      font-family: Plus Jakarta Sans;
      font-size: 18px;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(237, 104, 46, 1);
    }
  }
}

#profilContact {
  display: flex;
  gap: 16px;

  .photoProfil {
    width: 140px;
    height: fit-content;
    object-fit: contain;
    background: linear-gradient(180deg, #ff6f47 0%, #ff9447 100%);
    border-radius: 100px;
    border: solid 1px white;
  }

  #infosProfil {
    display: flex;
    flex-direction: column;
    margin-top: 16px;

    a {
      font-family: Plus Jakarta Sans;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(38, 38, 38, 1);
      text-underline-offset: 3px;
    }
    p {
      font-family: Plus Jakarta Sans;
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(38, 38, 38, 1);
      margin-top: 7px;
    }
    #social {
      margin-top: 10px;
    }
  }
}

footer {
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  .footerParagraph {
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(163, 163, 163, 1);
  }
}

#form {
  display: flex;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 15px 20px -12px rgba(67, 54, 35, 0.08);
  gap: 16px;
  padding: 0 32px 32px 32px;
  border-radius: 32px;
  flex: 0.9 0.1 auto;

  .errorMessage {
    position: absolute;
    background-color: white;
    display: flex;
    border: solid 1px black;
    border-radius: 15px;
    padding: 3px 8px;
    bottom: -29px;
    margin: 0;
  }

  #formContent {
    display: flex;
    flex-direction: column;
    width: 100%;
    #formTitle {
      font-family: Plus Jakarta Sans;
      font-size: 24px;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: -0.02em;
      text-align: left;
      color: rgba(38, 38, 38, 1);

      span {
        color: rgba(237, 104, 46, 1);
      }
    }

    #formInputs {
      display: flex;
      flex-direction: column;
      gap: 30px;
      flex-wrap: wrap;

      .inputs {
        border: none;
        border-bottom: solid 1px rgba(221, 205, 195, 1);
        outline: none;
        color: rgba(23, 23, 23, 1);
      }

      #formNameDiv {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }

      #formFirstname {
        display: flex;
        flex-direction: column;
        font-family: Plus Jakarta Sans;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(23, 23, 23, 1);
        gap: 16px;
        flex: 1;
        justify-content: space-between;
        position: relative;
        input {
          font-family: Plus Jakarta Sans;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(23, 23, 23, 1);
          padding: 10px 0;
          flex: 1;
          transition: all 1s;
        }
        :focus {
          border-bottom: solid 1px rgba(237, 104, 46, 1);
        }
      }
      #formName {
        display: flex;
        flex-direction: column;
        font-family: Plus Jakarta Sans;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(23, 23, 23, 1);
        gap: 16px;
        flex: 1;
        justify-content: space-between;
        position: relative;
        input {
          font-family: Plus Jakarta Sans;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(23, 23, 23, 1);
          flex: 1;
          padding: 10px 0;
          transition: all 1s;
        }
        :focus {
          border-bottom: solid 1px rgba(237, 104, 46, 1);
        }
      }
      #formContactInfos {
        display: flex;
        gap: 16px;
        #formEmail {
          font-family: Plus Jakarta Sans;
          font-size: 14px;
          font-weight: 500;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(23, 23, 23, 1);
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
          position: relative;
          input {
            font-family: Plus Jakarta Sans;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            flex: 1;
            color: rgba(23, 23, 23, 1);
            padding: 10px 0;
            transition: all 1s;
          }
          :focus {
            border-bottom: solid 1px rgba(237, 104, 46, 1);
          }
        }
        #formPhone {
          display: flex;
          flex-direction: column;
          gap: 16px;
          position: relative;
          flex: 1;
          input {
            font-family: Plus Jakarta Sans;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            flex: 1;
            color: rgba(23, 23, 23, 1);
            padding: 10px 0;
            transition: all 1s;
          }
          :focus {
            border-bottom: solid 1px rgba(237, 104, 46, 1);
          }
          span {
            position: absolute;
            right: 0;
            bottom: 10px;
            font-family: Plus Jakarta Sans;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            color: rgba(115, 115, 115, 1);
          }
        }
      }
      #formEntrepriseInfos {
        display: flex;
        flex-direction: column;
        gap: 16px;
        font-family: Plus Jakarta Sans;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(23, 23, 23, 1);
        position: relative;
        input {
          font-family: Plus Jakarta Sans;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          padding: 10px 0;
          transition: all 1s;
        }
        :focus {
          border-bottom: solid 1px rgba(237, 104, 46, 1);
        }
        span {
          position: absolute;
          right: 0;
          bottom: 10px;
          font-family: Plus Jakarta Sans;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(115, 115, 115, 1);
        }
      }
      #titleMessage {
        display: flex;
        justify-content: space-between;
        font-family: Plus Jakarta Sans;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(23, 23, 23, 1);
        span {
          font-family: Plus Jakarta Sans;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(115, 115, 115, 1);
        }
      }
      #messageDiv {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        textarea {
          width: 100%;
          height: auto;
          min-height: 150px;
          resize: none;
          outline: none;
          border: 1px solid rgba(221, 205, 195, 1);
          border-radius: 12px;
          padding: 8px 12px;
          box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
          font-family: Plus Jakarta Sans;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          transition: all 1s;
        }
        #messageLength {
          position: absolute;
          right: 10px;
          top: -30px;
          font-family: Plus Jakarta Sans;
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(115, 115, 115, 1);
        }
        :focus {
          border: solid 1px rgba(237, 104, 46, 1);
        }
      }
      #submitButton {
        display: flex;
        flex-direction: column;
        gap: 16px;
        p {
          font-family: Plus Jakarta Sans;
          font-size: 11px;
          font-weight: 400;
          line-height: 14px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(115, 115, 115, 1);
          max-width: 550px;
        }
        button {
          max-width: 255px;
          padding: 16px 24px;
          background: rgba(216, 217, 221, 1);
          color: white;
          border: none;
          border-radius: 100px;
          font-family: Plus Jakarta Sans;
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: center;
          &.orangeButton {
            background: linear-gradient(91.51deg, #ed682e 3.8%, #ff9c2c 95.89%);
            font-family: Plus Jakarta Sans;
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;
            letter-spacing: 0em;
            text-align: center;
            color: white;
            border: solid 1px rgba(221, 205, 195, 1);
            box-shadow: 0px 2px 2px 0px rgba(41, 43, 50, 0.05);
            border-radius: 100px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
