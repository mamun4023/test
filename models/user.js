const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: {
      type: String,
   },
   email: {
      type: String,
   },
   role: {
      type: String,
   },
   password: {
      type: String,
   },
});

module.exports = new mongoose.model("User", userSchema);
