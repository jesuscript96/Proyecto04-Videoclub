const User = require('../models/user')


const UserController = {}

// UserController.getPublicaciones = async (req, res) => {
//     try{
//         let usuario = req.params.usuario
//         let resp = await Perfil.findAll({
//             where: { nomUsuario: usuario},
//             include: {
//                 model: Publicacion,
//                 attributes: ['texto', 'likes']
//             },
//             attributes: ['nomUsuario', 'usuarioMail']
//         })
//         res.send(resp)
//     } catch (err) {
//         res.send(err)
//     }
// }


module.exports = UserController