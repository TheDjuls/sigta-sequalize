
const Usuario = require('../../database/models/Usuarios')

const getUsuarios = async (req, res) => {
    try {
        let respuesta = await Usuario.findAll();
        res.send(respuesta)

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const saveUsuarios = async (req, res) => {
    const { usuario, password } = req.body;
    try {
        await Usuario.create({
            USUARIO: usuario,
            PASSWORD: password
        }).then(Usuario => {
            res.json(Usuario)
        }).catch(err => {
            res.json(err)
        })

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const updateUsuarios = async (req, res) => {
    const {usuario, password } = req.body;
    try {
        await Usuario.update({
            USUARIO: usuario,
            PASSWORD: password
        }, {
            where: {
                ID_USUARIO: req.params.id
            }
        }).then(Usuario => {
            res.json(Usuario)
        }).catch(err => {
            res.json(err)
        })

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const deleteUsuarios = async (req, res) => {
    try {
        await Usuario.destroy({
            where: {
                ID_USUARIO: req.params.id
            }
        }).then(Usuario => {
            res.json(Usuario)
        }).catch(err => {
            res.json(err)
        })

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

module.exports = {
    getUsuarios,
    saveUsuarios,
    updateUsuarios,
    deleteUsuarios
}