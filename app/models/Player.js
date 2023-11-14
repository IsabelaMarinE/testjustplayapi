const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate(models) {
      Player.belongsTo(models.City, {as: 'player_city', foreignKey: 'id_city', sourceKey: 'id_city'});
    }
  };
  Player.init({
    id_player: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: crypto.randomUUID(),
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
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Player',
    tableName: 'players'
  });
  return Player;
};