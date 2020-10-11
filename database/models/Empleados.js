const {Model,DataTypes} = require ('sequelize')
const sequelize = require('../db')

class Empleado extends Model {}
Empleado.init({
    ID_EMPLEADO: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    NOMBRE: {
        type: DataTypes.STRING
    },  
    APELLIDOS:{
        type:DataTypes.STRING
    },
    PUESTO:{
        type: DataTypes.STRING
    }
},{
    sequelize,
    modelName:"empleado"
})

module.exports=Empleado 