import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const ComandosPendentesService = {
  async getAll() {
    return prisma.comandos_pendentes.findMany({
      include: {
        setup: true,
        atuador: true,
      },
    });
  },

  async getBySetup(setupId: number) {
    return prisma.comandos_pendentes.findMany({
      where: { setup_id: setupId },
      include: {
        atuador: true,
      },
    });
  },

  async create(data: {
    setup_id: number;
    atuador_id: number;
    comando: string;
    enviado: boolean;
    resultado: string;
    resposta_timestamp: Date | null;
    timestamp: Date;
  }) {
    return prisma.comandos_pendentes.create({
      data,
    });
  },

  async markAsSent(id: number) {
    return prisma.comandos_pendentes.update({
      where: { id },
      data: { enviado: true, resposta_timestamp: new Date() },
    });
  },
};
