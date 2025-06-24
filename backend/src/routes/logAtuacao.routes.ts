import { Router } from "express";
import { LogAtuacaoController } from "../controllers/logAtuacao.controller";

const router = Router();

router.get("/", LogAtuacaoController.list);
router.get("/setup/:setupId", LogAtuacaoController.getBySetup);
router.post("/", LogAtuacaoController.create);

export default router;
