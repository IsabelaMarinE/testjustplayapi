const { Model } = require('sequelize');
const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {
      Team.hasMany(models.Game, {as: 'team_game', foreignKey: 'id_game'});
    }
  };
  Team.init({
    id_team: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      defaultValue: crypto.randomUUID(),
      primaryKey: true
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    players: {
      type: DataTypes.JSON,
      allowNull: true
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    sequelize,
    modelName: 'Team',
    tableName: 'teams'
  });
  return Team;
};