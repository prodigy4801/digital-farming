<template>
  <div>
    <BannerHeader />
    <div class="container">
      <ol class="breadcrumb">
        <li><a href="index.html">Home</a></li>
        <li class="active">Our Team</li>
      </ol>
      <div class="row">
        <section
          id="team"
          class="team  team-main"
        >
          <div class="container">
            <div class="team-details">
              <div class="project-header team-header team-head text-center">
                <h2>Our expert team</h2>
                <p>
                  Pallamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <!--/.project-header-->
              <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6">
                  <div class="member">
                    <div class="pic">
                      <img
                        width="180px"
                        height="180px"
                        src="../assets/images/team/Chairman.jpg"
                        alt="Chairman"
                      />
                    </div>
                    <h4>Zaheeruddin Khan</h4>
                    <span>Chairman</span>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="member">
                    <div class="pic">
                      <img
                        width="180px"
                        height="180px"
                        src="../assets/images/team/managing-director.jpg"
                        alt="Director"
                      />
                    </div>
                    <h4>Abel A. Onyeke</h4>
                    <span>Managing Director/CEO</span>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="member">
                    <div class="pic">
                      <img
                        width="180px"
                        height="180px"
                        src="../assets/images/team/vice-chairman.jpg"
                        alt="Tiagopessoa"
                      />
                    </div>
                    <h4>Agatha A. Onyeke</h4>
                    <span>Executive Vice-Chairman</span>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6">
                  <div class="member">
                    <div class="pic">
                      <img
                        width="180px"
                        height="180px"
                        src="../assets/images/team/extension_service.jpg"
                        alt="Tiagopessoa"
                      />
                    </div>
                    <h4>Engr. Dr Alex Okibe Edeoja</h4>
                    <span>Director, Extension Services</span>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="member">
                    <div class="pic">
                      <img
                        width="180px"
                        height="180px"
                        src="../assets/images/team/agronomy-director.jpg"
                        alt="Tiagopessoa"
                      />
                    </div>
                    <h4>Anthony Onyeke</h4>
                    <span>Director, Agronomy & Agrifinance</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import BannerHeader from '~/components/site/BannerHeader.vue'
export default {
  name: 'TeamPage',
  transition: 'tweakOpacity',
  layout: 'SiteLayout',
  components: { BannerHeader },
  data() {
    return {
      title: 'Our Team',
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
/* Transitions using the page hook */
.tweakOpacity-enter-active,
.tweakOpacity-leave-active {
  transition: opacity 1s ease-out;
}
.tweakOpacity-enter,
.tweakOpacity-leave-active {
  opacity: 0.4;
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

.team {
  padding: 30px 0;
}

.project-header.team-header.team-head h2,
.project-header.team-header.team-head p {
  color: #000;
}

.project-header h2 {
  font-size: 30px;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  text-transform: capitalize;
}

.project-header.team-header.team-head p {
  margin: 0 auto;
  margin-top: 32px;
}

.project-header.team-header.team-head h2,
.project-header.team-header.team-head p {
  color: #000;
}

.project-header p {
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  max-width: 470px;
}

.justify-content-center {
  justify-content: center !important;
}
.row .justify-content-center {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
@media (min-width: 992px) {
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
}
@media (min-width: 768px) {
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
}

.col-lg-3,
.col-md-6 {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.team .member {
  text-align: center;
  margin-bottom: 20px;
}

.team .member .pic {
  margin-bottom: 15px;
  overflow: hidden;
}

.team .member h4 {
  font-weight: 700;
  margin-bottom: 2px;
  font-size: 18px;
  color: #213b52;
}

.team .member span {
  font-style: italic;
  display: block;
  font-size: 13px;
}
</style>