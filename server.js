//express require
const express = require('express');

//tell heroku which port to use, add port to listen method below
const PORT = process.env.PORT || 3001;

//instantiate express
const app = express();

//modularization started for organization
// const apiRoutes = require('./routes/api/apiRoutes');
const htmlRoutes = require('./routes/html/htmlRoutes');

//access to the stylesheets and js files in 'public' folder
app.use(express.static('public'));

//parse incoming data through express into json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//if the api is '/api' it will look in apiRoutes.js
//if '/' then htmlRoutes
// app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//listener for apis
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});