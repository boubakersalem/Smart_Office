const mongoose = require('mongoose');
const ActionSchema = mongoose.Schema({
    jour: String,
    nbr: String,
    heur: String,
            
    
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Action', ActionSchema);