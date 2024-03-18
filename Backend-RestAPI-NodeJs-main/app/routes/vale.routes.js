module.exports = (app) => {
    const vales = require('../controllers/vale.controller.js');


    app.post('/vales', vales.create);

    
    app.get('/vales', vales.findAll);

   
    app.get('/vales/:valeId', vales.findOne);

    
    app.put('/vales/:valeId', vales.update);

    
    app.delete('/vales/:valeId', vales.delete);
}
