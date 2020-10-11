
const Empleado = require('../../database/models/Empleados')

const getEmpleados = async (req, res) => {
    try {
        let respuesta = await Empleado.findAll();
        res.send(respuesta)

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const saveEmpleados = async (req, res) => {
    const { nombre, apellido, puesto } = req.body;
    try {
        await Empleado.create({
            NOMBRE: nombre,
            APELLIDOS: apellido,
            PUESTO: puesto
        }).then(empleado => {
            res.json(empleado)
        }).catch(err => {
            res.json(err)
        })

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const updateEmpleados = async (req, res) => {
    const { nombre, apellido, puesto } = req.body;
    try {
        await Empleado.update({
            NOMBRE: nombre,
            APELLIDOS: apellido,
            PUESTO: puesto
        }, {
            where: {
                ID_EMPLEADO: req.params.id
            }
        }).then(empleado => {
            res.json(empleado)
        }).catch(err => {
            res.json(err)
        })

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const deleteEmpleados = async (req, res) => {
    try {
        await Empleado.destroy({
            where: {
                ID_EMPLEADO: req.params.id
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
    getEmpleados,
    saveEmpleados,
    updateEmpleados,
    deleteEmpleados
}