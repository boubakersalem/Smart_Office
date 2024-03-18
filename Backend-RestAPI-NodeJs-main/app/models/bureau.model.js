const mongoose = require('mongoose');

const BureauSchema = mongoose.Schema({
    numBureau: {
            type: String,
           
           
    },
    name: String,
    cin: {
            type: String,
            unique: [true, 'The cin is unique']
           
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Bureau', BureauSchema);