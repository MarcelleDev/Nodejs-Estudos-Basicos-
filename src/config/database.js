module.exports = {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "secret",
    database: "teste-dominando-nodejs",
    define: {
      timestamps: true, // Corrigido para o plural
      underscored: true, 
      underscoredAll: true, 
    }
  }
  