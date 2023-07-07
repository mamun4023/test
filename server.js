const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT;

// routes
const userRoutes = require("./routes/user");
const movieRoutes = require("./routes/movie");
const actorRoutes = require("./routes/actor");

// DB connection
mongoose.connect(process.env.DB_STRING).then(() => {
   console.log("DB connected");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

// routes
app.use("/user", userRoutes);
app.use("/movie", movieRoutes);
app.use("/actor", actorRoutes);

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
