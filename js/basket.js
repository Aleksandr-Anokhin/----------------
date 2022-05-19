'use strict';

const openBasketBtn = document.querySelector('.basket-link');
const basketCounterEl = document.querySelector('.basket-link number-of-positions');

openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

/**
 * В корзине хранится количество каждого товара
 * Ключ это id продукта, значение это количество товаров в корзине, например:
 {
    1: 10,
    3: 2
 }
 */
 let basket = {};

 /**
  * Метод добавляет продукт в объект basket.
  * @param {number} productId
  */
 function addProductToObject(productId) {
     if (!(productId in basket)) {
         basket[productId] = 1;
     } else {
         basket[productId]++;
     }
 }

 /**
 * Функция срабатывает когда нужно отрисовать продукт в корзине.
 * @param {number} productId
 */
function renderProductInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInBasket(productId);
    }
}


/**
 * Функция увеличивает счетчик количества товаров рядом с иконкой корзины.
 */
 function increaseProductsCount() {
    basketCounterEl.textContent++;
}

/**
 * Эта функция срабатывает когда добавляют новый товар в корзину.
 * @param {number} productId
 */
 function addProductIntoBasket(productId) {
    increaseProductsCount();
    addProductToObject(productId);
    renderProductInBasket(productId);
 }     