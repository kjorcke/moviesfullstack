require('dotenv').config();
require('colors');
const express = require("express");
const cors = require("cors");

const movies = require('./api/movies');
const errorHandler = require('./middleware/error');
const app = express();
const connectDB = require('./dbinit');
const PORT = 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello earthling!')
});

app.use('/movies', movies);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`.rainbow.bold.inverse));