const Serie = require('../models/serie')
const Order = require('../models/order')
const Article = require('../models/Article')

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
            where: { id_serie: id }
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
            where: { title: title }
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
            where: { chapter: true }
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
            where: { theater: true }
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

SerieController.getSeriesFromUser = async (req, res) => {
    try {
        let userMail = req.params.mail
        console.log(req.params.mail)
        let serie = await Order.findAll({
            where: { userMail: userMail },
            include: {
                model: Article,
                attributes: ["id_article"],
                include: {
                    model: Serie,
                    attributes: ['title', 'genre', "minAge", "poster", "rating", "id_article"]
                }
            }
            // attributes: ['mail', 'name']
        })
        if (!serie) {
            res.status(400).send('serie not found')
            return;
        }
        // console.log('serie found:', serie)
        res.status(200).json(serie)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

module.exports = SerieController