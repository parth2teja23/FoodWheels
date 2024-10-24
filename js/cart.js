let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', loadCartItems);

function loadCartItems() {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceEl = document.getElementById('total-price');
  cartContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartContainer.innerHTML = `<p class="text-center">Your cart is empty.</p>`;
    return;
  }
  
  let totalPrice = 0;

  cart.forEach((item, index) => {
    cartContainer.innerHTML += `
      <div class="col-md-12 mb-4">
        <div class="card">
          <div class="card-body d-flex justify-content-between">
            <div>
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">Price: $${item.price.toFixed(2)}</p>
            </div>
            <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
          </div>
        </div>
      </div>
    `;
    totalPrice += item.price;
  });

  totalPriceEl.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCartItems();
}

function proceedToCheckout() {
  if (cart.length === 0) {
    alert('Your cart is empty.');
    return;
  }

  // Simulate checkout process
  alert('Proceeding to checkout...');
  
  // Clear the cart after checkout
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  loadCartItems();
}
