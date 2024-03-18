const Etat = require('../models/etat.model.js');

// Create and Save a new etat
exports.create = (req, res) => {
    // Validate request
    if(!req.body.equipname) {
        return res.status(400).send({
            message: " etat content can not be empty"
        });
    }

    // Create a etat
    const etat = new Etat({
        equipname: req.body.equipname || "Untitled Etat", 
        etat : req.body.etat
    });

    // Save etat in the database
    etat.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the etat."
        });
    });
};

// Retrieve and return all etat from the database.
exports.findAll = (req, res) => {
    Etat.find()
    .then(etats => {
        res.send(etats);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving etats."
        });
    });
};

// Find a single etat with a etatId
exports.findOne = (req, res) => {
    Etat.findById(req.params.etatId)
    .then(etat => {
        if(!etat) {
            return res.status(404).send({
                message: " etat not found with id " + req.params.etatId
            });            
        }
        res.send(etat);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "etat not found with id " + req.params.etatId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving etat with id " + req.params.etatId
        });
    });
};

// Update a etatidentified by the etatId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.equipname) {
        return res.status(400).send({
            message: "etat content can not be empty"
        });
    }

    // Find etat and update it with the request body
    Etat.findByIdAndUpdate(req.params.etatId, {
        equipname: req.body.equipname || "Untitled Etat", 
        etat : req.body.etat
    }, {new: true})
    .then(etat => {
        if(!etat) {
            return res.status(404).send({
                message: "etat not found with id " + req.params.etatId
            });
        }
        res.send(etat);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "etat not found with id " + req.params.etatId
            });                
        }
        return res.status(500).send({
            message: "Error updating etat with id " + req.params.etatId
        });
    });
};

// Delete a etat with the specified etatId in the request
exports.delete = (req, res) => {
    Etat.findByIdAndRemove(req.params.etatId)
    .then(etat => {
        if(!etat) {
            return res.status(404).send({
                message: "etat not found with id " + req.params.etatId
            });
        }
        res.send({message: " deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "etat not found with id " + req.params.etatId
            });                
        }
        return res.status(500).send({
            message: "Could not delete etat with id " + req.params.etatId
        });
    });
};
