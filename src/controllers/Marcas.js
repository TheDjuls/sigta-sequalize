
const Marca = require('../../database/models/Marcas')

const getMarcas = async (req, res) => {
    try {
        let respuesta =await Marca.findAll({
            include:"MODELOS"
        });
        res.send(respuesta)
        
    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const saveMarcas = async (req, res) => {
    const { nombre } = req.body;
    try {
       await Marca.create({
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

const updateMarcas = async (req, res) => {
    const { nombre } = req.body;
    try {
        await Marca.update({
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

const deleteMarcas = async (req, res) => {
    try {
        await Marca.destroy({
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
    getMarcas,
    saveMarcas,
    updateMarcas,
    deleteMarcas
}