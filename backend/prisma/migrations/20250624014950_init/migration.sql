-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_emails" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "email" VARCHAR(150) NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "usuarios_emails_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios_telefones" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "telefone" VARCHAR(20) NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "usuarios_telefones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "credenciais_usuarios" (
    "id" SERIAL NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "usuario" VARCHAR(50) NOT NULL,
    "senha" VARCHAR(255) NOT NULL,

    CONSTRAINT "credenciais_usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planta" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "planta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parametro_luminosidade" (
    "id" SERIAL NOT NULL,
    "planta_id" INTEGER NOT NULL,
    "iluminacao_min" DOUBLE PRECISION NOT NULL,
    "iluminacao_max" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "parametro_luminosidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parametro_umidade" (
    "id" SERIAL NOT NULL,
    "planta_id" INTEGER NOT NULL,
    "umidade_min" DOUBLE PRECISION NOT NULL,
    "umidade_max" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "parametro_umidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parametro_temperatura" (
    "id" SERIAL NOT NULL,
    "planta_id" INTEGER NOT NULL,
    "temperatura_min" DOUBLE PRECISION NOT NULL,
    "temperatura_max" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "parametro_temperatura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "parametro_ventilacao" (
    "id" SERIAL NOT NULL,
    "planta_id" INTEGER NOT NULL,
    "ventilacao" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "parametro_ventilacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setup" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "codigo" VARCHAR(50) NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "planta_id" INTEGER NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "setup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "setup_status" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(50) NOT NULL,

    CONSTRAINT "setup_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "status_setup" (
    "id" SERIAL NOT NULL,
    "setup_id" INTEGER NOT NULL,
    "setup_status_id" INTEGER NOT NULL,

    CONSTRAINT "status_setup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atuador_tipo" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,

    CONSTRAINT "atuador_tipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atuadores" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "tipo_id" INTEGER NOT NULL,

    CONSTRAINT "atuadores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "motivo_atuacao" (
    "id" SERIAL NOT NULL,
    "descricao" VARCHAR(100) NOT NULL,

    CONSTRAINT "motivo_atuacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log_atuacao" (
    "id" SERIAL NOT NULL,
    "setup_id" INTEGER NOT NULL,
    "atuador_id" INTEGER NOT NULL,
    "acao" VARCHAR(50) NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "motivo" TEXT NOT NULL,
    "motivo_id" INTEGER NOT NULL,

    CONSTRAINT "log_atuacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensor_tipo" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(50) NOT NULL,

    CONSTRAINT "sensor_tipo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sensor_leitura" (
    "id" SERIAL NOT NULL,
    "setup_id" INTEGER NOT NULL,
    "sensor_tipo_id" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sensor_leitura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comandos_pendentes" (
    "id" SERIAL NOT NULL,
    "setup_id" INTEGER NOT NULL,
    "atuador_id" INTEGER NOT NULL,
    "comando" VARCHAR(50) NOT NULL,
    "enviado" BOOLEAN NOT NULL,
    "resultado" VARCHAR(100),
    "resposta_timestamp" TIMESTAMP(3),
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "comandos_pendentes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "log_esp_conexao" (
    "id" SERIAL NOT NULL,
    "setup_id" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "status" VARCHAR(20) NOT NULL,

    CONSTRAINT "log_esp_conexao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "setup_codigo_key" ON "setup"("codigo");

-- AddForeignKey
ALTER TABLE "usuarios_emails" ADD CONSTRAINT "usuarios_emails_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios_telefones" ADD CONSTRAINT "usuarios_telefones_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "credenciais_usuarios" ADD CONSTRAINT "credenciais_usuarios_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parametro_luminosidade" ADD CONSTRAINT "parametro_luminosidade_planta_id_fkey" FOREIGN KEY ("planta_id") REFERENCES "planta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parametro_umidade" ADD CONSTRAINT "parametro_umidade_planta_id_fkey" FOREIGN KEY ("planta_id") REFERENCES "planta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parametro_temperatura" ADD CONSTRAINT "parametro_temperatura_planta_id_fkey" FOREIGN KEY ("planta_id") REFERENCES "planta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "parametro_ventilacao" ADD CONSTRAINT "parametro_ventilacao_planta_id_fkey" FOREIGN KEY ("planta_id") REFERENCES "planta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setup" ADD CONSTRAINT "setup_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "setup" ADD CONSTRAINT "setup_planta_id_fkey" FOREIGN KEY ("planta_id") REFERENCES "planta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "status_setup" ADD CONSTRAINT "status_setup_setup_id_fkey" FOREIGN KEY ("setup_id") REFERENCES "setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "status_setup" ADD CONSTRAINT "status_setup_setup_status_id_fkey" FOREIGN KEY ("setup_status_id") REFERENCES "setup_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atuadores" ADD CONSTRAINT "atuadores_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "atuador_tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_atuacao" ADD CONSTRAINT "log_atuacao_setup_id_fkey" FOREIGN KEY ("setup_id") REFERENCES "setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_atuacao" ADD CONSTRAINT "log_atuacao_atuador_id_fkey" FOREIGN KEY ("atuador_id") REFERENCES "atuadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_atuacao" ADD CONSTRAINT "log_atuacao_motivo_id_fkey" FOREIGN KEY ("motivo_id") REFERENCES "motivo_atuacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sensor_leitura" ADD CONSTRAINT "sensor_leitura_setup_id_fkey" FOREIGN KEY ("setup_id") REFERENCES "setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sensor_leitura" ADD CONSTRAINT "sensor_leitura_sensor_tipo_id_fkey" FOREIGN KEY ("sensor_tipo_id") REFERENCES "sensor_tipo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comandos_pendentes" ADD CONSTRAINT "comandos_pendentes_setup_id_fkey" FOREIGN KEY ("setup_id") REFERENCES "setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comandos_pendentes" ADD CONSTRAINT "comandos_pendentes_atuador_id_fkey" FOREIGN KEY ("atuador_id") REFERENCES "atuadores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "log_esp_conexao" ADD CONSTRAINT "log_esp_conexao_setup_id_fkey" FOREIGN KEY ("setup_id") REFERENCES "setup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
