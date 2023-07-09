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

movieSchema.query = {
   search: function (arg) {
      return this.find({ title: new RegExp(arg, "i") });
   },
   paginate: function (page = 1, limit = 10) {
      return this.find({})
         .limit(limit * 1)
         .skip((page - 1) * limit);
   },
   sortBy: function (data) {
      return this.find({}).sort({ title: data });
   },
};

module.exports = new mongoose.model("Movie", movieSchema);
