const Film = require('../models/film')

const FilmController = {}

FilmController.getAllFilms = async (req, res) => {
    try {
        let resp = await Film.findAll()
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}


module.exports = FilmController