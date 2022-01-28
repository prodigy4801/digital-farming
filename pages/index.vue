<template>
  <div>
    <!-- <PageLoader /> -->
    <Carousel />
    <div class="container text-center">
      <br> <br>
      <h2 class="thin">We produce healthy and hygienic foods to meet your nutritional needs.</h2>
      <p class="text-muted">
        We maintain a network of community-based farms and dedicated partners and also continuously deploy appropriate knowledge, smart technologies, and proper agronomic practices to get the best
        possible outcomes.
      </p>
    </div>
    <div class="container text-center">
      <br> <br>
      <h2 class="thin">Our Vision</h2>
      <p class="text-muted">
        To produce accessible, affordable, safe, healthy and hygienic foods.
        to end hunger in every home in Africa.
      </p>
    </div>
    <Jumbotron />
    <InvestmentList />
  </div>
</template>

<script>
import Carousel from '~/components/site/Carousel.vue'
import Jumbotron from '~/components/site/Jumbotron.vue'
import InvestmentList from '~/components/site/InvestmentList.vue'
// import PageLoader from '~/components/PageLoader.vue'
export default {
  name: 'IndexPage',
  transition: 'tweakOpacity',
  data() {
    return {
      title: 'Home',
    }
  },
  layout: 'SiteLayout',
  components: { Carousel, Jumbotron, InvestmentList },

  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped>
/* .loaded {
  animation: transitionIn 1.5s;
} */
/* Transitions using the page hook */
.tweakOpacity-enter-active,
.tweakOpacity-leave-active {
  transition: opacity 1s ease-out;
}
.tweakOpacity-enter,
.tweakOpacity-leave-active {
  opacity: 0.4;
}
.thin {
  font-weight: 300;
}

h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 30px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Open sans', Helvetica, Arial;
}

.text-muted {
  color: #888;
}
</style>
