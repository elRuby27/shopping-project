let ProductsInFav = localStorage.getItem('ProductsInFav')
let allProducts = document.querySelector(".products");

if(ProductsInFav){
  let item = JSON.parse(ProductsInFav)
  drawFavProducts(item)
}

function drawFavProducts(products){
  let x = products.map((item) => {
    return `
    <div class="product-item2">
    <div class="product-img">
      <img src="${item.imageUrl}" alt="product Pic">
    </div>
    <div class="product-content">
      <div class="product-desc">
        <h2>${item.title} <br><span>Special version of this year 1-2024</span></h2>
        <div class="product-data">
          <h3>Color<br><span>${item.color}</span></h3>
          <h3>Price<br><span>$${item.price}</span></h3>
          <h3>Rating<br><span>4.5<i class="fa-solid fa-star"></i></span></h3>
        </div>
        <div class="product-item-action">
          <button class="add-to-cart remove-btn" onClick="removeFromFav(${item.id})">
            remove <i class="fa-solid fa-heart-circle-xmark"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
    `
  })
  allProducts.innerHTML = x;
}
// ================================ #Delete items ========================= 
let favBadge = document.querySelector('.fav-badge')
let addFavItem = localStorage.getItem('ProductsInFav') ?JSON.parse(localStorage.getItem('ProductsInFav')) :[];
function removeFromFav(id) {
  // console.log(id)
  let indexFav = addFavItem.map(function(f){
    return f.id;
  }).indexOf(id)

  if(indexFav !== -1){
    addFavItem.splice(indexFav,1);
    localStorage.setItem('ProductsInFav', JSON.stringify(addFavItem));
    favBadge.innerHTML = addFavItem.length
    drawFavProducts(addFavItem)
  }



  console.log(addFavItem)
}
// ==================================== #favBadge counter . ==============


if(addFavItem){
  favBadge.style.display ="block"
  favBadge.innerHTML = addFavItem.length
}
