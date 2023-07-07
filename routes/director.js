const express = require("express");
const router = express.Router();
const { addDirector, directorList } = require("../controllers/director");
const { isAdmin, isUser } = require("../middlewares/auth");

router.post("/add", isAdmin, addDirector);
router.get("/list", isUser, directorList);

module.exports = router;
