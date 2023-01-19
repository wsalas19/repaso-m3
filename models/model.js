"use strict";

var characters = [];

var families = [];

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
		if (families.includes(name)) {
			return name;
		} else {
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
			//[{1,2},{1,2}] >> [str,str]
			return characters
				.filter((c) => families[c.familyId - 1] === family)
				.map((c) => c.name);
		}

		if (family) {
			return characters.filter((c) => families[c.familyId - 1] === family);
		}

		return characters;
	},
	addCharacter: function (name, age, family) {
		// Agrega un nuevo personaje, inicialmente sus frases (quotes) deben estar "vacias"
		// Adicionalmente va a ser necesario guardar el número de familia y no su nombre
		// El número de familia debe empezar desde 1 y no desde 0.
		// Debe retornar el personaje creado
		let findFamily = families.find((f) => f === family);
		if (findFamily) {
			let familyIndex = families.indexOf(family) + 1;
			let newChar = { name, age, familyId: familyIndex, quotes: [] };
			characters.push(newChar);
			return newChar;
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
			return "no hay texto";
		}
	},
	showQuotes: function (name) {
		// Devuelve todas las frases de un personaje en particular
		let char = characters.find((c) => c.name === name);
		if (!char) return [];
		return char.quotes;
	},
};
