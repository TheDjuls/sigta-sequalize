const Cliente = require('../../database/models/Clientes')

const getClientes = async (req, res) => {
    try {
        let respuesta = await Cliente.findAll();
        res.send(respuesta)

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const saveClientes = async (req, res) => {
    const { nombre, apellidos, direccion, telefono } = req.body;
    try {
        await Cliente.create({
            NOMBRE: nombre,
            APELLIDOS: apellidos,
            DIRECCION: direccion,
            TELEFONO: telefono
        }).then(cliente => {
            res.json(cliente)
        }).catch(err => {
            res.json(err)
        })

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const updateClientes = async (req, res) => {
    const { nombre, apellidos, direccion, telefono } = req.body;
    try {
        await Cliente.update({
            NOMBRE: nombre,
            APELLIDOS: apellidos,
            DIRECCION: direccion,
            TELEFONO: telefono
        }, {
            where: {
                ID_CLIENTE: req.params.id
            }
        }).then(cliente => {
            res.json(cliente)
        }).catch(err => {
            res.json(err)
        })

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const deleteClientes = async (req, res) => {
    try {
        await Cliente.destroy({
            where: {
                ID_CLIENTE: req.params.id
            }
        }).then(marca => {
            res.json(marca)
        }).catch(err => {
            res.json(err)
        })

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

module.exports = {
    getClientes,
    updateClientes,
    deleteClientes,
    saveClientes
}