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
router.post("/characters", (req, res) => {
	try {
		const { name, age, family } = req.body;
		res.status(200).json(models.addCharacter(name, age, family));
	} catch (error) {
		res.status(400).send({ msg: error.message });
	}
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
