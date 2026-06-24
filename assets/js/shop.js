import { products } from '../data/products.js';

displayProducts();

function displayProducts() {
  let tShirtHTML = '';
  let shortsHTML = '';
  let hoodieHTML = '';
  let jeansHTML = '';

  products.forEach((product) => {
    if (product.category === 't-shirts') {
      tShirtHTML += `
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
    } else if (product.category === 'shorts') {
      shortsHTML += `
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
    } else if (product.category === 'hoodie') {
      hoodieHTML += `
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
    } else if (product.category === 'jeans') {
      jeansHTML += `
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
    }
  });

  document.querySelector('.js-t-shirts-grid').innerHTML = tShirtHTML;
  document.querySelector('.js-shorts-grid').innerHTML = shortsHTML;
  document.querySelector('.js-hoodie-grid').innerHTML = hoodieHTML;
  document.querySelector('.js-jeans-grid').innerHTML = jeansHTML;
}