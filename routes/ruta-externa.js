const { Router } = require("express");
const { getRutaExternas, getRutaExterna, postRutaExterna, putRutaExterna, deleteRutaExterna, getTramiteDerivado, getTramiteExternoGeneral } = require("../controllers/ruta-externas");
const { validarCampos, validarJWT } = require("../middlewares");



const router = Router();




router.get('/',[
    validarJWT,
    validarCampos
],getRutaExternas);
router.get('/:tramite/derivado',[
    validarJWT,
    validarCampos
],getTramiteDerivado);
router.get('/tramite/externo/general',[
    validarCampos
], getTramiteExternoGeneral)
router.get('/:codigo',getRutaExterna)
router.post('/',postRutaExterna);
router.put('/:codigo',putRutaExterna);
router.delete('/:codigo',deleteRutaExterna);



module.exports = router;
