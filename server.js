
var express = require('express');
var app = express();


//Diseño de las pieza Z, RestFull Servvice Express

app.get('/cargarPieza/', function(req, res) {
	console.log("cargarPieza");
	respuesta = cargarPieza();	   
	res.json(respuesta);
});

app.get('/ficha/:movimiento?', function(req, res) {
	console.log("cargarPieza");

	var movimiento = req.query.movimiento;

	switch(movimiento) {
	    case "traer":
	        respuesta = cargarPieza();	   
	        break;
	    case "girar":
	        respuesta = rotarPieza(1);
	        break;
	    case "izquierda":
	        respuesta = moverPieza("izquierda")
	        break;
	    case "derecha":
	        respuesta = moverPieza("derecha")
	        break;
	    default:
	        break;
		}

	res.json(respuesta);
});


app.get("/moverPieza/:dir?",function(req,res){
	var dir = req.query.dir;
	respuesta = moverPieza(dir);
	res.json(respuesta);
});

app.get("/rotarPieza/:status?",function(req,res){
	var status = req.query.status;
	respuesta = rotarPieza(status);
	res.json(respuesta);
});

app.get("/bajarPieza/:posX?",function(req,res){
	var posX = req.query.posX;
	respuesta = bajarPieza(posX);
	res.json(respuesta);
});


/** 
 *  @Returns the cargarPieza json object 
 *  @type {Object}
 *  @property {string} name	nombre de la figura.
 *  @property {Number|Array} pieza array de la figura.
 *  @property {Number} status  estado de la figura.
 */
function cargarPieza(){
	var figura = {};
	var pieza = [[], [], []];
	// first array
	pieza[0][0] = 1;
	pieza[0][1] = 1;
	pieza[0][2] = 0;
	// second array
	pieza[1][0] = 0;
	pieza[1][1] = 1;
	pieza[1][2] = 1;
	// third array
	pieza[2][0] = 0;
	pieza[2][1] = 0;
	pieza[2][2] = 0;

	figura = {pieza : pieza, status : 0 };
	figura.name= 'z';

	return figura;
}

/**
 * Returns the bajarPieza  posX en  Pocision en x
 * @param {Number} pocisión x
 * @returns {Object}
 */

function bajarPieza(posX){
	posX = posX+1;
	return   posX
}

/** 
 *  @Returns the rotarPieza  json object.
 * 	@param {Number} status
 *  @type {Object}
 *  @property {string} name	Nombre de la figura.
 *  @property {Number|Array} pieza Array de la figura.
 *  @property {Number} status  Estado de la figura previa.
 */

function rotarPieza(status){

	 console.log("status al rotar", status);
	var figura = {};
	var pieza = [[], [], []];
	

	if(status == 0){
		// first array
		pieza[0][0] = 0;
		pieza[0][1] = 1;
		pieza[0][2] = 0;
		// second array
		pieza[1][0] = 1;
		pieza[1][1] = 1;
		pieza[1][2] = 0;
		// third array
		pieza[2][0] = 1;
		pieza[2][1] = 0;
		pieza[2][2] = 0;

		figura = {pieza : pieza, status : 1 };
	}
	else if (status == 1){
		// first array	
		pieza[0][0] = 1;
		pieza[0][1] = 1;
		pieza[0][2] = 0;
		// second array
		pieza[1][0] = 0;
		pieza[1][1] = 1;
		pieza[1][2] = 1;
		// third array
		pieza[2][0] = 0;
		pieza[2][1] = 0;
		pieza[2][2] = 0;

	   	figura = { pieza : pieza, status : 0 };
	}

	figura.name= 'z';

	return figura;
}


/** 
 *  @Returns the moverPieza  json object.
 * 	@param {Number} dir Direccion a la que desea rotar  0 derecha 1 izquierda
 *  @type {Object}
 *  @property {string} name	Nombre de la figura.
 *  @property {Number|Array} pieza Array de la figura.
 *  @property {Number} status  Estado de la figura previa.
 */

function moverPieza(dir)
{
	if(dir==1){
		console.log("derecha");
	}else{
		console.log("izquierda");
	}

    return true;
}


app.use(express.static(__dirname + '/public')); 

app.listen(8081);