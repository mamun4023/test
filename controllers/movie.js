const multer = require("multer");
const movieModel = require("../models/movie");

const addMovie = async (req, res, next) => {
   try {
      const imagefile = req.files;
      const imagePath = [];

      for (let i = 0; i < imagefile.length; i++) {
         imagePath.push(imagefile[i].path);
      }

      const newMovie = new movieModel({
         title: req.body.title,
         runtime: req.body.runtime,
         releaseDate: req.body.releaseDate,
         actors: req.body.actors,
         directors: req.body.directors,
         producers: req.body.producers,
         images: imagePath,
      });

      const result = await newMovie.save();
      if (!result) {
         return res.status(404).json({
            message: "Failed to add movie",
         });
      }

      return res.status(202).json({
         message: "Movie has been added",
         data: result,
      });
   } catch (err) {
      next(err);
   }
};

const movieList = async (req, res, next) => {
   try {
      const result = await movieModel
         .find({})
         // .populate({ path: "actors", select: ["name", "age", "category"] })
         // .populate({ path: "directors", select: ["name", "age", "category"] })
         .populate({ path: "producers", select: ["name", "age", "category"] });
      return res.status(200).json({
         message: "Data has been fetched",
         data: result,
      });
   } catch (err) {
      next(err);
   }
};

module.exports = {
   addMovie,
   movieList,
};
