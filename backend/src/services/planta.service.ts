import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const PlantaService = {
  getAll: () => prisma.planta.findMany(),

  getById: (id: number) => prisma.planta.findUnique({
    where: { id }
  }),

  create: (nome: string, descricao?: string) => prisma.planta.create({
    data: { nome, descricao }
  }),

  delete: (id: number) => prisma.planta.delete({
    where: { id }
  })
};
