jQuery(document).ready(function(){
     // "use strict";

     /*************** Introduction Slider ***************/

     $('.intro-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      margin:10,
      arrows: false,
      autoplay:true,
      adaptiveHeight: true,
      responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay:true,
          arrows: false
        }
      },
      ]
    });

     /*************** Offer Banner Slider ***************/

     $('.offer-bar-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay:true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      centerPadding: '45px',
      responsive: [
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          arrows: false,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 320,
        settings: {
          infinite: true,
          arrows: false,
          slidesToShow: 1,
          centerMode: false,
        }
      },
      ]
    });


     /*************** Best Food Slider ***************/

     $('.best-food-slider').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      autoplay:true,
      centerPadding: '100px 0px 0px',
      responsive: [
      {
        breakpoint: 576,
        settings: {
          infinite: true,
          arrows: false,
          centerPadding: '0px 15px 0px 19px',
        }
      },
      ]
    });

     /*************** Payment Slider ***************/

     $('.payment-option-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows:false,
      autoplay: true,
      speed: 500,
      variableWidth: true,
      centerPadding: '100px 0px 0px',

      responsive: [
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true,
          centerPadding: '100px 0px 0px',
        }
      },
      ]
    });


     /*************** Sticky Header ***************/

     $(window).scroll(function() {
      var sticky = $('.top-header'),
      scroll = $(window).scrollTop();

      if (scroll >= 50) { 
        sticky.addClass('sticky'); 
      }
      else { 
        sticky.removeClass('sticky');
      }
    });

     $(window).scroll(function() {    
      var scroll = $(window).scrollTop();

     //>=, not <=
     if (scroll >= 40) {
        //clearHeader, not clearheader - caps H
        $(".home-header, .shadow-header").addClass("darkHeader");
      }
      else {
         $(".home-header, .shadow-header").removeClass("darkHeader");
      }
    });


     /*************** Add extra topping jquery ***************/

     $(document).on('click', '.add_topping', function(){

      var topping_value = $(this).parent().find('.topping-price').text();

      var toppinghtml = $(this).parents('.extra-topping').find('.single-default-cheese').html();

      var incre_html = '<form><div class="add-remove-btns"><div class="quantity buttons_added"><input type="hidden" class="topping_value" name="topping_value" value="'+topping_value+'"><input type="button" value="-" class="minus"><input type="text" class="input-text qty text" step="1" min="1" max="10000" name="quantity" value="1"><input type="button" value="+" class="default-topping plus"></div><div class="remove-topp"><a class="topping-remove"><svg version="1.1" id="cross-11" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 11" fill="#666666"><path d="M2.2,1.19l3.3,3.3L8.8,1.2C8.9314,1.0663,9.1127,0.9938,9.3,1C9.6761,1.0243,9.9757,1.3239,10,1.7&#xA;&#x9;c0.0018,0.1806-0.0705,0.3541-0.2,0.48L6.49,5.5L9.8,8.82C9.9295,8.9459,10.0018,9.1194,10,9.3C9.9757,9.6761,9.6761,9.9757,9.3,10&#xA;&#x9;c-0.1873,0.0062-0.3686-0.0663-0.5-0.2L5.5,6.51L2.21,9.8c-0.1314,0.1337-0.3127,0.2062-0.5,0.2C1.3265,9.98,1.02,9.6735,1,9.29&#xA;&#x9;C0.9982,9.1094,1.0705,8.9359,1.2,8.81L4.51,5.5L1.19,2.18C1.0641,2.0524,0.9955,1.8792,1,1.7C1.0243,1.3239,1.3239,1.0243,1.7,1&#xA;&#x9;C1.8858,0.9912,2.0669,1.06,2.2,1.19z"/></svg></a></div></div></form>'
      $(this).parents('.extra-topping').remove();              

      $('#topping_list').append('<div class="topping-wrap"> <div class="single-default-cheese">'+toppinghtml+'</div><div class="incre-drec-item">'+incre_html+'</div></div>');

      
      jQuery('#topping_list').parent().find('.default-pizza-topp').show();
      
    });

     $(document).on('click', '.topping-remove', function(){

      var find_topping_type = $(this).parents('.topping-wrap').find('.topping-name');

      var topping_value = $(this).parents('.topping-wrap').find('.topping_value').val();

      var toppinghtml = $(this).parents('.topping-wrap').find('.single-default-cheese').html();

      var incre_html = '<form><div class="quantity buttons_added"><span class="extra-topp-price">$<span class="topping-price">'+topping_value+'</span></span><input type="button" value="+" class="extra-top-incre add_topping"></div></form>';

      var final_html = '<div class="topping-wrap extra-topping"> <div class="single-default-cheese">'+toppinghtml+'</div>'+incre_html+'</div>';
      $(this).parents('.topping-wrap').remove();  


      if(find_topping_type.hasClass('your-ketchup')){
        $('.pizza-sause').append(final_html);
      } else {

        $('.pizza-extra-topping').append(final_html);

      }

      var len = jQuery('.topping-list .topping-wrap').length;
      if(len === 0){
        jQuery('#topping_list').parent().find('.default-pizza-topp').hide();
      }

    });

    $(document).on('click', '.quantity.buttons_added .plus', function(){

      $(this).parent().find('.input-text').val( function(i, oldval) {
        return parseInt( oldval, 10) + 1;
      });

    });

    $(document).on('click', '.quantity.buttons_added .minus', function(){

      $(this).parent().find('.input-text').val( function(i, oldval) {
        if(parseInt( oldval, 10) > 1){ return parseInt( oldval, 10) - 1; } else {  return 1;  }
      });

    });

    /*************** Read More Less ***************/

    $(document).on('click', '.read-more-btn-pizza', function(){

      if($(this).hasClass('readless')){
        $(this).parent().find('.pizza-more-text').hide();
        $(this).parent().find('.pizaa_dots').show();
        $(this).text('Read More').removeClass('readless');

      } else {

        $(this).parent().find('.pizza-more-text').css('display', 'inline');
        $(this).parent().find('.pizaa_dots').hide();
        $(this).text('Read Less').addClass('readless');
      }
    });


  });

  /*************** PreLoader ***************/

  window.onload = function () {
   $('.preloader').fadeOut(function(){ $('.pre-loader').remove(); } );
  }

jQuery(window).on('load',function () {
  'use strict'; 
  setTimeout(function(){
    jQuery('#la_splash').addClass('active');
    jQuery('#la_splash').fadeOut(2000);
  }, 2000);

  setTimeout(function(){
    jQuery('.otp-success').addClass('active');
    jQuery('.otp-success').fadeOut(1500);
  }, 1500);

  /*************** Star Rating ***************/

  $(".stars-container .star-item").on('click',function() {
    var starDataId = $(this).attr("data-id");

    $(".stars-container .star-item-" + starDataId).addClass("active");
    $(".stars-container .star-item-" + starDataId).prevAll().addClass("active");
    $(".stars-container .star-item-" + starDataId).nextAll().removeClass("active");
    var colorVal = (1 - ((starDataId * 2) / 10));
    $(".ratingModal .top-img-container").css({"filter" : "grayscale(" + colorVal + ")"});
    $("#vote-slider").val(starDataId);
    $("#vote span").html($("#vote-slider").val())

  });


  /*************** Enable-Disable Button***************/

  $('input[name="paymentRadio"]').on('click',function(){
    if($(this).val() === 'enabled'){
      $('#input1').removeAttr('disabled').focus();
    }else{
      $('#input1').attr('disabled','disabled');
    }
  });

});


if (!window.matchMedia('(display-mode: standalone)').matches) {
  setTimeout(function(){
    jQuery('.verify-wrap.otp-wrap').addClass('show');
    jQuery('.la-veri-overlay').addClass('fade show');
  }, 3000);

  jQuery('.la-veri-overlay, .none-veri-btn').on('click',function(){
    jQuery('.verify-wrap.otp-wrap').slideUp(500, function() {
      jQuery(this).removeClass('show');
    });
    setTimeout(function(){
      jQuery('.la-veri-overlay').removeClass('show');
    }, 500);
  }); 

  /*************** For Proceed Checkout ***************/

  jQuery('.proceed-checkout').on('click',function(){
    setTimeout(function(){
      jQuery('.verify-wrap.payment-wrap').addClass('show');
      jQuery('.payemnt-overlay .la-payment-overlay').addClass('fade show');
    }, 800);
  });

  jQuery('.next-button').on('click',function(){
    jQuery('.verify-wrap.payment-wrap').removeClass('show');
    setTimeout(function(){
      jQuery('.payemnt-overlay .la-payment-overlay').removeClass('show');
    }, 500);
  });

  /*************** For Change Location ***************/

  jQuery('.change-location').on('click',function(){
    setTimeout(function(){
      jQuery('.verify-wrap.chnage-delivery-add').addClass('show');
      jQuery('.la-change-addre-overlay').addClass('fade show');
    }, 500);
  });

  jQuery('.add-new-address').on('click',function(){
    jQuery('.verify-wrap.chnage-delivery-add').removeClass('show');
    setTimeout(function(){
      jQuery('.la-change-addre-overlay').removeClass('show');
    }, 500);
  });

  /*************** For As soon as Screen ***************/

  jQuery('.chng-asap-btn').on('click',function(){
    setTimeout(function(){
      jQuery('.verify-wrap.assoon-wrap').addClass('show');
      jQuery('.la-assoon-overlay').addClass('fade show');
    }, 500);
  });

  jQuery('.chng-asap-btn').on('click',function(){
    jQuery('.verify-wrap.checkout-wrap').removeClass('show');
    setTimeout(function(){
      jQuery('.secu-checkout .la-secure-overlay').removeClass('show');
    }, 500);
  });

  /*************** Payment Via Screen ***************/

  jQuery('.payment-via-btn').on('click',function(){ 
   setTimeout(function(){
    jQuery('.verify-wrap.payment-wrap').addClass('show');
    jQuery('.payemnt-overlay .la-payment-overlay').addClass('fade show');
  }, 500);
 });

  jQuery('.payment-via-btn').on('click',function(){ 
    jQuery('.verify-wrap.checkout-wrap').removeClass('show');
    setTimeout(function(){
      jQuery('.secu-checkout .la-secure-overlay').removeClass('show');
    }, 500);
  });
}

$('input[type=radio][name="checkout_time"]').change(function() {
  if (this.value == 'orderfuture') {
    $('.asap-data-time').show();
  } else {
    $('.asap-data-time').hide();
  }
});

var $radioButtons = $('input[type="radio"][name="paymentRadio"]');
$radioButtons.click(function() {
    $radioButtons.change(function() {
        jQuery('.pay-sele-box').addClass('checked');
    });
});





