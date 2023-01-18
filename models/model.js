"use strict";

let characters = [];

var families = [];

/* var id = 1; */

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
		if (families.some((s) => s === name)) return name;
		else {
			families.push(name);
			return name;
		}
	},
	listFamilies: function () {
		// Devuelve un arreglo con todas las familias
		return families;
	},
	listCharacter: function (family, pluckName) {
		// Devuelve un arreglo con todos los personajes
		// Si recibe un nombre de familia como parámetro debería filtrar solo los personajes de ella
		// Si recibe un segundo parámetro en true debe devolver únicamente los nombres de los personajes

		if (pluckName && family) {
			return characters
				.filter((c) => families[c.familyId - 1] === family)
				.map((c) => c.name);
		}

		if (family) {
			return characters.filter((c) => {
				return families[c.familyId - 1] === family;
			});
		}
		return characters;
	},
	addCharacter: function (name, age, family) {
		// Agrega un nuevo personaje, inicialmente sus frases (quotes) deben estar "vacias"
		// Adicionalmente va a ser necesario guardar el número de familia y no su nombre
		// El número de familia debe empezar desde 1 y no desde 0.
		// Debe retornar el personaje creado
		let check = families.some((f) => f === family);
		if (check) {
			let familyIndex = families.findIndex((f) => f === family) + 1;
			let char = { name, age, familyId: familyIndex, quotes: [] };
			characters.push(char);
			return char;
		}
		return { msg: "La familia ingresada no existe" };
	},
	addQuote: function (name, quote) {
		// Agrega una nueva frase a un personaje en particular con el formato:
		// {text: "Este es el texto de la frase", season: 3}
		let char = characters.find((c) => c.name === name);
		if (char) {
			if (quote.text) {
				let newQuote = { text: quote.text, season: quote.season || false };
				char.quotes.push(newQuote);
				return { msg: "Frase agregada correctamente" };
			}
			return "no se ha encotrado texto que agregar";
		}
	},
	showQuotes: function (name) {
		// Devuelve todas las frases de un personaje en particular
		let char = characters.find((c) => c.name === name);
		if (!char) return [];
		return char.quotes;
	},
	deleteCharacter: function (name) {
		//elimina al personaje pasado por parametro con nombre y devuelve error si se pasa un string vacio
		let char = characters.find((c) => c.name === name);

		if (name === "") return { msg: "el nombre no puede estar vacio" };
		if (char) {
			let filter = characters.filter((c) => c.name !== char.name);
			characters = filter;

			return char;
		}
		return { msg: "personaje no encontrado" };
	},
};
