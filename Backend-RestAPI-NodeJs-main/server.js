const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');

// create express app
const app = express();
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Rest API By Chaaben Group."});
});

require('./app/routes/action.routes.js')(app);
require('./app/routes/admin.routes.js')(app);
require('./app/routes/empl.routes.js')(app);
require('./app/routes/vale.routes.js')(app);
require('./app/routes/equip.routes.js')(app);
require('./app/routes/etat.routes.js')(app);
require('./app/routes/cons.routes.js')(app);
require('./app/routes/bureau.routes.js')(app);
require('./app/routes/clima.routes.js')(app);
require('./app/routes/led.routes.js')(app);
require('./app/routes/chouf.routes.js')(app);
require('./app/routes/pire.routes.js')(app);
require('./app/routes/sensors.routes.js')(app);
require('./app/routes/tempr.routes.js')(app);
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});