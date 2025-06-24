import { Request, Response, NextFunction } from "express";
import { LogAtuacaoService } from "../services/logAtuacao.service";

export const LogAtuacaoController = {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const logs = await LogAtuacaoService.getAll();
      res.json(logs);
    } catch (err) {
      next(err);
    }
  },

  async getBySetup(req: Request, res: Response, next: NextFunction) {
    try {
      const setupId = Number(req.params.setupId);
      const logs = await LogAtuacaoService.getBySetup(setupId);
      res.json(logs);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { setup_id, atuador_id, acao, timestamp, motivo, motivo_id } = req.body;
      const novoLog = await LogAtuacaoService.create({
        setup_id,
        atuador_id,
        acao,
        timestamp: new Date(timestamp),
        motivo,
        motivo_id,
      });
      res.status(201).json(novoLog);
    } catch (err) {
      next(err);
    }
  },
};
