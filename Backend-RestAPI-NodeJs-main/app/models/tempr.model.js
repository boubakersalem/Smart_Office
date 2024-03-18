const mongoose = require('mongoose');

const TemprSchema = mongoose.Schema({
     nametmp: String,
     val1: String,
     namehum: String,
     val2: String,
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Tempr', TemprSchema);