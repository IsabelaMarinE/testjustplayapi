const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');
const State = require('./State');
const Game = require('./Game');
const Player = require('./Player');

const City = sequelize.define('City', {
  id_city: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('uuid'),
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_state: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    references: {
      model: 'state',
      key: 'id_state'
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { tableName: 'cities' });

City.belogsTo(State, {foreignKey: 'id_state'});
City.hasMany(Game, {as: 'city_game', foreignKey: 'id_game'});
City.hasMany(Player, {as: 'city_player', foreignKey: 'id_player'});

module.exports = {City}