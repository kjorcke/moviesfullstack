const Movie = require('../models/Movie');
//const Order = require('../models/Order');
//const mongoose = require('mongoose');

//const { ObjectId } = mongoose.Types;

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();
    res.json({ success: true, msg: 'show all movies', data: movies })
  } catch(err) {
    next(err)
  }
};

const getMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await User.findById(id);
    res.json({ success: true, msg: 'show selected movie', data: movie })
  } catch(err) {
    next(err)
  }
};

const createMovie = async (req, res, next) => {
  try {
    const { name, director, description, stars, rating, year } = req.body;
    const movie = await Movie.create({ name, director, description, stars, rating, year});

    res.json({ success: true, msg: 'show new movie', data: movie })
  } catch(err) {
    next(err)
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findByIdAndDelete(id);
    res.json({ success: true, msg: `movie with id ${id} deleted`, data: movie })
  } catch(err) {
    next(err) 
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, director, description, stars, rating, year} = req.body;
    
    const user = await User.findByIdAndUpdate(id, { name, director, description, stars, rating, year}, { new: true });
    res.json({ success: true, msg: `user with id ${id} updated`, data: user })
  } catch(err) {
    next(err)
  }
};

module.exports = {
  getMovies,
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie
}