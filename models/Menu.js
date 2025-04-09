const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  nome: { type: String, required: true }, // Nome do prato/bebida
  descricao: { type: String }, // Detalhes do prato/bebida
  preco: { type: Number, required: true }, // Preço (ex.: 30.00)
  categoria: {
    type: String,
    required: true,
    enum: ["Pratos principais", "Bebidas"], // Categorias permitidas
  },
  imagem: { type: String }, // Link opcional para imagem
});

module.exports = mongoose.model("Menu", MenuSchema, "menus");
