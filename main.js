$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $("header").addClass("nav-fixed");
  } else {
      $("header").removeClass("nav-fixed");
  }
});

$('.navbar .nav-item .nav-link').on('click', function(){
  $('.navbar .nav-item .nav-link').removeClass('active');
  $(this).addClass('active');
});

jQuery(".benefits-carousel").owlCarousel({
  autoplay: true,
  loop: false,
  rewind: true, /* use rewind if you don't want loop */
  margin: 30,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsiveClass: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },

    600: {
      items: 1,
      nav: false,
    },

    1024: {
      items: 1,
      nav: true,
    },

    1366: {
      items: 1
    }
  }
})

jQuery(".reviews-carousel").owlCarousel({
  autoplay: true,
  loop: true,
  rewind: false, /* use rewind if you don't want loop */
  margin: 30,
  // animateOut: 'fadeOut',
  // animateIn: 'fadeIn',
  responsiveClass: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 1
    },

    1024: {
      items: 1
    },

    1366: {
      items: 2
    }
  }
})