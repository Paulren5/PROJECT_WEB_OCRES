const express = require('express');
const router = express.Router();

const neigeController = require("../controller/controllerNeige");

//trouver toutes les pistes
router.get('/neige', neigeController.findAll);


module.exports = router; 