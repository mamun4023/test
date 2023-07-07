const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
   {
      title: {
         type: String,
      },
      runtime: {
         type: String,
      },
      actors: [
         {
            type: mongoose.Schema.ObjectId,
            ref: "Actor",
         },
      ],
      directors: [
         {
            type: mongoose.Schema.ObjectId,
            ref: "Director",
         },
      ],
      producers: [
         {
            type: mongoose.Schema.ObjectId,
            ref: "Producer",
         },
      ],
      releaseDate: {
         type: String,
      },
   },
   { timestamps: true }
);

module.exports = new mongoose.model("Movie", movieSchema);
