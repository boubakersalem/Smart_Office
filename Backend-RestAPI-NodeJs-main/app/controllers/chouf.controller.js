const Chouf = require('../models/chouf.model.js');

// Create and Save a new chouf
exports.create = (req, res) => {
    // Validate request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "chouf content can not be empty"
        });
    }

    // Create a chouf
    const chouf = new Chouf({
        jour: req.body.jour|| "Untitled Chouf" , 
        val : req.body.val,
        heur: req.body.heur
    
       
    });

    // Save chouf in the database
    chouf.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the chouf."
        });
    });
};

// Retrieve and return all chouf from the database.
exports.findAll = (req, res) => {
    Chouf.find()
    .then(choufs => {
        res.send(choufs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving choufs."
        });
    });
};

// Find a single  chouf with a choufId
exports.findOne = (req, res) => {
    Chouf.findById(req.params.choufId)
    .then(chouf => {
        if(!chouf) {
            return res.status(404).send({
                message: "chouf not found with id " + req.params.choufId
            });            
        }
        res.send(chouf);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "chouf not found with id " + req.params.choufId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving chouf with id " + req.params.choufId
        });
    });
};

// Update a chouf identified by the choufId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.val) {
        return res.status(400).send({
            message: "chouf content can not be empty"
        });
    }

    // Find chouf and update it with the request body
    Chouf.findByIdAndUpdate(req.params.choufId, {
        jour: req.body.jour || "Untitled Chouf" , 
        val : req.body.val,
        heur: req.body.heur
    
    }, {new: true})
    .then(chouf => {
        if(!chouf) {
            return res.status(404).send({
                message: "chouf not found with id " + req.params.choufId
            });
        }
        res.send(chouf);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "chouf not found with id " + req.params.choufId
            });                
        }
        return res.status(500).send({
            message: "Error updating chouf with id " + req.params.choufId
        });
    });
};

// Delete a chouf with the specified choufId in the request
exports.delete = (req, res) => {
    Chouf.findByIdAndRemove(req.params.choufId)
    .then(chouf => {
        if(!chouf) {
            return res.status(404).send({
                message: "chouf not found with id " + req.params.choufId
            });
        }
        res.send({message: "chouf deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "chouf not found with id " + req.params.choufId
            });                
        }
        return res.status(500).send({
            message: "Could not delete chouf with id " + req.params.choufId
        });
    });
};
