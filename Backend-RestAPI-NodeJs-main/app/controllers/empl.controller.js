const Empl = require('../models/empl.model.js');

// Create and Save a new empl
exports.create = (req, res) => {
    // Validate request
    if(!req.body.cin) {
        return res.status(400).send({
            message: "empl content can not be empty"
        });
    }

    // Create a empl
    const empl = new Empl({
        name: req.body.name , 
        cin: req.body.cin|| "Untitled cin", 
        tel: req.body.tel  , 
        addr: req.body.addr  , 
        email : req.body.email,
        password: req.body.password,
        post: req.body.post,
        mode : req.body.mode,
        picture: req.body.picture
    });

    // Save empl in the database
    empl.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the empl."
        });
    });
};

// Retrieve and return all empl from the database.
exports.findAll = (req, res) => {
    Empl.find()
    .then(empls => {
        res.send(empls);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving empls."
        });
    });
};

// Find a single empl with a emplId
exports.findOne = (req, res) => {
    Empl.findById(req.params.emplId)
    .then(empl => {
        if(!empl) {
            return res.status(404).send({
                message: "empl not found with id " + req.params.emplId
            });            
        }
        res.send(empl);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "empl not found with id " + req.params.emplId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving empl with id " + req.params.emplId
        });
    });
};

// Update a empl identified by the emplId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.cin) {
        return res.status(400).send({
            message: "empl content can not be empty"
        });
    }

    // Find empl and update it with the request body
    Empl.findByIdAndUpdate(req.params.emplId, {
        name: req.body.name , 
        cin: req.body.cin|| "Untitled cin", 
        tel: req.body.tel  , 
        addr: req.body.addr  , 
        email : req.body.email,
        password: req.body.password,
        post: req.body.post,
        mode : req.body.mode,
        picture: req.body.picture
    
    }, {new: true})
    .then(empl => {
        if(!empl) {
            return res.status(404).send({
                message: "empl not found with id " + req.params.emplId
            });
        }
        res.send(empl);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "empl not found with id " + req.params.emplId
            });                
        }
        return res.status(500).send({
            message: "Error updating empl with id " + req.params.emplId
        });
    });
};

// Delete a empl with the specified emplId in the request
exports.delete = (req, res) => {
    Empl.findByIdAndRemove(req.params.emplId)
    .then(empl => {
        if(!empl) {
            return res.status(404).send({
                message: "empl not found with id " + req.params.emplId
            });
        }
        res.send({message: "empl deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "empl not found with id " + req.params.emplId
            });                
        }
        return res.status(500).send({
            message: "Could not delete empl with id " + req.params.emplId
        });
    });
};
