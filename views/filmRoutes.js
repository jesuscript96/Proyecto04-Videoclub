const express = require("express");
const router = express.Router();

const FilmController = require('../controllers/FilmControllers')

// CRUD READ todas las pelis
router.get('/' , FilmController.getAllFilms)

// CRUD READ top pelis
router.get('/topfilms' , FilmController.getTopFilms)

// CRUD READ pelis por id
router.get('/id/:id' , FilmController.getFilmById)

// CRUD READ pelis por titulo
router.get('/title/:title' , FilmController.getFilmByTitle)

// CRUD READ pelis por genero
router.get('/genre/:genre' , FilmController.getFilmByGenre)

module.exports = router
