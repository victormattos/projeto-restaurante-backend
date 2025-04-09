const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com MongoDB
mongoose
  .connect(
    "mongodb+srv://admin:admin123@cluster0.iptsnp9.mongodb.net/restaurante?retryWrites=true&w=majority"
  )
  .then(() => console.log("Conectado ao MongoDB"))
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));

// Esquema simplificado
const MenuSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  categoria: String,
  imagem: String,
});

// Modelo direto apontando para coleção "menus"
const Menu = mongoose.model("Menu", MenuSchema, "menus");

// Rota de teste
app.get("/teste", async (req, res) => {
  try {
    const itens = await Menu.find(); // Busca todos os itens na coleção "menus"
    console.log("Itens encontrados:", itens.length); // Loga a quantidade de itens encontrados
    res.json(itens); // Retorna os itens em formato JSON
  } catch (err) {
    console.error("ERRO COMPLETO:", err); // Loga o erro detalhado no terminal
    res
      .status(500)
      .json({ erro: "Falha ao buscar itens", detalhes: err.message });
  }
});

// Iniciar servidor na porta 3500
app.listen(3500, () => {
  console.log("Servidor de teste rodando na porta 3500");
});
