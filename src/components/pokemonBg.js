function colorCard(id,bg,type){
switch (bg) {
case "normal":
id.className="card-img-top  normal"
type.src="img/normal.png" //en base al tipo se le da un fondo y un sello en type del template
break;
case "water":
id.className=" card-img-top  water"
type.src="img/water.png"
break;  
case "electric":
id.className="card-img-top electric"
type.src="img/electric.png"
break;
case "fighting":
id.className="card-img-top  fighting"
type.src="img/fighting.png"
break;
case "ground":
id.className=" card-img-top  ground"
type.src="img/ground.png"
break;
case "psychic":
id.className=" card-img-top psychic"
type.src="img/psychic.png"
break;
case "rock":
id.className=" card-img-top rock"
type.src="img/rock.png"
break;
case "dark":
id.className=" card-img-top dark"
type.src="img/dark.png"
break;
case "steel":
id.className=" card-img-top steel"
type.src="img/steel.png"
break;
case "grass":
id.className=" card-img-top grass"
type.src="img/grass.png"
break;
case "ice":
id.className=" card-img-top ice"
type.src="img/ice.png"
break;
case "poison":
id.className=" card-img-top poison"
type.src="img/poison.png"
break;
case "bug":
id.className=" card-img-top bug"
type.src="img/bug.png"
break;
case "ghost":
id.className=" card-img-top ghost"
type.src="img/ghost.png"
break;
case "dragon":
id.className=" card-img-top dragon"
type.src="img/dragon.png"
break;
case "fairy":
id.className=" card-img-top fairy"
type.src="img/fairy.png"
break;
case "fire":
id.className=" card-img-top  fire"
type.src="img/fire.png"
break;
case "flying":
id.className=" card-img-top flying"
type.src="img/flying.png"
break;
}
}
