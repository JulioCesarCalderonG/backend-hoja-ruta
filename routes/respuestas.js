const { Router } = require("express");
const { getRespuestas, getRespuesta, putRespuesta, deleteRespuesta, postRespuestaInterno } = require("../controllers/respuestas");



const router = Router();




router.get('/',getRespuestas);
router.get('/:id',getRespuesta);
router.post('/tramite/interno',postRespuestaInterno);
router.put('/:id',putRespuesta);
router.delete('/:id',deleteRespuesta);



module.exports = router;
