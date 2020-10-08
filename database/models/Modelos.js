const {Model,DataTypes} = require ('sequelize')
const sequelize = require('../db')

class Modelo extends Model {}
Modelo.init({
    ID_MODELO: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },  
    MODELO:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                args:true,
                msg:"El modelo no puede estar vacio"
            },
            len:{
                args:[3,255],
                msg:"El modelo debe ser mayor a 3 y menro a 22 caracteres"
            }
        }
    }
},{
    sequelize,
    modelName:"modelo"
})

module.exports=Modelo