const { City } = require('../models/City');
const { Op } = require("sequelize");

const getAllCities = async () => {
  try {
    const cities = await City.findAll();
    if(cities){
      return cities;
    }
  } catch (error) {
    throw new Error(error);
  }
}

const findCityById = async (id) => {
  try {
    const cities = await City.findByPk(id);
    if(cities){
      return cities;
    }
  } catch (error) {
    throw new Error(error);
  }
}

const findCityByName = async (name) => {
  try {
    const cities = await City.find({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      }
    });
    if(cities){
      return cities;
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getAllCities,
  findCityById,
  findCityByName
};