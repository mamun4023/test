const mongoose = require("mongoose");

const actorSchema = new mongoose.Schema({
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

module.exports = new mongoose.model("Actor", actorSchema);
