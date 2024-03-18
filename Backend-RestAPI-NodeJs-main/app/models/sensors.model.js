const mongoose = require('mongoose');

const SensorsSchema = mongoose.Schema({
     type: String ,
    temperature: String,
    humidite: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Sensors', SensorsSchema);