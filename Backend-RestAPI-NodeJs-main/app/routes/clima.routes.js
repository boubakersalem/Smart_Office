module.exports = (app) => {
    const climas = require('../controllers/clima.controller.js');


    app.post('/climas', climas.create);

    
    app.get('/climas', climas.findAll);

   
    app.get('/climas/:climaId', climas.findOne);

    
    app.put('/climas/:climaId', climas.update);

    
    app.delete('/climas/:climaId', climas.delete);
}
