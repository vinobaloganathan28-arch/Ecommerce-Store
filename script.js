const products = [
  {
    id: "p1",
    name: "Gaming Laptop",
    price: 55000,
    image: "https://m.media-amazon.com/images/I/71y5a8-SM5L._SL1500_.jpg",
    desc: "High-performance gaming laptop with 16GB RAM and 512GB SSD."
  },
  {
    id: "p2",
    name: "Bluetooth Headphones",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/61aUxpUqG6L._SL1500_.jpg",
    desc: "Wireless Bluetooth headphones with deep bass & noise cancellation."
  }
];

  {
    id: "p2",
    name: "Bluetooth Headphones",
    price: 1999,
    image: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1500_.jpg",
    desc: "Wireless Bluetooth headphones with deep bass and noise cancellation."
  }
];

// Display products
function loadProducts() {
  let box = document.getElementById("product-list");
  box.innerHTML = "";

  products.forEach(p => {
    box.innerHTML += `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price.toLocaleString()}</p>

        <button onclick="addToCart('${p.id}')">Add to Cart</button>
        <button onclick="goToCart()">Go to Cart</button>
      </div>
    `;
  });
}

// Add to cart
function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart 👍");
}

// Go to cart page
function goToCart() {
  window.location.href = "cart.html";
}

window.onload = loadProducts;
