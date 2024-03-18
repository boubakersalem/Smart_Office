const mongoose = require('mongoose');

const EquipSchema = mongoose.Schema({

    numBureau: {
            type: String,
           
        
    },
    equipname:String,
    nbr:String,
    etat:String,
    mode:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Equip', EquipSchema);