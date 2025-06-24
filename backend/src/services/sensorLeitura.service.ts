import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const SensorLeituraService = {
  async getAll() {
    return prisma.sensor_leitura.findMany({
      include: {
        setup: true,
        sensor_tipo: true,
      },
    });
  },

  async getBySetup(setupId: number) {
    return prisma.sensor_leitura.findMany({
      where: { setup_id: setupId },
      include: {
        sensor_tipo: true,
      },
    });
  },

  async create(data: {
    setup_id: number;
    sensor_tipo_id: number;
    valor: number;
    timestamp: Date;
  }) {
    return prisma.sensor_leitura.create({
      data,
    });
  },
};
