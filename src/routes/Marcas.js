const { Router } = require('express');
const router = Router();

const { 
    getMarcas,
    saveMarcas,
    updateMarcas,
    deleteMarcas
} = require('../controllers/Marcas');


router.get('/', getMarcas)
router.post('/', saveMarcas)
router.put('/:id', updateMarcas)
router.delete('/:id', deleteMarcas)



module.exports = router;