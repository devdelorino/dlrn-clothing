import { products } from "../data/products.js";
import { cart } from "../data/cart.js";

const selectedProductId = localStorage.getItem('selectedProductId');

renderProduct();

/*----- RENDER PRODUCT IN HTML -----*/
function renderProduct() {
  let productHTML = '';
  let productSizeHTML = '';

  /*----- LOOPING THROUGH PRODUCTS -----*/
  products.forEach((product) => {
    /*----- IF PRODUCT ID OF OUR PRODUCTS IS EQUAL TO selectedProductId (THIS WAS IN OUR localStorage) -----*/
    if (product.id === selectedProductId) {

      /*----- LOOP THROUGH SIZES AND SAVE IT IN VARIABLE (ACCUMULATOR) -----*/
      product.size.forEach((size, index) => {
        productSizeHTML += `
        <button class="size-button js-size-button" data-size="${product.size[index]}">
          ${size}
        </button>
      `;
      });

      /*----- SAVE HTML IN A VARIABLE -----*/
      productHTML = `
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
            ${productSizeHTML}
          </div>

          <div class="quantity-button">
            <button class="subtract-button">
              -
            </button>
            <input type="text" class="quantity-input js-quantity-input">
            <button class="add-button">
              +
            </button>
          </div>

          <button class="add-to-bag-button js-add-to-bag-button">
            ADD TO BAG
          </button>
        </div>
      `;
    }
  });

  /*----- RENDERING IN HTML -----*/
  document.querySelector('.js-product-container').innerHTML = productHTML;
}

/*----- LOOP THROUGH SIZES AND GET THE CLICKED SIZE AND SAVE IT IN VARIABLE BY USING DATASET -----*/
let sizeResult = '';

document.querySelectorAll('.js-size-button').forEach((sizeButton) => {
  sizeButton.addEventListener('click', () => {
    sizeResult = sizeButton.dataset.size;
  });
});

document.querySelector('.js-add-to-bag-button').addEventListener('click', () => {

  /*----- IF THERE'S NO SIZE CLICKED -----*/
  if (!sizeResult) {
    console.log('You didn\'t put any size!');

  } else {
    console.log(sizeResult);
    console.log(quantityValue.value);

    cart.push(
      {
        productId: selectedProductId,
        size: sizeResult,
        quantity: Number(quantityValue.value)
      }
    );
    console.log(cart);
  }
});

/*----- CREATE A DEFAULT QUANTITY VALUE -----*/
const quantityValue = document.querySelector('.js-quantity-input')
quantityValue.value = 1;