const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./db/Config/database');
require('dotenv').config();

const app = express();

//Router Files
const gamesRouter = require('./routes/games');
const playersRouter = require('./routes/players');
const citiesRouter = require('./routes/cities');

//Configurations
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

//Cors
app.use(cors({
  origin: '*',
  methods: ['GET','POST', 'OPTIONS']
}));

//Routes
app.use('/api/city', citiesRouter);
app.use('/api/player', playersRouter);
app.use('/api/game', gamesRouter);

sequelize
  .sync()
  .then(() => {
    console.log('Sync models');
    app.listen(process.env.PORT, () => {
      console.log(`Server listen on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error('Connection fail', error);
  });