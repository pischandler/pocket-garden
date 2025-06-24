import { Request, Response, NextFunction } from "express";
import { PlantaService } from "../services/planta.service";

export const PlantaController = {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const plantas = await PlantaService.getAll();
      res.json(plantas);
    } catch (err) {
      next(err);
    }
  },

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const planta = await PlantaService.getById(id);
      if (!planta) return res.status(404).json({ message: "Planta não encontrada" });
      res.json(planta);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { nome, descricao } = req.body;
      const newPlanta = await PlantaService.create(nome, descricao);
      res.status(201).json(newPlanta);
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await PlantaService.delete(id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
};
