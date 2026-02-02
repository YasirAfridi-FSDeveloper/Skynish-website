// Select elements
let addBtn = document.getElementById("addToCart");
let removeBtn = document.getElementById("removeFromCart");
let cartCount = document.getElementById("cartCount");

// Cart array
let cart = [];

// Add to cart
addBtn.addEventListener("click", function () {

  let product = {
    name: "Skynish Skin Brightening Cream",
    price: 2000
  };

  cart.push(product);

  updateCart();

//   alert("Product added to cart!");
});


// Remove from cart
removeBtn.addEventListener("click", function () {

  if (cart.length > 0) {

    cart.pop(); // Remove last item
    updateCart();

    // alert("Product removed!");

  } else {

    // alert("Cart is empty!");
  }

});


// Update cart number
function updateCart() {
  cartCount.innerText = cart.length;
  console.log("Cart:", cart);
}
