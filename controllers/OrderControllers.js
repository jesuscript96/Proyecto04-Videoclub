const Film = require('../models/film');
const Order = require('../models/order')
const User = require('../models/user');
const { Op } = require("sequelize");


const OrderController = {};

OrderController.getOrdersFromUser = async (req, res) => {
    try {
        let mail = req.params.mail
        let user = await User.findOne({
            where: { mail: mail },
            include: {
                model: Order,
                attributes: ['id_order', 'startedAt', "endedAt", "filmIdFilm"],
                include: {
                    model: Film,
                    attributes: ["title", "genre", "poster"],
                    
                }
            }
            // attributes: ['mail', 'name']
        })
        if (!user) {
            res.status(400).send('user not found')
            return;
        }
        // console.log('user found:', user)
        res.status(200).json(user.orders)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

// OrderController.getActiveOrdersFromUser = async (req, res) => {
//     try {
//         let mail = req.params.mail
//         let user = await User.findOne({
//             where: {
//                 mail: mail,
//                 endedAt: { [Op.gte]: Date.now() }
//             },
//             include: {
//                 model: Order,
//                 attributes: ['id_order', 'startedAt', "endedAt", "filmIdFilm"],
//                 include: {
//                     model: Film,
//                     attributes: ["title", "genre", "poster"],
//                 }
//             }
//         })
//         if (!user) {
//             res.status(400).send('user not found')
//             return;
//         }
//         // console.log('user found:', user)
//         res.status(200).json(user.orders)
//     } catch (error) {
//         res.status(500).send(error)
//         console.log(error)
//     }
// }

OrderController.getActiveOrdersFromUser = async (req, res) => {
    try {
        let mail = req.params.mail
        let orders = await Order.findAll({
            where: {
                userMail: mail,
                endedAt: { [Op.gte]: Date.now() }
            },
            include: {
                model: Film,
                attributes: ["title", "genre", "poster"],

            }
        })
        if (!orders) {
            res.status(400).send('user not found')
            return;
        }
        // console.log('user found:', user)
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

OrderController.getAllOrders = async (req, res) => {
    try {
        let resp = await Order.findAll({
            include: {
                model: Film,
                attributes: ["title", "genre", "poster"],
                
            }
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
        console.log(err)
    }
}

OrderController.getAllActiveOrders = async (req, res) => {
    try {
        let resp = await Order.findAll({
            where: {
                endedAt: { [Op.gte]: Date.now() }
            },
            include: {
                model: Film,
                attributes: ["title", "genre", "poster"],
            }
        })
        if (!resp) {
            res.status(400).send('orders not found')
            return;
        }
        // console.log('user found:', user)
        res.status(200).json(resp)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

OrderController.postNewOrder = async (req, res) => {
    try {
        let data = req.body
        let resp = await Order.create({
            startedAt: data.startedAt,
            endedAt: data.endedAt,
            userMail: data.userMail,
            filmIdFilm: data.filmIdFilm

        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

OrderController.updateOrderById = async (req, res) => {
    try {
        let data = req.body
        let resp = await Order.update(
            {
                startedAt: data.startedAt,
                endedAt: data.endedAt,
            },
            {
                where: { id_order: data.id_order }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

module.exports = OrderController