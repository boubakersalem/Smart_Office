const Tempr = require('../models/tempr.model.js');

// Create and Save a new tempr
exports.create = (req, res) => {
    // Validate request
    if(!req.body.nametmp) {
        return res.status(400).send({
            message: "tempr content can not be empty"
        });
    }

    // Create a tempr
    const tempr = new Tempr({
        nametmp: req.body.numetmp|| "Untitled Tempr",
        val1: req.body.val1 ,
        namehum: req.body.namehum ,
        val2: req.body.val2

    });

    // Save tempr in the database
    tempr.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the tempr."
        });
    });
};

// Retrieve and return all tempr from the database.
exports.findAll = (req, res) => {
    Tempr.find()
    .then(temprs => {
        res.send(temprs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving temprs."
        });
    });
};

// Find a single tempr with a temprId
exports.findOne = (req, res) => {
    Tempr.findById(req.params.temprId)
    .then(tempr => {
        if(!tempr) {
            return res.status(404).send({
                message: "tempr not found with id " + req.params.temprId
            });            
        }
        res.send(tempr);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "tempr not found with id " + req.params.temprId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving tempr with id " + req.params.temprId
        });
    });
};

// Update a tempr identified by the temprId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.nametmp) {
        return res.status(400).send({
            message: "tempr content can not be empty"
        });
    }

    // Find tempr and update it with the request body
    Tempr.findByIdAndUpdate(req.params.temprId, {
        nametmp: req.body.numetmp|| "Untitled Tempr",
        val1: req.body.val1 ,
        namehum: req.body.namehum ,
         val2: req.body.val2

    
    }, {new: true})
    .then(tempr => {
        if(!tempr) {
            return res.status(404).send({
                message: "tempr not found with id " + req.params.temprId
            });
        }
        res.send(tempr);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "tempr not found with id " + req.params.temprId
            });                
        }
        return res.status(500).send({
            message: "Error updating tempr with id " + req.params.temprId
        });
    });
};

// Delete a tempr with the specified temprId in the request
exports.delete = (req, res) => {
    Tempr.findByIdAndRemove(req.params.temprId)
    .then(tempr => {
        if(!tempr) {
            return res.status(404).send({
                message: "tempr not found with id " + req.params.temprId
            });
        }
        res.send({message: "tempr deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "tempr not found with id " + req.params.temprId
            });                
        }
        return res.status(500).send({
            message: "Could not delete tempr with id " + req.params.temprId
        });
    });
};
