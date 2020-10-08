const { Router } = require('express');
const router = Router();

const { 
    getModelos,
    saveModelos,
    updateModelos,
    deleteModelos
} = require('../controllers/Modelos');


router.get('/', getModelos)
router.post('/', saveModelos)
router.put('/:id', updateModelos)
router.delete('/:id', deleteModelos)



module.exports = router;