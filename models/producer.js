const mongoose = require("mongoose");

const producerSchema = new mongoose.Schema({
   name: {
      type: String,
   },
   age: {
      type: String,
   },
   category: {
      type: String,
   },
});

module.exports = mongoose.model("Producer", producerSchema);
