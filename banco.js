const Sequelize = require("sequelize")
const sequelize = new Sequelize("dsm", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(function () {
    console.log("conectado com sucesso!");
  })
  .catch(function (erro) {
    console.log("Falha ao conectar: " + erro);
  });

const agendamentos = sequelize.define("agendamentos", {
  nome: {
    type: Sequelize.STRING,
  },
  endereco: {
    type: Sequelize.STRING,
  },
  bairro: {
    type: Sequelize.STRING,
  },
  cep: {
    type: Sequelize.STRING,
  },
  cidade: {
    type: Sequelize.STRING,
  },
  estado: {
    type: Sequelize.STRING,
  },
  obs: {
    type: Sequelize.STRING,
  },
});

//agendamentos.sync({force: true})

/*agendamentos.create({
  nome: "Paçoca",
  endereco: "rua dos  gatos",
  bairro: " gatolandia",
  cep: "77777-777",
  cidade: "São Paulo",
  estado: "SP",
  obs: "Canjica",
});*/

module.exports = agendamentos
