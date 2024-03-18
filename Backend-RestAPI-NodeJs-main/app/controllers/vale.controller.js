const Vale = require('../models/vale.model.js');

// Create and Save a new  vale
exports.create = (req, res) => {
    // Validate request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "vale content can not be empty"
        });
    }

    // Create a vale
    const vale = new  Vale({
         jour: req.body.jour , 
       temp : req.body.temp|| "Untitled vale", 
        hum: req.body.hum,
        
       
    });

    // Save vale in the database
    vale.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the vale."
        });
    });
};

// Retrieve and return all vale from the database.
exports.findAll = (req, res) => {
    Vale.find()
    .then(vales => {
        res.send(vales);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving vales."
        });
    });
};

// Find a single vale with a valeId
exports.findOne = (req, res) => {
    Vale.findById(req.params.valeId)
    .then(vale => {
        if(!vale) {
            return res.status(404).send({
                message: "vale not found with id " + req.params.valeId
            });            
        }
        res.send(vale);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "vale not found with id " + req.params.valeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving vale with id " + req.params.valeId
        });
    });
};

// Update a vale identified by the valeId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "vale content can not be empty"
        });
    }

    // Find vale and update it with the request body
    Vale.findByIdAndUpdate(req.params.valeId, {
        jour : req.body.jour, 
        temp: req.body.temp|| "Untitled temp", 
        hum : req.body.hum
    }, {new: true})
    .then(vale => {
        if(!vale) {
            return res.status(404).send({
                message: "vale not found with id " + req.params.valeId
            });
        }
        res.send(vale);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "vale not found with id " + req.params.valeId
            });                
        }
        return res.status(500).send({
            message: "Error updating vale with id " + req.params.valeId
        });
    });
};

// Delete a vale with the specified valeId in the request
exports.delete = (req, res) => {
    Vale.findByIdAndRemove(req.params.valeId)
    .then(vale => {
        if(!vale) {
            return res.status(404).send({
                message: "vale not found with id " + req.params.valeId
            });
        }
        res.send({message: "vale deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "vale not found with id " + req.params.valeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete vale with id " + req.params.valeId
        });
    });
};
