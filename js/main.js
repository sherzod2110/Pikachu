let elList = $_(".js-list");


pokemons.forEach(function (pokemon) {
	let newLiItem = createElement('li', 'list-item',);
	let newImg = createElement('img', 'img img-fluid');
	newImg.src = pokemon.img;

	let newLiName = createElement('p', 'item-name', pokemon.name.toUpperCase());
	let newLiType = createElement('p', 'item-span', pokemon.type);

	
	newLiItem.appendChild(newImg);
	newLiItem.appendChild(newLiName);
	newLiItem.appendChild(newLiType);
	
	elList.appendChild(newLiItem);
});

