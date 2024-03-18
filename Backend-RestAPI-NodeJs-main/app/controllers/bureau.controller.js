const  Bureau = require('../models/bureau.model.js');

// Create and Save a new bureau
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "bureau content can not be empty"
        });
    }

    // Create a bureau
    const bureau = new  Bureau({
        numBureau: req.body.numBureau, 
        name : req.body.name  || "Untitled  Bureau",
        cin: req.body.cin
        
    });

    // Save bureau in the database
    bureau.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the bureau."
        });
    });
};

// Retrieve and return all bureau from the database.
exports.findAll = (req, res) => {
    Bureau.find()
    .then(bureaus => {
        res.send(bureaus);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving bureaus."
        });
    });
};

// Find a single bureau with a bureauId
exports.findOne = (req, res) => {
    Bureau.findById(req.params.bureauId)
    .then(bureau => {
        if(!bureau) {
            return res.status(404).send({
                message: "bureau not found with id " + req.params.bureauId
            });            
        }
        res.send(bureau);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "bureau not found with id " + req.params.bureauId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving bureau with id " + req.params.bureauId
        });
    });
};

// Update a bureau identified by the bureauId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "bureau content can not be empty"
      });
    }

    // Find bureau and update it with the request body
    Bureau.findByIdAndUpdate(req.params.bureauId, {
        numBureau: req.body.numBureau, 
        name : req.body.name  || "Untitled  Bureau",
        cin: req.body.cin
    }, {new: true})
    .then(bureau => {
        if(!bureau) {
            return res.status(404).send({
                message: "bureau not found with id " + req.params.bureauId
            });
        }
        res.send(bureau);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "bureau not found with id " + req.params.bureauId
            });                
        }
        return res.status(500).send({
            message: "Error updating bureau with id " + req.params.bureauId
        });
    });
};

// Delete a bureau with the specified bureauId in the request
exports.delete = (req, res) => {
    Bureau.findByIdAndRemove(req.params.bureauId)
    .then(bureau => {
        if(!bureau) {
            return res.status(404).send({
                message: "bureau not found with id " + req.params.bureauId
            });
        }
        res.send({message: "bureau deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "bureaunot found with id " + req.params.bureauId
            });                
        }
        return res.status(500).send({
            message: "Could not delete bureau with id " + req.params.bureauId
        });
    });
};
