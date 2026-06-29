import { cart } from "../data/cart.js";
import { products } from "../data/products.js";

if (cart.length === 0) {

  document.querySelector('.js-cart-container').innerHTML = `
    <div class=empty-cart-container>
      <h1 class="empty-cart-title">
        CART
      </h1>
      <p class="empty-cart-description-text">
        Your cart is currently empty.
      </p>
      <a class="empty-shop-link" href="shop.html">Continue shopping</a>
    </div>
  `;

} else {
  let cartHTML = `
    <h3 class="shopping-bag-title">
      SHOPPING BAG
    </h3>
  `;

  cart.forEach((cart) => {
    products.forEach((product) => {
      if (cart.id === product.id) {
        cartHTML += `
          <div class="product-container">
            <div class="row-1-product-container">
              <div class="product-image-container">
                <img src="assets/images/products/${product.image}" class="product-image">
              </div>
              <h3 class="product-name">
                ${product.name}
              </h3>
              <h2>
                $${product.price}
              </h2>
            </div>
            <div class="row-2-product-container">
              <div>
                <img src="assets/images/icons/delete-icon.svg">
              </div>
              <h4 class="size-text">
                ${cart.size}
              </h4>
              <div class="button-container">
                <button class="add-button">
                  +
                </button>
                <div class="quantity-text">
                  ${cart.quantity}
                </div>
                <button class="subtract-button">
                  -
                </button>
              </div>
            </div>
          </div>
        `;
      }
    });
  });

  document.querySelector('.js-cart-container').innerHTML = cartHTML;
}