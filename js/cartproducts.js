let ProductsInCart = localStorage.getItem('ProductsInCart')
let allProducts = document.querySelector(".products");

if(ProductsInCart){
  let item = JSON.parse(ProductsInCart)
  drawCartProducts(item)
}

function drawCartProducts(products){
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
          <button class="add-to-cart remove-btn" onClick="removeFromCart(${item.id})">
            remove <i class="fa-solid fa-cart-plus"></i>
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
let badge = document.querySelector('.badge')
let addItem = localStorage.getItem('ProductsInFav') ?JSON.parse(localStorage.getItem('ProductsInCart')) :[];
function removeFromCart(id) {
  // console.log(id)
  let index = addItem.map(function(i){
    return i.id;
  }).indexOf(id)

  if(index !== -1){
    addItem.splice(index,1);
    localStorage.setItem('ProductsInCart', JSON.stringify(addItem));
    badge.innerHTML = addItem.length
    drawCartProducts(addItem)
  }
}
// ==================================== #favBadge counter . ==============


if(addItem){
  badge.style.display ="block"
  badge.innerHTML = addItem.length
}
