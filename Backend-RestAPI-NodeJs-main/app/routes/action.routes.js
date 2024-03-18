module.exports = (app) => {
    const actions = require('../controllers/action.controller.js');


    app.post('/actions', actions.create);

    
    app.get('/actions', actions.findAll);

   
    app.get('/actions/:actionId', actions.findOne);

    
    app.put('/actions/:actionId', actions.update);

    
    app.delete('/actions/:actionId', actions.delete);
}
 