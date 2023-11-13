const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');
const Game = require('./Game');

const Detail = sequelize.define('Detail', {
  id_detail: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('uuid'),
    primaryKey: true
  },
  time_game: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  lat: {
    type: DataTypes.STRING,
    allowNull: true
  },
  log: {
    type: DataTypes.STRING,
    allowNull: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { tableName: 'details' });

Detail.hasMany(Game, {as: 'detail_game', foreignKey: 'id_game'});

module.exports = {Detail}