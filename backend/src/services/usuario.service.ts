import { prisma } from "../prisma/client";

export const UsuarioService = {
  getAll: () => prisma.usuarios.findMany(),
  getById: (id: number) => prisma.usuarios.findUnique({ where: { id } }),
  create: (nome: string) => prisma.usuarios.create({ data: { nome } }),
  delete: (id: number) => prisma.usuarios.delete({ where: { id } }),
};
