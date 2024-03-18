const  Pire = require('../models/pire.model.js');

// Create and Save a new pire
exports.create = (req, res) => {
    // Validate request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "pire content can not be empty"
        });
    }

    // Create a pire
    const pire = new  Pire({
        jour: req.body.jour|| "Untitled  Pire", 
        val: req.body.val,
        nombre: req.body.nombre
      
       
    });

    // Save pire in the database
    pire.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the pire."
        });
    });
};

// Retrieve and return all pire from the database.
exports.findAll = (req, res) => {
    Pire.find()
    .then(pires => {
        res.send(pires);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving pires."
        });
    });
};

// Find a single pire with a pireId
exports.findOne = (req, res) => {
    Pire.findById(req.params.pireId)
    .then(pire=> {
        if(!pire) {
            return res.status(404).send({
                message: "pire not found with id " + req.params.pireId
            });            
        }
        res.send(pire);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "pire not found with id " + req.params.pireId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving pire with id " + req.params.pireId
        });
    });
};

// Update a pire identified by the pireId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "pire content can not be empty"
        });
    }

    // Find pire and update it with the request body
    Pire.findByIdAndUpdate(req.params.pireId, {
        jour: req.body.jour|| "Untitled  Pire", 
        val: req.body.val,
        nombre: req.body.nombre
    }, {new: true})
    .then(pire => {
        if(!pire) {
            return res.status(404).send({
                message: "pire not found with id " + req.params.pireId
            });
        }
        res.send(pire);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "pire not found with id " + req.params.pireId
            });                
        }
        return res.status(500).send({
            message: "Error updating pire with id " + req.params.pireId
        });
    });
};

// Delete a pire with the specified pireId in the request
exports.delete = (req, res) => {
    Pire.findByIdAndRemove(req.params.pireId)
    .then(pire => {
        if(!pire) {
            return res.status(404).send({
                message: "pire not found with id " + req.params.pireId
            });
        }
        res.send({message: "pire deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "pire not found with id " + req.params.pireId
            });                
        }
        return res.status(500).send({
            message: "Could not delete pire with id " + req.params.pireId
        });
    });
};
