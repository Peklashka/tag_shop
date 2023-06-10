const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        //находим карточку с товаром, внутри которой был клик
        const card = event.target.closest('.card');
        
        //собираем данные с карточки товара, записываем в объект
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerHTML,
            itemSize: card.querySelector('[data-size]').innerHTML,
            price: card.querySelector('.price__currency').innerHTML,
            counter: card.querySelector('[data-counter]').innerHTML,
        };

        // проверка на наличие такой же позиции в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
    
        // если товар есть в корзине
        if (itemInCart) { 
            const counterElement = itemInCart.querySelector('[data-counter]');
            counterElement.innerHTML = parseInt(counterElement.innerHTML) + parseInt(productInfo.counter);
        } else {
            // если товара нет в корзине
            // подставляем собранные данные о товаре в корзину
            const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
                                        <div class="cart-item__top">
                                            <div class="cart-item__img">
                                                <img src="${productInfo.imgSrc}" alt="${productInfo.imgSrc}">
                                            </div>
                                            <div class="cart-item__desc">
                                                <div class="cart-item__title">${productInfo.title}</div>
                                                

                                                <!-- cart-item__details -->
                                                <div class="cart-item__details">

                                                    <div class="items items--small counter-wrapper">
                                                        <div class="items__control" data-action="minus">-</div>
                                                        <div class="items__current" data-counter="">${productInfo.counter}                                                        </div>
                                                        <div class="items__control" data-action="plus">+</div>
                                                    </div>

                                                    <div class="price">
                                                        <div class="price__currency">${productInfo.price} </div>
                                                    </div>

                                                </div>
                                                <!-- // cart-item__details -->

                                            </div>
                                        </div>
                                    </div>`;
            
                                    
            // отобразить товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

            }
        // сбрасываем счётчик товара на единицу
        card.querySelector('[data-counter]').innerHTML = "1";

        // отображение статуса корзины пустая / полная
        toggleCartStatus();

        // расчёт стоимости нескольких позиций одного товара
        // расчёт общей стоимости в корзине
        calcCartPriceAndDelivery();
    }
})