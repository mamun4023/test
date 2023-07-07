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
      director: [
         {
            type: mongoose.Schema.ObjectId,
            ref: "Director",
         },
      ],
      producer: [
         {
            type: mongoose.Schema.ObjectId,
            ref: "Producer",
         },
      ],

      releaseDate: {
         type: new Date(),
      },
   },
   { timestamps }
);
