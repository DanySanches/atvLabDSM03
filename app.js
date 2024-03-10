const express = require("express");
//import agendamentos from './banco'
const agendamentos = require("./banco");
const app = express();

app.listen(8081, function () {
  console.log("Servidor Ativo!");
});

app.get(
  "/cadastrar/:nome/:endereco/:bairro/:cep/:cidade/:estado/:obs",
  function (req, res) {
    agendamentos.create({
      nome: req.params.nome,
      endereco: req.params.endereco,
      bairro: req.params.bairro,
      cep: req.params.cep,
      cidade: req.params.cidade,
      estado: req.params.estado,
      obs: req.params.obs
    });
    res.send("dados cadastrados com  sucesso");
  }
);
