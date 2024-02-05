// =================================== #Search-Bar . ======================== 

let searchBar = document.querySelector("#search-input")
let filteredProducts = [];

searchBar.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm)
  );
  drawItems(filteredProducts);
});
// ===================================== #Products data . =============================

let allProducts = document.querySelector(".products");
let products = [
  {
    id: 1,
    title: "Nike-Shark",
    color: "Black & Red",
    price: "780",
    imageUrl: "images/nike.jpg",
  },
  {
    id: 2,
    title: "Air RH7",
    color: "Black & Blue",
    price: "289",
    imageUrl: "images/Nike-shoes2.jpg",
  },
  {
    id: 3,
    title: "Air v2",
    color: "Blue & White",
    price: "465",
    imageUrl: "images/Nike-shoes3.jpg",
  },
  {
    id: 4,
    title: "Nike-vk12",
    color: "Yellow& white",
    price: "370",
    imageUrl: "images/Nike-shoes4.jpg",
  },
  {
    id: 5,
    title: "Volk R26",
    color: "white",
    price: "500",
    imageUrl: "images/Nike-shoes5.jpg",
  },
  {
    id: 6,
    title: "windy NR12",
    color: "White",
    price: "380",
    imageUrl: "images/Nike-shoes6.jpg",
  },
  {
    id: 7,
    title: "Nike-Sky",
    color: "Blue & white",
    price: "720",
    imageUrl: "images/Nike-shoes7.jpg",
  },
  {
    id: 8,
    title: "Reni ZC52",
    color: "Black & Blue",
    price: "600",
    imageUrl: "images/Nike-shoes8.jpg",
  },
  {
    id: 9,
    title: "Voda N32",
    color: "Brown",
    price: "540",
    imageUrl: "images/Nike-shoes9.jpg",
  },
];
// ================================= #Drawing products structure . ========================== 
function drawItems (products){
  let x = products.map((item) => {
    return `
    <div class="product-item2">
    <div class="product-img">
      <img src="${item.imageUrl}" alt="product Pic">
    </div>
    <div class="product-content">
      <div class="product-desc">
        <h2>${item.title} <br><span>Special version of this year 2-2024</span></h2>
        <div class="product-data">
          <h3>Color<br><span>${item.color}</span></h3>
          <h3>Price<br><span>$${item.price}</span></h3>
          <h3>Rating<br><span>4.5<i class="fa-solid fa-star"></i></span></h3>
        </div>
        <div class="product-item-action">
          <button class="add-to-cart" data-id="${item.id}" onClick="addToCart(${item.id},this)">
            add <i class="fa-solid fa-cart-plus"></i>
          </button>
          <button class="removeBtn">Remove <i class="fa-regular fa-trash-can"></i></button>
          <button class="add-to-fav" onClick="addToFav(${item.id})">Save to <i class="fa-regular fa-heart"></i></button>
        </div>
      </div>
    </div>
  </div>
    `
  })
  allProducts.innerHTML = x;
}
drawItems(products);

// ================================ #Shopping List badge . ======================= 

let cartProductsBox = document.querySelector('.carts-products div')
let badge = document.querySelector('.badge')
let addedItem = localStorage.getItem('ProductsInCart') ? JSON.parse(localStorage.getItem('ProductsInCart')) :[] 
if(addedItem){
  addedItem.map((item) =>{
    cartProductsBox.innerHTML += `<div id="product-col"><img src="${item.imageUrl}"><span>${item.title}</div>`;
  })
  badge.style.display="block"
  badge.innerHTML = addedItem.length;
}
// ============================= #Button "add to cart" . ====================== 

let addBtn = document.querySelector('.add-to-cart')
// let removeBtn = document.querySelector('.removeBtn')
function addToCart(id, button) {
  

  let chosenItem = products.find((item) => item.id === id)


  
  if (localStorage.getItem("userName")) {
  
    cartProductsBox.innerHTML += `<div id="product-col"><img src="${chosenItem.imageUrl}"><span>${chosenItem.title}</div>`;
// ======== adding every new item to the addedItem array ========
    addedItem= [...addedItem, chosenItem];
    localStorage.setItem("ProductsInCart", JSON.stringify(addedItem))
    let cartsProductsLength = document.querySelectorAll(".carts-products div #product-col")
    badge.style.display="block"
    badge.innerHTML = cartsProductsLength.length;
    button.style.display = "none"
  }else {
    // If user isn't logged in, redirect to login page
    window.location = "login.html"
  }
}


// =============================== #Open and close shopping List . ======================
let shoppingCartIcon = document.querySelector('.shopping-cart')
let cartsProducts = document.querySelector('.carts-products')
shoppingCartIcon.addEventListener('click', openCart)
function openCart() {
  if(cartsProducts.innerHTML != ""){
    if(cartsProducts.style.display=="block"){
      cartsProducts.style.display = 'none'
    }else{
      cartsProducts.style.display = 'block'
    }
  }
}
// =================================== #Favorites list badge . ========================= 
let favProductsBox = document.querySelector('.fav-products div')
let favBadge = document.querySelector('.fav-badge')

let favItem =localStorage.getItem('ProductsInFav') ? JSON.parse(localStorage.getItem('ProductsInFav')):[]
if(favItem){
  favItem.map((item) =>{
    favProductsBox.innerHTML += `<div id="product-col"><img src="${item.imageUrl}"><span>${item.title}</div>`;
  })
  favBadge.style.display="block"
  favBadge.innerHTML = favItem.length;
}
// ================= #Button add to favorites . ===================== 
function addToFav(id){
  let chosenItem = products.find((item) => item.id === id)

  if (localStorage.getItem("userName")) {
    favProductsBox.innerHTML += `<div id="product-col"><img src="${chosenItem.imageUrl}"><span>${chosenItem.title}</div>`;
// ----- adding every new item to the favItem array ---
    favItem= [...favItem, chosenItem];
    localStorage.setItem("ProductsInFav", JSON.stringify(favItem))
    let favProductsLength = document.querySelectorAll(".fav-products div #product-col")
    favBadge.style.display="block"
    favBadge.innerHTML = favProductsLength.length;
    
  } else {
    // If user isn't logged in, redirect to login page
    window.location = "login.html"
  }
}

// ============================ #Open and close favorites list . =============== 
let favCartIcon = document.querySelector('.fav-cart')
let favProducts = document.querySelector('.fav-products')
favCartIcon.addEventListener('click', openFav)

function openFav(){
  if(favProducts != ""){
    if(favProducts.style.display=="block"){
      favProducts.style.display = 'none'
    }else{
      favProducts.style.display = 'block'
    }
  }
}