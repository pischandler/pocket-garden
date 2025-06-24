import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const LogAtuacaoService = {
  async getAll() {
    return prisma.log_atuacao.findMany({
      include: {
        setup: true,
        atuador: true,
        motivo_atuacao: true,
      },
    });
  },

  async getBySetup(setupId: number) {
    return prisma.log_atuacao.findMany({
      where: { setup_id: setupId },
      include: {
        atuador: true,
        motivo_atuacao: true,
      },
    });
  },

  async create(data: {
    setup_id: number;
    atuador_id: number;
    acao: string;
    timestamp: Date;
    motivo: string;
    motivo_id: number;
  }) {
    return prisma.log_atuacao.create({
      data,
    });
  },
};
