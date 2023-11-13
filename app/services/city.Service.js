const City  = require('../models').City;
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

const addCityDb = async () => {
  await City.create({
    name: 'Houston',
    img: 'https://images.pexels.com/photos/273204/pexels-photo-273204.jpeg?auto=compress&cs=tinysrgb&w=200&h=350&dpr=1',
  });
}

const createCity = async (body) => {
  await City.findOne({
    where: {
      name: body.name
    }
  })
  .then(result =>{
    if(result){
      throw new Error('That city alreay exist');
    }
  });
  try {
    const newCity = await City.create({
      name: body.name,
      img: body.img ? body.img : '',
    });
    return newCity;
  } catch (error) {
    throw new Error(error);
  }
}

const updateCity = async (body) => {
  const city = await City.findByPk(body.id_city);
  if(city){
    city.update({
      name: body.name ? body.name : city.name,
      img: body.img ? body.img : city.img
    })
  }

}

module.exports = {
  getAllCities,
  findCityById,
  findCityByName,
  addCityDb,
  createCity,
  updateCity
};