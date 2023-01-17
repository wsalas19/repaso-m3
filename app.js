"use strict";

const express = require("express");
const app = express();
const router = require("./routes");
const PORT = 3000;

// Acuerdense de agregar su router o cualquier middleware que necesiten aca

app.use(express.json());
app.use(router);

// El condicional es solo para evitar algun problema de tipo EADDRINUSE con mocha watch + supertest + npm test.
if (!module.parent)
	app.listen(PORT, () => {
		console.log(`%s listening at ${PORT}`);
	});

module.exports = app; // Esto es solo para testear mas facil
