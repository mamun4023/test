const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
   {
      title: {
         type: String,
      },
      runtime: {
         type: String,
      },
      releaseDate: {
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

      images: [],
   },
   { timestamps: true }
);

module.exports = new mongoose.model("Movie", movieSchema);
