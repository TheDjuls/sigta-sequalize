const { Router } = require('express');
const router = Router();

const { 
    getVehiculos,
    saveVehiculos,
    updateVehiculos,
    deleteVehiculos
} = require('../controllers/Vehiculos');


router.get('/', getVehiculos)
router.post('/', saveVehiculos)
router.put('/:id', updateVehiculos)
router.delete('/:id', deleteVehiculos)



module.exports = router;