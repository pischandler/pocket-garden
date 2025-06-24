import { Router } from "express";
import { ComandosPendentesController } from "../controllers/comandosPendentes.controller";

const router = Router();

router.get("/", ComandosPendentesController.list);
router.get("/setup/:setupId", ComandosPendentesController.getBySetup);
router.post("/", ComandosPendentesController.create);
router.patch("/:id/enviar", ComandosPendentesController.markAsSent);

export default router;
