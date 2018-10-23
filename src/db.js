const mongoose = require("mongoose");

const URL = "mongodb://admin:admin123@ds139523.mlab.com:39523/api-teste";

mongoose.connect(
  URL,
  { useNewUrlParser: true }
);

module.exports = mongoose;
