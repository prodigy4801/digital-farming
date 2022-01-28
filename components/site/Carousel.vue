<template>
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
        <li
          data-target="#carousel-example-generic"
          data-slide-to="1"
        ></li>
      </ol>

      <div
        class="carousel-inner"
        role="listbox"
      >
        <div
          class="item"
          :class="currentSlide === index ? 'active' : null"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <div
            :class="slide.type"
            class="single-slide-item"
          >
            <div class="container">
              <div class="row">
                <div class="col-sm-12">
                  <div class="single-slide-item-content">
                    <h2>{{ slide.header }}</h2>
                    <p>
                      {{ slide.content }}
                    </p>
                    <button
                      class="btn btn-default btn-lg"
                      role="button"
                      disabled
                    >MORE INFO</button>
                    <button
                      class="btn btn-action btn-lg"
                      role="button"
                      disabled
                    >Click here</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        @click="forwardSlide"
        class="left carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span class="lnr lnr-chevron-left"></span>
      </a>
      <a
        @click="backSlide"
        class="right carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span class="lnr lnr-chevron-right"></span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          type: 'slide-1',
          header: 'Agricultural Investment Platform',
          content:
            'Providing opportunities to host communities, empowering farmers and rendering competitive returns to investors and shareholders.',
        },
        {
          type: 'slide-2',
          header: 'Digital Farming',
          content:
            'Providing opportunities to host communities, empowering farmers and rendering competitive returns to investors and shareholders.',
        },
      ],
      slideInterval: null,
    }
  },
  mounted() {
    this.startSlideTimer()
  },
  beforeUnmount() {
    this.stopSlideTimer()
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index
    },
    _slider() {
      const index =
        this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0
      this.setCurrentSlide(index)
    },
    backSlide() {
      const index =
        this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1
      this.setCurrentSlide(index)
      this.startSlideTimer()
      //this.currentSlide = this.currentSlide < 0 ? 0 : --this.currentSlide;
    },
    forwardSlide() {
      this._slider()
      this.startSlideTimer()
    },
    startSlideTimer() {
      this.slideInterval = setInterval(() => {
        this._slider()
      }, 5000)
    },
    stopSlideTimer() {
      cleaarInterval(this.slideInterval)
    },
  },
}
</script>

<style scoped>
/* .header-slider-area {
        position: relative;
        z-index: 1;
    } */

.carousel-indicators {
  bottom: 40px;
  display: none;
}

.carousel-indicators li {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 12px 10px 0 0;
  text-indent: -999px;
  cursor: pointer;
  background-color: #fefefe;
  border: 1px solid #fefefe;
  border-radius: 10px;
}

.carousel-indicators .active {
  width: 12px;
  height: 12px;
  margin: 12px 10px 0 0;
  background-color: #f7b405;
  border: 1px solid #f7b405;
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

.single-slide-item.slide-1:before,
.single-slide-item.slide-2:before {
  background: rgba(6, 77, 6, 0.6);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  content: '';
  z-index: -1;
}

.single-slide-item button.slide-btn:hover {
  background: transparent;
  color: #fff;
  border: 1px solid #fff;
}

.single-slide-item.slide-1 {
  background-image: url(@/assets/images/banner/wheat-img.webp);
  position: relative;
  z-index: 1;
}

.single-slide-item.slide-2 {
  background-image: url(@/assets/images/banner/poultry-img2.jpeg);
  position: relative;
  z-index: 1;
}

.single-slide-item {
  padding-top: 184px;
  padding-bottom: 294px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.single-slide-item h2 {
  color: #fff;
  font-size: 300%;
  line-height: 1.28;
  margin-bottom: 27px;
  font-family: 'Playfair Display', serif;
  text-transform: uppercase;
}

.single-slide-item p {
  color: #fefefe;
  font-size: 20px;
  max-width: 810px;
  font-family: 'Lato', sans-serif;
  line-height: 1.5;
  margin-bottom: 51px;
}

.single-slide-item button.slide-btn,
.single-slide-item button:active .slide-btn,
.single-slide-item button:focus .slide-btn {
  display: inline-block;
  background: #f5f5fb;
  padding: 17px 50px;
  color: #15b148;
  border: 1px solid #f5f5fb;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  margin-right: 36px;
  margin-bottom: 30px;
  outline: 0;
  box-shadow: none;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
}

.single-slide-item-img img {
  width: auto;
  height: 705px;
}

.btn-default {
  text-shadow: none;
  background: #28401d;
  color: rgba(254, 255, 255, 0.9);
  box-shadow: inset 0px 0px 0px 3px rgba(50, 50, 50, 0.5);
}

.btn-lg {
  padding: 15px 65px;
  font-size: 14px;
  font-weight: bold;
}

.btn {
  border: 0 none;
  border-radius: 3px;
}

.btn-action,
.btn-primary {
  color: #ffefd7;
  background-image: linear-gradient(to bottom, #d76032 0%, #d67048 100%);
  background-repeat: repeat-x;
  border: 0 none;
}

.carousel-control.left,
.carousel-control.right {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 0%
  );
}
.carousel-fade .carousel-control {
  z-index: 2;
}

.carousel-control.left {
  background-repeat: repeat-x;
}

.carousel-control:hover {
  background: #fff;
  color: #15b148;
  font-size: 22px;
}

.carousel-control {
  position: absolute;
  width: 75px;
  height: 75px;
  line-height: 75px;
  text-align: center;
  top: 39.5%;
  background: transparent;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  border-radius: 50%;
  -webkit-transition: 1s;
  -moz-transition: 1s;
  -ms-transition: 1s;
  -o-transition: 1s;
  transition: 1s;
}
</style>