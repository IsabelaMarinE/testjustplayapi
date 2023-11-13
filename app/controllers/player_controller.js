const playerServices = require('../services/player.Service');

exports.createPlayer = async (req, res, next) => {
  try {
    const player =  await playerServices.createPlayer(res.body);
    if(player){
      res.status(200).json({
        items: player,
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

exports.getPlayer = async (req, res, next) => {
  const { body } = req;
  try {
    const player =  await playerServices.getPlayerById(body);
    if(player){
      res.status(200).json({
        items: player,
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

exports.updatePlayer = async (req, res, next) => {
  const { body } = req;
  try {
    const updatedPlayer =  await playerServices.updatePlayer(body);
    if(updatedPlayer){
      res.status(200).json({
        items: updatedPlayer,
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