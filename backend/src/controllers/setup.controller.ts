import { Request, Response, NextFunction } from "express";
import { SetupService } from "../services/setup.service";

export const SetupController = {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const setups = await SetupService.getAll();
      res.json(setups);
    } catch (err) {
      next(err);
    }
  },

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const setup = await SetupService.getById(id);
      if (!setup) return res.status(404).json({ message: "Setup não encontrado" });
      res.json(setup);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { nome, codigo, usuario_id, planta_id, data_inicio } = req.body;
      const newSetup = await SetupService.create({
        nome,
        codigo,
        usuario_id,
        planta_id,
        data_inicio: new Date(data_inicio),
      });
      res.status(201).json(newSetup);
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await SetupService.delete(id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
