const  Clc = require('../models/clc.model.js');

// Create and Save a new clc
exports.create = (req, res) => {
    // Validate request
    if(!req.body.jour) {
        return res.status(400).send({
            message: " clc content can not be empty"
        });
    }

    // Create a clc
    const clc = new Clc({
        jour: req.body.jour|| "Untitled jour"   , 
        val: req.body.val , 
        heur: req.body.heur , 
        clima: req.body.clima
    });

    // Save clc in the database
    clc.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the clc."
        });
    });
};

// Retrieve and return all clc from the database.
exports.findAll = (req, res) => {
    Clc.find()
    .then(clcs => {
        res.send(clcs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving clcs."
        });
    });
};

// Find a single  clc with a Id
exports.findOne = (req, res) => {
    Clc.findById(req.params.clcId)
    .then(clc => {
        if(!clc) {
            return res.status(404).send({
                message: "clc not found with id " + req.params.clcId
            });            
        }
        res.send(clc);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "clc not found with id " + req.params.clcId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving clc with id " + req.params.clcId
        });
    });
};

// Update a clc identified by the clcId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "clc content can not be empty"
        });
    }

    // Find clc and update it with the request body
    Clc.findByIdAndUpdate(req.params.clcId, {
        jour: req.body.jour  || "Untitled  jour"   , 
        val: req.body.val  , 
        heur: req.body.heur ,
        clima: req.body.clima
    
    }, {new: true})
    .then(clc => {
        if(!clc) {
            return res.status(404).send({
                message: " clc not found with id " + req.params.clcId
            });
        }
        res.send(clc);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: " clc not found with id " + req.params.clcId
            });                
        }
        return res.status(500).send({
            message: "Error updating clc with id " + req.params.clcId
        });
    });
};

// Delete a clc with the specified clcId in the request
exports.delete = (req, res) => {
    Clc.findByIdAndRemove(req.params.clcId)
    .then(clc => {
        if(!clc) {
            return res.status(404).send({
                message: "clc not found with id " + req.params.clcId
            });
        }
        res.send({message: "clc deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "clc not found with id " + req.params.clcId
            });                
        }
        return res.status(500).send({
            message: "Could not delete clc with id " + req.params.clcId
        });
    });
};
