pizzaJson.map(function(item, index) {
    let itemPizza = document.querySelector('.models .pizza-item').cloneNode(true);

    itemPizza.querySelector('.pizza-item--img img').src = item.img;
    itemPizza.querySelector('.pizza-item--name').innerHTML = item.name;
    itemPizza.querySelector('.pizza-item--price').innerHTML = item.price;
    itemPizza.querySelector('.pizza-item--desc').innerHTML = item.description;

    document.querySelector('.pizza-area').append(itemPizza)
})