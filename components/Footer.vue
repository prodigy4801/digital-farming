<template>
  <div>
    <footer
      id="footer"
      class="top-space"
    >
      <div id="scroll-Top">
        <i
          class="fa fa-angle-double-up return-to-top"
          id="scroll-top"
          data-toggle="tooltip"
          data-placement="top"
          title=""
          data-original-title="Back to Top"
          aria-hidden="true"
        ></i>
      </div>
      <!--/.scroll-Top-->
      <!--footer 1-->
      <div class="footer1">
        <div class="container">
          <div class="row">

            <div class="col-md-3 widget">
              <h3 class="widget-title">Contact</h3>
              <div class="widget-body">
                <p>+234 70 2222 222 1<br>
                  <a href="mailto:#">abc.def@somewhere.com</a><br>
                  <br>
                  234 my loaction, Garki, Abuja.
                </p>
              </div>
            </div>

            <div class="col-md-3 widget">
              <h3 class="widget-title">Follow me</h3>
              <div class="widget-body">
                <p class="follow-me-icons">
                  <a href=""><i class="fa fa-twitter fa-2"></i></a>
                  <a href=""><i class="fa fa-dribbble fa-2"></i></a>
                  <a href=""><i class="fa fa-github fa-2"></i></a>
                  <a href=""><i class="fa fa-facebook fa-2"></i></a>
                </p>
              </div>
            </div>

            <div class="col-md-6 widget">
              <h3 class="widget-title">Information</h3>
              <div class="widget-body">
                <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, dolores, quibusdam
                                architecto voluptatem amet fugiat nesciunt placeat provident cumque accusamus itaque voluptate
                                modi quidem dolore optio velit hic iusto vero praesentium repellat commodi ad id expedita
                                cupiditate repellendus possimus unde?</p>
                            <p>Eius consequatur nihil quibusdam! Laborum, rerum, quis, inventore ipsa autem repellat provident
                                assumenda labore soluta minima alias temporibus facere distinctio quas adipisci nam sunt
                                explicabo officia tenetur at ea quos doloribus dolorum voluptate reprehenderit architecto sint
                                libero illo et hic.</p> -->
              </div>
            </div>

          </div> <!-- /row of widgets -->
        </div>
      </div>
      <!--/footer 1-->

      <!-- footer 2-->
      <div class="footer2">
        <div class="container">
          <div class="row">

            <div class="col-md-6 widget">
              <div class="widget-body">
                <p class="simplenav">
                  <a href="#">Home</a> |
                  <a href="about.html">About</a> |
                  <a href="sidebar-right.html">Sidebar</a> |
                  <a href="contact.html">Contact</a> |
                  <b><a href="signup.html">Sign up</a></b>
                </p>
              </div>
            </div>

            <div class="col-md-6 widget">
              <div class="widget-body">
                <p class="text-right">
                  Copyright &copy; 2021, Your name. Designed by <a
                    href="http://gettemplate.com/"
                    rel="designer"
                  >Samuel Esezobor</a>
                </p>
              </div>
            </div>

          </div> <!-- /row of widgets -->
        </div>
      </div>
      <!--/footer 2-->
    </footer>

  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.top-space {
  margin-top: 60px;
}

#scroll-Top .return-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: none;
  width: 40px;
  line-height: 40px;
  height: 40px;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
  z-index: 15;
  color: #fff;
  background: #15b148;
  border: 1px solid #15b148;
  border-radius: 5px;
  -webkit-transition: 0.5s;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
  z-index: 2;
}
#scroll-Top .return-to-top:hover {
  background: #399758;
  color: #fff;
  border: 1px solid #399758;
  border-radius: 50%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Open sans', Helvetica, Arial;
}

.footer1 {
  background: #28401d;
  padding: 30px 0 0 0;
  font-size: 12px;
  color: #999;
}
.footer1 a {
  color: #ccc;
}
.footer1 a:hover {
  color: #fff;
}
.footer1 .widget {
  margin-bottom: 30px;
}
.footer1 .widget-title {
  font-size: 17px;
  font-weight: bold;
  color: #ccc;
  margin: 0 0 20px;
}
.footer1 .entry-meta {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin: 0 0 35px 0;
  padding: 2px 0;
  color: #888888;
  font-size: 12px;
  font-size: 0.75rem;
}
.footer1 .entry-meta a {
  color: #333333;
}
.footer1 .entry-meta .meta-in {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.follow-me-icons {
  font-size: 30px;
}
.follow-me-icons i {
  float: left;
  margin: 0 10px 0 0;
}

.footer2 {
  background: #191919;
  padding: 15px 0;
  color: #777;
  font-size: 12px;
}
.footer2 a {
  color: #aaa;
}
.footer2 a:hover {
  color: #fff;
}
.footer2 p {
  margin: 0;
}
</style>