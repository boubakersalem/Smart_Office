const  Action = require('../models/action.model.js');

// Create and Save a new action
exports.create = (req, res) => {
    // Validate request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "action content can not be empty"
        });
    }

    // Create a action
    const action = new  Action({
        jour: req.body.jour|| "Untitled jour", 
        nbr: req.body.nbr, 
        heur: req.body.heur,
      
    });

    // Save action in the database
    action.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the action."
        });
    });
};

// Retrieve and return all action from the database.
exports.findAll = (req, res) => {
    Action.find()
    .then(actions => {
        res.send(actions);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving actions."
        });
    });
};

// Find a single action with a actionId
exports.findOne = (req, res) => {
    Action.findById(req.params.actionId)
    .then(action => {
        if(!action) {
            return res.status(404).send({
                message: "action not found with id " + req.params.actionId
            });            
        }
        res.send(action);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "action not found with id " + req.params.actionId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving action with id " + req.params.actionId
        });
    });
};

// Update a action identified by the actionId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.jour) {
        return res.status(400).send({
            message: "action content can not be empty"
        });
    }

    // Find action and update it with the request body
    Action.findByIdAndUpdate(req.params.actionId, {
        jour: req.body.jour|| "Untitled jour", 
         
        nbr: req.body.nbr, 
        heur: req.body.heur, 
       
    
    }, {new: true})
    .then(action => {
        if(!action) {
            return res.status(404).send({
                message: "action not found with id " + req.params.actionId
            });
        }
        res.send(action);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "action not found with id " + req.params.actionId
            });                
        }
        return res.status(500).send({
            message: "Error updating action with id " + req.params.actionId
        });
    });
};

// Delete a action with the specified actionId in the request
exports.delete = (req, res) => {
    Action.findByIdAndRemove(req.params.actionId)
    .then(action => {
        if(!action) {
            return res.status(404).send({
                message: "action not found with id " + req.params.actionId
            });
        }
        res.send({message: "action deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "action not found with id " + req.params.actionId
            });                
        }
        return res.status(500).send({
            message: "Could not delete action with id " + req.params.actionId
        });
    });
};
