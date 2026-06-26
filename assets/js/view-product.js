import { products } from "../data/products.js";

const selectedProductId = localStorage.getItem('selectedProductId');

let productHTML = '';
let getProductValue = [];
products.forEach((product) => {
  if (product.id === selectedProductId) {
    getProductValue = product;
    productHTML += `
      <div class="product-image-container">
        <img src="assets/images/products/${product.image}" class="product-image">
      </div>
      <div>
        <h3 class="product-name">
          ${product.name}
        </h3>
        <p class="product-price">
          $${product.price}
        </p>
        <p class="product-description">
          ${product.description}
        </p>

        <div class="size-button-container">
          <button class="size-button">
            S
          </button>
          <button class="size-button">
            M
          </button>
          <button class="size-button">
            L
          </button>
        </div>

        <div class="quantity-button">
          <button class="subtract-button">
            -
          </button>
          <input type="text" class="quantity-input" placeholder="1">
          <button class="add-button">
            +
          </button>
        </div>

        <button class="add-to-bag-button">
          ADD TO BAG
        </button>
      </div>
    `;
  }
});

document.querySelector('.js-product-container').innerHTML = productHTML;