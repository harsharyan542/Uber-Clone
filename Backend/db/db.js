const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToDB = () => {
  mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error connecting to DB: ", err);
    });
};

module.exports = connectToDB;