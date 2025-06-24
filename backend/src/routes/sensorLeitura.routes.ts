import { Router } from "express";
import { SensorLeituraController } from "../controllers/sensorLeitura.controller";

const router = Router();

router.get("/", SensorLeituraController.list);
router.get("/setup/:setupId", SensorLeituraController.getBySetup);
router.post("/", SensorLeituraController.create);

export default router;
