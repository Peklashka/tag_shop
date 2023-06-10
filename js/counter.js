
window.addEventListener('click', function (event) {
    let counter;

    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter-wrapper'); //находим обёртку счётчика
        counter = counterWrapper.querySelector ('[data-counter]'); // находим див с числом счётчика
    }

    if (event.target.dataset.action === 'plus') {
        counter.innerHTML = ++counter.innerHTML; //работаем с счетчиком
    }

    if (event.target.dataset.action === 'minus') {
    
        //проверяем счётчик, чтобы не уйти в минус 
        if (parseInt(counter.innerHTML) > 1) { 
           
            // изменяем текст в счётчике в корзине
            counter.innerHTML = --counter.innerHTML;

        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerHTML) === 1) {
            
            // удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            // отображение статуса корзины пустая / полная
            toggleCartStatus();

            // проверяем клик на + или - внутри корзины
            calcCartPriceAndDelivery();
        }
        
    }

    // проверяем клик на + или - внутри корзины
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelivery();
    }

})