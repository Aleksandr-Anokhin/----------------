
let amountsProduct = document.querySelector('.number-of-positions');
const addToCartBtns = document.querySelectorAll('.btn-add');

amountsProduct.textContent = 0;

addToCartBtns.forEach((btn) => {
    btn.addEventListener('click', addedProductHandler);
});

function addedProductHandler(event) {
    amountsProduct.textContent++;
}