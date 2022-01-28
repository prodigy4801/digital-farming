<template>
  <div>
    <section
      id="how-it-works"
      class="parallax"
    >
      <div class="container-new">
        <span class="angle2"></span>
        <span class="angle"></span>
        <div class="row">
          <div
            class="col-xs-12 col-sm-12 col-md-12 wow zoomIn animated headding"
            data-wow-delay=".1s"
          >
            <h2><span>Join us to End </span>Hunger<span> in Africa</span></h2>
            <p>We are determined to end hunger in Africa through the production of affordable, safe, healthy and hygienic foods and
              making them accessible to every home in the continent. Lofty and noble as this mission is, it can not be done alone. It requires collaboration with well-meaning and committed
              individuals to actualize.</p>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 wow fadeInLeft animated">
            <div class="investment-wrapper">
              <h3 class="investment-title">Great Harvest</h3>
              <div class="investment">
                <div class="value-box">
                  <div class="value-box-content">
                    <span class="value">
                      <i></i><span class="number">#250,000</span>
                    </span>
                    <span class="month">4 months</span>
                  </div>
                </div>

                <div class="content-box">
                  <ul>
                    <li>Increments of N250,000</li>
                    <li>Maximum investment of N5,000,000</li>
                  </ul>
                </div>
                <div class="sign-box">
                  <a href="/signin"><span>Sign In</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 wow zoomIn animated">
            <div class="investment-wrapper ">
              <h3 class="investment-title">Jumbo Harvest</h3>
              <div class="investment">
                <div class="value-box">
                  <div class="value-box-content">
                    <span class="value">
                      <i></i><span class="number"> #500,000 </span>
                    </span>
                    <span class="month">6 months</span>
                  </div>
                </div>

                <div class="content-box">
                  <ul>
                    <li>Increments of N500,000</li>
                    <li>Guaranteed Return: 18% flat</li>
                    <li>5% share of profit from holder's farm</li>
                    <li>First choice on other investment opportunities</li>
                  </ul>
                </div>
                <div class="sign-box">
                  <a href="/signin"><span>Sign In</span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 wow zoomIn animated">
            <div class="investment-wrapper ">
              <h3 class="investment-title">Bumper Harvest</h3>
              <div class="investment standard">
                <div class="value-box">
                  <div class="value-box-content">
                    <span class="value">
                      <span class="number">#1,000,000</span>
                    </span>
                    <span class="month">9 months</span>
                  </div>
                </div>

                <div class="content-box">
                  <ul>
                    <li>Increments of N1,000,000</li>
                    <li>Guaranteed Return: 25% flat</li>
                    <li>10% share of profit from holder's farm</li>
                    <li>First choice on other investment opportunities</li>
                    <li>Right to progress report</li>
                    <li>Access to pictorial visuals of the farm</li>
                  </ul>
                </div>
                <div class="sign-box">
                  <a href="/signin"><span>Sign In</span></a>
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
export default {}
</script>

<style scoped>
#how-it-works {
  padding: 60px 0 0;
  width: 100%;
}

#how-it-works::before {
  background: rgba(255, 255, 255, 0.5);
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#how-it-works h1 span {
  color: #ff4c00;
}

.parallax {
  background-attachment: fixed !important;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: relative;
}

.container-new {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 768px) {
  .container-new {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container-new {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container-new {
    width: 1170px;
  }
}

.angle::before {
  border-bottom: 30px solid #399758;
  border-right: 320px solid transparent;
  left: 0;
}

.angle::before,
.angle::after {
  bottom: 0;
  content: '';
  height: 0;
  position: absolute;
  width: 0;
  z-index: 4;
}

.angle::after {
  border-bottom: 30px solid #399758;
  border-left: 320px solid transparent;
  right: 0;
}

.angle2::before {
  border-top: 72px solid #399758;
  border-right: 960px solid transparent;
  left: 0;
}

.angle2::before,
.angle2::after {
  top: 0;
  content: '';
  height: 0;
  position: absolute;
  width: 0;
  z-index: 4;
}

.angle2::after {
  border-top: 72px solid #399758;
  border-left: 960px solid transparent;
  right: 0;
}

.headding {
  text-align: center;
}

.headding p {
  margin-bottom: 30px;
  padding: 20px 0;
}

.headding h1 {
  font-size: 42px !important;
}

.headding h2 {
  color: #ff4c00;
  margin-bottom: 20px;
  position: relative;
  font-family: 'Oswald';
}

.headding h2 span {
  color: #000;
}

.headding h2::before {
  background: #555 none repeat scroll 0 0;
  content: '';
  height: 1px;
  left: 47%;
  position: absolute;
  top: 41px;
  width: 82px;
}

h1,
.h1,
h2,
.h2,
h3,
.h3 {
  margin-top: 30px;
}

.col-xs-12.col-sm-4.col-md-4.wow.bounceIn.textcenter.animated > img {
  width: 100%;
}

.investment-wrapper {
  margin-bottom: 50px;
}

.investment-wrapper .investment-title {
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;
  border-color: #ededed #ededed #ededed;
  border-image: none;
  border-style: solid solid none;
  border-width: 1px 1px medium;
  font-weight: normal;
  line-height: 0;
  margin: 0;
  padding: 1.3em 1em;
  text-align: center;
  box-shadow: 0 -2px 2px #f5f5f5;
  font-family: 'Oswald';
}

.investment-wrapper .value-box {
  background: #f5f5f5 none repeat scroll 0 0;
  color: #434343;
  cursor: default;
  height: 200px;
  line-height: 200px;
  text-align: center;
}

.investment-wrapper .value-box .value-box-content {
  display: inline-block;
  line-height: 1;
  vertical-align: bottom;
}

.investment-wrapper .value-box .value {
  display: inline-block;
  font-size: 60px;
  line-height: 38px;
  position: relative;
  vertical-align: top;
  font-family: 'Oswald';
}

.investment-wrapper .value-box .meta {
  background: #ddd none repeat scroll 0 0;
  border-radius: 0;
  color: #afdcd3;
  display: block;
  font-size: 11px;
  font-weight: bold;
  height: auto;
  letter-spacing: 1px;
  line-height: 1em;
  margin: 50px auto 0;
  padding: 0.8em 0.5em;
  text-transform: uppercase;
}

.investment-wrapper .investment .content-box {
  border-color: #ededed;
  border-image: none;
  border-style: solid;
  border-width: 0 1px;
  color: #6e6e6e;
  padding: 15px 30px;
}
.investment-wrapper .investment .content-box ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}
.investment-wrapper .investment .content-box ul li {
  border-bottom: 1px solid #ededed;
  color: #2b2f34;
  line-height: 1em;
  padding: 18px 0;
  text-align: center;
}
.investment-wrapper .investment .sign-box {
  border-color: #ededed #ededed #ededed;
  border-image: none;
  border-style: none solid solid;
  border-width: 0 1px 1px;
  padding: 10px 10px 25px;
  text-align: center;
  box-shadow: 0 2px 2px #ddd;
  -webket-box-shadow: 0 2px 2px #ddd;
  -moz-box-shadow: 0 2px 2px #ddd;
}

.investment-wrapper .value-box .month {
  background: #d76032 none repeat scroll 0 0;
  border-radius: 0;
  color: #fff;
  display: block;
  font-size: 11px;
  font-weight: bold;
  height: auto;
  letter-spacing: 1px;
  line-height: 1em;
  margin: 50px auto 0;
  padding: 0.8em 0.5em;
  text-transform: uppercase;
}
</style>