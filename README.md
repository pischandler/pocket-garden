🌱 Pocket Garden – Sistema de Horta Automatizada com ESP32 + IA
Um sistema de monitoramento e automação de hortas usando ESP32, sensores, atuadores e uma aplicação full stack com Node.js, PostgreSQL, Prisma, React, Vite, Tailwind CSS e Shadcn UI.

📌 Stack Utilizada
📍 Backend
Node.js

Express

Prisma ORM

PostgreSQL

Arquitetura: Controllers, Services, Routes, Middlewares

Gerenciamento de Migrations: Prisma Migrate

📍 Frontend
React + TypeScript

Vite

Tailwind CSS

Shadcn UI (com CSS Variables)

Axios (para requisições HTTP)

📌 Estrutura de Diretórios
Backend (/backend)
bash
Copiar
Editar
/src
  /controllers
  /routes
  /services
  /middlewares
  /interfaces
  /data
prisma/schema.prisma
.env
Frontend (/frontend)
bash
Copiar
Editar
/src
  /components
  /pages
  /services/api.ts
  /interfaces
tailwind.config.ts
tsconfig.json
📌 Banco de Dados (PostgreSQL)
Estrutura de tabelas:
usuarios, usuarios_emails, usuarios_telefones, credenciais_usuarios

planta, parametro_luminosidade, parametro_umidade, parametro_temperatura, parametro_ventilacao

setup, status_setup, setup_status

atuadores, atuador_tipo, motivo_atuacao, log_atuacao

sensor_tipo, sensor_leitura

comandos_pendentes, log_esp_conexao

(Todas as tabelas criadas via Prisma Migrate)

📌 Como Rodar o Projeto
📍 1. Rodando o Backend
bash
Copiar
Editar
cd backend
npm install
npx prisma migrate dev
npm run dev
📍 2. Rodando o Frontend
bash
Copiar
Editar
cd frontend
npm install
npm run dev
