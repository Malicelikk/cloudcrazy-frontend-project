(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
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


    $('#recipeCarousel').carousel({
        interval: 10000
      })
      
      $('.carousel .carousel-item').each(function(){
          var minPerSlide = 3;
          var next = $(this).next();
          if (!next.length) {
          next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          for (var i=0;i<minPerSlide;i++) {
              next=next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
                }
              
              next.children(':first-child').clone().appendTo($(this));
            }
      });

      $('#recipeCarousel1').carousel1({
        interval: 10000
      })
      
      $('.carousel1 .carousel-item').each(function(){
          var minPerSlide = 3;
          var next = $(this).next();
          if (!next.length) {
          next = $(this).siblings(':first');
          }
          next.children(':first-child').clone().appendTo($(this));
          
          for (var i=0;i<minPerSlide;i++) {
              next=next.next();
              if (!next.length) {
                  next = $(this).siblings(':first');
                }
              
              next.children(':first-child').clone().appendTo($(this));
            }
      });


      
      


    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);


class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <div class="row align-items-center px-xl-5" style="padding-top: 1rem">
      <div class="col-lg-3 d-none d-lg-block">
          <a href="" class="text-decoration-none">
              <h1 class="m-0 display-5 font-weight-semi-bold baslik">cloudcrazy</h1>
          </a>
      </div>
      <div class="col-lg-6 col-6 text-left">
          <form action="">
              <div class="input-group">
                  <input type="text" class="form-control"
                      placeholder="Search for brands, categories or products">
                  <div class="input-group-append">
                      <span class="input-group-text bg-transparent" style="color: black">
                          <i class="fa fa-search"></i>
                      </span>
                  </div>
              </div>
          </form>
      </div>
      <div class="col-lg-3 col-6 text-right righttopmenu">
          <a href="" class="nav-item">Login</a>
          <a href="" class="nav-item">Favorites</a>
          <a href="" class="nav-item">Cart</a>
      </div>
  </div>
`}}



customElements.define('main-header', Header);

