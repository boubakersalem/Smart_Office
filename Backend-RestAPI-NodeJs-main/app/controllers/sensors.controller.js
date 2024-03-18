const Sensors= require('../models/sensors.model.js');

// Create and Save a new sensors
exports.create = (req, res) => {
    // Validate request


    // Create a sensors
    const sensors = new Sensors({
        type : req.body.type || "Untitled Sensors", 
        temperature :req.body.temperature,
        humidite: req.body.humidite,
    });

    // Save sensors in the database
    sensors.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Sensors."
        });
    });
};

// Retrieve and return all sensors from the database.
exports.findAll = (req, res) => {
    Sensors.find()
    .then(sensorss => {
        res.send(sensorss);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving sensorss."
        });
    });
};

// Find a single Sensors with a SensorsId
exports.findOne = (req, res) => {
    Sensors.findById(req.params.sensorsId)
    .then(sensors => {
        if(!sensors) {
            return res.status(404).send({
                message: "sensors not found with id " + req.params.sensorsId
            });            
        }
        res.send(sensors);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "sensors not found with id " + req.params.sensorsId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving sensors with id " + req.params.sensorsId
        });
    });
};

// Update a sensors identified by the sensorsId in the request
exports.update = (req, res) => {
    // Validate Request
  
    // Find Sensors and update it with the request body
    Sensors.findByIdAndUpdate(req.params.sensorsId, {
        valeur : req.body.valeur || "Untitled Sensors", 
        temperature :req.body.temperature,
        humidite: req.body.humidite,
    }, {new: true})
    .then(sensors => {
        if(!sensors) {
            return res.status(404).send({
                message: "Sensors not found with id " + req.params.sensorsId
            });
        }
        res.send(sensors);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: " sensors not found with id " + req.params.sensorsId
            });                
        }
        return res.status(500).send({
            message: "Error updating sensors with id " + req.params.sensorsId
        });
    });
};

// Delete a sensors with the specified sensorsId in the request
exports.delete = (req, res) => {
        Sensors.findByIdAndRemove(req.params.sensorsId)
    .then(sensors => {
        if(!sensors) {
            return res.status(404).send({
                message: "sensors not found with id " + req.params.sensorsId
            });
        }
        res.send({message: "sensors deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "sensors not found with id " + req.params.sensorsId
            });                
        }
        return res.status(500).send({
            message: "Could not delete sensors with id " + req.params.sensorsId
        });
    });
};
