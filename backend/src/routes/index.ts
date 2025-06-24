import { Router } from 'express';
import usuariosRoutes from './usuario.routes';

const router = Router();

router.use('/usuarios', usuariosRoutes);

export default router;
