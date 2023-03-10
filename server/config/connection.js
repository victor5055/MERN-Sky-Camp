const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require("dotenv").config();


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/MERN-Sky-Camp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;