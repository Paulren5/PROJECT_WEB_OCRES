const mongoose = require('mongoose');




//Schema pour interagir avec notre BDD
const Schema = mongoose.Schema;
const RestoSchema = new Schema({
    nom: String,
    note: String,
    ouverture: String,
    fermeture: String,
    prixMoyen: String,
    urlImahge: String
});



const Restos = mongoose.model('Restos', RestoSchema);


module.exports = Restos;