//express require
const express = require('express');

//tell heroku which port to use, add port to listen method below
const PORT = process.env.PORT || 3001;

//all our route functionality for later
const routes = require('/routes/route.js');

//instantiate express
const app = express();

//modularization started for organization
const apiRoutes = require('/routes/apiRoutes');
const htmlRoutes = require('/routes/htmlRoutes');

//parse incoming data through express into json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//if the api is '/api' it will look in apiRoutes.js
//if '/' then htmlRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//listener for apis
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});