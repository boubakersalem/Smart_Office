const mongoose = require('mongoose');

const EtatSchema = mongoose.Schema({
    equipname: String,

    etat: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Etat', EtatSchema);