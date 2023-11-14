const Game = require('../models').Game;
const Team = require('../models').Team;
const Detail = require('../models').Detail;
const City = require('../models').City;

const getAllGames = async () => {
  try {
    const games = await Game.findAll({
      include: [
        {
          model: Team,
          as: 'game_team'
        },
      ],
    });
    if(games){
      return games;
    }
  } catch (error) {
    throw new Error(error);
  }
}

const createGame = async (body) => {
  const {name, location, img, game_date, id_city, time_game, description, price, lat, log, size, isActive} = body;
  try {
    const city = await City.findByPk(id_city);
    const team = await Team.create({
      size: size,
      isActive: isActive
    });
    if(team){
      const detail = await Detail.create({
        time_game: time_game,
        description: description,
        price: price,
        lat: lat ? lat : '',
        log: log ? log : ''
      });
      if(detail){
        const game = await Game.create({
          name: name,
          location: location,
          img: img,
          game_date: game_date,
          id_city: city.id_city,
          id_detail: detail.id_detail,
          id_team: team.id_team
        });
        if(game){
          return game;
        }
      }
    }
  } catch (error) {
    throw new Error(error);
  }
}

const updateGame = async (body) => {
  const game = await Game.findByPk(body.id_game);
  if(game){
    game.update({
      name: body.name ? body.name : game.name,
      location: body.location ? body.location : game.location,
      img: body.img ? body.img : game.img
    });
  };
  const teamG = await Team.findByPk(body.id_detail);
  if(teamG){
    teamG.update({
      size: body.size ? body.size : teamG.size,
      players: body.players ? body.players : teamG.players,
      isActive: body.isActive ? body.isActive : teamG.isActive
    });
  };
  const details = await Detail.findByPk(body.id_detail);
  if(details){
    details.update({
      time_game: body.time_game ? body.time_game : teamG.time_game,
      description: body.description ? body.description : teamG.description,
      price: body.price ? body.price : teamG.price,
      lat: body.lat ? body.lat : teamG.lat,
      log: body.log ? body.log : teamG.log,
    })
  }
  return game;
}

const findGameByName = async (name) => {
  try {
    const games = await Game.find({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      }
    });
    if(games){
      return games;
    }
  } catch (error) {
    throw new Error(error);
  }
}

const findGameByCity = async (id_city) => {
  try {
    const games = await Game.findAll({
      where: {
        id_city: id_city
      },
      include: [
        {
          model: Team,
          as: 'game_team'
        },
      ],
    });
    if(games){
      return games;
    }
  } catch (error) {
    throw new Error(error);
  }
}

const getGameById = async (id_game) => {
  try {
    const games = await Game.findAll({
      where:{
        id_game: id_game
      },
      include: [
        {
          model: Team,
          as: 'game_team'
        },
        {
          model: Detail,
          as: 'game_detail'
        },
      ]
    });

    if(games){
      return games[0];
    }
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  updateGame,
  getAllGames,
  createGame,
  findGameByName,
  findGameByCity,
  getGameById
};