<template>
  <div>
    <BannerHeader />
    <div class="container">
      <div class="form-body">
        <div class="row">
          <div class="img-holder">
            <div class="bg"></div>
            <div class="info-holder"></div>
          </div>
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3>Agricultural Investment Platform.</h3>
                <p>Investing in agriculture is a good strategic move to create wealth.</p>
                <div class="page-links">
                  <nuxt-link to="/signin">Login</nuxt-link>
                  <nuxt-link
                    to="/regiter"
                    class="active"
                  >Register</nuxt-link>
                </div>
                <form>
                  <input
                    class="form-control"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required
                  >
                  <input
                    class="form-control"
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    required
                  >
                  <input
                    class="form-control"
                    type="text"
                    name="email"
                    placeholder="E-mail Address"
                    required
                  >
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  >
                  <input
                    class="form-control"
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    required
                  >
                  <div class="form-button">
                    <button
                      id="submit"
                      type="submit"
                      class="ibtn"
                    >Register</button>
                  </div>
                </form>
                <!-- <div class="other-links">
                                    <span>Or login with</span><a href="#">Facebook</a><a href="#">Google</a><a href="#">Linkedin</a>
                                </div> -->
              </div>
            </div>
          </div>
          <!-- <article class="col-xs-12 maincontent">
                        <header class="page-header">
                            <b-alert variant="success" show>Success Alert</b-alert>
                            <h1 class="page-title">Sign in</h1>
                        </header>
                        <div class="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <h3 class="thin text-center">Sign in to your account</h3>
			    	                <p class="text-center text-muted">Lorem ipsum dolor sit amet, <nuxt-link to="signup.html">Register</nuxt-link> adipisicing elit. Quo nulla quibusdam cum doloremque incidunt nemo sunt a tenetur omnis odio. </p>
			    				    <hr>

                                    <form>
			    					<div class="top-margin">
			    						<label>Username/Email <span class="text-danger">*</span></label>
			    						<input type="text" class="form-control">
			    					</div>
			    					<div class="top-margin">
			    						<label>Password <span class="text-danger">*</span></label>
			    						<input type="password" class="form-control">
			    					</div>

			    					<hr>

			    					<div class="row">
			    						<div class="col-lg-8">
			    							<b><a href="">Forgot password?</a></b>
			    						</div>
			    						<div class="col-lg-4 text-right">
			    							<button class="btn btn-action" type="submit">Sign in</button>
			    						</div>
			    					</div>
			    				</form>
                                </div>
                            </div>
                        </div>
                    </article> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerHeader from '~/components/site/BannerHeader.vue'
import Breadcrumb from '~/components/Breadcrumb.vue'
export default {
  name: 'RegisterPage',
  layout: 'SiteLayout',
  components: { BannerHeader },
  data() {
    return {
      title: 'Register',
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Digital Farming Home',
        },
      ],
    }
  },
}
</script>

<style scoped>
.form-body {
  font-family: 'Lato', sans-serif;
  background-color: #28401dd0;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  line-height: 1.5;
}

.form-body > .row {
  position: relative;
  margin-top: 25px;
  margin-left: 0;
  margin-right: 0;
  min-height: 600px;
  height: 100%;
}
.row {
  display: flex;
  flex-wrap: wrap;
}

.img-holder {
  width: 550px;
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 600px;
  height: 100%;
  overflow: hidden;
  padding: 60px;
  text-align: center;
  z-index: 999;
}
@media (max-width: 1024px) {
  .img-holder {
    display: none;
  }
}
.img-holder .bg {
  opacity: 0.23;
  background-image: url('../assets/images/banner/wheat-img.webp');
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}
.img-holder .info-holder {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

@media (max-width: 1024px) {
  .form-holder {
    margin-left: 0;
  }
}
.form-holder {
  width: 100%;
}

@media (min-width: 480px) {
  .form-holder .form-content {
    padding: 60px 60px 60px;
  }
}

@media (max-width: 1024px) {
  .form-holder .form-content {
    padding: 80px 60px 60px;
  }
}

@media (min-width: 1025px) {
  .form-holder .form-content {
    padding-left: 600px;
  }
}

/* @media (max-width: 1280px) {
    .form-holder .form-content {
        padding-left: 400px;
    }
}

@media (max-width: 992px) {
    .form-holder .form-content {
        padding: 80px 60px 60px;
    }
} */

.form-holder .form-content {
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  /* padding-left: 400px; */
}

.form-content {
  background-color: transparent;
}

.form-content .form-items {
  max-width: 350px;
  text-align: left;
  display: inline-block;
  width: 100%;
}

.form-content h3 {
  color: #fff;
  text-align: left;
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 10px;
}

.form-content p {
  color: #fff;
  text-align: left;
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 30px;
}

.form-content .page-links {
  margin-bottom: 34px;
}
.form-content .page-links a.active {
  font-weight: 700;
}
.form-content .page-links a {
  color: #fff;
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-size: 15px;
  margin-right: 20px;
  transition: all 0.3s ease;
}

.form-content form {
  margin-bottom: 58px;
}

.form-content input,
.form-content .dropdown-toggle.btn-default {
  border: 0;
  background-color: #fff;
  color: #8d8d8d;
  width: 100%;
  padding: 9px 20px;
  text-align: left;
  outline: 0;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 300;
  transition: all 0.3s ease 0s;
  margin-bottom: 14px;
}

.form-content .form-button {
  margin-top: 30px;
  margin-bottom: 25px;
}

.form-content .form-button .ibtn:last-child {
  margin-right: 0;
}

.form-content .form-button .ibtn {
}

.form-content .form-button .ibtn {
  background-color: #d76032;
  color: #fff;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.16);
  border-radius: 6px;
  border: 0;
  padding: 6px 28px;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
/* .page-title {
        margin-top: 15px;
        font-weight: 300;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Open sans", Helvetica, Arial;
    }

    h1, .h1, h2, .h2, h3, .h3 {
        margin-top: 30px;
    }

    .text-muted {
        color: #888;
    }

    .top-margin {
        margin-top: 20px;
    }

    label {
        color: #777;
    }

.btn-action, .btn-primary {
    color: #FFEFD7;
    background-image: linear-gradient(to bottom, #FF9B22 0%, #FF8C00 100%);
    background-repeat: repeat-x;
    border: 0 none;
}
.btn {
    padding: 10px 40px;
    font-weight: bold;
    border-radius: 3px;
} */
</style>