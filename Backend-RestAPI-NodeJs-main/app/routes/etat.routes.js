module.exports = (app) => {
    const etats = require('../controllers/etat.controller.js');


    app.post('/etats', etats.create);

    
    app.get('/etats', etats.findAll);

   
    app.get('/etats/:etatId', etats.findOne);

    
    app.put('/etats/:etatId', etats.update);

    
    app.delete('/etats/:etatId', etats.delete);
}
