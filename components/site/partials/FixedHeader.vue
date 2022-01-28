<template>
  <div class="navbar navbar-inverse navbar-fixed-top headroom">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          @click="showLinkList = !showLinkList"
          :class="{ 'collapsed': !showLinkList }"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a
          class="navbar-brand"
          to="/"
        ><img
            src="@/assets/images/logo.svg"
            alt="First Heaven"
          ></a>
      </div>
      <!-- <div class="navbar-collapse collapse"> -->
      <div
        class="navbar-collapse"
        :class="{ 'collapse': showLinkList, 'in': !showLinkList }"
        :style="showLinkList ? 'height: 0px;' : 'height:auto;' "
      >
        <ul class="nav navbar-nav pull-right">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/about">About</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contact">Contact Us</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/market-place">Market Place</nuxt-link>
          </li>
          <!-- <li>
            <nuxt-link to="/investments">Investments</nuxt-link>
          </li> -->
          <li>
            <nuxt-link to="/team">Team</nuxt-link>
          </li>
          <li>
            <nuxt-link
              class="btn btn-outline"
              to="/signin"
            >SIGN IN / SIGN UP</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showLinkList: true,
    }
  },
  components: {},
}
</script>

<style scoped>
.headroom {
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out;
}

.navbar-static-top,
.navbar-fixed-top,
.navbar-fixed-bottom {
  border-radius: 0;
}

.navbar-inverse {
  background: rgba(50 68 48 / 65%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  min-height: 80px;
  padding-top: 20px;
  margin-bottom: 0;
}

.navbar-collapse {
  border: 0 none;
  border-top: 0 none;
  box-shadow: none;
}

@media (max-width: 767px) {
  .navbar-collapse ul {
    text-align: center;
    width: 100%;
    padding-bottom: 10px;
  }

  .navbar-collapse ul .btn {
    max-width: 50%;
    margin: 0 auto;
  }
}

.navbar-inverse *:focus {
  outline: 0;
}

.navbar-inverse .navbar-nav > li > .nuxt-link-exact-active {
  background: none;
  color: white;
}

.navbar-inverse .navbar-nav > li > a,
.navbar-inverse .navbar-nav > .open ul > a {
  color: rgba(255, 255, 255, 0.4);
}

.navbar-nav .btn {
  border: 1px solid rgba(241, 234, 166, 0.2);
  margin-left: 5px;
  margin-top: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.btn {
  font-weight: bold;
  border-radius: 3px;
}

.navbar-nav a.btn:focus,
.navbar-nav a.btn:hover {
  border: 1px solid rgba(255, 255, 255, 0.6);
}

.navbar-inverse .navbar-nav > li > a:hover,
.navbar-inverse .navbar-nav > li > a:focus,
.navbar-inverse .navbar-nav > .open > a:hover,
.navbar-inverse .navbar-nav > .open > a:focus {
  background: none;
  color: white;
}
</style>