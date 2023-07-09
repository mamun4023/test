const multer = require("multer");
const movieModel = require("../models/movie");
const { query } = require("express");

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
      const { page, limit, search } = req.query;

      const total = await movieModel.count();
      const result = await movieModel
         .find({})
         .search(search)
         .paginate(page, limit)
         .populate("actors")
         .populate("directors")
         .populate({ path: "producers", select: ["name", "age", "category"] });
      return res.status(200).json({
         message: "Data has been fetched",
         total: total,
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
