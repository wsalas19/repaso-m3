"use strict";

var express = require("express");
var router = express.Router();
module.exports = router;

const models = require("../models/model");

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
router.get("/families", (req, res) => {
	res.status(200).send(models.listFamilies());
});
router.post("/families", (req, res) => {
	res.status(200).json(models.addFamily(req.body.family));
});

router.get("/characters", (req, res) => {
	res.status(200).json(models.listCharacter());
});
router.delete("/characters", (req, res) => {
	const { name } = req.body;
	let deletion = models.deleteCharacter(name);
	if (deletion.msg) {
		return deletion;
	}
	res.status(200).json(deletion);
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
	} else {
		res.status(200).json(models.listCharacter(name));
	}
});

router.get("/quotes", (req, res) => {
	res.status(200).send(models.showQuotes(req.body.name));
});
router.post("/quotes", (req, res) => {
	const { name, quote } = req.body;
	res.status(200).json(models.addQuote(name, quote));
});
