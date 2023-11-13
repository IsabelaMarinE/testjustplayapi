const { City } = require('../models/City');
const { State } = require('../models/State');
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
  const state = State.findOne({
    where: {
      name: 'Texas'
    },
    attributes: ['id_state'],
  });
  if(state){
    const data = [
      {
        name: 'Houston',
        img: 'https://images.pexels.com/photos/273204/pexels-photo-273204.jpeg?auto=compress&cs=tinysrgb&w=200&h=350&dpr=1',
        id_state: state.id_state
      },
      {
        name: 'Dallas',
        img: 'https://images.pexels.com/photos/280193/pexels-photo-280193.jpeg?auto=compress&cs=tinysrgb&w=200&h=350&dpr=1',
        id_state: state.id_state
      }
    ];
    for(let city of data){
      await City.create({
        name: city.img,
        img: city.img,
        id_state: city.id_state
      });
    }
  }
 
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
      id_state: body.id_state
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
      img: body.img ? body.img : city.img,
      id_state: body.id_state ? body.id_state : city.id_state
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