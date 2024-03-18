module.exports = (app) => {
    const pires = require('../controllers/pire.controller.js');


    app.post('/pires', pires.create);

    
    app.get('/pires', pires.findAll);

   
    app.get('/pires/:pireId', pires.findOne);

    
    app.put('/pires/:pireId', pires.update);

    
    app.delete('/pires/:pireId', pires.delete);
}
