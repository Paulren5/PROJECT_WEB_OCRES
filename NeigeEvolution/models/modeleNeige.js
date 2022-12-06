const mongoose = require('mongoose');


//Schema pour interagir avec notre BDD
const Schema = mongoose.Schema;
const NeigeSchema = new Schema({
    jour: String,
    cm: Number
});


const Neige = mongoose.model('neige', NeigeSchema);


module.exports = Neige;