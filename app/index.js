const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./db/db');
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

app.listen(process.env.PORT, function (err) {
  if (err){
    console.log(err);
    throw err;
  } 
  console.log("Server listening on PORT", process.env.PORT);
});