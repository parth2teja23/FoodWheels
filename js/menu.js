let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("cart-count").textContent = cart.length;

async function loadMenu() {
  const urlParams = new URLSearchParams(window.location.search);
  const restaurantId = urlParams.get("restaurantId");
  const response = await fetch("data/restaurants.json");
  const data = await response.json();

  const restaurant = data.restaurants.find((r) => r.id == restaurantId);
  document.getElementById("restaurant-name").textContent = restaurant.name;

  displayMenu(restaurant.menu);

  document.getElementById("search").addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredMenu = restaurant.menu.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    displayMenu(filteredMenu);
  });
}

function displayMenu(menu) {
  const menuContainer = document.getElementById("menu-items");
  menuContainer.innerHTML = "";
  menu.forEach((item) => {
    menuContainer.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <div class="card-body">
            <div class="image-container">
              <img src="${item.image}" class="card-img-top rounded" alt="${item.name}">
            </div>
            <h5 class="card-title mt-3">${item.name}</h5>
            <p class="card-text">₹${item.price}</p>
            <button class="btn btn-success" onclick="addToCart(${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  });
}

function addToCart(id, name, price) {
  cart.push({ id, name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  document.getElementById("cart-count").textContent = cart.length;
}

window.onload = loadMenu;
