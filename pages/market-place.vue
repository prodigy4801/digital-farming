<template>
  <div>
    <section class="header-slider-area">
      <div
        id="carousel-example-generic"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            class="active"
          ></li>
        </ol>
        <div class="content">
          <div class="container-commodity">
            <div class="container">
              <h2 class="commodity__title white">
                Select a product to buy/sell
              </h2>
              <div class="row">
                <div class="col-md-12 text-center">
                  <button
                    @click="productData(1)"
                    id="button_1"
                    :class="produce === 1 ? 'family__button__pressed' : 'family__button'"
                  >
                    <img
                      class="family__white-circle"
                      src="@/assets/images/market_place/small_image.png"
                      alt="Grains"
                    >
                    Grains
                  </button>
                  <button
                    @click="productData(2)"
                    id="button_1"
                    :class="produce === 2 ? 'family__button__pressed' : 'family__button'"
                  >
                    <img
                      class="family__white-circle"
                      src="@/assets/images/market_place/small_nuts.png"
                      alt="Nuts Fruits"
                    >
                    Nuts
                  </button>
                  <button
                    @click="productData(3)"
                    id="button_1"
                    :class="produce === 3 ? 'family__button__pressed' : 'family__button'"
                  >
                    <img
                      class="family__white-circle"
                      src="@/assets/images/market_place/small_coffee.png"
                      alt="Coffee"
                    >
                    Green Coffee
                  </button>
                  <button
                    @click="productData(4)"
                    id="button_1"
                    :class="produce === 4 ? 'family__button__pressed' : 'family__button'"
                  >
                    <img
                      class="family__white-circle"
                      src="@/assets/images/market_place/small_olive.png"
                      alt="Olive Oil"
                    >
                    Olive Oil
                  </button>
                  <hr class="hr_separator">
                </div>
              </div>
              <div
                v-show="produce === 1"
                class="row justify-content-center"
              >
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_rice.svg"
                        alt="Rice"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Rice</p>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_corn.svg"
                        alt="Corn"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Corn</p>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_wheat.png"
                        alt="Wheat"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Wheat</p>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_barley.png"
                        alt="Barley"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Barley</p>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div
                v-show="produce === 2"
                class="row justify-content-center"
              >
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_almond.png"
                        alt="Almond"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Almond</p>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_nut2.png"
                        alt="Walnut"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Walnut</p>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_cashew.png"
                        alt="Cashew"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Cashew</p>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_peanut.png"
                        alt="Peanut"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Peanut</p>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_hazelnut.png"
                        alt="Hazelnut"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Hazelnut</p>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div
                v-show="produce === 3"
                class="row justify-content-center"
              >
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_specialty_coffee.png"
                        alt="Special Coffee"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Special Coffee</p>
                    </nuxt-link>
                  </div>
                </div>
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_main_coffee.png"
                        alt="Coffee"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Coffee</p>
                    </nuxt-link>
                  </div>
                </div>
              </div>
              <div
                v-show="produce === 4"
                class="row justify-content-center"
              >
                <div class="col-md-2 p-3">
                  <div class="circle-white--big">
                    <nuxt-link to="/market/produce">
                      <img
                        src="@/assets/images/market_place/small_olive_oil.png"
                        alt="Olive Oil"
                        class="product-img-big"
                      >
                      <p class="product__text__services">Olive Oil</p>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BannerHeader from '~/components/site/BannerHeader.vue'
export default {
  name: 'MarketPlacePage',
  transition: 'tweakOpacity',
  layout: 'SiteLayout',
  components: { BannerHeader },
  data() {
    return {
      title: 'Market Place',
      produce: 0,
    }
  },
  methods: {
    productData(data) {
      this.produce = data
    },
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped>
@import url('http://db.onlinewebfonts.com/c/482a8574c9946a734d1fb5e58c3b78d7?family=Festivo+Letters+No19');
.tweakOpacity-enter-active,
.tweakOpacity-leave-active {
  transition: opacity 1s ease-out;
}
.tweakOpacity-enter,
.tweakOpacity-leave-active {
  opacity: 0.4;
}

.carousel-indicators {
  bottom: 40px;
  display: none;
}

.carousel-indicators li {
  display: inline-block;
  text-indent: -999px;
  cursor: pointer;
  border-radius: 10px;
}

.carousel-fade .carousel-inner .item {
  -webkit-transition-property: opacity;
  transition-property: opacity;
}

.carousel-fade .carousel-inner .item,
.carousel-fade .carousel-inner .active.left,
.carousel-fade .carousel-inner .active.right {
  opacity: 0;
}

.carousel-fade .carousel-inner .active,
.carousel-fade .carousel-inner .next.left,
.carousel-fade .carousel-inner .prev.right {
  opacity: 1;
}
.carousel-fade .carousel-inner .next,
.carousel-fade .carousel-inner .prev,
.carousel-fade .carousel-inner .active.left,
.carousel-fade .carousel-inner .active.right {
  left: 0;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.carousel-fade .carousel-inner .item {
  transition-property: opacity;
}

.content {
  flex: 1 0 auto;
}

.container-commodity {
  min-height: 550px;
  background-image: linear-gradient(
      242deg,
      rgba(99, 145, 56, 0.6),
      /* rgba(99, 145, 56, 0.6), */ rgba(6, 77, 6, 0.6)
    ),
    url(@/assets/images/market_place/image_grain.jpg);
  background-size: cover;
}
.white {
  color: white;
}

.commodity__title {
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  padding-top: 90px;
  margin-bottom: 45px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.container h2 {
  font-family: 'FestivoLettersNo19';
}
.container .row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.family__button {
  color: rgba(6, 77, 6, 0.6);
  font-size: 20px;
  border-radius: 5%;
  border: 0px solid white;
  background-color: white;
  padding: 10px 45px;
  margin: 0 auto;
  cursor: pointer;
  font-family: 'FestivoLettersNo19';
  text-transform: capitalize;
  height: 50px;
  margin-bottom: 15px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  outline: none;
}
.family__white-circle {
  width: 24px;
  height: 24px;
  object-fit: contain;
  background: white;
  border-radius: 50%;
}

.family__button__pressed {
  color: white;
  font-size: 20px;
  border-radius: 5%;
  border: 1px solid white;
  background-color: #6dac44 !important;
  padding: 10px 45px;
  margin: 0 auto;
  cursor: pointer;
  font-family: 'FestivoLettersNo19';
  text-transform: capitalize;
  height: 50px;
  margin-bottom: 15px;
  transform: translateY(-5px);
  box-shadow: 0px 15px 20px rgba(0, 20, 20, 0.4);
}

.hr_separator {
  border-top: 2px solid white;
  margin-bottom: 2rem;
}

hr {
  margin-top: 1rem;
  border: 0;
  overflow: visible;
}

.p-3 {
  padding: 1rem !important;
}

.circle-white--big {
  width: 115.3px;
  height: 115px;
  border-radius: 100px;
  box-shadow: 0 0 8px 0 #417505;
  background-color: #ffffff;
  color: #ffffff;
  margin: 0 auto 28px;
  text-align: center;
}
.circle-white--big > a {
  display: block;
}

a,
a:hover {
  color: inherit;
  text-decoration: none;
  background-color: transparent;
}

.product-img-big {
  width: 73px;
  height: 68px;
  object-fit: contain;
  margin-top: 24px;
}
img {
  vertical-align: middle;
  border-style: none;
}

.justify-content-center {
  justify-content: center !important;
}

.product__text__services {
  font-size: 16px;
  padding-top: 33px;
  text-align: center;
}

.product__text,
.product__text__services {
  font-family: 'FestivoLettersNo19';
  text-transform: uppercase;
}

p {
  margin-top: 0;
  margin-bottom: 0px;
}
</style>