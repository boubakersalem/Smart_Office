module.exports = (app) => {
    const equips = require('../controllers/equip.controller.js');


    app.post('/equips', equips.create);

    
    app.get('/equips', equips.findAll);

   
    app.get('/equips/:equipId', equips.findOne);

    
    app.put('/equips/:equipd', equips.update);

    
    app.delete('/equips/:equipId', equips.delete);
}
