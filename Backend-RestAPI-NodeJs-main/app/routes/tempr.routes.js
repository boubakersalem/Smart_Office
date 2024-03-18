module.exports = (app) => {
    const temprs = require('../controllers/tempr.controller.js');


    app.post('/temprs', temprs.create);

    
    app.get('/temprs', temprs.findAll);

   
    app.get('/temprs/:temprId', temprs.findOne);

    
    app.put('/temprs/:temprId', temprs.update);

    
    app.delete('/temprs/:temprId', temprs.delete);
}
