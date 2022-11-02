const Film = require('../models/film')

const FilmController = {}

FilmController.getAllFilms = async (req, res) => {
    try {
        let resp = await Film.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

FilmController.getTopFilms = async (req, res) => {
    try {
        let resp = await Film.findAll({
            order: [["rating", "DESC"]],
            limit: 5
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

FilmController.getFilmById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await Film.findOne({
            where: {id_film: id}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

FilmController.getFilmByTitle = async (req, res) => {
    try {
        let title = req.params.title
        let resp = await Film.findOne({
            where: {title: title}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

FilmController.getFilmByGenre = async (req, res) => {
    try {
        let genre = req.params.genre
        let resp = await Film.findAll({
            where: {genre: genre}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

module.exports = FilmController