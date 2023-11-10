const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');
const Game = require('./Game');

const Team = sequelize.define('Team', {
  id_state: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('uuid'),
    primaryKey: true
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  players: {
    type: DataTypes.ARRAY,
    allowNull: false
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, { tableName: 'teams' });

Team.hasMany(Game, {as: 'team_game', foreignKey: 'id_game'});

module.exports = {Team}