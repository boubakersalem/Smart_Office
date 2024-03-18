const  Mode = require('../models/mode.model.js');

// Create and Save a new mode
exports.create = (req, res) => {
    // Validate request
    if(!req.body.mode) {
        return res.status(400).send({
            message: "mode content can not be empty"
        });
    }

    // Create a mode
    const mode = new  Mode({
        numBureau: req.body.numBureau,
        mode: req.body.mode || "Untitled  Mode", 
        
    });

    // Save mode in the database
    mode.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the mode."
        });
    });
};

// Retrieve and return all mode from the database.
exports.findAll = (req, res) => {
    Mode.find()
    .then(modes => {
        res.send(modes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving modes."
        });
    });
};

// Find a single mode with a modeId
exports.findOne = (req, res) => {
    Mode.findById(req.params.modeId)
    .then(mode => {
        if(!mode) {
            return res.status(404).send({
                message: "mode not found with id " + req.params.modeId
            });            
        }
        res.send(mode);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "mode not found with id " + req.params.modeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving mode with id " + req.params.modeId
        });
    });
};

// Update a mode identified by the modeId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.mode) {
        return res.status(400).send({
            message: "mode content can not be empty"
        });
    }

    // Find mode and update it with the request body
    Mode.findByIdAndUpdate(req.params.modeId, {
        numBureau: req.body.numBureau,
        mode: req.body.mode || "Untitled mode", 
    
    }, {new: true})
    .then(mode => {
        if(!mode) {
            return res.status(404).send({
                message: "mode not found with id " + req.params.modeId
            });
        }
        res.send(mode);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "mode not found with id " + req.params.modeId
            });                
        }
        return res.status(500).send({
            message: "Error updating mode with id " + req.params.modeId
        });
    });
};

// Delete a mode with the specified modeId in the request
exports.delete = (req, res) => {
    Mode.findByIdAndRemove(req.params.modeId)
    .then(mode => {
        if(!mode) {
            return res.status(404).send({
                message: "mode not found with id " + req.params.modeId
            });
        }
        res.send({message: "mode deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "mode not found with id " + req.params.modeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete mode with id " + req.params.modeId
        });
    });
};
