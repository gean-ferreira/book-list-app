const express = require("express");
const mysql = require("mysql");
const app = express();
const PORT = 3001;

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "P@ssw0rd",
  database: "library",
});

app.listen(PORT, () => {
  console.log(`App rodando na porta ${PORT}`);
});

con.connect((err) => {
  if (err) return console.log("Erro ao conectar ao banco de dados", err);
  else console.log("Conexao estabelecida com sucesso ao banco de dados");
});

con.end((err) => {
  if (err) return console.log("Erro ao finalizar o banco de dados", err);
  console.log("A conexao com o banco de dados foi finalizada");
});
