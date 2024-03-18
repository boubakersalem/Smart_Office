module.exports = (app) => {
    const direcs = require('../controllers/direc.controller.js');


    app.post('/direcs', direcs.create);

    
    app.get('/direcs', direcs.findAll);

   
    app.get('/direcs/:direcId', direcs.findOne);

    
    app.put('/direcs/:direcId', direcs.update);

    
    app.delete('/direcs/:direcId', direcs.delete);
}
