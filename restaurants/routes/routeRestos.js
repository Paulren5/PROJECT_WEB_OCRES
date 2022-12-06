const express = require('express');
const router = express.Router();

const restoController = require("../controllers/controllerResto");

//trouver toutes les pistes
router.get('/tousRestos', restoController.findAll);


module.exports = router; 