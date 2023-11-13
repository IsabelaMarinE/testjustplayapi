const cityServices = require('../services/city.Service');

exports.createCity = async (req, res, next) => {
  const { body } = req;
  try {
    const newcity =  await cityServices.createCity(body);
    if(newcity){
      res.status(200).json({
        items: newcity,
        state: true,
        error: ''
      })
    }else{
      res.status(204).json({
        items: [],
        state: false,
        error: 'Not Found'
      })
    }
  } catch (error) {
    res.status(500).json({
      state: false,
      error: error.message,
    });
  }
}

exports.getAllCities = async (req, res, next) => {
  try {
    const listCities =  await cityServices.getAllCities();
    if(listCities){
      res.status(200).json({
        items: listCities,
        state: true,
        error: ''
      })
    }else{
      res.status(204).json({
        items: [],
        state: false,
        error: 'Not Found'
      })
    }
  } catch (error) {
    res.status(500).json({
      state: false,
      error: error.message,
    });
  }
}

exports.filterCityById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const listCities =  await cityServices.findCityById(id);
    if(listCities){
      res.status(200).json({
        items: listCities,
        state: true,
        error: ''
      })
    }else{
      res.status(204).json({
        items: [],
        state: false,
        error: 'Not Found'
      })
    }
  } catch (error) {
    res.status(500).json({
      state: false,
      error: error.message,
    });
  }
}

exports.filterCityByName = async (req, res, next) => {
  const name = req.params.name;
  try {
    const listCities =  await cityServices.findCityByName(name);
    if(listCities){
      res.status(200).json({
        items: listCities,
        state: true,
        error: ''
      })
    }else{
      res.status(204).json({
        items: [],
        state: false,
        error: 'Not Found'
      })
    }
  } catch (error) {
    res.status(500).json({
      state: false,
      error: error.message,
    });
  }
}

exports.createCityDb = async (req, res, next) => {
  try {
    await cityServices.addCityDb();
  } catch (error) {
    throw new Error(error);
  }
}