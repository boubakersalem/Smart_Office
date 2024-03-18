module.exports = (app) => {
    const sensorss = require('../controllers/sensors.controller.js');


    app.post('/sensorss', sensorss.create);

    
    app.get('/sensorss', sensorss.findAll);

   
    app.get('/sensorss/:sensorsId', sensorss.findOne);

    
    app.put('/sensorss/:sensorsId', sensorss.update);

    
    app.delete('/sensorss/:sensorsId', sensorss.delete);
}
