<template>
  <div>
    <div class="container-fluid">
      <div class="page-header">
        <Breadcrumbs main="Coupons" title="Create Coupon" />
      </div>
    </div>
    <!-- Container-fluid starts-->
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="card tab2-card">
        <div class="card-header">
          <h5>Discount Coupon Details</h5>
        </div>
        <div class="card-body">
          <b-tabs content-class="mt-3 mb-0 nav nav-tabs tab-coupon">
            <div class="tab-content">
              <b-tab title="General" active>
                <div
                  class="tab-pane fade active show"
                  aria-labelledby="general-tab"
                >
                  <form class="needs-validation" novalidate="">
                    <h4>General</h4>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-group row">
                          <label
                            for="validationCustom0"
                            class="col-xl-3 col-md-4"
                            ><span>*</span> Coupan Title</label
                          >
                          <input
                            class="form-control col-md-7"
                            id="validationCustom0"
                            type="text"
                            required=""
                          />
                        </div>
                        <div class="form-group row">
                          <label
                            for="validationCustom1"
                            class="col-xl-3 col-md-4"
                            ><span>*</span>Coupan Code</label
                          >
                          <input
                            class="form-control col-md-7"
                            id="validationCustom1"
                            type="text"
                            required=""
                          />
                          <div class="valid-feedback">
                            Please Provide a Valid Coupon Discount.
                          </div>
                        </div>
                        <div class="form-group row">
                          <label
                            for="validationCustom2"
                            class="col-xl-3 col-md-4"
                            ><span>*</span>Coupan Discount</label
                          >
                          <input
                            class="form-control col-md-7"
                            id="validationCustom2"
                            type="text"
                            required=""
                          />
                          <div class="valid-feedback">
                            Please Provide a Valid Coupon Code.
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-md-4">Start Date</label>
                          <input
                            class="datepicker-here form-control digits col-md-7"
                            type="text"
                            data-language="en"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-md-4">End Date</label>
                          <input
                            class="datepicker-here form-control digits col-md-7"
                            type="text"
                            data-language="en"
                            placeholder="dd/mm/yyyy"
                          />
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-md-4">Free Shipping</label>
                          <div class="checkbox checkbox-primary col-md-7">
                            <input
                              id="checkbox-primary-1"
                              type="checkbox"
                              title=""
                            />
                            <label for="checkbox-primary-1"
                              >Allow Free Shipping</label
                            >
                          </div>
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-md-4">Quantity</label>
                          <input
                            class="form-control col-md-7"
                            type="number"
                            required=""
                          />
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-md-4">Discount Type</label>
                          <select class="custom-select col-md-7" required="">
                            <option value="">--Select--</option>
                            <option value="1">Percent</option>
                            <option value="2">Fixed</option>
                          </select>
                        </div>
                        <div class="form-group row">
                          <label class="col-xl-3 col-md-4">Status</label>
                          <label class="d-block" for="chk-ani">
                                <input
                                  class="checkbox_animated"
                                  id="chk-ani"
                                  type="checkbox"
                                />
                                Enable the Coupon
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div></b-tab
              >
              <b-tab title="Restriction">
                <form class="needs-validation" novalidate="">
                  <h4>Restriction</h4>
                  <div class="form-group row">
                    <label class="col-xl-3 col-md-4">Category</label>
                    <select class="custom-select col-md-7" required="">
                      <option value="">--Select--</option>
                      <option value="1">Electronics</option>
                      <option value="2">Clothes</option>
                      <option value="2">Shoes</option>
                      <option value="2">Digital</option>
                    </select>
                  </div>
                  <div class="form-group row">
                    <label for="validationCustom4" class="col-xl-3 col-md-4"
                      >Minimum Spend</label
                    >
                    <input
                      class="form-control col-md-7"
                      id="validationCustom4"
                      type="number"
                    />
                  </div>
                  <div class="form-group row">
                    <label for="validationCustom5" class="col-xl-3 col-md-4"
                      >Maximum Discount</label
                    >
                    <input
                      class="form-control col-md-7"
                      id="validationCustom5"
                      type="number"
                    />
                  </div>
                </form>
              </b-tab>
            </div>
          </b-tabs>
          <div class="pull-right">
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
    <!-- Container-fluid Ends-->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onComplete() {}
  }
};
</script>

<style>

</style>