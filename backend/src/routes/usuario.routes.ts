import { Router } from "express";
import { UsuarioController } from "../controllers/usuario.controller";

const router = Router();

router.get("/", UsuarioController.list);
router.get("/:id", UsuarioController.get);
router.post("/", UsuarioController.create);
router.delete("/:id", UsuarioController.delete);

export default router;
