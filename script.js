/* Новые элементы должны добавляться в список по нажатию на Enter */
const input = document.querySelector ('#input');
const groceries = document.querySelector ('.items');

input.addEventListener ('keydown', function(event) {
    if (event.key == 'Enter') {
        //Отправка сообщения
        const itemsText = input.value;

        const item = document.createElement ('div');
        item.textContent = itemsText;

        if (itemsText != '') {
            groceries.append(item);
        };

        input.value = '';
    
    item.addEventListener ('click', cross )

        function cross() {
            item.classList.toggle('done')
        };

    };

});






    /* Пустые элементы не должны добавляться */

    
    /* Очищать input после добавления нового элемента в список */


/* Если кликнуть на элемент списка, он зачеркивается */



/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

