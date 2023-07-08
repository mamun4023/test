const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || process.env.NODE_ENV;

// const multer = require("multer");

// const multerConfigure = multer.diskStorage({
//    destination: "./uploads",
//    filename: (res, file, cb) => {
//       let fileName = Date.now() + "-" + file.originalname;
//       cb(null, fileName);
//    },
// });

//  const upload = multer({ storage: multerConfigure });

// routes
const userRoutes = require("./routes/user");
const movieRoutes = require("./routes/movie");
const actorRoutes = require("./routes/actor");
const directorRoutes = require("./routes/director");
const producerRoutes = require("./routes/producer");

// DB connection
mongoose.connect(process.env.DB_STRING).then(() => {
   console.log("DB connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

// routes
app.use("/user", userRoutes);
app.use("/movie", movieRoutes);
app.use("/actor", actorRoutes);
app.use("/director", directorRoutes);
app.use("/producer", producerRoutes);

// app.post("/upload", upload.single("avatar"), (req, res, next) => {
//    console.log(req.file.path);
//    return res.status(202).json({
//       message: "image Saved",
//    });
// });

// app.post("/form", upload.single("avatar"), (req, res) => {
//    // Access the form data sent from Postman
//    const formData = req.body;

//    // Do something with the form data...
//    console.log(formData);

//    // Send a response
//    res.send("Form data received");
// });

app.use((err, req, res, next) => {
   if (err) {
      return res.status(400).json({
         error: err.message,
      });
   }
});

app.use("*", (req, res) => {
   return res.status(404).json({
      error: "Route does not exist",
   });
});

app.listen(PORT, () => {
   console.log("server running at", PORT);
});
