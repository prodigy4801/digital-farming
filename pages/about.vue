<template>
  <div>
    <BannerHeader />
    <div class="container">
      <ol class="breadcrumb">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="active">About</li>
      </ol>
      <div class="row">
        <article class="col-sm-12 maincontent">
          <header class="page-header">
            <h1 class="page-title">About us</h1>
          </header>
          <div class="row">
            <div class="about-mission-content">
              <div class="col-md-6 col-sm-12">
                <div class="single-about-history">
                  <div class="about-history-txt">
                    <h2>mission</h2>
                    <p>
                      At First Heaven Limited, we produce safe, healthy and hygienic foods to meet the nutritional needs of consumers. To achieve this,
                    </p>
                    <div class="main-timeline  xtra-timeline">
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="timeline timeline-ml-20">
                            <div class="timeline-content">
                              <h4 class="title"> <span><i
                                    class="fa fa-circle-o"
                                    aria-hidden="true"
                                  ></i></span></h4>

                              <ul class="description">
                                <li>We maintain a network of community-based farms and dedicated partners.</li>
                              </ul>
                            </div>
                            <!--/.timeline-content-->
                          </div>
                          <!--/.timeline-->
                        </div>
                        <!--/.col-->
                      </div>
                      <!--/.row-->
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="timeline timeline-ml-20">
                            <div class="timeline-content">
                              <h4 class="title"> <span><i
                                    class="fa fa-circle-o"
                                    aria-hidden="true"
                                  ></i></span></h4>

                              <ul class="description">
                                <li>We also continuously deploy appropriate knowledge, smart technologies, and proper agronomic practices to get the best possible outcomes from resources employed.</li>
                              </ul>
                            </div>
                            <!--/.timeline-content-->
                          </div>
                          <!--/.timeline-->
                        </div>
                        <!--/.col-->
                      </div>
                      <!--/.row-->
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="timeline timeline-ml-20">
                            <div class="timeline-content">
                              <h4 class="title"> <span><i
                                    class="fa fa-circle-o"
                                    aria-hidden="true"
                                  ></i></span></h4>

                              <ul class="description">
                                <li>We are committed to providing opportunities to host communities, empowering our farmers and rendering competitive returns to investors and shareholders.</li>
                              </ul>
                            </div>
                            <!--/.timeline-content-->
                          </div>
                          <!--/.timeline-->
                        </div>
                        <!--/.col-->
                      </div>
                      <!--/.row-->
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-offset-1 col-md-5 col-sm-12">
                <div class="single-about-history">
                  <div class="about-history-img">
                    <img
                      src="../assets/images/image_2.jpg"
                      alt="about"
                    >
                  </div>
                  <!--/.about-history-img-->
                </div>
                <!--/.single-about-history-->
              </div>
              <!--/.col-->
            </div>
          </div>
          <div class="row">
            <div class="about-vision-content">
              <div class="col-sm-8 maincontent">
                <div class="about-history-txt">
                  <h2>Vision</h2>
                  <p>
                    To produce accessible, affordable, safe, healthy and hygienic foods.
                    to end hunger in every home in Africa.
                  </p>
                </div>
              </div>
              <!--/.col-->
              <!-- Sidebar -->
              <aside class="col-sm-4 sidebar sidebar-right">

                <div class="widget">
                  <h4>Advert Here...</h4>
                  <ul class="list-unstyled list-spaces">
                    <li><a href="">Lorem ipsum dolor</a><br><span class="small text-muted">Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Animi, laborum.</span></li>
                    <li><a href="">Totam, libero, quis</a><br><span class="small text-muted">Suscipit veniam debitis sed ipsam
                        quia magnam eveniet perferendis nisi.</span></li>
                    <li><a href="">Enim, sequi dignissimos</a><br><span class="small text-muted">Reprehenderit illum quod unde
                        quo vero ab inventore alias veritatis.</span></li>
                    <li><a href="">Suscipit, consequatur, aut</a><br><span class="small text-muted">Sed, mollitia earum debitis
                        est itaque esse reiciendis amet cupiditate.</span></li>
                    <li><a href="">Nam, illo, veritatis</a><br><span class="small text-muted">Delectus, sapiente illo provident
                        quo aliquam nihil beatae dignissimos itaque.</span></li>
                  </ul>
                </div>

              </aside>
              <!-- /Sidebar -->
            </div>
          </div>

        </article>
      </div>
    </div>
    <!--/.container-->
  </div>
</template>

<script>
import BannerHeader from '~/components/site/BannerHeader.vue'
export default {
  name: 'AboutPage',
  transition: 'tweakOpacity',
  layout: 'SiteLayout',
  components: { BannerHeader },
  data() {
    return {
      title: 'About Us',
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
}
</script>

<style scoped>
@import url('http://fonts.googleapis.com/css?family=Open+Sans:300,400,700');

/* Transitions using the page hook */
.tweakOpacity-enter-active,
.tweakOpacity-leave-active {
  transition: opacity 1s ease-out;
}
.tweakOpacity-enter,
.tweakOpacity-leave-active {
  opacity: 0.4;
}
.page-title {
  margin-top: 20px;
  font-weight: 300;
}

.breadcrumb {
  background: none;
  padding: 0;
  margin: 30px 0 0px 0;
  list-style: none;
  border-radius: 4px;
}

.breadcrumb a {
  color: #037525;
  text-decoration: none;
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

.about-history {
  padding: 20px 0 90px;
}
.about-history-img img {
  box-shadow: 0 0 20px rgba(112, 134, 230, 0.2);
  height: 370px;
}
img {
  border: none;
  max-width: 100%;
}
.about-history .container .about-history-content .history-content {
  padding-bottom: 40px;
}
.about-history-txt h2 {
  color: #4d4e54;
  font-size: 25px;
  font-family: 'Playfair Display', serif;
  text-transform: capitalize;
  font-weight: 600;
  padding: 16px 0 20px 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

.about-history-txt p {
  color: #888;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  line-height: 1.7;
}
@media screen and (max-width: 767px) {
  .main-timeline {
    max-width: 350px;
  }
}
.main-timeline {
  position: relative;
  margin-top: 10px;
  transition: all 0.4s ease 0s;
}
.main-timeline .timeline.timeline-ml-20 {
  margin-left: 20px;
}

.experience-time h3 {
  font-size: 16px;
  color: #4d4e54;
  font-family: 'Playfair Display', serif;
  text-transform: capitalize;
  font-weight: 600;
  margin-top: 14px;
}

.main-timeline .timeline {
  position: relative;
  margin-bottom: 25px;
  left: -15px;
}
.main-timeline .timeline-content {
  border-radius: 5px;
  transition: all 0.3s ease 0s;
}

.timeline-content span > i {
  display: inline-block;
  color: #28401d;
  position: relative;
  top: 15px;
  left: -9px;
  background: #fff;
}

.main-timeline .description,
.xtra-timeline.main-timeline .description {
  font-size: 14px;
  color: #888;
  margin-left: 36px;
  margin-top: -7px;
  max-width: 390px;
}
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.about-vision-content {
  padding: 30px 0 0;
}
.about-mission-content {
  padding: 5px 0 0;
}

@media screen and (max-width: 991px) {
  .main-timeline .timeline.timeline-ml-20 {
    margin-left: 48px;
  }

  .main-timeline .timeline {
    top: 2px;
    left: -43px;
  }
}
</style>