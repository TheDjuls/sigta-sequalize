
const Vehiculo = require('../../database/models/Vehiculos')

const getVehiculos = async (req, res) => {
    try {
        let respuesta =await Vehiculo.findAll({
            include:["MARCAS","MODELOS","CLIENTES"]
        });
        res.send(respuesta)
        
    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const saveVehiculos = async (req, res) => {
    const { id_cliente,id_marca,id_modelo,color,anio,matricula } = req.body;
    try {
       await Vehiculo.create({
           ID_CLIENTE:id_cliente,
           ID_MARCA:id_marca,
           ID_MODELO:id_modelo,
           ANIO:anio,
           MATRICULA:matricula,
           COLOR:color
       }).then(v=>{
           res.json(v)
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