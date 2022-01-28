<template>
   <div class="jumbotron top-space">
        <div class="container">
    
            <h3 class="text-center thin">Our Core Value</h3>
    
            <div class="row">
                <div class="col-md-3 col-sm-6 highlight">
                    <div class="h-caption">
                        <h4><i class="fa fa-heart fa-5"></i><!--<i class="fa fa-cogs fa-5"></i>-->Partnership & Teamwork</h4>
                    </div>
                    <div class="h-body text-center">
                        <p>We believe that we are stronger together than as individuals. We therefore seek close collaboration with our host
                        communities, farmers, investors, and partners as a catalyst for success.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 highlight">
                    <div class="h-caption">
                        <h4><i class="fa fa-flash fa-5"></i>Environmental Sustainability</h4>
                    </div>
                    <div class="h-body text-center">
                        <p>The land and other resources that we have today are also for generations yet unborn. Consequently, we are commited to
                        using them responsibly to minimize our impact and to preserve them to benefit future generations.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 highlight">
                    <div class="h-caption">
                        <h4><i class="fa fa-cogs fa-5"></i>Integrity</h4>
                    </div>
                    <div class="h-body text-center">
                        <p>We will do what we say and deliver on every promise made. We will continue to be truthful, accountable and responsible
                        no matter the odds.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 highlight">
                    <div class="h-caption">
                        <h4><i class="fa fa-smile-o fa-5"></i>Stewardship</h4>
                    </div>
                    <div class="h-body text-center">
                        <p>As a team player, we regard resources entrusted to us as a sacred trust and are commited to a responsible and judicious
                        utilization of the resources for the benefit of stakeholders. We operate in a very transparent and accountable manner,
                        always ensuring that the interests of everyone is protected. </p>
                    </div>
                </div>
            </div> <!-- /row  -->
    
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .top-spaced {
        margin-top: 60px;
    }

    .jumbotron {
        color: inherit;
        background-color: #f7f5f4;
        padding-top: 30px;
        padding-bottom: 30px;
        margin-bottom: 0;
    }
    .container .jumbotron {
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
        padding-left: 40px;
        padding-right: 40px;
    }
    .jumbotron p {
        font-size: inherit;
    }

    .jumbotron h2, .jumbotron h3, .jumbotron h4, .jumbotron h5, .jumbotron h6 {
        line-height: 1.3em;
    }

    .highlight {
        margin-top: 40px;
    }

    .h-caption {
        text-align: center;
    }

    .h-caption h4 {
        color: #382526;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Open sans", Helvetica, Arial;
    }

    .h-caption i {
        display: block;
        font-size: 54px;
        color: #382526;
        margin-bottom: 36px;
    }
</style>