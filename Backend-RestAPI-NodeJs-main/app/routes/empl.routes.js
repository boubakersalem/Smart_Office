module.exports = (app) => {
    const empls = require('../controllers/empl.controller.js');


    app.post('/empls', empls.create);

    
    app.get('/empls', empls.findAll);

   
    app.get('/empls/:emplId', empls.findOne);

    
    app.put('/empls/:emplId', empls.update);

    
    app.delete('/empls/:emplId', empls.delete);
}
 