/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
 function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button[Id]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })

}

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('Id');
    addProductIntoBasket(productId);
    /*console.log(productId);*/
}


addEventListenersForAddToCartButtons();