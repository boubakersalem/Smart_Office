const mongoose = require('mongoose');
const AdminSchema = mongoose.Schema({
    name:  String,
            
    cin: {
        type: String,
        
       
    },
    tel: {
        type: String,
       
       
    },
    addr:  String,
    email: {
            type: String,
            
           
    },
    password: String,
  
  
    picture:  String,
}, 
{
    timestamps: true
});

module.exports = mongoose.model('Admin', AdminSchema);