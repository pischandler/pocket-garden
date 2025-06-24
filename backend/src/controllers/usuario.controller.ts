import { Request, Response, NextFunction } from "express";
import { UsuarioService } from "../services/usuario.service";

export const UsuarioController = {
  async list(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UsuarioService.getAll();
      res.json(users);
    } catch (err) {
      next(err);
    }
  },

  async get(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const user = await UsuarioService.getById(id);
      if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
      res.json(user);
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { nome } = req.body;
      const newUser = await UsuarioService.create(nome);
      res.status(201).json(newUser);
    } catch (err) {
      next(err);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await UsuarioService.delete(id);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
