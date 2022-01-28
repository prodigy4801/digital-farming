<template>
  <div class="home">
    <FixedHeader />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import FixedHeader from '~/components/site/partials/FixedHeader.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: { FixedHeader, Footer },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Digital Farming',
        },
      ],
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i');
@import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');
@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');
@import url('https://cdn.linearicons.com/free/1.0.0/icon-font.min.css');
@import url('@/assets/css/font-awesome.min.css');
@import '@/assets/css/animate.css';
@import '@/assets/css/owl.carousel.min.css';
@import '@/assets/css/owl.theme.default.min.css';
@import '@/assets/css/bootstrap.min.css';
@import '@/assets/css/master.css';

* {
  box-sizing: border-box;
}

.home {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.428571429;
  color: #333;
  background-color: #fff;
  margin: 0;
  display: block;
}
</style>