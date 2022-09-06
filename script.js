/* Новые элементы должны добавляться в список по нажатию на Enter */
const input = document.querySelector ('#input');
const groceries = document.querySelector ('.items');

input.addEventListener ('keydown', function(event) {
    if (event.key == 'Enter') {
        //Отправка сообщения
        const itemsText = input.value;

        const items = document.createElement ('div');
        items.textContent = itemsText;
    };
    
});

    
    /* Пустые элементы не должны добавляться */
if (itemsText != '') {
    groceries.append(items);
};
    
    /* Очищать input после добавления нового элемента в список */
input.value = '';

/* Если кликнуть на элемент списка, он зачеркивается */


item.addEventListener ('click', cross) 

    function cross() {
      item.classList.toggle('done')
    };
/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

