(function ($) {
    "use strict";
        
    const product1 = {
        type: 'active',
        topseller: 1,
      };
      
      const product2 = {
        type: '',
        topseller: 0,
      };
      
      const product3 = {
        type: '',
        topseller: 1,
      };
      
      const product4 = {
        type: '',
        topseller: 0,
      };

      const carouseltest = document.querySelector('.carousel-test');
      const carouseltest2 = document.querySelector('.carousel-test2');

      const products = [product1, product2, product3, product4]; 

      const displayProducts = function(acc){  

        carouseltest.innerHTML = '';
      
        acc.forEach(function(mov, i) { 
      
          const topseller = mov.topseller > 0 ? '<span class="badge bg-dark">Top seller</span>' : '';  
          const html = `
          <div class="carousel-item ${mov.type}">
          <div class="col-md-4">
              <div class="card card-body">
                  ${topseller}
                  <img class="img-fluid" src="img/productimage.PNG">
                  <p class="brandname">Brand</p>
                  <p class="productname">Product Name</p>
              </div>
          </div>
          </div>
          `;
      
          carouseltest.insertAdjacentHTML('afterbegin', html);  // her eleman için oluşturdugumuz elementi container a firstchild olarak ekle
          carouseltest2.insertAdjacentHTML('afterbegin', html);  // her eleman için oluşturdugumuz elementi container a firstchild olarak ekle
      
        })
      }
      
      displayProducts(products);

      class Featured extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `
          <div class="row mx-auto my-auto">
          <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
              <div class="carousel-inner carousel-test w-100" role="listbox">

              </div>
              <a class="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon bg-dark border border-dark rounded-circle"
                      aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                  <span class="carousel-control-next-icon bg-dark border border-dark rounded-circle"
                      aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
              </a>
          </div>
      </div>
    `}}


    class Footer extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `
          <div class="footer container-fluid">
        
          <h2>cloudcrazy</h2>
          <p>Copyright@ 2022 Cloudcrazy.All right reserved.</p>
       
    </div>
    `}}


    class Header extends HTMLElement {
        connectedCallback() {
          this.innerHTML = `
          <div class="container-fluid" style="background-color: #3200ff">
          <div class="container">
              <div class="row align-items-center px-xl-5" style="padding-top: 1rem">
                  <div class="col-lg-3 d-none d-lg-block">
                      <a href="./index.html" class="text-decoration-none">
                          <h1 class="m-0 display-5 font-weight-semi-bold baslik">cloudcrazy</h1>
                      </a>
                  </div>
                  <div class="col-lg-6 col-6 text-left searchbox">
                      <form action="./plp.html">
                          <div class="input-group">
                              <input type="text" class="form-control" placeholder="Search for brands, categories or products">
                              <div class="input-group-append">
                                  
                                  <span class="input-group-text bg-transparent" style="color: black">
                                     <a href="./plp.html" style="color: black"> <i class="fa fa-search"></i></a>
                                  </span>
                              </div>
                          </div>
                      </form>
                  </div>
                  <div class="col-lg-3 col-6 text-right righttopmenu">
                          <a href="" class="nav-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            </svg> Login</a>
                          <a href="" class="nav-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg> Favorites</a>
                          <a href="" class="nav-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg> Cart</a>
                      </div>
              </div>
      
              <div class="row align-items-center px-xl-5" >
                      <nav class="navbar navbar-expand-lg navbar-light py-3 py-lg-0 px-0">
                              <a href="" class="text-decoration-none d-block d-lg-none">
                                  <h1 class="m-0 display-5 font-weight-semi-bold">cloudcrazy</h1>
                              </a>
                              <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                  <span class="navbar-toggler-icon"></span>
                              </button>
                              <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                  <div class="navbar-nav mr-auto py-0">
                                      <a href="index.html" class="nav-item nav-link active">WOMEN</a>
                                      <a href="shop.html" class="nav-item nav-link">MEN</a>
                                      <a href="detail.html" class="nav-item nav-link">KIDS</a>
                                      <a href="contact.html" class="nav-item nav-link">HOUSE</a>
                                      <a href="contact.html" class="nav-item nav-link">GARDEN</a>
                                      <a href="contact.html" class="nav-item nav-link">SHOES</a>
                                      <a href="contact.html" class="nav-item nav-link">ACCESSORIES</a>
                                      <a href="contact.html" class="nav-item nav-link">ELECTRONICS</a>
                                  </div>
                                
                              </div>
                          </nav>
              </div>
          </div>
      </div>
    `}}
    
    
    
    customElements.define('main-footer', Footer);
    customElements.define('main-header', Header);
    
    
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

      $('#recipeCarousel1').carousel({
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

    
})(jQuery);





