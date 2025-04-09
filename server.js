const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexão com MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.iptsnp9.mongodb.net/restaurante?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Rotas básicas
app.get("/", (req, res) => {
  res.send("API do Restaurante está funcionando!");
});

// Importar rotas
const menuRoutes = require("./routes/menuRoutes"); // Importar as rotas
app.use("/api", menuRoutes); // Usar as rotas com prefixo "/api"

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
