const mongoose = require('mongoose');
require('dotenv').config(); 

//const mongoURL = 'mongodb://localhost:27017/Hotel';
const mongoURL = process.env.DB_URL;
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
  console.log(`Mongoose connected to ${mongoURL}`);
});

db.on('error', (err) => {
  console.log('Mongoose connection error:', err);
}); 

db.on('disconnected', () => {        
  console.log('Mongoose disconnected');
}); 

module.exports = db;