const { DataTypes } = require('sequelize');
const { sequelize } = require('./connection');
const City = require('./City');
const State = require('./State');

const Player = sequelize.define('Player', {
  id_player: {
    type: DataTypes.CHAR(36),
    allowNull: false,
    defaultValue: Sequelize.Sequelize.fn('uuid'),
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
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
}, { tableName: 'players' });

Player.belogsTo(City, {foreignKey: 'id_city'});
Player.belogsTo(State, {foreignKey: 'id_state'});

module.exports = {Player}