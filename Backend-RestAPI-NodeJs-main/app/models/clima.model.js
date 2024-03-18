const mongoose = require('mongoose');

const ClimaSchema = mongoose.Schema({
    jour: String,
    nbr: String ,
    heur: String,    
},  {
    timestamps: true
});

module.exports = mongoose.model('Clima', ClimaSchema);