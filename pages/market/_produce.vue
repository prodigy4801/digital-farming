<template>
  <div>
    <BannerHeader />
    <div class="content">
      <div class="container products-index container__filter">
        <div class="products-index__search-container">
          <nuxt-link to="/market-place">
            <img
              src="@/assets/images/arrows_img.png"
              alt=""
              class="icn-arrow--left"
            >
          </nuxt-link>
          <nuxt-link to="/market-place">Back to Products</nuxt-link>
        </div>
        <div class="row mx-auto">
          <div class="col-md-3 px-0 mt-3 products-index__col">
            <h3 class="product-filter_header">Characteristics</h3>
            <div class="product-filter">
              <div class="row form-filter_product">
                <div class="col-sm-2 col-md-3 col-lg-2">
                  <img
                    src="@/assets/images/market_place/small_rice.svg"
                    alt="Grains"
                    class="form-filter-image"
                  >
                </div>
                <div class="col-sm-6 col-md-9 col-lg-10">
                  <h4>Rice</h4>
                </div>
              </div>
              <form
                id="filter_form"
                action="/products/1/filter"
                accept-charset="UTF-8"
                method="get"
              >
                <input
                  name="utf8"
                  type="hidden"
                  value="&#x2713;"
                />
                <div class="basic_characteristics">
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <label
                        class="filter__label"
                        for="name"
                      >Product Type</label>
                      <select
                        name="search[2]"
                        id="search_2"
                        class="form-control"
                      >
                        <option
                          value="1"
                          selected="selected"
                        >All</option>
                        <option value="25">Mama Gold</option>
                        <option value="4">Mama Pride</option>
                        <option value="5">Royal Stallion</option>
                        <option value="26">Caprice</option>
                        <option value="27">Anambra Rice</option>
                        <option value="28">Lake Rice</option>
                        <option value="29">Elephant Pride</option>
                        <option value="30">Ofada Rice</option>
                        <option value="31">Basmati Rice</option>
                        <option value="32">Falcon Rice</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group">
                      <label
                        class="filter__label"
                        for="name"
                      >Production Mode</label>
                      <select
                        name="search[120]"
                        id="search_120"
                        class="form-control"
                      >
                        <option
                          value="1"
                          selected="selected"
                        >All</option>
                        <option value="25">Conventional Production</option>
                        <option value="4">Organic Production</option>
                        <option value="5">Integration Production</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <label
                      class="filter__label"
                      for="weight"
                    >Total Weight</label> <br />
                    <input
                      type="text"
                      name="interval[total_weight][start]"
                      id="interval_total_weight_start"
                      value="1"
                      class="form-interval"
                      step="any"
                    />
                    <span>kg</span>
                  </div>
                </div>
                <div class="actions">
                  <input
                    type="submit"
                    value="Search"
                    class="btn btn-solid btn--large submit-search"
                    data-disable-with="Search"
                  />
                  <a
                    id="clear_form"
                    class="btn btn-transparent btn--large"
                    href="/products/1/filter"
                  >Clear</a>
                </div>
              </form>
            </div>
          </div>
          <div class="col-md-9 products-index__col">
            <div class="row mt-3">
              <div class="col-md-6">
                <h3 class="product-filter_header">Order Board</h3>
              </div>
              <div class="col-md-6">
                <a
                  class="btn btn-solid btn-reject pull-right"
                  href="/bids/new?product_id=1"
                >Add new offer</a>
              </div>
            </div>
            <div class="products-index__top-filter">
              <div class="row ml-2 py-4">
                <div class="col-sm-3 products-index__top-filter__count">
                  <strong>
                    <!-- bid size -->
                  </strong> Results
                </div>
                <div class="col-sm-4 form-inline products-index__top-filter__sort">
                  <!-- <label></label>
                TODO replace with dynamic filter
            <select class="form-control">
              <option> </option>
            </select>-->
                </div>
                <div class="col-sm-5 products-index__top-filter__pager">
                  <label>Show</label>
                  <!-- TODO replace with dynamic filter -->
                  <select
                    name="limit"
                    id="limit"
                    class="form-control form-select-inline limit-dropdown"
                  >
                    <option value="5">5</option>
                    <option
                      selected="selected"
                      value="10"
                    >10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                  <label>Lines Per Page</label>
                </div>
              </div>
            </div>
            <div class="products-index__list">
              <div class="products-index__list__header d-none d-md-block">
                <div class="row p-4">
                  <div class="col-md-2">
                    <label><span
                        class="translation_missing"
                        title="translation missing: en.products.filter.commodities"
                      >Commodities</span></label>
                  </div>
                  <div class="col-md-10 flex-on-them p-0">
                    <div class="col-md-3">
                      <label>Bids by Buyers
                        <span class="products-index__list-info">(Currency per weight unit)</span>
                      </label>
                    </div>
                    <div class="col-md-9">
                      <label>Offers by Sellers
                        <span class="products-index__list-info">(Currency per weight unit)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="products-index__list__items">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerHeader from '~/components/site/BannerHeader.vue'
export default {
  name: 'ProducePage',
  transition: 'tweakOpacity',
  layout: 'SiteLayout',
  components: { BannerHeader },
  data() {
    return {
      title: 'Produce',
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
@import url('http://db.onlinewebfonts.com/c/482a8574c9946a734d1fb5e58c3b78d7?family=Festivo+Letters+No19');
.content {
  flex: 1 0 auto;
}
.products-index {
  margin-bottom: 60px;
}
@media (max-width: 1199px) {
  .container__filter {
    width: 100%;
  }
}

@media (max-width: 991px) {
  .container {
    padding-left: 5%;
    padding-right: 5%;
  }
}
@media (min-width: 576px) {
  .container-sm,
  .container {
    padding-left: 45px;
  }
}

.products-index__search-container {
  margin-top: 26px;
}

a,
a:hover {
  color: inherit;
  text-decoration: none;
}
.icn-arrow--left {
  transform: rotate(90deg);
}
img {
  vertical-align: middle;
  border-style: none;
}

.products-index .row {
  display: flex;
  flex-wrap: wrap;
}
.mx-auto {
  margin-left: auto !important;
}
.px-0 {
  padding-left: 0 !important;
}
.px-0 {
  padding-right: 0 !important;
}
.mt-3 {
  margin-top: 1rem !important;
}
.product-filter_header {
  font-family: 'FestivoLettersNo19';
  font-size: 28px;
  font-weight: 500;
  line-height: 1.2;
  text-transform: uppercase;
}

.product-filter {
  border-radius: 3px;
  background-color: #f1f5f2;
  padding: 20px 20px;
}

.form-filter_product {
  margin-bottom: 15px;
}
.product-filter .row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.form-filter-image {
  filter: grayscale(100%);
  height: 40px;
}

@media (min-width: 576px) {
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

.form-filter_product h4 {
  line-height: 1.5;
  font-family: 'FestivoLettersNo19';
  color: #5a5956;
  margin-bottom: 0;
  padding-top: 10px;
  text-transform: uppercase;
}

.basic_characteristics .row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: 400;
}

select.form-control {
  -webkit-appearance: none;
  background-image: url(@/assets/images/arrows_img.png);
  background-position: right;
  background-repeat: no-repeat;
  background-origin: content-box;
}

.form-control {
  display: block;
  width: 185px;
  padding: 0.375rem 0.75rem;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-interval {
  width: 45%;
  border-radius: 4px;
  border: solid 1px #d6d8d9;
  padding: 0.5rem 0.75rem;
}

.btn,
.btn-transparent:not(:disabled),
.btn-solid:not(:disabled) {
  cursor: pointer;
}

.btn-solid {
  background-image: linear-gradient(to bottom, #83c158, #608d41);
  border: none;
  color: white;
}

.actions .btn,
.actions .btn-solid,
.actions .btn-transparent,
.actions .btn-15px {
  margin: 0 20px 5px 0;
}

.btn--large {
  padding: 1rem 1.75rem;
}

.btn,
.btn-transparent,
.btn-solid {
  border-radius: 5px;
  font-family: 'ProximaNova';
  font-size: 16px;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: transparent;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.actions .btn:last-child,
.actions .btn-solid:last-child,
.actions .btn-transparent:last-child,
.actions .btn-15px:last-child {
  margin: 0 0 5px 0;
}

.btn:not(:disabled),
.btn-transparent,
.btn-solid:not(:disabled) {
  cursor: pointer;
}

.btn-transparent {
  border: solid 1.5px #74ab4e;
  background-color: transparent;
  color: #74ab4e;
}

.products-index__col .row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.product-filter_header {
  font-family: 'FestivoLettersNo19';
  font-size: 28px;
  color: #5a5956;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}

.btn-reject {
  background-image: linear-gradient(to bottom, #d76032, #ee5519) !important;
}

.products-index__top-filter {
  border-radius: 3px;
  background-color: #f1f5f2;
}

.py-4 {
  padding-top: 1.5rem !important;
}

.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.products-index__top-filter .row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.products-index__top-filter__count {
  font-size: 18px;
}

.products-index__top-filter__count strong {
  font-family: 'ProximaNovaBold';
  font-size: 26px;
}

.products-index__top-filter__sort {
  margin-top: 24px;
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

.products-index__top-filter__pager select.form-control {
  width: 60px;
}

select.form-control {
  -webkit-appearance: none;
  background-image: url(@/assets/images/arrows_img.png);
  background-position: right;
  background-repeat: no-repeat;
  background-origin: content-box;
}
.form-select-inline {
  display: inline !important;
}

.p-4 {
  padding: 1.5rem !important;
}

.products-index__list {
  border-top: 2px solid white;
}

.products-index__list__header {
  background-color: #f1f5f2;
}

/* .d-none {
  display: none !important;
} */

.products-index__list__header .row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.products-index__list__header label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
</style>