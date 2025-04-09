const express = require("express");
const Menu = require("../models/Menu");
const router = express.Router();

router.get("/menu", async (req, res) => {
  try {
    const itens = await Menu.find().lean();
    console.log("Itens encontrados:", itens.length);
    return res.status(200).json(itens);
  } catch (err) {
    console.error("ERRO DETALHADO:", err);
    res.status(500).json({ error: "Erro ao buscar itens do menu" });
  }
});

// Rota para adicionar um novo item ao menu
router.post("/menu", async (req, res) => {
  try {
    const novoItem = new Menu(req.body);
    await novoItem.save();
    res.status(201).json(novoItem);
  } catch (err) {
    console.error("ERRO DETALHADO:", err);
    res.status(500).json({ error: "Erro ao adicionar item ao menu" });
  }
});

// Rota para excluir um item do menu
router.delete("/menu/:id", async (req, res) => {
  try {
    const item = await Menu.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ error: "Item não encontrado" });
    res.status(200).json({ mensagem: "Item excluído com sucesso" });
  } catch (err) {
    console.error("ERRO DETALHADO:", err);
    res.status(500).json({ error: "Erro ao excluir item" });
  }
});

module.exports = router;
