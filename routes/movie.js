const express = require("express");
const router = express.Router();
const { addMovie, movieList } = require("../controllers/movie");
const { isAdmin, isUser } = require("../middlewares/auth");

router.post("/add", isAdmin, addMovie);
router.get("/list", isUser, movieList);

module.exports = router;
