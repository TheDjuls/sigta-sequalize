const { Router } = require('express');
const router = Router();

const { 
    getClientes,
    saveClientes,
    updateClientes,
    deleteClientes
} = require('../controllers/Clientes');


router.get('/', getClientes)
router.post('/', saveClientes)
router.put('/:id', updateClientes)
router.delete('/:id', deleteClientes)



module.exports = router;