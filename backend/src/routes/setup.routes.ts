import { Router } from "express";
import { SetupController } from "../controllers/setup.controller";

const router = Router();

router.get("/", SetupController.list);
router.get("/:id", SetupController.get);
router.post("/", SetupController.create);
router.delete("/:id", SetupController.delete);

export default router;
