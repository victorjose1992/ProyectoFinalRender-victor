const mongoose = require('mongoose');
/*const uri =
  'mongodb+srv://victorjosemarcano:oE6CsG9SBhwfRnOm@cluster0.hx5zjes.mongodb.net/auth?retryWrites=true&w=majority&appName=Cluster0';*/

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URL);
    const { name, host } = db.connection;
    console.log(`Nombre de la BD ${name} host: ${host}`);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { connectDB };
