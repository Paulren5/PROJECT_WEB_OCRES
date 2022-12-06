const express = require('express');
const router = express.Router();

const pisteController = require("../controllers/Piste");


//trouver toutes les pistes
router.get('/api', pisteController.findAll);

//trouver une piste precise
router.get('/:id', pisteController.findOne);

//créer nouvelle piste 
router.post('/save', pisteController.createOne);

//supprimmer une piste
router.delete('/:id', pisteController.deleteOne);

//mis a jour d'une piste
router.post('/updt/:id', pisteController.updateOne);



module.exports = router; 