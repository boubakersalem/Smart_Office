const mongoose = require('mongoose');

const LedSchema = mongoose.Schema({
    jour: String,
    val: String ,
    heur: String, 
 
},  {
    timestamps: true
});

module.exports = mongoose.model('Led', LedSchema);