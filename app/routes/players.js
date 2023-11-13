const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const playerController = require('../controllers/player_controller');

router.post('/getPlayer', playerController.getPlayer);
router.post(
  '/createPlayer',
  body('name').notEmpty(),
  body('last_name').notEmpty(),
  body('email').isEmail(),
  body('phone').notEmpty(),
  body('id_city').notEmpty(),
  playerController.createPlayer
);
router.post(
  '/updatePlayer',
  body('id_player').notEmpty(),
  playerController.updatePlayer
);

module.exports = router;