const mongoose = require('mongoose');
const axios = require('axios');

//on recupere le schema
const Piste = require('../models/piste');

////////////////////////////////////////////////////////////////////Requete pour trouver une pistes//////////////////////////////////////////////////////////////////
exports.findOne = (req, res) => {
    const { id } = req.params;

    Piste.findOne({ title: id })
        .then(data => {
            console.log('Data: ', data);
            if (data) {
                // Return movie
                res.status(200).json(data);
            } else {
                res.status(404).json({
                    message: `la piste ${id} n'est pas la`
                });
            }
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'la piste n\'est pas trouvée avec le nom' + req.paramas.nomId
                });
            }

            return res.status(500).send({
                message: 'erreur pour retrouver avec ' + req.paramas.nomId
            });
        })
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////Requete pour trouver toutes les pistes//////////////////////////////////////////////////////////////////
exports.findAll = (req, res) => {
    Piste.find({})
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('erreur: ', error);
        });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////Requete de creation d'une piste////////////////////////////////////////////////////////////////////////
exports.createOne = (req, res) => {
    // console.log('body: ', req.body)

    const data = req.body;
    const newPiste = new Piste(data);

    newPiste.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Erreur de sauvegarde' });
            return;
        }
        return res.json({
            msg: "element sauvegardé"
        });

    });

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////Requete de suppression de piste///////////////////////////////////////////////////////////////////
exports.deleteOne = (req, res) => {
    // Get the :id of the movie we want to delete from the params of the request
    const { id } = req.params;

    Piste.deleteOne({ title: id })
        .then((data) => {
            res.status(200).json({ data });
        })
        .catch(() => {
            res.status(404).json({
                message: `Piste pas trouvée`
            });
        })
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////Requete de suppression de piste///////////////////////////////////////////////////////////////////
exports.updateOne = (req, res, next) => {
    console.log(req.params.id)
    Piste.updateOne({ title: req.params.id }, { ...req.body })
        .then(() => res.status(200).json({ data }))
        .catch(error => res.status(400).json({ error }));
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////