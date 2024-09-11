const express = require('express');
const router = express.Router();
const Menu = require('./../models/Menu');
router.post('/', async(req, res) => {
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
  
  router.get('/', async(req, res) => { 
    try {
      const menus = await Menu.find();
      console.log('menu fetched');
      res.status(200).json(menus);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }); 

  module.exports = router;