use lojadb;

// 1. Retornar todos os documentos da collection
db.vendas.find().pretty();

// 2. Localizar informações da cliente "Maria"
db.vendas.find({ nome: "Maria" }).pretty();

// 3. Buscar clientes VIPs (vip = 1), retornando apenas o nome
db.vendas.find({ vip: 1 }, { nome: 1, _id: 0 }).pretty();

// 4. Exibir as compras efetuadas por "Marcos"
db.vendas.find({ nome: "Marcos" }, { compras: 1, _id: 0 }).pretty();

// 5. Retornar todos os nomes de produtos comprados por todos os clientes
db.vendas.find({}, { "compras.produto": 1, _id: 0 }).pretty();
