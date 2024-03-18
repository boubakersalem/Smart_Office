const { INIT } = require('mongodb/lib/command_cursor');
const mongoose = require('mongoose');

const ValeSchema = mongoose.Schema({
    jour: String ,
    temp :String  ,
    hum : String ,

 
},  {
    timestamps: true
});

module.exports = mongoose.model('Vale', ValeSchema);