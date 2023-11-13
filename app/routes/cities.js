const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const cityController = require('../controllers/city_controller');

router.get('/getListCities', cityController.getAllCities);
router.get('/getCityById/:id', cityController.filterCityById);
router.get('/getCityByName/:name', cityController.filterCityByName);
router.post(
  '/createCity',
  body('name').notEmpty(),
  body('id_state').notEmpty(),
  cityController.createCity
);


module.exports = router;