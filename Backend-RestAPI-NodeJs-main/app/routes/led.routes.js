module.exports = (app) => {
    const leds = require('../controllers/led.controller.js');


    app.post('/leds', leds.create);

    
    app.get('/leds', leds.findAll);

   
    app.get('/leds/:ledId', leds.findOne);

    
    app.put('/leds/:ledId', leds.update);

    
    app.delete('/leds/:ledId', leds.delete);
}
