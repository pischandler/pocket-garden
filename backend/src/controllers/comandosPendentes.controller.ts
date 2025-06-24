import { Request, Response, NextFunction } from "express";
import { ComandosPendentesService } from "../services/comandosPendentes.service";

export const ComandosPendentesController = {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const comandos = await ComandosPendentesService.getAll();
      res.json(comandos);
    } catch (err) {
      next(err);
    }
  },

  async getBySetup(req: Request, res: Response, next: NextFunction) {
    try {
      const setupId = Number(req.params.setupId);
      const comandos = await ComandosPendentesService.getBySetup(setupId);
      res.json(comandos);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { setup_id, atuador_id, comando, enviado, resultado, resposta_timestamp, timestamp } = req.body;
      const novoComando = await ComandosPendentesService.create({
        setup_id,
        atuador_id,
        comando,
        enviado,
        resultado,
        resposta_timestamp: resposta_timestamp ? new Date(resposta_timestamp) : null,
        timestamp: timestamp ? new Date(timestamp) : new Date(),
      });
      res.status(201).json(novoComando);
    } catch (err) {
      next(err);
    }
  },

  async markAsSent(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const comandoAtualizado = await ComandosPendentesService.markAsSent(id);
      res.json(comandoAtualizado);
    } catch (err) {
      next(err);
    }
  },
};
