const  Equip = require('../models/equip.model.js');

// Create and Save a new equip
exports.create = (req, res) => {
    // Validate request
    if(!req.body.equipname) {
        return res.status(400).send({
            message: "equip content can not be empty"
        });
    }

    // Create a equip
    const equip = new  Equip({
        numBureau : req.body.numBureau, 
        equipname: req.body.equipname || "Untitled equipe name",
         nbr : req.body.nbr,
        etat: req.body.etat
,
    });

    // Save equip in the database
    equip.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the equip."
        });
    });
};

// Retrieve and return all equip from the database.
exports.findAll = (req, res) => {
    Equip.find()
    .then(equips => {
        res.send(equips);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving equips."
        });
    });
};

// Find a single equip with a equipId
exports.findOne = (req, res) => {
    Equip.findById(req.params.equipId)
    .then(equip => {
        if(!equip) {
            return res.status(404).send({
                message: "equip not found with id " + req.params.equipId
            });            
        }
        res.send(equip);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "equip not found with id " + req.params.equipId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving equip with id " + req.params.equipId
        });
    });
};

// Update a equip identified by the equipId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.equipname) {
        return res.status(400).send({
            message: "equip content can not be empty"
        });
    }

    // Find equip and update it with the request body
    Equip.findByIdAndUpdate(req.params.equipId, {
        numBureau : req.body.numBureau , 
        equipname: req.body.equipname || "Untitled equipe name",
         nbr : req.body.nbr,
        etat: req.body.etat
         

  }, {new: true})
    .then(equip => {
        if(!equip) {
            return res.status(404).send({
                message: "equip not found with id " + req.params.equipId
            });
        }
        res.send(equip);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "equip not found with id " + req.params.equipId
            });                
        }
        return res.status(500).send({
            message: "Error updating equip with id " + req.params.equipId
        });
    });
};

// Delete a equip with the specified equipId in the request
exports.delete = (req, res) => {
    Equip.findByIdAndRemove(req.params.equipId)
    .then(equip => {
        if(!equip) {
            return res.status(404).send({
                message: "equip not found with id " + req.params.equipId
            });
        }
        res.send({message: "equip deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "equip not found with id " + req.params.equipId
            });                
        }
        return res.status(500).send({
            message: "Could not delete equip with id " + req.params.equipId
        });
    });
};
