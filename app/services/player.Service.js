const { Player } = require('../models/Player');

const createPlayer = async (body) => {
  const {name, last_name, img, email, id_city, phone } = body;

  try {
    const playe = await Player.create({
      name: name,
      last_name: last_name,
      img: img ? img : '',
      email: email,
      phone: email,
      id_city: id_city
    });
    return playe;
  } catch (error) {
    throw new Error(error);
  }
}

const updatePlayer = async (body) => {
  try {
    const player = await Player.findByPk(body.id_player);
    if(player){
      player.update({
        name: body.name ? body.name : player.name,
        last_name: body.last_name ? body.last_name : player.last_name,
        email: body.email ? body.email : player.email,
        phone: body.phone ? body.phone : player.phone,
        id_city: body.id_city ? body.id_city : player.id_city,
        img: body.img ? body.img : player.img,
      });
    };
    return player;
  } catch (error) {
    throw new Error(error);
  }
  
}

const getPlayerById = async (body) => {
  try {
    const player = await Player.findByPk(body.id_player)
    if(player){
      return player;
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  getPlayerById,
  createPlayer,
  updatePlayer
};