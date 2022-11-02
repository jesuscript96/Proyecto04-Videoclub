const Order = require('../models/order')
const User = require('../models/user')


const OrderController = {}

ProfileController.getPublicaciones = async (req, res) => {
    try{
        let usuario = req.params.usuario
        let resp = await Perfil.findAll({
            where: { nomUsuario: usuario},
            include: {
                model: Publicacion,
                attributes: ['texto', 'likes']
            },
            attributes: ['nomUsuario', 'usuarioMail']
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}


module.exports = OrderController