const express = require('express');
const router = express.Router();
const gameController = require('../controllers/game_controller');

router.get('/getListOfGames', gameController.getListGames);
router.get('/getGameByCity/:id', gameController.getGamesbyCity);
router.get('/getGameById/:id', gameController.getGamesbyId);
router.get('/filterGameByName/:name', gameController.filterGameByName);
router.post('/createGame',  gameController.createGame);
router.post('/updateGame',gameController.updateGame);

module.exports = router;