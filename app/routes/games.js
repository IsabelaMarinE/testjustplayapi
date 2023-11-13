const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const gameController = require('../controllers/game_controller');

router.get('/getListOfGames', gameController.getListGames);
router.get('/filterGameByName/:name', gameController.filterGameByName);
router.post(
  '/createGame',
  body('name').notEmpty(),
  body('location').notEmpty(),
  body('game_date').isDate(),
  body('price').notEmpty(),
  body('size').isNumeric(),
  gameController.createGame
);
router.post(
  '/updateGame',
  body('id_game').notEmpty(),
  gameController.updateGame
);

module.exports = router;