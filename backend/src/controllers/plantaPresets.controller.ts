import { Request, Response, NextFunction } from "express";
import plantasPresetsJson from "../data/plantasPresets.json";
import { PlantasPresetsType } from "../interfaces/plantaPreset";

const plantasPresets: PlantasPresetsType = plantasPresetsJson as PlantasPresetsType;

export const PlantaPresetsController = {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      res.json(plantasPresets);
    } catch (err) {
      next(err);
    }
  },

  async getByName(req: Request, res: Response, next: NextFunction) {
    try {
      const { nome } = req.params;
      const preset = plantasPresets[nome.toLowerCase()];

      if (!preset) {
        return res.status(404).json({ message: "Planta não encontrada" });
      }

      res.json(preset);
    } catch (err) {
      next(err);
    }
  }
};
