const gameServices = require('../services/game.Service');

exports.createGame = async (req, res, next) => {
  const { body } = req;
  try {
    const game =  await gameServices.createGame(body);
    if(game){
      res.status(200).json({
        items: game,
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

exports.getListGames = async (req, res, next) => {
  try {
    const listGames =  await gameServices.getAllGames();
    if(listGames){
      res.status(200).json({
        items: listGames,
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

exports.updateGame = async (req, res, next) => {
  const { body } = req;
  try {
    const updatedGame =  await gameServices.updateGame(body);
    if(updatedGame){
      res.status(200).json({
        items: updatedGame,
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

exports.filterGameByName = async (req, res, next) => {
  const name = req.params.name;
  try {
    const listGames =  await gameServices.findGameByCity(name);
    if(listGames){
      res.status(200).json({
        items: listGames,
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

exports.getGamesbyCity = async (req, res, next) => {
  const id = req.params.id;
  try {
    const listGames =  await gameServices.findGameByCity(id);
    if(listGames){
      res.status(200).json({
        items: listGames,
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

exports.getGamesbyId = async (req, res, next) => {
  const id = req.params.id;

  try {
    const game =  await gameServices.getGameById(id);
    if(game){
      res.status(200).json({
        items: game,
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