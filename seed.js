const mongoose = require("mongoose");
const Menu = require("./models/Menu");

// Substitua com suas credenciais reais
const uri =
  "mongodb+srv://admin:admin123@cluster0.iptsnp9.mongodb.net/restaurante?retryWrites=true&w=majority";

// Lista reduzida de itens do menu
const itensDoMenu = [
  {
    nome: "Bife Acebolado",
    descricao: "Acompanha: Bife acebolado, arroz, feijão, fritas, salada",
    preco: 30.0,
    categoria: "Pratos principais",
    imagem:
      "https://t4.ftcdn.net/jpg/05/51/00/19/360_F_551001956_VG7YBMoslLKNI6yVB1BS4CAxSrUX4rAd.jpg",
  },
  {
    nome: "Bife à Parmegiana",
    descricao: "Acompanha: Arroz, fritas, feijão (opcional), salada",
    preco: 40.0,
    categoria: "Pratos principais",
    imagem:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/60/e3/db/parmegiana-de-carne-arroz.jpg",
  },
  {
    nome: "Frango à Parmegiana",
    descricao: "Acompanha: Arroz, fritas, feijão (opcional), salada",
    preco: 35.0,
    categoria: "Pratos principais",
    imagem:
      "https://t3.ftcdn.net/jpg/04/47/67/78/360_F_447677856_SRAxwThp2I0nUFsRXu1h3lEvpaslV7YN.jpg",
  },
  {
    nome: "Filé de Frango",
    descricao: "Acompanha: Arroz, feijão, fritas, salada",
    preco: 28.0,
    categoria: "Pratos principais",
    imagem:
      "https://s3-sa-east-1.amazonaws.com/loja2/70ff4c569495a9f24a03421e3d33bc2a.jpg",
  },
  {
    nome: "Água Mineral 200ml",
    descricao: "Água mineral sem gás",
    preco: 5.0,
    categoria: "Bebidas",
    imagem:
      "https://png.pngtree.com/png-vector/20240913/ourmid/pngtree-mineral-water-bottles-png-image_12926881.png",
  },
  {
    nome: "Refrigerante Lata 350ml",
    descricao: "Diversas marcas (Coca-Cola, Guaraná, etc.)",
    preco: 5.0,
    categoria: "Bebidas",
    imagem:
      "https://acarajedajaira.lojatop.net/_core/_uploads/44/2022/06/2145160622jke4cdfbif.png",
  },
];

// Função para popular o banco
async function popularBanco() {
  try {
    await mongoose.connect(uri);
    console.log("Conectado ao banco de dados!");

    await Menu.deleteMany({}); // Limpa a coleção
    await Menu.insertMany(itensDoMenu); // Insere os itens

    console.log("Dados inseridos com sucesso!");
    process.exit();
  } catch (erro) {
    console.error("Erro:", erro);
    process.exit(1);
  }
}

popularBanco();
