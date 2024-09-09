const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/Hotel';
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