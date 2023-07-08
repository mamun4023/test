const mongoose = require("mongoose");

const directorSchema = new mongoose.Schema({
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

module.exports = new mongoose.model("Director", directorSchema);
