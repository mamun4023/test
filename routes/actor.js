const express = require("express");
const router = express.Router();
const { addActor, actorList } = require("../controllers/actor");
const { isAdmin, isUser } = require("../middlewares/auth");

router.post("/add", isAdmin, addActor);
router.get("/list", isUser, actorList);

module.exports = router;
