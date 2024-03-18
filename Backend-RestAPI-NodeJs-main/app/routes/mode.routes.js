module.exports = (app) => {
    const modes = require('../controllers/mode.controller.js');


    app.post('/modes', modes.create);

    
    app.get('/modes', modes.findAll);

   
    app.get('/modes/:modeId', modes.findOne);

    
    app.put('/modes/:modeId', modes.update);

    
    app.delete('/modes/:modeId', modes.delete);
}
