const mongoose = require('mongoose');

const ConsSchema = mongoose.Schema({
    numBureau: {
            type: String,
            unique: [true, 'The Num Bureau is unique']
           
    },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Cons', ConsSchema);