$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
 
});


$(document).ready(function(){
    
    var ll = new LazyLoad({
        elements_selector: ".lazyload",
    });
    
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }
    });
    
    if ($(window).scrollTop() > 50) {
        $("header").addClass("fixed");
    } else {
         $("header").removeClass("fixed");
    }
    
    
    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
          $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
          var range = $(this).get(0).createTextRange();
          range.collapse(true);
          range.moveEnd('character', pos);
          range.moveStart('character', pos);
          range.select();
        }
      };
    
    $(".input-phone").mask("+7 999 999 99 99", { autoclear: false }).on('click', function () {
        if ($(this).val() === '+7 ___ ___ __ __') {
           $(this).setCursorPosition(3);
        }
    });
    
     $('.menu-trigger').on('click', function(event) {
        if(!$('body').hasClass('menu-open')){
            event.preventDefault();		
            $('body').addClass('menu-open');
            //$('html').css('overflow', 'hidden');
            $('body').css('overflow', 'hidden');
            $('.sidebar').addClass('active');
            $('.menu-trigger').addClass('is-active');
        }else{
            $('body').removeClass('menu-open');
            $('.sidebar').removeClass('active');
            $('.menu-trigger').removeClass('is-active');
            //$('html').css('overflow', '');
            $('body').css('overflow', '');
        }
        return false;
	});
    
    $(document).bind("click touchstart",function(event) {
        if($('body').hasClass('menu-open')){
            if ($(event.target).closest(".sidebar, .menu-trigger").length) return;
            $('body').removeClass('menu-open');
            $('.sidebar').removeClass('active') ;
            $('.menu-trigger').removeClass('is-active');
             $('body').css('overflow', '');
            event.stopPropagation();
        }        
     });   
    
    $('.scroll').click(function() {          
		  var target = $(this.hash);
		  if (target.length) {           
              
              $('body').removeClass('menu-open');
            $('.sidebar').removeClass('active') ;
            $('.menu-trigger').removeClass('is-active');
             $('body').css('overflow', '');
              
			var tt= target.offset().top - $('#header').innerHeight();					 		 
			$('html, body').animate({
			  scrollTop: tt
			}, 1500);			
			return false;
		  }	   
    });
    
    $('.tabs-nav__item').click(function() {       
        var tab_id=$(this).attr('data-tab');
        $(this).parent('.tabs-nav').find('.tabs-nav__item').removeClass('tabs-nav__item_active');
        $(this).addClass('tabs-nav__item_active');
        $(this).parents('.tabs').find('.tabs-content__item').removeClass('tabs-content__item_active');
        $(this).parents('.tabs').find('.tabs-content__item[data-tab="'+tab_id+'"]').addClass('tabs-content__item_active');
    });
    
    $('.tabs-content__title').click(function() {       
        var tab_id=$(this).attr('data-tab');
        $('.tabs-nav__item[data-tab="'+tab_id+'"]').click();
    });
    
    
    $('.form-application').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.y-col').append(error);
            },
            rules: {
                'name': "required",
                'phone': "required",
                'agree': "required",
            },
            messages: {
                'name': "",
                'phone': "",                
                'agree': "",                
            },
            submitHandler: function(form){
               $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                    touch: false,
                    closeExisting: true,
                    autoFocus: false                    
                });               
            }
         });
    });
    
    $('.form-application-case').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.y-col').append(error);
            },
            rules: {
                'name': "required",
                'phone': "required",
                'agree': "required",
            },
            messages: {
                'name': "",
                'phone': "",                
                'agree': "",                
            },
            submitHandler: function(form){
               $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-case-thank',
                    type : 'inline',
                    touch: false,
                    closeExisting: true,
                    autoFocus: false                    
                });               
            }
         });
    });
    
    $('.form-application-2').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.y-col').append(error);
            },
            rules: {
                'name': "required",
                'phone': "required",
                'email': {
                    required:true, 
                    email: true,
                },
                'agree': "required",
            },
            messages: {
                'name': "",
                'phone': "",                
                'email': "",                
                'agree': "",                
            },
            submitHandler: function(form){
                $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                    touch: false,
                    closeExisting: true,
                    autoFocus: false                    
                });                 
            }
         });
    });
    
    $('.form-audit').each(function() {  
        $(this).validate({       
             errorElement:'div',
             errorPlacement: function(error, element) {
                element.parents('.y-col').append(error);
            },
            rules: {
                'address': "required",
                'name': "required",
                'phone': "required",
                'email': {
                    required:true, 
                    email: true,
                },
                'agree': "required",
            },
            messages: {
                'address': "",
                'name': "",
                'phone': "",                
                'email': "",                
                'agree': "",                
            },
            submitHandler: function(form){
               $.fancybox.close();
                $.fancybox.open({
                    src  : '#popup-thank',
                    type : 'inline',
                    touch: false,
                    closeExisting: true,
                    autoFocus: false                    
                });                
            }
         });
    });
    
    $('.js-toggle-price').click(function() { 
        $('.table-price-wrapper').slideToggle();
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).text('Скрыть');
        }else{
             $(this).text('Подробнее');
        }
        return false;
    });
    
    /*cases slider*/
    var swiper = new Swiper(".slider-cases", {
        pagination: {
            el: '.section-cases .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.section-cases .swiper-button-next',
            prevEl: '.section-cases .swiper-button-prev'
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        loop: true,
        watchSlidesProgress: true,
        effect:'fade',
        fadeEffect:{
            crossFade:true
        }
      });
    
    var ll= swiper.slides.length - 2;
    if(ll<10){
        ll='0'+ll;
    }
    $('.section-cases .swiper-pagination-total').text(ll);

    $('.section-cases .swiper-container .wrapper').on('mouseenter touchstart', function(event){
        swiper.autoplay.stop();
        $('.section-cases').addClass('swiper-paused');
        $('.section-cases').find('.swiper-pagination-bullet-active').css("-webkit-animation-play-state", "paused");        
    });
    
    $('.section-cases .swiper-container .wrapper').bind('mouseleave touchend', function(event){
       
        swiper.autoplay.start();               
        $('.section-cases').removeClass('swiper-paused');
        const activeNavItem = $('.section-cases').find('.swiper-pagination-bullet-active');

        //activeNavItem.removeClass('swiper-pagination-bullet-active');
             

        setTimeout(() => {
                    //activeNavItem.addClass('swiper-pagination-bullet-active');
                    // activeNavItem.style.animation = '';
                }, 10);
           // }
       // }
    });
    
    swiper.on('slideChange', function () {
      
        var ll2= swiper.realIndex+1;
        if(ll2<10){
            ll2='0'+ll2;
        }
         $('.section-cases .swiper-pagination-current').text(ll2);
        swiper.autoplay.start();    
    });
    
    /*end cases slider*/
    
    /*reviews slider*/
    var swiper2 = new Swiper(".slider-reviews", {
        pagination: {
            el: '.section-reviews .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.section-reviews .swiper-button-next',
            prevEl: '.section-reviews .swiper-button-prev'
        },
        autoplay: {
            delay: 4000,
                disableOnInteraction: false
          },
        loop: true,
        watchSlidesProgress: true,
        effect:'fade',
        fadeEffect:{
            crossFade:true
        }
      });
    
    var ll= swiper2.slides.length - 2;
    if(ll<10){
        ll='0'+ll;
    }
    $('.section-reviews .swiper-pagination-total').text(ll);

    $('.section-reviews .swiper-container .wrapper').on('mouseenter touchstart', function(event){
        swiper2.autoplay.stop();
        $('.section-reviews').addClass('swiper-paused');
        $('.section-reviews').find('.swiper-pagination-bullet-active').css("-webkit-animation-play-state", "paused");        
    });
    
    $('.section-reviews .swiper-container .wrapper').bind('mouseleave touchend', function(event){
       
        swiper2.autoplay.start();               
        $('.section-reviews').removeClass('swiper-paused');
        const activeNavItem = $('.section-reviews').find('.swiper-pagination-bullet-active');

        //activeNavItem.removeClass('swiper-pagination-bullet-active');
             

        setTimeout(() => {
                    //activeNavItem.addClass('swiper-pagination-bullet-active');
                    // activeNavItem.style.animation = '';
                }, 10);
           // }
       // }
    });
    
    swiper2.on('slideChange', function () {
        var ll2= swiper2.realIndex+1;
        if(ll2<10){
            ll2='0'+ll2;
        }
         $('.section-reviews .swiper-pagination-current').text(ll2);
        swiper2.autoplay.start();    
    });
    /*end reviews slider*/
    
    
    
    $('.js-clients-more').click(function() { 
        $('.clients .hidden').toggleClass('shown');
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).text('Свернуть');
        }else{
             $(this).text('Показать больше');
        }
        return false;
    });
    
    var swiper3 = new Swiper(".block-use-instruments .swiper-container", {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 70,
        //loop:true,
        navigation: {
            nextEl: '.block-use-instruments .swiper-button-next',
            prevEl: '.block-use-instruments .swiper-button-prev'
        },
        breakpoints:{
                 991:{
                    spaceBetween: 50,
                 },  
                767:{
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                 }, 
             }
      });
    
    var swiper4 = new Swiper(".block-use-knowledges .swiper-container", {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 70,
        observer:true, 
        observeParents:true,
        //loop:true,
        navigation: {
            nextEl: '.block-use-knowledges .swiper-button-next',
            prevEl: '.block-use-knowledges .swiper-button-prev'
        },
        breakpoints:{
                 991:{
                    spaceBetween: 50,
                 }, 
                767:{
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                 }, 
             }
      });

    var swiper5 = new Swiper(".block-team .swiper-container", {
        spaceBetween: 60,
        slidesPerView: 4,
        loop:true,
        navigation: {
            nextEl: '.block-team .swiper-button-next',
            prevEl: '.block-team .swiper-button-prev'
        },
         breakpoints:{
                 991:{
                     slidesPerView: 3,
                 },  
                767:{
                     slidesPerView: 2,
                 },  
             575:{
                     slidesPerView: 2,
                 }, 
             }
      });

    
    $('[data-fancybox]').fancybox({
        touch: false,
        closeExisting: true,
        autoFocus: false
    });
    
    if($('#map').length){       
        loadScript();       
    }

});


function loadScript() {
    setTimeout(function(){
        ymaps.ready(function () {
                var myMap = new ymaps.Map('map', {
                        center: [55.726315, 37.399399],
                        zoom: 16,
                        controls: []
                    }, {

                    }),

                    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                        
                    }, {                
                        iconLayout: 'default#image',
                        iconImageHref: 'img/icon-placeholder.svg',
                        iconImageSize: [50, 50],
                        iconImageOffset: [-25, -25]
                    });

                myMap.geoObjects.add(myPlacemark);
            });
        
    }, 2000);
    
    
    
}
