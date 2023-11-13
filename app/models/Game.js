const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.belongsTo(models.State, {foreignKey: 'id_state'});
      Game.belogsTo(models.Detail, {foreignKey: 'id_detail'});
      Game.belogsTo(models.City, {foreignKey: 'id_city'});
      Game.belogsTo(models.Team, {foreignKey: 'id_team'});
    }
  };
  Game.init({
    id_game: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: crypto.randomUUID(),
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
      allowNull: true
    },
    game_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    id_team: {
      type: DataTypes.CHAR(36),
      allowNull: true,
    },
    id_detail: {
      type: DataTypes.CHAR(36),
      allowNull: false,
    },
    id_city: {
      type: DataTypes.CHAR(36),
      allowNull: false,
    },
    id_state: {
      type: DataTypes.CHAR(36),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};