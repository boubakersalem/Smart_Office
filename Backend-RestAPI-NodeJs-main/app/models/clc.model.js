const mongoose = require('mongoose');
const ClcSchema = mongoose.Schema({
    jour:  String,
     val: String,
     heur:  String,
     clima :  String,
    }, 
{
    timestamps: true
});

module.exports = mongoose.model('Clc', ClcSchema);