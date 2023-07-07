const movieModel = require("../models/movie");

const addMovie = async (req, res, next) => {
   const { title, runtime, actors, directors, producers, releaseDate } = req.body;

   const newMovie = new movieModel({
      title,
      runtime,
      actors,
      directors,
      producers,
      releaseDate,
   });

   res.send(newMovie);

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
};

const movieList = async (req, res, next) => {
   res.send("movie list");
};

module.exports = {
   addMovie,
   movieList,
};
