const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate(models) {
      State.hasMany(models.City, {as: 'states_city', foreignKey: 'id_city'});
      State.hasMany(models.Game, {as: 'state_game', foreignKey: 'id_game'});
      State.hasMany(models.Player, {as: 'state_player', foreignKey: 'id_player'});
    }
  };
  State.init({
    id_state: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: crypto.randomUUID(),
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
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};