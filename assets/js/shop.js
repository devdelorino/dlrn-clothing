import { products } from '../data/products.js';

let productHTML = '';

products.forEach((product) => {
  productHTML += `
    <div class="product-container">
      <img src="assets/images/products/${product.image}"
        class="product-image">
      <div class="product-name">
        ${product.name}
      </div>
      <div class="product-price">
        ₱${product.price}
      </div>
    </div>
  `;
});

document.querySelector('.products-grid').innerHTML = productHTML;