const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.hasMany(models.Game, {as: 'city_game', foreignKey: 'id_game'});
      City.hasMany(models.Player, {as: 'city_player', foreignKey: 'id_player'});
    }
  };
  City.init({
    id_city: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: crypto.randomUUID(),
      primaryKey: true
    },
    name: {
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
    modelName: 'City',
    tableName: 'cities'
  });
  return City;
};