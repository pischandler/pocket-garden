import { Router } from "express";
import { PlantaPresetsController } from "../controllers/plantaPresets.controller";

const router = Router();

router.get("/", PlantaPresetsController.list);
router.get("/:nome", PlantaPresetsController.getByName);

export default router;
