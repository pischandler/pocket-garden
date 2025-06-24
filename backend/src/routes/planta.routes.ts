import { Router } from "express";
import { PlantaController } from "../controllers/planta.controller";

const router = Router();

router.get("/", PlantaController.list);
router.get("/:id", PlantaController.get);
router.post("/", PlantaController.create);
router.delete("/:id", PlantaController.delete);

export default router;
