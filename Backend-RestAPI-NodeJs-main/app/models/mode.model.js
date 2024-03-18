const mongoose = require('mongoose');

const ModeSchema = mongoose.Schema({
    numBureau:  String,
    mode:  String,
            
},{
    timestamps: true


});

module.exports = mongoose.model('Mode', ModeSchema);