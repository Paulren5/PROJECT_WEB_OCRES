//on recupere le schema
const Restos = require('../models/modeleResto');


////////////////////////////////////////////////////////////////////Requete pour trouver toutes les pistes//////////////////////////////////////////////////////////////////
exports.findAll = (req, res) => {
    Restos.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('erreurr: ', error);
        });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




