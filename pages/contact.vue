<template>
  <div>
    <BannerHeader />
    <div class="container">
      <ol class="breadcrumb">
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="active">Contact</li>
      </ol>
      <div class="row">
        <article class="col-sm-9 maincontent">
          <header class="page-header">
            <h1 class="page-title">Contact us</h1>
          </header>
          <p>
            We’d love to hear from you. Interested in working together? Fill out the form below with some info about your project and I will get back to you as soon as I can. Please allow a couple days for me to respond.
          </p>
          <br>
          <form>
            <div class="row">
              <div class="col-sm-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Name"
                >
              </div>
              <div class="col-sm-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Email"
                >
              </div>
              <div class="col-sm-4">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Phone"
                >
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-12">
                <textarea
                  placeholder="Type your message here..."
                  class="form-control"
                  rows="9"
                ></textarea>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-sm-6">
                <label class="checkbox"><input type="checkbox"> Sign up for newsletter</label>
              </div>
              <div class="col-sm-6 text-right">
                <input
                  class="btn btn-action"
                  type="submit"
                  value="Send message"
                >
              </div>
            </div>
          </form>
        </article>
        <aside class="col-sm-3 sidebar sidebar-right">

          <div class="widget">
            <h4>Address</h4>
            <address>
              24, Danjuma street, Garki, Abuja, Nigeria.
            </address>
            <h4>Phone:</h4>
            <address>
              (+234) 701 1234 111
            </address>
          </div>

        </aside>
        <!-- /Sidebar -->
      </div>
    </div>
  </div>
</template>

<script>
import BannerHeader from '~/components/site/BannerHeader.vue'
export default {
  name: 'ContactPage',
  transition: 'tweakOpacity',
  layout: 'SiteLayout',
  components: { BannerHeader },
  data() {
    return {
      title: 'Contact Us',
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

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Open sans', Helvetica, Arial;
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

.page-title {
  margin-top: 20px;
  font-weight: 300;
}

.btn {
  padding: 10px 40px;
  font-weight: bold;
  border-radius: 3px;
}
.btn-action,
.btn-primary {
  color: #ffefd7;
  background-image: linear-gradient(to bottom, #ff9b22 0%, #ff8c00 100%);
  background-repeat: repeat-x;
  border: 0 none;
}

.sidebar {
  padding-top: 36px;
  padding-bottom: 30px;
}
.sidebar .widget {
  margin-bottom: 20px;
}
</style>