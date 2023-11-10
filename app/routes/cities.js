const express = require('express');
const router = express.Router();
const cityController = require('../controllers/city_controller');

router.get('/getListCities', cityController.getAllCities);
router.get('/getCityById/:id', cityController.filterCityById);
router.get('/getCityByName/:name', cityController.filterCityByName);


module.exports = router;