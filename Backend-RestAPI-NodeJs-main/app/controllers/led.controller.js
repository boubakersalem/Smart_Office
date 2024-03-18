const Led = require('../models/led.model.js');

// Create and Save a new led
exports.create = (req, res) => {
    // Validate request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "led content can not be empty"
        });
    }

    // Create a jour
    const led = new Led({
        jour: req.body.jour || "Untitled Led", 
         val : req.body.val,
         heur: req.body.heur
    
    });

    // Save led in the database
    led.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the led."
        });
    });
};

// Retrieve and return all led from the database.
exports.findAll = (req, res) => {
    Led.find()
    .then(leds => {
        res.send(leds);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving leds."
        });
    });
};

// Find a single led with a ledId
exports.findOne = (req, res) => {
    Led.findById(req.params.ledId)
    .then(led => {
        if(!led) {
            return res.status(404).send({
                message: "led not found with id " + req.params.ledId
            });            
        }
        res.send(led);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "led not found with id " + req.params.ledId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving led with id " + req.params.ledId
        });
    });
};

// Update a led identified by the ledId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "led content can not be empty"
        });
    }

    // Find led and update it with the request body
    Led.findByIdAndUpdate(req.params.ledId, {
        jour: req.body.jour|| "Untitled Led" , 
        val : req.body.val,
        heur: req.body.heur
    }, {new: true})
    .then(led => {
        if(!led) {
            return res.status(404).send({
                message: "led not found with id " + req.params.ledId
            });
        }
        res.send(admin);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "led not found with id " + req.params.ledId
            });                
        }
        return res.status(500).send({
            message: "Error updating led with id " + req.params.ledId
        });
    });
};

// Delete a led with the specified ledId in the request
exports.delete = (req, res) => {
    Led.findByIdAndRemove(req.params.ledId)
    .then(led => {
        if(!led) {
            return res.status(404).send({
                message: "led not found with id " + req.params.ledId
            });
        }
        res.send({message: "led deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "led not found with id " + req.params.ledId
            });                
        }
        return res.status(500).send({
            message: "Could not delete led with id " + req.params.ledId
        });
    });
};
