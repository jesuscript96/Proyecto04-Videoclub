const Film = require('../models/film')


const FilmController = {}

ProfileController.getAllFilms = async (req, res) => {
    try {
        Film.findAll()
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}


module.exports = FilmController