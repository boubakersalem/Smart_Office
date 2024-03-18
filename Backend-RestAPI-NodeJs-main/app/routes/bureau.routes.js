module.exports = (app) => {
    const bureaus = require('../controllers/bureau.controller.js');


    app.post('/bureaus', bureaus.create);

    
    app.get('/bureaus', bureaus.findAll);

   
    app.get('/bureaus/:bureauId', bureaus.findOne);

    
    app.put('/bureaus/:bureauId', bureaus.update);

    
    app.delete('/bureaus/:bureauId', bureaus.delete);
}
