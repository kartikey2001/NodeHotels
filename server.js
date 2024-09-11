const express = require('express')
const app = express(); 
const db = require('./db');
require('dotenv').config();



const PORT = process.env.PORT || 3000;

const personRoutes = require('./router/PersonRoutes');
app.use('/',personRoutes);

const menuRoutes = require('./router/MenuRoutes');
app.use('/menu',menuRoutes);

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/person', function (req, res) {
  res.send('Hello World')
})







app.listen(PORT, () => {
  console.log('Server is running on port 3000');
} ); 