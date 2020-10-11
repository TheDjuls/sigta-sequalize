const { Router } = require('express');
const router = Router();

const { 
    getUsuarios,
    saveUsuarios,
    updateUsuarios,
    deleteUsuarios
} = require('../controllers/Usuarios');


router.get('/', getUsuarios)
router.post('/', saveUsuarios)
router.put('/:id', updateUsuarios)
router.delete('/:id', deleteUsuarios)



module.exports = router;