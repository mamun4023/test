const addMovie = async (req, res, next) => {
   res.send("move route");
};

const movieList = async (req, res, next) => {
   res.send("movie list");
};

module.exports = {
   addMovie,
   movieList,
};
