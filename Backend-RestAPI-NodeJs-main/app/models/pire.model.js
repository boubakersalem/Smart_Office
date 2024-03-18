const mongoose = require('mongoose');

const PireSchema = mongoose.Schema({
      jour: String,
    val: String,
    nombre: String 
 
},  {
    timestamps: true
});

module.exports = mongoose.model('Pire', PireSchema);