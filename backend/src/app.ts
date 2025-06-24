import express from "express";
import cors from "cors";
import usuarioRoutes from "./routes/usuario.routes";
import plantaRoutes from "./routes/planta.routes";
import plantaPresetRoutes from "./routes/plantaPresets.routes";
import { errorHandler } from "./middlewares/errorHandler";
import setupRoutes from "./routes/setup.routes";
import sensorLeituraRoutes from "./routes/sensorLeitura.routes";
import logAtuacaoRoutes from "./routes/logAtuacao.routes";
import comandosPendentesRoutes from "./routes/comandosPendentes.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios", usuarioRoutes);
app.use("/plantas", plantaRoutes);
app.use("/planta-presets", plantaPresetRoutes); 
app.use("/setups", setupRoutes);
app.use("/sensor-leituras", sensorLeituraRoutes);
app.use("/log-atuacoes", logAtuacaoRoutes);
app.use("/comandos-pendentes", comandosPendentesRoutes);


app.use(errorHandler);

export default app;
