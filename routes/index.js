"use strict";

var express = require("express");
var router = express.Router();
module.exports = router;

const models = require("../models/model");

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
router.get("/families", (req, res) => {
	//......tu codigo aqui
	res.status(200).send(models.listFamilies());
});
router.post("/families", (req, res) => {
	//......tu codigo aqui
	const { family } = req.body;
	res.status(200).json(models.addFamily(family));
});

router.get("/characters", (req, res) => {
	res.status(200).json(models.listCharacter());
});
router.post("/characters", (req, res) => {
	const { name, age, family } = req.body;
	let post = models.addCharacter(name, age, family);
	if (!post.msg) {
		res.status(200).json(post);
	}
	res.status(400).json(post);
});

router.get("/characters/:name", (req, res) => {
	const { name } = req.params;
	const { pluck } = req.query;
	if (pluck) {
		res.status(200).json(models.listCharacter(name, pluck));
	}
	res.status(200).json(models.listCharacter(name));
});

router.get("/quotes", (req, res) => {
	const { name } = req.body;
	res.status(200).send(models.showQuotes(name));
});
router.post("/quotes", (req, res) => {
	const { name, quote } = req.body;
	res.status(200).json(models.addQuote(name, quote));
});
