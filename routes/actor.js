const express = require("express");
const router = express.Router();
const { addActor, actorList } = require("../controllers/actor");

router.post("/add", addActor);
router.get("/list", actorList);

module.exports = router;
