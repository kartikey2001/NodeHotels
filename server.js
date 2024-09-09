const express = require('express')
const app = express(); 
const db = require('./db');


const Person = require('./models/Person');
const Menu = require('./models/Menu');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/person', async(req, res) => {
  try {
    const person = new Person(req.body);
    const res = await person.save();
    console.log('person created');
    res.status(200).json(res);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}); 

app.get('/person', async(req, res) => { 
  try {
    const persons = await Person.find();
    console.log('person fetched');
    res.status(200).json(persons);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}); 

app.post('/menu', async(req, res) => {
  try {
    const menu = new Menu(req.body);
    const res = await menu.save();
    console.log('menu created');
    res.status(200).json(res);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.get('/menu', async(req, res) => { 
  try {
    const menus = await Menu.find();
    console.log('menu fetched');
    res.status(200).json(menus);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}); 

app.get('/person/:work', async(req, res) => {
  try {
    const persons = await Person.find({work: req.params.work});
    console.log('person fetched');
    res.status(200).json(persons);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
} );

app.listen(3000, () => {
  console.log('Server is running on port 3000');
} ); 