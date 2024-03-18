const Clima = require('../models/clima.model.js');

// Create and Save a new clima
exports.create = (req, res) => {
    // Validate request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "clima content can not be empty"
        });
    }

    // Create a clima
    const clima = new Clima({
        jour: req.body.jour || "Untitled jour", 
       nbr : req.body.nbr,
        heur: req.body.heur
    
       
    });

    // Save clima in the database
    clima.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the clima."
        });
    });
};

// Retrieve and return all clima from the database.
exports.findAll = (req, res) => {
    Clima.find()
    .then(climas => {
        res.send(climas);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving climas."
        });
    });
};

// Find a single clima with a climaId
exports.findOne = (req, res) => {
    Clima.findById(req.params.climaId)
    .then(clima => {
        if(!clima) {
            return res.status(404).send({
                message: "clima not found with id " + req.params.climaId
            });            
        }
        res.send(clima);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "clima not found with id " + req.params.climaId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving clima with id " + req.params.climaId
        });
    });
};

// Update a clima identified by the climaId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "clima content can not be empty"
        });
    }

    // Find clima and update it with the request body
    Clima.findByIdAndUpdate(req.params.climaId, {
        jour: req.body.jour || "Untitled jour", 
       nbr : req.body.nbr,
        heur: req.body.heur
    
    
    }, {new: true})
    .then(clima => {
        if(!clima) {
            return res.status(404).send({
                message: "clima not found with id " + req.params.climaId
            });
        }
        res.send(clima);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "clima not found with id " + req.params.climaId
            });                
        }
        return res.status(500).send({
            message: "Error updating clima with id " + req.params.climaId
        });
    });
};

// Delete a admin with the specified adminId in the request
exports.delete = (req, res) => {
    Clima.findByIdAndRemove(req.params.climaId)
    .then(clima => {
        if(!clima) {
            return res.status(404).send({
                message: "admin not found with id " + req.params.climaId
            });
        }
        res.send({message: "admin deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "admin not found with id " + req.params.climaId
            });                
        }
        return res.status(500).send({
            message: "Could not delete admin with id " + req.params.climaId
        });
    });
};
