// Show welcome message when clicking the Shop button
function showAlert() {
  alert("Welcome to Sidd Collection! Start shopping now.");
}
function subscribe() {
  let email = document.getElementById('email').value;
  if (email === "") {
    alert("Please enter your email!");
  } else {
    alert("Thank you for subscribing, " + email + "!");
  }
}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Cart</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f5f5f5;
    }
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    .cart-container {
      display: flex;
      flex-direction: column;
      gap: 15px;
      max-width: 800px;
      margin: auto;
    }
    .cart-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .cart-item img {
      width: 100px;
      border-radius: 8px;
    }
    .cart-details {
      flex: 1;
      margin-left: 15px;
    }
    .cart-details h3 {
      margin: 0;
      font-size: 18px;
    }
    .cart-details p {
      margin: 5px 0;
    }
    .remove-btn {
      background: red;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 5px;
      cursor: pointer;
    }
    .total {
      text-align: right;
      margin-top: 20px;
      font-size: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <h1>🛒 My Shopping Cart</h1>
  <div class="cart-container" id="cart-container"></div>
  <div class="total" id="total">Total: ₹0</div>

  <script>
    // LocalStorage se cart data load karna
    function loadCart() {
      const cartContainer = document.getElementById("cart-container");
      const totalElement = document.getElementById("total");
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cartContainer.innerHTML = "";

      let total = 0;

      cart.forEach((item, index) => {
        total += parseInt(item.price.replace("₹",""));

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
          <img src="${item.imgSrc}" alt="${item.name}">
          <div class="cart-details">
            <h3>${item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Size: ${item.size}</p>
          </div>
          <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
      });

      totalElement.innerText = "Total: ₹" + total;
    }

    // Cart se item remove karna
    function removeItem(index) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    }

    // Page load hone par cart show karo
    window.onload = loadCart;
  </script>

</body>
</html>
let seconds = 3600; // 1 hour countdown

function updateTimer() {
  let h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  let m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  let s = String(seconds % 60).padStart(2, "0");
  document.querySelector(".timer").textContent = `${h}h:${m}m:${s}s`;
  if (seconds > 0) seconds--;
}
function showMessage() {
  alert("Hello! Your website is working fine!");
}
.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
.btn:hover {
  background-color: #0056b3;
}
setInterval(updateTimer, 1000);

// ---- Simple Cart Counter ----
let cartCount = 0;
function addToCart(productName) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  alert(`${productName} added to your cart!`);
}

// ---- Dark Mode Toggle ----
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// ---- Scroll to Top Button ----
let scrollBtn = document.createElement("button");
scrollBtn.innerText = "⬆";
scrollBtn.id = "scrollTop";
scrollBtn.style.display = "none";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.padding = "10px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.background = "#222";
scrollBtn.style.color = "white";
scrollBtn.style.cursor = "pointer";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product");

searchInput.addEventListener("keyup", function() {
  const searchValue = searchInput.value.toLowerCase();
  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();
    const price = product.dataset.price.toLowerCase();
    const offer = product.dataset.offer.toLowerCase();
    const category = product.dataset.category.toLowerCase();

    if (
      name.includes(searchValue) ||
      price.includes(searchValue) ||
      offer.includes(searchValue) ||
      category.includes(searchValue)
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});

window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};