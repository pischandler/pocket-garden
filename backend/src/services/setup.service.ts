import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const SetupService = {
  async getAll() {
    return prisma.setup.findMany({
      include: {
        planta: true,
        usuario: true,
      },
    });
  },

  async getById(id: number) {
    return prisma.setup.findUnique({
      where: { id },
      include: {
        planta: true,
        usuario: true,
      },
    });
  },

  async create(data: {
    nome: string;
    codigo: string;
    usuario_id: number;
    planta_id: number;
    data_inicio: Date;
  }) {
    return prisma.setup.create({
      data,
    });
  },

  async delete(id: number) {
    return prisma.setup.delete({
      where: { id },
    });
  },
};
