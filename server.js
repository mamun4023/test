const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT;

// DB connection
mongoose.connect(process.env.DB_STRING).then(() => {
   console.log("DB connected");
});

app.use((err, req, res, next) => {
   if (err) {
      return res.status(404).json({
         error: err.message,
      });
   }
});

app.use("*", (req, res) => {
   return res.status(400).json({
      error: "Route does not exist",
   });
});

app.listen(PORT, () => {
   console.log("server running at", PORT);
});