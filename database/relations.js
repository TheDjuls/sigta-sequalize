const modelos = require('./models/Modelos')
const marcas = require('./models/Marcas')
const clientes = require('./models/Clientes')
const vehiculos = require('./models/Vehiculos')


// Una marca tiene modelos
marcas.hasMany(modelos,{as:"MODELOS",foreignKey:"ID_MARCA"})
// Un modelos pertenes a una marca
modelos.belongsTo(marcas,{as:"MARCA",foreignKey:"ID_MARCA"})
// Un vehiculo pertenece a un cliente
vehiculos.belongsTo(clientes,{as:"VEHICULOS",foreignKey:"ID_CLIENTE"})
//un cliente tiene vehiculos
clientes.hasMany(vehiculos,{as:"VEHICULOS",foreignKey:"ID_CLIENTE"})
//un vehiculo pertenence a un modelo
vehiculos.belongsTo(modelos,{as:"MODELOS",foreignKey:"ID_MODELO"})
//un vehiculo pertenece a una marca
vehiculos.belongsTo(marcas,{as:"MARCAS",foreignKey:"ID_MARCA"})
//un modelo puede estar en varios vehiculos
modelos.hasMany(vehiculos,{as:"VEHICULOS",foreignKey:"ID_MODELO"})
//una marca puede estar en varios vehiculos
marcas.hasMany(vehiculos,{as:"VEHICULOS",foreignKey:"ID_MARCA"})