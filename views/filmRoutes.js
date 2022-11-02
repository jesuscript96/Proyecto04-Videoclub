const express = require("express");
const router = express.Router();

const FilmController = require('../controllers/FilmControllers')

// CRUD READ todas las pelis
router.get('/' , FilmController.getAllFilms)

// CRUD READ top pelis
router.get('/topfilms' , FilmController.getTopFilms)

// CRUD READ pelis por id
router.get('/:id' , FilmController.getFilmById)

// CRUD READ pelis por titulo
router.get('/:title' , FilmController.getFilmByTitle)

// CRUD READ pelis por genero
router.get('/:genre' , FilmController.getFilmByGenre)
