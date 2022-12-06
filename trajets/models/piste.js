const mongoose = require('mongoose');




//Schema pour interagir avec notre BDD
const Schema = mongoose.Schema;
const PisteSchema = new Schema({
    title: String,
    couleur: String,
    ouverture: String,
    fermeture: String,
    value: Number,
    color: String
});


const Piste = mongoose.model('Piste', PisteSchema);


module.exports = Piste;