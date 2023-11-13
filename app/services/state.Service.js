const { State } = require('../models/State');

const getAllStates = async () => {
  try {
    const states = await State.findAll();
    if(states){
      return states;
    }
  } catch (error) {
    throw new Error(error);
  }
}

const addStatesDb = async () => {
  try {
    const state = await State.create({
      name: 'Texas',
    });
    return state;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getAllStates,
  addStatesDb
};