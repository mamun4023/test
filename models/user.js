const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   name: {
      type: String,
   },
   email: {
      type: String,
   },
   passwrod: {
      type: String,
   },
   role: {
      type: String,
   },
});

module.exports = new mongoose.model("User", userSchema);
