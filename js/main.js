var elChiqar =$_(".chiqar-js");


for (var i = 0; i < pokemons.length; i++) {
	var list = document.createElement("li");
list.setAttribute("class", "col-sm-4 col-md-3 col-lg-2 text-center p-3 mx-2 mb-2 border border-2 border-success rounded bg-light");

var image = document.createElement("img");
image.src = pokemons[i].img;
list.append(image);

var ism = document.createElement("h4");
ism.textContent = pokemons[i].name;
list.append(ism);


var turi = document.createElement("p");
turi = pokemons[i].type;

list.append(turi);
elChiqar.append(list);

console.log(pokemons);
}
	