const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');
const Player = require('./Player');
const City = require('./City');
const Game = require('./Game');

const State = sequelize.define('State', {
  id_state: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('uuid'),
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { tableName: 'states' });

State.hasMany(City, {as: 'states_city', foreignKey: 'id_city'});
State.hasMany(Game, {as: 'state_game', foreignKey: 'id_game'});
State.hasMany(Player, {as: 'state_player', foreignKey: 'id_player'});

module.exports = {State}