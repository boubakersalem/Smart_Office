const mongoose = require('mongoose');

const ChoufSchema = mongoose.Schema({
    jour: String,
    val: String ,
    heur: String, 
 
},  {
    timestamps: true
});

module.exports = mongoose.model('Chouf', ChoufSchema);