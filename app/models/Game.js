const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.belongsTo(models.Detail, {as: 'game_detail',foreignKey: 'id_detail'});
      Game.belongsTo(models.City, {as: 'game_city',foreignKey: 'id_city'});
      Game.belongsTo(models.Team, {as: 'game_team',foreignKey: 'id_team'});
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
      references: {
        key: 'id_team',
      }
    },
    id_detail: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        key: 'id_detail',
      }
    },
    id_city: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        key: 'id_city',
      }
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