const { Router } = require('express');
const router = Router();

const { 
    getEmpleados,
    saveEmpleados,
    updateEmpleados,
    deleteEmpleados
} = require('../controllers/Empleados');


router.get('/', getEmpleados)
router.post('/', saveEmpleados)
router.put('/:id', updateEmpleados)
router.delete('/:id', deleteEmpleados)



module.exports = router;