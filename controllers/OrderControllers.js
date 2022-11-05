const Order = require('../models/order')
const User = require('../models/user')


const OrderController = {}; 

OrderController.getOrdersFromUser = async (req, res) => {
    try{
        let mail = req.params.mail
        console.log(mail)
        let resp = await User.findAll({
            where: { mail: mail},
            include: {
                model: Order,
                attributes: ['id_order', 'startedAt', "endedAt"]
            },
            attributes: ['mail', 'name']
        })
        res.send(resp)
    } catch (error) {
        res.send(error)
        console.log(error)
    }
}

OrderController.getAllOrders = async (req, res) => {
    try {
        let resp = await Order.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
        console.log(err)
    }
}

OrderController.postNewOrder = async (req, res) => {
    try {
        let data = req.body
        let resp = await Order.create({
            startedAt: data.startedAt,
            endedAt: data.endedAt,
            userMail: data.userMail,
            articleIdArticle: data.articleIdArticle

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