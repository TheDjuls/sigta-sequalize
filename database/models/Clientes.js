const {Model,DataTypes} = require ('sequelize')
const sequelize = require('../db')

class Cliente extends Model {}
Cliente.init({
    ID_CLIENTE: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },  
    NOMBRE:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notNull:{
                args:true,
                msg:"El nombre no puede estar vacio"
            },
            len:{
                args:[3,255]
            }
        }
    },
    APELLIDOS:{
        type:DataTypes.STRING,
        validate:{
            len:{
                args:[3,255],
                msg:"El apellido debe ser mayor a 3 caracteres"
            }
        }
    },DIRECCION:{
        type:DataTypes.TEXT,
        validate:{
            len:{
                args:[3,255],
                msg:"El direccion debe ser mayor a 3 caracteres"
            }
        }
    },TELEFONO:{
        type:DataTypes.STRING(12),
        validate:{
            isNumeric:{
                args:true,
                msg:"El telefono solo debe contener numeros"
            },
            len:{
                args:[10,12],
                msg:"El telefono debe tener de 10 a 12 digitos"
            }
        }
    }   
},{
    sequelize,
    modelName:"cliente"
})

module.exports=Cliente