const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class Detail extends Model {
    static associate(models) {
      Detail.hasMany(models.Game, {as: 'detail_game'});
    }
  };
  Detail.init({
    id_detail: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: crypto.randomUUID(),
      primaryKey: true
    },
    time_game: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
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
  }, {
    sequelize,
    modelName: 'Detail',
    tableName: 'details'
  });
  return Detail;
};