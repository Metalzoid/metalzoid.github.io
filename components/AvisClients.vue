<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import opinionsData from "../assets/data/opinions.json";
const carouselAvis = ref(null);
const items = opinionsData;
</script>

<template>
  <div>
    <div id="badgeopinionsClients" class="badgeNav">
      <button class="navButton">
        <font-awesome-icon
          icon="fa-solid fa-star"
          size="sm"
          style="color: #ffffff"
        /><span>Avis clients</span>
      </button>
    </div>
    <div id="introOpinions">
      <h2>Ils m'ont fait <span>confiance !</span></h2>
    </div>

    <Carousel
      ref="carouselAvis"
      :wrap-around="true"
      :items-to-show="1"
      snap-align="center"
    >
      <Slide v-for="item in items" :key="item.id" :index="item.id">
        <div id="carousel__item">
          <div id="opinionsClientsBox">
            <div id="enTeteopinionsClient">
              <div id="logoClient" class="orangeButton">
                <p class="initialeClient">{{ item.initial }}</p>
              </div>
              <div id="clientInfos">
                <h3>{{ item.name }}</h3>
                <div id="entNameDate">
                  <span class="entrepriseName">{{ item.company }}</span>
                  <span class="separate">•</span>
                  <span class="date">{{ item.date }}</span>
                </div>
              </div>
            </div>
            <div id="opinions">
              <p class="opinions">
                {{ item.opinion }}
              </p>
            </div>
          </div>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>
<style lang="scss">
#introOpinions {
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

#carousel__item {
  min-height: 200px;
  min-width: 100%;
  border: solid 1px rgba(221, 205, 195, 1);
  border-radius: 32px;
  &:hover {
    border-color: rgba(237, 104, 46, 1);
  }
  #opinionsClientsBox {
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    #enTeteopinionsClient {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 25px;
      #logoClient {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 56px;
        width: 56px;
        min-width: 56px;
        background: linear-gradient(
          90deg,
          rgba(237, 104, 46, 1),
          rgba(255, 156, 44, 1)
        );
        border-radius: 100px;

        .initialeClient {
          font-family: Plus Jakarta Sans;
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
          letter-spacing: -0.02em;
          text-align: center;
          color: white;
        }
      }

      #clientInfos {
        margin-left: 15px;
        margin-top: -15px;
        display: flex;
        flex-direction: column;
        h3 {
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
          flex-wrap: wrap;
          gap: 5px;
          margin-top: -15px;
          font-family: Plus Jakarta Sans;
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: 0em;
          text-align: left;
          color: rgba(23, 23, 23, 1);
          list-style: none;
          .separate {
            font-weight: 400;
            font-size: 11px;
          }
          .entrepriseName {
            color: rgba(237, 104, 46, 1);
          }
          .date {
            font-weight: 400;
          }
        }
      }
    }

    .opinions {
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
}

/* Navigation opinions */
</style>
