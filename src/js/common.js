module.exports = function() {
  let slick = require('slick-carousel');
  let mmenu = require('jquery.mmenu');
  let WOW = require('wow.js');

      
  $(function(){

    new WOW().init();
    
    // interactive world map
    (function(){
      var
      $visasList = $('#visasList .visas__link'),
      $visasImgs = $('#visasImgs img');

      function setZindex( index, zIndex ) {
        $visasImgs.eq(index).css('zIndex', zIndex);
      }

      $visasList.each(function( i ){
        $(this).on('mouseover', function(){
          setZindex( i+1, 15 );
          setZindex( 0, 10 );
        }).on('mouseout', function(){
          $visasImgs.css('zIndex', 10);
          setZindex( 0, 15 );
        });
      })
        
    }());

    // reviews slider
    $('.reviews-slider').slick({
      centerMode: true,
      infinite: true,
      centerPadding: '60px',
      slidesToScroll: 1,
      slidesToShow: 1,
      fade: true,
      cssEase: 'linear',
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      adaptiveHeight: true,
    });

    // fix menu
    $(window).scroll(function(){
      if( $(window).scrollTop() > 100 ) {
        $('#header').addClass('active');
      } else {
        $('#header').removeClass('active');
      }
    });
    
    if( $(window).scrollTop() > 100 ) {
      $('#header').addClass('active');
    } else {
      $('#header').removeClass('active');
    }

    // mmenu
    $("#mmenu").show().mmenu({
      navbar: {
        title: "Меню"        
      }
    });
    var API = $("#mmenu").data( "mmenu" );
    
    $(".humburger-menu").click(function() {
      API.open();
    });

    // scroll to block
    $('.lp-menu__link').each(function(){
      $(this).click(function() {
        $('html, body').animate({
          scrollTop: $("#" + $(this).attr('data-scroll')).offset().top - 50
        }, 1500);
      });
    });

    console.log("Hello my webpack template!")

  });
};