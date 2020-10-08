const {Model,DataTypes} = require ('sequelize')
const sequelize = require('../db')

class Marca extends Model {}
Marca.init({
    ID_MARCA: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },  
    NOMBRE:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isAlpha:{
                args:true,
                msg:"El nombre solo debe contener letras"
            },
            len:{
                args:[3,255]
            }
        }
    } 
},{
    sequelize,
    modelName:"marca"
})

module.exports=Marca