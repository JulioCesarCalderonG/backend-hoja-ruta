const { Router } = require("express");
const {
  getRespuestas,
  getRespuesta,
  putRespuesta,
  deleteRespuesta,
  postRespuestaInterno,
  putRespuestaInternoDerivado,
  putRespuestaInternoSinDerivado,
  putRespuestaExternoDerivado,
  putRespuestaExternoSinDerivado,
  putRespuestaInternoDerivadoVarios,
  putRespuestaExternoDerivadoVarios,
} = require("../controllers/respuestas");

const router = Router();

router.get("/", getRespuestas);
router.get("/:id", getRespuesta);
router.post("/tramite/interno", postRespuestaInterno);
router.put("/interno/derivado", putRespuestaInternoDerivado);
router.put("/interno/derivado-varios",putRespuestaInternoDerivadoVarios );
router.put("/interno/sin-derivado", putRespuestaInternoSinDerivado);
router.put("/externo/derivado", putRespuestaExternoDerivado);
router.put("/externo/derivado-varios", putRespuestaExternoDerivadoVarios);
router.put("/externo/sin-derivado", putRespuestaExternoSinDerivado);
router.put("/:id", putRespuesta);
router.delete("/:id", deleteRespuesta);

module.exports = router;
