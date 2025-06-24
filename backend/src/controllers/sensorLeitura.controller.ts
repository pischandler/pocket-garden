import { Request, Response, NextFunction } from "express";
import { SensorLeituraService } from "../services/sensorLeitura.service";

export const SensorLeituraController = {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const leituras = await SensorLeituraService.getAll();
      res.json(leituras);
    } catch (err) {
      next(err);
    }
  },

  async getBySetup(req: Request, res: Response, next: NextFunction) {
    try {
      const setupId = Number(req.params.setupId);
      const leituras = await SensorLeituraService.getBySetup(setupId);
      res.json(leituras);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { setup_id, sensor_tipo_id, valor, timestamp } = req.body;
      const novaLeitura = await SensorLeituraService.create({
        setup_id,
        sensor_tipo_id,
        valor,
        timestamp: new Date(timestamp),
      });
      res.status(201).json(novaLeitura);
    } catch (err) {
      next(err);
    }
  },
};
