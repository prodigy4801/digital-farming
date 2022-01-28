$(document).ready(function(){
	"use strict";
    
        /*=========== TABLE OF CONTENTS ===========
1. Scroll To Top 
2. hcsticky 
3. Counter
4. owl carousel
5. vedio player
6. animation support
======================================*/

	// 1. animation support

        $(window).load(function(){

            $(".single-slide-item-content h2, .single-slide-item-content p").removeClass("animated fadeInUp").css({'opacity':'0'});
            $(".single-slide-item-content button").removeClass("animated fadeInLeft").css({'opacity':'0'});
        });

        $(window).load(function(){

            $(".single-slide-item-content h2, .single-slide-item-content p").addClass("animated fadeInUp").css({'opacity':'0'});
            $(".single-slide-item-content button").addClass("animated fadeInLeft").css({'opacity':'0'});

        });

    // 2. owl carousel

		// i. .team-carousel 
	
		
		var owl=$('.team-carousel');
		owl.owlCarousel({
			items:4,
			margin:0,
			
			loop:true,
			autoplay:true,
			smartSpeed:500,
			
			//nav:false,
			//navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			
			dots:false,
			autoplayHoverPause:true,
		
			responsiveClass:true,
				responsive:{
					0:{
						items:1
					},
					640:{
						items:2
					},
					768:{
						items:3
					},
					992:{
						items:4
					}
				}
			
			
		});

		
});	
	