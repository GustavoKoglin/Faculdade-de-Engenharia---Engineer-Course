use lojadb;

// Inserção inicial dos clientes
db.vendas.insertMany([
  {
    nome: "João",
    vip: 1,
    email: "joao@email.com",
    telefone: ["9999-1111", "8888-1111"]
  },
  {
    nome: "Marcos",
    vip: 0,
    telefone: ["9999-2222"]
  },
  {
    nome: "Maria",
    vip: 1,
    email: "maria@email.com",
    telefone: ["9999-3333", "8888-3333", "9988-3000"]
  }
]);

// Atualização dos endereços
db.vendas.updateOne(
  { nome: "João" },
  { $set: { endereco: { rua: "Rua Um", numero: 1000, complemento: "Apto 1 Bloco 1", cidade: "São Paulo", estado: "SP" } } }
);
db.vendas.updateOne(
  { nome: "Marcos" },
  { $set: { endereco: { rua: "Rua Dois", numero: 4000, cidade: "Campinas", estado: "SP" } } }
);
db.vendas.updateOne(
  { nome: "Maria" },
  { $set: { endereco: { rua: "Rua Três", numero: 3000, cidade: "Londrina", estado: "PR" } } }
);

// Atualização das compras
db.vendas.updateOne(
  { nome: "João" },
  { $set: { compras: [ { produto: "Notebook", preco: 5000.00, quantidade: 1 } ] } }
);
db.vendas.updateOne(
  { nome: "Marcos" },
  { $set: { compras: [
      { produto: "Caderno", preco: 20.00, quantidade: 1 },
      { produto: "Caneta", preco: 3.00, quantidade: 5 },
      { produto: "Borracha", preco: 2.00, quantidade: 2 }
    ] } }
);
db.vendas.updateOne(
  { nome: "Maria" },
  { $set: { compras: [
      { produto: "Tablet", preco: 2500.00, quantidade: 1 },
      { produto: "Capa para tablet", preco: 50.00, quantidade: 1 }
    ] } }
);
