
const Modelo = require('../../database/models/Modelos')

const getModelos = async (req, res) => {
    try {
        let respuesta =await Modelo.findAll({
            include:"MARCA"
            //SI DESEA FILTRAR POR CAMPOS
            //attributes:["ID_MARCA"]
        });
        res.send(respuesta)
        
    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const saveModelos = async (req, res) => {
    const { modelo,marca } = req.body;
    try {
       await Modelo.create({
           MODELO:modelo,
           ID_MARCA:marca
       }).then(Modelo=>{
           res.json(Modelo)
       }).catch(err=>{
           res.json(err)
       })
    
    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const updateModelos = async (req, res) => {
    const { modelo,marca } = req.body;
    try {
        await Modelo.update({
            MODELO:modelo,
            ID_MARCA:marca
        },{
            where:{
                ID_MODELO:req.params.id
            }
        }).then(Modelo=>{
            res.json(Modelo)
        }).catch(err=>{
            res.json(err)
        })

    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

const deleteModelos = async (req, res) => {
    try {
        await Modelo.destroy({
            where:{
                ID_MODELO:req.params.id
            }
        }).then(Modelo=>{
            res.json(Modelo)
        }).catch(err=>{
            res.json(err)
        })
    
    } catch (err) {
        res.status(500).send(err);
        console.log(`Error:${err}`);
    }
}

module.exports = {
    getModelos,
    saveModelos,
    updateModelos,
    deleteModelos
}