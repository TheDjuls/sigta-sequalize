const {Model,DataTypes} = require ('sequelize')
const sequelize = require('../db')

class Vehiculo extends Model {}
Vehiculo.init({
    ID_VEHICULO: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    MATRICULA: {
        type: DataTypes.STRING(25)
    },  
    COLOR:{
        type:DataTypes.STRING
    },
    ANIO:{
        type: DataTypes.INTEGER
    }
},{
    sequelize,
    modelName:"vehiculo"
})

module.exports=Vehiculo 