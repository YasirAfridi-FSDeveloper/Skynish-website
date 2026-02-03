// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Select elements
let cartCount = document.getElementById("cartCount");
let addBtns = document.querySelectorAll(".add-to-cart");
let removeBtns = document.querySelectorAll(".remove-from-cart");

// Update cart count
function updateCartCount() {
  if (cartCount) cartCount.innerText = cart.length;
}

// Save cart
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

// ADD BUTTON
addBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let name = btn.dataset.name;
    let price = btn.dataset.price;

    cart.push({name, price});
    saveCart();
  });
});

// REMOVE BUTTON
removeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    let name = btn.dataset.name;
    let index = cart.findIndex(item => item.name === name);
    if (index !== -1) {
      cart.splice(index, 1);
      saveCart();
    }
  });
});

// SHOW CART PAGE
let cartList = document.getElementById("cartList");
let total = document.getElementById("total");

if (cartList) {
  let sum = 0;
  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item.name} - Rs ${item.price}`;
    cartList.appendChild(li);
    sum += Number(item.price);
  });
  total.innerText = "Total: Rs " + sum;
}

// Initialize count on page load
updateCartCount();
