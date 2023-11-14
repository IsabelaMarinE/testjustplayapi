const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.belongsTo(models.Detail, {as: 'game_detail',foreignKey: 'id_detail', sourceKey: "id_detail", uniqueKey: "game_detail_fk",constraints: false, });
      Game.belongsTo(models.City, {as: 'game_city',foreignKey: 'id_city', sourceKey: 'id_city', uniqueKey: "game_city_fk", constraints: false,});
      Game.belongsTo(models.Team, {as: 'game_team',foreignKey: 'id_team', sourceKey: 'id_team', uniqueKey: "game_team_fk", constraints: false,});
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
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Game',
    tableName: 'games'
  });
  return Game;
};