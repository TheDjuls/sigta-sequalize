const express = require('express');
const app = express();
const sequelize = require('./database/db')
require('./database/relations')

// headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes

app.use('/api/Marcas', require('./src/routes/Marcas'));
app.use('/api/Modelos', require('./src/routes/Modelos'));
app.use('/api/Clientes', require('./src/routes/Clientes'));
app.use('/api/Vehiculos', require('./src/routes/Vehiculos'));



app.listen(5002, () => {
    console.log("Running")
    sequelize.sync({ force: true }).then(() => {
        console.log("bd connected")
    }).catch(error => {
        console.log(error)
    })
});