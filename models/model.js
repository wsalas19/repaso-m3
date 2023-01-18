"use strict";

var characters = [];

var families = [];

var id = 1;

module.exports = {
	reset: function () {
		// No es necesario modificar esta función (Ya está completa)
		characters = [];
		families = [];
	},
	// ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====

	addFamily: function (name) {
		// Agrega el apellido de una nueva familia verificando que no exista
		// Debe retornar el nombre de la familia agregado o existente
	},
	listFamilies: function () {
		// Devuelve un arreglo con todas las familias
	},
	listCharacter: function (family, pluckName) {
		// Devuelve un arreglo con todos los personajes
		// Si recibe un nombre de familia como parámetro debería filtrar solo los personajes de ella
		// Si recibe un segundo parámetro en true debe devolver únicamente los nombres de los personajes
	},
	addCharacter: function (name, age, family) {
		// Agrega un nuevo personaje, inicialmente sus frases (quotes) deben estar "vacias"
		// Adicionalmente va a ser necesario guardar el número de familia y no su nombre
		// El número de familia debe empezar desde 1 y no desde 0.
		// Debe retornar el personaje creado
	},
	addQuote: function (name, quote) {
		// Agrega una nueva frase a un personaje en particular con el formato:
		// {text: "Este es el texto de la frase", season: 3}
	},
	showQuotes: function (name) {
		// Devuelve todas las frases de un personaje en particular
	},
};
