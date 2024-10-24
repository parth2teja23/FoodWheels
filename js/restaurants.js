document.addEventListener('DOMContentLoaded', async () => {
    const restaurantContainer = document.getElementById('restaurant-cards');
    const response = await fetch('data/restaurants.json');
    const data = await response.json();
    
    data.restaurants.forEach(restaurant => {
      restaurantContainer.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${restaurant.name}</h5>
              <p class="card-text">${restaurant.cuisine}</p>
              <a href="menu.html?restaurantId=${restaurant.id}" class="btn btn-primary">View Menu</a>
            </div>
          </div>
        </div>
      `;
    });
  });
  