function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const priceElements = cartWrapper.querySelectorAll('.price__currency');
    const deliveryCost = document.querySelector('.delivery-cost');
    const cartDelivery = document.querySelector('[data-cart-delivery]');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryPrice = document.querySelector('.delivery-cost');

    // общая стоимость (Итого)
    let totalPrice = 0;


    // обходим блоки с ценами в корзине
    priceElements.forEach (function (item) {

        // находим количество товара
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]');
        // добавляем стоимость товара в общую стомость
        totalPrice += parseInt(item.innerHTML) * parseInt(amountEl.innerHTML);
        
        
    });
    // отображаем цену на странице
    

    if ( totalPrice > 0) {
        cartDelivery.classList.remove('none');
    } else {
        cartDelivery.classList.add('none');
        
    }

    if ( totalPrice >= 4000 ){
        deliveryCost.classList.add('free');
        deliveryCost.innerHTML = 'Бесплатно';
        document.querySelector('.free-delivery').classList.add('none');
        totalPriceEl.innerHTML = totalPrice;
    } else if ( totalPrice == 0 ) {
        document.querySelector('.free-delivery').classList.remove('none');
        totalPriceEl.innerHTML = totalPrice
    } else {
        document.querySelector('.free-delivery').classList.remove('none');
        totalPriceEl.innerHTML = totalPrice
        deliveryCost.classList.remove('free');
        deliveryCost.innerHTML = '350 ₽';
        document.querySelector('.free-delivery').classList.remove('none');
        totalPriceEl.innerHTML = totalPrice + parseInt(deliveryCost.innerHTML);
    }
}
