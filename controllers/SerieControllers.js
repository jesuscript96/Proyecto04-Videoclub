const Serie = require('../models/serie')

const SerieController = {}

SerieController.getAllSeries = async (req, res) => {
    try {
        let resp = await Serie.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

SerieController.getTopSeries = async (req, res) => {
    try {
        let resp = await Serie.findAll({
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

SerieController.getSerieById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await Serie.findOne({
            where: {id_serie: id}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

SerieController.getSerieByTitle = async (req, res) => {
    try {
        let title = req.params.title
        let resp = await Serie.findOne({
            where: {title: title}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

SerieController.getUpcomingSeries = async (req, res) => {
    try {
        Serie.findAll({
            where: {chapter: true}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

SerieController.getSeriesOnTheater = async (req, res) => {
    try {
        Serie.findAll({
            where: {theater: true}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

module.exports = SerieController