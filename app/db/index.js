const Sequelize = require("sequelize");
const ConfigDB = require("./Config/database");

const Player = require("../models/Player");
const Game = require("../models/Game");
const Team = require("../models/Team");
const Detail = require("../models/Detail");
const City = require("../models/City");
const State = require("../models/State");

const connection = new Sequelize(ConfigDB);

Players.init(connection);
Games.init(connection);
Teams.init(connection);
Details.init(connection);
Cities.init(connection);
States.init(connection);

Player.associate(connection.models);
Game.associate(connection.models);
Team.associate(connection.models);
Detail.associate(connection.models);
City.associate(connection.models);
State.associate(connection.models);

module.exports = connection;