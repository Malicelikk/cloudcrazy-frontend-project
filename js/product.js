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

  const displayProducts = function(products){  

    carouseltest.innerHTML = '';
  
    products.forEach(function(pro, i) { 
  
      const topseller = pro.topseller > 0 ? '<span class="badge bg-dark">Top seller</span>' : '';  
      const html = `
      <div class="carousel-item ${pro.type}">
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