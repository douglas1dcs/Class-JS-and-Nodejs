const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@testenodejs.akrikgm.mongodb.net/database?retryWrites=true&w=majority&appName=testenodejs`
    );
    console.log("Conexão ao banco de dados concluída com sucesso!");
  } catch (error) {
    console.log("Ocorreu um erro ao se conectar com o banco de dados:", error);
  }
};

module.exports = connectToDatabase;
