module.exports = (app) => {
    const choufs = require('../controllers/chouf.controller.js');


    app.post('/choufs', choufs.create);

    
    app.get('/choufs', choufs.findAll);

   
    app.get('/choufs/:choufId', choufs.findOne);

    
    app.put('/choufs/:choufId', choufs.update);

    
    app.delete('/choufs/:choufId', choufs.delete);
}
