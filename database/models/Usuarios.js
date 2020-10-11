const {Model,DataTypes} = require ('sequelize')
const sequelize = require('../db')

class Usuario extends Model {}
Usuario.init({
    ID_USUARIO: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    USUARIO: {
        type: DataTypes.STRING
    },  
    PASSWORD:{
        type:DataTypes.STRING
    }
},{
    sequelize,
    modelName:"Usuario"
})

module.exports=Usuario 