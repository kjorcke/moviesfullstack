const express = require("express");
const {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie
} = require('../controllers/movies');

const api = express.Router();

api
  .route("/")
  .get(getMovies)
  .post(createMovie)

api
  .route('/:id')
  .get(getMovie)
  .put(updateMovie)
  .delete(deleteMovie)

module.exports = api;