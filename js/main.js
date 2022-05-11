let elList = $_(".js-list");


pokemons.forEach(function (pokemon) {
	var newLiItem = createElement('li', 'list-item',);
	var newImg = createElement('img', 'img img-fluid');
	newImg.src = pokemon.img;

	var newLiName = createElement('p', 'item-name', pokemon.name);
	var newLiType = createElement('p', 'item-span', pokemon.type);

	
	newLiItem.appendChild(newImg);
	newLiItem.appendChild(newLiName);
	newLiItem.appendChild(newLiType);
	
	elList.appendChild(newLiItem);
});