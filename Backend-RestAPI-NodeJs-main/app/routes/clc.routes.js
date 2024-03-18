module.exports = (app) => {
    const clcs = require('../controllers/clc.controller.js');


    app.post('/clcs', clcs.create);

    
    app.get('/clcs', clcs.findAll);

   
    app.get('/clcs/:clcId', clcs.findOne);

    
    app.put('/clcs/:clcId', clcs.update);

    
    app.delete('/clcs/:clcId', clcs.delete);
}
 