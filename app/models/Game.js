const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');

const Detail = require('./Detail');
const City = require('./City');
const State = require('./State');
const Team = require('./Team');

const Game = sequelize.define('Game', {
  id_game: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('uuid'),
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  game_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  id_team: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    references: {
      model: 'team',
      key: 'id_team'
    }
  },
  id_detail: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    references: {
      model: 'detail',
      key: 'id_detail'
    }
  },
  id_city: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    references: {
      model: 'city',
      key: 'id_city'
    }
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
}, { tableName: 'games' });

Game.belogsTo(State, {foreignKey: 'id_state'});
Game.belogsTo(Detail, {foreignKey: 'id_detail'});
Game.belogsTo(City, {foreignKey: 'id_city'});
Game.belogsTo(Team, {foreignKey: 'id_team'});

module.exports = {Game}