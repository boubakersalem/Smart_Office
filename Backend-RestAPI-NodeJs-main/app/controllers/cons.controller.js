const   Cons = require('../models/cons.model.js');

// Create and Save a new cons
exports.create = (req, res) => {
    // Validate request
    if(!req.body.username) {
        return res.status(400).send({
            message: "cons content can not be empty"
        });
    }

    // Create a   Cons
    const cons = new Cons({
        username: req.body.username || "Untitled cons", 
        email : req.body.email,
        password: req.body.password
    });

    // Save   cons in the database
    cons.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the cons."
        });
    });
};

// Retrieve and return all cons from the database.
exports.findAll = (req, res) => {
    Cons.find()
    .then(conss => {
        res.send(conss);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving cons."
        });
    });
};

// Find a single cons with a consId
exports.findOne = (req, res) => {
    Cons.findById(req.params.consId)
    .then(cons => {
        if(!cons) {
            return res.status(404).send({
                message: "cons not found with id " + req.params.consId
            });            
        }
        res.send(cons);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "cons not found with id " + req.params.consId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving cons with id " + req.params.consId
        });
    });
};

// Update a cons identified by the consId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.username) {
        return res.status(400).send({
            message: "cons content can not be empty"
        });
    }

    // Find cons and update it with the request body
    Cons.findByIdAndUpdate(req.params.consId, {
        username: req.body.username || "Untitled cons", 
        email : req.body.email,
        password: req.body.password
    }, {new: true})
    .then(cons => {
        if(!cons) {
            return res.status(404).send({
                message: "cons not found with id " + req.params.consId
            });
        }
        res.send(cons);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "cons not found with id " + req.params.consId
            });                
        }
        return res.status(500).send({
            message: "Error updating cons with id " + req.params.consId
        });
    });
};

// Delete a cons with the specified consId in the request
exports.delete = (req, res) => {
    Cons.findByIdAndRemove(req.params.consId)
    .then(cons => {
        if(!cons) {
            return res.status(404).send({
                message: "cons not found with id " + req.params.consId
            });
        }
        res.send({message: "cons deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "cons not found with id " + req.params.consId
            });                
        }
        return res.status(500).send({
            message: "Could not delete cons with id " + req.params.consId
        });
    });
};
