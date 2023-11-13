const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const cityController = require('../controllers/city_controller');

router.get('/addDataDB', cityController.createCityDb);
router.get('/getListCities', cityController.getAllCities);
router.get('/getCityById/:id', cityController.filterCityById);
router.get('/getCityByName/:name', cityController.filterCityByName);
router.post(
  '/createCity',
  body('name').notEmpty(),
  cityController.createCity
);


module.exports = router;