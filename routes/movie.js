const express = require("express");
const router = express.Router();
const { addMovie, movieList } = require("../controllers/movie");
const { isAdmin, isUser } = require("../middlewares/auth");
const upload = require("../middlewares/multer");

router.post("/add", isAdmin, upload.array("image", 2), addMovie);
router.get("/list", isUser, movieList);

module.exports = router;
