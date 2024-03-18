const  Direc = require('../models/direc.model.js');

// Create and Save a new direc
exports.create = (req, res) => {
    // Validate request
    if(!req.body.cin) {
        return res.status(400).send({
            message: "direc content can not be empty"
        });
    }

    // Create a direc
    const direc = new  Direc({
        name: req.body.name, 
        cin: req.body.cin || "Untitled  Direc", 
        email : req.body.email,
        password: req.body.password,
        picture: req.body.picture
    });

    // Save direc in the database
    direc.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the direc."
        });
    });
};

// Retrieve and return all direc from the database.
exports.findAll = (req, res) => {
    Direc.find()
    .then(direcs => {
        res.send(direcs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving direcs."
        });
    });
};

// Find a single direc with a direcId
exports.findOne = (req, res) => {
    Direc.findById(req.params.direcId)
    .then(direc => {
        if(!direc) {
            return res.status(404).send({
                message: "direc not found with id " + req.params.direcId
            });            
        }
        res.send(direc);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "direc not found with id " + req.params.direcId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving direc with id " + req.params.direcId
        });
    });
};

// Update a direc identified by the direcId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.cin) {
        return res.status(400).send({
            message: "direc content can not be empty"
        });
    }

    // Find direc and update it with the request body
    Direc.findByIdAndUpdate(req.params.direcId, {
        name: req.body.name, 
        cin: req.body.cin || "Untitled  Direc", 
         email : req.body.email,
        password: req.body.password,
        picture: req.body.picture
    }, {new: true})
    .then(direc => {
        if(!direc) {
            return res.status(404).send({
                message: "direc not found with id " + req.params.direcId
            });
        }
        res.send(direc);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "direc not found with id " + req.params.direcId
            });                
        }
        return res.status(500).send({
            message: "Error updating direc with id " + req.params.direcId
        });
    });
};

// Delete a direc with the specified direcId in the request
exports.delete = (req, res) => {
    Direc.findByIdAndRemove(req.params.direcId)
    .then(direc => {
        if(!direc) {
            return res.status(404).send({
                message: "direc not found with id " + req.params.direcId
            });
        }
        res.send({message: "direc deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "direc not found with id " + req.params.direcId
            });                
        }
        return res.status(500).send({
            message: "Could not delete direc with id " + req.params.direcId
        });
    });
};
