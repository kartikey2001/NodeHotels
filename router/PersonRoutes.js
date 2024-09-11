const express = require('express');
const router = express.Router();
const Person = require('./../models/Person');

router.post('/', async(req, res) => {
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
  
  router.get('/', async(req, res) => { 
    try {
      const persons = await Person.find();
      console.log('person fetched');
      res.status(200).json(persons);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }); 

  router.get('/:work', async(req, res) => {
    try {
      const persons = await Person.find({work: req.params.work});
      console.log('person fetched');
      res.status(200).json(persons);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } );

  module.exports = router;