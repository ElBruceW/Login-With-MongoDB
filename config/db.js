const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db = () => {
  mongoose.connect(process.env.database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

require('../server/models/Usuario.js')

module.exports = db;
