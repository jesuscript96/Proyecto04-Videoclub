const User = require('../models/user')

const UserController = {};

UserController.getAllUsers = async (req, res) => {
    try {
        let resp = await User.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

UserController.getUserById = async (req, res) => {
    try {
        let mail = req.params.mail
        let resp = await User.findOne({
            where: { mail: mail }
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

UserController.postNewUser = async (req, res) => {
    try {
        let data = req.body
        let resp = await User.create({
            mail: data.mail,
            birth_Date: data.birth_Date,
            password: data.password,
            name: data.name,
            roleIdRole: data.roleIdRole
        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

UserController.updateUserById = async (req, res) => {
    try {
        let data = req.body
        let resp = await User.update(
            {
                // mail: data.mail,
                // password: data.password,
                name: data.name
            },
            {
                where: { mail: data.mail }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

UserController.deleteUserById = async (req, res) => {
    try {
        let mail = req.params.mail
        let resp = await User.destroy({
            where: { mail: mail }
        })

        if (resp == 1) {
            res.send("Se ha eliminado el perfil correctamente")
        } else {
            res.status(400).send("No se ha podido eliminar el registro")
        }

    } catch (err) {
        res.send(err)
    }
}

module.exports = UserController