
const Vehiculo = require('../../database/models/Vehiculos')

const getVehiculos = async (req, res) => {
    try {
        let respuesta =await Vehiculo.findAll({
            include:["MARCAS","MODELOS"]
        });
        res.send(respuesta)
        
    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const saveVehiculos = async (req, res) => {
    const { nombre } = req.body;
    try {
       await Vehiculo.create({
           NOMBRE:nombre
       }).then(marca=>{
           res.json(marca)
       }).catch(err=>{
           res.json(err)
       })
    
    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const updateVehiculos = async (req, res) => {
    const { nombre } = req.body;
    try {
        await Vehiculo.update({
            NOMBRE:nombre
        },{
            where:{
                ID_MARCA:req.params.id
            }
        }).then(marca=>{
            res.json(marca)
        }).catch(err=>{
            res.json(err)
        })

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const deleteVehiculos = async (req, res) => {
    try {
        await Vehiculo.destroy({
            where:{
                ID_MARCA:req.params.id
            }
        }).then(marca=>{
            res.json(marca)
        }).catch(err=>{
            res.json(err)
        })
    
    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

module.exports = {
    getVehiculos,
    saveVehiculos,
    updateVehiculos,
    deleteVehiculos
}